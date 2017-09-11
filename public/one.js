function clearCanvas() {
    var canvas = document.getElementsByClassName('whiteboard')[0];
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    var w = canvas.width;
    canvas.width = 1;
    canvas.width = w;
  }