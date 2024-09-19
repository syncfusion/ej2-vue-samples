import { AzureOpenAI } from "openai";

// Replace your Azure OpenAI endpoint, apiVersion, deployment and API key here
const endpoint = "AZURE_OPENAI_ENDPOINT";
const apiKey = "AZURE_OPENAI_API_KEY";
const deployment = "DEPLOYMENT_NAME";
const apiVersion = "API_VERSION";

const openAi = new AzureOpenAI({
    endpoint,
    apiKey,
    apiVersion,
    deployment,
    dangerouslyAllowBrowser: true
});

export async function OpenAiModel(subQuery: string, promptQuery: string) {
    const chatCompletion = await getOpenAiModel(subQuery, promptQuery);
    return chatCompletion.choices[0].message.content;
}

export async function getOpenAiModel(subQuery: string, promptQuery: string) {
    return await openAi.chat.completions.create({
        messages: [
            { role: "system", content: subQuery.includes("emoji followed by the sentiment in the format") ? "You are a helpful assistant. Please respond in string format." : "NOTE: Return same html format just do changes content only. don't change html formats." },
            {
                role: "user",
                content: `${subQuery} ${promptQuery}`
            }
        ],
        model: "gpt-4",
    });
}