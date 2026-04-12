import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const COUNT = 7;

const NOISE_SCALE = 0.6;
const NOISE_INTENSITY = 0.52;
const TIME_SCALE = 1.0;
const LOOP_PERIOD = 24.0;

// Компактные смещения 7 точек относительно центра группы
const offsets: [number, number, number][] = [
  [0.0,   0.0,   0.0],
  [0.18,  0.12,  0.05],
  [-0.15, 0.08, -0.10],
  [0.08, -0.14,  0.12],
  [-0.06,-0.10,  0.18],
  [0.22, -0.06, -0.08],
  [-0.10, 0.18, -0.14],
];

function periodicNoise(px: number, pz: number, offset: [number,number,number], t: number) {
  const [ox, oy] = offset;
  const x = px + ox;
  const z = pz + oy;
  let n = 0;
  n += Math.sin(x * 2.0 + t) * Math.cos(z * 1.5 + t);
  n += Math.sin(x * 3.2 + t * 2.0) * Math.cos(z * 2.1 + t) * 0.6;
  n += Math.sin(x * 1.7 + t) * Math.cos(z * 2.8 + t * 3.0) * 0.4;
  n += Math.sin(x * z * 0.5 + t * 2.0) * 0.3;
  return n * 0.3;
}

export function GoldDots() {
  const pointsRef = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const idx = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) idx[i] = i;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aIndex", new THREE.BufferAttribute(idx, 1));
    return geo;
  }, []);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: /* glsl */ `
        attribute float aIndex;
        uniform float uTime;
        varying float vAlpha;

        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          float sizeMult = aIndex < 0.5 ? 1.0 : 0.6 + 0.4 * (1.0 - aIndex / 7.0);
          gl_PointSize = 80.0 * sizeMult * (1.0 / -mvPosition.z);
          float flicker = 0.55 + 0.45 * sin(uTime * 2.8 + aIndex * 1.57);
          vAlpha = flicker;
        }
      `,
      fragmentShader: /* glsl */ `
        varying float vAlpha;

        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          float core = 1.0 - smoothstep(0.0, 0.13, d);
          float glow = 1.0 - smoothstep(0.0, 0.5, d);
          float alpha = (core * 1.0 + glow * 0.9) * vAlpha;
          if (alpha < 0.01) discard;
          vec3 color = mix(vec3(0.98, 0.72, 0.12), vec3(1.0, 0.97, 0.75), core);
          gl_FragColor = vec4(color, alpha);
        }
      `,
      uniforms: { uTime: { value: 0 } },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.elapsedTime;
    (pointsRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = t;

    const ct = t * TIME_SCALE * (Math.PI * 2 / LOOP_PERIOD);

    // Движение группы слева направо, циклично
    const groupX = -8.0 + ((t * 0.5) % 16.0);
    const groupZ = -0.5; // ближе к камере

    // Волновое смещение центра — та же формула что в simulationMaterial
    const dx = periodicNoise(groupX * NOISE_SCALE, groupZ * NOISE_SCALE, [0, 0, 0], ct) * NOISE_INTENSITY;
    const dy = periodicNoise(groupX * NOISE_SCALE, groupZ * NOISE_SCALE, [50, 0, 0], ct + 2.094) * NOISE_INTENSITY;
    const dz = periodicNoise(groupX * NOISE_SCALE, groupZ * NOISE_SCALE, [0, 50, 0], ct + 4.188) * NOISE_INTENSITY;

    const cx = groupX + dx;
    const cy = dy;
    const cz = groupZ + dz;

    const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute;
    for (let i = 0; i < COUNT; i++) {
      posAttr.setXYZ(i, cx + offsets[i][0], cy + offsets[i][1], cz + offsets[i][2]);
    }
    posAttr.needsUpdate = true;
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}