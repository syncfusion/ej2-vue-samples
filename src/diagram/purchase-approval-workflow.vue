<template>
  <div class="control-section">
    <div class="approval-sample">
      <div class="approval-layout">
        <div class="diagram-pane">
          <ejs-diagram
            ref="diagramObj"
            id="diagram"
            :width="width"
            :height="height"
            :nodes="nodes"
            :connectors="connectors"
            :nodeTemplate="nodeTemplate"
            :annotationTemplate="annotationTemplate"
            :userHandleTemplate="userHandleTemplate"
            :selectedItems="selectedItems"
            :tool="tool"
            :snapSettings="snapSettings"
            :getNodeDefaults="getNodeDefaults"
            :created="onCreated"
            :selectionChange="onSelectionChange"
            :onUserHandleMouseDown="onUserHandleMouseDown"
          ></ejs-diagram>
        </div>
        <aside class="properties" aria-label="Purchase request details">
          <h3>Purchase request</h3>
          <p class="intro">
            Submit a valid equipment request. The budget is checked first, then
            the workflow pauses at Manager Review for approval.
          </p>

          <label class="field"
            ><span>Equipment</span
            ><input id="propertyItem" value="Ergonomic monitors"
          /></label>
          <label class="field"
            ><span>Requester</span
            ><input id="propertyRequester" value="Maya Chen"
          /></label>
          <label class="field"
            ><span>Business reason</span
            ><textarea id="propertyReason">
Replace outdated design-team displays</textarea
            >
          </label>
          <div class="field-row">
            <label class="field"
              ><span>Quantity</span
              ><input id="propertyQuantity" type="number" min="1" value="6"
            /></label>
            <label class="field"
              ><span>Unit price</span
              ><input id="propertyUnitPrice" type="number" min="1" value="420"
            /></label>
          </div>
          <div id="validationMessage" class="validation" hidden></div>
          <div class="actions">
            <button id="submitRequest" class="primary">Submit request</button>
            <button id="resetWorkflow" class="secondary" disabled>
              Reset
            </button>
          </div>
          <div id="workflowMessage" class="workflow-message">
            Enter the request details, then submit it for manager approval.
          </div>
        </aside>
      </div>
    </div>
     <div id="action-description">
          <p>
              This sample demonstrates an equipment purchase approval workflow using the Syncfusion<sup>®</sup> EJ2 Vue Diagram component. It visualizes the end-to-end process, from request submission and budget validation to manager approval, purchase order creation, and final outcome tracking.
          </p>
      </div>

      <div id="description">
          <p>
              This sample showcases an interactive equipment purchase approval workflow using the Syncfusion<sup>®</sup> EJ2 Vue Diagram component. HTML nodes display purchase details for each stage, while connectors represent the workflow path and annotation templates display the current status of each stage. The <code>refreshTemplate</code> API updates the node and annotation templates at runtime.
          </p>
          <p>
              The workflow validates the equipment name, requester, business reason, quantity, and unit price before allowing a request to be submitted. When the user clicks the <b>Submit Request</b> button, the workflow first checks the available budget. If the request is within the available budget, the workflow pauses at <b>Manager Review</b> and displays <b>Approve</b> and <b>Reject</b> handles on the selected manager node. Approval creates a purchase order and moves the request toward completion, while rejection or an insufficient budget follows the red path to a rejected outcome. The <b>Reset</b> option clears the workflow and prepares it for a new request.
          </p>
      </div>
  </div>
</template>

<style>
.approval-sample {
  width: 100%;
  height: 560px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  background: #f8fafc;
}
.approval-sample .approval-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 220px;
  height: 100%;
}
.approval-sample .diagram-pane {
  min-width: 0;
  background: #f8fafc;
}
.approval-sample #diagram {
  width: 100%;
  height: 100%;
}

