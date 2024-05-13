<template>
  <Base>
    <template #title> estudio </template>
  </Base>
</template>

<script setup>
import Base from '../components/Base.vue'
import ViewItems from '../components/ViewItems.vue'
import { useViewsStore } from '../stores/views'
import { useDataStore } from '../stores/data'
import { onMounted, ref } from 'vue'

const storeViews = useViewsStore()
const storeData = useDataStore()
const data = ref('')
// control de vistas
const view = ref({
  name: 'aboutus'
})

storeViews.chanceView(view.value.name)
// control de data proyectos
onMounted(async () => {
  try {
    if (Object.keys(storeData.data[view.value.name]).length === 0) {
      await storeData.updateAboutUs()
    }
    data.value = storeData.data[view.value.name]
  } finally {
  }
})
</script>