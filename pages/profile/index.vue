<script setup>
definePageMeta({
    middleware: "auth-logged-in"
})

const auth = useAuth()

console.log(auth)
console.log(auth.user.id)

onMounted(async () => {
    console.log("moounted", auth.user.id)
    const data = await $fetch("/api/profile/getuserprofile", {
        method: "GET",
        query: {
            id: auth.user.id
        }
    })
    if (!data) {
        navigateTo("/onboard")
    }
    console.log(data)
})

</script>

<template>
    <div class="pl-3 mt-10 text-[#1F000A] flex flex-col items-center">
        <div>
            <h1 class="font-[Poppins] text-[16px] self-start">Messages</h1>
            <div v-for="i in 5" :key="i">
                <div class="w-[250px] h-full mt-5 bg-white rounded-xl flex flex-col justify-between px-5 py-3">
                    <div class="space-y-2">
                        <p class="font-[Arimo] text-[13px]">Hi, just wanted to say thanks for being a good friend. Means
                            a
                            lot.
                            Take care</p>
                    </div>
                    <p class="font-[Arimo] text-[13px] self-end text-[#474747]">Yesterday</p>
                </div>
            </div>
        </div>
    </div>
</template>