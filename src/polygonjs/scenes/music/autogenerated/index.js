import { createSceneAndMount_music } from "./createSceneAndMount.js";

export async function loadSceneAndMount_music(options) {
  const { publicPath, onProgress } = options;
  const domElement = options.domElement || "polygonjs-app-music";
  const loadedData = await createSceneAndMount_music({
    domElement,
    autoPlay: true,
    onProgress,
    sceneDataRoot: publicPath + "/polygonjs/scenes",
    assetsRoot: publicPath,
    libsRootPrefix: publicPath,
  });
  return loadedData;
}
