<template>
  <!-- start::menu -->
  <button 
  @click="showMenu" 
  class="mobile-nav-toggle pointer" 
  aria-controls="primary-navigation" 
  :aria-expanded="menuHeader">
  </button>
  <!-- end::menu -->
  <!-- start::nav -->
  <nav>
    <ul id="primary-navigation" :data-visible="menuHeader" class="primary-navigation flex">
      <li v-for="menu in menus" :key="menu.id" class="flex menu">
        <span>
          <RouterLink 
          :to="menu.url" 
          class="menu flex" 
          :data-active="isActive(menu.active)">
          {{ menu.text }}
          </RouterLink>
        </span>
      </li>
      <div class="footer-menu">
        <div class="logo-container flex">
          <LogoItem :type="typeLogo"/>
        </div>
        <div class="content-footer-menu">
          <div class="social-menu-container" v-for="socialweb in social" :key="socialweb">
            <span class="social-span pointer">{{ socialweb }}</span>
          </div>
        </div>
      </div>
    </ul>
  </nav>
  <!-- end::nav -->
</template>

<script setup>
import LogoItem from '../components/LogoItem.vue';

import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useViewsStore } from "../stores/views"

const typeLogo = ref('footer');
const store = useViewsStore()
const menuHeader = ref(false)

let id = 0
const menus = ref([
  { id: id++, text: 'PROYECTOS', url: '/projects', active:  'projects'},
  { id: id++, text: 'OBRAS', url:'/works', active: 'works' },
  { id: id++, text: 'NOSOTROS', url:'/aboutus', active: 'aboutus' },
  { id: id++, text: 'CONTACTOS', url:'/contacts', active: 'contacts' },
])
function isActive(menu){  return store.view.name == menu;};
function showMenu(){ menuHeader.value = !menuHeader.value };

const social = ref({
    FACEBOOK: "FACEBOOK",
    INSTAGRAM: "INSTAGRAM",
    PINTEREST: "PINTEREST",
    YOUTUBE: "YOUTUBE",
    LINKEDIN: "LINKEDIN",
  })
</script>

<style scoped>
/* configuracion nav menu */
button.mobile-nav-toggle {
    display: flex;
    position: fixed;
    z-index: 9999;
    background-color: transparent;
    /* background-image: url("@/assets/SVG/menu_icon.svg"); */
    background-image: var(--menu-icon);
    background-repeat: no-repeat;
    width: 2rem;
    border: 0;
    aspect-ratio: 1;
    top: 3.5em;
    right: 2rem;
    filter: invert(1);
}
button.mobile-nav-toggle[aria-expanded="true"]{
    /* cuando se despliega el menu */
    background-image: url("@/assets/SVG/menu_icon2.svg");
    right: 2rem;
    filter: invert(1);
}
/* estilos lista del nav */
ul.primary-navigation {
    list-style: none;
    padding: 0;
    margin: 0;
    
    background: hsla(0 0% 0% / 0.8);
    backdrop-filter: blur(1rem);
}
@supports (backdrop-filter: blur(1rem)) {
    ul.primary-navigation {
        background: hsla(0 0% 0% / 0.8);
        backdrop-filter: blur(1rem);
    }
}
ul.primary-navigation {
  position: fixed;
  z-index: 9998;
  flex-direction: column;
  justify-content: center;
  --gap: .5vh;
  inset: 0 0 0 70%;
  transform: translateX(100%);
  transition: transform 350ms ease-out;
}
ul.primary-navigation[data-visible="true"]{
    transform: translateX(0%);
}
/* pantalla telefono */
@media (max-width: 65em){
  ul.primary-navigation {
    inset: 0 0 0 0%;
  }
  ul.mobile-nav-toggle[aria-expanded="false"]{
    right: 2rem;
  }
}
/* configuracion texto menu */
li.menu {
    justify-content: center;
}
a.menu {
    padding: .3em;
    justify-content: center;
    min-width: 7em;
    font-size: 2em;
    font-weight: bold;
    color: var(--vt-c-white);
}
a.menu:hover{
    color: var(--color-text);    
    text-shadow: 2px 2px 5px white;
}
/* resaltador vista activa */
a.menu[data-active="true"]:before , a.menu[data-active="true"]:after {
    position: absolute;
    opacity: 1;
    width: 100%;
    height: 2px;
    content: '';
    background: #FFF;
}
a.menu[data-active="true"]:before {
    left: 0px;
    top: 0px;
}
a.menu[data-active="true"]:after {
    right: 0px;
    bottom: 0px;
}
/* footer menu */
.footer-menu{
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 20em;
  top: 5vh;
}
.logo-container{
  justify-content: space-around;
  align-items: center;
  width: 6rem;
  height: 9rem;
  overflow: hidden;
}
.content-footer-menu{
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  gap: 1rem;
  height: 20em;
  width: 70%;
  color: var(--color-invert-text);
}
span.social-span{
  font-weight: bold;
}
span.social-span:hover{
  color: var(--color-text-2);
}
</style>