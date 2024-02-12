<script setup>
import { ref } from "vue"
import HeroImage from "../components/layout/HeroImage.vue"
import { VEasterEggTrigger } from '@wdns/vue-easter-egg-trigger';

const isJoke = ref(false)
const alterIsJokeHandler = () => isJoke.value = !isJoke.value
const checkJoke = computed(() => isJoke.value)
</script>
<template>
    <div class="flex justify-center flex-wrap">
        <HeroImage :isJoke="checkJoke" />
        <Streamers />
        <VEasterEggTrigger @triggered="alterIsJokeHandler" />
    </div>
</template>