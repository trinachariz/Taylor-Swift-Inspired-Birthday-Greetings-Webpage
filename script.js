function blowOutCandles(songId) {
    var songElement = document.getElementById(songId);
    var cakeImage = songElement.querySelector('.cake');
  
    // Change the cake image to show blown out candles
    cakeImage.src = 'cake_blown.png';
  
    // Display the birthday message
    var messageElement = document.getElementById('message');
    messageElement.innerText = '🎉🎶 Happy Birthday to You! 🎶🎉';
  }
  