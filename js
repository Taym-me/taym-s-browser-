// Variables for the tabs and iframe
const newTabButton = document.getElementById('newTabButton');
const tabsContainer = document.getElementById('tabs');
const iframe = document.getElementById('webview');

let tabCount = 0;

// Function to create a new tab
function createTab(url) {
  const tabId = `tab-${tabCount}`;
  const tabButton = document.createElement('button');
  tabButton.classList.add('tab');
  tabButton.innerText = `Tab ${tabCount + 1}`;
  tabButton.onclick = () => {
    openTab(tabId, url);
  };

  tabsContainer.appendChild(tabButton);
  tabCount++;
}

// Function to open a tab by switching the iframe's URL
function openTab(tabId, url) {
  iframe.src = url;
}

// When clicking on the "New Tab" button
newTabButton.onclick = () => {
  const url = prompt('Enter a website URL:', 'https://www.google.com');
  if (url) {
    createTab(url);
    openTab(`tab-${tabCount - 1}`, url);
  }
};
