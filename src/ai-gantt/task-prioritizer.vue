<template>
    <div class="control-pane">
        <div class="control-section">
            <img src="src/ai-gantt/images/task-prioritizer.gif" width="100%" height="100%" />
        </div>
        <div id="action-description">
            <p>This sample demonstrates how AI can prioritize tasks within a task collection. The AI evaluates baseline dates
        and scheduled taskbar dates to identify critical tasks, which are crucial for meeting project deadlines. It then
        reallocates resources to these critical tasks, ensuring efficient resource management and timely project
        completion.
    </p>
    <p>To explore this and more Syncfusion Vue Smart AI integrations locally, check out our <a target='_blank'
            href= 'https://github.com/syncfusion/smart-ai-samples/tree/master/vue' aria-label="Navigate to explore the syncfusion Vue AI Demos repository">GitHub
            repository</a>.</p>
        </div>
        <div id="description">
            <p>
        The process begins with the AI identifying the critical tasks based on the project schedule. Following this, the
        AI generates another prompt to reassign resources and provides a summary of the reallocation and critical task
        details.
    </p>
        </div>
    </div>
</template>