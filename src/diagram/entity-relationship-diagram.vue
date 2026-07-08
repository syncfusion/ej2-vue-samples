<template>
<div>
  <div class="control-section er-diagram-section">
    <div style="width: 100%">
      <div class="sb-mobile-palette-bar">
        <div style="float: right;"
          id="palette-icon-er"
          ref="paletteIcon"
          role="button"
          class="e-ddb-icons1 e-toggle-palette"
        ></div>
      </div>
      <div id="palette-space" class="sb-mobile-palette" ref="paletteSpace">
        <ejs-symbolpalette
          id="symbolpalette"
          :palettes="erPalettes"
          width="100%"
          :height="paletteHeight"
          :symbolWidth="symbolWidth"
          :symbolHeight="symbolHeight"
          :enableAnimation="false"
          :symbolMargin="symbolMargin">
        </ejs-symbolpalette>
      </div>
      <div id="diagram-space" class="sb-mobile-diagram">
        <ejs-diagram
          id="diagram"
          ref="diagramObj"
          :width="width"
          :height="height"
          :nodes="nodes"
          :connectors="connectors"
          :constraints="constraints"
          :tool="tool"
          :snapSettings="snapSettings"
          :contextMenuSettings='contextMenuSettings'
          :contextMenuOpen='contextMenuOpen'
          :contextMenuClick='contextMenuClick'
          :getConnectorDefaults="getConnectorDefaults"
          :selectedItems="selectedItems"
          :onUserHandleMouseDown="onUserHandleMouseDown"
          :selectionChange="selectionChange"
          :created="created"
          :load="load">
        </ejs-diagram>
      </div>
    </div>
  </div>
  <div id="action-description">
    <p>
        This sample demonstrates a <b>healthcare appointment management ER diagram</b> created using the <a href="https://www.syncfusion.com/vue-components/vue-diagram" target="_blank">Vue Diagram</a>. It visualizes how core entities such as doctors, patients, appointments, diagnoses, and prescriptions are structured and interconnected in a real-world hospital database system.
    </p>
</div>
    <div id="description">
        <p>
            This sample showcases how to create and interact with an ER diagram using the <a href="https://www.syncfusion.com/vue-components/vue-diagram" target="_blank">Vue Diagram</a>. The diagram is built using nodes of <code>type: 'Er'</code> to represent database entities and their fields, while connectors define relationships with cardinality between entities.
        </p>
        <p>
            <b>User handles</b> allow adding or removing fields within entities. When an entity node is selected, a “+” handle appears, enabling the addition of new fields. These fields can then be interactively reordered using drag‑and‑drop actions. When an individual field is selected, a “−” handle is displayed to remove that specific field. The diagram supports built‑in interactions such as selecting entities and editing their fields.        <br>
        </p>
    </div>
</div>
</template>

<style scoped>
/*To align palette */
.er-diagram-section .sb-mobile-palette {
  width: 195px;
  height: 500px;
  float: left;
}

.er-diagram-section .sb-mobile-palette-bar {
  display: none;
}

/*To align diagram */
.er-diagram-section .sb-mobile-diagram {
  width: calc(100% - 197px);
  height: 500px;
  float: left;
  border-left: none;
}

@media (max-width: 550px) {
  .er-diagram-section .sb-mobile-palette {
    z-index: 19;
    position: absolute;
    display: none;
    transition: transform 300ms linear, visibility 0s linear 300ms;
    width: 39%;
    height: 100%;
  }

  #palette-space {
    height: fit-content;
    background-color: white;
  }

  .er-diagram-section .sb-mobile-palette-bar {
    display: block;
    width: 100%;
    background: #fafafa;
    padding: 10px 10px;
    border: 0.5px solid #e0e0e0;
    min-height: 40px;
  }

  .er-diagram-section .sb-mobile-diagram {
    width: 100%;
  }

  #palette-icon-er {
    font-size: 20px;
  }
}

.er-diagram-section .sb-mobile-palette-open {
  position: absolute;
  display: block;
  right: 15px;
}

@font-face {
  font-family: "e-ddb-icons";
  src: url(data:application/x-font-ttf;charset=utf-8;base64,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)
    format("truetype");
  font-weight: normal;
  font-style: normal;
}

