<template>
<div>
<div class="control-section">
    <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :model='model' :tool='tool' :snapSettings='snapSettings' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults' 
        ></ejs-diagram>
</div>
<div id="action-description">
  <p>
      This sample presents a UML sequence diagram created with the Syncfusion<sup>®</sup> EJ2 Diagram component to visualize interactions in a secure transaction process involving a user, transaction system, and fraud detection system.
  </p>
</div>
<div id="description">
 <p>This sample demonstrates how to build a UML sequence diagram using the diagram's <code>model</code> property. The <code>UmlSequenceDiagramModel</code> type provides a structured approach to defining key elements such as participants, messages, activation boxes, and interaction fragments. This approach enables the clear visualization of sequential interactions within complex systems, such as secure transaction workflows.
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
  UmlSequenceMessageType,
  UmlSequenceFragmentType,
  UmlSequenceParticipant,
  UmlSequenceActivationBox
} from "@syncfusion/ej2-vue-diagrams";

// Define the sequence diagram model with participants, messages, and fragments
    let sequenceModel = {
        // Space between each participant in the diagram
        spaceBetweenParticipants: 250,
        // List of participants in the sequence diagram
        participants: [
            {
                id: "User",
                content: "User",
                // Indicates that User is an actor
                isActor: true
            },
            {
                id: "Transaction",
                content: "Transaction",
                // Activation periods for the Transaction participant
                activationBoxes: [
                    { id: "act1", startMessageID: 'msg1', endMessageID: 'msg4' }
                ]
            },
            {
                id: "FraudDetectionSystem",
                content: "Fraud Detection System",
                // Activation periods for the Fraud Detection System participant
                activationBoxes: [
                    { id: "act2", startMessageID: 'msg2', endMessageID: 'msg3' },
                    { id: "act3", startMessageID: 'msg5', endMessageID: 'msg6' }
                ]
            }
        ],
        // List of messages exchanged between participants
        messages: [
            { id: 'msg1', content: "Initiate Transaction", fromParticipantID: "User", toParticipantID: "Transaction", type: UmlSequenceMessageType.Synchronous },
            { id: 'msg2', content: "Send Transaction Data", fromParticipantID: "Transaction", toParticipantID: "FraudDetectionSystem", type: UmlSequenceMessageType.Synchronous },
            { id: 'msg3', content: "Validate Transaction", fromParticipantID: "FraudDetectionSystem", toParticipantID: "Transaction", type: UmlSequenceMessageType.Reply },
            { id: 'msg4', content: "Transaction Approved", fromParticipantID: "Transaction", toParticipantID: "User", type: UmlSequenceMessageType.Asynchronous },
            { id: 'msg5', content: "Flag Transaction", fromParticipantID: "Transaction", toParticipantID: "FraudDetectionSystem", type: UmlSequenceMessageType.Synchronous },
            { id: 'msg6', content: "Fraud Detected", fromParticipantID: "FraudDetectionSystem", toParticipantID: "User", type: UmlSequenceMessageType.Reply },
            { id: 'msg7', content: "Cancel Transaction", fromParticipantID: "User", toParticipantID: "Transaction", type: UmlSequenceMessageType.Synchronous },
            { id: 'msg8', content: "Complete Transaction", fromParticipantID: "User", toParticipantID: "Transaction", type: UmlSequenceMessageType.Synchronous }
        ],
        // Conditional fragments within the sequence
        fragments: [
            {
                id: 1,
                // Represents alternative fragment
                type: UmlSequenceFragmentType.Alternative,
                conditions: [
                    // Condition when fraud is detected
                    {
                        // Content of condition
                        content: "Fraud Detected",
                        // Messages part of this condition
                        messageIds: ['msg5', 'msg6', 'msg7']
                    },
                    {
                        content: "No Fraud Detected",
                        messageIds: ['msg8']
                    }
                ]
            }
        ]
    };

export default {
  components: {
    'ejs-diagram': DiagramComponent
  },
  data: function() {
    return {
      width: "100%",
      height: "800px",
      model: sequenceModel,
      tool: DiagramTools.ZoomPan,
      snapSettings: {
                constraints: SnapConstraints.None
            },
      getNodeDefaults: (node) => {
        // participant node
        if (node.data instanceof UmlSequenceParticipant) {
            if (!node.data.isActor) {
                node.annotations[0].style.color = 'white';
            }
        }
        // activation node
        else if (node.data instanceof UmlSequenceActivationBox) {
            node.style = { fill: 'orange', strokeColor: 'orange' };
        }
      },
      //Sets the default values of a connector
      getConnectorDefaults: (connector) => {
       var message = sequenceModel.messages.find(function(message) {
            return message.id === connector.id;
        });
        // Style the connector if it corresponds to a message
        if (message) {
            connector.targetDecorator.style = { fill: '#489ECC', strokeColor: '#489ECC' };
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