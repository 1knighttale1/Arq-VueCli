<template>
    <div class="container-gallery">
        <RouterLink :to="view">
            <span class="card-title">
                <slot name="title">TITULO</slot>
            </span>
        </RouterLink>
        <div class="container-cards">
            <RouterLink to="/works" class="card pointer">
                <img class="card-img disabled" src="@/assets/IMG/02-photo.jpg" alt="">
                <h3 class="title disabled">Titulo del card</h3>
            </RouterLink>
            <RouterLink to="/works" class="card pointer">
                <img class="card-img disabled" src="@/assets/IMG/04-photo.jpg" alt="">
                <h3 class="title disabled">Titulo del card</h3>
            </RouterLink>
            <RouterLink to="/works" class="card pointer">
                <img class="card-img disabled" src="@/assets/IMG/05-photo.jpg" alt="">
                <h3 class="title disabled">Titulo del card</h3>
            </RouterLink>
            <RouterLink to="/works" class="card pointer">
                <img class="card-img disabled" src="@/assets/IMG/02-photo.jpg" alt="">
                <h3 class="title disabled">Titulo del card</h3>
            </RouterLink>
            <RouterLink to="/works" class="card pointer">
                <img class="card-img disabled" src="@/assets/IMG/04-photo.jpg" alt="">
                <h3 class="title disabled">Titulo del card</h3>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
const props = defineProps([
    'view'
])
</script>

<style scoped>
/* container-cards*/
/* title*/
span.card-title{
    font-size: 8em;
    font-weight: bold;
}
span.card-title:hover{
    color: var(--vt-c-orange);
    text-shadow: 2px 2px 5px var(--vt-c-carbon);
}
@media (max-width: 65em){
  span.card-title{
    font-size: 13vw;
    /* font-size: 2.5em; */
  }
}
/* cards */
.container-gallery{
    background-color: var(--color-background-contraste);
    padding-bottom: 4rem;
    min-height: 90vh;
    text-align: center;
}
.container-gallery .container-cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    --gap: 0;
}
.container-cards .card{
    /* min-height: 23rem;
    min-width: 28rem; */
    height: 18vw;
    width: 23.5vw;
    margin: .3rem;
    background-image: url("@/assets/IMG/01-photo.webp");
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
}
@media (max-width: 65em){
    .container-cards .card{
        height: 35vw;
        width: 46vw;
    }
}
@media (max-width: 35em){
    .container-cards .card{
        height: 65vw;
        width: 85vw;
    }
}
img.card-img{
    width: auto;
    height: 100%;
}
h3.title{
    position: absolute;
    color: transparent;
    font-size: x-large;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.container-cards .card:hover img {
  filter: brightness(50%);
}
.container-cards .card:hover h3.title {
  color: white;
}
@media (max-width: 65em){
    h1.title{
        font-size: 10vw;
    }
    .container-cards .card{
        margin-top: .5rem;
    }
}

</style>