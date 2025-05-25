import { SceneJsonExporterData } from "@polygonjs/polygonjs/dist/src/engine/io/json/export/Scene";
import { BaseViewerType } from "@polygonjs/polygonjs/dist/src/engine/viewers/_Base";
import { PolySceneWithNodeMap_music } from "./PolySceneWithNodeMap";
import { WebGLRenderer } from "three";

export type OnProgressCallback = (ratio: number, args: any) => void;
export type ConfigureSceneData = (sceneData: SceneJsonExporterData) => void;

export interface LoadSceneOptions {
  sceneData?: SceneJsonExporterData;
  onProgress?: OnProgressCallback;
  domElement?: HTMLElement | string;
  loadModules?: boolean;
  runRegister?: boolean;
  configureSceneData?: ConfigureSceneData;
  //
  baseUrl?: string;
  sceneDataRoot?: string;
  assetsRoot?: string;
  libsRootPrefix?: string;
  //
  autoPlay?: boolean;
  createViewer?: boolean;
  printWarnings?: boolean;
  renderer?: WebGLRenderer;
  cameraMaskOverride?: string;
}
export interface LoadedData {
  scene: PolySceneWithNodeMap_music;
  viewer: BaseViewerType | undefined;
}
export type LoadScene_music = (
  options?: LoadSceneOptions
) => Promise<LoadedData>;

export const loadScene_music: LoadScene_music;
