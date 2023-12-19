<template>

<div class="control-section">
  <link href="https://ej2.syncfusion.com/javascript/demos/src/diagram/styles/diagram-common.css" rel="stylesheet">
  <div id="swimlaneDiagram" style="width: 100%;">
    <div class="sb-mobile-palette-bar">
        <div id="palette-icon" style="float: right;" role="button" class="e-ddb-icons1 e-toggle-palette"></div>
    </div>
    <div id="palette-space" class="sb-mobile-palette">
        <ejs-symbolpalette id="symbolpalette" :expandMode='expandMode' :palettes='palettes' :width='palettewidth' :height='paletteheight' :symbolMargin='symbolMargin' :getNodeDefaults='palettegetNodeDefaults' :symbolHeight='symbolHeight' :getSymbolInfo='getSymbolInfo' :symbolWidth='symbolWidth'></ejs-symbolpalette>
    </div>
    <div id="diagram-space" class="sb-mobile-diagram">
        <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :dragEnter="dragEnter" :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults'
        :setNodeTemplate='setNodeTemplate'></ejs-diagram>
    </div>
  </div>
  <div id="action-description">
    <p>
        This sample represents the hospital management system using diagram's built-in UML class diagram shapes.
    </p>
  </div>
  <div id="description">
    <p>
        This example shows how to create class shapes using diagram <code>UMLClass</code> shapes. The <code>type</code> property of the
        <code>shape</code> can be used to create <code>UMLClass</code> nodes. The <code>shape</code> property of the shape allows you to create UML
        Class shapes.
    </p>
    <br />
  </div>
</div>
</template>
<style scoped>
.e-toggle-palette::before {
    content: "\e700"
}

.sb-mobile-palette {
    width: 240px;
    height: 559px;
    float: left;
}

.sb-mobile-palette-bar {
    display: none;
}

.sb-mobile-diagram {
    width: calc(100% - 242px);
    height: 559px;
    float: left;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-left: none;
}

.container-fluid {
    padding-bottom: 15px;
}

.e-upload {
    height: 0px;
    width: 0px;
    display: none !important;
    border: none !important;
}

#dropArea {
    height: 50px;
    padding: 7px;
    text-align: center;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.12);
    /* border-top: none; */
}

@media (max-width: 550px) {
    .sb-mobile-palette {
        z-index: 19;
        position: absolute;
        display: none;
        transition: transform 300ms linear, visibility 0s linear 300ms;
        width: 39%;
        height: 100%;
    }
    .sb-mobile-diagram {
        width: 60%;
        height: 100%;
        float: left;
        left: 0px;
    }
    .sb-mobile-palette-bar {
        display: block;
        width: 100%;
        background: #fafafa;
        padding: 10px 10px;
        border: 0.5px solid #e0e0e0;
        min-height: 40px;
    }
    #palette-icon {
        font-size: 20px;
    }
}

.sb-mobile-palette-open {
    position: absolute;
    display: block;
    right: 15px;
}

</style>
<script>
import {
  DiagramComponent,
  Diagram,
  ShapeAnnotationModel,
  NodeModel,
  Connector,
  SymbolPaletteComponent,
  ConnectorModel,
  UmlClassifierShapeModel
} from "@syncfusion/ej2-vue-diagrams";

let diagramInstance;

