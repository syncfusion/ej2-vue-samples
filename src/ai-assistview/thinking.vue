<template>
    <div class="col-lg-12 control-section">
        <div class="thinking-aiassistview">
            <ejs-aiassistview
                id="aiAssistView"
                ref="aiAssistViewRef"
                :promptSuggestions="suggestions"
                :promptRequest="onPromptRequest"
                bannerTemplate="bannerTemplate"
            >
                <template v-slot:bannerTemplate>
                    <div class="banner-content">
                        <div class="e-icons e-brain"></div>
                        <h3>💭 Thinking Support</h3>
                        <i>Break down complex problems and think through decisions.</i>
                    </div>
                </template>
            </ejs-aiassistview>
        </div>
    </div>

    <div id="action-description">
        <p>This sample demonstrates the thinking support of the AI AssistView control.</p>
    </div>
    <div id="description">
        <p>In this example, the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/ai-assistview#bannertemplate">bannerTemplate</a> customizes the banner content. The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/ai-assistview#promptsuggestions">promptSuggestions</a> provides AI prompt suggestions, and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/ai-assistview#promptrequest">promptRequest</a> handles prompt requests when triggered.</p>
    </div>
</template>

<script>
import { AIAssistViewComponent, AssistThinking } from "@syncfusion/ej2-vue-interactive-chat";

