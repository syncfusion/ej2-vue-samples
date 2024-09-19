<template>
    <div class="control-pane">
        <div class="control-section">
            <img src="src/ai-gantt/images/progress-predictor.gif" width="100%" height="100%" />
        </div>
        <div id="action-description">
            <p>This sample showcases how to predict milestone task completion and project end dates using AI-driven
                analysis
                within a Gantt Chart. The predictions are displayed as event markers, providing visual cues for upcoming
                milestones and the overall project timeline.
            </p>
            <p>To explore this and more Syncfusion Vue Smart AI integrations locally, check out our <a target='_blank'
                    href= 'https://github.com/syncfusion/smart-ai-samples/tree/master/vue' aria-label="Navigate to explore the syncfusion Vue AI Demos repository">GitHub
                    repository</a>.</p>
        </div>
        <div id="description">
            <p>
                This functionality retrieves predicted milestone dates and the overall project completion date. The
                predictions
                are based on the current year's <strong>TaskCollection</strong> data, enhanced by analyzing historical
                <strong>TaskCollection</strong> data from
                the past five years.
            </p>
        </div>
    </div>
</template>