<!-- nota: imagenes muy largas pueden desconfigurar la vista del carrusel, 
dar preferencia a imagenes cuadradas -->
<template>
  <!-- {{ storeData }} -->
  <div class="container-central">

    <!-- buttons::start -->
    <div class="button-right" @click="moveCarrousel(1)"></div>
    <div class="button-left" @click="moveCarrousel(-1)"></div>
    <!-- buttons::end -->

    <!-- carrousel::start -->
    <div :class="['carrousel']" :style="{ transform: `translateX(${positionCarrousel}%)`, width: `${sizeCarrousel}%` }">
      <div class="img-carrousel" v-for="item of data" :key="item._id">
        <span class="carrousel-title">
          <!-- <RouterLink :to="['detalle/']+view+['/']+item.id" target="_blank"> -->
          <RouterLink :to="['details/']+view+['/']+item._id">
            {{ item.titulo.toUpperCase() }}
          </RouterLink>
        </span>
        <div class="description">
          {{ item.descripcion_breve }}
        </div>
        <div class="container-img" :style="{backgroundColor:imgBG}">
          <img 
          :src="item.imagenes[0]" 
          :alt="item.titulo" 
          :ref="el => {
            imagenElementos[item._id] = el;
          }" 
          @load="applyStyles(item._id)">
        </div>
      </div>
    </div>
    <!-- carrousel::end -->

    <!-- points::start -->
    <ul class="puntos">
      <li v-for="item in items" 
      :key="item" 
      @click="transformCarrousel(item)" 
      :style="{ transform: `translateX(${positionCarrousel}%)`}"
      :class="['punto', { activo: item === buttonActive }]"></li>
    </ul>
    <!-- points::end -->
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useDataStore } from '../stores/data'
import { useViewsStore } from '../stores/views';
// cargando datos de pinia
const storeData = useDataStore()
const view = useViewsStore().view.name
// cargando items para carrusel
let data = storeData.data[view]
const items = ref(1)

// si no hay item en data
const imgBG = ref('rgba(255, 255, 255, 0.658)')

if(Object.values(data).length == 0){
  data = storeData.data.loading
}else{
  items.value = Object.values(data).length
}


const buttonActive = ref(1)
const positionCarrousel = ref(0)  //  posision inicial del carrusel
const sizeItems = ref(100/items.value)
const sizeCarrousel = ref(100 * items.value)

function transformCarrousel(item) {
  buttonActive.value = item
  positionCarrousel.value = -sizeItems.value * (item - 1)
}

function moveCarrousel(button) {
  buttonActive.value += button
  if(buttonActive.value <= 0) {buttonActive.value = items.value}
  if(buttonActive.value > items.value) {buttonActive.value = 1}
  transformCarrousel(buttonActive.value)
}

// aplciar estilos correspondientes
const imagenElementos = Array(items.value);

const applyStyles = (item) => {
  const img = imagenElementos[item]
  if (img.width > img.height) {
    img.style.height = '101%'
    if (img.width/1.5 > img.height) {
      img.style.animation = 'slideX 5s linear infinite alternate'
    }
  }else{
    img.style.width = '101%'
    if (img.height/1.4 > img.width) {
      img.style.animation = 'slideY 5s linear infinite alternate'
    }
  }
  img.style.left = '-.05em'
  img.style.bottom = '0'

};
</script>
<style>
/* botones */
.container-central .button-right, .container-central .button-left {
  position: absolute;
  width: 3em;
  height: 9em;
  border-radius: .5em;
  top: 35%;
  filter: invert(1);
  background: hsla(0, 100%, 100%, 0.8);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 80%;
  z-index: 1000;
}
.container-central .button-left {
  left: .7em;
  background-image: url('../assets/SVG/arrow_icon.svg');
  transform: scaleX(-1);
}
.container-central .button-right {
  right: .6em;
  background-image: url('../assets/SVG/arrow_icon.svg');
}
@media (max-width: 35em){
  .container-central .button-right, .container-central .button-left {
    height: 5em;
    width: 2.5em;
  }
}
/* carrousel */
.img-carrousel {
  overflow: hidden;
}
.carrousel .img-carrousel {
  /* width: calc( 100% / 2 - 2em); */
  width: 100%;
  padding-inline: .05em;
  min-height: 10vh;
  transition: all 0.4s ease;
  border-radius: 1em;
}
.img-carrousel .container-img {
  /* width: 100%; */
  height: 80vw;
  max-height: 40em;
  margin-inline: 0em;
}
.img-carrousel img {
  position: absolute;
}
div.carrousel{
  width: 100vw;
  border-radius: 1em;
}
/* componentes carrusel (titulo, descripcion) */
.img-carrousel .carrousel-title {
  font-weight: bold;
  position: absolute;
  display: block;
  overflow: hidden;
  padding: .8rem;
  color: white;
  background: hsla(0 0% 0% / 0.6);
  top: 1rem;
  left: 0;
  z-index: 1000;
}
@media (max-width: 35em){
  .img-carrousel .carrousel-title {
    font-weight: normal;
    padding: .3rem;
  }
}
.img-carrousel .description {
  position: absolute;
  display: block;
  overflow: hidden;
  padding: .8rem;
  color: white;
  background: hsla(0 0% 0% / 0.6);
  bottom: 0;
  width: 100%;
  /* height: 10vh; */
  z-index: 1000;
}
/* contenedor central */
.container-central {
  width: 100%;
  /* height: 100vw; */
  max-width: 40em;
  margin-block: 1.5em;
  transition: all 0.4s ease;
  border-radius: 1em;
  overflow: hidden;
  margin: 1.5em auto;
}
.container-central .carrousel {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  transition: all 0.4s ease;
  transition: all 0.3s ease;
  transform: translateX(-25%);
}
/* puntos de carrousel */
.container-central .puntos {
  width: 100%;
  margin: 1em 0 0;
  padding: 0.5em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.container-central .punto {
  width: 1.5em;
  height: 1.5em;
  margin: 1em 1em 0;
  list-style: none;
  color: var(--negro);
  transition: all 0.4s ease;
  border-radius: 1em;
  background-color: var(--blanco);
}
.container-central .punto.activo {
  background-color: lightblue;
}
/* animaciones de imagenes del carrusel */
@keyframes slideY {
  0%{
    bottom: 0%;
  }
  100% {
    bottom: -50%;
  }
}
@keyframes slideX {
  0% {
    left: 0%;
  }
  100% {
    left: -50%;
  }
}
</style>