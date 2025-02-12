<script setup>
import Nav from '~/components/Nav.vue';
import Menu from '~/components/Menu.vue';
import logo from '~/assets/LogoDaptee.svg';
definePageMeta({
    middleware: "auth",
});
const isAuthenticated = useState("isAuthenticated");
if (!isAuthenticated.value) {
    navigateTo("/");
}
</script>

<template>
    <div class="flex w-full h-screen ">
        <div class="hidden md:flex flex-col w-[20%] bg-gray-100">
            <nav class="w-full h-16 bg-gray-800 flex items-center justify-between p-8">
                <img class="h-8 w-auto" :src="logo" alt="Daptee">
            </nav>
            <Menu selected="dashboard" />
        </div>
        <div class="flex flex-col w-full md:w-[80%] bg-gray-700">
            <Nav />
            <Menu selected="dashboard" class="md:hidden" />
            <div
                class="flex flex-col justify-center items-center w-[90%] h-full text-sm text-center font-medium text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white gap-4">
                <DashboardAnimation />
                <h1 class="text-4xl text-[#3BCDBD]">Dashboard</h1>

                <h2 class="text-lg text-[#3BCDBD]">Ingrese a Usuarios o Productos segun su interes.</h2>
            </div>
        </div>
    </div>
</template>