let nodes = [
    {
      id: 'Patient',
      shape: {
        type: 'UmlClassifier',
        classShape: {
          name: 'Patient',
          attributes: [
            createProperty('accepted', 'Date'),
            createProperty('sickness', 'History'),
            createProperty('prescription', 'String[*]'),
            createProperty('allergies', 'String[*]')
          ],
          methods: [createMethods('getHistory', 'History')]
        },
        classifier: 'Class'
      },
      offsetX: 200,
      offsetY: 250
    },
    {
      id: 'Doctor',
      shape: {
        type: 'UmlClassifier',
        classShape: {
          name: 'Doctor',
          attributes: [
            createProperty('specialist', 'String[*]'),
            createProperty('locations', 'String[*]')
          ]
        },
        classifier: 'Class'
      },
      offsetX: 240,
      offsetY: 545
    },
    {
      id: 'Person',
      shape: {
        type: 'UmlClassifier',
        classShape: {
          name: 'Person',
          attributes: [
            createProperty('name', 'Name'),
            createProperty('title', 'String[*]'),
            createProperty('gender', 'Gender')
          ]
        },
        classifier: 'Class'
      },
      offsetX: 405,
      offsetY: 105
    },
    {
      id: 'Hospital',
      shape: {
        type: 'UmlClassifier',
        classShape: {
          name: 'Hospital',
          attributes: [
            createProperty('name', 'Name'),
            createProperty('address', 'Address'),
            createProperty('phone', 'Phone')
          ],
          methods: [createMethods('getDepartment', 'String')]
        },
        classifier: 'Class'
      },
      offsetX: 638,
      offsetY: 100
    },
    {
      id: 'Department',
      shape: {
        type: 'UmlClassifier',
        classShape: {
          name: 'Department',
          methods: [createMethods('getStaffCount', 'Int')]
        },
        classifier: 'Class'
      },
      offsetX: 638,
      offsetY: 280
    },
    {
      id: 'Staff',
      shape: {
        type: 'UmlClassifier',
        classShape: {
          name: 'Staff',
          attributes: [
            createProperty('joined', 'Date'),
            createProperty('education', 'string[*]'),
            createProperty('certification', 'string[*]'),
            createProperty('languages', 'string[*]')
          ],
          methods: [
            createMethods('isDoctor', 'bool'),
            createMethods('getHistory', 'bool')
          ]
        },
        classifier: 'Class'
      },
      offsetX: 635,
      offsetY: 455
    },
    createNode('OperationStaff', 410, 455, 'OperationStaff'),
    createNode('Nurse', 410, 545, 'Nurse'),
    createNode('Surgeon', 240, 665, 'Surgeon'),
    createNode('AdministrativeStaff', 632, 605, 'AdministrativeStaff'),
    createNode('FrontDeskStaff', 630, 695, 'FrontDeskStaff'),
    createNode('TechnicalStaff', 928, 445, 'TechnicalStaff'),
    createNode('Technician', 815, 535, 'Technician'),
    createNode('Technologist', 1015, 535, 'Technologist'),
    createNode('SurgicalTechnologist', 1015, 630, 'SurgicalTechnologist')
  ];

