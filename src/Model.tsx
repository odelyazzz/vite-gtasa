import React, { useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { applyProps } from "@react-three/fiber";

const Model = (props) => {
  const { scene, nodes, materials } = useGLTF(
    "../public/zr350_-_gta_san_andreas_w.i.p.glb"
  );

  useLayoutEffect(() => {
    console.log(materials);
    applyProps(materials.Windows, {
      color: "black",
      roughness: 0,
      clearcoat: 0.9,
    });
    applyProps(materials.Rubber, {
      color: "#222",
      roughness: 0.6,
      roughnessMap: null,
      normalScale: [4, 4],
    });
  }, [nodes, materials]);

  return <primitive object={scene} {...props} />;
};

export default Model;
