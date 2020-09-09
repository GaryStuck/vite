<template>
  <div>
    <canvas ref="canvas" id="canvas" class="can"></canvas>
  </div>
</template>

<script>
import {cv} from "../tool/cv.ts";
export default {
  name: "cv",
  mounted() {
    const canvas = this.$refs.canvas;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = 800);
    let H = (canvas.height = 600);
    let pos = cv.getOffset(canvas);
    canvas.onclick = function () {
      console.log(pos.x, pos.y);
    };
  },
};
</script>
<style>
.can {
  background-color: #55ffff;
}

</style>