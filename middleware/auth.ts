export default defineNuxtRouteMiddleware((to) => {
	const user = useSupabaseUser();

	if(!user.value && to.path !== "/welcome")
		navigateTo('/welcome');
	else if (to.path === '/welcome')
		navigateTo('/');
})