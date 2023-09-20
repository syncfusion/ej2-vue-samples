<template>
<div>
    <div class="col-lg-12 control-section">
        <div id="signature-control">
            <div class='e-sign-heading'>
                <span id="signdescription">Sign below</span>
                <span class="e-btn-options">
                    <ejs-button id="signsave" cssClass="e-primary e-sign-save" disabled="true" v-on:click="BtnClick">SAVE</ejs-button>
                    <ejs-button id="signclear" cssClass="e-primary e-sign-clear" disabled="true" v-on:click="clearBtnClick">CLEAR</ejs-button>
                </span>
            </div>
            <ejs-signature id="signature" style="height: 90%; width:100%;" :change="change"></ejs-signature>  
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the basic rendering of the <b>Signature</b> component with the save and clear option.</p>
    </div>
    <div id="description">
        <p>The <code>Signature</code> component is a user interface to draw the signature digitally. The <code>Signature</code> component is displayed as a container where end-user can sign their name as a verified signature inside the container.</p>
        <p>In this sample, you can draw the signature. Use the <b>Save</b> button to store your signature as an image file, and the <b>Clear</b> button to clear the signature.</p>
        <p>
            More information about Signature can be found in this
            <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/signature/getting-started"
            >documentation</a> section.
        </p>
    </div>
</div>
</template>

<script>
import { SignatureComponent } from "@syncfusion/ej2-vue-inputs";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { getComponent } from "@syncfusion/ej2-base";

export default {
  data: function () {
    return {};
  },
  components: {
    "ejs-button": ButtonComponent,
    "ejs-signature": SignatureComponent,
  },
  methods: {
		BtnClick: function() {
			var signature = getComponent(document.getElementById('signature'), 'signature');
    		signature.save();
	    },
        clearBtnClick: function() {
			var signature = getComponent(document.getElementById('signature'), 'signature');
            var saveBtn = getComponent(document.getElementById('signsave'), 'btn');
            var clearBtn = getComponent(document.getElementById('signclear'), 'btn');
    		signature.clear();
            if (signature.isEmpty()) {
                saveBtn.disabled = true;
                clearBtn.disabled = true;
            }
	    },
        change: function() {
            var signature = getComponent(document.getElementById('signature'), 'signature');
            var saveBtn = getComponent(document.getElementById('signsave'), 'btn');
            var clearBtn = getComponent(document.getElementById('signclear'), 'btn');
            if (!signature.isEmpty()) {
                saveBtn.disabled = false;
                clearBtn.disabled = false;
            }
        }
    }
}
</script>

<style>
#signature-control h4 {
    margin-bottom: 20px;
    text-align: center;
}

#signdescription {
    font-size: 14px;
    padding-bottom: 10px;
}

.e-sign-clear {
    margin-left: 5px;
}

.e-btn-options {
    float: right;
    margin-bottom: 10px;
}

#signature-control {
    height: 300px;
    width: 100%;
    margin: 0;
}

.e-bigger #signature-control h4 {
    font-size: 20px;
}
</style>