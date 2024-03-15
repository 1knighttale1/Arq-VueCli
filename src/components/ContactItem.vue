<template>
    <BasicItem :isContact="isContact" :data="storeData.data.contacts">
        
    </BasicItem>
</template>
<script setup>
import BasicItem from './BasicItem.vue';
import { useDataStore } from '../stores/data';
import { ref } from 'vue'

const isContact = ref(true)
const storeData = useDataStore()
</script>