<script setup>
import logo from '~/assets/LogoDaptee.svg';
import { useAsyncData } from 'nuxt/app';
const { data: products } = await useAsyncData('products', () => $fetch('/api/products'));
</script>

<template>
    <div class="flex justify-center w-full">
        <div class="flex flex-col w-[20%] bg-gray-100">
            <nav class="w-full h-16 bg-gray-800 flex items-center justify-between p-8">
                <img class="h-8 w-auto" :src="logo" alt="Daptee">
            </nav>
            <Menu selected="products" />
        </div>
        <div class="flex flex-col justify-center items-center w-[80%] bg-gray-700 min-h-screen">
            <Nav :onSearch="handleSearch" />
            <ContentModule :users="products" />
        </div>
    </div>
</template>

