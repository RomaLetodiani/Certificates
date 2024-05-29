// Function to collect links with validation
function collectLinks(validate, query = "a.optional-action-target-wrapper") {
  try {
    const links = document.querySelectorAll(query);
    let linkData = [];

    links.forEach((link) => {
      const validation = validate(link);
      if (validation) {
        linkData.push({
          href: link.href,
          text: link.innerText,
        });
      }
    });

    // Log collected link data in content script
    console.log("Collected link data:", linkData);

    // Optionally, send collected link data back to popup script if needed
    chrome.runtime.sendMessage({ type: "linkData", data: linkData });
  } catch (error) {
    console.error(" ~ collectLinks ~ error", error);
  }
}

// Listen for messages from the popup script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "collectLinks") {
    const { baseUrl, innerText, query } = message;
    collectLinks((link) => {
      return (
        link &&
        link.href &&
        link.href.toLowerCase().startsWith(baseUrl) &&
        !link.innerText.includes(innerText)
      );
    }, query);
  }
});
