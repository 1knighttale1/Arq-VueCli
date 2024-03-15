<template>
  <footer id="footer" class="footer-container">
    <!-- {{ storeData.data.contacts }} -->
    <div v-if="isFooter" class="footer-content flex">
      <span>cargando datos :'v </span>
    </div>
    <div v-else class="footer-content flex">
      <div class="detail-container ">
        <div class="title-container">
          <span class="footer-title">
            Direcciones
          </span>
        </div>
        <div class="address-container" v-for="contact in storeData.data.contacts" :key="contact.texto">
            <span class="address-span span" v-if="contact.titulo=='direccion'">{{ contact.texto }}</span>
        </div>      
      </div>
      <div class="detail-container">
        <div class="title-container">
          <span class="footer-title">
            Contactos
          </span>
        </div>
        <div class="email-container" v-for="contact in storeData.data.contacts" :key="contact.texto">
          <span class="email-span span" v-if="contact.titulo=='email'">{{ contact.texto }}</span>
        </div>
        <div class="tel-container" v-for="contact in storeData.data.contacts" :key="contact.texto">
          <span class="tel-span span" v-if="contact.titulo=='telefono'">{{ contact.texto }}</span>
        </div>      
      </div>
      <div class="detail-container">
        <div class="title-container">
          <span class="footer-title">
            Siguenos
          </span>
        </div>
        <div class="social-container" v-for="socialweb in social" :key="socialweb">
          <span class="social-span span pointer">{{ socialweb }}</span>
        </div>
      </div>
    </div>
    <div class="logo-container flex">
      <LogoItem :type="typeLogo"/>
    </div>
    <span class="copyright">
      &copy;2023, POIESIS. Todos los derechos reservados.
    </span>
  </footer>
</template>

<script setup>
  import LogoItem from '../components/LogoItem.vue';

  import { RouterLink } from 'vue-router';
  import { useDataStore } from '../stores/data';
  import { ref } from "vue";

  const storeData = useDataStore();
  const data = ref(storeData.data.contacts.value);
  const typeLogo = ref('footer');

  const props = defineProps({
    isFooter: Boolean,
  });

  const social = ref({
    FACEBOOK: "FACEBOOK",
    INSTAGRAM: "INSTAGRAM",
    PINTEREST: "PINTEREST",
    YOUTUBE: "YOUTUBE",
    LINKEDIN: "LINKEDIN",
  })
</script>

<style scoped>
footer.footer-container{
  color: var(--color-invert-text);
  background-color: var(--vt-c-rizan-black);
  width: 100%;
  min-height: 70vh;
  bottom: 0;
  padding: 7rem 5% 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
@media(max-width: 65em){
  footer.footer-container{
    padding-bottom: 1em;
  }
}
.footer-content{
  width: 90%;
  justify-content: space-around;
}
@media(max-width: 65em) {
  .footer-content{
    flex-direction: column;
  }
}
.detail-container{
  width: 100%;
  text-align: center;
  --select: auto;
}
.title-container{
  height: 4rem;
}
@media (max-width: 65em){
  .title-container{
    height: 2.5rem;
  }
}
span.footer-title{
  color: var(--color-text-2);
}
span.span{
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
}
.social-span{
  font-weight: bold;
}
.social-span:hover{
  color: var(--color-text-2);
}
.logo-container{
  justify-content: space-around;
  align-items: center;
  width: 7rem;
  height: 13rem;
  overflow: hidden;
}
span.copyright{
  opacity: 0.9;
  text-align: center;
}
</style>