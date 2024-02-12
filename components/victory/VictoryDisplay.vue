<script setup>
import { ref, onMounted } from "vue"
import ConfettiExplosion from "vue-confetti-explosion";
import { useDonations } from "~/stores/donations"
const store = useDonations()
const showConfetti = ref(false)

onMounted(() => {
    setTimeout(() => showConfetti.value = true, 3500)
})
</script>
<template>
    <div
        class="md:w-2/3 w-11/12 rounded-[2rem] mt-20 p-8 drop-shadow-2xl bg-gradient-to-r from-purple-500 via-pink-300 to-orange-300 background-animate border-8 border-white/50 flex justify-center flex-wrap relative">
        <ConfettiExplosion class="absolute top-12" :colors="['#FFAA4D', '#EC6FBD', '#6B7CE7']" v-if="showConfetti" />
        <h1 class="text-white md:text-3xl text-xl font-light text-center flex flex-wrap justify-center">A huge thank you to
            everyone
            who donated. Thanks to you we raised <span
                class="my-2 w-full flex justify-center font-extrabold md:text-8xl text-6xl drop-shadow-xl">
                $<count-up :endVal=store.currentDonations :duration=3></count-up>
            </span> for the Video Game History Foundation.</h1>
    </div>
</template>
<style lang="css" scoped>
@-webkit-keyframes shiftingBackground {
    0%,
    100% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }
}

@keyframes shiftingBackground {

    0%,
    100% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }
}

.background-animate {
    background-size: 400%;
    -webkit-animation: shiftingBackground 100s ease infinite;
    -moz-animation: shiftingBackground 100s ease infinite;
    animation: shiftingBackground 100s ease infinite;
}
</style>