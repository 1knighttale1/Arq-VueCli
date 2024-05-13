<template>
  <NavItem />
  <slot name="header">
    <div class="header-general flex">
      <div class="header-logo-container">
        <LogoItem :type="typeLogo" />
      </div>
      <div class="header-title">
        <div class="title">
          <span class="title">
            <slot name="title"></slot>
          </span>
        </div>
        <div class="title">
          <span class="title3">
            <slot name="title3"></slot>
          </span>
        </div>
        <div class="title">
          <span class="title2">
            <slot name="title2"></slot>
          </span>
        </div>
      </div>
    </div>
  </slot>
  <div class="intro-estudio general disabled">
    <slot name="description"></slot>
  </div>
  <slot name="body"></slot>
  <FooterItem :isFooter="loading" />
</template>

<script setup>
import FooterItem from '../components/Footer.vue'
import NavItem from '../components/NavItem.vue'
import LogoItem from '../components/LogoItem.vue'

import { useDataStore } from '../stores/data'
import { onMounted, ref } from 'vue'

const storeData = useDataStore()
const loading = ref(true)
const typeLogo = ref('header')
const props = defineProps({
  title: String
})
onMounted(async () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  try {
    await storeData.updateContacts()
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.header-general {
  height: 75vh;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  --gap: 0.5rem;
}
.header-logo-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 7rem;
  height: 28rem;
  overflow: hidden;
}
div.title {
  text-align: center;
}
span.title,
span.title2,
span.title3 {
  /* font-family: "OktaNeue-Bold"; */
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
}
span.title {
  font-size: 8rem;
}
span.title2 {
  font-size: 10vh;
}
span.title3 {
  font-size: 1.2rem;
}
@media (max-width: 65em) {
  span.title {
    font-size: 5.5em;
  }
  span.title2 {
    font-size: 3em;
  }
}
@media (max-width: 35em) {
  span.title,
  span.title2 {
    font-size: 2.5em;
  }
}
.intro-estudio {
  min-height: 25vh;
  /* max-height: 50vh; */
  padding-block: 10rem;
  padding-inline: 1.5rem;
  font-size: large;
  font-weight: bold;
  text-align: justify;
  /* text-align: center; */
  background-color: var(--color-background-contraste);
}
@media (max-width: 65em) {
  .intro-estudio {
    font-size: large;
  }
}
</style>