.e-ddb-icons {
  font-family: "e-ddb-icons";
  speak: none;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<script>
import {
  DiagramComponent,
  SymbolPaletteComponent,
  Diagram,
  SymbolPalette,
  DiagramTools,
  SnapConstraints,
  ConnectorConstraints,
  DiagramConstraints,
  DataBinding,
  UndoRedo,
  ErDiagrams,
  ErConnectorShapeModel,
  ErMultiplicityTypes,
  ErRelationshipTypes,
  ErFieldConstraint,
  LineRouting,
  AvoidLineOverlapping,
  ConnectorModel,
  ErFieldModel,
  ErShapeModel,
  NodeModel,
  UserHandleEventsArgs,
  Connector,
  NodeConstraints,
  DiagramContextMenu
} from "@syncfusion/ej2-vue-diagrams";

Diagram.Inject(DataBinding, UndoRedo, LineRouting, AvoidLineOverlapping, ErDiagrams, DiagramContextMenu);
SymbolPalette.Inject(ErDiagrams);

const COLOR_TOKENS = {
  primary: {
    headerFill: '#bfdbfe',
    bodyFill: '#eff6ff',
    strokeColor: '#2563eb',
    connectorColor: '#2563eb'
  },
  secondary: {
    headerFill: '#bbf7d0',
    bodyFill: '#f0fdf4',
    strokeColor: '#16a34a',
    connectorColor: '#16a34a'
  },
  tertiary: {
    headerFill: '#ddd6fe',
    bodyFill: '#f5f3ff',
    strokeColor: '#7c3aed',
    connectorColor: '#7c3aed'
  },
  accent: {
    headerFill: '#fdba74',
    bodyFill: '#fff7ed',
    strokeColor: '#ea580c',
    connectorColor: '#ea580c'
  },
  neutral: {
    headerFill: '#d1d5db',
    bodyFill: '#f9fafb',
    strokeColor: '#6b7280',
    connectorColor: '#6b7280'
  },
  warning: {
    headerFill: '#fde68a',
    bodyFill: '#fffbeb',
    strokeColor: '#d97706',
    connectorColor: '#d97706'
  }
};

const schema = {
  title: 'Hospital Appointment ER Diagram',

  entities: [
    {
      id: 'Doctor',
      title: 'DOCTOR',
      color: 'secondary',
      position: { x: 0, y: 94 },
      fields: [
        { id: 'doctor_id', name: 'DoctorID', isPrimaryKey: true },
        { id: 'name', name: 'Name' },
        { id: 'department', name: 'Department' },
        { id: 'specialization', name: 'Specialization' },
        { id: 'contact_number', name: 'ContactNumber' }
      ]
    },
    {
      id: 'Patient',
      title: 'PATIENT',
      color: 'primary',
      position: { x: 290, y: 83 },
      fields: [
        { id: 'patient_id', name: 'PatientID', isPrimaryKey: true },
        { id: 'patient_name', name: 'Name' },
        { id: 'date_of_birth', name: 'DateOfBirth' },
        { id: 'patient_gender', name: 'Gender' },
        { id: 'patient_blood_group', name: 'BloodGroup' },
        { id: 'patient_contact_number', name: 'ContactNumber' }
      ]
    },
    {
      id: 'Appointment',
      title: 'APPOINTMENT',
      color: 'tertiary',
      position: { x: 133, y: 355 },
      fields: [
        { id: 'appointment_id', name: 'AppointmentID', isPrimaryKey: true },
        { id: 'app_doctor_id', name: 'DoctorID', isForeignKey: true },
        { id: 'app_patient_id', name: 'PatientID', isForeignKey: true },
        { id: 'appointment_date', name: 'AppointmentDate' },
        { id: 'status', name: 'Status' }
      ]
    },
    {
      id: 'Diagnosis',
      title: 'DIAGNOSIS',
      color: 'accent',
      position: { x: 549, y: 236 },
      fields: [
        { id: 'diagnosis_id', name: 'DiagnosisID', isPrimaryKey: true },
        { id: 'diag_appointment_id', name: 'AppointmentID', isForeignKey: true },
        { id: 'disease', name: 'Disease' },
        { id: 'severity', name: 'Severity' },
        { id: 'notes', name: 'Notes' }
      ]
    },
    {
      id: 'Prescription',
      title: 'PRESCRIPTION',
      color: 'warning',
      position: { x: 384, y: 493 },
      fields: [
        { id: 'prescription_id', name: 'PrescriptionID', isPrimaryKey: true },
        { id: 'pres_diagnosis_id', name: 'DiagnosisID', isForeignKey: true },
        { id: 'medicine', name: 'Medicine' },
        { id: 'dosage', name: 'Dosage' },
        { id: 'frequency', name: 'Frequency' },
        { id: 'duration_days', name: 'DurationDays' }
      ]
    }
  ],

  relationships: [
    {
      id: 'rel_doctor_appointment',
      source: 'Doctor',
      target: 'Appointment',
      sourceCardinality: 'OneAndOnlyOne',
      targetCardinality: 'ZeroOrMany',
      relationshipType: 'NonIdentifying',
      color: '#16a34a',
      annotation: 'attends'
    },
    {
      id: 'rel_patient_appointment',
      source: 'Patient',
      target: 'Appointment',
      sourceCardinality: 'OneAndOnlyOne',
      targetCardinality: 'ZeroOrMany',
      relationshipType: 'NonIdentifying',
      color: '#2563eb',
      annotation: 'books'
    },
    {
      id: 'rel_appointment_diagnosis',
      source: 'Appointment',
      target: 'Diagnosis',
      sourceCardinality: 'OneAndOnlyOne',
      targetCardinality: 'ZeroOrMany',
      relationshipType: 'Identifying',
      color: '#7c3aed',
      annotation: 'leads to'
    },
    {
      id: 'rel_diagnosis_prescription',
      source: 'Diagnosis',
      target: 'Prescription',
      sourceCardinality: 'OneAndOnlyOne',
      targetCardinality: 'ZeroOrMany',
      relationshipType: 'Identifying',
      color: '#ea580c',
      annotation: 'generates'
    }
  ]
};

const entityNoFields = {
  id: 'entity_no_fields',
  tooltip:{content:'Entity With No-Fields'},
  constraints: NodeConstraints.Tooltip,
  width: 80,
  height: 80,
  shape: {
      type: 'Er',
      header: {
          annotation: {
              content: 'Entity Name',
              style: {
                  fontSize: 12,
                  bold: true,
                  color: '#111827'
              }
          },
          height: 34,
          style: { fill: '#ddd6fe', fontSize: 12, bold: true, color: 'white' }
      },
      fields: [],
  },
  style: {
      fill: '#f5f3ff',
      strokeColor: '#7c3aed',
      strokeWidth: 1.5
  }
};

const entityKeyName = {
    id: 'entity_key_name',
    tooltip:{content:'Entity With Key and Name'},
    constraints: NodeConstraints.Tooltip,
    width: 80,
    height: 110,
    shape: {
        type: 'Er',
        header: {
            annotation: {
                content: 'Entity Name',
                style: {
                    fontSize: 12,
                    bold: true,
                    color: '#111827'
                }
            },
            height: 34,
            style: { fill: '#ddd6fe', fontSize: 12, bold: true, color: 'white' }
        },
        fields: [
            { id: 'field_id', name: 'Attribute', isPrimaryKey: true }
        ]
    },
    style: {
        fill: '#f5f3ff',
        strokeColor: '#7c3aed',
        strokeWidth: 1.5
    }
};

const entityKeyNameType = {
    id: 'entity_key_name_type',
    tooltip:{content:'Entity With Key, Name and Type'},
    constraints: NodeConstraints.Tooltip,
    width: 80,
    height: 125,
    shape: {
        type: 'Er',
        header: {
            annotation: {
                content: 'Entity Name',
                style: {
                    fontSize: 12,
                    bold: true,
                    color: '#111827'
                }
            },
            height: 34,
            style: { fill: '#ddd6fe', fontSize: 12, bold: true, color: 'white' }
        },
        fields: [
            { id: 'field_id_type', name: 'Attribute', isPrimaryKey: true, dataType: 'INT' }
        ]
    },
    style: {
        fill: '#f5f3ff',
        strokeColor: '#7c3aed',
        strokeWidth: 1.5
    }
};

const entityKeyNameTypeConstraints = {
    id: 'entity_key_name_type_constraints',
    tooltip:{content:'Entity With Key, Name, Type and Constraints'},
    constraints: NodeConstraints.Tooltip,
    width: 80,
    height: 140,
    shape: {
        type: 'Er',
        header: {
            annotation: {
                content: 'Entity Name',
                style: {
                    fontSize: 12,
                    bold: true,
                    color: '#111827'
                }
            },
            height: 34,
            style: { fill: '#ddd6fe', fontSize: 12, bold: true, color: 'white' }
        },
        fields: [
            { id: 'field_id_constraints', name: 'Attribute', isPrimaryKey: true, dataType: 'INT', constraints: ['NotNull'] }
        ]
    },
    style: {
        fill: '#ffffff',
        strokeColor: '#7c3aed',
        strokeWidth: 1.5
    }
};

const connectorSymbols =  [
    {
        id: 'Link1',
        tooltip:{content:'One to One'},
        constraints: ConnectorConstraints.Tooltip,
        sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
        shape: {
            type: 'Er',
            sourceMultiplicity: { type: 'One' },
            targetMultiplicity: { type: 'One' }
        },
        style: { strokeColor: '#7c3aed', strokeWidth: 1.5},
        sourceDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
        },
        targetDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
        }
    },
    {
        id: 'Link2',
        tooltip:{content:'Many to Many'},
        constraints: ConnectorConstraints.Tooltip,
        sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
        shape: {
            type: 'Er',
            sourceMultiplicity: { type: 'Many' },
            targetMultiplicity: { type: 'Many' }
        },
        style: { strokeColor: '#7c3aed', strokeWidth: 1.5},
        sourceDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
        },
        targetDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
        }
    },
    {
        id: 'Link3',
        tooltip:{content:'OneAndOnlyOne to OneAndOnlyOne'},
        constraints: ConnectorConstraints.Tooltip,
        sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
        shape: {
            type: 'Er',
            sourceMultiplicity: { type: 'OneAndOnlyOne' },
            targetMultiplicity: { type: 'OneAndOnlyOne' }
        },
        style: { strokeColor: '#7c3aed', strokeWidth: 1.5},
        sourceDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
        },
        targetDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
        }
    },
    {
        id: 'Link4',
        tooltip:{content:'ZeroOrOne to ZeroOrOne'},
        constraints: ConnectorConstraints.Tooltip,
        sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
        shape: {
            type: 'Er',
            sourceMultiplicity: { type: 'ZeroOrOne' },
            targetMultiplicity: { type: 'ZeroOrOne' }
        },
        style: { strokeColor: '#7c3aed', strokeWidth: 1.5},
        sourceDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
        },
        targetDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
        }
    },
    {
        id: 'Link5',
        tooltip:{content:'OneOrMany to OneOrMany'},
        constraints: ConnectorConstraints.Tooltip,
        sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
        shape: {
            type: 'Er',
            sourceMultiplicity: { type: 'OneOrMany' },
            targetMultiplicity: { type: 'OneOrMany' }
        },
        style: { strokeColor: '#7c3aed', strokeWidth: 1.5},
        sourceDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
        },
        targetDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
        }
    },
    {
        id: 'Link6',
        tooltip:{content:'ZeroOrMany to ZeroOrMany'},
        constraints: ConnectorConstraints.Tooltip,
        sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 30, y: 30 },
        shape: {
            type: 'Er',
            sourceMultiplicity: { type: 'ZeroOrMany' },
            targetMultiplicity: { type: 'ZeroOrMany' }
        },
        style: { strokeColor: '#7c3aed', strokeWidth: 1.5},
        sourceDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
        },
        targetDecorator: {
            style: { strokeColor: '#7c3aed', strokeWidth: 1.5}
        }
        
    }
];

