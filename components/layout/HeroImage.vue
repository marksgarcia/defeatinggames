<script setup>
import { ref, onMounted } from "vue"
import { HeroImage, JokeImage } from "../../constants/images"
import VictoryDisplay from "../victory/VictoryDisplay.vue";
import { currentLocalTimeUTC } from "~/utils/time-converter";
import { useTimezone } from "~/stores/timezone"
const props = defineProps({
    isJoke: Boolean
})
const store = useTimezone()
const isComplete = ref(currentLocalTimeUTC > 1706508000000)
onMounted(() => store.updateEventIsComplete(isComplete.value))
</script>
<template>
    <div class="w-full flex justify-center mt-24 ">
        <img class="md:w-2/3 w-11/12" :src="isJoke ? JokeImage : HeroImage" />
    </div>
    <div class="w-full mb-64 flex justify-center">
        <VictoryDisplay v-if="isComplete" />
        <div class="bg-slate-100 rounded-2xl mt-20 p-8 drop-shadow-2xl" v-else-if="!isComplete">
            <h1 class="text-3xl text-purple-700 font-bold uppercase mb-2">January 27-28, 2024</h1>
            <p class="text-sm text-slate-600 leading-6">24+ hours of playing/beating classic game series<br>
                raising money for the <a class="font-bold underline text-purple-700" href="https://gamehistory.org/">Video
                    Game History Foundation</a><br>
                organized by the <a class="font-bold underline text-purple-700" href="https://www.devgameclub.com/">Dev Game
                    Club</a> community on <a class="font-bold underline text-purple-700"
                    href="https://discord.com/invite/dTQbcscbKx">Discord</a>.
            </p>
        </div>
    </div>
</template>