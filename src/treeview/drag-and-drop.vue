<template>
<div>
    <div class="col-lg-12 control-section custom-tree">
        <div class="control-wrapper">
            <div class="col-lg-4 tree1-data">
                <h4>TreeView-1</h4>
                <div class="tree-content">
                    <ejs-treeview id='tree1' :fields='fields1' :created="onCreate" :allowDragAndDrop=true :nodeDragStop="onDragStop"></ejs-treeview>
                </div>
            </div>
            <div class="col-lg-4 tree2-data">
                <h4>TreeView-2</h4>
                <div class="tree-content">
                    <ejs-treeview id='tree2' :fields='fields2' :allowDragAndDrop=true :nodeDragStop="onDragStop"></ejs-treeview>
                </div>
            </div>
            <div class="col-lg-4 list-data">
                <h4>ListView</h4>
                <div class="tree-content">
                    <ejs-listview id='list' ref="list_instance"  :dataSource='listData' class="e-droppable" :cssClass="cssClass" :template="listTemplate"></ejs-listview>
                </div>
            </div>
            <div id="overlay" >
            </div>
        </div>
    </div>

    <div id="action-description">
       <p>This sample demonstrates the drag and drop functionality of TreeView. A drag and drop image is present at the top of the sample which hides on clicking the sample. To drag and drop node, select and drag the desired node and drop it on the target node or external container.</p>
    </div>

    <div id="description">
        <p>The <code>TreeView</code> component allows users to drag any node and drop it on any other node in the same or different tree using <code>allowDragAndDrop</code> property. Additionally, it supports dropping a tree node to an external container using <code>nodeDragStop</code> event of the TreeView</p>
        <p>For more information, you can refer to the <a href="http://ej2.syncfusion.com/vue/treeview/drag-and-drop.html" target="_blank">Drag and Drop</a> section from the documentation.</p>
    </div>
</div>
</template>
<style>
    #overlay {
        position: absolute; 
        display: block; 
        width: 100%; 
        height: 100%; 
        z-index: 2; 
        cursor: pointer;
        background-image: url('../images/usecase/drag_and_drop.png'); 
        background-repeat: no-repeat; 
        background-position: center; 
        background-size: 70%;
    }
    #imageContent {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
    }
    #list {
        min-height: 288px;
    }
    .e-bigger #list, .e-bigger #tree1, .e-bigger #tree2 {
		height: 354px;
        overflow: auto;
	}
    .custom-tree {
        overflow: auto;
    }
    .custom-tree .control-wrapper {
        position: relative; 
        min-width: 700px; 
        min-height: 400px; 
        overflow: auto;
    }
    .tree1-data, .tree2-data, .list-data {
        padding: 15px;
        margin-bottom: 25px;
    }
    @media (max-width: 1200px) {
        .tree1-data, .tree2-data, .list-data {
            width: 33.33333333%;
            float: left;
        }
    }
	#tree1, #tree2, #list {
			height: 300px;
			overflow: auto;
	}
	.fabric.e-bigger #list.e-listview .e-list-item,
    .highcontrast.e-bigger #list.e-listview .e-list-item {
        line-height: 43px;
    }
    .material.e-bigger #list.e-listview .e-list-item {
        line-height: 48px;
    }
    .bootstrap.e-bigger #list.e-listview .e-list-item {
        line-height: 47px;
    }
    .tree-content {
        margin: 0 auto;
        border: 1px solid #dddddd;
        border-radius: 3px;
        min-height: 288px;
    }
    .custom-delete::before {
        content: "";
		cursor: pointer;
        color: rgba(0, 0, 0, 0.54);
        font-size: 15px;
    }
    .custom-delete {
        float: right;
        font-family: 'e-icons';
    }
    .highcontrast .e-active.e-list-item .custom-delete::before {
	    color: #000;
	}
	.highcontrast .custom-delete::before {
        color: #fff;
    }
</style>
<script>
import Vue from "vue";
import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
import { closest, getComponent } from "@syncfusion/ej2-base";

Vue.use(TreeViewPlugin);
Vue.use(ListViewPlugin);

var productTeam1 =  [
    {
        id: 't1', name: 'ASP.NET MVC Team', expanded: true,
        child: [
            { id: 't2', name: 'Smith' },
            { id: 't3', name: 'Johnson' },
            { id: 't4', name: 'Anderson' },
        ]
    },
    {
        id: 't5', name: 'Windows Team', expanded: true,
        child: [
            { id: 't6', name: 'Clark' },
            { id: 't7', name: 'Wright' },
            { id: 't8', name: 'Lopez' },
        ]
    }
];
var productTeam2 = [
    {
        id: 't9', name: 'Web Team', expanded: true,
        child: [
            { id: 't10', name: 'Joshua' },
            { id: 't11', name: 'Matthew' },
            { id: 't12', name: 'David' },
        ]
    },
    {
        id: 't13', name: 'Build Team', expanded: true,
        child: [
            { id: 't14', name: 'Ryan' },
            { id: 't15', name: 'Justin' },
            { id: 't16', name: 'Robert' },
        ]
    }
];

var lTemplate = Vue.component("demo", {
  template: '<div><span>{{data.text}}</span><span :id="data.iconId" :class="data.class"></span></div>',
  data() {
    return {
      data: {}
    };
  }
});

var id = 1;

export default Vue.extend({
    data: function() {
        return {
            fields1: { dataSource: productTeam1, id: 'id', text: 'name', child: 'child' },
            fields2: { dataSource: productTeam2, id: 'id', text: 'name', child: 'child' },
            cssClass: "custom-list",
            listData: [],
            listTemplate: function(e) {
                return {
                    template: lTemplate
                };
            },
        };
    },
    methods: {
        onCreate: function(event) {
            document.addEventListener('mousedown', (event) => {
                if (event.target.classList.contains('custom-delete')) {
                    var listObj = this.$refs.list_instance;
                    var node = closest(event.target, 'li');
                        listObj.removeItem(node);
                }
            });
            document.getElementById('overlay').addEventListener('mousedown', (event) => {
                document.getElementById('overlay').style.display = 'none';
            });
        },
        onDragStop: function(event) {
            var listObj = this.$refs.list_instance;
            var treeObj = getComponent(closest(event.draggedNode, '.e-treeview'), 'treeview');
            var targetEle = closest(event.target, '.e-droppable');
            targetEle = targetEle ? targetEle : event.target;
            // Check the target as ListView or not
            if (targetEle && targetEle.classList.contains('custom-list')) {
                event.cancel = true;
                var newData = [];
                if (event.draggedNode.classList.contains('e-active')) {
                    var selNodes = treeObj.selectedNodes;
                    for (var i = 0, len = selNodes.length; i < len; i++) {
                        var nodeEle = document.querySelector('[data-uid="' + selNodes[i] + '"]').querySelector('.e-list-text');
                        var nodeText = nodeEle.textContent;
                        var newNode = { id: 'l' + id, text: nodeText, class: 'custom-delete', iconId: 'i' + id };
                        id++;
                        newData.push(newNode);
                    }
                } else {
                    var text = 'text';
                    var nodeText = event.draggedNodeData[text];
                    var newNode = { id: 'l' + id, text: nodeText, class: 'custom-delete', iconId: 'i' + id };
                    id++;
                    newData.push(newNode);
                }
                listObj.addItem(newData, undefined);
            }
        }
    }
});
</script>