export default {
    components: {
        'ejs-aiassistview': AIAssistViewComponent
    },

    provide: {
        aiassistview: [AssistThinking]
    },

    data: function () {
        return {
            suggestions: [
                'Build a modern dashboard for my business',
                'Create a login page with validation',
                'Make a task management board'
            ]
        };
    },

    methods: {
        onPromptRequest(args) {
            const inst = this.$refs.aiAssistViewRef.ej2Instances;
            // Step 1
            setTimeout(() => {
                inst.addPromptResponse({
                    blocks: [
                        {
                            blockType: 'thinking',
                            title: 'Understanding your request',
                            collapsible: true,
                            collapsed: false,
                            isActive: true,
                            stages: [
                                {
                                    id: 'step1',
                                    status: 'inprogress',
                                    content: 'Identified request as a business dashboard requirement.'
                                }
                            ]
                        }
                    ]
                }, false);
                // Step 2
                setTimeout(() => {
                    inst.addPromptResponse({
                        blocks: [
                            {
                                blockType: 'thinking',
                                title: 'Understanding your request',
                                collapsible: true,
                                collapsed: true,
                                isActive: false,
                                stages: [
                                    {
                                        id: 'step1',
                                        status: 'completed',
                                        content: 'Identified request as a business dashboard requirement.'
                                    }
                                ]
                            },
                            {
                                blockType: 'thinking',
                                title: 'Selecting UI components',
                                collapsible: true,
                                collapsed: false,
                                isActive: true,
                                stages: [
                                    {
                                        id: 'step2',
                                        status: 'inprogress',
                                        iconCss: 'e-icons e-check',
                                        content: 'Selected {0}, {1}, and {2} for dashboard layout.',
                                        editableContext: [
                                            { type: 'tool', name: 'Charts', value: 'Analytics visualization' },
                                            { type: 'tool', name: 'Grid', value: 'Tabular data' },
                                            { type: 'tool', name: 'Cards', value: 'KPI metrics' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }, false);
                    // Step 3
                    setTimeout(() => {
                        inst.addPromptResponse({
                            blocks: [
                                {
                                    blockType: 'thinking',
                                    title: 'Understanding your request',
                                    collapsible: true,
                                    collapsed: true,
                                    isActive: false,
                                    stages: [
                                        {
                                            id: 'step1',
                                            status: 'completed',
                                            content: 'Identified request as a business dashboard requirement.'
                                        }
                                    ]
                                },
                                {
                                    blockType: 'thinking',
                                    title: 'Selecting UI components',
                                    collapsible: true,
                                    collapsed: true,
                                    isActive: false,
                                    stages: [
                                        {
                                            id: 'step2',
                                            status: 'completed',
                                            iconCss: 'e-icons e-check',
                                            content: 'Selected {0}, {1}, and {2} for dashboard layout.',
                                            editableContext: [
                                                { type: 'tool', name: 'Charts', value: 'Analytics visualization' },
                                                { type: 'tool', name: 'Grid', value: 'Tabular data' },
                                                { type: 'tool', name: 'Cards', value: 'KPI metrics' }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    blockType: 'thinking',
                                    title: 'Designing layout structure',
                                    collapsible: true,
                                    collapsed: false,
                                    isActive: true,
                                    stages: [
                                        {
                                            id: 'step3',
                                            status: 'inprogress',
                                            iconCss: 'e-icons e-check',
                                            content: 'Created responsive {0} layout structure.',
                                            editableContext: [
                                                { type: 'context', name: '12-column', value: '12-column grid' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }, false);
                        // Step 4 (FINAL RESPONSE)
                        setTimeout(() => {
                            inst.addPromptResponse({
                                blocks: [
                                    {
                                        blockType: 'thinking',
                                        title: 'Understanding your request',
                                        collapsible: true,
                                        collapsed: true,
                                        isActive: false,
                                        stages: [
                                            {
                                                id: 'step1',
                                                status: 'completed',
                                                content: 'Identified request as a business dashboard requirement.'
                                            }
                                        ]
                                    },
                                    {
                                        blockType: 'thinking',
                                        title: 'Selecting UI components',
                                        collapsible: true,
                                        collapsed: true,
                                        isActive: false,
                                        stages: [
                                            {
                                                id: 'step2',
                                                status: 'completed',
                                                iconCss: 'e-icons e-check',
                                                content: 'Selected {0}, {1}, and {2} for dashboard layout.',
                                                editableContext: [
                                                    { type: 'tool', name: 'Charts', value: 'Analytics visualization' },
                                                    { type: 'tool', name: 'Grid', value: 'Tabular data' },
                                                    { type: 'tool', name: 'Cards', value: 'KPI metrics' }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        blockType: 'thinking',
                                        title: 'Designing layout structure',
                                        collapsible: true,
                                        collapsed: true,
                                        isActive: false,
                                        stages: [
                                            {
                                                id: 'step3',
                                                status: 'completed',
                                                iconCss: 'e-icons e-check',
                                                content: 'Created responsive {0} layout structure.',
                                                editableContext: [
                                                    { type: 'context', name: '12-column', value: '12-column grid' }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        blockType: 'thinking',
                                        title: 'Finalizing output',
                                        collapsible: true,
                                        collapsed: true,
                                        isActive: false,
                                        stages: [
                                            {
                                                id: 'step4',
                                                status: 'completed',
                                                iconCss: 'e-icons e-check',
                                                content: 'Generated final dashboard structure successfully.'
                                            }
                                        ]
                                    }
                                ],
                                response:
                                    "<h2>Business Dashboard Structure</h2>" +
                                    "<p><strong>Generated successfully.</strong></p>" +
                                    "<div class='section'>" +
                                    "<h3>Features Included:</h3>" +
                                    "<ul>" +
                                    "<li>Key performance indicator cards</li>" +
                                    "<li>Revenue and sales charts</li>" +
                                    "<li>Recent activity data grid</li>" +
                                    "<li>Responsive layout for all devices</li>" +
                                    "<li>Clean navigation structure</li>" +
                                    "</ul>" +
                                    "</div>" +
                                    "<div class='section'>" +
                                    "<h3>Recommended Syncfusion Components:</h3>" +
                                    "<ul>" +
                                    "<li>Chart</li>" +
                                    "<li>Grid</li>" +
                                    "<li>Card</li>" +
                                    "<li>Sidebar</li>" +
                                    "<li>DropDownList</li>" +
                                    "</ul>" +
                                    "</div>"
                            }, true);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }
    }
};
</script>

<style>
    .thinking-aiassistview {
        height: 600px;
        width: 60vw;
        margin: 0 auto;
    }

    .thinking-aiassistview .banner-content .e-brain:before {
        font-size: 35px;
    }

    .thinking-aiassistview .banner-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 330px;
        text-align: center;
    }

    @media only screen and (max-width: 750px) {
        .thinking-aiassistview {
            width: 100%;
        }
    }
</style>