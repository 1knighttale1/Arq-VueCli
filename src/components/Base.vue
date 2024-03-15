<template>
  <NavItem/>
  <slot name="header">
    <div class="header-general flex">
      <div class="header-logo-container">
        <LogoItem :type="typeLogo"/>
      </div>
      <div class="header-title">
        <span class="title">{{title || 'titulo'}}</span>
      </div>

    </div>
  </slot>
  <slot name="body">
  </slot>
  <FooterItem :isFooter="loading" />
</template>

<script setup>
import FooterItem from '../components/Footer.vue';
import NavItem from '../components/NavItem.vue';
import LogoItem from '../components/LogoItem.vue';

import { useDataStore } from "../stores/data";
import { onMounted, ref } from 'vue';

const storeData = useDataStore();
const loading = ref(true);
const typeLogo = ref("header");
const props = defineProps({
    title: String,
  });

onMounted(async () => {
  try {
    await storeData.updateContacts()
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.header-general{
  height: 70vh;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  --gap: .5rem;
}
.header-logo-container{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 7rem;
  height: 11rem;
  overflow: hidden;
}
</style>