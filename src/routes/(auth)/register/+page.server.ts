import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    register: async ({ locals, request }) => {
        const formData = await request.formData();

        const data = Object.fromEntries([...formData]);

        try {
            const user = await locals.pb.collection("users").create({
                
            })
        } catch (err) {
            
        }
    }
};