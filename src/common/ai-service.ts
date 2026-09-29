async function fingerPrint(): Promise<string | null> {
  try {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 300;
    canvas.style.display = "none";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas context not available");

    const size = 24;
    const diamondSize = 28;
    const gap = 4;
    const startX = 30;
    const startY = 30;
    const blue = "#1A3276";
    const orange = "#F28C00";

    const colorMap: string[][] = [
      ["blue", "blue", "diamond"],
      ["blue", "orange", "blue"],
      ["blue", "blue", "blue"]
    ];

    const drawSquare = (x: number, y: number, color: string): void => {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, size, size);
    };

    const drawDiamond = (centerX: number, centerY: number, size: number, color: string): void => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - size / 2);
      ctx.lineTo(centerX + size / 2, centerY);
      ctx.lineTo(centerX, centerY + size / 2);
      ctx.lineTo(centerX - size / 2, centerY);
      ctx.closePath();
      ctx.fill();
    };

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const type = colorMap[row][col];
        const x = startX + col * (size + gap);
        const y = startY + row * (size + gap);
        if (type === "blue") drawSquare(x, y, blue);
        else if (type === "orange") drawSquare(x, y, orange);
        else if (type === "diamond") drawDiamond(x + size / 2, y + size / 2, diamondSize, orange);
      }
    }

    ctx.font = "20px Arial";
    ctx.fillStyle = blue;
    ctx.textBaseline = "middle";
    ctx.fillText("Syncfusion", startX + 3 * (size + gap) + 20, startY + size + gap);

    ctx.globalCompositeOperation = "multiply";
    ctx.fillStyle = "rgb(255,0,255)";
    ctx.beginPath(); ctx.arc(50, 200, 50, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "rgb(0,255,255)";
    ctx.beginPath(); ctx.arc(100, 200, 50, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "rgb(255,255,0)";
    ctx.beginPath(); ctx.arc(75, 250, 50, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "rgb(255,0,255)";
    ctx.beginPath();
    ctx.arc(200, 200, 75, 0, Math.PI * 2, true);
    ctx.arc(200, 200, 25, 0, Math.PI * 2, true);
    ctx.fill("evenodd");

    const sha256 = async (str: string): Promise<string> => {
      const encoder = new TextEncoder();
      const data = encoder.encode(str);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => ('0' + b.toString(16)).slice(-2)).join('');
    };
    const visitorID = await sha256(canvas.toDataURL());
    document.body.removeChild(canvas); // Clean up the canvas element
    return visitorID;
  } 
  catch (error) {
    console.error(error);
    return null;
  }
}

export const serverAIRequest = async (settings: any): Promise<any> => {
    try {
        const visitorId = await fingerPrint();
        let response = await fetch('https://ai-samples-server-f5hta2h9g5aqhcfg.southindia-01.azurewebsites.net/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                visitorId,
                messages: settings
            })
        })
        let result = await response.json();
        if (!response.ok) {
            throw new Error(result.error || 'Network response was not ok');
        }
        result.response = result.response.replace('END_INSERTION', '');
        return result.response;
    } catch (error: any) {
        if (error.message.includes('token limit')) {
            showTokenLimitBanner(error.message);
        }
        else if (error.message.includes('Failed to fetch')) {
            console.warn("To test these samples locally, configure and use your own API key.");
        }
        else {
            console.error('There was a problem with your fetch operation:', error);
        }
    }
};

export const getOpenAiModelRTE = async (subQuery: string, promptQuery: string): Promise<any> => {
    try {
        const visitorId = await fingerPrint();
        // Make a POST request to the /api/rte endpoint with the required data.
        let response = await fetch('https://ai-samples-server-f5hta2h9g5aqhcfg.southindia-01.azurewebsites.net/api/rte', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                visitorId,
                subQuery,
                promptQuery
            })
        });

        let result = await response.json();
        if (!response.ok) {
            throw new Error(result.error || 'Network response was not ok');
        }
        return result.response;
    } catch (error: any) {
        if (error.message.includes('token limit')) {
            showTokenLimitBanner(error.message);
        }
        else if (error.message.includes('Failed to fetch')) {
            console.warn("To test these samples locally, configure and use your own API key.");
        } 
        else {
            console.error('There was a problem with your fetch operation:', error);
        }  
    }
};

