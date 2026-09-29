<template>
  <div class="control-section serpentine-diagram-container">
    <div class="sample-section">
      <div class="content-wrapper">
        <div class="diagram-header">
          <h3 class="custom-centered-text">Medical Research Breakthroughs</h3>
          <p class="custom-centered-text sub-text">
            A serpentine journey through 20 pivotal medical discoveries that changed healthcare forever
          </p>
        </div>
        <div class="zoom-controls-container" style="padding: 0 0 15px 0; text-align: center;">
          <ejs-button
            v-for="button in zoomButtons"
            :key="button.id"
            :id="button.id"
            :isPrimary="button.isPrimary"
            v-on:click="zoomButtonClick(button)"
          >
            {{ button.text }}
          </ejs-button>
        </div>
        <div>
          <ejs-diagram
            ref="diagramObject"
            id="serpentineDiagram"
            :width="width"
            :height="height"
            :backgroundColor="backgroundColor"
            :rulerSettings="rulerSettings"
            :snapSettings="snapSettings"
            :scrollSettings="scrollSettings"
            :tool="tool"
            :nodes="nodes"
            :connectors="connectors"
          >
          </ejs-diagram>
        </div>
      </div>
    </div>
  </div>
  <div id="action-description">
      <p>
          This sample visualizes a serpentine layout using the Syncfusion<sup>®</sup> EJ2 Vue Diagram to showcase 20 important medical research breakthroughs that transformed healthcare between 1796 and 1996.
      </p>
  </div>
  <div id="description">
      <p>
          A serpentine layout arranges elements along a zigzagging or winding path. This timeline presents each breakthrough as part of a continuous sequence. When the layout reaches the edge of the view, it wraps to the next line and reverses direction, creating a true serpentine flow.    
      </p>
      <p>
          <strong>Key Features:</strong>
      </p>
      <ul>
          <li><strong>Dynamic Serpentine Flow:</strong> Nodes are automatically arranged in a winding path that wraps based on the available container width.</li>
          <li><strong>Interactive Nodes:</strong> Hover over any node to see a detailed tooltip with information about the medical breakthrough.</li>
          <li><strong>Custom Connectors:</strong> The timeline uses straight connectors for nodes in the same row and elegant bezier curves for wrapping between rows.</li>
          <li><strong>Zoom and Pan:</strong> Use the buttons to zoom in and out at specific zoom levels.</li>
      </ul>
      <br>
  </div>
</template>

<script>
import {
  DiagramComponent,
  DiagramTools,
  SnapConstraints,
  NodeConstraints,
  ConnectorConstraints,
  PortVisibility,
} from "@syncfusion/ej2-vue-diagrams";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { Rect } from '@syncfusion/ej2-diagrams';

