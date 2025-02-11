<script setup>
const props = defineProps(["user"]);
console.log('propsss -->', props.user)
const handleDelete = () => {
    // fetch aPi
}
</script>

<template>
    <div role="alert"
        class="absolute w-[30rem] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-xl z-50">
        <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Eliminar
        </div>
        <div
            class="flex flex-col justify-center items-center border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700 gap-4">
            <p>Seguro que quiere eliminar el item?</p>
            <div class="flex gap-4">
                <button
                    @click="cancelDelete"
                    class="w-[6rem] ml-4 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">cancelar</button>
                <button
                    @click="handleDelete"
                    class="w-[6rem] ml-4 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">aceptar</button>
            </div>
        </div>
    </div>
</template>