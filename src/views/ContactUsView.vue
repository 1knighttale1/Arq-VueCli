<template>
    <Base :title="title">
        <template #title>
            <h3 class="sub-title">{{ "contactos".toUpperCase() }}</h3>
        </template>
    </Base>
</template>

<script setup>
import Base from '../components/Base.vue'
import { useViewsStore } from "../stores/views";
import { useDataStore } from "../stores/data";
import { ref } from 'vue'

const view = ref({
    name: 'contacts',
    galery: false
})
const storeViews = useViewsStore()
const storeData = useDataStore()
const title = ref('contactos');

storeViews.chanceView(view.value.name, view.value.galery)
storeData.updateContacts()
</script>