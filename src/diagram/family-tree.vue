<template>
  <div class="control-section family-tree" style="width: 100%">
    <ejs-diagram ref="diagram" id="diagram" width="100%" height="600px" :snapSettings="snapSettings" :tool="tool"
      :layout="layout" :dataSourceSettings="dataSourceSettings" :setNodeTemplate="setNodeTemplate"
      :getConnectorDefaults="getConnectorDefaults" :mouseEnter="onMouseEnter" :mouseLeave="onMouseLeave"
      :dataLoaded="onDataLoaded" />
  </div>
  <div id="action-description">
    <p>
      This sample showcases a family tree built with the Syncfusion<sup>®</sup> EJ2 Vue Diagram,
      illustrating complex hierarchical relationships through customizable node templates, interactive hover details,
      and relation-based highlighting.
    </p>
  </div>
  <div id="description">
    <p>
      The diagram uses a complex hierarchical tree layout to automatically arrange family members in a clear,
      top-to-bottom structure. Each node is rendered using a custom HTML template that displays the individual’s
      photo, name, and lifespan. On hover, the node expands to reveal relationship details, while related members are
      highlighted and all other nodes are dimmed to enhance focus.
    </p>
  </div>
</template>
<style>
/* Diagram surface */
.family-tree {
  background: #FFFFFF;
}

.family-tree .e-diagram {
  background: transparent;
}

.family-tree #diagramcontent {
  overflow: hidden !important;
}

/* ===================== Node base ===================== */
.family-tree .person-node-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FFDBD1;
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .16);
  box-sizing: border-box;
  position: relative;
  transition: opacity 0.5s ease;
  will-change: transform;
  user-select: none;
}

.family-tree .person-node-container:hover {
  cursor: default !important;
  background: #f5e1a7;
}

/* Dim state driven by template */
.family-tree .person-node-container.is-dim {
  opacity: 0.25;
  filter: grayscale(50%);
  transition: opacity 0.2s ease-out, filter 0.3s ease;
}

/* ===================== Open state driven by template ===================== */
.family-tree .person-node-container.is-open .person-image-circle {
  position: absolute;
  top: 10px;
  left: 10px;
  margin: 0;
  width: 80px;
  height: 80px;
}

.family-tree .person-node-container.is-open .person-header {
  text-align: left;
  margin-left: 90px;
}

.family-tree .person-node-container.is-open .person-bio {
  max-height: 200px;
  opacity: 1;
}

.family-tree .person-node-container.is-open .person-full-name {
  display: block;
  font-size: 20px;
  text-align: left;
}

.family-tree .person-node-container.is-open .person-first-name {
  display: none;
}

.family-tree .person-node-container.is-open .person-tenure {
  font-size: 16px;
  text-align: left;
}

/* ===================== Card layout ===================== */
.family-tree .person-card {
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 8.5px;
  padding: 12px 8px 3px;
  border-radius: 10px;
  border: 2px solid #85736E;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
}

