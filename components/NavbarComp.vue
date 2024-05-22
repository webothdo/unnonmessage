<script setup>
const auth = useAuth()
</script>

<template>
    <nav v-if="auth.loggedIn" class="flex justify-between items-center">
        <NuxtLink to="/"><img :src="`/logo.png`" alt=""></NuxtLink>
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