// --- Data and Layout Constants ---
const medicalBreakthroughs = [
  { id: '1', year: '1796', title: 'Smallpox Vaccine', description: 'Edward Jenner develops the first successful vaccine using cowpox, marking a historic milestone in immunology.' },
  { id: '2', year: '1846', title: 'First Use of Anesthesia', description: 'William T. G. Morton demonstrates ether anesthesia publicly, revolutionizing surgical procedures by enabling pain-free operations.' },
  { id: '3', year: '1865', title: 'Germ Theory of Disease', description: 'Louis Pasteur proves microorganisms cause disease, establishing the foundation of modern microbiology.' },
  { id: '4', year: '1882', title: 'Discovery of the Tuberculosis Bacterium', description: 'Robert Koch identifies Mycobacterium tuberculosis, paving the way for accurate TB diagnosis and effective treatment.' },
  { id: '5', year: '1895', title: 'Discovery of X-Rays', description: 'Wilhelm Röntgen discovers X-rays, transforming medical imaging and diagnostic practices worldwide.' },
  { id: '6', year: '1901', title: 'Classification of Blood Types', description: 'Karl Landsteiner classifies major blood groups (A, B, O), enabling safe and reliable blood transfusions.' },
  { id: '7', year: '1921', title: 'Discovery of Insulin', description: 'Frederick Banting and Charles Best isolate insulin, turning diabetes into a manageable chronic condition.' },
  { id: '8', year: '1923', title: 'Diphtheria Vaccine Developed', description: 'Widespread use of the diphtheria toxoid vaccine begins, drastically reducing deaths from the disease.' },
  { id: '9', year: '1928', title: 'Discovery of Penicillin', description: 'Alexander Fleming discovers the first true antibiotic, heralding the antibiotic era.' },
  { id: '10', year: '1935', title: 'Sulfonamides Introduced', description: 'Sulfonamides, the first synthetic antibiotics, are introduced to effectively treat diverse bacterial infections.' },
  { id: '11', year: '1953', title: 'DNA Structure Identified', description: 'James Watson and Francis Crick reveal the double-helix structure of DNA, laying the groundwork for modern genetics.' },
  { id: '12', year: '1955', title: 'Polio Vaccine Approved', description: 'Jonas Salk’s IPV is approved as safe and effective, drastically reducing global polio cases.' },
  { id: '13', year: '1960', title: 'Introduction of Oral Contraceptives', description: 'The FDA approves the first oral contraceptive pill, revolutionizing reproductive health and social norms.' },
  { id: '14', year: '1967', title: 'First Human Heart Transplant', description: 'Dr. Christiaan Barnard performs the first successful human heart transplant, redefining cardiac surgery.' },
  { id: '15', year: '1971', title: 'CT Scan Invented', description: 'Godfrey Hounsfield and Allan Cormack invent CT scanning, dramatically improving internal medical imaging.' },
  { id: '16', year: '1978', title: 'Birth of First IVF Baby', description: 'Louise Brown becomes the first baby born through IVF, marking a breakthrough in reproductive medicine.' },
  { id: '17', year: '1980', title: 'Smallpox Eradicated', description: 'WHO declares smallpox eradicated, a historic triumph of global vaccination efforts.' },
  { id: '18', year: '1983', title: 'HIV Identified', description: 'Luc Montagnier and Robert Gallo identify HIV as the virus responsible for AIDS.' },
  { id: '19', year: '1990', title: 'Launch of Human Genome Project', description: 'The Human Genome Project launches, aiming to map all human genes and revolutionize personalized medicine.' },
  { id: '20', year: '1996', title: 'Introduction of HAART for HIV', description: 'HAART becomes the standard HIV treatment, transforming it into a manageable chronic condition.' }
];

const palette = ['#2E86C1', '#2A6F1C', '#C25107', '#8E44AD', '#C0392B', '#40566d', '#8E7302'];

// Layout constants aligned with TS sample
const nodeSize = 110;
const hGap = 60;
const vGap = 150;
const baseMargin = 50;
const curveRadius = hGap * 1.5;
const curveBowOffset = 70;
const curvePadding = curveRadius + (2 * curveBowOffset);
const totalMargin = baseMargin + curvePadding;
const initialY = 80;

// Connector visuals
const CONNECTOR_STROKE_WIDTH = 12;
const DECORATOR_WIDTH = 20;
const DECORATOR_HEIGHT = 30;
const DECORATOR_PIVOT_INNER = 0.25;
const DECORATOR_PIVOT_OUTER = 0.25;
const DECORATOR_PATH = 'M 16 16 c -8 1 -7 1 -11 3 C 7 16 7 13 5 10 c 4 2 3 2 11 3 z';

const area = new Rect(0, 0, 1500, 1500);

