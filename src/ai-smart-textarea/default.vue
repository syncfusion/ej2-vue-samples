<template>
  <div class="control-pane">
    <div class="control-section">
      <div class="ai-content-wrapper">
        <div class="ai-example-label">Select a role</div>
        <ejs-dropdownlist id="user-role" :dataSource="rolesData" :placeholder="'Select a role'" :popupHeight="'200px'"
          :width="'75%'" :value="selectedRole" @change="onChange"></ejs-dropdownlist>
        <ejs-smarttextarea id="smart-textarea" :width="'75%'" ref="textareaObj" placeholder="Enter your queries here"
          :floatLabelType="'Auto'" :rows="5" :cols="100" :userRole="userRole" :userPhrases="phrasesData"
          :aiSuggestionHandler="smartPasteHandler"></ejs-smarttextarea>
      </div>
      <div id="action-description">
        <p>
          This example demonstrates how the Smart TextArea provides
          sentence-level autocompletion suggestions based on its
          configuration and the user's current input.
        </p>
        <p>
          To explore this and more Syncfusion Vue Smart AI integrations
          locally, check out our
          <a target="_blank" href="https://github.com/syncfusion/smart-ai-samples/tree/master/vue"
            aria-label="Navigate to explore the syncfusion Vue AI Demos repository">GitHub repository</a>.
        </p>
      </div>

      <div id="description">
        <p>
          The Smart TextArea uses AI to offer real-time sentence suggestions
          based on the user's input and role, helping users complete sentences
          more quickly and accurately.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { SmartTextAreaComponent } from '@syncfusion/ej2-vue-inputs';
import { serverAIRequest } from '../common/ai-service';

export default {
  components: {
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-smarttextarea': SmartTextAreaComponent,
  },
  data() {
    return {
      phrasesData: [
        'Please find the attached report.',
        "Let's schedule a meeting to discuss this further.",
        'Can you provide an update on this task?',
        'I appreciate your prompt response.',
        "Let's collaborate on this project to ensure timely delivery.",
      ],
      rolesData: [
        'Maintainer of an open-source project replying to GitHub issues',
        'Employee communicating with internal team',
        'Customer support representative responding to customer queries',
        'Sales representative responding to client inquiries',
      ],
      presets: [
        {
          userRole:
            'Maintainer of an open-source project replying to GitHub issues',
          userPhrases: [
            'Thank you for contacting us.',
            "To investigate, we'll need a repro as a public Git repo.",
            'Could you please post a screenshot of NEED_INFO?',
            'This sounds like a usage question. This issue tracker is intended for bugs and feature proposals. Unfortunately, we do not have the capacity to answer general usage questions and would recommend StackOverflow for a faster response.',
            "We don't accept ZIP files as repros.",
          ],
        },
        {
          userRole: 'Customer support representative responding to customer queries',
          userPhrases: [
            'Thank you for reaching out to us.',
            'Can you please provide your order number?',
            'We apologize for the inconvenience.',
            'Our team is looking into this issue and will get back to you shortly.',
            'For urgent matters, please call our support line.',
          ],
        },
        {
          userRole: 'Employee communicating with internal team',
          userPhrases: [
            'Please find the attached report.',
            "Let's schedule a meeting to discuss this further.",
            'Can you provide an update on this task?',
            'I appreciate your prompt response.',
            "Let's collaborate on this project to ensure timely delivery.",
          ],
        },
        {
          userRole: 'Sales representative responding to client inquiries',
          userPhrases: [
            'Thank you for your interest in our product.',
            'Can I schedule a demo for you?',
            'Please find the pricing details attached.',
            'Our team is excited to work with you.',
            'Let me know if you have any further questions.',
          ],
        },
      ],
      selectedRole: 'Maintainer of an open-source project replying to GitHub issues',
      userRole: 'Employee communicating with internal team',
    };
  },
  methods: {
      smartPasteHandler: async function (settings) {
      let output = '';
      try {
        const response = await serverAIRequest(settings);
        output = response;
      } catch (error) {
        console.error('Error:', error);
      }
      return output;
    },
    onChange: function (args) {
      this.selectedRole = args.value;
      const selectedPreset = this.presets.find(
        (preset) => preset.userRole === this.selectedRole
      );
      this.$refs.textareaObj.selectedRole = this.selectedRole;
      this.$refs.textareaObj.userPhrases = selectedPreset.userPhrases;
    },
  },
};
</script>

<style>

.ai-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 50px 0px;
  border-radius: 10px;
}

.ai-example-label {
  width: 75%;
  font-weight: 700;
}

</style>