export const OpenAiModelKanban = async (promptQuery: string): Promise<any> => {
    try {
        const visitorId = await fingerPrint();
        let response = await fetch('https://ai-samples-server-f5hta2h9g5aqhcfg.southindia-01.azurewebsites.net/api/kanban', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                visitorId,
                promptQuery
            })
        })
        let result = await response.json();
        if (!response.ok) {
            throw new Error(result.error || 'Network response was not ok');
        }
        result.response = result.response.replace('END_INSERTION', '');
        return result.response;
    } catch (error: any) {
        if (error.message.includes('token limit')) {
            showTokenLimitBanner(error.message);
        }
        else if (error.message.includes('Failed to fetch')) {
            console.warn("To test these samples locally, configure and use your own API key.");
        }
        else {
            console.error('There was a problem with your fetch operation:', error);
        }
    }
};

export function showTokenLimitBanner(message: string): void {
    const bannerMessage = document.querySelector('.banner-message');
    const bannerHeader = document.querySelector('.sb-token-header');
    if (bannerMessage && bannerHeader) {
        bannerMessage.innerHTML = message;
        bannerHeader.classList.remove('sb-hide');
    }
}

export async function getUserID(): Promise<string> {
    return fingerPrint() as Promise<string>;
}

export const fetchAiResponse = async (prompt: string, chart: any, raw: any): Promise<any> => {
    try {
        if (typeof serverAIRequest !== 'function') {
            throw new Error(
                'serverAIRequest is not available. Make sure common/ai-service.ts ' +
                'is loaded before this sample runs.'
            );
        }

        const response = await serverAIRequest({
            messages: [
                { role: 'system', content: prompt },
                { role: 'user', content: JSON.stringify(raw) }
            ]
        });

        return typeof response === 'string'
            ? JSON.parse(response)
            : response;

    } catch (e) {
        console.error('fetchAI error:', e);
        return {
            props: {
                series: [{
                    dataSource: raw
                }]
            }
        };
    }
};

export const executeChartAction = (data: any, chart: any): void => {
    if (data && data.props) {
        chart.setProperties(data.props, false);
        chart.refresh();
    }
};

export const AI_SERVICE_URL: string = 'https://ai-samples-server-f5hta2h9g5aqhcfg.southindia-01.azurewebsites.net';

/* start data preprocessing */
export type ChartPoint = { time: Date; visitors: number | null; color?: string };

export function showSpinnerById(id: string): void {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add('visible');
}

export function hideSpinnerById(id: string): void {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('visible');
}

function parseCleanedLines(linesText: string, original: ChartPoint[]): ChartPoint[] {
    const lines = linesText.split('\n').map((line) => line.trim()).filter((line) => line.length > 0);
    const out: ChartPoint[] = [];
    let i = 0;

    for (const line of lines) {
        const [stamp, value] = line.split(':');
        if (!stamp || !value) continue;

        const dateParts = stamp.trim().split('-').map((part) => parseInt(part, 10));
        const val = parseFloat(value.trim());

        if (dateParts.length === 6 && dateParts.every(Number.isFinite) && !Number.isNaN(val)) {
            const [year, month, day, hour, minute, second] = dateParts;
            const date = new Date(year, month - 1, day, hour, minute, second);
            const isCurrentNull = original[i]?.visitors == null;
            const isNextNull = original[i + 1]?.visitors == null;
            const color = isCurrentNull || isNextNull ? '#D84227' : undefined;
            out.push({ time: date, visitors: val, color });
            i++;
        }
    }

    return out;
}

export async function fetchAI(
    userPrompt: string,
    chart: any,
    chartState: any,
    originalData: ChartPoint[]
): Promise<any> {
    const schema = generateDataPreprocessingChartSchema('Chart');

    const systemPrompt = `
You help clean hourly website visitors data for a Syncfusion Chart.
Return ONLY cleaned lines in "yyyy-MM-dd-HH-m-ss:Value" format (no extra text).
We will set series[0].dataSource from your lines.
Do not modify chart configuration.

Current chart state: ${JSON.stringify(chartState)}
Schema (for reference): ${JSON.stringify(schema)}
`;

    const aiOutput = await serverAIRequest({
        messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt }
        ]
    });

    if (!aiOutput) {
        return { props: {}, explanation: 'Empty AI output', confidence: 0 };
    }

    const cleanedText = aiOutput.includes('```')
        ? aiOutput.split('```')[1].trim()
        : aiOutput.trim();

    const parsed = parseCleanedLines(cleanedText, originalData);

    return {
        props: {
            series: [{ dataSource: parsed }]
        },
        includedProps: ['DataSource'],
        ignoreProps: schema.ignoreProps.default,
        explanation: 'Filled missing values & resolved outliers in dataSource.',
        confidence: 0.95
    };
}

