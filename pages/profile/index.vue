<script setup>
import { ref, onMounted } from "vue";
import logo from '~/assets/LogoDaptee.svg';
definePageMeta({
    middleware: "auth",
});

const logout = () => {
    localStorage.removeItem('user');
    navigateTo('/');
}

const user = ref({
    name: "",
    avatar: "",
    email: "",
    id: ""
});

const isAuthenticated = useState("isAuthenticated");

if (!isAuthenticated.value) {
    navigateTo("/");
}

onMounted(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
        user.value = JSON.parse(storedUser);
    }
});
</script>

<template>
    <div class="flex justify-center w-full">
        <div class="flex flex-col w-[20%] bg-gray-100">
            <nav class="w-full h-16 bg-gray-800 flex items-center justify-between p-8">
                <img class="h-8 w-auto" :src="logo" alt="Daptee" />
            </nav>
            <Menu selected="products" />
        </div>

        <div class="flex flex-col justify-center items-center w-[80%] bg-gray-700 min-h-screen">
            <Nav />

            <div
                class="flex justify-center items-center w-[90%] h-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <div class="w-[80%] flex min-h-screen items-center justify-center">
                    <div
                        class="flex flex-col gap-8 w-[30rem] min-h-[30rem] rounded-lg border-2 border-indigo-500 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800 ">
                        <figure
                            class="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-indigo-500 dark:bg-[#513ebc]">
                            <img class="rounded-full" :src="user.avatar" alt="imgAvatar">
                        </figure>
                        <h2 class="mt-4 text-4xl font-bold text-[#513ebc] dark:text-indigo-400">{{ user.name || "Usuario" }}</h2>
                        <p class="mb-4 text-2xl text-gray-600 dark:text-gray-300">Identificacion: {{ user.id || "Id no definido" }}</p>
                        <p class="mb-4 text-2xl text-gray-600 dark:text-gray-300">Correo: {{ user.email || "Correo no definido" }}</p>
                        <div class="flex items-center justify-center">
                            <NuxtLink to="/dashboard"
                                class="rounded-full bg-[#513ebc] px-4 py-2 text-white hover:bg-[#513ebc] dark:bg-[#513ebc] dark:hover:bg-[#513ebc]">
                                Dashboard</NuxtLink>
                            <button @click="logout"
                                class="ml-4 rounded-full bg-[#755EF3] px-4 py-2 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600">
                                Sign out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
