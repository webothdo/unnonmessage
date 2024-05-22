<script setup>
</script>

<template>
    <div>
        <section id="hero" class="text-center mt-10 flex flex-col items-center gap-7">
            <div>
                <h1 class="text-[33px] font-[Poppins] font-semibold">Send and Recieve</h1>
                <h2 class="text-[29px] font-[Poppins]"><span
                        class="font-['Noto_Sans'] italic bg-clip-text text-transparent bg-gradient-to-r from-[#fd1c5c] to-[#f8fe3e]">anonymous</span>
                    Messages</h2>
            </div>
            <NuxtLink to="/api/register" external>
                <button class="bg-[#fd1c5c] text-white px-7 py-2 w-fit font-[Arimo] text-[21px] rounded-md">
                    Get Started
                </button>
            </NuxtLink>
        </section>
        <section id="bottom-section" class="flex flex-col items-center gap-20">
            <div class="w-[250px] h-[150px]  mt-20 bg-white rounded-xl flex flex-col justify-between px-5 py-3">
                <div class="space-y-2 text-[#1F000A]">
                    <p class="font-[Poppins] text-[14px] font-bold">Anonymous</p>
                    <p class="font-[Arimo] text-[13px]">Hi, just wanted to say thanks for being a good friend. Means a
                        lot.
                        Take care</p>
                </div>
                <p class="font-[Arimo] text-[13px] self-end text-[#474747]">Yesterday</p>
            </div>
            <button class="bg-[#FED471] text-[#1F000A] px-5 py-2 w-[120px] font-[Arimo] text-[12px] rounded-md">
                View analytics
            </button>
        </section>
    </div>
</template>
