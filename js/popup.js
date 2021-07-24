function takeScreenshot() {
	
		var queryInfo = {
			active: true,
			currentWindow: true
		};
	
		chrome.tabs.query(queryInfo, function(tabs) {
			var tab = tabs[0];
			var url = tab.url;
			setTimeout(function() {
				chrome.tabs.captureVisibleTab( 
					chrome.windows.WINDOW_ID_CURRENT,
					function(src) {
						var a = document.getElementById("save");
						a.href = src;
						a.target = "_blank";
						var img = document.getElementById("screenshot");
						img.title = "Screenshot Image";
						img.src = src;
						//If you want image of current screenhot to be visible in popup turn img.hidden to false.
						img.hidden = true;
					}
				);
			}, 1500);
		});
	}

function closePopup() {
	window.close();
}

document.addEventListener('DOMContentLoaded', function() {
	var screenshot_btn = document.getElementById("take_screenshot");
	screenshot_btn.addEventListener('click',takeScreenshot);
	document.getElementById('close').addEventListener('click', closePopup);
});