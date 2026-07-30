const GEMINI_API_KEY = "YOUR_ACTUAL_API_KEY";

window.analyzeImage = async function (base64Image) {

    const imageData = base64Image.split(",")[1];

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: "Analyze this browser screenshot. Return:\n1. Website Name\n2. User Activity\n3. Category\n4. Short Summary"
                            },
                            {
                                inlineData: {
                                    mimeType: "image/png",
                                    data: imageData
                                }
                            }
                        ]
                    }
                ]
            })
        }
    );

    const data = await response.json();

    console.log(data);

    if (!response.ok) {
        throw new Error(JSON.stringify(data));
    }

    return data.candidates[0].content.parts[0].text;
};