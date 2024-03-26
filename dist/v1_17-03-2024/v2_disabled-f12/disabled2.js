// This part prevents right-click context menu
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();

  const x = e.clientX;
  const y = e.clientY;

  const scrollX = window.pageXOffset;
  const scrollY = window.pageYOffset;

  const customMessage = document.getElementById('disabled_click');
  customMessage.textContent = "Right-clicking is discouraged.";
  customMessage.style.left = `${x + scrollX}px`;
  customMessage.style.top = `${y + scrollY}px`;
  customMessage.style.display = 'block';

  setTimeout(function () {
      customMessage.style.display = 'none';
  }, 1000);
});

// This part prevents F12 key press
document.addEventListener('keydown', function (e) {
  if (e.key === 'F12') {
      e.preventDefault();
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const messageBox = document.createElement('div');
      messageBox.textContent = "F12 key is disabled!";
      messageBox.style.position = 'fixed';
      messageBox.style.top = `${screenHeight / 2}px`;
      messageBox.style.left = `${screenWidth / 2}px`;
      messageBox.style.transform = 'translate(-50%, -50%)';
      messageBox.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      messageBox.style.padding = '20px';
      messageBox.style.borderRadius = '5px';
      messageBox.style.fontSize = '18px';
      messageBox.style.fontFamily = 'Arial, sans-serif';
      messageBox.style.zIndex = '9999';
      document.body.appendChild(messageBox);
      setTimeout(function () {
          messageBox.remove();
      }, 2000);
  }
});
