<script setup>
const props = defineProps({
    desc: { type: String, required: false },
    game: { type: String, required: false },
    gameArt: { type: undefined, required: false },
    name: { type: String, required: true },
    link: { type: String, required: true },
    image: { type: undefined, required: false },
    isLive: { type: Boolean, required: false, default: false }
});
</script>
<template>
    <div
        class="w-5/6 md:w-64 mx-4 my-4 px-2 pt-2 pb-1 rounded-lg bg-white drop-shadow-lg hover:scale-105 ease-in-out duration-150 relative flex flex-wrap justify-start hover:drop-shadow-2xl z-20 hover:z-30">
        <div class="flex w-full relative">
            <img class="w-full rounded-lg" :src="gameArt">
            <p class="absolute bottom-0 left-0 rounded-b-lg w-full bg-slate-900/95 text-white py-1 px-2 text-sm">{{ game }}</p>
        </div>
        <div class="flex border-b mt-2 bg-slate-100 pb-2 mb-2 rounded p-1 flex-wrap">
            <div class="flex items-start">
                <img class="w-8 h-8 rounded-full mr-2" :src="image" />
                <div>
                    <h1 class="">@{{ name }}</h1>
                    <p class="desc text-slate-700 text-xs font-light">{{ desc }}</p>
                </div>
            </div>
            <div class="w-full flex justify-start py-2 px-1">
                <a class="flex flex-wrap justify-center align-center mt-2 py-2 px-2 bg-purple-500 hover:bg-purple-700 rounded-lg text-white text-xs font-bold"
                    :href="link" target="_blank"><font-awesome-icon class="mr-1" size="lg" icon="fa-brands fa-twitch" />
                    Twitch</a>
            </div>
        </div>

        <span class="absolute text-xs bg-red-600 text-white font-light px-2 py-0.5 rounded-full -top-2 -right-5"
            v-if="isLive">LIVE</span>
    </div>
</template>