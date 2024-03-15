<template>
  <div class="container-main">
    <!-- images::start -->
    <div class="container-img">
      <img 
      src="/src/assets/IMG/HOME_website.png" 
      alt="" class="img-home" 
      :style="{width: wallWidth, height: wallHeight, left: wallX + 'rem', top: wallY + 'rem'}">
      <!-- <img src="https://drive.google.com/file/d/1-arra18TanTpSSAh6KIQHNItn2KS25uQ/preview" alt=""> -->
    </div>
    <!-- images::end -->
    
    <!-- title::start -->
    <div class="title-main">
      DISEÑO Y <br>CONSTRUCCION
    </div>
    <!-- title::end -->

    
    <!-- buttons::start -->
    <!-- <div class="button-right" :datavisible="true"></div>
    <div class="button-left"></div> -->
    <!-- buttons::end -->
  </div>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const windowSize = ref({ width: window.innerWidth, height: window.innerHeight });
const wallWidth = ref("100vw");
const wallHeight = ref("auto");
const wallX = ref(0);
const wallY = ref(0);
// first wallResize
wallResize(windowSize.value.width/windowSize.value.height);

const handleResize = () => {
  windowSize.value = { width: window.innerWidth, height: window.innerHeight };
  // console.log(windowSize.value.width, windowSize.value.height, windowSize.value.width/windowSize.value.height);
  var base = windowSize.value.width/windowSize.value.height;
  base = parseFloat(base).toFixed(2);
  wallResize(base);
};
function wallResize(base){
  var X = (20 - (1.6 / base * 18)).toFixed(2);
  // left:-27.4rem
  // wallX.value = 27.4 - base * 0.0365;
  // console.log(wallX.value, base, X, Y);
  // top:-2.7rem
  // wallY.value = 2.7 - base * 0.45;
  if (base<1.44) {
    wallX.value = X;
  } else {
    wallX.value = 0;
  }
  if (base<1.82) {
    wallWidth.value = "auto";
    wallHeight.value = "100%";
  } 
  else {
    wallHeight.value = "auto";
    wallWidth.value = "100%";
  }
}
onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
/* main container */
.container-main{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

/* title main */
.title-main{
  position: absolute;
  z-index: 9000;
  /* top: 60vh; */
  word-wrap: break-word;
  bottom: 4rem;
  left: 0rem;
  padding-inline: 1rem;
  color: var(--vt-c-white);
  font-family: "OktaNeue-Bold";
  font-size: 4.5rem;
  font-weight: bold;
  text-align: left;
  text-shadow: 2px 2px 10px black;
  line-height: 1.2;
  background: hsla(0 0% 0% / 0.3);
  user-select: none;
}
@media (max-width: 65em){
  .title-main{
    font-size: 3em;
  }
}
@media (max-width: 35em){
  .title-main{
    font-size: 2em;
  }
}

/* images config */
.container-img{
  width: 100%;
  height: 100vh;
  /* transform: translateY(-55%); */
}
img.img-home{
  width: 100vw;
  height: auto;
}
/* @media (max-width: 1650px) {
  img.img-home{
    height: 100%;
    width: auto;
  }
} */
@media (max-width: 65em){
  img.img-home{
    /* transform: translateX(-50vw); */
    /* left: -30vw; */
  }
}
</style>