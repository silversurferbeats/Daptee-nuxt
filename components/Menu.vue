<script setup>
defineProps(['selected']);
</script>

<template>
    <div class="sticky  top-0 card w-full md:p-5 rounded-md">
        <ul class="w-full flex flex-row md:flex-col bg-white md:bg-transparent  gap-2">
            <li class="flex flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap md:mt-4 ml-8 md:ml-0">
                <NuxtLink to="/dashboard" :class="{ border: selected === 'users' }"
                    class=" flex size-full gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-purple-400 hover:shadow-inner focus:bg-gradient-to-r from-[#755EF3] to-purple-600 focus:text-white text-gray-700 transition-all ease-linear">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-10">
                        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                        <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path class="group-focus:fill-white" fill="#000000"
                                d="M12 3L3 10V21C3 21.5523 3.44772 22 4 22H9V15H15V22H20C20.5523 22 21 21.5523 21 21V10L12 3Z">
                            </path>
                        </g>
                    </svg>

                    <span class="hidden sm:ml-6 sm:block mt-2">Dashboard</span>
                </NuxtLink>
            </li>
            <li class="flex flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap md:mt-4">
                <NuxtLink to="/users" :class="{ border: selected === 'users' }"
                    class=" flex size-full gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-purple-400 hover:shadow-inner focus:bg-gradient-to-r from-[#755EF3] to-purple-600 focus:text-white text-gray-700 transition-all ease-linear">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-12">
                        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                        <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier">
                            <circle cx="12" cy="8" r="4" fill="#000000"></circle>
                            <path fill="#000000"
                                d="M4 21C4 17.134 7.13401 14 11 14H13C16.866 14 20 17.134 20 21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21Z">
                            </path>
                        </g>
                    </svg>

                    <span class="hidden sm:ml-6 sm:block mt-2">Usuarios</span>
                </NuxtLink>
            </li>
            <li class="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap md:mt-4">
                <NuxtLink to="/products" :class="{ border: selected === 'products' }"
                    class="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-purple-400 hover:shadow-inner focus:bg-gradient-to-r from-[#755EF3] to-purple-600 focus:text-white text-gray-700 transition-all ease-linear">
                    <svg stroke="#000000" class="icon glyph w-10 group-focus:fill-white group-focus:stroke-white"
                        id="dashboard-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
                        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                        <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M14,10V22H4a2,2,0,0,1-2-2V10Z"></path>
                            <path d="M22,10V20a2,2,0,0,1-2,2H16V10Z"></path>
                            <path d="M22,4V8H2V4A2,2,0,0,1,4,2H20A2,2,0,0,1,22,4Z"></path>
                        </g>
                    </svg>
                    <span class="hidden sm:ml-6 sm:block mt-2">Productos</span>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>