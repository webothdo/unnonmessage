<script setup>

const query = useRoute().query
const textAreaRef = ref('')
const loading = ref(false)

watch(() => textAreaRef.value, () => {
    if (textAreaRef.value.length >= 250) {
        textAreaRef.value = textAreaRef.value.slice(0, 250)
    }
})

const createMessage = async () => {
    loading.value = true
    try {
        const data = await $fetch("/api/message/create", {
            method: "POST",
            body: {
                id: query?.id,
                message: textAreaRef.value
            }
        })
        if (!useAuth().loggedIn) {
            textAreaRef.value = "Message sent. Please login to see your messages."
            setTimeout(() => {
                navigateTo("/")
            }, 2000)
        }
        textAreaRef.value = ''
        alert(data)
    } catch (error) {
        alert(error)
    }
    loading.value = false
}

</script>

<template>
    <div class="flex flex-col items-center gap-5 w-fit mx-auto mt-20">
        <div class="flex flex-col bg-white w-[260px] pb-3 rounded-md focus-visible:outline-none shadow-md ">
            <textarea v-model="textAreaRef" name="" id="" cols="30" rows="10" placeholder="Enter your message"
                class="rounded-md py-5 px-4 w-[260px] h-[190px] resize-none focus:outline-none font-[Arimo] text-base text-[#1F000A]"></textarea>
            <p class="self-end mr-3 font-[Arimo] text-[13px] text-[#474747]">{{ textAreaRef.length }} / 250</p>
        </div>
        <button :disabled="loading" @click="createMessage"
            class="bg-[#fd1c5c] text-white px-7 py-1 w-full font-[Arimo] text-[21px] rounded-md">
            {{ loading ? "Sending..." : "Send" }}
        </button>
    </div>
</template>