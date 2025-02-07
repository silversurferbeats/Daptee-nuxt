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
    <div class="flex  w-full h-screen">
        <div class="flex flex-col w-[20%] bg-gray-100">
            <nav class="w-full h-16 bg-gray-800 flex items-center justify-between p-8">
                <img class="h-8 w-auto" :src="logo" alt="Daptee">
            </nav>
            <Menu selected="dashboard" />
        </div>
        <div class="flex flex-col justify-center w-[80%] bg-gray-700">
            <Nav />
            <div
                class="flex justify-center items-center w-[90%] h-full text-sm font-medium text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <DashboardAnimation />
            </div>

        </div>
    </div>
</template>

