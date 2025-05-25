// audio
import { AMSynthAudioNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/audio/AMSynth";
import { FFTAudioNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/audio/FFT";
import { EnvelopeAudioNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/audio/Envelope";
import { FileAudioNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/audio/File";
import { MeterAudioNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/audio/Meter";
import { NullAudioNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/audio/Null";
import { PlayInstrumentAudioNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/audio/PlayInstrument";
import { WaveformAudioNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/audio/Waveform";
// cop
import { EnvMapCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/EnvMap";
import { ImageCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/Image";
import { ImageEXRCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/ImageEXR";
// event
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";
// mat
import { MeshStandardBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandardBuilder";
// obj
import { AudioListenerObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/AudioListener";
import { CopNetworkObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/CopNetwork";
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
import { PositionalAudioObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/PositionalAudio";
// sop
import { BoxSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Box";
import { CameraControlsSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CameraControls";
import { HemisphereLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/HemisphereLight";
import { MaterialSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material";
import { MaterialsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork";
import { MergeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge";
import { PerspectiveCameraSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PerspectiveCamera";
import { PolarTransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PolarTransform";
import { SpotLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/SpotLight";

export const requiredImports_music = {
  nodes: [
    AMSynthAudioNode,
    FFTAudioNode,
    EnvelopeAudioNode,
    FileAudioNode,
    MeterAudioNode,
    NullAudioNode,
    PlayInstrumentAudioNode,
    WaveformAudioNode,
    EnvMapCopNode,
    ImageCopNode,
    ImageEXRCopNode,
    CameraOrbitControlsEventNode,
    MeshStandardBuilderMatNode,
    AudioListenerObjNode,
    CopNetworkObjNode,
    GeoObjNode,
    PositionalAudioObjNode,
    BoxSopNode,
    CameraControlsSopNode,
    HemisphereLightSopNode,
    MaterialSopNode,
    MaterialsNetworkSopNode,
    MergeSopNode,
    PerspectiveCameraSopNode,
    PolarTransformSopNode,
    SpotLightSopNode,
  ],
  operations: [],
  jsFunctions: [],
};
