function captureCurrentTab() {

    return new Promise((resolve, reject) => {

        chrome.tabs.captureVisibleTab(
            null,
            {
                format: "png"
            },
            function(image) {

                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                    return;
                }

                resolve(image);

            }
        );

    });

}