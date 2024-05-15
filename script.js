document.getElementById('startGame').addEventListener('click', function() {
  // Open the Dino game in a new tab
  window.open('chrome://dino', '_blank');

  // Automatically focus the game tab and start the game
  setTimeout(() => {
    window.focus();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
  }, 3000); // Adjust the delay as needed
});
