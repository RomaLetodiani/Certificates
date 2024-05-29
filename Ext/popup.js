const baseUrlInput = document.getElementById("baseUrlInput");
const innerTextInput = document.getElementById("innerTextInput");
const queryTextInput = document.getElementById("queryTextInput");
const collectLinksButton = document.getElementById("collectLinks");

collectLinksButton.addEventListener("click", () => {
  const baseUrl = baseUrlInput.value.trim();
  const innerText = innerTextInput.value.trim();
  const query = queryTextInput.value.trim();

  // Get the active tab and send a message to the content script
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTabId = tabs[0].id;
    chrome.tabs.sendMessage(activeTabId, {
      type: "collectLinks",
      baseUrl,
      innerText,
      query,
    });
  });
});
