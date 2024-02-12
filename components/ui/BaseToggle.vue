<script setup>
const props = defineProps({
    onTitle: String,
    offTitle: String,
    activeState: Boolean,
})

const emits = defineEmits("click-event")
const clickHandler = () => emits("click-event")
</script>
<template>
    <div class="flex justify-center flex-wrap w-full">
    <label class="relative flex justify-between items-center group p-2 text-xl">
        <span class="" v-if="props.offTitle">{{ offTitle }}</span>
        <input type="checkbox" :checked="props.activeState" class="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" @click="clickHandler"/>
        <span
            class="w-16 h-10 flex items-center flex-shrink-0 mx-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-purple-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
        <span class="" v-if="props.onTitle">{{ onTitle }}</span>
    </label>
    <span class="title text-slate-400 text-xs w-full text-center">Timezone</span>
</div>
</template>