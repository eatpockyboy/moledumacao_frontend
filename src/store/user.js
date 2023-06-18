import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
    const name = "GSSL";
    const age = "18";

    return { name, age };
});