import { RoundedBox } from "@react-three/drei";

type BaseProps = {
  size?: number;
};

function Base({ size = 6 }: BaseProps) {
  return (
    <group>
      <mesh
        scale={[size, size * 2, size]}
        position={[0, -3 * 2, 0]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <RoundedBox args={[1, 1, 1]} radius={0.02} receiveShadow>
          <meshStandardMaterial color="#cba65c" />
        </RoundedBox>
      </mesh>
      <mesh
        scale={[size * 0.9, size * 0.03, size * 0.9]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <RoundedBox args={[1, 1, 1]} radius={0.01} receiveShadow castShadow>
          <meshStandardMaterial color="#62be4f" />
        </RoundedBox>
      </mesh>
    </group>
  );
}

export default Base;
