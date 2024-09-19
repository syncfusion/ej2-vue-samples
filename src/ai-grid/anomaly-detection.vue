<template>
    <div class="control-pane">
        <div class="control-section">
            <img src="src/ai-grid/images/anomaly-detection.gif" width="100%" height="100%" />
        </div>
        <div id="action-description">
            <p>
                This example demonstrates how to use the <code>Grid</code> control to perform anomaly detection on a
                dataset. The grid displays machine data including temperature, pressure, voltage, motor speed, and
                production rate. Users can trigger anomaly detection by clicking the "Detect Anomaly Data" button in the
                toolbar.
            </p>
            <p>
                When the anomaly detection process is initiated, the system analyzes the data and identifies any
                anomalies based on predefined criteria. Detected anomalies are highlighted in the grid with a specific
                color to distinguish them from normal data, enhancing the user's ability to spot irregularities.
            </p>
            <p>To explore this and more Syncfusion EJ2 Vue Smart AI integrations locally, check out our <a target='_blank'
                    href= 'https://github.com/syncfusion/smart-ai-samples/tree/master/vue' aria-label="Navigate to explore the syncfusion EJ2 Vue AI Demos repository">GitHub
                    repository</a>.</p>
        </div>
        <div id="description">
            <p>
                In this example, the <code>Grid</code> control is used to display machine data and identify anomalies in
                real-time. Upon clicking the "Detect Anomaly Data" button, the system processes the data to find
                outliers or inconsistencies. Anomalies are then marked in the grid, allowing users to easily identify
                and investigate problematic entries.
            </p>
            <p>
                The anomaly detection functionality leverages an AI service to analyze the data and return results that
                are displayed directly in the grid. This feature helps users efficiently monitor and manage data by
                flagging entries that deviate from expected patterns.
            </p>
        </div>
    </div>
</template>