.approval-sample .properties {
  padding: 14px;
  overflow: auto;
  border-left: 1px solid #e2e8f0;
  background: #fff;
  color: #1e293b;
}
.approval-sample .properties h3 {
  margin: 0 0 4px;
  font-size: 17px;
}
.approval-sample .properties .intro {
  margin: 0 0 14px;
  color: #64748b;
  font-size: 10px;
  line-height: 1.4;
}
.approval-sample .field {
  display: block;
  margin-top: 10px;
}
.approval-sample .field span {
  display: block;
  margin-bottom: 4px;
  color: #475569;
  font-size: 10px;
  font-weight: 650;
}
.approval-sample .field input,
.approval-sample .field textarea {
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 8px 9px;
  color: #1e293b;
  background: #fff;
  font: inherit;
  font-size: 11px;
  font-weight: 400;
}
.approval-sample .field textarea {
  min-height: 56px;
  resize: vertical;
}
.approval-sample .field input:disabled,
.approval-sample .field textarea:disabled {
  color: #64748b;
  background: #f1f5f9;
}
.approval-sample .field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.approval-sample .actions {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 7px;
  margin-top: 13px;
}
.approval-sample .actions button {
  min-height: 36px;
  border-radius: 8px;
  padding: 8px 11px;
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
}
.approval-sample .actions .primary {
  border: 0;
  color: #fff;
  background: #4f46e5;
}
.approval-sample .actions .secondary {
  border: 1px solid #cbd5e1;
  color: #334155;
  background: #fff;
}
.approval-sample .actions button:disabled {
  cursor: default;
  opacity: 0.55;
}
.approval-sample .validation {
  margin-top: 10px;
  padding: 8px;
  border-radius: 7px;
  color: #991b1b;
  background: #fef2f2;
  font-size: 10px;
  line-height: 1.4;
}
.approval-sample .workflow-message {
  margin-top: 12px;
  padding: 9px;
  border-radius: 8px;
  color: #475569;
  background: #f1f5f9;
  font-size: 10px;
  line-height: 1.45;
}

.approval-sample .node-card {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 11px 12px;
  overflow: hidden;
  border: 1px solid #dbe3ec;
  border-radius: 13px;
  color: #1e293b;
  background: #fff;
  box-shadow: 0 7px 20px rgba(15, 23, 42, 0.07);
  text-align: left;
}
.approval-sample .node-card.state-active {
  border-color: #818cf8;
  box-shadow: 0 7px 22px rgba(79, 70, 229, 0.15);
}
.approval-sample .node-card.state-approved,
.approval-sample .node-card.state-completed {
  border-color: #a7f3d0;
}
.approval-sample .node-card.state-rejected {
  border-color: #fecaca;
}
.approval-sample .node-kicker {
  color: #64748b;
  font-size: 8px;
  font-weight: 750;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}
