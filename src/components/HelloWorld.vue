<template>
<!--  <cv/>-->
  <ball/>
</template>

<script>
import cv from '../core/components/cv.vue'
import Ball from '../core/components/ball.vue'
export default {
  name: "HelloWorld",
  components: { Ball, cv},
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
