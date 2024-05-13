<template>
  <Base>
    <template #title3 v-if="data">
      {{ titulo[view] }}
    </template>
    <template #title2 v-if="data">
      {{ data.titulo }}
    </template>
    <template #description v-if="data">{{ data.descripcion }}</template>
    <template #body v-if="data">
      <GalleryItem :data="data.imagenes"></GalleryItem>
    </template>
  </Base>
</template>

<script setup>
import Base from '../components/Base.vue'
import GalleryItem from '../components/GalleryItem.vue'
import { useViewsStore } from '../stores/views'
import { useDataStore } from '../stores/data'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const storeViews = useViewsStore()
const storeData = useDataStore()

const view = useRoute().params['view']
const idObject = useRoute().params['id']
storeViews.chanceView(view)
const data = ref('')
const titulo = ref({
  projects: 'proyectos',
  works: 'obras'
})
// comprueba si hay datos en el storeData para esta vista, solicita al servidor si no
const update = {
  projects: storeData.updateProjects,
  works: storeData.updateWorks
}
onMounted(async () => {
  try {
    if(Object.keys(storeData.data[view]).length === 0){
      await update[view]()
    }
    // buscando objeto en lista
    data.value = storeData.data[view].find((objeto) => objeto._id === idObject)
  } finally {
  }
})
</script>