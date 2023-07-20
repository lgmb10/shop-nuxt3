import apiFakeStore from "../api/apiFakeStore";
import axios from "axios";

export default defineNuxtPlugin((NuxtApp) =>{
    const config = useRuntimeConfig()
    let apiAxios = axios.create({
        baseUrl: config.public.apiUrl,
        headers: {
            common: {},
        },
    });

    return {
        provide: {
            api: apiFakeStore({axios: apiAxios, baseUrl: config.public.apiUrl}),
        }
    }
})