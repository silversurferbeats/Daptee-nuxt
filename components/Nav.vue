<script setup>
import { useState } from '#app';
const props = defineProps(['onSearch']);

const searchInput = ref('');

const handleSearch = () => {
    props.onSearch(searchInput);
};


const showProfile = useState("showProfile", () => false);
const toggleProfile = () => {
    showProfile.value = !showProfile.value
}
const profile = () => {
    showProfile.value = !showProfile.value
    navigateTo('/profile');
}
const logout = () => {
    localStorage.removeItem('user');
    showProfile.value = !showProfile.value
    navigateTo('/');
}
</script>


<template>
    <nav class="sticky top-0 w-full bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="flex flex-1 items-center justify-left ">
                    <div class="flex w-[15rem] md:w-full">
                        <div
                            class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                            <svg viewBox="0 0 20 20" aria-hidden="true"
                                class="pointer-events-none absolute w-5 fill-gray-500 transition">
                                <path
                                    d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z">
                                </path>
                            </svg>
                        </div>
                        <input type="text" class="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0"
                            placeholder="" @change="handleSearch" v-model="searchInput">
                        <input type="button" value="Search"
                            class="bg-[#755EF3] hover:bg-[#513ebc] p-2 rounded-tr-lg rounded-br-lg text-white font-semibold transition-colors">
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div class="relative ml-3">
                        <div>
                            <button type="button"
                                class="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-[#513ebc] focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                                id="user-menu-button" aria-expanded="false" aria-haspopup="true" @click="toggleProfile">
                                <span class="absolute -inset-1.5"></span>
                                <span class="sr-only">Open user menu</span>
                                <img class="size-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="">
                            </button>
                        </div>
                        <div v-if="showProfile"
                            class="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden"
                            role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                            <button @click="profile" class="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                                tabindex="-1" id="user-menu-item-0">Your Profile</button>
                            <button @click="logout" class="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                                tabindex="-1" id="user-menu-item-2">Sign out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
