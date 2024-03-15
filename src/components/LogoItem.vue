<template>
  <router-link to="/" :class="[type+'-logo']">
    <!-- <img src="../assets/IMG/Imagotipo _ Tag 4.png" alt="" class="logo"> -->
  </router-link>
</template>
<script setup>
  const props = defineProps({
    type: String,
  });
</script>
<style scoped>
.home-logo{
  position: absolute;
  z-index: 9000;
  min-width: 15rem;
  width: 45rem;
  min-height: 6em;
  padding-block: 4rem;
  top: 1rem;
  background: hsla(0 0% 0% / 0.3);
  background-image: var(--home-logo-1);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
}
.home-logo:hover{
  background: hsla(0 0% 0% / 0.5);
  background-image: var(--home-logo-2);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
}
@media (max-width: 65em){
  .home-logo{
    width: 25em;
  }
}
@media (max-width: 35em){
  .home-logo{
    width: 18em;
  }
}

.footer-logo, .header-logo{
  position: absolute;
  z-index: 9000;
  width: 13rem;
  min-height: 7em;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
}
.header-logo{
  background-image: var(--icon-logo-3);
}
.footer-logo{
  background-image: var(--icon-logo-1);
}
.footer-logo:hover, .header-logo:hover{
  background-image: var(--icon-logo-2);
}
</style>