.approval-sample .node-title {
  margin-top: 3px;
  font-size: 12px;
  font-weight: 750;
}
.approval-sample .node-metrics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
  margin-top: 9px;
}
.approval-sample .node-metrics span {
  min-width: 0;
  padding: 7px;
  border-radius: 7px;
  background: #f8fafc;
}
.approval-sample .node-metrics small,
.approval-sample .node-metrics b {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.approval-sample .node-metrics small {
  color: #94a3b8;
  font-size: 8px;
}
.approval-sample .node-metrics b {
  margin-top: 2px;
  font-size: 10px;
}
.approval-sample .node-message {
  margin-top: 7px;
  overflow: hidden;
  color: #64748b;
  font-size: 8.5px;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.approval-sample .type-result {
  display: grid;
  align-content: center;
  text-align: center;
}
.approval-sample .type-result .node-metrics {
  grid-template-columns: 1fr;
  margin-top: 7px;
}
.approval-sample .type-result .node-metrics span:nth-child(2) {
  display: none;
}

.approval-sample .node-note {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 92px;
  height: 22px;
  padding: 0 8px;
  border: 1px solid #dbe3ec;
  border-radius: 99px;
  color: #64748b;
  background: #fff;
  box-shadow: 0 2px 7px rgba(15, 23, 42, 0.06);
  font-size: 8px;
  font-weight: 700;
}
.approval-sample .node-note.state-active {
  color: #4338ca;
  border-color: #c7d2fe;
  background: #eef2ff;
}
.approval-sample .node-note.state-approved,
.approval-sample .node-note.state-completed {
  color: #047857;
  border-color: #a7f3d0;
  background: #ecfdf5;
}
.approval-sample .node-note.state-rejected {
  color: #b91c1c;
  border-color: #fecaca;
  background: #fef2f2;
}

.approval-sample .user-action {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  border-radius: 50%;
  color: #fff;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.2);
  font-size: 17px;
  font-weight: 800;
  cursor: pointer;
}
.approval-sample .action-approve {
  background: #059669;
}
.approval-sample .action-reject {
  background: #dc2626;
}
.approval-sample .e-diagram-endpoint-handle.e-disabled,
.approval-sample .e-diagram-bezier-control-handle.e-disabled,
.approval-sample .e-diagram-resize-handle.e-disabled {
  opacity: 0;
}

@media (max-width: 850px) {
  .approval-sample .approval-layout {
    grid-template-columns: 1fr;
    grid-template-rows: 420px auto;
  }
  .approval-sample {
    height: auto;
  }
  .approval-sample .properties {
    border-top: 1px solid #e2e8f0;
    border-left: 0;
  }
}
</style>

<script>
import {
  Diagram,
  DiagramComponent,
  ConnectorConstraints,
  ConnectorModel,
  DiagramTools,
  NodeConstraints,
  NodeModel,
  PortVisibility,
  UserHandleEventsArgs,
  UserHandleModel,
} from '@syncfusion/ej2-vue-diagrams';

import { createApp } from 'vue';

let nodeVue = createApp({}).component('nodeTemplate', {
  template: `<div
    :class="[
      'node-card',
      'type-' + data.addInfo.type,
      'state-' + data.addInfo.status
    ]"
  >
    <div class="node-kicker">
      {{ data.addInfo.type }}
    </div>
    <div class="node-title">
      {{ data.addInfo.title }}
    </div>
    <div class="node-metrics">
      <span>
        <small>{{ data.addInfo.primaryLabel }}</small>
        <b>{{ data.addInfo.primaryValue }}</b>
      </span>
      <span>
        <small>{{ data.addInfo.secondaryLabel }}</small>
        <b>{{ data.addInfo.secondaryValue }}</b>
      </span>
    </div>
    <div class="node-message">
      {{ data.addInfo.message }}
    </div>
  </div>
`,
  data: function () {
    return {
      data: {
        addInfo: {
          type: '',
          title: '',
          status: 'waiting',
          statusText: '',
          primaryLabel: '',
          primaryValue: '',
          secondaryLabel: '',
          secondaryValue: '',
          message: '',
        },
      },
    };
  },
});

let annotationVue = createApp({}).component('annotationTemplate', {
  template: `<div
    :class="[
      'node-note',
      'state-' + data.addInfo.status
    ]"
  >
    {{ data.addInfo.text }}
  </div>
`,
  data: function () {
    return {
      data: {
        addInfo: {
          text: '',
          status: 'waiting',
        },
      },
    };
  },
});

let handleVue = createApp({}).component('userHandleTemplate', {
  template: `<div
    :class="[
      'user-action',
      data.name === 'approve' ? 'action-approve' : 'action-reject'
    ]"
    :title="data.name === 'approve' ? 'Approve request' : 'Reject request'"
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
    >
      <path
        v-if="data.name === 'approve'"
        d="M4 10.5l3.5 3.5L16 5.5"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        v-else
        d="M5.5 5.5l9 9M14.5 5.5l-9 9"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
      />
    </svg>
  </div>
`,
  data: function () {
    return {
      data: {
        name: '',
      },
    };
  },
});

let money = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

let statusLabels = {
  draft: 'Draft',
  waiting: 'Waiting',
  active: 'Action required',
  approved: 'Approved',
  completed: 'Completed',
  rejected: 'Rejected',
};

let connectorIds = [
  'request-budget',
  'budget-manager',
  'manager-purchase',
  'purchase-result',
  'manager-result',
  'budget-result',
];

let connectorStyle = { strokeColor: '#94a3b8', strokeWidth: 1.6 };

function makeNodeInfo(type, title) {
  return {
    type: type,
    title: title,
    status: type === 'request' ? 'draft' : 'waiting',
    statusText: type === 'request' ? 'Draft' : 'Waiting',
    primaryLabel: '',
    primaryValue: '',
    secondaryLabel: '',
    secondaryValue: '',
    message: '',
  };
}

function createNode(id, x, y, type, title) {
  return {
    id: id,
    offsetX: x,
    offsetY: y,
    width: 160,
    height: type === 'result' ? 140 : 135,
    shape: { type: 'HTML' },
    style: { fill: 'transparent', strokeColor: 'transparent' },
    addInfo: makeNodeInfo(type, title),
    ports: [
      {
        id: id + '-left',
        offset: { x: 0, y: 0.5 },
        visibility: PortVisibility.Hidden,
      },
      {
        id: id + '-right',
        offset: { x: 1, y: 0.5 },
        visibility: PortVisibility.Hidden,
      },
      {
        id: id + '-top',
        offset: { x: 0.5, y: 0 },
        visibility: PortVisibility.Hidden,
      },
      {
        id: id + '-bottom',
        offset: { x: 0.5, y: 1 },
        visibility: PortVisibility.Hidden,
      },
    ],
    annotations: [
      {
        id: id + '-status',
        annotationType: 'Template',
        content: '',
        offset: { x: 0.5, y: -0.11 },
        width: 85,
        height: 26,
        addInfo: {
          text: type === 'request' ? 'Draft' : 'Waiting',
          status: type === 'request' ? 'draft' : 'waiting',
        },
      },
    ],
  };
}

function createConnector(id, sourceID, targetID, sourcePortID, targetPortID) {
  return {
    id: id,
    sourceID: sourceID,
    targetID: targetID,
    sourcePortID: sourcePortID || sourceID + '-right',
    targetPortID: targetPortID || targetID + '-left',
    type: 'Orthogonal',
    cornerRadius: 12,
    constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Select,
    style: Object.assign({}, connectorStyle),
    targetDecorator: {
      shape: 'Arrow',
      width: 9,
      height: 9,
      style: { fill: '#94a3b8', strokeColor: '#94a3b8' },
    },
  };
}

let initialNodes= (() => {
  const nodes = [
      createNode('request', 100, 100, 'request', 'Equipment request'),
      createNode('manager', 100, 300, 'manager', 'Manager review'),
      createNode('budget', 300, 100, 'budget', 'Budget check'),
      createNode('purchase', 300, 300, 'purchase', 'Purchase order'),
      createNode('result', 510, 200, 'result', 'Request outcome')
  ];
  
  // Initialize with default data so templates render properly on first load
  nodes[0].addInfo = {
      type: 'request',
      title: 'Equipment request',
      status: 'draft',
      statusText: 'Draft',
      primaryLabel: 'Item',
      primaryValue: 'Ergonomic monitors',
      secondaryLabel: 'Total',
      secondaryValue: '$2,520',
      message: '6 × $420'
  };
  
  nodes[1].addInfo = {
      type: 'manager',
      title: 'Manager review',
      status: 'waiting',
      statusText: 'Waiting',
      primaryLabel: 'Requested by',
      primaryValue: 'Maya Chen',
      secondaryLabel: 'Amount',
      secondaryValue: '$2,520',
      message: 'Replace outdated design-team displays'
  };
  
  nodes[2].addInfo = {
      type: 'budget',
      title: 'Budget check',
      status: 'waiting',
      statusText: 'Waiting',
      primaryLabel: 'Available',
      primaryValue: '$5,000',
      secondaryLabel: 'Requested',
      secondaryValue: '$2,520',
      message: 'Within available budget'
  };
  
  nodes[3].addInfo = {
      type: 'purchase',
      title: 'Purchase order',
      status: 'waiting',
      statusText: 'Waiting',
      primaryLabel: 'Quantity',
      primaryValue: '6',
      secondaryLabel: 'Order value',
      secondaryValue: '$2,520',
      message: 'Created after all approvals'
  };
  
  nodes[4].addInfo = {
      type: 'result',
      title: 'Request outcome',
      status: 'waiting',
      statusText: 'Waiting',
      primaryLabel: 'Outcome',
      primaryValue: 'Pending',
      secondaryLabel: '',
      secondaryValue: '',
      message: 'Waiting for workflow completion'
  };
  
  return nodes;
})();

let initialConnectors = [
  createConnector(
    'request-budget',
    'request',
    'budget',
    'request-right',
    'budget-left'
  ),
  createConnector(
    'budget-manager',
    'budget',
    'manager',
    'budget-bottom',
    'manager-left'
  ),
  createConnector(
    'manager-purchase',
    'manager',
    'purchase',
    'manager-right',
    'purchase-left'
  ),
  createConnector('purchase-result', 'purchase', 'result'),
  createConnector(
    'manager-result',
    'manager',
    'result',
    'manager-bottom',
    'result-bottom'
  ),
  createConnector(
    'budget-result',
    'budget',
    'result',
    'budget-right',
    'result-left'
  ),
];

let managerHandles = [
  {
    name: 'approve',
    side: 'Bottom',
    offset: 0.32,
    size: 36,
    margin: { bottom: 13 },
    visible: false,
    tooltip: { content: 'Approve request' },
    disableConnectors: true,
  },
  {
    name: 'reject',
    side: 'Bottom',
    offset: 0.68,
    size: 36,
    margin: { bottom: 13 },
    visible: false,
    tooltip: { content: 'Reject request' },
    disableConnectors: true,
  },
];

export default {
  components: {
    'ejs-diagram': DiagramComponent,
  },
  data: function () {
    let request = {
      item: 'Ergonomic monitors',
      requester: 'Maya Chen',
      reason: 'Replace outdated design-team displays',
      quantity: 6,
      unitPrice: 420,
      budget: 5000,
    };
    return {
      width: '100%',
      height: '100%',
      request: request,
      stage: 'draft',
      rejectionReason: undefined,
      runToken: 0,
      pendingTimer: undefined,
      actionLocked: false,
      nodes: initialNodes,
      connectors: initialConnectors,
      money: money,
      nodeTemplate: function () {
        return { template: nodeVue };
      },
      annotationTemplate: function () {
        return { template: annotationVue };
      },
      userHandleTemplate: function () {
        return { template: handleVue };
      },
      selectedItems: { userHandles: managerHandles },
      tool: DiagramTools.SingleSelect | DiagramTools.ZoomPan,
      snapSettings: { gridType: 'Dots' },
      getNodeDefaults: (node) => {
        node.constraints =
          NodeConstraints.Default &
          ~(
            NodeConstraints.Resize |
            NodeConstraints.Rotate |
            NodeConstraints.Drag
          );
        return node;
      },
    };
  },
  provide: {
    diagram: [],
  },
  mounted: function () {
    this.diagram = this.$refs.diagramObj.ej2Instances;

    let inputs = [
      'propertyItem',
      'propertyRequester',
      'propertyReason',
      'propertyQuantity',
      'propertyUnitPrice',
    ];

    inputs.forEach((id) => {
      let element = this.byId(id);

      if (element) {
        element.addEventListener('input', this.readForm);
      }
    });

    let submitButton = this.byId('submitRequest');
    let resetButton = this.byId('resetWorkflow');

    if (submitButton) {
      submitButton.addEventListener('click', this.submitRequest);
    }

    if (resetButton) {
      resetButton.addEventListener('click', this.resetWorkflow);
    }

    this.resetWorkflow();
  },
  methods: {
    onCreated: function () {
      this.diagram =
        this.diagram ||
        (this.$refs.diagramObj && this.$refs.diagramObj.ej2Instances);

      if (!this.diagram) {
        return;
      }

      this.diagram.zoomTo({ zoomFactor: 0.45 });

      this.diagram.fitToPage();
      this.refreshAllContent();
    },
    onSelectionChange: function () {
      let self = this;
      window.setTimeout(function () {
        self.updateManagerHandles();
      }, 0);
    },
    onUserHandleMouseDown: function (args) {
      this.handleManagerDecision((args.element && args.element.name) || '');
    },
    byId: function (id) {
      return document.getElementById(id);
    },
    getNode: function (id) {
      return this.diagram.getObject(id);
    },
    setNode: function (id, changes) {
      let node = this.getNode(id);
      let info = Object.assign({}, node.addInfo, changes);
      node.addInfo = info;
      this.diagram.refreshTemplate(node);
    },
    setStatus: function (id, status, text) {
      if (text === undefined) {
        text = statusLabels[status];
      }
      let node = this.getNode(id);
      this.setNode(id, { status: status, statusText: text });
      let note = node.annotations[0];
      note.addInfo = { text: text, status: status };
      this.diagram.refreshTemplate(note, node);
    },
    setConnector: function (id, status) {
      let connector = this.diagram.getObject(id);
      let color = '#94a3b8';
      if (status === 'active') color = '#4f46e5';
      else if (status === 'completed') color = '#059669';
      else if (status === 'rejected') color = '#dc2626';
      connector.style = {
        strokeColor: color,
        strokeWidth: status === 'default' ? 1.6 : 2.2,
      };
      if (connector.targetDecorator && connector.targetDecorator.style) {
        connector.targetDecorator.style.fill = color;
        connector.targetDecorator.style.strokeColor = color;
      }
      this.diagram.dataBind();
    },
    total: function () {
      return this.request.quantity * this.request.unitPrice;
    },
    refreshAllContent: function () {
      let amount = this.total();
      this.setNode('request', {
        primaryLabel: 'Item',
        primaryValue: this.request.item,
        secondaryLabel: 'Total',
        secondaryValue: this.money.format(amount),
        message:
          this.request.quantity +
          ' \u00d7 ' +
          this.money.format(this.request.unitPrice),
      });
      this.setNode('manager', {
        primaryLabel: 'Requested by',
        primaryValue: this.request.requester,
        secondaryLabel: 'Amount',
        secondaryValue: this.money.format(amount),
        message: this.request.reason,
      });
      this.setNode('budget', {
        primaryLabel: 'Available',
        primaryValue: this.money.format(this.request.budget),
        secondaryLabel: 'Requested',
        secondaryValue: this.money.format(amount),
        message:
          amount <= this.request.budget
            ? 'Within available budget'
            : 'Budget limit exceeded',
      });
      this.setNode('purchase', {
        primaryLabel: 'Quantity',
        primaryValue: String(this.request.quantity),
        secondaryLabel: 'Order value',
        secondaryValue: this.money.format(amount),
        message: 'Created after all approvals',
      });
      this.setNode('result', {
        primaryLabel: 'Outcome',
        primaryValue:
          this.stage === 'completed'
            ? 'Purchase successful'
            : this.stage === 'rejected'
            ? 'Purchase rejected'
            : 'Pending',
        secondaryLabel: '',
        secondaryValue: '',
        message:
          this.stage === 'completed'
            ? this.request.quantity +
              ' items approved for ' +
              this.money.format(amount)
            : this.rejectionReason === 'budget'
            ? 'The request exceeds the available budget'
            : this.rejectionReason === 'manager'
            ? 'The request was declined by the manager'
            : 'Waiting for workflow completion',
      });
    },
    validateRequest: function () {
      let request = this.request;
      let errors = [];
      if (!request.item.trim()) errors.push('Enter an equipment name.');
      if (!request.requester.trim()) errors.push('Enter a requester name.');
      if (!request.reason.trim()) errors.push('Enter a business reason.');
      if (!Number.isFinite(request.quantity) || request.quantity < 1)
        errors.push('Quantity must be at least 1.');
      if (!Number.isFinite(request.unitPrice) || request.unitPrice <= 0)
        errors.push('Unit price must be greater than 0.');
      return errors;
    },
    showValidation: function (errors) {
      let box = this.byId('validationMessage');
      box.hidden = errors.length === 0;
      box.textContent = errors.join(' ');
    },
    clearPendingWork: function () {
      this.runToken++;
      if (this.pendingTimer !== undefined) {
        window.clearTimeout(this.pendingTimer);
        this.pendingTimer = undefined;
      }
      this.actionLocked = false;
    },
    delay: function (ms, token) {
      let self = this;
      return new Promise(function (resolve) {
        self.pendingTimer = window.setTimeout(function () {
          self.pendingTimer = undefined;
          resolve(token === self.runToken);
        }, ms);
      });
    },
    updateManagerHandles: function () {
      let selected =
        this.diagram.selectedItems.nodes && this.diagram.selectedItems.nodes[0];
      let show =
        selected &&
        selected.id === 'manager' &&
        this.stage === 'manager' &&
        !this.actionLocked;
      this.diagram.selectedItems.userHandles.forEach(function (handle) {
        handle.visible = !!show;
      });
      this.diagram.dataBind();
    },
    setInputsDisabled: function (disabled) {
      [
        'propertyItem',
        'propertyRequester',
        'propertyReason',
        'propertyQuantity',
        'propertyUnitPrice',
      ].forEach((id) => {
        this.byId(id).disabled = disabled;
      });
    },
    submitRequest: async function () {
      let errors = this.validateRequest();
      this.showValidation(errors);
      if (errors.length) return;

      this.clearPendingWork();
      this.setInputsDisabled(true);
      this.setStatus('request', 'approved', 'Submitted');
      this.setConnector('request-budget', 'active');
      this.setStatus('budget', 'active', 'Checking budget');
      this.byId('submitRequest').disabled = true;
      this.byId('resetWorkflow').disabled = false;
      this.byId('workflowMessage').textContent =
        'Checking the available budget before requesting manager approval\u2026';

      let token = ++this.runToken;
      let ok = await this.delay(700, token);
      if (!ok) return;
      if (this.total() > this.request.budget) {
        this.stage = 'rejected';
        this.rejectionReason = 'budget';
        this.setStatus('budget', 'rejected', 'Insufficient budget');
        this.setConnector('request-budget', 'rejected');
        this.setConnector('budget-result', 'rejected');
        this.setStatus('result', 'rejected');
        this.refreshAllContent();
        this.diagram.select([this.getNode('result')]);
        this.byId('workflowMessage').textContent =
          'Request rejected because the purchase exceeds the available budget.';
        return;
      }

      this.stage = 'manager';
      this.setStatus('budget', 'approved', 'Budget approved');
      this.setConnector('request-budget', 'completed');
      this.setConnector('budget-manager', 'active');
      this.setStatus('manager', 'active', 'Decision required');
      this.diagram.select([this.getNode('manager')]);
      this.updateManagerHandles();
      this.byId('workflowMessage').textContent =
        'Budget approved. Manager decision required. Use Approve or Reject below the Manager Review node.';
    },
    handleManagerDecision: function (action) {
      if (this.stage !== 'manager' || this.actionLocked) return;
      this.actionLocked = true;
      this.updateManagerHandles();
      if (action === 'approve') this.approveRequest();
      if (action === 'reject') this.rejectRequest();
    },
    approveRequest: async function () {
      let token = ++this.runToken;
      this.setStatus('manager', 'approved');
      this.setConnector('budget-manager', 'completed');
      this.setConnector('manager-purchase', 'active');
      this.stage = 'purchase';
      this.setStatus('purchase', 'active', 'Creating order');
      this.byId('workflowMessage').textContent =
        'Budget approved. Creating the purchase order\u2026';

      let ok = await this.delay(800, token);
      if (!ok) return;
      this.setStatus('purchase', 'completed', 'Order created');
      this.setConnector('manager-purchase', 'completed');
      this.setConnector('purchase-result', 'completed');
      this.stage = 'completed';
      this.setStatus('result', 'completed', 'Successful');
      this.refreshAllContent();
      this.diagram.select([this.getNode('result')]);
      this.byId('workflowMessage').textContent =
        'Purchase approved and the order was created successfully.';
      this.actionLocked = false;
    },
    rejectRequest: function () {
      this.clearPendingWork();
      this.stage = 'rejected';
      this.rejectionReason = 'manager';
      this.setStatus('manager', 'rejected', 'Declined');
      this.setConnector('budget-manager', 'completed');
      this.setConnector('manager-result', 'rejected');
      this.setStatus('result', 'rejected');
      this.refreshAllContent();
      this.diagram.select([this.getNode('result')]);
      this.byId('workflowMessage').textContent =
        'The manager declined the request. No budget check or purchase order was created.';
    },
    resetWorkflow: function () {
      this.clearPendingWork();
      this.stage = 'draft';
      this.rejectionReason = undefined;
      this.setInputsDisabled(false);
      this.showValidation([]);
      ['request', 'manager', 'budget', 'purchase', 'result'].forEach((id) => {
        this.setStatus(id, id === 'request' ? 'draft' : 'waiting');
      });
      connectorIds.forEach((id) => this.setConnector(id, 'default'));
      this.refreshAllContent();
      this.diagram.select([this.getNode('request')]);
      this.updateManagerHandles();
      this.byId('submitRequest').disabled = false;
      this.byId('resetWorkflow').disabled = true;
      this.byId('workflowMessage').textContent =
        'Enter the request details, then submit it for manager approval.';
    },
    readForm: function () {
      this.request.item = this.byId('propertyItem').value;
      this.request.requester = this.byId('propertyRequester').value;
      this.request.reason = this.byId('propertyReason').value;
      this.request.quantity = Number(this.byId('propertyQuantity').value);
      this.request.unitPrice = Number(this.byId('propertyUnitPrice').value);
      this.showValidation([]);
      this.refreshAllContent();
    },
  },
};
</script>
