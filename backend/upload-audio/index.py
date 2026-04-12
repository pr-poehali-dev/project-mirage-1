import json
import os
import base64
import boto3


def handler(event: dict, context) -> dict:
    """Загружает аудио-файл в S3 хранилище проекта"""

    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    file_data = body.get("file")
    filename = body.get("filename", "audio.mp3")

    if not file_data:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": json.dumps({"error": "Файл не передан"}),
        }

    audio_bytes = base64.b64decode(file_data)

    s3 = boto3.client(
        "s3",
        endpoint_url="https://bucket.poehali.dev",
        aws_access_key_id=os.environ["AWS_ACCESS_KEY_ID"],
        aws_secret_access_key=os.environ["AWS_SECRET_ACCESS_KEY"],
    )

    key = f"audio/{filename}"
    s3.put_object(
        Bucket="files",
        Key=key,
        Body=audio_bytes,
        ContentType="audio/mpeg",
    )

    cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{key}"

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"url": cdn_url}),
    }
