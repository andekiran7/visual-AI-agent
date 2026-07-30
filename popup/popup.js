document.getElementById("analyzeBtn").addEventListener("click", async () => {

    const tabs = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    const currentTab = tabs[0];

    document.getElementById("website").innerText = currentTab.url;

    document.getElementById("summary").innerText = "Capturing screen...";

    chrome.tabs.captureVisibleTab(
        null,
        { format: "png" },

        async function(image) {

            document.getElementById("preview").src = image;

            document.getElementById("summary").innerText =
                "Analyzing with AI...";

            try {

                const result = await analyzeImage(image);

                document.getElementById("summary").innerText = result;

            }
            catch(error){

    console.error("AI Error:", error);

    document.getElementById("summary").innerText =
        error.message || JSON.stringify(error);
}

        }
    );

});