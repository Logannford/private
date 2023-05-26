export default defineNuxtRouteMiddleware((to) => {
	const user = useSupabaseUser();

	if(!user.value && to.path !== "/login")
		navigateTo('/login');
	else if (to.path === '/login')
		navigateTo('/');
})