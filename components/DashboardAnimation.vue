<script setup>
import logo from '~/assets/LogoDaptee.svg';
</script>

<template>
    <div class="relative">
        <div class="relative w-64 h-64">
            <div class="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-[#0ff] border-b-[#0ff] animate-spin"
                style="animation-duration: 3s;"></div>
            <div class="absolute mt-22 ml-5">
                <img class="h-16 w-auto" :src="logo" alt="Daptee">
            </div>

            <div class="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-[#0ff] animate-spin"
                style="animation-duration: 2s; animation-direction: reverse;"></div>
        </div>

        <div
            class="absolute inset-0 bg-gradient-to-tr from-[#0ff]/10 via-transparent to-[#0ff]/5 animate-pulse rounded-full blur-sm">
        </div>
    </div>
</template>