let connectors = [
    createConnector('connect1', 'Patient', 'Person'),
    createConnector('connect2', 'Person', 'Hospital'),
    createConnector('connect3', 'Department', 'Hospital'),
    createConnector('connect4', 'OperationStaff', 'Patient'),
    createConnector('connect5', 'Doctor', 'OperationStaff'),
    createConnector('connect6', 'Nurse', 'OperationStaff'),
    createConnector('connect7', 'Surgeon', 'Doctor'),
    createConnector('connect8', 'FrontDeskStaff', 'AdministrativeStaff'),
    createConnector('connect9', 'Technician', 'TechnicalStaff'),
    createConnector('connect10', 'Technologist', 'TechnicalStaff'),
    createConnector('connect11', 'SurgicalTechnologist', 'Technologist'),
    createConnector('connect12', 'Staff', 'Department'),
    createConnector('connect13', 'Staff', 'Person'),
    createConnector('connect14', 'OperationStaff', 'Staff'),
    createConnector('connect15', 'AdministrativeStaff', 'Staff'),
    createConnector('connect16', 'TechnicalStaff', 'Staff')
  ];
  let palettes = [
  {
            id: 'UmlActivity', expanded: true, title: 'UML Classifier Nodes', symbols: [
            {
                id: 'class',
                style: {
                    fill: '#26A0DA',
                },
                borderColor: 'white',
                shape: {
                    type: 'UmlClassifier',
                    classShape: {
                        attributes: [
                            { name: 'accepted', type: 'Date', style: { color: "red", fontFamily: "Arial", textDecoration: 'Underline',  italic: true },isSeparator: true },
                            { name: 'sickness', type: 'History' },
                            { name: 'prescription', type: 'String[*]' },
                            { name: 'allergies', type: 'String[*]' }
                        ],
                        methods: [{ name: 'getHistory', style: {}, parameters: [{ name: 'Date', style: {} }], type: 'History' }],
                        name: 'Patient'
                    },
                    classifier: 'Class'
                },
            },
            {
                id: 'Interface',
                style: {
                    fill: '#26A0DA',
                }, borderColor: 'white',
                shape: {
                    type: 'UmlClassifier',
                    interfaceShape: {
                        name: "Bank Account",
                        attributes: [{
                                name: "owner",
                                type: "String[*]", style: {}
                            },
                            {
                                name: "balance",
                                type: "Dollars"
                            }],
                        methods: [{
                                name: "deposit", style: {},
                                parameters: [{
                                        name: "amount",
                                        type: "Dollars",
                                        style: {}
                                    }],
                            }]
                    },
                    classifier: 'Interface'
                },
            },
            {
                id: 'Enumeration',
                style: {
                    fill: '#26A0DA',
                }, borderColor: 'white',
                shape: {
                    type: 'UmlClassifier',
                    enumerationShape: {
                        name: 'AccountType',
                        members: [
                            {
                                name: 'Checking Account', style: {}
                            },
                            {
                                name: 'Savings Account'
                            },
                            {
                                name: 'Credit Account'
                            }
                        ]
                    },
                    classifier: 'Enumeration'
                },
            },
            ]
        },
        {
          id: 'umlConnectorrs', expanded: true, title: 'UML Classifier Connectors', symbols: [
            {
              id: 'Composition',
              sourcePoint: { x: 100, y: 200 },
              targetPoint: { x: 200, y: 300 },
              type: 'Straight',
              shape: { type: 'UmlClassifier', relationship: 'Composition' }
          },
          {
              id: 'BiDirectional',
              type: 'Straight',
              sourcePoint: { x: 300, y: 200 },
              targetPoint: { x: 400, y: 300 },
              shape: { type: 'UmlClassifier', relationship: 'Aggregation', associationType: 'BiDirectional' }
          },
          {
              id: 'Directional',
              type: 'Straight',
              sourcePoint: { x: 500, y: 200 },
              targetPoint: { x: 600, y: 300 },
              shape: { type: 'UmlClassifier', relationship: 'Association', associationType: 'Directional' }
          },
          {
              id: 'Association',
              type: 'Straight',
              sourcePoint: { x: 700, y: 200 },
              targetPoint: { x: 800, y: 300 },
              shape: { type: 'UmlClassifier', relationship: 'Association' }
          },
          {
              id: 'Inheritance',
              type: 'Straight',
              sourcePoint: { x: 900, y: 200 },
              targetPoint: { x: 1000, y: 300 },
              shape: { type: 'UmlClassifier', relationship: 'Inheritance' }
          },
          {
              id: 'Interfaces',
              type: 'Straight',
              sourcePoint: { x: 100, y: 400 },
              targetPoint: { x: 200, y: 500 },
              shape: { type: 'UmlClassifier', relationship: 'Interface' }
          },
          {
              id: 'Dependency',
              type: 'Straight',
              sourcePoint: { x: 300, y: 400 },
              targetPoint: { x: 400, y: 500 },
              shape: { type: 'UmlClassifier', relationship: 'Dependency' }
          },
          {
              id: 'Realization',
              type: 'Straight',
              sourcePoint: { x: 500, y: 400 },
              targetPoint: { x: 600, y: 500 },
              shape: { type: 'UmlClassifier', relationship: 'Realization' }
          },
          {
              id: "OneToMany",
              type: 'Straight',
              sourcePoint: {
                  x: 700,
                  y: 400
              },
              targetPoint: {
                  x: 800,
                  y: 500
              },
              annotations: [{
                      margin: {
                          top: 10,
                          left: 10,
                          right: 10,
                          bottom: 20
                      }
                  }
              ],
              shape: {
                  type: "UmlClassifier",
                  relationship: 'Dependency',
                  multiplicity: {
                      type: 'OneToMany',
                      source: {
                          optional: true,
                          lowerBounds: '89',
                          upperBounds: '67'
                      },
                      target: { optional: true, lowerBounds: '78', upperBounds: '90' }
                  }
              }
          },
          {
              id: "ManyToMany",
              sourcePoint: {
                  x: 900,
                  y: 400
              },
              targetPoint: {
                  x: 1000,
                  y: 500
              },
              annotations: [{
                      margin: {
                          top: 10,
                          left: 10,
                          right: 10,
                          bottom: 20
                      }
                  }
              ],
              shape: {
                  type: "UmlClassifier",
                  relationship: 'Dependency',
                  multiplicity: {
                      type: 'ManyToMany',
                      source: {
                          optional: true,
                          lowerBounds: '89',
                          upperBounds: '67'
                      },
                      target: { optional: true, lowerBounds: '78', upperBounds: '90' }
                  }
              }
          },
          {
              id: "OneToOne",
              sourcePoint: { x: 100, y: 600 },
              targetPoint: { x: 200, y: 700 },
              annotations: [{
                      margin: {
                          top: 10,
                          left: 10,
                          right: 10,
                          bottom: 20
                      }
                  }
              ],
              shape: {
                  type: "UmlClassifier",
                  relationship: 'Dependency',
                  multiplicity: {
                      type: 'OneToOne',
                      source: {
                          optional: true,
                          lowerBounds: '89',
                          upperBounds: '67'
                      },
                      target: { optional: true, lowerBounds: '78', upperBounds: '90' }
                  }
              }
          },
          {
              id: "ManyToOne",
              sourcePoint: { x: 300, y: 600 },
              targetPoint: { x: 400, y: 700 },
              annotations: [{
                      margin: {
                          top: 10,
                          left: 10,
                          right: 10,
                          bottom: 20
                      }
                  }
              ],
              shape: {
                  type: "UmlClassifier",
                  relationship: 'Dependency',
                  multiplicity: {
                      type: 'ManyToOne',
                      source: {
                          optional: true,
                          lowerBounds: '89',
                          upperBounds: '67'
                      },
                      target: { optional: true, lowerBounds: '78', upperBounds: '90' }
                  }
              }
          },
          {
              id: "OneToMany",
              sourcePoint: { x: 500, y: 600 },
              targetPoint: { x: 600, y: 700 },
              annotations: [{
                      margin: {
                          top: 10,
                          left: 10,
                          right: 10,
                          bottom: 20
                      }
                  }
              ],
              shape: {
                  type: "UmlClassifier",
                  relationship: 'Dependency',
                  multiplicity: {
                      type: 'OneToMany',
                  }
              }
          }
          ]
        }
];
export default {
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-symbolpalette': SymbolPaletteComponent
  },
  data: function() {
    return {
      width: "100%",
      height: "100%",
      nodes: nodes,
      connectors: connectors,
       //Sets the default values of a node
      getNodeDefaults: (obj) => {
        obj.style = { fill: '#26A0DA', strokeColor: 'white' };
        return obj;
      },
      dragEnter: (args) => {
        if(args.element instanceof Connector){
              args.element.targetPoint.x += 100;
              args.element.targetPoint.y += 20
        }
      },

      //Sets the default values of a connector
      getConnectorDefaults: (connector) => {
        return connector;
      },
      //set an label style for nodes
       setNodeTemplate: (node) => {
        if (node.annotations && node.annotations.length > 0) {
        for (let i = 0; i < node.annotations.length; i++) {
           let annotation = node.annotations[i];
           if(annotation && annotation.style) {
             annotation.style.color = 'white';
           }
         }
        }
      },
      expandMode: "Multiple",
      palettes: palettes,
      palettewidth: "100%",
      paletteheight: '100%',
      symbolMargin: { left: 12, right: 12, top: 12, bottom: 12 },
      symbolHeight: 90, symbolWidth: 90,
      palettegetNodeDefaults: (symbol) => {
        symbol.width = 100;
        symbol.height = 100;
      },
      getSymbolInfo: (symbol) => {
        return { fit: true,description: { text: symbol.id, } ,tooltip: symbol.addInfo ? symbol.addInfo['tooltip'] : symbol.id };
      }
    }
  },
  mounted: function() {
       let diagram = this.$refs.diagramObj.ej2Instances;
        diagram.fitToPage();
  }
}

 //Create a connector.
  function createConnector( id, sourceID, targetID ) {
    let connector = {};
    connector.id = id;
    connector.sourceID = sourceID;
    connector.targetID = targetID;
    return connector;
  }

  //Create class Diagram shapes.
  function createNode( id, offsetX, offsetY, className ) {
    let node = {};
    node.id = id;
    node.offsetX = offsetX;
    node.offsetY = offsetY;
    node.shape = {
      type: 'UmlClassifier',
      classShape: {
        name: className
      },
      classifier: 'Class'
    };
    return node;
  }

  //create class Property
  function createProperty(name, type) {
    return { name: name, type: type };
  }

  //create class Methods
  function createMethods(name, type) {
    return { name: name, type: type };
  }
</script>