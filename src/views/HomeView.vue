<template>
  <Base>
    <template #header>
      <MainItem/>
      <LogoItem :type="typeLogo"/>
    </template>
    <template #body>
      <div class="intro-estudio general disabled">
        {{ intro }}
      </div>
      <PreviewItem :view="'projects'">
          <template #title>Proyectos</template>
      </PreviewItem>
      <PreviewItem :view="'works'">
        <template #title>Obras</template>
      </PreviewItem>
    </template>
  </Base>
</template>

<script setup>
import Base from "../components/Base.vue";
import LogoItem from '../components/LogoItem.vue';
import MainItem from '../components/MainItem.vue';
import PreviewItem from '../components/PreviewItem.vue';


import { useViewsStore } from "../stores/views";
import { useDataStore } from "../stores/data";
import { onMounted, ref } from 'vue'

const storeViews = useViewsStore()
const storeData = useDataStore()
const typeLogo = ref('home');
const view = ref({
    name: '',
})
storeViews.chanceView(view.value.name)

const intro = ref("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas auctor pretium. Etiam vehicula imperdiet dictum. Duis lorem magna, commodo quis rutrum nec, rutrum et mauris. Ut vitae metus metus. In semper urna a erat tempus mollis. Mauris faucibus purus massa, eu eleifend elit porta ac. Aliquam sodales ut augue non molestie. Proin semper in ipsum eget lacinia. Phasellus eleifend erat ac libero placerat mollis. ");


const loading = ref(true)
const datos = ref('')

onMounted(async () => {
  try {
    await storeData.updateProjects()
    // datos.value = storeData.data[view.value.name]
  } finally {
    loading.value = false;
  }
  try {
    await storeData.updateWorks()
    // datos.value = storeData.data[view.value.name]
  } finally {
    loading.value = false;
  }
  try {
    await storeData.updateAboutUs()
    // datos.value = storeData.data[view.value.name]
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
/* text intro */
.intro-estudio{
    min-height: 50vh;
    padding-block: 10rem;
    padding-inline: 1.5rem;
    font-size: large;
    font-weight: bold;
    text-align: justify;
    background-color: var(--color-background-contraste);
}
@media (max-width: 65em){
    .intro-estudio{
        font-size: large;
    }
    
}
</style>