export const executeDatapreprocessingChartAction = (
    data: any,
    chart: any,
    includedProps?: object
): void => {
    if (data?.props) {
        chart.setProperties(data.props, false);
        chart.refresh();
    }
};

export const generateDataPreprocessingChartSchema = (componentType = 'Chart') => ({
    title: 'Syncfusion Universal AI Response (Chart)',
    type: 'object',
    props: {
        componentType: { type: 'string', const: componentType },
        properties: { type: 'object', properties: {} }
    },
    includedProps: { type: 'array', items: { type: 'string' }, default: ['DataSource'] },
    ignoreProps: {
        type: 'array',
        items: { type: 'string' },
        default: [
            'primaryXAxis',
            'primaryYAxis',
            'legendSettings',
            'chartArea',
            'series.type',
            'theme',
            'palettes',
            'tooltip',
            'locale',
            'enableRtl',
            'cssClass',
            'created',
            'destroyed',
            'height',
            'width'
        ]
    },
    explanation: { type: 'string' },
    confidence: { type: 'number', minimum: 0, maximum: 1 },
    required: ['props', 'explanation', 'includedProps', 'ignoreProps', 'confidence'],
    additionalProperties: true
});
/* end data preprocessing */

/* ----------------------------------------------------------------------------
 * Stock-specific AI helpers (used by the AI Stock Forecasting sample)
 * --------------------------------------------------------------------------*/

export interface StockForecastPoint {
    date: Date;
    high: number;
    low: number;
    open: number;
    close: number;
}

export const fetchAiStockChartSchema = (componentType: string = 'Chart') => {
    return {
        title: 'Syncfusion Universal AI Response (Chart)',
        type: 'object',
        props: {
            componentType: {
                type: 'string',
                const: componentType
            },
            properties: {
                type: 'object',
                properties: {}
            }
        },
        includedProps: {
            type: 'array',
            items: { type: 'string' },
            default: ['DataSource']
        },
        ignoreProps: {
            type: 'array',
            items: { type: 'string' },
            default: [
                'primaryXAxis',
                'primaryYAxis',
                'legendSettings',
                'chartArea',
                'series.type',
                'theme',
                'palettes',
                'tooltip',
                'locale',
                'enableRtl',
                'cssClass',
                'created',
                'destroyed',
                'height',
                'width'
            ]
        },
        explanation: { type: 'string' },
        confidence: { type: 'number', minimum: 0, maximum: 1 },
        required: ['props', 'explanation', 'includedProps', 'ignoreProps', 'confidence'],
        additionalProperties: true
    };
};

export const parseLinesToPoints = (
    text: string,
    original: StockForecastPoint[]
): StockForecastPoint[] => {
    const lines = text
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l.length);

    const out: StockForecastPoint[] = [];

    for (const line of lines) {
        const pieces = line.split(':').map((s) => s.trim());
        if (pieces.length < 5) {
            continue;
        }
        const [stamp, highStr, lowStr, openStr, closeStr] = pieces;
        const dateParts = stamp.split('-');
        if (dateParts.length !== 3) {
            continue;
        }
        const year = parseInt(dateParts[0], 10);
        const month = parseInt(dateParts[1], 10);
        const day = parseInt(dateParts[2], 10);
        if (isNaN(year) || isNaN(month) || isNaN(day)) {
            continue;
        }
        const high = parseFloat(highStr);
        const low = parseFloat(lowStr);
        const open = parseFloat(openStr);
        const close = parseFloat(closeStr);
        if (isNaN(high) || isNaN(low) || isNaN(open) || isNaN(close)) {
            continue;
        }
        out.push({
            date: new Date(year, month - 1, day),
            high,
            low,
            open,
            close
        });
    }

    return original.concat(out);
};

