import {Axios} from "axios";
import {env} from "../configs/envConfig";

/**
 * Fetches the team member data.
 *
 * @returns {Array<Object>} If successful: Array of objects where each object has the following fields:
 * - `name` (string, always present)
 * - `role` (string, always present)
 * - `specificRole` (string, sometimes present) : 'developer' | 'designer' | 'operations' | 'finance'
 * - `profileImage` (url string, always present)
 * - `profileLink` (url string, always present)
 * - `bio` (string, sometimes present)
 * @returns {Array<Object>} If error: Array with the first object containing an `error` field with the error description.
 */
export async function getTeamMemberData(){

    return [

        {
            name: 'Coming soon',
            role: '',
            profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
            profileLink: '/', // This can be linked in or any other link we choose
            bio: 'Details of the members of our team are coming soon!',
        },
        {
            name: 'Coming soon',
            role: '',
            profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
            profileLink: '/', // This can be linked in or any other link we choose
            bio: 'Details of the members of our team are coming soon!',
        },
        {
            name: 'Coming soon',
            role: '',
            profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
            profileLink: '/', // This can be linked in or any other link we choose
            bio: 'Details of the members of our team are coming soon!',
        },
        {
            name: 'Coming soon',
            role: '',
            profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
            profileLink: '/', // This can be linked in or any other link we choose
            bio: 'Details of the members of our team are coming soon!',
        },
    ];
}

/**
 * Fetches the team member data.
 *
 * @returns {Array<Object>} If successful: Array of objects where each object has the following fields:
 * - `name` (string, always present)
 * - `role` (string, always present)
 * - `specificRole` (string, sometimes present) : 'developer' | 'designer' | 'operations' | 'finance'
 * - `profileImage` (url string, always present)
 * - `profileLink` (url string, always present)
 * - `bio` (string, sometimes present)
 * @returns {Array<Object>} If error: Array with the first object containing an `error` field with the error description.
 */
export async function getTeamMemberDataNew(){
    try{
        const fetchedData = Axios.get(`${env.backendUrl}/api/team`);
        let translatedMemberData = []; // {Array<Object>}

        fetchedData.array.forEach(element => {
            const name = fetchedData.name;
            const role = fetchedData?.role || null; // TODO: Add type check for 'developer' | 'designer' | 'operations' | 'finance'
            const profilePicture = fetchedData.profilePicture;
            const profileLink = fetchedData?.profileLink || null;
            const linkedIn = fetchedData.linkedIn;
            const website = fetchedData.website;
            const bio = fetchedData?.bio || null;
            translatedMemberData.push({name: name, role: role, profilePicture: profilePicture, profileLink: profileLink, bio: bio, linkedIn: linkedIn});
        });

        return fetchedData; 
    } catch(error){
        return [{error: 'Error fetching data, please try again later'}];
    }
}

/**
 * Create an array of objects, of all the team members from the team member directory.
 * Example of an individual object:
 * ```js
 * {
 * name: `Vijit Dua`,
 * profilePicture: `${process.env.PUBLIC_URL}/profile-images/vijit-dua.png`,
 * linkedIn: `https://linkedin.com/in/vijitdua`,
 * website: `https://vijitdua.com/socials`,
 * },
 * ```
 *
 * name and profile picture are required
 *
 * linkedIn and website are optional, so put them for members that have them and not for the ones that don't.
 *
 * Get data from the google drive assets folder and upload profile-images with the format firstname-lastname.extension
 * to the profile/images directory in the public folder.
 *
 * Appropriately link them using the public_url process.env as shown above
 *
 * Then add the names too ofcourse.
 */

