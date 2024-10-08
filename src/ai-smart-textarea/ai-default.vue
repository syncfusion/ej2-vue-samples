<template>
  <div class="control-pane">
    <div class="control-section">
      <div class="content-wrapper">
        <div class="example-label">Select a role</div>
        <ejs-dropdownlist id="user-role" :dataSource="rolesData" :placeholder="'Select a role'" :popupHeight="'200px'"
          :width="'75%'" :value="selectedRole" @change="onChange"></ejs-dropdownlist>
        <br />
        <ejs-textarea id="smart-textarea" ref="textareaObj" placeholder="Enter your queries here"
          :floatLabelType="'Auto'" :rows="5" :userRole="userRole" :userPhrases="phrasesData"
          :aiSuggestionHandler="serverAIRequest"></ejs-textarea>
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
import { TextAreaComponent } from '@syncfusion/ej2-vue-inputs';
import { getAzureChatAIRequest } from '../common/openai';

export default {
  components: {
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-textarea': TextAreaComponent,
  },
  data() {
    return {
      textareaObj: null,
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
    async serverAIRequest(settings) {
      let output = '';
      try {
        const response = await getAzureChatAIRequest(settings);
        output = response;
      } catch (error) {
        console.error('Error:', error);
      }
      return output;
    },
    onChange(args) {
      this.selectedRole = args.value;
      const selectedPreset = this.presets.find(
        (preset) => preset.userRole === this.selectedRole
      );
      this.userRole = selectedPreset.userRole;
      if (this.$refs.textareaObj) {
        this.$refs.textareaObj.userRole = this.userRole;
        this.$refs.textareaObj.userPhrases = selectedPreset.userPhrases;
      }
    },
  },
};
</script>

<style>
.content-wrapper div.row {
  padding: 7px 0px;
}


.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 50px 0px;
  background: rgb(229 231 235);
  border-radius: 10px;
}

.content-wrapper div.row {
  padding: 7px 0px;
}

.example-label {
  width: 75%;
  font-weight: 700;
}

.e-multi-line-input {
  min-width: 75%;
}
</style>
