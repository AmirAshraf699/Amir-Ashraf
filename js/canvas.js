let canvas =  document.getElementById('landing-canvas'),
    canvasContect = canvas.getContext('2d')

canvasContect.beginPath()

canvasContect.moveTo(5, 5)

canvasContect.lineTo(16, 16)

canvasContect.moveTo(25, 5)

canvasContect.lineTo(15, 15)

canvasContect.moveTo(5, 20)

canvasContect.lineTo(15, 30)

canvasContect.moveTo(25, 20)

canvasContect.lineTo(14, 30)

canvasContect.strokeStyle = '#FBFBFB'
canvasContect.lineWidth = 3

canvasContect.stroke()