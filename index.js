document.addEventListener('DOMContentLoaded', function () {
  var openVideoButton = document.getElementById('openVideoButton');
  openVideoButton.addEventListener('click', function () {
    chrome.tabs.create({ url: 'https://www.youtube.com/watch?v=ehTuatSx5Wc' });
  });
});
