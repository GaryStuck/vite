<template>
  <cv/>
</template>

<script>
import cv from '../core/components/cv.vue'
export default {
  name: "HelloWorld",
  components: {cv},
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
