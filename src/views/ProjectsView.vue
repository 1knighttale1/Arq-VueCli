<template>
    <Base :title="title">
        <template #title>
            <h3 class="sub-title">{{ "proyectos".toUpperCase() }}</h3>
        </template>
        <template #body v-if="loading">
            <Carrousel></Carrousel>
        </template>
        <template #body v-else>
            <Carrousel v-if="datos"></Carrousel>   
            <div v-else>
                Falla de carga
            </div>
        </template>
    </Base>
</template>

<script setup>
import Base from '../components/Base.vue'
import Carrousel from '../components/CarrouselItem.vue'
import { useViewsStore } from "../stores/views";
import { useDataStore } from "../stores/data";
import { onMounted, ref } from 'vue'

const storeViews = useViewsStore()
const storeData = useDataStore()
const title = ref('proyectos');
// control de vistas
const view = ref({
    name: 'projects',
})
storeViews.chanceView(view.value.name)
// control de datos proyecto
const loading = ref(true)
const datos = ref('')
onMounted(async () => {
  try {
    await storeData.updateProjects()
    datos.value = storeData.data[view.value.name]
  } finally {
    loading.value = false;
  }
});

</script>