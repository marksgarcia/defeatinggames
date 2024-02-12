<script setup>
import { computed, ref } from "vue"
import { useDonations } from "~/stores/donations"
import { Branding } from "../../constants/images"
import { getCampaignStatus } from "~/apis/get-campaign-status"
const store = useDonations();
let intervalId = 0
const campaignStatus = ref(undefined)
const goal = ref(null)
const totalAmountRaised = ref(null)
const minsToMSHandler = (minutes) => minutes * 60 * 1000
onMounted(async () => {
    campaignStatus.value = await getCampaignStatus()
    goal.value = campaignStatus.value.goal.value
    totalAmountRaised.value = Math.round(campaignStatus.value.team.total_amount_raised.value)
    store.updateDonations(totalAmountRaised.value)
    intervalId = setInterval(async () => {
        campaignStatus.value = await getCampaignStatus()
        goal.value = campaignStatus.value.goal.value
        totalAmountRaised.value = Math.round(campaignStatus.value.team.total_amount_raised.value)
        store.updateDonations(totalAmountRaised.value)
    }, minsToMSHandler(5));
});
onUnmounted(() => {
    clearInterval(intervalId);
});

const route = useRoute()
const currentPath = computed(() => route.path)
const isActive = ref(false)
const calculateWidth = computed(() => totalAmountRaised.value <= goal.value ? `${(totalAmountRaised.value / goal.value) * 100}%` : "100%")

const navButtonClickHandler = () => {
    isActive.value = !isActive.value
}
</script>
<template>
    <header
        class="sticky top-0 inset-x-0 flex flex-wrap md:flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-3 sm:py-0">
        <div
            class="inset-x-0 flex flex-wrap md:flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full justify-center border-b border-gray-200">
            <nav class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
                aria-label="Global">
                <div class="flex items-center justify-between">
                    <NuxtLink class="flex-none text-xl font-semibold drop-shadow-sm bg-slate-200 rounded-full h-12 w-12"
                        to="/" aria-label="Brand"><img class="w-12 h-12 rounded-full" :src="Branding" /></NuxtLink>
                    <div class="sm:hidden">
                        <button type="button" @click="navButtonClickHandler"
                            class="hs-collapse-toggle w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                            data-hs-collapse="#navbar-collapse-with-animation"
                            aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                            <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="3" x2="21" y1="6" y2="6"></line>
                                <line x1="3" x2="21" y1="12" y2="12"></line>
                                <line x1="3" x2="21" y1="18" y2="18"></line>
                            </svg>
                            <svg class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="navbar-collapse-with-animation"
                    class="hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
                    :class="[isActive ? 'visible' : 'hidden']">
                    <div
                        class="flex flex-col gap-y-2 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
                        <NuxtLink class="my-2 py-3 px-2 "
                            :class="[currentPath === '/' ? 'text-[#6B7CE7] font-bold' : 'text-gray-500 hover:text-gray-400']"
                            to="/" aria-current="page">Home</NuxtLink>
                        <NuxtLink class="my-2  py-2 px-2"
                            :class="[currentPath === '/schedule' ? 'text-[#6B7CE7] font-bold' : 'text-gray-500 hover:text-gray-400']"
                            to="/schedule">Schedule</NuxtLink>
                        <NuxtLink class="my-2 py-2 pl-2 pr-8 md:border-r border-slate-300"
                            :class="[currentPath === '/about' ? 'text-[#6B7CE7] font-bold' : 'text-gray-500 hover:text-gray-400']"
                            to="/about">About</NuxtLink>
                        <a class="border-0 flex items-center text-center justify-center font-medium py-4 mb-4 md:mb-0 md:py-2 px-5 rounded-lg text-white bg-gradient-to-br from-[#6B7CE7]/95 via-[#687CE7] via-82% to-[#EC6FBD] "
                            href="https://tiltify.com/+defeating-games-for-charity/defeating-games-for-charity-mk-i"
                            target="_blank">
                            Donate
                        </a>
                    </div>
                </div>
            </nav>
        </div>
        <div class="flex justify-start w-full content-center items-center p-0 m-0 bg-neutral-200 h-4 relative">
            <span class="h-4 bg-gradient-to-r from-orange-300 via-pink-300 to-purple-500 rounded-r-full flex-wrap relative"
                :style="{ width: `${calculateWidth}` }"> <span class="text-xs text-white ml-2 font-bold absolute right-1"
                    v-if="totalAmountRaised && goal">${{ totalAmountRaised }}
                    of
                    ${{ goal }} goal raised.</span></span>

        </div>
    </header>
</template>