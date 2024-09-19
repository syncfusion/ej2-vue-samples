<template>
    <div class="control-section">
        <div class="default-timeline-section">
            <ejs-timeline id="default-timeline">
                <e-items>
                    <e-item :content='contents[0]' dotCss='state-success' cssClass='completed'/>
                    <e-item :content='contents[1]' dotCss='state-success' cssClass='completed' />
                    <e-item :content='contents[2]' dotCss='state-progress' cssClass='intermediate'/>
                    <e-item :content='contents[3]' />
                </e-items>
            </ejs-timeline>
        </div>
    </div>
    
    <div id="action-description">
        <p>This sample demonstrates the default functionalities of the Timeline component including the highlighted customization.</p>
    </div>
    <div id="description">
        <p>
            The Timeline component enables users to display a series of data in chronological order, such as user activities, tracking progress, and more.
            In this example, we have used the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/timeline/timelineItem/#content">content</a> property to display the item's content, <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/timeline/timelineItem/#dotcss">dotCss</a> property to customize the dot with background color and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/timeline/timelineItem/#cssclass">cssClass</a> to customize the last connector as dashed style.
        </p>
    </div>
</template>
<style>
.default-timeline-section {
    height: 350px;
    width: 290px;
    margin: 30px auto;
}

/* Customized dot color */
.default-timeline-section .state-progress {
    outline-color: #007bff;
    background-color: #007bff;
    --dot-size: 25px;
}

.default-timeline-section .state-success {
    outline-color: #28a745;
    background-color: #28a745;
}

/* Customized connector color */
.default-timeline-section .completed.e-connector::after {
    border-color:#28a745;
}

.default-timeline-section .intermediate.e-connector::after {
    border-style: dashed;
}

</style>
<script>
import { ItemDirective, ItemsDirective, TimelineComponent } from "@syncfusion/ej2-vue-layouts";

export default {
  components: {
    'ejs-timeline': TimelineComponent,
    'e-items': ItemsDirective,
    'e-item': ItemDirective
  },
  data() {
    return {
        contents: [
            'Ordered \n 9:15 AM, January 1, 2024',
            'Shipped \n 12:20 PM, January 4, 2024',
            'Out for delivery \n 07:00 AM, January 8, 2024',
            'Delivered \n Estimated delivery by 09:20 AM'
        ]
    }
  }
}
</script>