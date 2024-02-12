
import type StreamerTagVue from '../ui/StreamerTag.vue';
<script setup>
import { computed, ref } from "vue"
import { onMounted, onUnmounted } from "vue"
import BaseStreamerTag from "../ui/BaseStreamerTag.vue"
import { STREAMERS, SCHEDULE } from "~/constants/streamers.js"
import { streamerScheduleDetails, currentLocalTimeUTC } from '~/utils/time-converter';
import { useTimezone } from "~/stores/timezone";
import { useStreamers } from "~/stores/streamers"
import { checkForLiveStreamers } from "~/apis/check-is-live-status"
const store = { timezone: useTimezone(), streamers: useStreamers() }
let intervalId = 0
const minsToMSHandler = (minutes) => minutes * 60 * 1000
const currentStreamerTag = ref(null)
const currentStreamerURL = ref(null)
const currentStreamers = ref(undefined)

const getStreamerURL = () => {
    const scheduledStreamers = SCHEDULE.filter(streamer => {
        const { start_time, end_time, day } = streamer
        const { start, end } = streamerScheduleDetails(start_time, end_time, day)
        if (currentLocalTimeUTC >= start.time_int && currentLocalTimeUTC < end.time_int) {
            return streamer
        }
    })

    if (scheduledStreamers.length > 0) {
        const channelHandle = scheduledStreamers[0].channel
        if (currentStreamerTag.value !== channelHandle) {
            currentStreamerTag.value = channelHandle
            currentStreamerURL.value = `https://player.twitch.tv/?channel=${currentStreamerTag.value}&parent=defeatinggames.com&parent=www.defeatinggames.com&muted=true`
        }
    } else {
        currentStreamerTag.value = null
    }
}


const getText = computed(() => store.timezone.eventIsComplete ? "Thanks again to our amazing streamers!" : currentStreamerTag ? "Current Stream" : "Hold Tight")
onMounted(async () => {
    const streamerTwitchResponse = await checkForLiveStreamers()
    currentStreamers.value = streamerTwitchResponse.map(streamer => streamer.user_name.toLowerCase())
    store.streamers.updateStreamers(currentStreamers.value)
    getStreamerURL()
    intervalId = setInterval(async () => {
        getStreamerURL()
    }, minsToMSHandler(1));
});
onUnmounted(() => {
    clearInterval(intervalId);
});
</script>
<template>
    <section
        class="bg-gradient-to-b py-8 from-violet-600 via-violet-300 to-violet-300 relative w-full flex flex-wrap justify-center before:content-[''] before:block before:absolute before:-top-12 before:left-0 before:-z-10 before:w-full before:h-24 before:bg-violet-600 before:-skew-y-3 after:content-[''] after:block after:absolute after:-bottom-12 after:z-10 after:w-full after:h-24 after:bg-violet-300 after:-skew-y-3">
        <h1 class="mt-12 mb-6 w-full md:text-6xl text-4xl font-extrabold uppercase text-center text-white">{{ getText
        }}
        </h1>
        <div class="main-stream flex justify-center w-full">
            <span class="mb-12" v-if="store.timezone.eventIsComplete">
                <h2 class="text-white w-full text-center text-4xl my-2">We couldn't have done this without you!</h2>
            </span>
            <iframe :src="currentStreamerURL" frameborder="0" allowfullscreen="" scrolling="no" height="378" width="620"
                v-else-if="!store.timezone.eventIsComplete && currentStreamerTag"></iframe>
            <span class="mb-12" v-else>
                <h2 class="text-white w-full text-center text-4xl my-2">Awesome things are on the way.</h2>
                <p class="text-white text-center">Once the event is live, you can catch our current live streamers here.<br>
                    Until then, check our <NuxtLink class="text-sm font-bold bg-slate-50/25 py-1 px-2 rounded-full mx-1"
                        to="/schedule">
                        Schedule
                    </NuxtLink> page for more details.</p>
            </span>

        </div>
        <div class="streamers-list w-full flex flex-wrap justify-center">
            <h1 class="mt-12 mb-6 md:text-4xl text-3xl text-white w-full text-center font-bold">Meet the Streamers</h1>
            <ul class="w-full flex flex-wrap justify-center items-start">
                <BaseStreamerTag v-for="streamer in STREAMERS" :name="streamer.name" :link="streamer.link"
                    :image="streamer.image" :desc="streamer.desc" :game="streamer.game.title" :gameArt="streamer.game.art"
                    :key="streamer.name" :isLive="store.streamers.currentStreamers.includes(streamer.handle)" />
            </ul>
        </div>
    </section>
</template>