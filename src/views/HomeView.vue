<template>
  <Base>
    <template #header>
      <MainItem />
      <LogoItem :type="typeLogo" />
    </template>
    <template #description>
      {{ intro }}
    </template>
    <template #body>
      <PreviewItem :view="'projects'" :data="dataPage.proyectos" v-if="!loadingPage.proyectos">
        <template #title>Proyectos</template>
      </PreviewItem>
      <PreviewItem :view="'works'" :data="dataPage.obras" v-if="!loadingPage.obras">
        <template #title>Obras</template>
      </PreviewItem>
      <PreviewItem :view="'aboutus'" :data="dataPage.estudio" v-if="!loadingPage.estudio">
        <template #title>Estudio</template>
        <template #content>descripcion estudio</template>
      </PreviewItem>
    </template>
  </Base>
</template>

<script setup>
import Base from '../components/Base.vue'
import LogoItem from '../components/LogoItem.vue'
import MainItem from '../components/MainItem.vue'
import PreviewItem from '../components/PreviewItems.vue'

import { useViewsStore } from '../stores/views'
import { useDataStore } from '../stores/data'
import { onMounted, ref } from 'vue'

const storeViews = useViewsStore()
const storeData = useDataStore()
const typeLogo = ref('home')
const view = ref({
  name: ''
})
storeViews.chanceView(view.value.name)

const intro = ref(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas auctor pretium. Etiam vehicula imperdiet dictum. Duis lorem magna, commodo quis rutrum nec, rutrum et mauris. Ut vitae metus metus. In semper urna a erat tempus mollis. Mauris faucibus purus massa, eu eleifend elit porta ac. Aliquam sodales ut augue non molestie. Proin semper in ipsum eget lacinia. Phasellus eleifend erat ac libero placerat mollis. '
)

const loadingPage = ref({
  proyectos: true,
  obras: true,
  estudio: true
})
const dataPage = ref({
  proyectos: Object,
  obras: Object,
  estudio: Object
})

onMounted(async () => {
  try {
    if (Object.keys(storeData.data['projects']).length === 0) {
      await storeData.updateProjects()
    }
  } finally {
    loadingPage.value.proyectos = false
    dataPage.value.proyectos = storeData.data['projects']
  }
  try {
    if (Object.keys(storeData.data['works']).length === 0) {
      await storeData.updateWorks()
    }
  } finally {
    loadingPage.value.obras = false
    dataPage.value.obras = storeData.data['works']
  }
  try {
    if (Object.keys(storeData.data['aboutus']).length === 0) {
      await storeData.updateAboutUs()
    }
  } finally {
    loadingPage.value.estudio = false
    dataPage.value.estudio = storeData.data['aboutus']
  }
})
</script>

<style scoped>
/* text intro */
</style>