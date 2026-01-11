
const viewerCountEl = document.getElementById("viewer-count");

function updateViewerCount() {
  const min = 33;
  const max = 45;
  const randomCount = Math.floor(Math.random() * (max - min + 1)) + min;
  viewerCountEl.textContent = randomCount;
}

// Update every second
setInterval(updateViewerCount, 1000);