export const fetchAiStockResponse = async (
    userPrompt: string,
    _chart: any,
    chartState: any,
    originalData: StockForecastPoint[]
): Promise<any> => {
    try {
        const schema = fetchAiStockChartSchema('Chart');

        const systemPrompt =
            'Return ONLY the cleaned/forecast lines in "yyyy-MM-dd:High:Low:Open:Close".\n' +
            'We will set series[0].dataSource from your lines. Do not change chart configuration.\n\n' +
            'Current chart state: ' +
            JSON.stringify(chartState) +
            '\n\n' +
            'Schema (for reference): ' +
            JSON.stringify(schema);

        const aiOutput: string | undefined = await serverAIRequest({
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt }
            ]
        });

        if (!aiOutput) {
            return {
                props: {},
                explanation: 'Empty AI output',
                confidence: 0
            };
        }

        let cleanedText = aiOutput;
        if (aiOutput.indexOf('```') >= 0) {
            cleanedText = aiOutput.split('```')[1].trim();
        } else {
            cleanedText = aiOutput.trim();
        }

        const parsed = parseLinesToPoints(cleanedText, originalData);

        return {
            props: {
                series: [
                    {
                        dataSource: parsed
                    }
                ]
            },
            includedProps: ['DataSource'],
            ignoreProps: schema.ignoreProps.default,
            explanation:
                'Appended 35 realistic OHLC rows to dataSource for forecasting.',
            confidence: 0.95
        };
    } catch (e) {
        console.error('fetchAiStockResponse:', e);
        return {
            props: { series: [{ dataSource: originalData }] },
            explanation: 'AI forecast failed; keeping the original dataset.',
            confidence: 0
        };
    }
};

/* ----------------------------------------------------------------------------
 * AI AssistView chart helpers (used by the AI Generate Chart sample)
 * --------------------------------------------------------------------------*/

export const CHART_KEYWORDS = [
    'chart', 'graph', 'plot', 'visualize', 'visualization', 'data',
    'statistics', 'bar', 'pie', 'line', 'area', 'column', 'doughnut',
    'comparison', 'track', 'compare', 'display'
];

export function isChartRequest(text: string | null | undefined): boolean {
    if (!text) return false;
    const t = String(text).toLowerCase();
    for (let i = 0; i < CHART_KEYWORDS.length; i++) {
        if (t.indexOf(CHART_KEYWORDS[i]) >= 0) return true;
    }
    return false;
}

/**
 * Try to extract a JSON object from the (sometimes noisy) AI output.
 * Looks between the first '{' and the last '}' first, then falls back to
 * stripping any Markdown code fences.
 */
export function extractJson(raw: string): string | null {
    if (!raw) return null;
    let text = raw;
    if (text.indexOf('```') >= 0) {
        const fence = text.split('```');
        text = fence.find((s) => s.trim().startsWith('{')) || text;
    }
    const first = text.indexOf('{');
    const last = text.lastIndexOf('}');
    if (first < 0 || last < 0 || last <= first) return null;
    return text.substring(first, last + 1).trim();
}

/**
 * Build the system prompt for the chart-config AI call.  Mirrors the
 * original JS sample exactly.
 */
export function buildChartSystemPrompt(): string {
    return [
        'You are a data visualization assistant.',
        'Return ONLY JSON with this envelope and field names:',
        '- Must include "props" and "properties".',
        '- "properties" MUST include "series": array of series objects.',
        '- Do NOT return "properties.data".',
        '        ### Supported Chart Types',
        '        - **Chart Type**: Only \'cartesian\' or \'circular\'',
        '        - **Series Types**: Line, Column, Spline, Area, Pie, Doughnut',
        'Shape:',
        '{',
        '  "props": {',
        '    "chartType": "cartesian | circular",',
        '    "title": "<Chart Title>",',
        '    "showLegend": true,',
        '    "sideBySidePlacement": true | false,',
        '    "xAxis": [ { "type": "category | numerical | datetime | logarithmic", "title": "xvalue", "labelRotation": 0 } ],',
        '    "yAxis": [ { "type": "numerical | logarithmic", "title": "yvalue", "min": 0 } ]',
        '  },',
        '  "properties": {',
        '    "series": [',
        '      {',
        '        "type": "line | column | spline | area | pie | doughnut",',
        '        "name": "<Series Name>",',
        '        "dataSource": [   { "xvalue": "North", "yvalue": 100 },',
        '                { "xvalue": "South", "yvalue": 80 },',
        '                { "xvalue": "East", "yvalue": 60 },',
        '                { "xvalue": "West", "yvalue": 90 } ],',
        '        "tooltip": true | false',
        '      }',
        '    ]',
        '  }',
        '}',
        'Rules:',
        '- Infer chartType from keywords.',
        '- Title: Derive a meaningful title from the user input.',
        '- For cartesian charts, include xAxis and yAxis.',
        '- Use xvalue/yvalue pairs in dataSource.',
        '- Default showLegend to true.',
        '- Data Source: Always include \'xvalue\' and \'yvalue\' pairs.',
        '- Return ONLY JSON, no code fences.'
    ].join('\n');
}

