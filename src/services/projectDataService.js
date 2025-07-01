import { env } from "../configs/envConfig";
import {Axios} from "axios";

/**
 * Fetches the team member data.
 *
 * @returns {Array<Object>} If successful: Array of objects where each object has the following fields:
 * - `title` (string, always present)
 * - `logo` (url string, always present)
 * - `link` (url string, always present)
 * - `description` (string, sometimes present)
 * @returns {Array<Object>} If error: Array with the first object containing an `error` field with the error description.
 */
export async function getProjectData() {

    //  Temporarily we have created an array of objects to represent projects
    //  Eventually this will be replaced with a backend api call. The object is just here to give you a structure
    //  Title, logo, and link must always be rendered, other objects must only be rendered if they exist, if not skip them.

    return [
        {
            title: 'Davis Dot',
            logo: `${process.env.PUBLIC_URL}/projects/Davis.png`,
            description: `A social connection platform that unites users over deep, personalized interests that they share and uses it to establish healthy social relationships inside and outside the app. Will have well being resources, tips on communication, personality profiles, and other social/wellness content.`,
            link: `/`,
        },
        {
            title: `Indie Games Division`,
            logo: `${process.env.PUBLIC_URL}/projects/Aescension.png`,
            description: `The Indie Games Division will develop games for Windows to be sold on Steam. Our first game we are working on is a spy and stealth game.`,
            link: `/`,
        },
        {
            title: `Mobile Games Division`,
            logo: `${process.env.PUBLIC_URL}/projects/Mobile.png`,
            description: `We are working on two games right now, the first being a multiplayer hero-based RPG strategy game that will be a long term project. The second game is a single player life sim game called “The Come-Up” which will be developed primarily`,
            link: `/`,
        },
    ];
}

/**
 * Fetches the project data.
 *
 * @returns {Array<Object>} If successful: Array of objects where each object has the following fields:
 * - `title` (string, always present)
 * - `logo` (url string, always present)
 * - `link` (url string, always present)
 * - `description` (string, sometimes present)
 * @returns {Array<Object>} If error: Array with the first object containing an `error` field with the error description.
 */
export async function getProjectDataNew(){
    try{
        const fetchedData = Axios.get(`${env.backendUrl}/api/projects`);
        let translatedProjectData = []; // {Array<Object>}

        fetchedData.array.forEach(element => {
            const title = fetchedData.title;
            const logo = fetchedData.logo;
            const link = fetchedData.link;
            const description = fetchedData.description;
            translatedProjectData.push({title: title, logo: logo, link: link, descrption: description});
        });

        return fetchedData; 
    } catch(error){
        return [{error: 'Error fetching data, please try again later'}];
    }
}