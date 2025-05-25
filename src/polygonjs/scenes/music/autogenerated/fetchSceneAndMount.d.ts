import { LoadSceneOptions, LoadedData } from "./loadScene";

type FetchSceneAndMount_music = (
  options?: LoadSceneOptions
) => Promise<LoadedData>;

export const fetchSceneAndMount_music: FetchSceneAndMount_music;
