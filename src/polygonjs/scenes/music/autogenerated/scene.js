export const sceneData = {
  properties: {
    frame: 92900,
    maxFrame: 600,
    maxFrameLocked: false,
    realtimeState: true,
    mainCameraPath: "/cameras/cameras:sopGroup/perspectiveCamera1",
    versions: {
      polygonjs: "1.5.94",
    },
  },
  root: {
    type: "root",
    nodes: {
      audioListener1: {
        type: "audioListener",
        flags: {
          display: true,
        },
      },
      ground: {
        type: "geo",
        nodes: {
          material1: {
            type: "material",
            params: {
              material: "../MAT/meshStandardBuilder1",
            },
            inputs: ["box1"],
            flags: {
              display: true,
            },
          },
          box1: {
            type: "box",
            params: {
              sizes: [9.98, 1, 9.98],
              center: [0, -1.1441389865881548, 0],
            },
          },
          MAT: {
            type: "materialsNetwork",
            nodes: {
              meshStandardBuilder1: {
                type: "meshStandardBuilder",
                nodes: {
                  globals1: {
                    type: "globals",
                  },
                  output1: {
                    type: "output",
                    inputs: [
                      null,
                      null,
                      {
                        index: 2,
                        inputName: "color",
                        node: "mix1",
                        output: "mix",
                      },
                    ],
                  },
                  vec3ToFloat1: {
                    type: "vec3ToFloat",
                    params: {
                      vec: {
                        overriden_options: {},
                      },
                    },
                    inputs: [
                      {
                        index: 0,
                        inputName: "vec",
                        node: "globals1",
                        output: "position",
                      },
                    ],
                  },
                  floatToVec2_1: {
                    type: "floatToVec2",
                    params: {
                      x: {
                        overriden_options: {},
                      },
                      y: {
                        overriden_options: {},
                      },
                    },
                    inputs: [
                      {
                        index: 0,
                        inputName: "x",
                        node: "vec3ToFloat1",
                        output: "x",
                      },
                      {
                        index: 1,
                        inputName: "y",
                        node: "vec3ToFloat1",
                        output: "z",
                      },
                    ],
                  },
                  checkers1: {
                    type: "checkers",
                    params: {
                      uv: {
                        overriden_options: {},
                      },
                      freq: {
                        overriden_options: {},
                      },
                      freqMult: {
                        overriden_options: {},
                      },
                    },
                    inputs: [
                      {
                        index: 0,
                        inputName: "uv",
                        node: "floatToVec2_1",
                        output: "vec2",
                      },
                    ],
                  },
                  mix1: {
                    type: "mix",
                    params: {
                      value0: {
                        type: "vector3",
                        default_value: [0, 0, 0],
                        options: {
                          spare: true,
                          editable: false,
                          computeOnDirty: true,
                          dependentOnFoundParam: false,
                        },
                      },
                      value1: {
                        type: "vector3",
                        default_value: [0, 0, 0],
                        options: {
                          spare: true,
                          editable: false,
                          computeOnDirty: true,
                          dependentOnFoundParam: false,
                        },
                        overriden_options: {},
                      },
                      blend: {
                        type: "float",
                        default_value: 0.5,
                        options: {
                          spare: true,
                          editable: false,
                          computeOnDirty: true,
                          dependentOnFoundParam: false,
                        },
                        overriden_options: {},
                      },
                    },
                    inputs: [
                      {
                        index: 0,
                        inputName: "value0",
                        node: "constant1",
                        output: "val",
                      },
                      {
                        index: 1,
                        inputName: "value1",
                        node: "constant2",
                        output: "val",
                      },
                      {
                        index: 2,
                        inputName: "blend",
                        node: "checkers1",
                        output: "checker",
                      },
                    ],
                    connection_points: {
                      in: [
                        {
                          name: "value0",
                          type: "vec3",
                        },
                        {
                          name: "value1",
                          type: "vec3",
                        },
                        {
                          name: "blend",
                          type: "float",
                        },
                      ],
                      out: [
                        {
                          name: "mix",
                          type: "vec3",
                        },
                      ],
                    },
                  },
                  constant1: {
                    type: "constant",
                    params: {
                      type: 4,
                      color: [1, 1, 1],
                      asColor: true,
                    },
                    connection_points: {
                      in: [],
                      out: [
                        {
                          name: "val",
                          type: "vec3",
                        },
                      ],
                    },
                  },
                  constant2: {
                    type: "constant",
                    params: {
                      type: 4,
                      asColor: true,
                    },
                    connection_points: {
                      in: [],
                      out: [
                        {
                          name: "val",
                          type: "vec3",
                        },
                      ],
                    },
                  },
                },
                persisted_config: {
                  material: {
                    metadata: {
                      version: 4.6,
                      type: "Material",
                      generator: "Material.toJSON",
                    },
                    uuid: "/ground/MAT/meshStandardBuilder1-main",
                    type: "MeshStandardMaterial",
                    color: 16777215,
                    roughness: 1,
                    metalness: 0,
                    emissive: 0,
                    envMapRotation: [0, 0, 0, "XYZ"],
                    envMapIntensity: 1,
                    blendColor: 0,
                    fog: false,
                  },
                  onBeforeCompileDataJSONWithoutShaders: {
                    paramConfigs: [],
                    timeDependent: false,
                    resolutionDependent: false,
                    raymarchingLightsWorldCoordsDependent: false,
                  },
                  customMaterials: {
                    customDepthMaterial: {
                      material: {
                        metadata: {
                          version: 4.6,
                          type: "Material",
                          generator: "Material.toJSON",
                        },
                        uuid: "/ground/MAT/meshStandardBuilder1-customDepthMaterial",
                        type: "MeshDepthMaterial",
                        name: "customDepthMaterial",
                        side: 1,
                        blendColor: 0,
                        forceSinglePass: true,
                        depthPacking: 3201,
                      },
                      onBeforeCompileDataJSONWithoutShaders: {
                        paramConfigs: [],
                        timeDependent: false,
                        resolutionDependent: false,
                        raymarchingLightsWorldCoordsDependent: false,
                      },
                    },
                    customDistanceMaterial: {
                      material: {
                        metadata: {
                          version: 4.6,
                          type: "Material",
                          generator: "Material.toJSON",
                        },
                        uuid: "/ground/MAT/meshStandardBuilder1-customDistanceMaterial",
                        type: "MeshDistanceMaterial",
                        name: "customDistanceMaterial",
                        blendColor: 0,
                      },
                      onBeforeCompileDataJSONWithoutShaders: {
                        paramConfigs: [],
                        timeDependent: false,
                        resolutionDependent: false,
                        raymarchingLightsWorldCoordsDependent: false,
                      },
                    },
                    customDepthDOFMaterial: {
                      material: {
                        metadata: {
                          version: 4.6,
                          type: "Material",
                          generator: "Material.toJSON",
                        },
                        uuid: "/ground/MAT/meshStandardBuilder1-customDepthDOFMaterial",
                        type: "MeshDepthMaterial",
                        name: "customDepthDOFMaterial",
                        blendColor: 0,
                        depthPacking: 3200,
                      },
                      onBeforeCompileDataJSONWithoutShaders: {
                        paramConfigs: [],
                        timeDependent: false,
                        resolutionDependent: false,
                        raymarchingLightsWorldCoordsDependent: false,
                      },
                    },
                  },
                },
              },
            },
          },
        },
        params: {
          CADLinearTolerance: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADAngularTolerance: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADCurveAbscissa: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADCurveTolerance: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADDisplayEdges: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADEdgesColor: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADDisplayMeshes: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADMeshesColor: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADWireframe: {
            overriden_options: {
              callback: "{}",
            },
          },
          CSGFacetAngle: {
            overriden_options: {
              callback: "{}",
            },
          },
          CSGLinesColor: {
            overriden_options: {
              callback: "{}",
            },
          },
          CSGMeshesColor: {
            overriden_options: {
              callback: "{}",
            },
          },
          CSGWireframe: {
            overriden_options: {
              callback: "{}",
            },
          },
          QUADTriangles: {
            overriden_options: {
              callback: "{}",
            },
          },
          QUADWireframe: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetScale: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetDisplayLines: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetDisplaySharedFaces: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetDisplayPoints: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetDisplayCenter: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetDisplaySphere: {
            overriden_options: {
              callback: "{}",
            },
          },
        },
        flags: {
          display: true,
        },
      },
      COP: {
        type: "copNetwork",
        nodes: {
          envMap: {
            type: "envMap",
            inputs: ["imageEnv"],
          },
          imageEnv: {
            type: "imageEXR",
            params: {
              url: "textures/piz_compressed.exr?timestamp=1748157571351",
              tminFilter: true,
              tmagFilter: true,
              tanisotropy: true,
              useRendererMaxAnisotropy: true,
            },
          },
          image1: {
            type: "image",
            params: {
              url: "textures/uv.jpg?timestamp=1748157571351",
            },
          },
        },
      },
      lights: {
        type: "geo",
        nodes: {
          hemisphereLight1: {
            type: "hemisphereLight",
            params: {
              intensity: 1.06,
              position: [0, 0, 0],
            },
          },
          spotLight1: {
            type: "spotLight",
            params: {
              intensity: 2.3,
              angle: 90,
              penumbra: 0,
              decay: 0,
              distance: 20,
              castShadow: true,
            },
          },
          polarTransform1: {
            type: "polarTransform",
            params: {
              center: [0, 5, 0],
              latitude: 25.2,
              depth: 3,
            },
            inputs: ["spotLight1"],
          },
          merge1: {
            type: "merge",
            inputs: ["hemisphereLight1", "polarTransform1"],
            flags: {
              display: true,
            },
          },
        },
        params: {
          CADLinearTolerance: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADAngularTolerance: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADCurveAbscissa: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADCurveTolerance: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADDisplayEdges: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADEdgesColor: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADDisplayMeshes: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADMeshesColor: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADWireframe: {
            overriden_options: {
              callback: "{}",
            },
          },
          CSGFacetAngle: {
            overriden_options: {
              callback: "{}",
            },
          },
          CSGLinesColor: {
            overriden_options: {
              callback: "{}",
            },
          },
          CSGMeshesColor: {
            overriden_options: {
              callback: "{}",
            },
          },
          CSGWireframe: {
            overriden_options: {
              callback: "{}",
            },
          },
          QUADTriangles: {
            overriden_options: {
              callback: "{}",
            },
          },
          QUADWireframe: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetScale: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetDisplayLines: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetDisplaySharedFaces: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetDisplayPoints: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetDisplayCenter: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetDisplaySphere: {
            overriden_options: {
              callback: "{}",
            },
          },
        },
        flags: {
          display: true,
        },
      },
      cameras: {
        type: "geo",
        nodes: {
          perspectiveCamera1: {
            type: "perspectiveCamera",
            params: {
              position: [3.3, 3.3, 3.3],
            },
          },
          cameraControls1: {
            type: "cameraControls",
            nodes: {
              cameraOrbitControls1: {
                type: "cameraOrbitControls",
                params: {
                  target: [
                    -1.3733871910003512, 0.2988279362033921, 1.350702994671828,
                  ],
                },
              },
            },
            params: {
              node: "cameraOrbitControls1",
            },
            inputs: ["perspectiveCamera1"],
            flags: {
              display: true,
            },
          },
        },
        params: {
          CADLinearTolerance: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADAngularTolerance: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADCurveAbscissa: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADCurveTolerance: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADDisplayEdges: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADEdgesColor: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADDisplayMeshes: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADMeshesColor: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADWireframe: {
            overriden_options: {
              callback: "{}",
            },
          },
          CSGFacetAngle: {
            overriden_options: {
              callback: "{}",
            },
          },
          CSGLinesColor: {
            overriden_options: {
              callback: "{}",
            },
          },
          CSGMeshesColor: {
            overriden_options: {
              callback: "{}",
            },
          },
          CSGWireframe: {
            overriden_options: {
              callback: "{}",
            },
          },
          QUADTriangles: {
            overriden_options: {
              callback: "{}",
            },
          },
          QUADWireframe: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetScale: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetDisplayLines: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetDisplaySharedFaces: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetDisplayPoints: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetDisplayCenter: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetDisplaySphere: {
            overriden_options: {
              callback: "{}",
            },
          },
        },
        flags: {
          display: true,
        },
      },
      positionalAudio1: {
        type: "positionalAudio",
        nodes: {
          envelope1: {
            type: "envelope",
          },
          AMSynth1: {
            type: "AMSynth",
            inputs: ["envelope1"],
          },
          playInstrument1: {
            type: "playInstrument",
            inputs: ["waveform1"],
          },
          OUT: {
            type: "null",
            inputs: ["playInstrument1"],
          },
          file1: {
            type: "file",
            params: {
              url: "models/rain.mp3?timestamp=1748172217985",
              autostart: false,
              duration: 229.78466666666668,
              updateCurrentTimeParam: true,
              currentTime: 16.858666666666522,
            },
          },
          meter1: {
            type: "meter",
            params: {
              smoothing: 0.54,
              value: 0.04856906831264496,
              updateRangeParam: false,
            },
            inputs: ["file1"],
          },
          waveform1: {
            type: "waveform",
            params: {
              sizeExponent: 5,
              smoothing: 0.19,
              normalRange: false,
              range: [-0.02209554798901081, 0.0613713413476944],
              maxRange: [-0.9229664206504822, 0.9131957292556763],
            },
            inputs: ["FFT1"],
          },
          FFT1: {
            type: "FFT",
            params: {
              range: [1.466205712397084e-9, 0.01569412462413311],
              maxRange: [0, 0.08604095876216888],
            },
            inputs: ["meter1"],
          },
        },
        params: {
          audioNode: "OUT",
        },
        flags: {
          display: true,
        },
      },
      eq_obj: {
        type: "geo",
        nodes: {
          box1: {
            type: "box",
            params: {
              size: 0.52,
              sizes: [
                ".5",
                'ch("../../positionalAudio1/waveform1/rangex")*2+5',
                0.5,
              ],
              divisions: [0, 0, 0],
            },
            flags: {
              display: true,
            },
          },
        },
        params: {
          CADLinearTolerance: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADAngularTolerance: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADCurveAbscissa: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADCurveTolerance: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADDisplayEdges: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADEdgesColor: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADDisplayMeshes: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADMeshesColor: {
            overriden_options: {
              callback: "{}",
            },
          },
          CADWireframe: {
            overriden_options: {
              callback: "{}",
            },
          },
          CSGFacetAngle: {
            overriden_options: {
              callback: "{}",
            },
          },
          CSGLinesColor: {
            overriden_options: {
              callback: "{}",
            },
          },
          CSGMeshesColor: {
            overriden_options: {
              callback: "{}",
            },
          },
          CSGWireframe: {
            overriden_options: {
              callback: "{}",
            },
          },
          QUADTriangles: {
            overriden_options: {
              callback: "{}",
            },
          },
          QUADWireframe: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetScale: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetDisplayLines: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetDisplaySharedFaces: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetDisplayPoints: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetDisplayCenter: {
            overriden_options: {
              callback: "{}",
            },
          },
          TetDisplaySphere: {
            overriden_options: {
              callback: "{}",
            },
          },
        },
        flags: {
          display: true,
        },
      },
    },
    params: {
      mainCameraPath: "/cameras/cameras:sopGroup/perspectiveCamera1",
    },
  },
  ui: {
    nodes: {
      audioListener1: {
        pos: [-300, -250],
      },
      ground: {
        pos: [-100, -500],
        nodes: {
          material1: {
            pos: [0, 300],
          },
          box1: {
            pos: [0, 100],
          },
          MAT: {
            pos: [-200, 300],
            selection: ["meshStandardBuilder1"],
            nodes: {
              meshStandardBuilder1: {
                pos: [0, 200],
                selection: ["globals1"],
                nodes: {
                  globals1: {
                    pos: [-450, 0],
                  },
                  output1: {
                    pos: [400, 0],
                  },
                  vec3ToFloat1: {
                    pos: [-200, 200],
                  },
                  floatToVec2_1: {
                    pos: [-100, 200],
                  },
                  checkers1: {
                    pos: [50, 200],
                  },
                  mix1: {
                    pos: [250, 0],
                  },
                  constant1: {
                    pos: [100, -150],
                  },
                  constant2: {
                    pos: [0, 0],
                  },
                },
              },
            },
          },
        },
      },
      COP: {
        pos: [-300, -150],
        selection: ["image1"],
        nodes: {
          envMap: {
            pos: [50, 250],
          },
          imageEnv: {
            pos: [50, 100],
          },
          image1: {
            pos: [-200, 100],
          },
        },
      },
      lights: {
        pos: [-50, -250],
        nodes: {
          hemisphereLight1: {
            pos: [50, -50],
          },
          spotLight1: {
            pos: [300, -50],
          },
          polarTransform1: {
            pos: [150, 50],
          },
          merge1: {
            pos: [-150, 100],
          },
        },
      },
      cameras: {
        pos: [-50, -150],
        nodes: {
          perspectiveCamera1: {
            pos: [0, -50],
          },
          cameraControls1: {
            pos: [0, 150],
            nodes: {
              cameraOrbitControls1: {
                pos: [0, 0],
              },
            },
          },
        },
      },
      positionalAudio1: {
        pos: [-300, -350],
        selection: ["file1"],
        nodes: {
          envelope1: {
            pos: [0, -300],
          },
          AMSynth1: {
            pos: [0, -200],
          },
          playInstrument1: {
            pos: [-200, -50],
          },
          OUT: {
            pos: [0, 100],
          },
          file1: {
            pos: [-750, -700],
          },
          meter1: {
            pos: [-550, -450],
          },
          waveform1: {
            pos: [-250, -150],
          },
          FFT1: {
            pos: [-400, -250],
          },
        },
      },
      eq_obj: {
        pos: [-300, -500],
        nodes: {
          box1: {
            pos: [-500, -400],
          },
        },
      },
    },
  },
  shaders: {
    "/ground/MAT/meshStandardBuilder1": {
      vertex:
        "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n\n\n\n// /ground/MAT/meshStandardBuilder1/globals1\nvarying vec3 v_POLY_globals1_position;\n\n\n\n\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\n\n\n\t// /ground/MAT/meshStandardBuilder1/globals1\n\tv_POLY_globals1_position = vec3(position);\n\t\n\t// /ground/MAT/meshStandardBuilder1/output1\n\tvec3 transformed = position;\n\tvec3 objectNormal = normal;\n\t#ifdef USE_TANGENT\n\t\tvec3 objectTangent = vec3( tangent.xyz );\n\t#endif\n\n\n\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n// removed:\n//\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n// removed:\n//\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
      fragment:
        "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef USE_SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULAR_COLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n\tuniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\tuniform vec2 anisotropyVector;\n\t#ifdef USE_ANISOTROPYMAP\n\t\tuniform sampler2D anisotropyMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n\n\n\n// /ground/MAT/meshStandardBuilder1/checkers1\n// https://iquilezles.org/articles/checkerfiltering/\nfloat checkers(vec2 p) {\n\tvec2 s = sign(fract(p*.5)-.5);\n\treturn .5 - .5*s.x*s.y;\n}\nfloat checkersGrad( in vec2 p, in vec2 ddx, in vec2 ddy )\n{\n    // filter kernel\n    vec2 w = max(abs(ddx), abs(ddy)) + 0.01;\n    // analytical integral (box filter)\n    vec2 i = 2.0*(abs(fract((p-0.5*w)/2.0)-0.5)-abs(fract((p+0.5*w)/2.0)-0.5))/w;\n    // xor pattern\n    return 0.5 - 0.5*i.x*i.y;\n}\n\n\n\n\n\n\n\n\n// /ground/MAT/meshStandardBuilder1/globals1\nvarying vec3 v_POLY_globals1_position;\n\n\n\n\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nstruct SSSModel {\n\tbool isActive;\n\tvec3 color;\n\tfloat thickness;\n\tfloat power;\n\tfloat scale;\n\tfloat distortion;\n\tfloat ambient;\n\tfloat attenuation;\n};\n\nvoid RE_Direct_Scattering(\n\tconst in IncidentLight directLight,\n\tconst in vec3 geometryNormal,\n\tconst in vec3 geometryViewDir,\n\tconst in SSSModel sssModel,\n\tinout ReflectedLight reflectedLight\n\t){\n\tvec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * sssModel.distortion));\n\tfloat scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), sssModel.power) * sssModel.scale;\n\tvec3 scatteringIllu = (scatteringDot + sssModel.ambient) * (sssModel.color * (1.0-sssModel.thickness));\n\treflectedLight.directDiffuse += scatteringIllu * sssModel.attenuation * directLight.color;\n}\n\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\n\n\t// /ground/MAT/meshStandardBuilder1/constant1\n\tvec3 v_POLY_constant1_val = vec3(1.0, 1.0, 1.0);\n\t\n\t// /ground/MAT/meshStandardBuilder1/constant2\n\tvec3 v_POLY_constant2_val = vec3(0.0, 0.0, 0.0);\n\t\n\t// /ground/MAT/meshStandardBuilder1/vec3ToFloat1\n\tfloat v_POLY_vec3ToFloat1_x = v_POLY_globals1_position.x;\n\tfloat v_POLY_vec3ToFloat1_z = v_POLY_globals1_position.z;\n\t\n\t// /ground/MAT/meshStandardBuilder1/floatToVec2_1\n\tvec2 v_POLY_floatToVec2_1_vec2 = vec2(v_POLY_vec3ToFloat1_x, v_POLY_vec3ToFloat1_z);\n\t\n\t// /ground/MAT/meshStandardBuilder1/checkers1\n\tvec2 v_POLY_checkers1_coord = v_POLY_floatToVec2_1_vec2*vec2(1.0, 1.0)*1.0;\n\tfloat v_POLY_checkers1_checker = checkersGrad(v_POLY_checkers1_coord, dFdx(v_POLY_checkers1_coord), dFdy(v_POLY_checkers1_coord));\n\t\n\t// /ground/MAT/meshStandardBuilder1/mix1\n\tvec3 v_POLY_mix1_mix = mix(v_POLY_constant1_val, v_POLY_constant2_val, v_POLY_checkers1_checker);\n\t\n\t// /ground/MAT/meshStandardBuilder1/output1\n\tdiffuseColor.xyz = v_POLY_mix1_mix;\n\tfloat POLY_metalness = 1.0;\n\tfloat POLY_roughness = 1.0;\n\tvec3 POLY_emissive = vec3(1.0, 1.0, 1.0);\n\tSSSModel POLY_SSSModel = SSSModel(/*isActive*/false,/*color*/vec3(1.0, 1.0, 1.0), /*thickness*/0.1, /*power*/2.0, /*scale*/16.0, /*distortion*/0.1,/*ambient*/0.4,/*attenuation*/0.8 );\n\n\n\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive * POLY_emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\tfloat roughnessFactor = roughness * POLY_roughness;\n\n#ifdef USE_ROUGHNESSMAP\n\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\n\t// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\troughnessFactor *= texelRoughness.g;\n\n#endif\n\n\tfloat metalnessFactor = metalness * POLY_metalness;\n\n#ifdef USE_METALNESSMAP\n\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\n\t// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\tmetalnessFactor *= texelMetalness.b;\n\n#endif\n\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\nif(POLY_SSSModel.isActive){\n\tRE_Direct_Scattering(directLight, geometryNormal, geometryViewDir, POLY_SSSModel, reflectedLight);\n}\n\n\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n\t#endif\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      "customDepthMaterial.vertex":
        "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n\n\n\n// /ground/MAT/meshStandardBuilder1/globals1\nvarying vec3 v_POLY_globals1_position;\n\n\n\n\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n// removed:\n//\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n// removed:\n//\t#include <begin_vertex>\n\n\n\n\t// /ground/MAT/meshStandardBuilder1/globals1\n\tv_POLY_globals1_position = vec3(position);\n\t\n\t// /ground/MAT/meshStandardBuilder1/output1\n\tvec3 transformed = position;\n\tvec3 objectNormal = normal;\n\t#ifdef USE_TANGENT\n\t\tvec3 objectTangent = vec3( tangent.xyz );\n\t#endif\n\n\n\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
      "customDepthMaterial.fragment":
        "\n// INSERT DEFINES\n\n\n#if DEPTH_PACKING == 3200\n\n\tuniform float opacity;\n\n#endif\n\n#include <common>\n\n\n\n// /ground/MAT/meshStandardBuilder1/checkers1\n// https://iquilezles.org/articles/checkerfiltering/\nfloat checkers(vec2 p) {\n\tvec2 s = sign(fract(p*.5)-.5);\n\treturn .5 - .5*s.x*s.y;\n}\nfloat checkersGrad( in vec2 p, in vec2 ddx, in vec2 ddy )\n{\n    // filter kernel\n    vec2 w = max(abs(ddx), abs(ddy)) + 0.01;\n    // analytical integral (box filter)\n    vec2 i = 2.0*(abs(fract((p-0.5*w)/2.0)-0.5)-abs(fract((p+0.5*w)/2.0)-0.5))/w;\n    // xor pattern\n    return 0.5 - 0.5*i.x*i.y;\n}\n\n\n\n\n\n\n\n\n// /ground/MAT/meshStandardBuilder1/globals1\nvarying vec3 v_POLY_globals1_position;\n\n\n\n\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvarying vec2 vHighPrecisionZW;\n\nstruct SSSModel {\n\tbool isActive;\n\tvec3 color;\n\tfloat thickness;\n\tfloat power;\n\tfloat scale;\n\tfloat distortion;\n\tfloat ambient;\n\tfloat attenuation;\n};\n\nvoid RE_Direct_Scattering(\n\tconst in IncidentLight directLight,\n\tconst in vec3 geometryNormal,\n\tconst in vec3 geometryViewDir,\n\tconst in SSSModel sssModel,\n\tinout ReflectedLight reflectedLight\n\t){\n\tvec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * sssModel.distortion));\n\tfloat scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), sssModel.power) * sssModel.scale;\n\tvec3 scatteringIllu = (scatteringDot + sssModel.ambient) * (sssModel.color * (1.0-sssModel.thickness));\n\treflectedLight.directDiffuse += scatteringIllu * sssModel.attenuation * directLight.color;\n}\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( 1.0 );\n\n\t#if DEPTH_PACKING == 3200\n\n\t\tdiffuseColor.a = opacity;\n\n\t#endif\n\n\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\n\n\n\t// /ground/MAT/meshStandardBuilder1/constant1\n\tvec3 v_POLY_constant1_val = vec3(1.0, 1.0, 1.0);\n\t\n\t// /ground/MAT/meshStandardBuilder1/constant2\n\tvec3 v_POLY_constant2_val = vec3(0.0, 0.0, 0.0);\n\t\n\t// /ground/MAT/meshStandardBuilder1/vec3ToFloat1\n\tfloat v_POLY_vec3ToFloat1_x = v_POLY_globals1_position.x;\n\tfloat v_POLY_vec3ToFloat1_z = v_POLY_globals1_position.z;\n\t\n\t// /ground/MAT/meshStandardBuilder1/floatToVec2_1\n\tvec2 v_POLY_floatToVec2_1_vec2 = vec2(v_POLY_vec3ToFloat1_x, v_POLY_vec3ToFloat1_z);\n\t\n\t// /ground/MAT/meshStandardBuilder1/checkers1\n\tvec2 v_POLY_checkers1_coord = v_POLY_floatToVec2_1_vec2*vec2(1.0, 1.0)*1.0;\n\tfloat v_POLY_checkers1_checker = checkersGrad(v_POLY_checkers1_coord, dFdx(v_POLY_checkers1_coord), dFdy(v_POLY_checkers1_coord));\n\t\n\t// /ground/MAT/meshStandardBuilder1/mix1\n\tvec3 v_POLY_mix1_mix = mix(v_POLY_constant1_val, v_POLY_constant2_val, v_POLY_checkers1_checker);\n\t\n\t// /ground/MAT/meshStandardBuilder1/output1\n\tdiffuseColor.xyz = v_POLY_mix1_mix;\n\tfloat POLY_metalness = 1.0;\n\tfloat POLY_roughness = 1.0;\n\tvec3 POLY_emissive = vec3(1.0, 1.0, 1.0);\n\tSSSModel POLY_SSSModel = SSSModel(/*isActive*/false,/*color*/vec3(1.0, 1.0, 1.0), /*thickness*/0.1, /*power*/2.0, /*scale*/16.0, /*distortion*/0.1,/*ambient*/0.4,/*attenuation*/0.8 );\n\n\n\n\n\t// INSERT BODY\n\t// the new body lines should be added before the alphatest_fragment\n\t// so that alpha is set before (which is really how it would be set if the alphamap_fragment above was used by the material node parameters)\n\n\t#include <alphatest_fragment>\n\n\t#include <logdepthbuf_fragment>\n\n\n\t// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\n\t#if DEPTH_PACKING == 3200\n\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), diffuseColor.a );\n\n\t#elif DEPTH_PACKING == 3201\n\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\n\t#endif\n\n}\n",
      "customDistanceMaterial.vertex":
        "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n\n\n\n// /ground/MAT/meshStandardBuilder1/globals1\nvarying vec3 v_POLY_globals1_position;\n\n\n\n\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n// removed:\n//\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n// removed:\n//\t#include <begin_vertex>\n\n\n\n\t// /ground/MAT/meshStandardBuilder1/globals1\n\tv_POLY_globals1_position = vec3(position);\n\t\n\t// /ground/MAT/meshStandardBuilder1/output1\n\tvec3 transformed = position;\n\tvec3 objectNormal = normal;\n\t#ifdef USE_TANGENT\n\t\tvec3 objectTangent = vec3( tangent.xyz );\n\t#endif\n\n\n\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
      "customDistanceMaterial.fragment":
        "\n// INSERT DEFINES\n\n#define DISTANCE\n\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n\n#include <common>\n\n\n\n// /ground/MAT/meshStandardBuilder1/checkers1\n// https://iquilezles.org/articles/checkerfiltering/\nfloat checkers(vec2 p) {\n\tvec2 s = sign(fract(p*.5)-.5);\n\treturn .5 - .5*s.x*s.y;\n}\nfloat checkersGrad( in vec2 p, in vec2 ddx, in vec2 ddy )\n{\n    // filter kernel\n    vec2 w = max(abs(ddx), abs(ddy)) + 0.01;\n    // analytical integral (box filter)\n    vec2 i = 2.0*(abs(fract((p-0.5*w)/2.0)-0.5)-abs(fract((p+0.5*w)/2.0)-0.5))/w;\n    // xor pattern\n    return 0.5 - 0.5*i.x*i.y;\n}\n\n\n\n\n\n\n\n\n// /ground/MAT/meshStandardBuilder1/globals1\nvarying vec3 v_POLY_globals1_position;\n\n\n\n\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nstruct SSSModel {\n\tbool isActive;\n\tvec3 color;\n\tfloat thickness;\n\tfloat power;\n\tfloat scale;\n\tfloat distortion;\n\tfloat ambient;\n\tfloat attenuation;\n};\n\nvoid RE_Direct_Scattering(\n\tconst in IncidentLight directLight,\n\tconst in vec3 geometryNormal,\n\tconst in vec3 geometryViewDir,\n\tconst in SSSModel sssModel,\n\tinout ReflectedLight reflectedLight\n\t){\n\tvec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * sssModel.distortion));\n\tfloat scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), sssModel.power) * sssModel.scale;\n\tvec3 scatteringIllu = (scatteringDot + sssModel.ambient) * (sssModel.color * (1.0-sssModel.thickness));\n\treflectedLight.directDiffuse += scatteringIllu * sssModel.attenuation * directLight.color;\n}\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( 1.0 );\n\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\n\n\n\t// /ground/MAT/meshStandardBuilder1/constant1\n\tvec3 v_POLY_constant1_val = vec3(1.0, 1.0, 1.0);\n\t\n\t// /ground/MAT/meshStandardBuilder1/constant2\n\tvec3 v_POLY_constant2_val = vec3(0.0, 0.0, 0.0);\n\t\n\t// /ground/MAT/meshStandardBuilder1/vec3ToFloat1\n\tfloat v_POLY_vec3ToFloat1_x = v_POLY_globals1_position.x;\n\tfloat v_POLY_vec3ToFloat1_z = v_POLY_globals1_position.z;\n\t\n\t// /ground/MAT/meshStandardBuilder1/floatToVec2_1\n\tvec2 v_POLY_floatToVec2_1_vec2 = vec2(v_POLY_vec3ToFloat1_x, v_POLY_vec3ToFloat1_z);\n\t\n\t// /ground/MAT/meshStandardBuilder1/checkers1\n\tvec2 v_POLY_checkers1_coord = v_POLY_floatToVec2_1_vec2*vec2(1.0, 1.0)*1.0;\n\tfloat v_POLY_checkers1_checker = checkersGrad(v_POLY_checkers1_coord, dFdx(v_POLY_checkers1_coord), dFdy(v_POLY_checkers1_coord));\n\t\n\t// /ground/MAT/meshStandardBuilder1/mix1\n\tvec3 v_POLY_mix1_mix = mix(v_POLY_constant1_val, v_POLY_constant2_val, v_POLY_checkers1_checker);\n\t\n\t// /ground/MAT/meshStandardBuilder1/output1\n\tdiffuseColor.xyz = v_POLY_mix1_mix;\n\tfloat POLY_metalness = 1.0;\n\tfloat POLY_roughness = 1.0;\n\tvec3 POLY_emissive = vec3(1.0, 1.0, 1.0);\n\tSSSModel POLY_SSSModel = SSSModel(/*isActive*/false,/*color*/vec3(1.0, 1.0, 1.0), /*thickness*/0.1, /*power*/2.0, /*scale*/16.0, /*distortion*/0.1,/*ambient*/0.4,/*attenuation*/0.8 );\n\n\n\n\n\t// INSERT BODY\n\n\t#include <alphatest_fragment>\n\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist ); // clamp to [ 0, 1 ]\n\n\tgl_FragColor = packDepthToRGBA( dist );\n\n}\n",
      "customDepthDOFMaterial.vertex":
        "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n\n\n\n// /ground/MAT/meshStandardBuilder1/globals1\nvarying vec3 v_POLY_globals1_position;\n\n\n\n\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n// removed:\n//\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n// removed:\n//\t#include <begin_vertex>\n\n\n\n\t// /ground/MAT/meshStandardBuilder1/globals1\n\tv_POLY_globals1_position = vec3(position);\n\t\n\t// /ground/MAT/meshStandardBuilder1/output1\n\tvec3 transformed = position;\n\tvec3 objectNormal = normal;\n\t#ifdef USE_TANGENT\n\t\tvec3 objectTangent = vec3( tangent.xyz );\n\t#endif\n\n\n\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
      "customDepthDOFMaterial.fragment":
        "\n// INSERT DEFINES\n\n\n#if DEPTH_PACKING == 3200\n\n\tuniform float opacity;\n\n#endif\n\n#include <common>\n\n\n\n// /ground/MAT/meshStandardBuilder1/checkers1\n// https://iquilezles.org/articles/checkerfiltering/\nfloat checkers(vec2 p) {\n\tvec2 s = sign(fract(p*.5)-.5);\n\treturn .5 - .5*s.x*s.y;\n}\nfloat checkersGrad( in vec2 p, in vec2 ddx, in vec2 ddy )\n{\n    // filter kernel\n    vec2 w = max(abs(ddx), abs(ddy)) + 0.01;\n    // analytical integral (box filter)\n    vec2 i = 2.0*(abs(fract((p-0.5*w)/2.0)-0.5)-abs(fract((p+0.5*w)/2.0)-0.5))/w;\n    // xor pattern\n    return 0.5 - 0.5*i.x*i.y;\n}\n\n\n\n\n\n\n\n\n// /ground/MAT/meshStandardBuilder1/globals1\nvarying vec3 v_POLY_globals1_position;\n\n\n\n\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvarying vec2 vHighPrecisionZW;\n\nstruct SSSModel {\n\tbool isActive;\n\tvec3 color;\n\tfloat thickness;\n\tfloat power;\n\tfloat scale;\n\tfloat distortion;\n\tfloat ambient;\n\tfloat attenuation;\n};\n\nvoid RE_Direct_Scattering(\n\tconst in IncidentLight directLight,\n\tconst in vec3 geometryNormal,\n\tconst in vec3 geometryViewDir,\n\tconst in SSSModel sssModel,\n\tinout ReflectedLight reflectedLight\n\t){\n\tvec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * sssModel.distortion));\n\tfloat scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), sssModel.power) * sssModel.scale;\n\tvec3 scatteringIllu = (scatteringDot + sssModel.ambient) * (sssModel.color * (1.0-sssModel.thickness));\n\treflectedLight.directDiffuse += scatteringIllu * sssModel.attenuation * directLight.color;\n}\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( 1.0 );\n\n\t#if DEPTH_PACKING == 3200\n\n\t\tdiffuseColor.a = opacity;\n\n\t#endif\n\n\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\n\n\n\t// /ground/MAT/meshStandardBuilder1/constant1\n\tvec3 v_POLY_constant1_val = vec3(1.0, 1.0, 1.0);\n\t\n\t// /ground/MAT/meshStandardBuilder1/constant2\n\tvec3 v_POLY_constant2_val = vec3(0.0, 0.0, 0.0);\n\t\n\t// /ground/MAT/meshStandardBuilder1/vec3ToFloat1\n\tfloat v_POLY_vec3ToFloat1_x = v_POLY_globals1_position.x;\n\tfloat v_POLY_vec3ToFloat1_z = v_POLY_globals1_position.z;\n\t\n\t// /ground/MAT/meshStandardBuilder1/floatToVec2_1\n\tvec2 v_POLY_floatToVec2_1_vec2 = vec2(v_POLY_vec3ToFloat1_x, v_POLY_vec3ToFloat1_z);\n\t\n\t// /ground/MAT/meshStandardBuilder1/checkers1\n\tvec2 v_POLY_checkers1_coord = v_POLY_floatToVec2_1_vec2*vec2(1.0, 1.0)*1.0;\n\tfloat v_POLY_checkers1_checker = checkersGrad(v_POLY_checkers1_coord, dFdx(v_POLY_checkers1_coord), dFdy(v_POLY_checkers1_coord));\n\t\n\t// /ground/MAT/meshStandardBuilder1/mix1\n\tvec3 v_POLY_mix1_mix = mix(v_POLY_constant1_val, v_POLY_constant2_val, v_POLY_checkers1_checker);\n\t\n\t// /ground/MAT/meshStandardBuilder1/output1\n\tdiffuseColor.xyz = v_POLY_mix1_mix;\n\tfloat POLY_metalness = 1.0;\n\tfloat POLY_roughness = 1.0;\n\tvec3 POLY_emissive = vec3(1.0, 1.0, 1.0);\n\tSSSModel POLY_SSSModel = SSSModel(/*isActive*/false,/*color*/vec3(1.0, 1.0, 1.0), /*thickness*/0.1, /*power*/2.0, /*scale*/16.0, /*distortion*/0.1,/*ambient*/0.4,/*attenuation*/0.8 );\n\n\n\n\n\t// INSERT BODY\n\t// the new body lines should be added before the alphatest_fragment\n\t// so that alpha is set before (which is really how it would be set if the alphamap_fragment above was used by the material node parameters)\n\n\t#include <alphatest_fragment>\n\n\t#include <logdepthbuf_fragment>\n\n\n\t// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\n\t#if DEPTH_PACKING == 3200\n\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), diffuseColor.a );\n\n\t#elif DEPTH_PACKING == 3201\n\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\n\t#endif\n\n}\n",
    },
  },
  jsFunctionBodies: {},
};
