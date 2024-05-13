<template>
  <div class="container-gallery">
    <div class="container-cards">
      <RouterLink
        :to="['details/']+view+['/']+item._id"
        class="card pointer"
        v-for="item in data.slice(0, items)"
        :key="item._id"
      >
        <img
          class="card-img disabled"
          :src="item.imagenes[0]"
          :alt="item.titulo"
          :ref="(element) => {imagenElementos[item._id] = element}"
          @load="adjustImg(item._id)"
        />
        <h3 class="title disabled">{{ item.titulo }}</h3>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['view', 'data'])

const items = ref(5)
const imagenElementos = Array(items.value)

const adjustImg = (item) => {
  const img = imagenElementos[item]
  if (img.width > img.height) {
    img.style.height = '101%'
  }else{
    img.style.width = '101%'
  }
};
</script>

<style scoped>
/* container-cards*/
/* cards */
.container-gallery {
  background-color: var(--color-background-contraste);
  padding-bottom: 4rem;
  min-height: 50vh;
  text-align: center;
}
.container-gallery .container-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  --gap: 0;
}
.container-cards .card {
  /* min-height: 30rem; */
  height: 35vw;
  /* min-width: 30rem; */
  width: 45vw;
  max-width: 50rem;
  margin: 1rem;
  background-image: url('@/assets/IMG/01-photo.webp');
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
@media (max-width: 65em) {
  .container-cards .card {
    height: 45vw;
    width: 70vw;
  }
}
@media (max-width: 35em) {
  .container-cards .card {
    height: 65vw;
    width: 85vw;
  }
}
img.card-img {
  width: auto;
  height: auto;
}
h3.title {
  position: absolute;
  color: transparent;
  font-size: x-large;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.container-cards .card:hover img {
  filter: brightness(50%);
}
.container-cards .card:hover h3.title {
  color: white;
}
@media (max-width: 65em) {
  h1.title {
    font-size: 10vw;
  }
  .container-cards .card {
    margin-top: 0.5rem;
  }
}
</style>