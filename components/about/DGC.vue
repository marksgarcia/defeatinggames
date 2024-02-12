
<script setup>
import { DGC } from "../../constants/images"
</script>
    <template>
        <section>
            <div class="w-full flex justify-center items-center">
                <div class="flex flex-wrap md:w-2/3 w-11/12 pt-12 pb-24 px-4 ">
                    <div class="flex w-full justify-center md:mt-12 mb-24 md:mb-12">
                        <img class="md:w-64 w-48" :src="DGC" />
                    </div>
                    <h1 class="w-full text-3xl uppercase mb-8 mx-8 text-slate-600">About Dev Game Club</h1>
                    <p class="w-full mb-2 mx-8 text-slate-500">“The Dev Game Club looks at older games and plays through
                        them in a form similar to a book club! We also seek to feature guests for our final episodes in each
                        series, to get a developer from the original game to talk about how it was built or what their
                        particular development stories were.

                        Your hosts are Brett Douville and Tim Longo, long-time game developers who worked together at
                        LucasArts on the Star Wars games Starfighter, Jedi Starfighter, and Republic Commando. Since then,
                        they have worked on games such as Skyrim, Fallout 3, Fallout 4, Tomb Raider (2013) and the Tomb
                        Raider series, Halo 5, and Tacoma.”

                    </p>
                    <div class="plugs flex md:justify-start justify-center md:mx-8 mt-8 w-full">
                        <a class="w-36 mx-2 md:mr-4 md:ml-0 py-4 rounded-xl bg-slate-100 flex justify-center flex-wrap content-center hover:bg-orange-200 hover:text-orange-800 hover:drop-shadow-lg ease-in-out duration-300" href="https://devgameclub.com/">
                            <font-awesome-icon class="w-full" size="2x" icon="fa-solid fa-headphones" />
                            <span class="text-xs">Listen Now</span>
                        </a>
                        <a class="w-36 mx-2 md:mr-4 md:ml-0 py-4 rounded-xl bg-slate-100 flex justify-center content-center flex-wrap hover:bg-violet-200 hover:text-violet-800 hover:drop-shadow-lg ease-in-out duration-300" href="https://discord.com/invite/dTQbcscbKx">
                            <font-awesome-icon class="w-full" size="2x" icon="fa-brands fa-discord" />
                            <span class="text-xs w-2/3 text-center">Join the Discord</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </template>