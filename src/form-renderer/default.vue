<template>
    <div>
        <div class="col-lg-9 control-section sb-property-border">
            <div id="form-control control-wrapper">
                <ejs-form-renderer ref="formRenderer" id="form-renderer-control" :schema="formSchema"></ejs-form-renderer>
            </div>
        </div>
        <div id="form-renderer-panel" class="col-lg-3 property-section">
            <div class="property-panel-section">
                <div class="property-panel-header">Select a ready-to-use form template</div>
                <table id="property" class="property-panel-table" title="Example Forms"
                    style="width: 100%;table-layout: auto;">
                    <tr>
                        <td colspan="2" style="padding-bottom: 2px;">
                            <div>
                                <ejs-radiobutton label="User Registration" name="formSchemaOption" value="userRegistration"
                                :checked="true"
                                :change="changeSchema"></ejs-radiobutton>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" style="padding-bottom: 2px;">
                            <div>
                                <ejs-radiobutton label="Customer Service" name="formSchemaOption" value="customerservice"
                                :change="changeSchema"></ejs-radiobutton>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div>
                                <ejs-radiobutton label="Doctor Appointment" name="formSchemaOption"
                                value="doctorsAppointment"
                                :change="changeSchema"></ejs-radiobutton>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <section id="action-description" aria-label="Description of Form Renderer sample">
        <p>
            The <code>FormRenderer</code> is a powerful, schema-driven component that enables you to build and render
            complex forms with ease using a structured JSON schema definition.
            <br />
            This sample showcases the Form Renderer component with an intuitive property panel, allowing you to seamlessly
            switch between predefined form schemas and explore its capabilities.
        </p>
    </section>
    <section id="description" aria-label="Description of Form Renderer sample">
        <p>
            In this sample, multiple ready-to-use form templates—such as <b>User Registration</b>, <b>Customer
                Service</b>, and <b>Doctor Appointment</b>—are displayed in the property panel using radio buttons.
            Select any option to instantly apply the corresponding form definition to the Form Renderer component via the
            <code>schema</code> property.
        </p>
        <p>
            Each form can be filled out interactively and submitted for data collection, demonstrating how the component
            streamlines form creation, customization, and data capture in real-world scenarios.
        </p>
    </section>
</template>
<style scoped>
    #form-renderer-panel .property-panel-section {
        padding-left: 0px !important;
    }
    #form-renderer-panel .property-panel-table div {
        padding: 0px !important;
    }
    #form-renderer-panel .property-panel-header {
        padding-top: 22px !important;
        padding-bottom: 22px !important;
    }
</style>

<script>
import { FormRendererComponent } from "@syncfusion/ej2-vue-form-renderer";
import { RadioButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { customerService, userRegistration, doctorsAppointment } from "./datasource";

export default {
    components: {
        'ejs-form-renderer': FormRendererComponent,
        'ejs-radiobutton': RadioButtonComponent
    },
    data: function() {
        return {
            formSchema: userRegistration,
            schemas: {
                userRegistration,
                customerService,
                doctorsAppointment
            }
        };
    },
    methods: {
        changeSchema: function(args) {
            if (args.value === 'userRegistration') {
                this.formSchema = this.schemas.userRegistration;
            } else if (args.value === 'customerservice') {
                this.formSchema = this.schemas.customerService;
            } else if (args.value === 'doctorsAppointment') {
                this.formSchema = this.schemas.doctorsAppointment;
            }
        }
    }
}
</script>