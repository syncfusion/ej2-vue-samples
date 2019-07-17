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
        <p>For more information, you can refer to the <a href="https://ej2.syncfusion.com/vue/documentation/treeview/drag-and-drop/" target="_blank">Drag and Drop</a> section from the documentation.</p>
    </div>
</div>
</template>
/* custom code start */
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
    .bootstrap4.e-bigger #list, .bootstrap4.e-bigger #tree1, .bootstrap4.e-bigger #tree2 {
		height: 384px;
        overflow: auto;
    }
    .bootstrap4 #list, .bootstrap4 #tree1, .bootstrap4 #tree2 {
		height: 320px;
        overflow: auto;
    }
    .bootstrap4.e-bigger .e-drag-item.e-treeview .e-list-text {
        margin-left: 12px;
    }
    .tree-content {
        margin: 0 auto;
        border: 1px solid #dddddd;
        border-radius: 3px;
        min-height: 288px;
    }
    .custom-delete::before {
        content: "\e700";
		cursor: pointer;
        color: rgba(0, 0, 0, 0.54);
        font-size: 15px;
    }
    .custom-delete {
        float: right;
        font-family: 'cross-circle';
    }
    .highcontrast .e-active.e-list-item .custom-delete::before {
	    color: #000;
	}
	.highcontrast .custom-delete::before {
        color: #fff;
    }
    @font-face {
        font-family: 'cross-circle';
        src:url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj0gSRsAAAEoAAAAVmNtYXDnEOdVAAABiAAAADZnbHlmKuKzFgAAAcgAAABkaGVhZBRzllcAAADQAAAANmhoZWEHmQNrAAAArAAAACRobXR4B+gAAAAAAYAAAAAIbG9jYQAyAAAAAAHAAAAABm1heHABDgAkAAABCAAAACBuYW1lyFBwKAAAAiwAAAJhcG9zdJx8QW4AAASQAAAAOwABAAADUv9qAFoEAAAA//4D6gABAAAAAAAAAAAAAAAAAAAAAgABAAAAAQAA8246G18PPPUACwPoAAAAANi1qMQAAAAA2LWoxAAAAAAD6gPqAAAACAACAAAAAAAAAAEAAAACABgAAgAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQP0AZAABQAAAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5wDnAANS/2oAWgPqAJYAAAABAAAAAAAABAAAAAPoAAAAAAACAAAAAwAAABQAAwABAAAAFAAEACIAAAAEAAQAAQAA5wD//wAA5wD//wAAAAEABAAAAAEAAAAAAAAAMgAAAAIAAAAAA+oD6gALABcAAAEHFwcnByc3JzcXNwUWABc2ADcmACcGAALkg4NqhINqg4Nqg4T9iAYBG9PUARsFBf7l1NP+5QJ6hIZqg4Nqg4RqgIPu0/7lBgYBG9PUARsFBf7lAAAAABIA3gABAAAAAAAAAAEAAAABAAAAAAABAAwAAQABAAAAAAACAAcADQABAAAAAAADAAwAFAABAAAAAAAEAAwAIAABAAAAAAAFAAsALAABAAAAAAAGAAwANwABAAAAAAAKACwAQwABAAAAAAALABIAbwADAAEECQAAAAIAgQADAAEECQABABgAgwADAAEECQACAA4AmwADAAEECQADABgAqQADAAEECQAEABgAwQADAAEECQAFABYA2QADAAEECQAGABgA7wADAAEECQAKAFgBBwADAAEECQALACQBXyBjcm9zcy1jaXJjbGVSZWd1bGFyY3Jvc3MtY2lyY2xlY3Jvc3MtY2lyY2xlVmVyc2lvbiAxLjBjcm9zcy1jaXJjbGVGb250IGdlbmVyYXRlZCB1c2luZyBTeW5jZnVzaW9uIE1ldHJvIFN0dWRpb3d3dy5zeW5jZnVzaW9uLmNvbQAgAGMAcgBvAHMAcwAtAGMAaQByAGMAbABlAFIAZQBnAHUAbABhAHIAYwByAG8AcwBzAC0AYwBpAHIAYwBsAGUAYwByAG8AcwBzAC0AYwBpAHIAYwBsAGUAVgBlAHIAcwBpAG8AbgAgADEALgAwAGMAcgBvAHMAcwAtAGMAaQByAGMAbABlAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAFMAeQBuAGMAZgB1AHMAaQBvAG4AIABNAGUAdAByAG8AIABTAHQAdQBkAGkAbwB3AHcAdwAuAHMAeQBuAGMAZgB1AHMAaQBvAG4ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBAgEDABFjaXJjbGUtY2xvc2UtLS0wMgAAAA==) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
</style>
/* custom code end */
<script>
import Vue from "vue";
import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
import { closest, getComponent } from "@syncfusion/ej2-base";
import * as dataSource from './dataSource/drag-data.json';

Vue.use(TreeViewPlugin);
Vue.use(ListViewPlugin);

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
            fields1: { dataSource: dataSource.dragData1, id: 'id', text: 'name', child: 'child' },
            fields2: { dataSource: dataSource.dragData2, id: 'id', text: 'name', child: 'child' },
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