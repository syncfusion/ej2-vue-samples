<template>
    <div class="badge-accordion">
        <div class="col-lg-12 control-section">
            <div class="sample_container">
                <ejs-accordion id="accordion" :created="onCreated">
                    <e-accordionitems>
                        <e-accordionitem expanded='true' header='Robert' :content='accordionTemplate' iconCss='iconCss'></e-accordionitem>
                        <e-accordionitem header='Kevin' :content='accordionTemplate' iconCss='iconCss'></e-accordionitem>
                        <e-accordionitem header='Eric' :content='accordionTemplate' iconCss='iconCss'></e-accordionitem>
                        <e-accordionitem header='Peter' :content='accordionTemplate' iconCss='iconCss'></e-accordionitem>
                    </e-accordionitems>
                </ejs-accordion>
            </div>
        </div>
        <div id="action-description">
            <p>This sample demonstrates the integration of badges into the accordion component to display the thread notification count.</p>
        </div>

        <div id="description">
            <p>The badge can be integrated into the accordion with the help of templates to display the count of new messages in the
                message thread. Here, the success badge is used in the accordion. To add success badge, add the
                <code>.e-badge-success</code> class.
            </p>
        </div>

    </div>
</template>

<style>
    .badge-accordion .control-section {
        overflow: auto;
    }

    .badge-accordion .sample_container {
        max-width: 350px;
        margin: auto;
        margin-top: 20px;
    }

    /* Font Icons */

    @font-face {
        font-family: 'Contacts';
        src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj0gSRgAAAEoAAAAVmNtYXDnEOdaAAABjAAAADhnbHlmiAnWagAAAcwAAADwaGVhZBD04psAAADQAAAANmhoZWEHiwNuAAAArAAAACRobXR4C9AAAAAAAYAAAAAMbG9jYQAwAHgAAAHEAAAACG1heHABDwA1AAABCAAAACBuYW1lby+ImAAAArwAAAIxcG9zdGUbI4AAAATwAAAAOwABAAADUv9qAFoEAAAAAAAD3QABAAAAAAAAAAAAAAAAAAAAAwABAAAAAQAAWW9ja18PPPUACwPoAAAAANb8zuYAAAAA1vzO5gAAAAAD3QPqAAAACAACAAAAAAAAAAEAAAADACkAAgAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQPwAZAABQAAAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5wDnAQNS/2oAWgPqAJYAAAABAAAAAAAABAAAAAPoAAAD6AAAAAAAAgAAAAMAAAAUAAMAAQAAABQABAAkAAAABAAEAAEAAOcB//8AAOcA//8AAAABAAQAAAABAAIAAAAAADAAeAACAAAAAAO+A+oADQAZAAA3FBYXIT4BNS4BJyEOARMeARc+ATcuAScOAS4YFwMzFxgDq4H+zYGr4QOCY2KCAwOCYmGCnCtOISFOK3qiAwOiAe1igwICg2JjggICggAAAAACAAAAAAPdA+oAFAAoAAABDgEHIicjDgEHLgEnLgEnPgE3HgEFFBYfARYfATcXFhc2JDcmJCcGBAOkBfK3KioXEFcpBBEMRUsBBfK3tvL8cVRLDggBBsQKLDDPARMFBf7tz87+7QI+ndEEBwI/Izh2DS+RVZ3RBATRnWCmN3BIETecAgcBBPK1tfIEBPIAAAAAABIA3gABAAAAAAAAAAEAAAABAAAAAAABAAgAAQABAAAAAAACAAcACQABAAAAAAADAAgAEAABAAAAAAAEAAgAGAABAAAAAAAFAAsAIAABAAAAAAAGAAgAKwABAAAAAAAKACwAMwABAAAAAAALABIAXwADAAEECQAAAAIAcQADAAEECQABABAAcwADAAEECQACAA4AgwADAAEECQADABAAkQADAAEECQAEABAAoQADAAEECQAFABYAsQADAAEECQAGABAAxwADAAEECQAKAFgA1wADAAEECQALACQBLyBDb250YWN0c1JlZ3VsYXJDb250YWN0c0NvbnRhY3RzVmVyc2lvbiAxLjBDb250YWN0c0ZvbnQgZ2VuZXJhdGVkIHVzaW5nIFN5bmNmdXNpb24gTWV0cm8gU3R1ZGlvd3d3LnN5bmNmdXNpb24uY29tACAAQwBvAG4AdABhAGMAdABzAFIAZQBnAHUAbABhAHIAQwBvAG4AdABhAGMAdABzAEMAbwBuAHQAYQBjAHQAcwBWAGUAcgBzAGkAbwBuACAAMQAuADAAQwBvAG4AdABhAGMAdABzAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAFMAeQBuAGMAZgB1AHMAaQBvAG4AIABNAGUAdAByAG8AIABTAHQAdQBkAGkAbwB3AHcAdwAuAHMAeQBuAGMAZgB1AHMAaQBvAG4ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBAgEDAQQABHVzZXIKY2hhdC0wMS13ZgAAAA==) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    .badge-accordion .people,
    .badge-accordion .e-people {
        font-family: 'Contacts';
    }

    .badge-accordion .e-people:before {
        content: '\e700';
    }

    .badge-accordion .people:before {
        content: '\e701';
    }

    /* Accordion Customization */

    .badge-accordion #accordion .e-acrdn-header .e-toggle-icon .e-tgl-collapse-icon.e-icons {
        display: none;
    }

    .badge-accordion .e-acrdn-icons:not(.e-icons) {
        padding: 0 8px 0 0;
        vertical-align: middle;
    }

    .badge-accordion .sample_container li.msg {
        line-height: 36px;
        list-style-type: none;
        text-indent: 16px;
    }

    .badge-accordion .sample_container #accordion .e-toggle-icon {
        font-size: 18px;
        top: -1px;
        display: block;
    }

    .tailwind .badge-accordion .sample_container #accordion .e-toggle-icon {
        top: 7px;
    }

    body.tailwind-dark .sample_container.badge-accordion #accordion .e-toggle-icon,
    body.bootstrap5 .sample_container.badge-accordion #accordion .e-toggle-icon,
    body.bootstrap5-dark .sample_container.badge-accordion #accordion .e-toggle-icon,
    body.fluent .sample_container.badge-accordion #accordion .e-toggle-icon,
    body.fluent-dark .sample_container.badge-accordion #accordion .e-toggle-icon,
    body.material3 .sample_container.badge-accordion #accordion .e-toggle-icon,
    body.material3-dark .sample_container.badge-accordion #accordion .e-toggle-icon {
        top: 5px;
    }

    body.tailwind-dark .e-accordion .e-acrdn-item .e-acrdn-header .e-acrdn-header-icon .e-acrdn-icons.e-icons,
    body.tailwind .e-accordion .e-acrdn-item .e-acrdn-header .e-acrdn-header-icon .e-acrdn-icons.e-icons,
    body.bootstrap5 .e-accordion .e-acrdn-item .e-acrdn-header .e-acrdn-header-icon .e-acrdn-icons.e-icons,
    body.bootstrap5-dark .e-accordion .e-acrdn-item .e-acrdn-header .e-acrdn-header-icon .e-acrdn-icons.e-icons,
    body.material3 .e-accordion .e-acrdn-item .e-acrdn-header .e-acrdn-header-icon .e-acrdn-icons.e-icons,
    body.material3-dark .e-accordion .e-acrdn-item .e-acrdn-header .e-acrdn-header-icon .e-acrdn-icons.e-icons {
        font-size: 12px;
    }

    .e-bigger.tailwind .badge-accordion .sample_container #accordion .e-toggle-icon,
    .e-bigger.tailwind-dark .badge-accordion .sample_container #accordion .e-toggle-icon,
    .e-bigger.bootstrap5 .badge-accordion .sample_container #accordion .e-toggle-icon ,
    .e-bigger.bootstrap5-dark .badge-accordion .sample_container #accordion .e-toggle-icon,
    .e-bigger.fluent .badge-accordion .sample_container #accordion .e-toggle-icon,
    .e-bigger.fluent-dark .badge-accordion .sample_container #accordion .e-toggle-icon,
    .e-bigger.material3 .sample_container.badge-accordion #accordion .e-toggle-icon,
    .e-bigger.material3-dark .sample_container.badge-accordion #accordion .e-toggle-icon {
        top: 11px;
    }
</style>

<script>
import Vue from "vue";
import { AccordionPlugin } from "@syncfusion/ej2-vue-navigations";
import { createElement } from '@syncfusion/ej2-base';
import accordiontemplateVue from "./accordion-template.vue";

Vue.use(AccordionPlugin);
export default Vue.extend({
    data: function() {
        return {
            accordionTemplate: function () {
                return { template : accordiontemplateVue}
            },
            iconCss: 'e-people e-acrdn-icons',
        };
    },
    methods: {
        onCreated: function(args) {
            let badgeContent = ['7 New', '27 New', '2 New', '14 New'];
            // Appending Badge component after the accordion rendered in created event
            let element = document.getElementById('accordion');
            let iconElement = Array.prototype.slice.call((element).querySelectorAll('.e-toggle-icon'));
            for (let i = 0; i < iconElement.length; i++) {
                // Success Badge Element
                let badge = createElement('span', { className: 'e-badge e-badge-success' });
                badge.textContent = badgeContent[i];
                iconElement[i].appendChild(badge);
            }
        }
    }
});
</script>