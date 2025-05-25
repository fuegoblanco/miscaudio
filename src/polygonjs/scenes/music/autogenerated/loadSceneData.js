import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1748173358322",
  root: "1748160046452",
  nodes: {
    ground: "1748161444378",
    "ground/MAT": "1748157925413",
    "ground/MAT/meshStandardBuilder1": "1748173357495",
    COP: "1748160046452",
    lights: "1748173357495",
    cameras: "1748157925413",
    "cameras/cameraControls1": "1748162276999",
    positionalAudio1: "1748173358322",
    eq_obj: "1748161876904",
  },
  shaders: {
    "/ground/MAT/meshStandardBuilder1": {
      vertex: "1748160046452",
      fragment: "1748160046452",
      "customDepthMaterial.vertex": "1748160046452",
      "customDepthMaterial.fragment": "1748160046452",
      "customDistanceMaterial.vertex": "1748160046452",
      "customDistanceMaterial.fragment": "1748160046452",
      "customDepthDOFMaterial.vertex": "1748160046452",
      "customDepthDOFMaterial.fragment": "1748160046452",
    },
  },
  jsFunctionBodies: {},
};

export const loadSceneData_music = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "music",
    urlPrefix: sceneDataRoot + "/music",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
