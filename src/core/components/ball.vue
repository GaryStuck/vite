<template>
  <div>
    <canvas ref="canvas" id="canvas" class="can"></canvas>
  </div>
</template>

<script>
  import { Ball } from '../tool/Ball.js'

  export default {
    name: 'Ball',
    data () {
      return {
        canvas: '',
      }
    },
    mounted () {
      this.canvas = this.$refs.canvas
      // const circleCanvas = this.$refs.circleCanvas;
      this.W = (this.canvas.width = 800)
      this.H = (this.canvas.height = 600)
      var ctx = this.canvas.getContext('2d')
      const ball = new Ball({ x: this.W / 2, y: this.H / 2 })
      ball.render(ctx)
      let angle = 0;
      const SWINGS = 160; //振幅
      move()
      function move () {
        window.requestAnimationFrame(move,(e)=>{
          console.log(e)
        })
        ctx.clearRect(0, 0, 800, 600)
        ball.y = 400 + Math.sin(angle) * SWINGS
        angle += 0.08
        angle %=Math.PI*2
        ball.render(ctx)
      }
    },
  }
</script>
<style>
  .can {
    box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.2);
  }
</style>
