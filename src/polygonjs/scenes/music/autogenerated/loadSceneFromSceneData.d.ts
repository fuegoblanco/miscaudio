import { Poly } from "@polygonjs/polygonjs/dist/src/engine/Poly";
import { SceneJsonExporterData } from "@polygonjs/polygonjs/dist/src/engine/io/json/export/Scene";
import { OnProgressCallback } from "./loadSceneData";
import { PolySceneWithNodeMap_music } from "./PolySceneWithNodeMap";
import { BaseViewerType } from "@polygonjs/polygonjs/dist/src/engine/viewers/_Base";
import { WebGLRenderer } from "three";

export interface loadSceneOptions {
  sceneData: SceneJsonExporterData;
  onProgress?: OnProgressCallback;
  autoPlay?: boolean;
  createViewer?: boolean;
  domElement?: HTMLElement | string;
  runRegister?: boolean;
  assetsRoot?: string;
  libsRootPrefix?: string;
  printWarnings?: boolean;
  renderer?: WebGLRenderer;
  cameraMaskOverride?: string;
}
interface LoadedData {
  scene: PolySceneWithNodeMap_music;
  viewer: BaseViewerType | undefined;
}
export type LoadSceneMethod = (
  options: loadSceneOptions
) => Promise<LoadedData | undefined>;

declare const loadSceneFromSceneData_music: LoadSceneMethod;

export { Poly, loadSceneFromSceneData_music };
