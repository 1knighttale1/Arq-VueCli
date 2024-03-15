import { ref } from "vue";
import { defineStore } from "pinia";
import axios from 'axios';

// datos prueba
import dataProjects from "../assets/JSON/test/projects.json";
import dataWorks from "../assets/JSON/test/works.json";
import dataAboutUs from "../assets/JSON/test/aboutus.json";
import dataContacts from "../assets/JSON/test/contacts.json";
import dataLoading from "../assets/JSON/loading.json";

async function getData(url) {
    try {
        const response = await axios.get(url);
        return response.data
    } catch (error) {
        return null
    }
}

export const useDataStore = defineStore("data", ()=>{
    const data = ref({
        projects: {},
        works: {},
        aboutus: {},
        contacts: {},
        loading: dataLoading,
    });
    const updateProjects = async () => {
        data.value.projects = await getData('https://arquitecto-nest-backend.vercel.app/proyecto');
        // valores de prueba
        // data.value.projects = dataProjects
    };
    const updateWorks = async () => {
        data.value.works = await getData('https://arquitecto-nest-backend.vercel.app/obra');
        // valores de prueba
        // data.value.works = dataWorks
    };
    const updateAboutUs = async () => {
        data.value.aboutus = await getData('https://arquitecto-nest-backend.vercel.app/estudio');
        // valores de prueba
        // data.value.aboutus = dataAboutUs
    };
    const updateContacts = async () => {
        // data.value.aboutus = await getData('https://arquitecto-nest-backend.vercel.app/estudio');
        // valores de prueba
        data.value.contacts = dataContacts
    };

    return { data, updateProjects, updateWorks, updateAboutUs, updateContacts };
});