<script setup>
import { useState } from '#app';
defineProps(['users']);

const showItem = useState('showItem', () => false);
const toggleItem = () => {
    showItem.value = !showItem.value
}
</script>

<template>
    <ul v-if="users.length > 0"
        class="w-[90%] h-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li v-for="user in users" :key="user.id" class="flex justify-between items-center w-full px-4 py-2 border-b border-gray-200 cursor-pointer
            hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700
            focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white
            dark:focus:ring-gray-500 dark:focus:text-white">
            <span>{{ user.name }}</span>
            <button @click="toggleItem" class="ml-4 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                ...
            </button>
            <div v-if="showItem" class="absolute right-12 z-10 mt-28 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden">
                <button class="block px-4 py-2 text-sm text-gray-700">ver</button>
                <button class="block px-4 py-2 text-sm text-gray-700">eliminar</button>
            </div>
        </li>
    </ul>
</template>

