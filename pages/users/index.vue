<script setup>
import { useAsyncData } from 'nuxt/app';
import { reactive } from 'vue';
import logo from '~/assets/LogoDaptee.svg';


const { data: users } = await useAsyncData('users', () =>
    $fetch('/api/users')
);

const state = reactive({
    filteredUsers: undefined
});

const handleSearch = (value) => {
    if (value._rawValue.length === 0) {
        state.filteredUsers = undefined;
    } else {
        // Fetch BE api to get filtereddata
        state.filteredUsers = [];
    }
}

</script>

<template>
    <div class="flex justify-center w-full">
        <div class="flex flex-col w-[20%] bg-gray-100">
            <nav class="w-full h-16 bg-gray-800 flex items-center justify-between p-8">
                <img class="h-8 w-auto" :src="logo" alt="Daptee">
            </nav>
            <Menu selected="users" />
        </div>
        <div class="flex flex-col justify-center items-center w-[80%] bg-gray-700">
            <Nav :onSearch="handleSearch" />
            <ContentModule :users="state.filteredUsers || users" />
        </div>
    </div>
</template>



