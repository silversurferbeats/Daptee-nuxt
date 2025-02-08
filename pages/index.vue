<script setup>
import imageBG from "../public/ImgBg.png";
import { ref } from "vue";
import { useAsyncData } from 'nuxt/app';

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
        alert('Usuario incorrecto');
    }
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
                        <input type="text" id="password" v-model="form.password"
                            class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />
                    </div>
                    <div>
                        <a class="text-sm text-[#755EF3]" href="#">Olvide mi contraseña
                        </a>
                    </div>
                    <!-- <NuxtLink to="/home"> -->
                        <button type="submit"
                            class="bg-[#755EF3] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">
                            Enviar
                        </button>
                    <!-- </NuxtLink> -->
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
    </div>
</template>


