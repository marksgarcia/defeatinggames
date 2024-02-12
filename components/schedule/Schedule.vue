<script setup>
import BaseScheduleTag from "../ui/BaseScheduleTag.vue"
import { SCHEDULE } from "../../constants/streamers.js"



</script>
<template>
    <section class="w-full flex flex-wrap justify-center md:mt-24 pb-10">
        <h1 class="mt-12 mb-6 w-full md:text-6xl text-4xl font-extrabold uppercase text-center text-slate-900">Schedule</h1>
        <div
            class="flex md:flex-nowrap flex-wrap w-11/12 md:w-2/3 bg-slate-700 text-white font-bold justify-start px-4 py-8 rounded-t-lg">
            <span class="w-full md:w-1/3 order-1">Timeslot</span>
            <span class="w-full md:w-1/3 md:order-2 order-3">Streamer</span>
            <span class="w-full md:w-1/3 md:order-3 order-2">Game</span>
        </div>
        <ul class="flex w-11/12 md:w-2/3 flex-wrap">
            <BaseScheduleTag v-for="streamer in SCHEDULE" :streamer="streamer"
                :key="`${streamer.name}-${streamer.game.title}-${streamer.day}`" />
        </ul>
        <div class="flex w-2/3 justify-center text-neutral-500 text-xs mt-2 text-center">
            <span>Runs currently grayed out with a <font-awesome-icon class="mx-1"
                    icon="fa-solid fa-lock"></font-awesome-icon> are locked until our donation goal is met.</span>
        </div>
    </section>
</template>