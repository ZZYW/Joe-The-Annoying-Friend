// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function () {
	// Replace all rules ...
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
		// With a new rule ...
		chrome.declarativeContent.onPageChanged.addRules([
			{
				// That fires when a page's URL contains a 'g' ...
				conditions: [
          new chrome.declarativeContent.PageStateMatcher({
						pageUrl: {
							urlContains: 'facebook.com'
						},
					})
        ],
				// And shows the extension's page action.
				actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
	});
});


var toggle = true;
chrome.pageAction.onClicked.addListener(function (tab) {
	toggle = !toggle;
	if (toggle) {
		chrome.pageAction.setIcon({
			path: "on.png",
			tabId: tab.id
		});

	} else {
		chrome.pageAction.setIcon({
			path: "off.png",
			tabId: tab.id
		});

	};
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, function (tabs) {
		chrome.tabs.sendMessage(tab.id, {
			state:toggle
		}, function (response) {
			console.log(response.farewell);
		});
	});

});
