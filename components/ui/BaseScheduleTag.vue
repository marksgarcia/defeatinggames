
<script setup>
import { computed } from "vue"
import { useDonations } from "~/stores/donations"
import { currentLocalTimeUTC, streamerScheduleDetails } from '~/utils/time-converter';
const store = useDonations()
const props = defineProps({
    streamer: { type: Object, required: false },
    isLive: { type: Boolean, required: false, default: false }
});
const { name, day, start_time, end_time, image, game, link, stretch_goal } = props.streamer
const { developer, art, title, year } = game
const { end } = streamerScheduleDetails(start_time, end_time, day)


const { start: streamer_start, end: streamer_end } = streamerScheduleDetails(start_time, end_time, day)
const streamerBlockDone = computed(() => (stretch_goal?.target < store.currentDonations || !stretch_goal) && currentLocalTimeUTC > end.time_int)
</script>
<template>
    <li class="relative w-full flex md:flex-nowrap flex-wrap bg-slate-100 items-center text-slate-700 px-4 py-6 border-b border-slate-400/45"
        :class="[{ 'opacity-50 grayscale': stretch_goal?.target > store.currentDonations }, { 'bg-gradient-to-r from-purple-300 via-pink-200 to-orange-50': streamerBlockDone }]">
        <div class="order-1 md:w-1/3 w-full flex flex-wrap">
            <span class="w-full font-bold text-2xl md:text-base">{{ streamer_start.day_of_the_week }}, {{
                streamer_start.month }} {{ streamer_start.date }}, {{ streamer_start.year }}</span>
            <span class="w-full">{{ streamer_start.local_time }} - {{ streamer_end.local_time }} Local
                Time</span>
        </div>
        <div class="md:order-2 order-last md:w-1/3 md:my-0 my-4 w-full font-bold flex justify-start"><a
                class="w-auto underline text-white bg-purple-500 shadow-lg rounded-full flex py-1 pr-2 pl-1 items-center"
                :href="link" target="_blank">
                <img :src=image class="w-8 h-8 rounded-full mr-2 border-2 border-white border-box" />@{{ name }}</a></div>
        <div
            class="order-3 md:w-1/3 w-full mt-6 md:my-0 flex items-start md:justify-start justify-center flex-wrap md:flex-nowrap">
            <img class="w-2/3 md:w-16 mr-3 rounded-lg" :src="art" />
            <div class="w-2/3 md:w-auto flex flex-wrap justify-start items-start">
                <span class="font-bold w-full text-sm">{{ title }}</span>
                <span class="w-full text-sm">{{ developer }}</span>
                <span class="w-full text-sm">{{ year }}</span>
            </div>
        </div>
        <div class="order-first flex w-full md:w-auto md:order-last md:absolute right-0 text-xs flex-wrap justify-center text-purple-500"
            v-if="streamerBlockDone">
            <font-awesome-icon class="w-full mb-1" icon="fa-solid fa-check-circle" size="2xl"></font-awesome-icon>
            <span class="w-2/3 text-center">Complete</span>
        </div>
        <div class="order-first flex w-full md:w-auto md:order-last md:absolute right-0 text-xs flex-wrap justify-center"
            v-if="streamer.stretch_goal?.target > store.currentDonations">
            <font-awesome-icon class="w-full mb-1" icon="fa-solid fa-lock"></font-awesome-icon>
            <span class="w-2/3 text-center">Unlocks at ${{ stretch_goal?.target }}</span>
        </div>
    </li>
</template>