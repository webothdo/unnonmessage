<script setup>

const auth = useAuth()
const username = ref('')

const createProfile = async () => {
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
}

</script>

<template>
    <div>
        <div>
            <h1>
                Enter a username please
            </h1>
            <input v-model="username" type="text">
            <button @click="createProfile">Create profile</button>
        </div>
    </div>
</template>