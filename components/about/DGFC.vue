<script setup>
import fontawesome from "~/plugins/fontawesome";
import { DGFC } from "../../constants/images"
</script>
<template>
    <section class="relative">
        <div class="w-full flex justify-center items-center"
            :class="`bg-[url(@/assets/images/nes-controller.png)]`">
            <div class="flex flex-wrap md:w-2/3 w-11/12 pt-2 pb-12 px-4 rounded-lg bg-white/90  my-36 drop-shadow-2xl">
                <div class="flex w-full justify-center pt-12 pb-4 text-slate-400">
                    <font-awesome-icon size="6x" icon="fa-duotone fa-gamepad-modern" />
                </div>
                <h1 class="w-full text-3xl uppercase mb-8 mx-8 text-slate-600">About Us </h1>
                <p class="w-full mb-2 mx-8 text-slate-500">Defeating Games for Charity is a video game marathon raising money for the Video Game
                    History Foundation.
                    Members of the Dev Game Club podcast fan community on Discord organized the event, using games never
                    finished by one of the hosts as a jumping off point. They’re excited to team up and leverage their
                    expertise
                    in gaming, streaming, and fundraising to show off great gameplay for a great cause. </p>
            </div>
        </div>
    </section>
</template>