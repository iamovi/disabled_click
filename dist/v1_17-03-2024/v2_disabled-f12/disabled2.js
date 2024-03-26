document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  
    const x = e.clientX;
    const y = e.clientY;
  
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;
  
    const customMessage = document.getElementById('disabled_click');
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
        alert("F12 key is disabled!");
    }
  });