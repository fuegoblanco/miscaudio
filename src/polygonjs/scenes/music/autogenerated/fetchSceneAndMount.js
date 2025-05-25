import { loadScene_music } from "./loadScene.js";

export const fetchSceneAndMount_music = async function (options = {}) {
  if (options && options.createViewer == null) {
    options.createViewer = true;
  }
  return loadScene_music(options);
};
