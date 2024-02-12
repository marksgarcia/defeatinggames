<script setup>
import { VGHF } from "../../constants/images"
</script>
<template>
    <section class="relative bg-slate-100">
        <div class="w-full flex justify-center items-center">
            <div class="flex flex-wrap md:w-2/3 w-11/12 py-12 px-4 bg-white/90 my-36 rounded-lg drop-shadow-xl">
                <div class="flex w-full justify-center md:mt-12 mb-24 md:mb-12">
                    <img class="md:w-64 w-48" :src="VGHF" />
                </div>
                <h1 class="w-full md:text-3xl text-2xl uppercase mb-8 mx-8 text-slate-600">About The Video Game History Foundation </h1>
                <p class="w-full mb-2 mx-8 text-slate-500">Defeating Games for Charity is a video game marathon raising
                    money for the Video Game
                    “The Video Game History Foundation is a 501(c)3 non-profit organization dedicated to preserving,
                    celebrating, and teaching the history of video games.

                    Our archives provide rare material for study, and our advocacy and educational outreach bring everyone
                    together to do their part in celebrating and discovering video game history.”

                    Learn more at <a class="font-bold underline"
                        href="https://gamehistory.org/">https://gamehistory.org/</a>
                </p>
            </div>
        </div>
    </section>
</template>