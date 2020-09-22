export default function drawCircleInTd (canvas, v_n, v_percent) {
  let context = canvas.getContext('2d')
  let cirX = canvas.width/2
  let cirY = canvas.height/2
  let rad = Math.PI * 2 / 100
  let n = parseFloat(v_n)
  let speed_percent = 1
  let speed_text = 0.1
  var r = 88

  //绘制最外层细圈
  function writeCircle () {
    context.save()         //save和restore可以保证样式属性只运用于该段canvas元素
    context.beginPath()    //开始路径
    context.strokeStyle = '#000'       //设置边线的颜色
    context.arc(cirX, cirY, r, 0, Math.PI * 2, false)      //画一个整圆.
    context.stroke()       //绘制边线
    context.restore()
  }

  //绘制文本
  function writeText (n) {
    context.save()
    context.strokeStyle = '#000'
    context.font = '18px Arial'  //设置字体大小和字体
    context.strokeText(n.toFixed(0), cirX - 3, cirY + 5)  //这里改中心显示的数值和X,Y坐标.
    context.stroke()
    context.restore()
  }

  //绘制蓝色外圈
  function writeBlue (n) {
    context.save()
    context.strokeStyle = '#FA5377'
    context.lineWidth = 4
    context.beginPath()
    context.arc(cirX, cirY, r, -Math.PI / 2, -Math.PI / 2 + rad * n, false)      //这里改初始化百分比
    // context.closePath();
    // context.fill();
    context.stroke()
    context.restore()
  }

  function DreamLoading () {
    //清除所有，重新绘制
    context.clearRect(0, 0, canvas.width, canvas.height)

    writeCircle()
    writeText(speed_text)
    writeBlue(speed_percent)

    if (speed_percent < v_percent) {
      speed_percent++
    } else {
      context.closePath()
    }

    if (speed_text < n) {
      speed_text += 0.05
    } else {
      context.closePath()
    }

    //setTimeout(DreamLoading,speed);
    requestAnimationFrame(DreamLoading)
  }

  DreamLoading()
}
