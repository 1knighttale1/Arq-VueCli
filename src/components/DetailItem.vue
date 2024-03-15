<template>
    <BasicItem v-if="loading">
        <template #text>
            Cargando datos...
        </template>
    </BasicItem>
    <BasicItem v-else>
        <template #title v-if="datos">
            {{ data.titulo }}
        </template>
        <template #text v-if="datos">
            {{ data.descripcion }}
        </template>
        <template #text v-else>
            Not found
        </template>
    </BasicItem>
    <GalleryItem :data="data.imagenes" v-if="datos"></GalleryItem>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import BasicItem from './BasicItem.vue';
import GalleryItem from './GalleryItem.vue';
import { useRoute } from 'vue-router';
import { useDataStore } from '../stores/data';

const storeData = useDataStore()
const view = useRoute().params["view"]
const idObject = useRoute().params["id"]
// console.log()

const loading = ref(true)
const datos = ref(false)
const data = ref(storeData.data[view])

// comprueba si hay datos en el storeData para esta vista, solicita al servidor si no
onMounted(async () => {
    try {
        if (Object.keys(data.value).length == 0){
            const update = {
                "projects": storeData.updateProjects,
                "works": storeData.updateWorks,
            }
            await update[view]()
        }
        // buscando objeto en lista 
        data.value = storeData.data[view].find(objeto => objeto._id === idObject)
        if(data.value){
            datos.value = true
        }
    } finally {
        loading.value = false;
    }
});
</script>
