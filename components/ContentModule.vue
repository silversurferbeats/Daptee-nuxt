<script setup>
import { ref } from "vue";
const props = defineProps(['users']);

const showItem = ref(false);
const showDelete = ref(false);
const showView = ref(false);
const popupPosition = ref({ top: 0, left: 0 });
const selectedUser = ref(null);

const toggleItem = (event, user) => {
    selectedUser.value = user;
    const button = event.target.getBoundingClientRect();
    popupPosition.value = { top: button.top + window.scrollY, left: button.left - 195 };
    showItem.value = !showItem.value;
};

const handleShow = () => {
    if (!selectedUser.value) return;
    showItem.value = !showItem.value;
    showView.value = !showView.value;
}

const cancelShow = () => {
    showView.value = !showView.value;
}

const handleDelete = () => {
    showItem.value = !showItem.value;
    showDelete.value = !showDelete.value;
}

const fetchDelete = async () => {
    if (!selectedUser.value) return;
    try {
        const url = `/api/${selectedUser.value.price ? 'products' : 'users'}?id=${encodeURIComponent(selectedUser.value.id)}`;
        await useAsyncData("deleteUser", () =>
            $fetch(url, { method: "DELETE" })
        );
        props.users.splice(props.users.findIndex(u => u.id === selectedUser.value.id), 1);
        showDelete.value = false;
        selectedUser.value = null;
    } catch (error) {
        console.error("Error deleting user:", error);
    }
};

const cancelDelete = () => {
    showDelete.value = !showDelete.value;
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
            <button @click="toggleItem($event, user)"
                class="ml-4 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                ...
            </button>
        </li>
    </ul>

    <!-- Pop-up emergente con posición dinámica -->
    <div v-if="showItem"
        class="absolute z-10 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden"
        :style="{ top: `${popupPosition.top}px`, left: `${popupPosition.left}px` }">
        <button @click="handleShow" class="block px-4 py-2 text-sm text-gray-700">Ver</button>
        <button @click="handleDelete" class="block px-4 py-2 text-sm text-gray-700">Eliminar</button>
    </div>

    <div v-if="showDelete" role="alert"
        class="absolute w-[30rem] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-xl z-50">
        <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Eliminar
        </div>
        <div
            class="flex flex-col justify-center items-center border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700 gap-4">
            <p>Seguro que quiere eliminar el item?</p>
            <div class="flex gap-4">
                <button @click="cancelDelete"
                    class="w-[6rem] ml-4 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">cancelar</button>
                <button @click="fetchDelete"
                    class="w-[6rem] ml-4 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">aceptar</button>
            </div>
        </div>
    </div>

    <div v-if="showView"
        class="absolute w-[30rem] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-xl z-50">
        <div
            class="relative flex w-full flex-col rounded-xl bg-gradient-to-br from-white to-gray-50 bg-clip-border text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border shadow-lg group">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 opacity-90">
                </div>
                <div
                    class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse">
                </div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <svg v-if="selectedUser.price" viewBox="0 0 24 24" fill="currentColor"
                        class="w-20 h-20 text-white/90 transform transition-transform group-hover:scale-110 duration-300">
                        <path d="M21 7l-9-5-9 5 9 5 9-5zm-9 7l-9-5v6l9 5 9-5v-6l-9 5z"></path>
                    </svg>
                    <svg v-else viewBox="0 0 24 24" fill="currentColor"
                        class="w-20 h-20 text-white/90 transform transition-transform group-hover:scale-110 duration-300">
                        <path
                            d="M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z">
                        </path>
                    </svg>
                </div>
            </div>
            <div class="p-6">
                <h5
                    class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-900 antialiased group-hover:text-blue-600 transition-colors duration-300">
                    {{ selectedUser.name }}
                </h5>
                <p v-if="selectedUser.id"
                    class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                    Identificacion: {{ selectedUser.id }}
                </p>
                <p v-if="selectedUser.email"
                    class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                    Correo: {{ selectedUser.email }}
                </p>
                <p v-if="selectedUser.price"
                    class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                    Precio: ${{ selectedUser.price }}
                </p>
            </div>
            <div class="p-6 pt-0">
                <button @click="cancelShow"
                    class="group relative w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5">
                    <span class="relative flex items-center gap-2">
                        Cerrar
                        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none"
                            class="w-5 h-5 transform transition-transform group-hover:translate-x-1">
                            <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke-width="2" stroke-linejoin="round"
                                stroke-linecap="round"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </div>

    </div>
</template>