export default {
  components: {
    'ejs-diagram': DiagramComponent,
    'ejs-button': ButtonComponent,
  },
  data: function () {
    return {
      diagram: null,
      width: '100%',
      height: '600px',
      snapSettings: { constraints: SnapConstraints.None },
      scrollSettings: { scrollableArea: area, padding: { right: 50, bottom: 50 } },
      tool: DiagramTools.ZoomPan,
      nodes: [],
      connectors: [],
      zoomButtons: [
        { id: 'zoom-065', text: '0.65x', level: 0.65, isPrimary: true },
        { id: 'zoom-075', text: '0.75x', level: 0.75, isPrimary: false },
        { id: 'zoom-085', text: '0.85x', level: 0.85, isPrimary: false },
        { id: 'zoom-1', text: '1x', level: 1, isPrimary: false },
      ],
    };
  },
  mounted: function () {
    this.diagram = this.$refs.diagramObject.ej2Instances;

    // Set initial zoom to 0.65 and center focus before first render
    requestAnimationFrame(() => {
      const INITIAL_ZOOM = 0.65;
      const currentZoom = this.diagram.scrollSettings.currentZoom || 0.65;
      const focusPoint = {
        x: this.diagram.scrollSettings.viewPortWidth / 2,
        y: this.diagram.scrollSettings.viewPortHeight / 2,
      };
      if (Math.abs(currentZoom - INITIAL_ZOOM) > 0.001) {
        this.diagram.zoom(INITIAL_ZOOM / currentZoom, focusPoint);
      }
      this.diagram.scrollSettings.horizontalOffset = 0;
      this.diagram.scrollSettings.verticalOffset = 0;
      this.renderSerpentineLayout();
    });

    // Debounced resize
    this._resizeRaf = 0;
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount: function () {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize: function () {
      if (this._resizeRaf) cancelAnimationFrame(this._resizeRaf);
      this._resizeRaf = requestAnimationFrame(() => {
        this.renderSerpentineLayout();
      });
    },
    zoomButtonClick: function (clickedButton) {
      const currentZoom = this.diagram.scrollSettings.currentZoom || 0.65;
      const targetZoom = clickedButton.level;
      const zoomFactor = targetZoom / currentZoom;

      const focusPoint = {
        x: this.diagram.scrollSettings.viewPortWidth / 2,
        y: this.diagram.scrollSettings.viewPortHeight / 2,
      };
      this.diagram.zoom(zoomFactor, focusPoint);

      this.renderSerpentineLayout();

      this.diagram.scrollSettings.horizontalOffset = 0;
      this.diagram.scrollSettings.verticalOffset = 0;
      this.diagram.dataBind();

      this.zoomButtons.forEach(btn => {
        btn.isPrimary = btn.id === clickedButton.id;
      });
    },
    createDecorator(color, pivotX) {
      return {
        shape: 'Custom',
        width: DECORATOR_WIDTH,
        height: DECORATOR_HEIGHT,
        pivot: { x: pivotX },
        pathData: DECORATOR_PATH,
        style: { fill: color, strokeColor: color }
      };
    },
    renderSerpentineLayout: function () {
      const container = this.diagram.element;
      if (!container) return;

      const zoom = this.diagram.scrollSettings.currentZoom || 1;
      const effectiveWidth = container.clientWidth / zoom;

      const newNodes = [];
      const newConnectors = [];

      let currentX = totalMargin + nodeSize / 2;
      let currentY = initialY;
      let direction = 1; // 1 = L->R, -1 = R->L

      medicalBreakthroughs.forEach((breakthrough, index) => {
        const exceedsRight = direction === 1 && currentX + nodeSize / 2 > effectiveWidth - totalMargin;
        const exceedsLeft = direction === -1 && currentX - nodeSize / 2 < totalMargin;

        if (exceedsRight || exceedsLeft) {
          currentY += vGap;
          direction = direction === 1 ? -1 : 1;
          currentX = direction === 1
            ? totalMargin + nodeSize / 2
            : effectiveWidth - totalMargin - nodeSize / 2;
        }

        const color = palette[index % palette.length];
        const node = {
          id: `breakthrough_${breakthrough.id}`,
          offsetX: currentX,
          offsetY: currentY,
          width: nodeSize,
          height: nodeSize,
          shape: { type: 'Basic', shape: 'Ellipse' },
          style: { fill: color, strokeColor: 'white', strokeWidth: 4 },
          annotations: [
            { content: breakthrough.year, offset: { y: 0.3 }, style: { color: 'white', fontSize: 16, bold: true } },
            { content: breakthrough.title, width: 80, offset: { y: 0.65 }, style: { color: 'white', fontSize: 12, textOverflow: 'Wrap', textWrapping: 'WrapWithOverflow' } },
          ],
          ports: [
            { id: 'port_left', offset: { x: 0, y: 0.5 }, visibility: PortVisibility.Hidden },
            { id: 'port_right', offset: { x: 1, y: 0.5 }, visibility: PortVisibility.Hidden },
          ],
          // Disable selection, enable tooltips (aligned with TS)
          constraints: (NodeConstraints.Default | NodeConstraints.Tooltip) & ~NodeConstraints.Select,
          tooltip: {
            content: `<p style="font-size: small;"><b>${breakthrough.title} (${breakthrough.year})</b><br/><br/>${breakthrough.description}</p>`,
            position: 'BottomCenter',
            relativeMode: 'Object',
            width: 200,
          },
        };
        newNodes.push(node);
        currentX += direction * (nodeSize + hGap);
      });

      for (let i = 0; i < newNodes.length - 1; i++) {
        const sourceNode = newNodes[i];
        const targetNode = newNodes[i + 1];
        const isRowChange = sourceNode.offsetY !== targetNode.offsetY;

        let sourcePortId, targetPortId;
        if (isRowChange) {
          const nextRowStartsOnRight = sourceNode.offsetX < targetNode.offsetX;
          sourcePortId = nextRowStartsOnRight ? 'port_right' : 'port_left';
          targetPortId = sourcePortId;
        } else {
          const leftToRight = sourceNode.offsetX < targetNode.offsetX;
          sourcePortId = leftToRight ? 'port_right' : 'port_left';
          targetPortId = leftToRight ? 'port_left' : 'port_right';
        }

        const color = sourceNode.style.fill;

        const connector = {
          id: `connector_${i + 1}`,
          sourceID: sourceNode.id,
          targetID: targetNode.id,
          sourcePortID: sourcePortId,
          targetPortID: targetPortId,
          style: { strokeColor: color, strokeWidth: CONNECTOR_STROKE_WIDTH },
          targetDecorator: this.createDecorator(color, isRowChange ? 0 : DECORATOR_PIVOT_INNER),
          sourceDecorator: this.createDecorator(color, DECORATOR_PIVOT_OUTER),
          constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Select,
        };

        if (isRowChange) {
          // Outer-side control point with slight amplification (1.3) for smoother S-bend
          const goingRight = sourceNode.offsetX < targetNode.offsetX;
          const sign = goingRight ? 1.3 : -1.3;
          const controlX = sourceNode.offsetX + sign * (nodeSize / 2 + curveRadius + 2 * curveBowOffset);

          connector.type = 'Bezier';
          connector.segments = [
            {
              type: 'Bezier',
              point1: { x: controlX, y: sourceNode.offsetY + 5 },
              point2: { x: controlX, y: targetNode.offsetY - 15 },
            },
          ];
        } else {
          connector.type = 'Straight';
        }

        newConnectors.push(connector);
      }

      this.diagram.nodes = newNodes;
      this.diagram.connectors = newConnectors;
      this.diagram.dataBind();
    },
  },
};
</script>

<style>
.serpentine-diagram-container {
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 600px;
}

.serpentine-diagram-container .diagram-header h3 {
  color: #495057;
  font-weight: 600;
  margin-top: 0px;
}

.serpentine-diagram-container .sub-text {
  color: #777;  
}

.serpentine-diagram-container .custom-centered-text {
  text-align: center;
}

@media (max-width: 768px) {
  .serpentine-diagram-container {
    padding: 10px;
  }
}
</style>