<template>
    <BasicItem v-for="dato in storeData.data.aboutus" :key="dato.titulo">
        <template #title>{{ dato.titulo }}</template>
        <template #text>{{ dato.texto }}</template>
    </BasicItem>
</template>
<script setup>
import BasicItem from './BasicItem.vue';
import { useDataStore } from '../stores/data';

const storeData = useDataStore()
</script>