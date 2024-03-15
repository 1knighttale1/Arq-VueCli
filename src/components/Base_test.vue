<script setup>
import HeaderItem from './HeaderItem.vue'
import Footer from './Footer.vue'

import { useViewsStore } from '../stores/views'

const store = useViewsStore()
const view = store.view.name
</script>
 
<template>
    <HeaderItem/>
    <div class="container-body">
        <div id="subtitle">
            <slot name="title"></slot>
        </div>
        <slot name="body"></slot>
    </div>
    <Footer/>
</template>
<style scoped>
.container-body {
    display: flex;
    /* overflow: hidden; */
    padding-inline: 2em;
}
@media (max-width: 65em){
    .container-body{
        padding-inline: 0em;
    }
}
#subtitle {
    position: absolute;
    z-index: 9999;
    top: 2em;
}
h3 {
    font-weight: bold;
}
</style>