/* ===================== Avatar ===================== */
.family-tree .person-image-circle {
  width: 98px;
  height: 98px;
  border-radius: 50%;
  margin: 0 auto;
  background: #f0f0f0;
  border: 3px solid #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.family-tree .person-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ===================== Header/Text ===================== */
.family-tree .person-header {
  text-align: center;
  line-height: 1.2;
  position: relative;
  z-index: 1;
}

.family-tree .person-first-name,
.family-tree .person-full-name {
  font-weight: 600;
  font-size: 21px;
  line-height: 1.2;
  text-align: center;
  color: #723523;
}

/* By default show first name only; full name appears when is-open */
.family-tree .person-full-name {
  display: none;
}

.family-tree .person-tenure {
  font-size: 15px;
  color: #53433F;
  opacity: 0.85;
  margin-top: 4px;
  text-align: center;
}

/* ===================== Bio ===================== */
.family-tree .person-bio {
  color: #723523;
  font-size: 18px;
  line-height: 1.35;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  margin-left: 90px;
  transition: opacity 0.2s ease;
}

/* ===================== Diagram visuals ===================== */

/* Node width transition (diagram updates width on hover) */
.family-tree [id$='_html_element'] {
  transition: all 80ms ease;
}

/* Connector animation */
.family-tree [id$='_path'] {
  transition: opacity 0.4s ease, stroke 0.4s ease, stroke-width 0.4s ease;
}
</style>

<script>
import {
  DiagramComponent, SnapConstraints, DiagramTools,
  DataBinding, ComplexHierarchicalTree
} from '@syncfusion/ej2-vue-diagrams';
import { DataManager } from '@syncfusion/ej2-data';
import { familyTreeData } from './diagram-data';

export default {
  components: {
    'ejs-diagram': DiagramComponent,
  },
  provide: {
    diagram: [DataBinding, ComplexHierarchicalTree]
  },
  data() {
    return {
      // Constants
      NODE_WIDTH: 140,
      NODE_HEIGHT: 180,
      HOVER_WIDTH: 320,
      CONNECTOR_COLORS: {
        baseConnector: '#85736E',
        highlightedConnector: '#723523',
      },

      // Diagram refs/state
      snapSettings: { constraints: SnapConstraints.None },
      tool: DiagramTools.ZoomPan,

      layout: {
        type: 'ComplexHierarchicalTree',
        orientation: 'TopToBottom',
        horizontalAlignment: 'Center',
        verticalAlignment: 'Top',
        horizontalSpacing: 150,
        verticalSpacing: 50
      },

      dataSourceSettings: null,
      // HTML node template hook for Vue wrapper
      setNodeTemplate: (node) => {
        const data = node.data;
        if (data && data.Type === 'Union') return;
        const UI = this.nodeState.get(data.Id) || {};
        node.shape.content = this.getUpdatedTemplate(data, UI);
      },
      // Connector defaults
      getConnectorDefaults: (connector) => {
        connector.type = 'Orthogonal';
        connector.style = {
          strokeColor: this.CONNECTOR_COLORS.baseConnector,
          strokeWidth: 2
        };
        connector.targetDecorator = { shape: 'None' };
        connector.cornerRadius = 5;
        return connector;
      },

      // UI state
      nodeState: new Map(),
      ORIGINAL_SIZE: new Map(),
      hoveredId: null,

      // Data
      DATA_SOURCE: familyTreeData,

      // Relations
      RELATIONS: null,

      /* ===================== Hover/events ===================== */
      onMouseEnter: (args) => {
        const node = args && args.actualObject;
        // Skip if not a normal person node
        if (!node || node.sourceID || node.targetID || (node.data && node.data.Type === 'Union')) return;
        if (node.id) this.focusHover(String(node.id));
      },

      onMouseLeave: () => {
        this.clearHover();
      },

      onDataLoaded: () => {
        // fitToPage after initial layout
        this.$nextTick(() => {
          const diagram = this.diagram();
          diagram.fitToPage();
        });
      },

    };
  },

  created() {
    // Build relation maps once
    this.RELATIONS = this.buildRelations(this.DATA_SOURCE);

    // Setup dataSourceSettings with doBinding
    this.dataSourceSettings = {
      id: 'Id',
      parentId: 'Parents',
      dataSource: new DataManager(this.DATA_SOURCE),
      doBinding: (node, raw) => {
        node.id = String(raw.Id);
        node.data = raw;

        if (raw.Type === 'Union') {
          node.width = 0;
          node.height = 0;
          node.shape = { type: 'Basic', shape: 'Rectangle' };
          node.style = { fill: 'transparent', strokeColor: 'transparent' };
          node.visible = false;
        } else {
          // Build image URL (adjust path as needed)
          raw.ImageUrl = `./src/diagram/Images/family-tree/${raw.Name}.png`;
          node.shape = { type: 'HTML' }; // content provided by setNodeTemplate
          node.width = this.NODE_WIDTH;
          node.height = this.NODE_HEIGHT;
        }
      }
    };
  },

  methods: {
    // Helper to reference Ej2 instance
    diagram() {
      return this.$refs.diagram && this.$refs.diagram.ej2Instances;
    },

    /* ===================== Relations building ===================== */
    buildRelations(data) {
      const unions = data.filter((d) => d.Type === 'Union');
      const spouseOf = new Map();
      const unionOf = new Map();
      const parentsByChild = new Map();
      const childrenByParent = new Map();

      unions.forEach((u) => {
        const [a, b] = (u.Parents || []);
        if (!a || !b) return;
        unionOf.set(u.Id, [a, b]);
        spouseOf.set(a, b);
        spouseOf.set(b, a);
      });

      data.forEach((n) => {
        if (Array.isArray(n.Parents)) {
          parentsByChild.set(n.Id, n.Parents.slice());
          n.Parents.forEach((ref) => {
            const pr = unionOf.get(ref);
            if (!pr) return;
            const [pa, pb] = pr;
            if (!childrenByParent.has(pa)) childrenByParent.set(pa, new Set());
            if (!childrenByParent.has(pb)) childrenByParent.set(pb, new Set());
            childrenByParent.get(pa).add(n.Id);
            childrenByParent.get(pb).add(n.Id);
          });
        }
      });

      return { spouseOf, unionOf, parentsByChild, childrenByParent };
    },

    relatedSet(personId) {
      const people = new Set([personId]);
      const spouse = this.RELATIONS.spouseOf.get(personId);
      if (spouse) people.add(spouse);

      // parents via unions
      const parentUnions = new Set(this.RELATIONS.parentsByChild.get(personId) || []);
      parentUnions.forEach((u) => (this.RELATIONS.unionOf.get(u) || []).forEach((p) => people.add(p)));

      // children
      const kids = this.RELATIONS.childrenByParent.get(personId);
      if (kids) kids.forEach((k) => people.add(k));

      // unions tying hovered/spouse to children
      const unions = new Set(parentUnions);
      const spouseOrSelf = new Set([personId, ...(spouse ? [spouse] : [])]);
      (kids || new Set()).forEach((childId) => {
        const parents = this.RELATIONS.parentsByChild.get(childId) || [];
        parents.forEach((u) => {
          const pair = this.RELATIONS.unionOf.get(u);
          if (pair && (spouseOrSelf.has(pair[0]) || spouseOrSelf.has(pair[1]))) {
            unions.add(u);
          }
        });
      });

      const nodeSet = new Set(people);
      unions.forEach((u) => nodeSet.add(u));
      return { people, nodeSet };
    },

    /* ===================== Node HTML builder ===================== */
    getUpdatedTemplate(data, UI) {
      const isOpen = !!UI.isOpen;
      const isDim = !!UI.isDimmed;

      const containerCls = [
        'person-node-container',
        isOpen ? 'is-open' : '',
        isDim ? 'is-dim' : ''
      ].filter(Boolean).join(' ');

      const name = data.Name || '';
      const first = data.FirstName || '';
      const tenure = data.Tenure || '';
      const desc = data.Description || '';

      return `
<div class="${containerCls}">
  <div class="person-card">

    <!-- Avatar -->
    <div class="person-image-circle">
      ${data.ImageUrl ? `<img src="${data.ImageUrl}" class="person-image" alt="${name}" />` : ''}
    </div>

    <!-- Header: name + tenure -->
    <div class="person-header">
      <div class="person-full-name">${name}</div>
      <div class="person-first-name">${first}</div>
      <div class="person-tenure">${tenure}</div>
    </div>

    <!-- Bio -->
    <div class="person-bio">${desc}</div>
  </div>
</div>`;
    },

    // Rebuild HTML for a node
    renderNode(id) {
      const diagram = this.diagram();
      if (!diagram) return;
      const node = diagram.getObject(id);
      if (!node || (node.data && node.data.Type === 'Union')) return;
      const data = node.data;
      const UI = this.nodeState.get(id) || {};
      node.shape = { type: 'HTML', content: this.getUpdatedTemplate(data, UI) };
    },

    /* ===================== State-driven visuals ===================== */
    focusHover(id) {
      const diagram = this.diagram();
      if (!diagram) return;

      const { people, nodeSet } = this.relatedSet(id);

      if (this.hoveredId && this.hoveredId !== id) this.restoreNodeSize(this.hoveredId);

      // Compute and set UI state for all person nodes
      diagram.nodes.forEach((n) => {
        if (n.data && n.data.Type === 'Union') return;
        const nodeId = String(n.id);
        const isDimmed = nodeId !== id && !people.has(nodeId);
        const isOpen = nodeId === id;
        this.nodeState.set(nodeId, { isDimmed, isOpen });
        this.renderNode(nodeId); // rebuild HTML with classes baked in
      });

      this.expandNodeWidth(id);
      this.paintConnectors(nodeSet);

      this.hoveredId = id;
      diagram.dataBind();
    },

    clearHover() {
      const diagram = this.diagram();
      if (!diagram) return;

      if (this.hoveredId) {
        this.restoreNodeSize(this.hoveredId);
        this.hoveredId = null;
      }

      // Reset state for all nodes and rebuild HTML
      diagram.nodes.forEach((n) => {
        if (n.data && n.data.Type === 'Union') return;
        const nodeId = String(n.id);
        this.nodeState.set(nodeId, { isOpen: false, isDimmed: false });
        this.renderNode(nodeId);
      });

      // Reset connectors
      diagram.connectors.forEach((connector) => {
        connector.style = {
          strokeColor: this.CONNECTOR_COLORS.baseConnector,
          strokeWidth: 2,
          opacity: 1
        };
      });

      diagram.dataBind();
    },

    /* ===================== Node sizing ===================== */
    expandNodeWidth(id) {
      const diagram = this.diagram();
      if (!diagram) return;
      const node = diagram.getObject(id);
      if (!node) return;
      if (node.data && node.data.Type === 'Union') return;

      if (!this.ORIGINAL_SIZE.has(id)) {
        this.ORIGINAL_SIZE.set(id, { width: node.width, height: node.height });
      }
      node.width = this.HOVER_WIDTH;
    },

    restoreNodeSize(id) {
      const diagram = this.diagram();
      if (!diagram) return;
      const node = diagram.getObject(id);
      if (!node) return;
      const orig = this.ORIGINAL_SIZE.get(id);
      if (orig) {
        node.width = orig.width;
        node.height = orig.height;
      }
    },

    /* ===================== Connectors paint ===================== */
    paintConnectors(nodeSet) {
      const diagram = this.diagram();
      if (!diagram) return;
      diagram.connectors.forEach((connector) => {
        const sourceConn = connector.sourceID;
        const targetConn = connector.targetID;
        const hasRelations =
          !!(sourceConn && targetConn && nodeSet.has(sourceConn) && nodeSet.has(targetConn));

        connector.style = {
          strokeColor: hasRelations ? this.CONNECTOR_COLORS.highlightedConnector : this.CONNECTOR_COLORS.baseConnector,
          opacity: hasRelations ? 1 : 0.2
        };
      });
    }
  }
};
</script>
