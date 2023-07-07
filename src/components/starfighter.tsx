import StarfighterModel from "./model";

function Starfighter() {
  return (
    <>
      <group position={[-0.5, 0.09, -0.5]} rotation={[0, Math.PI / 4, 0]}>
        <StarfighterModel />
      </group>
    </>
  );
}

export default Starfighter;
