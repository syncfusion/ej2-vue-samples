<template>
    <div className='control-section'>
        <div className="col-lg-8 control-section">
            <div className="content-wrapper">
                <div id="events-blockeditor"></div>
                <ejs-blockeditor id='events-blockeditor' :blocks="blocks" :created="logEvent('created')" :contentChanged="logEvent('contentChanged')" :blockAdded="logEvent('blockAdded')" :blockRemoved="logEvent('blockRemoved')" :blockMoved="logEvent('blockMoved')" :blockDrag="logEvent('blockDrag')" :blockDragStart="logEvent('blockDragStart')" :blockDrop="logEvent('blockDrop')" :focus="logEvent('focus')" :blur="logEvent('blur')" :selectionChanged="logEvent('selectionChanged')" :beforePaste="logEvent('beforePaste')" :afterPaste="logEvent('afterPaste')" :undoRedoPerformed="logEvent('undoRedoPerformed')"></ejs-blockeditor>
            </div>
        </div>
        <div className="col-lg-4 property-section">
            <table id="property" title="Event Trace" className="property-panel-table">
                <tbody>
                    <tr>
                        <td>
                            <div className="eventarea" style="height: 245px; overflow: auto">
                                <span id="eventLog" style="word-break: normal"></span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="evtbtn" style="padding-bottom: 10px">
                                <ejs-button id='clear' content='Clear'></ejs-button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="action-description">
            <p>This sample demonstrates the events that trigger on every action of the Block Editor. The event details are showcased in the event trace panel.</p>
        </div>

        <div id="description">
            <p>The Block Editor triggers events based on its actions. These events can be used as extension points to perform custom operations.</p>
            <ul>
                <li><code>created</code> - Triggers after the Block Editor is rendered completely.</li>
                <li><code>contentChanged</code> - Triggers when the content of the block editor is changed.</li>
                <li><code>selectionChanged</code> - Triggers when the selection in the block editor changes.</li>
                <li><code>blockAdded</code> - Triggers when a new block is added to the editor.</li>
                <li><code>blockRemoved</code> - Triggers when a block is removed from the editor.</li>
                <li><code>blockMoved</code> - Triggers when a block is moved within the editor.</li>
                <li><code>blockDrag</code> - Triggers during the dragging operation of a block.</li>
                <li><code>blockDragStart</code> - Triggers when the drag operation for a block starts.</li>
                <li><code>blockDrop</code> - Triggers when a block is dropped after a drag operation.</li>
                <li><code>focus</code> - Triggers when the block editor gains focus.</li>
                <li><code>blur</code> - Triggers when the block editor loses focus.</li>
                <li><code>beforePaste</code> - Triggers before pasting the content in the block editor.</li>
                <li><code>afterPaste</code> - Triggers after pasting the content in the block editor.</li>
                <li><code>undoRedoPerformed</code> - Triggers when the undo/redo actions are performed in the block editor.</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { BlockEditorComponent } from '@syncfusion/ej2-vue-blockeditor';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import * as data from './blockData.json';

export default {
    components: {
        "ejs-blockeditor": BlockEditorComponent,
        'ejs-button': ButtonComponent
    },
    data: function() {
        return {
            blocks: data['blockDataEvents']
        }
    },
    methods: {
        appendElement: function(html) {
            var span = document.createElement('span');
            span.innerHTML = html;
            var log = document.getElementById('eventLog');
            log.insertBefore(span, log.firstChild);
        },
        logEvent: function(eventName) {
            return (args) => {
                this.appendElement(`BlockEditor <b>${eventName}</b> event called<hr>`);
            };
        }
    },
    mounted() {
        document.getElementById('clear').onclick = function() {
            document.getElementById('eventLog').innerHTML = '';
        }
    }
}
</script>

<style>
    #eventLog b {
        color: #018607;
    }
    .material3-dark #eventLog b, .fluent-dark #eventLog b, .bootstrap5-dark #eventLog b, 
    .bootstrap5\.3-dark #eventLog b, .bootstrap-dark #eventLog b, .tailwind-dark #eventLog b, 
    .tailwind3-dark #eventLog b, .highcontrast #eventLog b, .material-dark #eventLog b, 
    .fabric-dark #eventLog b {
        color: #21A32E;
    }
    hr {
        margin: 1px 10px 1px 0px;
        border-top: 1px solid #eee;
    }
    .control-wrapper {
        margin: 0 auto;
    }
</style>