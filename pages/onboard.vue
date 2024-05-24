<script setup>

const auth = useAuth()
const username = ref('')
const loading = ref(false)

const profile = await useProfile()

onMounted(async () => {
    if (profile.value) {
        navigateTo("/profile")
    }
})

definePageMeta({
    middleware: "auth-logged-in"
})



const createProfile = async () => {
    loading.value = true
    try {
        const data = await $fetch("/api/profile/create", {
            method: "POST",
            body: {
                id: auth.user.id,
                username: username.value
            }
        })
        navigateTo("/profile")
    } catch (error) {
        alert(error.statusMessage)
    }
    loading.value = false
}

</script>

<template>
    <div>
        <div class="flex flex-col gap-3 w-60">
            <h1>
                Enter a username please
            </h1>
            <input v-model="username" type="text" placeholder="Enter your username" class="px-3 py-1 font-[Arimo]">
            <button :disabled="loading" @click="createProfile"
                class="bg-[#1c2bfd] text-white px-5 py-1 w-fit font-[Arimo] text-[16px] rounded-md">
                {{ loading ? "Creating..." : "Create profile" }}
            </button>
        </div>
    </div>
</template>