<template>
  <div>
    <canvas ref="canvas" id="canvas" class="can"></canvas>
    <!--    <canvas  ref="circleCanvas" id="circleCanvas" class="can"></canvas>-->
  </div>
</template>

<script>
  import { cv } from '../tool/cv.ts'
  import drawCircleInTd from '../tool/circle'
  import { Arrow } from '../tool/cv'

  export default {
    name: 'cv',
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
      const ctx = this.canvas.getContext('2d')
      let mouse = cv.getOffset(this.canvas)
      const arrow = new Arrow({
        x: this.W / 2,
        y: this.H / 2,
        w: 180,
        h: 60
      }).render(ctx)
      this.canvas.onmousemove = () => {
        let dx = mouse.x-arrow.x
        let dy = mouse.y-arrow.y
        arrow.rotation = Math.atan2(dy,dx)
        ctx.clearRect(0,0,this.W,this.H)
        arrow.render(ctx)
      }
      /*   this.drawSystem()
         // drawCircleInTd(canvas,10,80)

         // let pos = cv.getOffset(canvas);
         this.canvas.onmousemove = () => {
           this.handleMove()
         };*/
    },
    methods: {
      handleMove () {
        //不断清除画布
        this.ctx.clearRect(0, 0, this.W, this.H)

        let dx = this.mouse.x - this.W / 2
        let dy = this.mouse.y - this.H / 2
        // let angle = Math.atan(dy/dx)*180/Math.PI
        let angle = Math.atan2(dy, dx) * 180 / Math.PI
        this.drawSystem()
        // 起始新的路径
        this.ctx.beginPath()
        this.ctx.lineTo(this.mouse.x, this.mouse.y)
        this.ctx.lineTo(this.W / 2, this.H / 2)
        this.ctx.stroke()
        this.ctx.fillText(angle, this.mouse.x, this.mouse.y)
        // console.log( pageX - target.getBoundingClientRect().left);
      },
      drawSystem () {
        this.ctx.save()
        this.ctx.lineWidth = 1.5
        this.ctx.moveTo(0, this.H / 2)
        this.ctx.lineTo(this.W, this.H / 2)
        this.ctx.moveTo(this.W / 2, 0)
        this.ctx.lineTo(this.W / 2, this.H)
        //描边
        this.ctx.stroke()
        this.ctx.restore()
      }
    },
  }
</script>
<style>
  .can {
    box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.2);
  }
</style>
