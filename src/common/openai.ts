
import { AzureOpenAI } from "openai";

// Replace your Azure OpenAI endpoint, apiVersion, deployment and API key here
const endpoint = "AZURE_OPENAI_ENDPOINT";
const apiKey = "AZURE_OPENAI_API_KEY";
const deployment = "DEPLOYMENT_NAME";
const apiVersion = "API_VERSION";
const client = new AzureOpenAI({
  endpoint,
  apiKey,
  apiVersion,
  deployment,
  dangerouslyAllowBrowser: true
});

export async function getAzureChatAIRequest(options: any) {
  try {
    const result = await client.chat.completions.create({
      messages: options.messages,
      model: "",
      top_p: options.topP,
      temperature: options.temperature,
      max_tokens: options.maxTokens,
      frequency_penalty: options.frequencyPenalty,
      presence_penalty: options.presencePenalty,
      stop: options.stopSequences
    });
    return result.choices[0].message.content;
  } catch (err) {
    console.error("Error occurred:", err);
    return null;
  }
}

export async function getAzureTextAIRequest(prompt: any) {
  try {
    const result = await client.completions.create({ prompt, model: deployment });
    return result.choices[0]?.text;
  } catch (err) {
    console.error("Error occurred:", err);
    return undefined;
  }
}