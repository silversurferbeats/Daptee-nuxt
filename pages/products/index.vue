<script setup>
import { useAsyncData } from 'nuxt/app';
import logo from '~/assets/LogoDaptee.svg';
definePageMeta({
    middleware: "auth",
});
const isAuthenticated = useState("isAuthenticated");
if (!isAuthenticated.value) {
    navigateTo("/");
}

const { data: products } = await useAsyncData('products', () => $fetch('/api/products'));

const state = reactive({
    filteredProducts: undefined
});

const handleSearch = async (value) => {
    if (value._rawValue.length === 0) {
        state.filteredProducts = undefined;
    } else {
        const searchTerm = value._rawValue;
        const url = `/api/products?name=${encodeURIComponent(searchTerm)}`;

        const { data: productSearch } = await useAsyncData('product', () => $fetch(url, {
            method: 'get',
        }));
        state.filteredProducts = [productSearch._rawValue];
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
            <ContentModule :users="state.filteredProducts || products" />
        </div>
    </div>
</template>
