<template>
    <Base>
        <template #title>
            <h3 class="sub-title">{{ "detalles".toUpperCase() }}</h3>
        </template>
        <template #body>
            <Detail></Detail>
        </template>
    </Base>
</template>

<script setup>
import Base from '../components/Base.vue'
import Detail from '../components/DetailItem.vue'
import { useViewsStore } from "../stores/views";
import { ref } from 'vue'

const view = ref({
    name: 'details',
    galery: false
})
const store = useViewsStore()
store.chanceView(view.value.name, view.value.galery)
</script>