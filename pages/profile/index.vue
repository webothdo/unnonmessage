<script setup>
definePageMeta({
    middleware: "auth-logged-in"
})

const auth = useAuth()
const messages = ref([])

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

    messages.value = await $fetch("/api/message/getusermessages", {
        method: "GET",
        query: {
            id: data?.id
        }
    })

    console.log("from messages", messages.value)
})

</script>

<template>
    <div class="pl-3 mt-10 text-[#1F000A] flex flex-col items-center">
        <div>
            <h1 class="font-[Poppins] text-[16px] self-start">Messages</h1>
            <div v-if="messages.length > 0" v-for="message in messages" :key="message.id">
                <div class="w-[250px] h-full mt-5 bg-white rounded-xl flex flex-col justify-between px-5 py-3">
                    <div class="space-y-2">
                        <p class="font-[Arimo] text-[13px] w-full break-words">
                            {{ message.text }}
                        </p>
                    </div>
                    <p class="font-[Arimo] text-[13px] self-end text-[#474747]">
                        {{ message.createdAt }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>