const erPalettes = [
  {
    id: 'entities',
    expanded: true,
    title: 'ER Entities',
    symbols: [entityNoFields, entityKeyName, entityKeyNameType, entityKeyNameTypeConstraints]
  },
  {
    id: 'connectors',
    symbols: connectorSymbols,
    title: 'Connectors'
  }
];

function toFieldModel(field) {
  return {
    id: field.id,
    name: field.name,
    isPrimaryKey: field.isPrimaryKey,
    isForeignKey: field.isForeignKey
  };
}

function toNode(entity) {
  const theme = COLOR_TOKENS[entity.color];
  return {
    id: entity.id,
    offsetX: entity.position.x,
    offsetY: entity.position.y,
    shape: {
      type: 'Er',
      header: {
        annotation: {
          content: entity.title,
          style: {
            fontSize: 12,
            bold: true,
            color: '#111827'
          }
        },
        height: 34,
        style: {
          fill: theme.headerFill
        }
      },
      fields: entity.fields.map(toFieldModel),
      fieldDefaults: {
        alternateRowColors: [theme.bodyFill, '#ffffff']
      },
    },
    style: {
      fill: theme.bodyFill,
      strokeColor: theme.strokeColor,
      strokeWidth: 1.75,
    }
  };
}

function toConnector(relationship) {
  const color = relationship.color || '#64748b';
  const connector = {
    id: relationship.id,
    sourceID: relationship.source,
    targetID: relationship.target,
    type: 'Orthogonal',
    cornerRadius: 6,
    style: {
      strokeColor: color,
      strokeWidth: 1.75
    },
    sourceDecorator: {
      style: {
        strokeColor: color,
        strokeWidth: 1.75
      }
    },
    targetDecorator: {
      style: {
        strokeColor: color,
        strokeWidth: 1.75
      }
    },
    shape: {
      type: 'Er',
      relationship: relationship.relationshipType,
      sourceMultiplicity: { type: relationship.sourceCardinality },
      targetMultiplicity: { type: relationship.targetCardinality }
    }
  };

  // Add annotation if defined in relationship schema
  if (relationship.annotation) {
    connector.annotations = [{
      content: relationship.annotation,
      style: {
        color: color,
        fill: '#ffffff',
        fontSize: 13
      }
    }];
  }

  return connector;
}
const contextMenu = {
    show: true,
    items: [
        {
            text: 'Connector Type',
            id: 'ConnectorType',
            // Sub-menu for Connector Types
            items: [
                { text: 'Straight', id: 'Straight' },
                { text: 'Orthogonal', id: 'Orthogonal' },
                { text: 'Bezier', id: 'Bezier' }
            ]
        },
        {
            text: 'Relationship',
            id: 'Relationship',
            // Sub-menu for Relationship Types
            items: [
                { text: 'Identifying', id: 'Identifying' },
                { text: 'NonIdentifying', id: 'NonIdentifying' }
            ]
        },
        {
            text: 'Source Multiplicity',
            id: 'Source_Multiplicity',
            // Sub-menu for Source Multiplicity
            items: [
                { text: 'One', id: 'One' },
                { text: 'Many', id: 'Many' },
                { text: 'OneAndOnlyOne', id: 'OneAndOnlyOne' },
                { text: 'ZeroOrOne', id: 'ZeroOrOne' },
                { text: 'ZeroOrMany', id: 'ZeroOrMany' },
                { text: 'OneOrMany', id: 'OneOrMany' }
            ]
        },
        {
            text: 'Target Multiplicity',
            id: 'Target_Multiplicity',
            // Sub-menu for Target Multiplicity
            items: [
                { text: 'One', id: 'One_t' },
                { text: 'Many', id: 'Many_t' },
                { text: 'OneAndOnlyOne', id: 'OneAndOnlyOne_t' },
                { text: 'ZeroOrOne', id: 'ZeroOrOne_t' },
                { text: 'ZeroOrMany', id: 'ZeroOrMany_t' },
                { text: 'OneOrMany', id: 'OneOrMany_t' }
            ]
        },
    ],
    showCustomMenuOnly: true,
};
const nodes = schema.entities.map(toNode);
const connectors = schema.relationships.map(toConnector);

