export default defineNuxtRouteMiddleware((to, from) => {
  if (!import.meta.client) return;

  // Estado global para evitar el renderizado antes de la validación
  const isAuthenticated = useState("isAuthenticated", () => false);

  // Si ya está autenticado, continuar
  if (isAuthenticated.value) return;

  // Obtener usuario de localStorage
  const user = localStorage.getItem("user");

  if (!user) {
    return navigateTo("/");
  }

  // Marcar como autenticado
  isAuthenticated.value = true;
});
