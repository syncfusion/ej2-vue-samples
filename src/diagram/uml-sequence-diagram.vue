<template>
<div>
<div class="control-section">
    <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :nodes='nodes' :tool='tool' :snapSettings='snapSettings' :connectors='connectors' :getConnectorDefaults='getConnectorDefaults'
        ></ejs-diagram>
</div>
<div id="action-description">
  <p>
     This sample illustrates an employee’s leave request sequence using a UML sequence diagram. The shapes for the sequence were designed with the port feature for Diagram's nodes.
  </p>
</div>
<div id="description">
 <p>This example shows how to create a UML sequence diagram using the port feature for nodes. The <code>type</code> property allows you to define the type of shape. The basic shape property allows you to define the shape of a node.
    </p>
  <br />
</div>
</div>
</template>

<script>
import {
  DiagramComponent,
  PortVisibility,
   DiagramTools,
  SnapConstraints,
} from "@syncfusion/ej2-vue-diagrams";

//Function to Create nodes by the parameters
function createNode(id, width, height, offsetX, offsetY, 
  content, fill, bold) {
  return {
      id: id,
      width: width,
      height: height,
      offsetX: offsetX,
      offsetY: offsetY,
      shape: { type: "Text", content: content },
      style: { fill: fill, bold: bold }
  };
}
//Function to Create connectors by the parameters
function createConnector(id, sourceX, sourceY, targetX, targetY) {
  return {
      id: id,
      type: 'Straight',
      sourcePoint: { x: sourceX, y: sourceY },
      targetPoint: { x: targetX, y: targetY },
      targetDecorator: { shape: 'None' },
      style: { strokeColor: '#A5A6A7' }
  };
}
// Array of nodes with their respective properties
let nodes = [
 // Call to createNode method to generate nodes
  createNode('employee', 100, 60, 100, 100, 'Employee', 'transparent', true),
  createNode('teamLead', 100, 60, 350, 100, 'Team Lead', 'transparent', true),
  createNode('dashboard', 100, 60, 600, 100, 'Dashboard', 'transparent', true),
  createNode('manager', 100, 60, 850, 100, 'Manager', 'transparent', true),
  createNode('leaveRequest', 100, 60, 225, 250, 'Leave Request', 'transparent', false),
  createNode('leaveApproval', 100, 60, 225, 484, 'Leave Approval', 'transparent', false),
  createNode('checkEmplyeeAvail', 175, 30, 470, 345, 'Check Employee availability and task status', 'transparent', false),
  createNode('forwardLeaveMssg', 150, 30, 600, 420, 'Forward Leave Request', 'transparent', false),
  createNode('noObjection', 150, 30, 600, 460, 'No Objection', 'transparent', false),
  // Custom node for special operation
  {
      id:'employeeNode',shape:{type:'Basic',shape:'Rectangle'},width:10,height:250,offsetX:100,offsetY:350,
      style:{fill:'orange',strokeColor:'orange'},
      ports:[{id:'p1',offset:{x:1,y:0.05},visibility:PortVisibility.Hidden},
              {id:'p2',offset:{x:1,y:0.97},visibility:PortVisibility.Hidden},]
  },
  {
      id:'teamLeadNode',shape:{type:'Basic',shape:'Rectangle'},width:10,height:190,offsetX:350,offsetY:320,
      style:{fill:'orange',strokeColor:'orange'},
      ports:[{id:'p1',offset:{x:0,y:0.07},visibility:PortVisibility.Hidden},
      {id:'p2',offset:{x:1,y:0.92},visibility:PortVisibility.Hidden},
      {id:'p3',offset:{x:1,y:0.5},visibility:PortVisibility.Hidden},]
  },
  {
      id:'dashboardNode',shape:{type:'Basic',shape:'Rectangle'},width:10,height:25,offsetX:600,offsetY:320,
      style:{fill:'orange',strokeColor:'orange'},
      ports:[{id:'p1',offset:{x:0,y:0.5},visibility:PortVisibility.Hidden}]
  },
  {
      id:'managerNode',shape:{type:'Basic',shape:'Rectangle'},width:10,height:50,offsetX:850,offsetY:420,
      style:{fill:'orange',strokeColor:'orange'},
      ports:[{id:'p1',offset:{x:0,y:0.1},visibility:PortVisibility.Hidden},
      {id:'p2',offset:{x:0,y:0.9},visibility:PortVisibility.Hidden},]
  },
  ];
// Array of connectors between nodes
let connectors = [
 // Call to createConnector method to generate straight connectors
  createConnector('employeeCon1', 100, 120, 100, 225),
  createConnector('employeeCon2', 100, 475, 100, 600),
  createConnector('teamLeanCon1', 350, 120, 350, 225),
  createConnector('teamLeanCon2', 350, 415, 350, 600),
  createConnector('dashboardCon1', 600, 120, 600, 307),
  createConnector('dashboardCon2', 600, 333, 600, 600),
  createConnector('managerCon1', 850, 120, 850, 395),
  createConnector('managerCon2', 850, 445, 850, 600),
  // Custom connectors between specific nodes
  {
      id:'empToTeamLead',type:'Straight',sourceID:'employeeNode',sourcePortID:'p1',
      targetID:'teamLeadNode',targetPortID:'p1'
  },
  {
      id:'teamLeadToEmp',type:'Straight',sourcePoint:{x:350,y:465},style:{strokeDashArray:'4 4'},
      targetID:'employeeNode',targetPortID:'p2'
  },
  {
      id:'teamLeadToDash',type:'Straight',sourceID:'teamLeadNode',sourcePortID:'p3',
      targetID:'dashboardNode',targetPortID:'p1'
  },
  {
      id:'teamLeadToManager',type:'Straight',sourceID:'teamLeadNode',sourcePortID:'p2',
      targetID:'managerNode',targetPortID:'p1'
  },
  {
      id:'managerToTeamLead',type:'Straight',sourceID:'managerNode',sourcePortID:'p2',
      targetPoint:{x:350,y:440},style:{strokeDashArray:'4 4'}
  },
  ];

export default {
  components: {
    'ejs-diagram': DiagramComponent
  },
  data: function() {
    return {
      width: "100%",
      height: "800px",
      nodes: nodes,
      connectors: connectors,
      tool: DiagramTools.ZoomPan,
      snapSettings: {
                constraints: SnapConstraints.None
            },
      getNodeDefaults: (node) => {
        node.style = { fill: '#26A0DA', strokeColor: 'white' };
        return node;
      },
      //Sets the default values of a connector
      getConnectorDefaults: (connector) => {
        connector.targetDecorator.style = {fill:'#489ECC',strokeColor:'#489ECC'};
        if(connector.targetDecorator.shape === 'Arrow'){
        connector.style = {strokeColor:'#489ECC',strokeWidth:2};
        }
        return connector;
      },
    }
  },
  mounted: function() {
       let diagram = this.$refs.diagramObj.ej2Instances;
        diagram.fitToPage();
  }
}

</script>