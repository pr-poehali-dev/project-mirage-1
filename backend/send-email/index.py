import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта на почту психолога Ольги"""

    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    telegram = body.get("telegram", "").strip()
    message = body.get("message", "").strip()
    service = body.get("service", "").strip()

    if not name or not (phone or telegram):
        return {
            "statusCode": 400,
            "headers": headers,
            "body": json.dumps({"error": "Укажите имя и телефон или Telegram"}, ensure_ascii=False),
        }

    smtp_password = os.environ["SMTP_PASSWORD"]
    from_email = "igraol@yandex.ru"
    to_email = "igraol@yandex.ru"

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Новая заявка с сайта — {name}"
    msg["From"] = from_email
    msg["To"] = to_email

    text_body = f"""
Новая заявка с сайта!

Имя: {name}
{"Телефон: " + phone if phone else ""}
{"Telegram: " + telegram if telegram else ""}
{"Услуга: " + service if service else ""}
{"Сообщение: " + message if message else ""}
""".strip()

    html_body = f"""
<div style="font-family: Arial, sans-serif; max-width: 480px; padding: 24px; background: #f9f9f9; border-radius: 12px;">
  <h2 style="color: #4a7c6f; margin-top: 0;">Новая заявка с сайта</h2>
  <table style="width: 100%; border-collapse: collapse;">
    <tr><td style="padding: 8px 0; color: #666; width: 120px;">Имя</td><td style="padding: 8px 0; font-weight: bold;">{name}</td></tr>
    {"<tr><td style='padding: 8px 0; color: #666;'>Телефон</td><td style='padding: 8px 0; font-weight: bold;'>" + phone + "</td></tr>" if phone else ""}
    {"<tr><td style='padding: 8px 0; color: #666;'>Telegram</td><td style='padding: 8px 0; font-weight: bold;'>" + telegram + "</td></tr>" if telegram else ""}
    {"<tr><td style='padding: 8px 0; color: #666;'>Услуга</td><td style='padding: 8px 0;'>" + service + "</td></tr>" if service else ""}
    {"<tr><td style='padding: 8px 0; color: #666; vertical-align: top;'>Сообщение</td><td style='padding: 8px 0;'>" + message + "</td></tr>" if message else ""}
  </table>
</div>
"""

    msg.attach(MIMEText(text_body, "plain", "utf-8"))
    msg.attach(MIMEText(html_body, "html", "utf-8"))

    with smtplib.SMTP_SSL("smtp.yandex.ru", 465) as server:
        server.login(from_email, smtp_password)
        server.sendmail(from_email, to_email, msg.as_string())

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"ok": True}),
    }