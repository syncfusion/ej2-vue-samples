<template>
  <div class="control-pane">
    <div class="control-section">
      <form class="form-container container bug-form-container" :style="formStyle">
        <div class="single-row-group">
          <label for="bug-name" class="e-form-label">Bug Name</label>
          <ejs-textbox id="bug-name" placeholder="What's the bug ?" :floatLabelType="'Never'" />
        </div>
        <div class="row-group">
          <div>
            <label for="reporter-name" class="e-form-label">Reporter</label>
            <ejs-textbox id="reporter-name" placeholder="Who is the reporter ?" :floatLabelType="'Never'" />
          </div>
          <div>
            <label for="submitted-date" class="e-form-label">Submitted Date</label>
            <ejs-textbox id="submitted-date" placeholder="When it is reported ?" :floatLabelType="'Never'" />
          </div>
        </div>
        <div class="form-group">
          <label for="bug-description" class="e-form-label">Bug Description</label>
          <ejs-textarea id="bug-description" placeholder="Describe a little about the bug." :rows="2" :floatLabelType="'Never'" />
        </div>
        <div class="row-group">
          <div style="display: flex; flex-direction: column;">
            <label for="reproduce-steps" class="e-form-label">Reproduce Steps</label>
            <ejs-textarea id="reproduce-steps" placeholder="Enter the repro steps here.." :cols="30" :rows="4" :floatLabelType="'Never'" />
          </div>
          <div>
            <label class="form-label">Bug Priority</label>
            <div class="row">
              <ejs-radiobutton id="radio1" label="Low" name="bug-priority" value="low" />
            </div>
            <div class="row">
              <ejs-radiobutton id="radio2" label="Medium" name="bug-priority" value="medium" :checked="true" />
            </div>
            <div class="row">
              <ejs-radiobutton id="radio3" label="High" name="bug-priority" value="high" />
            </div>
          </div>
        </div>
        <div>
          <label for="browser" class="form-label">Select the browser</label>
          <ejs-combobox id="browser" :dataSource="browsers" placeholder="Choose the browser" :popupHeight="'230px'" />
        </div>
        <div class="form-footer">
          <ejs-button type="reset" id="reset" content="Reset" :iconCss="'e-icons e-reset'" cssClass="form-button" />
          <ejs-smartpaste id="smart-paste" cssClass="form-button" content="Smart Paste" :iconCss="'e-icons e-paste'" :aiAssistHandler="serverAIRequest" />
        </div>
      </form>
      <div class="col-lg-4 property-section">
        <div class="property-panel-section">
          <div class="property-panel-content">
            <h4>Choose a preset below</h4>
            <div class="chip-container">
              <ejs-chiplist id="chip-choice" :chips="bugPresets" selection="Single" :selectedChips="[0]" @click="chipsClickHandler" />
            </div>
            <div id="bug-report-text" v-html="selectedBugReport"></div>
            <ejs-button id="copy-btn" :content="copyButtonContent" :iconCss="copyButtonIcon" @click="onCopyClickHandler" />
          </div>
        </div>
      </div>
      <div id="action-description">
        <p>This example demonstrates how the <code>SmartPasteButton</code> component can automatically fill out forms using data from the user's clipboard.</p>
        <p>To explore this and more Syncfusion Vue Smart AI integrations locally, check out our <a target='_blank' href='https://github.com/syncfusion/smart-ai-samples/tree/master/vue' aria-label="Navigate to explore the syncfusion Vue AI Demos repository">GitHub repository</a>.</p>
      </div>
      <div id='description'>
        <p>In this example, clicking the Smart Paste button retrieves data from the clipboard and automatically fills in the form fields. This streamlines the data entry process by removing the need for manual input.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { ButtonComponent, ChipListComponent, SmartPasteButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { TextBoxComponent, TextAreaComponent } from '@syncfusion/ej2-vue-inputs';
import { RadioButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { ComboBoxComponent } from '@syncfusion/ej2-vue-dropdowns';
import { getAzureChatAIRequest } from '../common/openai'

export default defineComponent({
  name: 'App',
  components: {
    'ejs-button': ButtonComponent,
    'ejs-chiplist': ChipListComponent,
    'ejs-textbox': TextBoxComponent,
    'ejs-textarea': TextAreaComponent,
    'ejs-radiobutton': RadioButtonComponent,
    'ejs-combobox': ComboBoxComponent,
    'ejs-smartpaste': SmartPasteButtonComponent
  },
  setup() {
    const formStyle = {
      maxWidth: "900px",
      lineHeight: "35px",
      backgroundColor: "#f3f4f6"
    };

    const bugPresets = [
      "Issue with the dropdown menu",
      "Trouble logging into the website",
      "Search functionality not working",
      "Images missing on the product page"
    ];

    const bugReports = [
      `Hi, this is Alice. On July 3rd, I've come across a bug where the dropdown menu in the navigation bar doesn't close after selecting an item. I just navigated to the homepage, opened the dropdown menu in the navigation bar, clicked an item in the dropdown and then the issue occurred which happens only on Chrome. Though this doesn't seem like a serious/important bug, kindly look into it and resolve it. Regards, J Alice Abraham`,
      `Hey team, On May 2nd, K John Doe reported an issue where the login page refreshes instead of logging in when the user clicks the login button. This problem prevents users from accessing their accounts, making it a critical issue that needs immediate attention. The issue has been observed across all major browsers. To reproduce the issue, open any browser and navigate to the website's login page. Enter a valid username and password, then click the Login button.`,
      `Hi, Whenever I type something in the search bar and hit search, it doesn't return any results, even for items I know exist. This problem was noticed by Jane Smith on July 5th in FireFox browser. You can repro the issue by opening the site in the Firefox browser and navigate to the search bar. Type in any search term, including items that are known to exist, and click the search button. The search functionality fails to return any results, displaying an empty result set even for valid queries. This is quite important, but not urgent. Please look into it. Regards, M William Marker`,
      `Hello, When I selected the category option on the landing page and chose the electronics category, the images were missing on the product page. The placeholders are there, but no actual images are loading. This happens on all browsers. I reported this on July 3rd. It's not urgent, but it does affect the user experience. Regards, L Mike Johnson`
    ];

    const browsers = ['Chrome', 'Firefox', 'Safari'];
    const selectedBugReport = ref(bugReports[0]);
    const copyButtonContent = ref('Copy');
    const copyButtonIcon = ref('e-icons e-copy');

    onMounted(() => {
      selectedBugReport.value = bugReports[0];
    });

    const serverAIRequest = async (options) => {
      let output = '';
      try {
        output = await getAzureChatAIRequest(options);
      } catch (error) {
        console.error("Error:", error);
      }
      return output;
    };

    const onCopyClickHandler = async () => {
      await navigator.clipboard.writeText(selectedBugReport.value);
      copyButtonContent.value = "Copied";
      copyButtonIcon.value = "e-icons e-check";
    };

    const chipsClickHandler = (e) => {
      selectedBugReport.value = bugReports[e.index];
      copyButtonContent.value = "Copy";
      copyButtonIcon.value = "e-icons e-copy";
    };

    return {
      formStyle,
      bugPresets,
      browsers,
      selectedBugReport,
      copyButtonContent,
      copyButtonIcon,
      onCopyClickHandler,
      chipsClickHandler,
      serverAIRequest
    };
  },
});
</script>

<style>

.form-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
    width: 700px;
    margin: 0 auto;
}

.form-label {
    margin-bottom: 5px;
}

.form-input,
.form-textarea,
.form-select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 100%;
}

.form-textarea {
    height: 80px;
}


.row-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}

.form-footer {
    display: flex;
    margin-top: 20px;
    justify-content: right;
    gap: 15px;
}

.form-group {
    display: grid;
    gap: 8px;
}

.single-row-group {
    display: grid;
    gap: 8px;
}

#bug-report-text {
    padding: 10px;
    margin: 15px 0px;
    color: #000;
    background-color: #f3f3f3;
    border: 1px solid #ddd;
    border-radius: 5px;
    line-height: 1.5;
}

#reset,
#smart-paste {
    border-radius: 20px;
}
</style>