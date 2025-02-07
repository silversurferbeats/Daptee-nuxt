<script setup>
import { ref } from "vue";
const props = defineProps(['users']);

const showItem = ref(false);
const showDelete = ref(false);
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
    console.log('Mostrar vista Item')
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

const handleDelete = () => {
    showItem.value = !showItem.value;
    showDelete.value = !showDelete.value;
}

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

</template>