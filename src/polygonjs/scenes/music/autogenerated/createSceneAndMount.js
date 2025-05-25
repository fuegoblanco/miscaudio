import {loadScene_music} from './loadScene.js';
import {sceneData} from './scene.js'

export const createSceneAndMount_music = async function (options={}) {
	if(options && options.createViewer == null){
		options.createViewer = true;
	}
	options.sceneData = sceneData;
	return loadScene_music(options);
};
