import { PolygonjsScene } from "@polygonjs/react";
import { loadScene_scene_01 } from "./scene_01/autogenerated/loadScene";
import type { PolySceneWithNodeMap_scene_01 } from "./scene_01/autogenerated/PolySceneWithNodeMap";

function onSceneReady_01(scene: PolySceneWithNodeMap_scene_01) {
	// console.log('onSceneReady 01', scene.name());
}

export const Scene01 = () => {
	return (
		<PolygonjsScene
			key="scene_01"
			sceneName="scene_01"
			loadFunction={loadScene_scene_01}
			onSceneReady={onSceneReady_01}
			render={true}
			baseUrl={import.meta.env.BASE_URL}
		/>
	);
};
