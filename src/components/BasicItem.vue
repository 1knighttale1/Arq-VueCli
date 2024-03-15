<template>
    <div v-if="!isContact" class="container-central">
        <div class="data">
            <h3 class="title">
                <slot name="title"></slot>
            </h3>
            <div class="container-text">
                <span>
                    <slot name="text"></slot>
                </span>
            </div>
            
        </div>
    </div>
    <div v-else class="container-central">
        <div class="data">
            <h3 class="title">
                TELEFONOS
            </h3>
            <div class="container-text" v-for="contact in data" :key="contact.texto">
                <span v-if="contact.titulo=='telefono'">{{ contact.texto }}</span>
            </div>
        </div>
        <div class="data">
            <h3 class="title">
                CORREOS
            </h3>
            <div class="container-text" v-for="contact in data" :key="contact.texto">
                <span v-if="contact.titulo=='email'">{{ contact.texto }}</span>
            </div>
        </div>
        <div class="data">
            <h3 class="title">
                DIRECCIONES
            </h3>
            <div class="container-text" v-for="contact in data" :key="contact.texto">
                <span v-if="contact.titulo=='direccion'">{{ contact.texto }}</span>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
  isContact: Boolean,
  data: Object
})
</script>
<style scoped>
.container-central{
    max-width: 50em;
    width: 70vw;
}
.data, .title{
    padding-block: .5em;
}
@media (max-width: 70em){
    .title{
        font-weight: normal;
    }
}
.container-text{
    margin-bottom: 1em;
    padding-inline: 2em;
    text-align: justify;
}
span{
    margin-left: 3em;
}
</style>