<template>
    <div>
        <div class="col-lg-12 control-section">
            <div id="form-control control-wrapper">
                <ejs-form-builder ref="formBuilder" id="form-builder-control" :schema="schema"></ejs-form-builder>
            </div>
        </div>
    </div>
    <section id="action-description" aria-label="Description of Form Builder sample">
        <p>
            The <code>Form Builder</code> is an intuitive visual form designer that enables you to create, build, and customize forms interactively by dragging and dropping form fields, without writing any code.
            <br />
            This sample showcases the Form Builder control, allowing you to visually design forms and preview the generated form in real time as you make changes.
        </p>
    </section>
    <section id="description" aria-label="Description of Form Builder sample">
        <p>
            In this sample, you can visually create custom forms by dragging and dropping fields onto the design canvas, arranging their layout, and configuring their properties through an interactive design experience.
        </p>
        <p>
            The left pane of the Form Builder control displays all supported form fields, which can be dragged and dropped onto the central design canvas to construct the form. After a field is added, its configurable settings are displayed in the right pane, allowing you to customize its properties and behavior. Once the form design is complete, you can use the built-in preview option to view and interact with the generated form in real time.
        </p>
        <p>
            The Form Builder simplifies form creation by providing a visual, code-free design experience. It also allows you to export the generated form schema, which can be used with the <a href="https://ej2.syncfusion.com/vue/documentation/form-renderer/getting-started">Form Renderer</a> control to render and display the form in other applications.
        </p>
    </section>
</template>

<script>
import { FormBuilderComponent } from "@syncfusion/ej2-vue-form-builder";

export default {
    components: {
        'ejs-form-builder': FormBuilderComponent,
    },
    data() {
        return {
            schema: {
                "properties": {
                },
                "layout": [
                ],
                "settings": {
                    "name": "Untitled Form",
                    "width": "100%"
                }
            }
        };
    }
}
</script>