export default {
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-symbolpalette': SymbolPaletteComponent
  },
  data() {
    return {
      width: '100%',
      height: '500px',
      nodes,
      connectors,
      contextMenuSettings: contextMenu,
      erPalettes,
      paletteHeight: '500px',
      symbolWidth: 70,
      symbolHeight: 70,
      symbolMargin: { left: 8, right: 8, top: 8, bottom: 8 },
      constraints: DiagramConstraints.Default | DiagramConstraints.LineRouting | DiagramConstraints.AvoidLineOverlapping,
      tool: DiagramTools.SingleSelect,
      snapSettings: { constraints: SnapConstraints.None },
      selectedItems: { userHandles: [] },
      diagramCreated: false
    };
  },
  methods: {
    getConnectorDefaults(connector) {
      connector.cornerRadius = 10;
      connector.type = 'Orthogonal';
      connector.constraints = ConnectorConstraints.Default;
      return connector;
    },
    contextMenuClick(args) {
      // Check if any connector is selected
      const diagram = this.$refs.diagramObj.ej2Instances;
      if (diagram.selectedItems.connectors.length > 0) {
          const connector = diagram.selectedItems.connectors[0];
          const erConnector = diagram.selectedItems.connectors[0].shape;
          const itemId = args.item.id;
          if (itemId === 'Straight' || itemId === 'Orthogonal' || itemId === 'Bezier') {
              connector.type = itemId;
          } else if (itemId === 'Identifying' || itemId === 'NonIdentifying') {
              erConnector.relationship = itemId;
          } else if (itemId === 'One' || itemId ==='Many' || itemId ==='OneAndOnlyOne' || itemId ==='ZeroOrOne' || itemId ==='ZeroOrMany' || itemId ==='OneOrMany') {
              erConnector.sourceMultiplicity.type = args.item.text;
          } else if (itemId === 'One_t' || itemId ==='Many_t' || itemId ==='OneAndOnlyOne_t' || itemId ==='ZeroOrOne_t' || itemId ==='ZeroOrMany_t' || itemId ==='OneOrMany_t') {
              erConnector.targetMultiplicity.type = args.item.text ;
          }
          diagram.dataBind();
      }
    },
    contextMenuOpen(args) {
      const diagram = this.$refs.diagramObj.ej2Instances;
      let hiddenId = [];
      if (args.element.className !== 'e-menu-parent e-ul ') {
          hiddenId = ['ConnectorType', 'Relationship' , 'Source_Multiplicity', 'Target_Multiplicity'];
      }
      if (diagram.selectedItems.connectors[0] instanceof Connector) {
          hiddenId = [];
      }
      args.hiddenItems = hiddenId; // Set the hidden menu items based on the logic above
    },
    onUserHandleMouseDown(args) {
      const diagram = this.$refs.diagramObj.ej2Instances;
      const handle = (args.element);
      if (!handle) { return; }

      const handleName = handle.name;
      const node = this.getSelectedErEntity();
      if (handleName === 'AddField') {
        if (!node) { return; }

        const newField = this.createNewErField(node);

        diagram.addErField(node, newField);
      } else if (handleName === 'RemoveField') {
        if (!node) { return; }

        const fieldToRemove = this.getSelectedFieldToRemove(node);
        if (!fieldToRemove) { return; }

        diagram.removeErField(node, fieldToRemove);
      }
    },
    selectionChange() {
      const diagram = this.$refs.diagramObj.ej2Instances;
      // hide handles for everything by default
      diagram.selectedItems.userHandles = [];
      const selectedNodes = diagram.selectedItems.nodes || [];
      if (selectedNodes.length === 1) {
        const node = selectedNodes[0];
        // if an ER entity is selected show the AddField handle
        if (node && node.shape && node.shape.type === 'Er' && node.style && node.style.strokeColor) {
          diagram.selectedItems.userHandles = [{
            name: 'AddField',
            offset: 1,
            side: 'Bottom',
            content: `
              <g class="insert-handle">
                  <circle class="bg" cx="8" cy="8" r="7" fill="${node.style.strokeColor}"/>
                  <path class="plus" d="M8 5 V11 M5 8 H11" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
                  <style>
                      .insert-handle { cursor: pointer; }
                      .insert-handle:hover .bg { fill: ${node.style.strokeColor}; }
                  </style>
              </g>
              `,
            tooltip: { content: 'Add Field' },
            size: 24,
            margin: { left: 20, bottom: 36 }
          }];
          // if a child/field is selected show the RemoveField handle
        } else if (node && node.shape && node.style && node.style.strokeColor) {
          const isPKField = node.annotations && node.annotations.length > 0 && node.annotations[0].content === 'PK';

          if (!isPKField) {
            diagram.selectedItems.userHandles = [{
              name: 'RemoveField',
              offset: 1,
              side: 'Bottom',
              content: `
                            <g class="minus-handle">
                                <circle class="bg" cx="8" cy="8" r="7" fill="${node.style.strokeColor}"/>
                                <path class="minus" d="M5 8 H11" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
                                <style>
                                    .minus-handle { cursor: pointer; }
                                    .minus-handle:hover .bg { fill: ${node.style.strokeColor}; }
                                </style>
                            </g>
                        `,
              tooltip: { content: 'Remove Field' },
              size: 24,
              margin: { left: 20, bottom: 36 }
            }];
          }
        }
      }
      diagram.dataBind();
    },
    created() {
      this.diagramCreated = true;
      this.$refs.diagramObj.ej2Instances.fitToPage();
    },
    load() {
      if (this.diagramCreated) {
        setTimeout(() => this.$refs.diagramObj.ej2Instances.fitToPage(), 10);
      }
    },
    getSelectedFieldToRemove(entityNode) {
      const diagram = this.$refs.diagramObj.ej2Instances;
      const erEntity = entityNode.shape;
      if (!erEntity || !erEntity.fields || erEntity.fields.length === 0) {
        return undefined;
      }

      const selectedNodes = diagram.selectedItems.nodes || [];
      if (!selectedNodes || selectedNodes.length === 0) {
        return erEntity.fields[erEntity.fields.length - 1];
      }

      const selectedNode = selectedNodes[0];
      const parentId = (selectedNode.parentId || '');
      if (parentId === entityNode.id && entityNode.children) {
        const selectedChildIndex = entityNode.children.indexOf(selectedNode.id);
        if (selectedChildIndex > 0 && selectedChildIndex <= erEntity.fields.length) {
          return erEntity.fields[selectedChildIndex - 1];
        }
      }

      return erEntity.fields[erEntity.fields.length - 1];
    },
    createNewErField(node) {
      const erShape = node.shape;
      const fields = erShape.fields || [];

      const newField = {
        id: `${node.id}_field_${new Date().getTime()}`,
        name: 'NewField'
      };

      if (fields.length === 0) {
        return newField;
      }

      const lastField = fields[fields.length - 1];

      if (lastField.dataType && lastField.dataType !== '') {
        newField.dataType = 'VARCHAR(20)';
      }

      if (lastField.constraints && lastField.constraints.length > 0) {
        newField.constraints = ['NotNull'];
      }

      return newField;
    },
    getSelectedErEntity() {
      const diagram = this.$refs.diagramObj.ej2Instances;
      if (!diagram.selectedItems || !diagram.selectedItems.nodes || diagram.selectedItems.nodes.length === 0) {
        return undefined;
      }

      let selectedNode = diagram.selectedItems.nodes[0];
      selectedNode = diagram.nameTable[selectedNode.id] || selectedNode;

      if (selectedNode.shape && selectedNode.shape.type === 'Er') {
        return selectedNode;
      }

      if (selectedNode.parentId) {
        const parentNode = diagram.nameTable[selectedNode.parentId];
        if (parentNode && parentNode.shape && parentNode.shape.type === 'Er') {
          return parentNode;
        }
      }
      return undefined;
    }
  },
  provide: {
    diagram: [DataBinding, UndoRedo, LineRouting, AvoidLineOverlapping, ErDiagrams, DiagramContextMenu],
    SymbolPalette: [ErDiagrams],
  },
  mounted() {
    let paletteIcon = this.$refs.paletteIcon;
    let paletteSpace = this.$refs.paletteSpace;
    let isMobile = window.matchMedia("(max-width:550px)").matches;

    if (isMobile) {
      if (paletteIcon) {
        paletteIcon.addEventListener("click", () => {
          openPalette(paletteSpace);
        }, false);
      }
    }
  }
};

// Toggles the visibility of the palette space on mobile devices when the palette icon is clicked.
function openPalette(paletteSpace) {
  let isMobile = window.matchMedia("(max-width:550px)").matches;
  if (isMobile) {
    if (!paletteSpace.classList.contains("sb-mobile-palette-open")) {
      paletteSpace.classList.add("sb-mobile-palette-open");
    } else {
      paletteSpace.classList.remove("sb-mobile-palette-open");
    }
  }
}
</script>
