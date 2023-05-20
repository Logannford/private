export default defineNuxtRouteMiddleware((to) => {
	const user = useSupabaseUser();

	if (!user.value) {
		if (to.path !== '/welcome') {
			navigateTo('/welcome');
		}
	} else if (to.path === '/welcome') {
		navigateTo('/');
	}
})