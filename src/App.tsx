import "./App.css";
import { Scene01 } from "./polygonjs/scenes/Scene01";

function App() {
	return (
		<div className="App">
			<Scene01></Scene01>
			<a className="page-title" href="https://polygonjs.com">
				<img className="page-title-logo" src="./polygonjs.png" />
				<span className="page-title-text">Polygon Template</span>
			</a>
		</div>
	);
}

export default App;