/** Schema descriptor passed to the AI service for chart configs. */
export function generateChartSchema(_componentType: string = 'Chart'): object {
    return {
        title: 'Syncfusion Universal AI Response (Chart)',
        type: 'object',
        props: {
            chartType: { type: 'string', enum: ['cartesian', 'circular'] },
            title: { type: 'string' },
            showLegend: { type: 'boolean' },
            sideBySidePlacement: { type: 'boolean' },
            xAxis: { type: 'array' },
            yAxis: { type: 'array' }
        },
        properties: {
            type: 'object',
            properties: {
                series: { type: 'array' }
            }
        },
        additionalProperties: true
    };
}

/**
 * Fallback chart config used when the AI service is unavailable - the
 * config varies based on a simple keyword match in the prompt.
 */
export function generateDefaultChartConfig(text: string): any {
    const lower = (text || '').toLowerCase();

    if (lower.indexOf('pie') >= 0 || lower.indexOf('doughnut') >= 0) {
        return {
            chartType: 'circular',
            title: 'Sample Pie Chart',
            showLegend: true,
            series: [{
                type: 'pie',
                name: 'Market Share',
                tooltip: true,
                dataSource: [
                    { xvalue: 'A', yvalue: 40 },
                    { xvalue: 'B', yvalue: 30 },
                    { xvalue: 'C', yvalue: 20 },
                    { xvalue: 'D', yvalue: 10 }
                ]
            }]
        };
    }

    if (lower.indexOf('line') >= 0 || lower.indexOf('trend') >= 0) {
        return {
            chartType: 'cartesian',
            title: 'Sample Line Chart',
            showLegend: true,
            xAxis: [{ type: 'category', title: 'Time Period' }],
            yAxis: [{ type: 'numerical', title: 'Values' }],
            series: [{
                type: 'line',
                name: 'Trend Data',
                tooltip: true,
                dataSource: [
                    { xvalue: 'Q1', yvalue: 21 },
                    { xvalue: 'Q2', yvalue: 24 },
                    { xvalue: 'Q3', yvalue: 36 },
                    { xvalue: 'Q4', yvalue: 38 }
                ]
            }]
        };
    }

    if (lower.indexOf('area') >= 0) {
        return {
            chartType: 'cartesian',
            title: 'Sample Area Chart',
            showLegend: true,
            xAxis: [{ type: 'category', title: 'Months' }],
            yAxis: [{ type: 'numerical', title: 'Revenue' }],
            series: [{
                type: 'area',
                name: 'Revenue',
                tooltip: true,
                dataSource: [
                    { xvalue: 'Jan', yvalue: 10 },
                    { xvalue: 'Feb', yvalue: 20 },
                    { xvalue: 'Mar', yvalue: 30 },
                    { xvalue: 'Apr', yvalue: 40 },
                    { xvalue: 'May', yvalue: 50 },
                    { xvalue: 'Jun', yvalue: 60 }
                ]
            }]
        };
    }

    return {
        chartType: 'cartesian',
        title: 'Sample Column Chart',
        showLegend: true,
        sideBySidePlacement: true,
        xAxis: [{ type: 'category', title: 'Categories' }],
        yAxis: [{ type: 'numerical', title: 'Values' }],
        series: [{
            type: 'column',
            name: 'Sales Data',
            tooltip: true,
            dataSource: [
                { xvalue: 'Jan', yvalue: 35 },
                { xvalue: 'Feb', yvalue: 28 },
                { xvalue: 'Mar', yvalue: 34 }
            ]
        }]
    };
}

/** Lightweight lead-in phrase generator. */
export function getRandomLeadIn(): string {
    const lines = [
        "Here's the chart based on your request:",
        'Your data visualization is ready:',
        'Generated chart as per your input:',
        'This chart illustrates the information you asked for:',
        "Here's what your data looks like in chart form:",
        'Hope this chart helps you see the trends clearly!',
        'Transformed your idea into a visual story:',
        "Turning numbers into visuals\u2014here's your chart!"
    ];
    return lines[Math.floor(Math.random() * lines.length)];
}

