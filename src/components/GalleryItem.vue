<template>
    <div class="container-central">
        <h3 class="title">
            <slot name="title">GALERIA</slot>
        </h3>
        <div class="gallery-container flex">
            <div class="img-container" v-for="item in data" :key="item._id">
                <img :src="item" :alt="item._id">
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
  data: Object,
})
const data = props.data
</script>
<style scoped>
/* * {
    outline: 1px solid red;
} */
.container-central{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title{
    padding-block: 1em;
}
@media (max-width: 70em){
    .title{
        font-weight: normal;
    }
}
div.gallery-container{
    align-items: center;
    max-width: 70em;
    flex-wrap: wrap;
    --gap: 0;
}
@media (max-width: 65em){
    dev.gallery-container{
        --gap: 1rem;
        padding: 0;
    }
}
img{
    width: 100%;
    height: 100%;
}
div.img-container{
    margin: 1em auto;
    width: 100%;
    /* width: 23em;
    height: 10vw; */
    border-radius: 1em;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.658);
}
@media (max-width: 65em){
    div.img-container{
        min-width: 22em;
    }
}
</style>