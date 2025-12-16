<template>
    <div className='control-section'>
        <div className="col-lg-8 control-section sb-property-border">
            <div className="blockeditor-events">
                <ejs-blockeditor id='events-blockeditor' height= "600px" :blocks="blocks" :created="logEvent('created')" :blockChanged="blockChangeEvent" :blockDragging="logEvent('blockDragging')" :blockDragStart="logEvent('blockDragStart')" :blockDropped="logEvent('blockDropped')" :focus="logEvent('focus')" :blur="logEvent('blur')" :selectionChanged="logEvent('selectionChanged')" :afterPasteCleanup="logEvent('afterPasteCleanup')" :beforePasteCleanup="logEvent('beforePasteCleanup')" :inlineToolbarSettings="inlineToolbarSettings"></ejs-blockeditor>
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
                <li><code>blockChanged</code> - Triggers when the editor blocks are changed. This event provides details about the changes made to the blocks, including insertions, deletions, movements, and updates.</li>
                <li><code>selectionChanged</code> - Triggers when the selection in the block editor changes.</li>
                <li><code>blockDragging</code> - Triggers during the dragging operation of a block.</li>
                <li><code>blockDragStart</code> - Triggers when the drag operation for a block starts.</li>
                <li><code>blockDropped</code> - Triggers when a block is dropped after a drag operation.</li>
                <li><code>focus</code> - Triggers when the block editor gains focus.</li>
                <li><code>blur</code> - Triggers when the block editor loses focus.</li>
                <li><code>beforePasteCleanup</code> - Triggers before pasting the content in the block editor.</li>
                <li><code>afterPasteCleanup</code> - Triggers after pasting the content in the block editor.</li>
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
   data() {
    return {
      blocks: data['blockDataEvents'] || [], // Fallback to empty array if data is missing
      inlineToolbarSettings: {
        itemClick: (args) => {
          this.appendElement(`BlockEditor inline toolbar <b>${args.item?.command || 'Unknown'}</b> clicked<hr>`);
        }
      }
    };
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
        },
        blockChangeEvent(args) {
            const changes = args?.changes || [];
            if (!changes.length) return;

            const counts = {};
            changes.forEach((change) => {
                const action = change.action; // 'Insertion' | 'Deletion' | 'Moved' | 'Update'
                counts[action] = (counts[action] || 0) + 1;
            });

            const plural = (count, noun) => (count === 1 ? `${count} ${noun}` : `${count} ${noun}s`);
            const messages = [];
            if (counts.Insertion) messages.push(`${plural(counts.Insertion, 'block')} inserted`);
            if (counts.Deletion) messages.push(`${plural(counts.Deletion, 'block')} deleted`);
            if (counts.Moved) messages.push(`${plural(counts.Moved, 'block')} moved`);
            if (counts.Update) messages.push(`${plural(counts.Update, 'block')} updated`);

            this.appendElement(`BlockEditor <b>blockChange</b> event called: ${messages.join(', ')}<hr>`);
            }
        },
          mounted() {
            const clear = document.getElementById('clear');
            if (clear) {
                clear.onclick = () => {
                    const el = document.getElementById('eventLog');
                    if (el) el.innerHTML = '';
                };
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
    .blockeditor-events {
    width: 100%;
    margin: 0 auto;
    }
</style>