<template>
    <div class="control-pane">
      <div class="control-section">
        <img src="src/ai-treegrid/images/adaptive-datastructuring.gif" width="100%" height="100%" />
      </div>
      <div id="action-description">
        <p>
            This demo highlights the use of AI to structure and correct erroneous hierarchical data within a Tree Grid. The AI-powered prompt identifies and organizes data items into a hierarchical format by accurately establishing parent-child relationships, ensuring the data is properly nested and ready for display in the Tree Grid control.
        </p>
      </div>
      <div id="description">
        <p>
        Utilizing a specialized AI prompt, the system scans a dataset to identify and restructure hierarchical relationships between records. The AI meticulously corrects any misassigned relationships by adjusting the <code>ParentId</code> fields, aligning them with their respective top-level <code>CategoryId</code>. The resulting dataset, now properly organized, is then bound to the Tree Grid for a coherent and accurate display.
    </p>
      </div>
    </div>
</template>
