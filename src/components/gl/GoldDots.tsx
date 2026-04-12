import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const COUNT = 120;

export function GoldDots() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, speeds, phases, sizes } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const speeds = new Float32Array(COUNT);
    const phases = new Float32Array(COUNT);
    const sizes = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const r = 1.5 + Math.random() * 6.0;
      positions[i * 3 + 0] = Math.cos(theta) * r;
      positions[i * 3 + 1] = (Math.random() - 0.3) * 4.0;
      positions[i * 3 + 2] = Math.sin(theta) * r;
      speeds[i] = 0.08 + Math.random() * 0.18;
      phases[i] = Math.random() * Math.PI * 2;
      sizes[i] = 18 + Math.random() * 24;
    }

    return { positions, speeds, phases, sizes };
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions.slice(), 3));
    geo.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    geo.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
    geo.setAttribute("aSpeed", new THREE.BufferAttribute(speeds, 1));
    return geo;
  }, [positions, sizes, phases, speeds]);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: /* glsl */ `
        attribute float aSize;
        attribute float aPhase;
        attribute float aSpeed;
        uniform float uTime;
        varying float vAlpha;

        void main() {
          vec3 pos = position;

          // Плавное движение вверх по кругу
          float angle = uTime * aSpeed + aPhase;
          pos.x += sin(angle * 0.7) * 0.3;
          pos.z += cos(angle * 0.5) * 0.3;
          pos.y += sin(uTime * aSpeed * 0.6 + aPhase) * 0.4;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = aSize * (1.0 / -mvPosition.z);

          // Мерцание
          float flicker = 0.5 + 0.5 * sin(uTime * aSpeed * 3.0 + aPhase * 5.0);
          vAlpha = 0.4 + flicker * 0.6;
        }
      `,
      fragmentShader: /* glsl */ `
        varying float vAlpha;

        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);

          // Мягкий круг с ореолом
          float core = 1.0 - smoothstep(0.0, 0.18, d);
          float glow = 1.0 - smoothstep(0.1, 0.5, d);

          float alpha = (core * 0.9 + glow * 0.3) * vAlpha;
          if (alpha < 0.01) discard;

          // Золотой цвет
          vec3 gold = vec3(0.95, 0.78, 0.28);
          vec3 color = mix(gold * 0.6, gold, core);

          gl_FragColor = vec4(color, alpha);
        }
      `,
      uniforms: {
        uTime: { value: 0 },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    (pointsRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value =
      state.clock.elapsedTime;
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}
