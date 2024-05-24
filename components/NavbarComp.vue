<script setup>
import useProfile from '~/composables/useProfile';

const auth = useAuth()
const config = useRuntimeConfig().public

const profile = await useProfile()

const copyLink = () => {
    if (navigator.share) {
        navigator.share({
            text: `Send ${profile.value?.username} a message`,
            url: `${config.appUrl}/message?id=${profile.value?.id}`,
            title: "Unnon Message",
        })

    } else {
        navigator.clipboard.writeText(`${config.appUrl}/message?id=${profile.value?.id}`)
        alert("copied")
    }
}

</script>

<template>
    <nav v-if="auth.loggedIn" class="flex justify-between items-center">
        <NuxtLink v-if="$route.path === '/'" to="/profile"><img :src="`./logo.png`" alt=""></NuxtLink>
        <button v-else-if="$route.path === '/profile'" @click="copyLink"
            class="bg-[#757575] text-white px-5 py-1 w-fit font-[Arimo] text-[16px] rounded-md">
            copy link
        </button>
        <NuxtLink v-else to="/"><img :src="`./logo.png`" alt=""></NuxtLink>
        <NuxtLink to="/api/logout" external>
            <button class="bg-[#fd1c1c] text-white px-5 py-1 w-fit font-[Arimo] text-[16px] rounded-md">
                Logout
            </button>
        </NuxtLink>
    </nav>
    <nav v-else class="flex justify-between items-center">
        <NuxtLink to="/"><img :src="`/logo.png`" alt=""></NuxtLink>
        <NuxtLink to="/api/login" external>
            <button class="bg-[hsl(0,0%,0%)] text-white px-5 py-1 w-fit font-[Arimo] text-[16px] rounded-md">
                Login
            </button>
        </NuxtLink>
    </nav>
</template>