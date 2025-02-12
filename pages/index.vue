<script setup>
import imageBG from "../public/ImgBg3.png";
import { ref } from "vue";
import { useAsyncData } from 'nuxt/app';

const showDelete = ref(false);

const form = ref({
    email: '',
    password: ''
})

const handleSubmit = async  () => {
    const { data: user } = await useAsyncData('user', () => $fetch('/api/users', {
        method: 'post',
        body: {
            name: form.value.email,
            password: form.value.password
        }
    }));

    if (user._rawValue && user._rawValue.name === form.value.email && user._rawValue.password === form.value.password && user._rawValue.id ){
        localStorage.setItem('user', JSON.stringify(user.value));
        navigateTo('/dashboard');
    } else {
        showDelete.value = !showDelete.value;
    }
}

const cancelDelete = () => {
    showDelete.value = !showDelete.value;
}


</script>

<template>
    <div class="w-full h-screen flex flex-col md:flex-row justify-center items-cent">
        <div class="flex justify-center items-center w-full md:w-[50%]">
            <div class="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
                <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
                    Bienvenido a <span class="text-[#755EF3]">Daptee</span>
                </div>
                <div class="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
                    Ingresa a tu cuenta
                </div>
                <form class="flex flex-col gap-3" @submit.prevent="handleSubmit">
                    <div class="block relative">
                        <label for="email"
                            class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">User</label>
                        <input type="text" id="email" v-model="form.email"
                            class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />
                    </div>
                    <div class="block relative">
                        <label for="password"
                            class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
                        <input type="password" id="password" v-model="form.password"
                            class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />
                    </div>
                    <div>
                        <a class="text-sm text-[#755EF3]" href="#">Olvide mi contraseña
                        </a>
                    </div>
                    <button type="submit"
                        class="bg-[#755EF3] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">
                        Enviar
                    </button>
                </form>
                <div class="text-sm text-center mt-[1.6rem]">
                    Aun no tiene una cuenta?
                    <a class="text-sm text-[#755EF3]" href="#">Sign up for free!</a>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center w-[50%] invisible md:visible" :style="{
            backgroundImage: `url(${imageBG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }"></div>
        <div v-if="showDelete" role="alert"
            class="absolute w-[25rem] md:w-[30rem] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-xl z-50">
            <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                Eliminar
            </div>
            <div
                class="flex flex-col justify-center items-center border border-t-0 border-red-400 rounded-b bg-gray-700 px-4 py-3 text-white gap-4">
                <p>Usuario o Contraseña incorrecta.</p>
                <div class="flex gap-4">
                    <button @click="cancelDelete"
                        class="w-[6rem] ml-4 bg-[#755EF3] hover:bg-[#513ebc] text-white px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">aceptar</button>
                </div>
            </div>
        </div>
    </div>
</template>


