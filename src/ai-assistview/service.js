export const getAzureOpenAIAssist = async (req) => {
  const {
    apiKey,
    endpoint,
    deployment,
    prompt,
    apiVersion = '2024-07-01-preview'
  } = req;
  try {
    if (!apiKey) throw new Error('Azure OpenAI API key is required.');
    if (!endpoint) throw new Error('Azure OpenAI endpoint is required.');
    if (!deployment) throw new Error('Azure OpenAI deployment name is required.');
    const url =
      endpoint.replace(/\/$/, '') +
      `/openai/deployments/${encodeURIComponent(deployment)}/chat/completions` +
      `?api-version=${encodeURIComponent(apiVersion)}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'api-key': apiKey },
      body: JSON.stringify({
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        max_tokens: 200
      })
    });
    if (!response.ok) throw new Error('API request failed');
    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    throw new Error('⚠️ Something went wrong while connecting to the OpenAI service. Please check your API key.');
  }
};
export const getGeminiAIAssit = async (apiKey, model, prompt) => {
  try {
    if (!apiKey) throw new Error('Gemini API key is required.');
    if (!model) throw new Error('Gemini model is required.');
    const url =
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}` +
      `:generateContent?key=${encodeURIComponent(apiKey)}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt || 'Hi' }] }]
      })
    });
        if (!response.ok) throw new Error('API request failed');
        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
  } catch (error) {
    throw new Error('⚠️ Something went wrong while connecting to the Gemini service. Please check your API key.');
  }
};
export const getdeepSeekAIAssit = async (deepseekApiKey, prompt) => {
  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${deepseekApiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 200,
        stream: false,
      })
    });
        if (!response.ok) throw new Error('API request failed');
        const data = await response.json();
        return data.choices[0].message.content;
  } catch (error) {
    throw new Error('⚠️ Something went wrong while connecting to the DeepSeek service. Please check your API key.');
  }
};