export const teamMembers = [
    {
        name: `Adit Khandelwal`,
        role: 'Developer - Davis Dot',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/adit-khandelwal-1.jpg`,
        linkedIn: `linkedin.com/in/aditkhandelwal/`,
        website: `https://aditk.com`,
    },
    {
        name: `Aida Yuan`,
        role: 'Graphic Designer - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/aida-yuan-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/aida-yuan-a451622a4/`,
        website: `https://moonjaa.wixsite.com/aida-portfolio`,
    },
    {
        name: `Agathe Riopel`,
        role: 'VFX Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/agathe-riopel-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/agathe-riopel-6a8100204/`,
        website: `https://www.agatheriopel.com/`,
    },
    {
        name: `Akilan Babu`,
        role: 'Project Lead - StenoStudy',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/akilan-babu-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/akilan-babu/`,
        website: `https://github.com/wertyyyy12`,
    },
    {
        name: `Alberto Gazzato`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/alberto-gazzato-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/alberto-gazzato-3743aa191/`,
        website: `https://www.artstation.com/albertogazzato`,
    },
    {
        name: `Alejandro Garibay`,
        role: 'Sound Designer - Audio Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/alejandro-garibay-1.jpg`,
        linkedIn: `www.linkedin.com/in/garibaysoundproductions`,
        website: 'https://drive.google.com/file/d/1DcV_TPrIaIrWVix81YS6HWFTT0SqoFAc/view?usp=sharing',
    },
    {
        name: `Alexis Lydon`,
        role: 'Developer - Davis Dot',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/alexis-lydon-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/alexis-lydon-477498223/`,
        website: `https://github.com/alexisbl14`,
    },
    {
        name: `Alina Staten`,
        role: 'Writer - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/alina-staten-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/alina-staten/`,
        website: 'https://docs.google.com/document/d/1wg8qzIePFrUDrC6iPM9SIRRrrp6IHzzYjSst-IHAG18/edit?tab=t.uqm7zdcrik38#heading=h.kicqualget1j',
    },
    {
        name: `Andrea Baldi`,
        role: 'Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/andrea-baldi-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/andrea-baldi-a63997269/`,
        website: `https://www.artstation.com/baldiandrea755`,
    },
    {
        name: `Andrea Buonocore`,
        role: 'Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/andrea-buonocore-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/andrea-buonocore-8b0198216/`,
        website: `https://andreabuonocore50.wixsite.com/andreabuonocore`,
    },
    {
        name: `Andre-Jon Albino`,
        role: 'Videographer - Media Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/aandre-jon-albino-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/andr%C3%A9-jon-albino-1834b4163/`,
        website: `https://andre-albino.digital/video-projects`,
    },
    {
        name: `Andrew Davidson`,
        role: 'Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/andrew-davidson-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/andrew-davidson-534375130/`,
        website: `https://aforangers.wixsite.com/andrewdavidsoniii`,
    },
    {
        name: `Anna Alekseeva`,
        role: 'Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/anna-alekseeva-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/anna-alekseeva-959542238/`,
        website: `https://www.artstation.com/annamilad`,
    },
    {
        name: `Ashley Caroll`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/ashley-caroll-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/ashleycarroll123/`,
        website: `https://www.artstation.com/ashleycarroll`,
    },
    {
        name: `Aung Kyaw`,
        role: 'Developer - Mobile Games Division, Web Development',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/aung-kyaw-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/aungkkyaw/`,
        website: `https://aungkhantkyaw.netlify.app/`,
    },
    {
        name: `Autry George`,
        role: '3D Animator - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/autry-george-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/autry-george-757ab2154/`,
        website: `https://www.artstation.com/autrygeorge4`,
    },
    {
        name: `Aurora Russell`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/aurora-russell-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/aurora-russell-07051922b/`,
        website: `https://www.artstation.com/borealisdesigns`,
    },
    {
        name: `Axel Luis Servin`,
        role: 'Sound Designer - Audio Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/axel-gomez-servin-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/axel-luis-gomez-servin-9979a5220/`,
        website: `https://axelgomezservinaudio.weebly.com/`,
    },
    {
        name: `AZ Banguis`,
        role: 'Marketing - Media Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/az-banguis-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/azbanguis/`,
        website: `https://www.azbanguis.com/`,
    },
    {
        name: `Bilal Memon`,
        role: 'Developer - Web Development',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/bilal-memon-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/bilal-memon-1a59b6208/`,
        website: `https://bilal-memon.netlify.app/`,
    },
    {
        name: `Blase Henry`,
        role: 'Developer - Indie Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/blase-henry-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/blase-henry-510935137/`,
        website: `https://blasesportfolio.wordpress.com/`,
    },
    {
        name: `Brian Kwon`,
        role: 'Developer - Web Development',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/brian-kwon-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/blase-henry-510935137/`,
        website: `https://blasesportfolio.wordpress.com/`,
    },
    {
        name: `Brittany Lamont`,
        role: 'Project Lead - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/brittany-lamont-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/brittany-lamont-3b2339112/`,
        website: `https://brittanylamont.wixsite.com/brittanylamont`,
    },
    {
        name: `Bryant Cachola`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/bryant-cachola-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/bryant-cachola/`,
        website: `https://www.artstation.com/bcachola`,
    },
    {
        name: `Caio Simonetta`,
        role: 'Operational Manager',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/caio-simonetta-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/caio-simonetta-474a29270/`,
        website: `https://muse.io/csimonetta`,
    },
    {
        name: `Caleigh Gorcoff`,
        role: 'Concept Artist - Indie Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/caleigh-gorcoff-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/caleigh-gorcoff-295422238/`,
        website: `https://www.artstation.com/creneeart`,
    },
    {
        name: `Calvin Kim`,
        role: 'Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/calvin-kim-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/calvinkim010896/`,
        website: `https://www.artstation.com/calvinkimart`,
    },
    {
        name: `Cass Hammond`,
        role: 'Project Lead: Rigging - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/cass-hammond-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/cass-hammond-art/`,
        website: `https://www.artstation.com/casshammond`,
    },
    {
        name: `Charles Howerton`,
        role: 'Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/charles-howerton-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/charles-howerton-41545622a/`,
        website: `https://www.artstation.com/howertonconceptart`,
    },
    {
        name: `Chloe Nguyen`,
        role: 'Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/chloe-nguyen-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/chloe-doanh-nguyen-008682161/`,
        website: `https://www.artstation.com/chloenguyen`,
    },
    {
        name: `Chris Ramos`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/chris-ramos-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/chrisramosart/`,
        website: `https://www.artstation.com/chris_r64`,
    },
    {
        name: `Christian Romo`,
        role: 'Developer - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/christian-romo-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/christian-romo-853441247/`,
        website: `https://github.com/ChristianRomo37`,
    },
    {
        name: `Clay Bryner`,
        role: 'Developer - Indie Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/clay-bryner-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/clay-bryner/`,
        website: `https://www.claybryner.com/portfolio`,
    },
    {
        name: `Connie Chau`,
        role: 'Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/connie-chau-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/tszkiconniechau/`,
        website: `https://www.conniechau.com/`,
    },
    {
        name: `Daniel Herranz`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/daniel-herranz-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/daniel-herranz/`,
        website: `https://www.artstation.com/danielheranz`,
    },
    {
        name: `Dillon Heeke`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/dillon-heeke-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/dillon-heeke-361277158/`,
        website: `https://www.artstation.com/dillonheeke`,
    },
    {
        name: `Dongqing Zheng`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/dongqing-zheng-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/sunnyzheng0920/`,
        website: `https://sunnyzhengart.artstation.com/albums/10768936`,
    },
    {
        name: `Dziana Vasilevich`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/dziana-vasilevich-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/dziana-vasilevich-0ab65b284/`,
        website: `https://www.artstation.com/diana_vasilevich`,
    },
    {
        name: `Emil Saechao`,
        role: '2D Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/emil-saechao-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/emil-saechao/`,
        website: `https://www.artstation.com/ehmeal`,
    },
    {
        name: `Evan Wanamaker`,
        role: 'Writer - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/evan-wanamaker-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/evanwanamaker/`,
        website: null,
    },
    {
        name: `Galo Domaica`,
        role: 'Project Manager - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/galo-domaica-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/galo-domaica-6681ba14a/`,
        website: `https://watermelon-saxophone-zc2g.squarespace.com/`,
    },
    {
        name: `Griffin Beverlin`,
        role: 'Developer - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/griffin-beverlin-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/griffinbeverlin/`,
        website: `https://griffinbaywolfebeverlin.com/`,
    },
    {
        name: `Guy Doratio Jr.`,
        role: '3D Artist - Indie Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/guy-doratio-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/guy-doratio/`,
        website: `https://guydoratio.artstation.com/projects`,
    },
    {
        name: `Hallee Martinez`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/hallee-martinez-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/hallena-martinez-3317a1207/?utm_sou`,
        website: `https://www.artstation.com/fantasymyths`,
    },
    {
        name: `Hanz Pacheco`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/hanz-pacheco-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/hanz-pacheco-774638155/`,
        website: `https://pachecohanz.github.io/ImHanzPortfolio/`,
    },
    {
        name: `Hari Prasad`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/hari-peram-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/hari-chandra-prasad-9029a0127/`,
        website: `https://www.artstation.com/artwork/1xe3kL`,
    },
    {
        name: `Honghui Henry Li`,
        role: 'Developer - Davis Dot',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/honghui-henry-li-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/honghui-li-789b9a24a/`,
        website: `https://github.com/Honghui-Li-8`,
    },
    {
        name: `Hudson Burch`,
        role: '3D Artist - Indie Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/hudson-burch-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/burchhudson/`,
        website: `https://www.artstation.com/a_wizard`,
    },
    {
        name: `Ilya Shchipanov`,
        role: 'Developer - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/ilya-shchipanov-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/ilya-shchipanov-887777285/`,
        website: `https://github.com/LiTasTime`,
    },
    {
        name: `Janelle Pereyda`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/janelle-pereyda-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/janellep3191/`,
        website: `https://www.artstation.com/sweetlemonaaade`,
    },
    {
        name: `Jay Galdos`,
        role: '2D Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/jay-galdos-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/jay-galdos-24524829a/`,
        website: `https://www.artstation.com/jaygaldos2`,
    },
    {
        name: `Jemma van Schalkwyk`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/jemma-van-schalkwyk-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/jemmavs/`,
        website: `https://www.artstation.com/jemmavs`,
    },
    {
        name: `Jeremy Layseca`,
        role: 'Developer - Indie Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/jeremy-layseca-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/jeremy-layseca/`,
        website: `https://jeremylayseca.wixsite.com/jeremylayseca`,
    },
    {
        name: `Jeremy Martinez`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/jeremy-martinez-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/jemmavs/`,
        website: `https://www.artstation.com/jemmavs`,
    },
    {
        name: `Jerry Mendheim`,
        role: '2D Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/jerry-mendheim-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/jerry-mendheim/`,
        website: null,
    },
    {
        name: `Jessica Zogaric`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/jessica-zogaric-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/jessica-zogaric-57a613241/`,
        website: `https://www.artstation.com/jessicazogaric`,
    },
    {
        name: `John Overton`,
        role: 'Team Lead, Project Lead - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/john-overton-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/johnovertonid/`,
        website: `https://github.com/4554551NX`,
    },
    {
        name: `Johnathan Burnett`,
        role: 'Developer - Indie Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/johnathan-burnett-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/johnathan-logan-burnett/`,
        website: null,
    },
    {
        name: `Johnathan Rios`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/johnathan-rios-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/johnathan-rios-4b232020b/`,
        website: `https://www.artstation.com/johnathan_rios`,
    },
    {
        name: `Jonah Hoem`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/jonah-hoem-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/jonah-hoem-ab3a79172/`,
        website: `https://www.artstation.com/jonahhoem`,
    },
    {
        name: `Jordan Garcia`,
        role: '2D Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/jordan-garcia-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/jordan-garcia-587ab41b6/`,
        website: `https://www.artstation.com/jordan_garcia33`,
    },
    {
        name: `Joyel Joseph`,
        role: 'Project Lead - Davis Dot',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/joyel-joseph-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/joyel-joseph-7772252b6/`,
        website: `https://joejoseph6.wixsite.com/joyel`,
    },
    {
        name: `Juan Ignacio Moreno Sevilla`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/juan-ignacio-morena-sevilla-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/juan-ignacio-moreno-sevilla/`,
        website: `https://www.artstation.com/j_i_m_s`,
    },
    {
        name: `Julian Lara`,
        role: 'Developer - Davis Dot',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/julian-lara-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/julian-m-lara/`,
        website: `https://github.com/JuiceBox7`,
    },
    {
        name: `Julie Matta`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/julie-matta-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/juliematta/`,
        website: `https://www.artstation.com/juliematta`,
    },
    {
        name: `Julius Lee`,
        role: '3D Animator - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/julius-lee-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/juliusplee/`,
        website: `https://www.juliusplee.com/`,
    },
    {
        name: `Jungjoo Kim`,
        role: '2D Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/jungjoo-kim-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/napperracoon/`,
        website: `https://www.artstation.com/napper_racoon`,
    },
    {
        name: `Justine Posada`,
        role: '2D Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/justine-posada-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/justine-posada-339875199/`,
        website: `https://www.artstation.com/justinesketches`,
    },
    {
        name: `Kaden Marler`,
        role: 'Developer - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/kaden-marler-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/kaden-marler-b71149140/`,
        website: `https://marlerkadenr.wixsite.com/porfolio`,
    },
    {
        name: `Kaitlyn Pislaan`,
        role: '2D Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/kaitlyn-pislaan-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/kaitlyn-p-a49451233/`,
        website: `https://www.artstation.com/kpislaan`,
    },
    {
        name: `Karla Medina`,
        role: '2D Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/karla-medina-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/karla-medina-058956223/`,
        website: `https://www.karlamedinaportfolio.com/`,
    },
    {
        name: `Kaulana Sierra`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/kaulana-sierra-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/kaulanasierra`,
        website: `https://www.artstation.com/rusticmelody`,
    },
    {
        name: `Kirill Lavrukov`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/kirill-lavrukov-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/kirill-lavrukov/`,
        website: `https://www.artstation.com/fullmetalbeton`,
    },
    {
        name: `Kristian Chavez`,
        role: 'Project Lead - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/kristian-chavez-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/kristian-chavez-976a1a188/`,
        website: `https://captainpinacoladai.wixsite.com/kristianchavez`,
    },
    {
        name: `Kristofferson Espiritu`,
        role: 'Project Lead - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/kristofferson-espiritu-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/kristofferson-espiritu/`,
        website: `https://www.espirit2designs.com/`,
    },
    {
        name: `Kyle Reed`,
        role: 'Developer - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/kyle-reed-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/kyle-reed-8a751a222/`,
        website: `https://github.com/KyleXR`,
    },
    {
        name: `Kyle Shteynberg`,
        role: 'Developer - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/kyle-shteynberg-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/kyle-shteynberg/`,
        website: `https://github.com/kyleshteynberg`,
    },
    {
        name: `Lauren Hill`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/lauren-hill-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/laurenhill0425/`,
        website: `https://www.artstation.com/laurenhi11`,
    },
    {
        name: `Lily Inman`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/lily-inman-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/lily-inman-b3a182209/`,
        website: `https://www.lilyinman.com/`,
    },
    {
        name: `Levi Park`,
        role: '2D Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/levi-park-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/levi-park-5447a9195/`,
        website: `https://www.artstation.com/syntheticpessimist`,
    },
    {
        name: `Lucas Casali`,
        role: 'Composer - Audio Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/lucas-casali-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/lucas-casali-0847a71ab/`,
        website: `https://open.spotify.com/artist/5FcRF2Cx18l7I3jGwc3LA1?si=c-kBiqKQRxqlnI9ucWboAQ&nd=1&dlsi=9f9fcb80846349bb`,
    },
    {
        name: `Madison Trembley`,
        role: 'Writer - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/madison-trembley-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/madison-trembley-4537b8262/`,
        website: `https://madisontrembley.wixsite.com/madison-trembley`,
    },
    {
        name: `Maggie Ma`,
        role: 'UI/UX Designer - Davis Dot',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/maggie-ma-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/maggiema209/`,
        website: `https://maggiema.com/`,
    },
    {
        name: `Mamie Blessing`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/mamie-blessing-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/mamieblessing/`,
        website: `https://www.artstation.com/mamieblessing`,
    },
    {
        name: `Mar Garcia Sanchez`,
        role: '2D Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/mar-garcia-sanchez-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/marsanart/`,
        website: `https://www.artstation.com/marsanart`,
    },
    {
        name: `Marc Paolo Yap`,
        role: 'Project Lead - Davis Dot',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/marc-paolo-yap-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/marc-paolo-yap/`,
        website: `https://github.com/paoloyap22`,
    },
    {
        name: `Maria Hapon`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/maria-hapon-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/maria-hapon-8402372b8/`,
        website: `https://www.artstation.com/mariag`,
    },
    {
        name: `Mariana Homsy`,
        role: '2D Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/mariana-homsy-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/marianahomsy/`,
        website: `https://www.artstation.com/dahabd`,
    },
    {
        name: `Marina (Mer) Rose`,
        role: '2D Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/marina-rose-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/scrimbie/`,
        website: `https://scrimbie.com/`,
    },
    {
        name: `Maritzell Martinez`,
        role: 'Graphic Designer - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/maritzell-martinez-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/maritzell-martinez-67b268181`,
        website: `https://maritzellm.carrd.co/`,
    },
    {
        name: `Mason Lacey`,
        role: '2D Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/mason-lacey-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/maryna-sinelnykova-322904246/`,
        website: `https://masonlaceyportfolio.com/`,
    },
    {
        name: `Maxim Shirkov`,
        role: '2D Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/maxim-shirkov-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/maxim-shirkov-5a35b2211/`,
        website: `https://www.artstation.com/solventum`,
    },
    {
        name: `Maytavin Pongsudhiraks`,
        role: 'UI/UX Designer - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/maytavin-pongsudhiraks-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/maytavin-pongsudhiraks-a67356264/`,
        website: `https://mattpong.com/`,
    },
    {
        name: `Megan Melberg`,
        role: '2D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/megan-melberg-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/meganmelberg/`,
        website: `https://www.artstation.com/meganmelberg14/albums/4678043`,
    },
    {
        name: `Michael Hernandez`,
        role: '2D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/michael-hernandez-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/michael-hernandez-9510491a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app`,
        website: `https://michaelhernandez157.wixsite.com/mike-h-animations`,
    },
    {
        name: `Michael Santiago`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/michael-santiago-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/michael-santiago-22a337141/`,
        website: `https://michaelsantiago.artstation.com/`,
    },
    {
        name: `Michelle Vu`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/michelle-vu-1.jpg`,
        linkedIn: `www.linkedin.com/in/michelle-vu-a3443016b`,
        website: `https://www.artstation.com/michelle_vu`,
    },
    {
        name: `Miles Stevenson`,
        role: 'IT Technician',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/miles-stevenson-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/miles-stevenson-334baa300/`,
        website: null,
    },
    {
        name: `Mohammed Shan`,
        role: 'Developer - Web Development',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/mohammed-shan-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/mohammed-shan-/`,
        website: `https://github.com/Shhaan`,
    },
    {
        name: `Nadine Nakamura`,
        role: '2D Artist - Indie Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/nadine-nakamura-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/nadine-nakamura-a44195273/`,
        website: `https://www.behance.net/nadinenakamura/projects`,
    },
    {
        name: `Nadya Pakhomova`,
        role: '2D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/nadya-pakhomova-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/nadya-pakhomova/`,
        website: `https://www.artstation.com/nadyapakhomova`,
    },
    {
        name: `Najee Jackson`,
        role: 'Developer - Indie Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/najee-jackson-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/najee-jackson-5312a5253/`,
        website: `https://najeejacksonportfolio.wordpress.com/`,
    },
    {
        name: `Nanxiang Wang`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/nanxiang-wang-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/nanxiang-wang-174014204/`,
        website: `https://nwang.artstation.com/`,
    },
    {
        name: `Natalia Wozniakowska`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/natalia-wozniakowska-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/natalia-wozniakowska-816411252/`,
        website: `https://www.artstation.com/natwska`,
    },
    {
        name: `Nisha Kabra`,
        role: 'Graphic Designer - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/nisha-kabra-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/nishakabradesign/`,
        website: `https://kabranisha2.wixsite.com/nishakabra`,
    },
    {
        name: `Nithin Dhananjayan`,
        role: 'Mentor',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/nithin-dhananjayan-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/nithin-dhananjayan-2729853/`,
        website: null,
    },
    {
        name: `Noah King`,
        role: '2D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/noah-king-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/nkingart/`,
        website: `https://nking-art.webflow.io/`,
    },
    {
        name: `Noemi Ponciroli`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/noemi-ponciroli-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/noemiponciroli/`,
        website: `https://www.artstation.com/noemiponciroli`,
    },
    {
        name: `Nolan Krames`,
        role: 'Operational Manager',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/nolan-krames-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/nolan-krames/`,
        website: `https://www.nolankrames.com/`,
    },
    {
        name: `Oleksandr Reznykov`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/oleksandr-reznykov-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/oleksandr-reznykov-2a2b51241/`,
        website: `https://www.artstation.com/stingovich`,
    },
    {
        name: `Olivia Chen`,
        role: '2D Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/olivia-chen-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/olivia-chen-4833b110a/`,
        website: `https://www.artstation.com/ochenart`,
    },
    {
        name: `Parker Lee`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/parker-lee-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/parker-lee-910549278/`,
        website: `https://www.artstation.com/parkerlee3`,
    },
    {
        name: `Pedro Cosme`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/pedro-cosme-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/pedrocosme/`,
        website: `https://www.artstation.com/pedrocosme/albums/7952732`,
    },
    {
        name: `Paulina Procel`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/paulina-procel-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/paulinaprocelosuna/`,
        website: `https://www.artstation.com/pau_procel`,
    },
    {
        name: `Rama Bit`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/rama-bit-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/rama-bit-236126186/`,
        website: `https://www.artstation.com/sonicfanx1`,
    },
    {
        name: `Rex Kovacs`,
        role: '2D Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/rex-kovacs-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/rex-kovacs-b0a765198/`,
        website: `https://alexkovacs247.wixsite.com/rexkovacs`,
    },
    {
        name: `Robert Ehteshamzadeh`,
        role: 'Mentor',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/robert-ehteshamzadeh-1.png`,
        linkedIn: `https://www.linkedin.com/in/rje4242/`,
        website: `https://github.com/rje4242`,
    },
    {
        name: `Robert Thomason`,
        role: 'Composer - Audio Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/robert-thomason-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/robert-thomason-0a14936a/`,
        website: null,
    },
    {
        name: `Roda Na`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/roda-na-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/roda-na-hyemin-kim-049433226/`,
        website: `https://rodana.artstation.com/`,
    },
    {
        name: `Romeo Mills`,
        role: 'Narrative Designer - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/romeo-mills-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/romeo-mills-259a30258/`,
        website: `https://omeon47.wixsite.com/mysite`,
    },
    {
        name: `Ryan Beattie`,
        role: 'Developer - Indie Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/ryan-beattie-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/ryan-beattie-32a35439/`,
        website: `https://www.ryanbeattie.net/`,
    },
    {
        name: `Ryan Casal`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/ryan-casal-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/ryan-casal-3dmodeling/`,
        website: `https://rcasal.weebly.com/`,
    },
    {
        name: `Ryan Horton`,
        role: 'Level Designer - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/ryan-horton-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/ryan-horton-b95240271/`,
        website: `https://hortonryan579.wixsite.com/my-site-1`,
    },
    {
        name: `Ryle Sammut`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/ryle-sammut-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/ryle-sammut-a922ba200/`,
        website: `https://www.rylesammut.com/`,
    },
    {
        name: `Sarish Chavan`,
        role: 'Developer- Web Development',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/sarish-chavan-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/sarishrchavan/`,
        website: `https://www.sarishchavan.com/`,
    },
    {
        name: `Shad Wilde`,
        role: '2D Animator - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/shad-wilde-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/shad-wilde-bba31482/`,
        website: `https://www.linkedin.com/in/shad-wilde-bba31482/`,
    },
    {
        name: `Smayaan Marwah`,
        role: 'Project Manager - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/smayaan-marwah-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/smayaan-marwah/`,
        website: `https://www.smayaanmarwah.com/`,
    },
    {
        name: `Sophia Ngo`,
        role: 'Designer - Davis Dot',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/sophia-ngo-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/sophia-ngo15/`,
        website: `https://sophiango15.wixsite.com/sophia-ngo`,
    },
    {
        name: `Sounak Kundu`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/sounak-kundu-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/sounak-kundu-995b69225/`,
        website: `https://www.artstation.com/sounak`,
    },
    {
        name: `Thomy Alifonso`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/thomy-alifonso-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/thomy-alifonso/`,
        website: `https://www.artstation.com/thomyalifonso`,
    },
    {
        name: `Trevor Bates`,
        role: '3D Animator - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/trevor-bates-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/trevor-bates-26548a223/`,
        website: `https://www.trevorbatesanimation.com/`,
    },
    {
        name: `Trinity Ahumada`,
        role: '2D Animator - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/trinity-ahumada-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/trinity-ahumada-285271275/`,
        website: `https://trinityahumada.wixsite.com/website`,
    },
    {
        name: `Tristan Dunlop`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/tristan-dunlop-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/tristan-dunlop`,
        website: `https://tristandunlop.com`,
    },
    {
        name: `Uros Mihic`,
        role: '3D Animator - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/uros-mihic-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/uros-mihic/`,
        website: `https://urosmihic.ca/`,
    },
    {
        name: `Viola Di Dilvestre`,
        role: '2D Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/viola-di-silvestre-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/viola-di-silvestre-6401242a2/`,
        website: `https://violadisilvestre.myportfolio.com/`,
    },
    {
        name: `Vladyslav Guba`,
        role: 'Developer - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/vladyslav-guba-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/vladyslav-guba-95663420b/`,
        website: `https://github.com/vladguba`,
    },
    {
        name: `Weena Young Oh`,
        role: 'Writer - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/weena-oh-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/weenayoungoh/`,
        website: `https://www.weenayoungoh.com/`,
    },
    {
        name: `William Clevenger`,
        role: 'Developer - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/william-clevenger-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/iamwill-i-am13/`,
        website: `https://www.williamclevenger.com/`,
    },
    {
        name: `William Trang`,
        role: 'Developer - Web Development',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/william-trang-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/williamtrang/`,
        website: `https://github.com/williamtrang`,
    },
    {
        name: `Yaxin Mu`,
        role: '2D Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/yaxin-mu-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/yaxin-mu-9533b721b/`,
        website: `https://www.artstation.com/yaxinm`,
    },
    {
        name: `Yihong Li`,
        role: 'Developer - Web Development',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/yihong-li-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/yihongli12/`,
        website: `https://github.com/yihli`,
    },
    {
        name: `Yulia Kodlubai`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/yulia-kodlubai-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/yuliakodlubai/`,
        website: `https://www.artstation.com/yulia_kodlubai`,
    },
    {
        name: `Zachary Selsley`,
        role: 'Developer - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/zachary-selsley-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/zachary-selsley/`,
        website: `https://github.com/Tanuki3017`,
    },
    {
        name: `Zoe Benn`,
        role: '3D Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/zoe-benn-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/zoe-benn-ba15941b8/`,
        website: `https://www.artstation.com/ghostlyzenn`,
    },
    {
        name: `Zofia Paez`,
        role: '2D Concept Artist - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/zofia-paez-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/zofia-paez-3b08a7297/`,
        website: `https://www.artstation.com/zofiapz`,
    },
];
