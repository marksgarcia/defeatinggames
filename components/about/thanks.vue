<script setup>
import { onMounted, ref } from "vue"
import { getDonorList } from "~/apis/get-donor-list";
const listOfDonors = ref([])
onMounted(async () => {
    listOfDonors.value = await getDonorList()
})
</script>
<template>
    <section class="relative bg-purple-500">
        <div class="w-full flex justify-center items-center">
            <div class="flex flex-wrap md:w-2/3 w-11/12 pt-12 pb-24 md:px-4">
                <div class="flex w-full justify-center pt-12 pb-4 text-slate-400">
                </div>
                <h1 class="w-full text-3xl uppercase mb-8 mx-8 text-white">Thanks to Everyone Who Has Donated</h1>
                <p class="w-full mb-2 mx-8 text-white">
                <ul class="w-full flex flex-wrap justify-evenly content-start items-center">
                    <li class="bg-white/70 text-purple-500 px-2 py-1 rounded-full font-bold text-xs md:text-base my-1 text-center w-auto"
                        v-for="(donor, index) in listOfDonors" :key="`${donor}-${index}`">{{ donor }}</li>
                </ul>
                </p>
            </div>
        </div>
    </section>
    <section class="relative bg-slate-50">
        <div class="w-full flex justify-center items-center">
            <div class="flex flex-wrap md:w-2/3 w-11/12 pt-12 pb-24 px-4 ">
                <div class="flex w-full justify-center pt-12 pb-4 text-slate-400">
                    <font-awesome-icon size="6x" icon="fa-duotone fa-balloons" bounce
                        style="--fa-animation-duration: 15s; --fa-bounce-start-scale-x: 1; --fa-bounce-start-scale-y: 1; --fa-bounce-jump-scale-x: 1.1; --fa-bounce-jump-scale-y: 1.1; --fa-bounce-land-scale-x: 1; --fa-bounce-land-scale-y: 1; --fa-bounce-rebound: 0; --fa-primary-color: #B197FC; --fa-secondary-color: #B197FC;" />
                </div>
                <h1 class="w-full text-3xl uppercase mb-8 mx-8 text-slate-600">Special Thanks </h1>
                <p class="w-full mb-2 mx-8 text-slate-500">
                    <b>Artimage, Belmont, BVron, Calamity Nolan, Kaeon, Kyle and Error, Lost Lake, Mystery Dip, Tim Longo
                        Jr</b> for streaming and helping run the event<br />
                    <br />
                    <b>Mark Garcia</b> for making the art and website<br />
                    <b>Ryan P. (BioStats)</b> for organizing and scheduling the whole thing<br />
                    <br />
                    <b>Brett Douville</b><br />
                    <b>BucketsofBuccat</b><br />
                    <b>Getyourgloveson</b><br />
                    <b>Janet Katsnelson</b><br />
                    <b>Jennifer Longo</b><br />
                    <b>LostLake85</b><br />
                    <b>All the streamers' families</b>
                </p>
            </div>
        </div>
    </section>
</template>