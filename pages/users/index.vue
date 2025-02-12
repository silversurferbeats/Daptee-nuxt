<script setup>
import { useAsyncData } from 'nuxt/app';
import { reactive } from 'vue';
import logo from '~/assets/LogoDaptee.svg';
definePageMeta({
    middleware: "auth",
});
const isAuthenticated = useState("isAuthenticated");
if (!isAuthenticated.value) {
    navigateTo("/");
}

const { data: users } = await useAsyncData('users', () =>
    $fetch('https://67a2fee6409de5ed5256fca1.mockapi.io/api/users/users')
);

const state = reactive({
    filteredUsers: undefined
});

const handleSearch = async (value) => {
    if (value._rawValue.length === 0) {
        state.filteredUsers = undefined;
    } else {
        const searchTerm = value._rawValue;
        const url = `https://67a2fee6409de5ed5256fca1.mockapi.io/api/users/users?name=${encodeURIComponent(searchTerm)}`;

        const { data: userSearch } = await useAsyncData('user', () => $fetch(url, {
            method: 'get',
        }));
        console.log('userSearch -->', userSearch._rawValue)
        state.filteredUsers = [userSearch._rawValue];
    }
};
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
            <Nav :onSearch="handleSearch" />
            <Menu selected="dashboard" class="md:hidden" />
            <ContentModule :users="state.filteredUsers || users" />
        </div>
    </div>
</template>