/**
 * Fetch the AI-generated `ChartConfig` for the natural-language prompt.
 * Falls back to `generateDefaultChartConfig` when the AI service returns an
 * empty payload or the JSON cannot be parsed.
 */
export async function fetchAIConfig(text: string): Promise<any> {
    if (!text) return generateDefaultChartConfig('');

    const schema = generateChartSchema('chart');
    const systemPrompt = buildChartSystemPrompt();

    let raw: string | undefined;
    try {
        raw = await serverAIRequest({
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: text }
            ],
            schema
        });
    } catch (e) {
        raw = undefined;
    }

    if (!raw) return generateDefaultChartConfig(text);

    const jsonStr = extractJson(raw);
    if (!jsonStr) return generateDefaultChartConfig(text);

    let data: any;
    try {
        data = JSON.parse(jsonStr);
    } catch (e) {
        return generateDefaultChartConfig(text);
    }

    const props = (data && data.props) || {};
    const properties = (data && data.properties) || {};
    const pFallback =
        (data && data.props && data.props.properties) ||
        properties ||
        (data && data.props) ||
        data;

    const series = Array.isArray(pFallback && pFallback.series) ? pFallback.series : [];
    if (!series.length) return generateDefaultChartConfig(text);

    const seriesTypes: Record<string, boolean> = {};
    series.forEach((s: any) => {
        const t = String((s && s.type) || '').toLowerCase();
        if (t) seriesTypes[t] = true;
    });

    let chartType: string;
    if (pFallback && (pFallback.chartType === 'cartesian' || pFallback.chartType === 'circular')) {
        chartType = pFallback.chartType;
    } else {
        const anyCircular = seriesTypes['pie'] || seriesTypes['doughnut'] || seriesTypes['donut'];
        chartType = anyCircular ? 'circular' : 'cartesian';
    }

    const cfg: any = {
        chartType,
        title: (props && props.title) || (pFallback && pFallback.title) || 'Chart',
        showLegend:
            (typeof (props && props.legend) === 'boolean' ? props.legend : undefined) != null
                ? !!props.legend
                : (pFallback && pFallback.showLegend !== undefined ? !!pFallback.showLegend : true),
        sideBySidePlacement: !!(pFallback && pFallback.sideBySidePlacement),
        series
    };

    if (chartType === 'cartesian') {
        const xTitle = props && props.xAxis && props.xAxis[0] && props.xAxis[0].title;
        const yTitle = props && props.yAxis && props.yAxis[0] && props.yAxis[0].title;
        cfg.xAxis = (pFallback && Array.isArray(pFallback.xAxis) && pFallback.xAxis.length)
            ? pFallback.xAxis
            : [{ type: 'category', title: xTitle, labelRotation: 0 }];
        cfg.yAxis = (pFallback && Array.isArray(pFallback.yAxis) && pFallback.yAxis.length)
            ? pFallback.yAxis
            : [{ type: 'numerical', title: yTitle, min: 0 }];
    }

    return cfg;
}

/**
 * Build the `{ Text, CHART, ChartConfig }` payload that AIAssistView's
 * `responseItemTemplate` consumes to render a chart (or text fallback).
 */
export async function fetchAIForAssistViewPayload(text: string): Promise<any> {
    const isChart = isChartRequest(text);
    const cfg = await fetchAIConfig(text);
    (cfg.series || []).forEach((s: any) => { s.visible = true; });
    const leadIn = isChart
        ? getRandomLeadIn()
        : "Here's a sample chart - include the keyword 'chart' (or 'graph', 'plot', 'pie', 'line', etc.) to describe the kind of visualisation you want.";
    return { Text: leadIn, CHART: true, ChartConfig: cfg };
}

/**
 * Apply an AI-generated `{ ChartConfig: { series } }` payload onto an
 * already-rendered Syncfusion chart (cartesian or accumulation).  Mirrors
 * the original JS `executeGenerateChartAction` semantics.
 */
export const executeGenerateChartAction = (data: any, chart: any): void => {
    if (!data || !data.ChartConfig || !data.ChartConfig.series || !chart || !chart.series) {
        return;
    }

    const incoming = data.ChartConfig.series;
    chart.series.forEach((s: any, i: number) => {
        s.dataSource = Array.isArray(incoming[i] && incoming[i].dataSource)
            ? incoming[i].dataSource
            : [];
    });

    if (typeof chart.setProperties === 'function') {
        chart.setProperties(data.ChartConfig.series, true);
    }
};