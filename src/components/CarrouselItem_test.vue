<template>
  <div class="container-main">
    <div class="container-card">
      <!-- <img src="@/assets/IMG/01-photo.webp" alt="proyectoN" class="image"> -->
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
/* main */
.container-main{
  top: 4vh;
  width: 100%;
  height: 88vh;
}

/* card */
.container-card{
  width: 100%;
  height: 100%;
  background-image: url("@/assets/IMG/01-photo.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
@media (max-width: 65em){
  .container-card{
    background-size: contain;
  }
}
@media (max-width: 35em){
  .container-card{
    height: 100vw;
  }
}
</style>
