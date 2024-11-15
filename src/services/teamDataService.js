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
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/adit-khandelwal-2.jpg`,
        linkedIn: `linkedin.com/in/aditkhandelwal/`,
        website: `https://aditk.com`,
    },
    {
        name: `Aida Yuan`,
        role: 'Designer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/aida-yuan-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/aida-yuan-a451622a4/`,
        website: `https://moonjaa.wixsite.com/aida-portfolio`,
    },
    {
        name: `Akilan Babu`,
        role: 'Project Lead - StenoStudy',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/akilan-babu-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/akilan-babu/`,
        website: `https://github.com/wertyyyy12`,
    },
    {
        name: `Alejandro Garibay`,
        role: 'Sound Designer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/alejandro-garibay-1.jpg`,
        linkedIn: `www.linkedin.com/in/garibaysoundproductions`,
        website: 'https://drive.google.com/file/d/1DcV_TPrIaIrWVix81YS6HWFTT0SqoFAc/view?usp=sharing',
    },
    {
        name: `Alex Jr Chau`,
        role: 'Designer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/alex-jr-chau-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/alex-jr-chau-a4bb931ba/`,
        website: `https://alexjrchau.notion.site/Portfolio-37043d752d864df7a00cd7ebe9a82cd1`,
    },
    {
        name: `Alex Miller`,
        role: 'Project Lead - Indie Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/alex-miller-1.jpg`,
        linkedIn: `http://www.linkedin.com/in/alex-miller-cslin/`,
        website: `https://github.com/alxmiller0451`,
    },
    {
        name: `Alex Yuang Chen`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/alex-yuang-chen-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/yuang-chen-b28b2830b`,
        website: `https://github.com/AlexAlexChen`,
    },
    {
        name: `Alexis Lydon`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/alexis-lydon-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/alexis-lydon-477498223/`,
        website: `https://github.com/alexisbl14`,
    },
    {
        name: `Alice Liu`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/alice-liu-2.jpg`,
        linkedIn: `https://linkedin.com/in/alice-liu-21b2a4268`,
        website: null,
    },
    {
        name: `Andrea Salonga`,
        role: 'Project Lead - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/andrea-salonga-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/andrea-salonga-4a9a1b161/`,
        website: `https://sites.google.com/view/andreasalonga-portfolio/home?authuser=1`,
    },
    {
        name: `Andrew Davidson`,
        role: 'Concept Artist',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/andrew-davidson-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/andrew-davidson-534375130/`,
        website: `https://aforangers.wixsite.com/andrewdavidsoniii`,
    },
    {
        name: `Andrew McLane`,
        role: 'Game Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/andrew-mclane-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/andrew-mclane-app-game-developer`,
        website: `https://github.com/GlutenPlasters`,
    },
    {
        name: `Anthony Casillas`,
        role: 'Project Lead - Marketing',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/anthony-casillas-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/anthony-casillas-05015023b/`,
        website: null,
    },
    {
        name: `Anthony Martos`,
        role: 'Project Lead - Audio Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/anthony-martos-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/anthony-martos/`,
        website: `https://anthonymartossound.com/`,
    },
    {
        name: `Arthur Liono`,
        role: '2D Animator',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/arthur-liono-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/arthur-t-liono-a85aaa218/`,
        website: `https://arthurtimothyliono.wixsite.com/portfolio`,
    },
    {
        name: `Axel Luis Servin`,
        role: 'Sound Designer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/Axel-Gomez-Servin.png`,
        linkedIn: `https://www.linkedin.com/in/axel-luis-gomez-servin-9979a5220/`,
        website: `https://axelgomezservinaudio.weebly.com/`,
    },
    {
        name: `Benjamin Nelson`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/ben-nelson-4.jpg`,
        linkedIn: `https://www.linkedin.com/in/benjamin-nelson-77883618b/`,
        website: `https://github.com/bnelson1324/`,
    },
    {
        name: `Blase Henry`,
        role: 'Game Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/blase-henry-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/blase-henry-510935137/`,
        website: `https://blasesportfolio.wordpress.com/`,
    },
    {
        name: `Bledine Ngunte`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/bledine-ngunte-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/bledine-messa/`,
        website: null,
    },
    {
        name: `Bryant Cachola`,
        role: '3D Artist',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/bryant-cachola-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/bryant-cachola/`,
        website: `https://www.artstation.com/bcachola`,
    },
    {
        name: `Carlos Redondo Rubio`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/carlos-redondo-2.jpg`,
        linkedIn: `http://www.linkedin.com/in/carlos-redondo-7732b5166`,
        website: null,
    },
    {
        name: `Chance Richardson`,
        role: 'Game Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/chance-richardson-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/chance-richardson-b08253263/`,
        website: `https://www.chance-richardson.com/`,
    },
    {
        name: `Christian Santos`,
        role: 'Game Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/christian-santos-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/christian-santos-b9a09622a/`,
        website: `https://github.com/MetaversePatriarch`,
    },
    {
        name: `Clay Bryner`,
        role: 'Game Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/clay-bryner-1.jpg`,
        linkedIn: `	https://www.linkedin.com/in/clay-bryner/`,
        website: `https://www.claybryner.com/portfolio`,
    },
    {
        name: `Dan Stull`,
        role: 'Game Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/dan-stull-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/dan-stull-57121379`,
        website: `https://github.com/dannysteel51`,
    },
    {
        name: `Daria Hovor`,
        role: '3D Artist',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/daria-hovor-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/daria-hovor-04a012234/`,
        website: `https://www.artstation.com/hanari_ko`,
    },
    {
        name: `Derek Simpson`,
        role: 'Game Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/derek-simpson-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/d-simpson0422/`,
        website: `https://github.com/Articunolies`,
    },
    {
        name: `Dominic Barbuto`,
        role: 'Project Lead - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/dominic-barbuto-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/dombarbuto/`,
        website: `https://www.dominicbarbuto.com/`,
    },
    {
        name: `Dongqing Zheng`,
        role: '3D Artist',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/dongqing-zheng-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/sunnyzheng0920/`,
        website: `https://sunnyzhengart.artstation.com/albums/10768936`,
    },
    {
        name: `Dorothy Le`,
        role: 'Project Overwatch, Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/dorothy-le-3.jpg`,
        linkedIn: `https://www.linkedin.com/in/dorothykle/`,
        website: `https://github.com/dorothyle`,
    },
    {
        name: `Dylan Wheeler`,
        role: '3D Animator',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/dylan-wheeler-4.jpg`,
        linkedIn: `https://www.linkedin.com/in/dylan-wheeler-43931b204/`,
        website: `https://artism31.wixsite.com/dylan-wheeler-animat`,
    },
    {
        name: `Esteban Samudio`,
        role: 'Game Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/esteban-samudio-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/esteban-samudio-079640124/`,
        website: `https://estebansamu.wixsite.com/estebansamudio`,
    },
    {
        name: `Evan Schneiderman`,
        role: 'Media',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/evan-shneiderman-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/evan-schneiderman-061340141/`,
        website: null,
    },
    {
        name: `Evan Wanamaker`,
        role: 'Writer',
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
        name: `Garmonwohn Caphart`,
        role: 'Sound Designer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/garmonwohn-caphart-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/garmonwohn-caphart-156307204/`,
        website: `http://www.gcaphartaudio.com`,
    },
    {
        name: `Griffin Decker`,
        role: 'Game Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/griffin-decker-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/griffdecker/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`,
        website: `https://griffinrdecker.wixsite.com/laggymariogames`,
    },
    {
        name: `Hari Peram`,
        role: '3D Artist',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/hari-peram-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/hari-chandra-prasad-9029a0127/`,
        website: `https://www.artstation.com/artwork/1xe3kL`,
    },
    {
        name: `Harpreet Singh`,
        role: 'Project Lead - Finance',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/harpreet-sinh-3.jpg`,
        linkedIn: `http://www.linkedin.com/in/harpreet-singh-km`,
        website: null,
    },
    {
        name: `Honghui Henry Li`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/honghui-henry-li-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/honghui-li-789b9a24a/`,
        website: `https://github.com/Honghui-Li-8`,
    },
    {
        name: `Hunter Nguyen`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/hunter-nguyen-1.jpg`,
        linkedIn: `https://linkedin.com/in/hunterhnguyen`,
        website: `https://github.com/hunter-nguyen`,
    },
    {
        name: `Jaden Yang`,
        role: 'Project Lead - Web Development',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/jaden-yang-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/jaden-yang-8a75ab222/`,
        website: 'https://jadenyang.com/',
    },
    {
        name: `Janelle Pereyda`,
        role: 'Designer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/janelle-pereyda-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/janellep3191/`,
        website: `https://www.artstation.com/sweetlemonaaade`,
    },
    {
        name: `Johanna Moreno`,
        role: 'Designer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/johanna-moreno-3.jpg`,
        linkedIn: `https://www.linkedin.com/in/johannacmoreno/`,
        website: `https://johannamorenodesign.com/`,
    },
    {
        name: `John Collera`,
        role: 'Project Manager - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/john-collera-2.jpg`,
        linkedIn: `	https://www.linkedin.com/in/johncollera/`,
        website: `https://johncollera.design/projects`,
    },
    {
        name: `John Overton`,
        role: 'Team Lead, Project Lead - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/john-overton-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/johnovertonid/`,
        website: `https://github.com/4554551NX`,
    },
    {
        name: `Johnathan Rios`,
        role: '3D Artist',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/johnathan-rios-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/johnathan-rios-4b232020b/`,
        website: `https://www.artstation.com/johnathan_rios`,
    },
    {
        name: `Jonathan Apelado`,
        role: 'Writer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/jonathan-apelado-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/jonathan-apelado`,
        website: `https://jonathanapelado.wixsite.com/jonathanapelado`,
    },
    {
        name: `Joyel Joseph`,
        role: 'Project Lead - Davis Dot',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/joyel-joseph-3.jpg`,
        linkedIn: `https://www.linkedin.com/in/joyel-joseph-7772252b6/`,
        website: `https://joejoseph6.wixsite.com/joyel`,
    },
    {
        name: `Jemma van Schalkwyk`,
        role: '3D Artist',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/jemma-van-schalkwyk-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/jemmavs/`,
        website: `https://www.artstation.com/jemmavs`,
    },
    {
        name: `Kai Jacobs`,
        role: '3D Animator',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/kai-jacobs-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/kai-jacobs-art/`,
        website: `https://www.kaijacobsart.com/`,
    },
    {
        name: `Karan Binning`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/karan-binning-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/karan-binning/`,
        website: null,
    },
    {
        name: `Kaulana Sierra`,
        role: '3D Artist',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/kaulana-sierra-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/kaulanasierra`,
        website: `https://www.artstation.com/rusticmelody`,
    },
    {
        name: `Kristi Eckert`,
        role: 'Project Lead - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/kristi-eckert-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/kristi-rose-eckert/`,
        website: `https://kristi-eckert.com/`,
    },
    {
        name: `Kyle Pummell`,
        role: 'Project Lead - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/kyle-pummell-3.jpg`,
        linkedIn: `https://www.linkedin.com/in/kyle-pummell-629992191`,
        website: `https://www.staticv01d.dev/home`,
    },
    {
        name: `Logan Wood`,
        role: 'Game Designer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/logan-wood-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/logan-wood-05320b239/`,
        website: `https://lwood012397.wixsite.com/portfolio`,
    },
    {
        name: `Liudmila Taradzei`,
        role: '3D Artist',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/liudmila-taradzei-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/liudmila-t-80b74190/`,
        website: `https://www.artstation.com/liudmila_taradzei`,
    },
    {
        name: `Maanit Shah`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/maanit-shah-2.jpg`,
        linkedIn: `http://www.linkedin.com/in/maanit-shah`,
        website: `https://github.com/maanitshah25`,
    },
    {
        name: `Madison Trembley`,
        role: 'Writer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/madison-trembley-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/madison-trembley-4537b8262/`,
        website: `https://madisontrembley.wixsite.com/madison-trembley`,
    },
    {
        name: `Marc Paolo Yap`,
        role: 'Project Lead - Davis Dot',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/marc-paolo-yap-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/marc-paolo-yap/`,
        website: `https://github.com/paoloyap22`,
    },
    {
        name: `Maria Vittoria de Martis`,
        role: '2D Artist',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/maritzell-martinez-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/maritzell-martinez-67b268181`,
        website: `https://maritzellm.carrd.co/`,
    },
    {
        name: `Maritzell Martinez`,
        role: 'Designer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/maritzell-martinez-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/spachum/`,
        website: `https://www.artstation.com/spachum`,
    },
    {
        name: `Michael Hernandez`,
        role: '2D Artist',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/michael-hernandez-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/michael-hernandez-9510491a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app`,
        website: `https://michaelhernandez157.wixsite.com/mike-h-animations`,
    },
    {
        name: `Michael Santiago`,
        role: '3D Artist',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/michael-santiago-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/michael-santiago-22a337141/`,
        website: `https://michaelsantiago.artstation.com/`,
    },
    {
        name: `Michelle Aung`,
        role: 'Designer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/michelle-aung-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/michelle-aung/`,
        website: `https://www.michelleaung.com/`,
    },
    {
        name: `Michelle Vu`,
        role: '3D Artist',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/michelle-vu-1.jpg`,
        linkedIn: `www.linkedin.com/in/michelle-vu-a3443016b`,
        website: `https://www.artstation.com/michelle_vu`,
    },
    {
        name: `Miles Stevenson`,
        role: 'IT Technician',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/miles-stevenson-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/miles-stevenson-334baa300/`,
        website: null,
    },
    {
        name: `Najee Jackson`,
        role: 'Game Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/najee-jackson-1.jpg`,
        linkedIn: `	https://www.linkedin.com/in/najee-jackson-5312a5253/`,
        website: `https://najeejacksonportfolio.wordpress.com/`,
    },
    {
        name: `Nanxiang Wang`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/nanxiang-wang-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/nanxiang-wang-174014204/`,
        website: `https://nwang.artstation.com/`,
    },
    {
        name: `Naomi Zhao`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/naomi-zhao-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/naomi-zhao-b80375253/`,
        website: `https://github.com/naomitzhao`,
    },
    {
        name: `Nicolas Holasek`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/nicolas-holasek-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/nicolas-holasek/`,
        website: `https://github.com/nholasek`,
    },
    {
        name: `Nithin Dhananjayan`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/nithin-dhananjayan-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/nithin-dhananjayan-2729853/`,
        website: null,
    },
    {
        name: `Nithin Senthil`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/nithin-senthil-3.jpg`,
        linkedIn: `http://www.linkedin.com/in/nithin-senthil`,
        website: `https://github.com/nithinsenthil`,
    },
    {
        name: `Parteek Singh`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/parteek-singh-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/prtsingh/`,
        website: `https://github.com/parteeksingh24`,
    },
    {
        name: `Patrick Nguyen`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/patrick-nguyen-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/patrickhcnguyen/`,
        website: `https://github.com/patrickhcnguyen`,
    },
    {
        name: `Piers Van Zwol`,
        role: '3D Artist',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/piers-van-zwol-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/piers-van-zwol/`,
        website: `https://piers_van_zwol.artstation.com`,
    },
    {
        name: `Rebekah Sutton`,
        role: '3D Artist',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/rebekah-sutton-1.jpg`,
        linkedIn: `	https://www.linkedin.com/in/rebekah-sutton-19a91863/`,
        website: `https://www.artstation.com/veras`,
    },
    {
        name: `Robert Ehteshamzadeh`,
        role: 'Project Lead - Web Development and CalShare',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/robert-ehteshamzadeh-4.png`,
        linkedIn: `https://www.linkedin.com/in/rje4242/`,
        website: `https://github.com/rje4242`,
    },
    {
        name: `Rutuja Abhijit Kale`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/rutuja-kale-2.jpg`,
        linkedIn: `http://www.linkedin.com/in/rutuja-abhijit-kale`,
        website: `https://github.com/rkale22`,
    },
    {
        name: `Ryan Beattie`,
        role: 'Game Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/ryan-beattie-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/ryan-beattie-32a35439/`,
        website: `https://www.ryanbeattie.net/`,
    },
    {
        name: `Ryan Nguyen`,
        role: 'Sound Designer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/ryan-nguyen-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/ryan-nguyen-481419268`,
        website: `https://www.enaudiospace.com/`,
    },
    {
        name: `Ryle Sammut`,
        role: '3D Artist',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/ryle-sammut-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/ryle-sammut-a922ba200/`,
        website: `https://www.rylesammut.com/`,
    },
    {
        name: `Shad Wilde`,
        role: '2D Animator',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/shad-wilde-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/shad-wilde-bba31482/`,
        website: `https://www.linkedin.com/in/shad-wilde-bba31482/`,
    },
    {
        name: `Sharvani Tamaskar`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/sharvani-tamaskar-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/sharvani-t/`,
        website: `https://github.com/sharvanitamaskar`,
    },
    {
        name: `Sophia Ngo`,
        role: 'Designer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/sophia-ngo-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/sophia-ngo15/`,
        website: `https://sophiango15.wixsite.com/sophia-ngo`,
    },
    {
        name: `Syon Bhavsar`,
        role: 'Game Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/syon-bhavsar-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/syon-b-48b904141`,
        website: `https://www.syonbhavsar.com/`,
    },
    {
        name: `Trevor Bates`,
        role: '3D Animator',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/trevor-bates-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/trevor-bates-26548a223/`,
        website: `https://www.trevorbatesanimation.com/`,
    },
    {
        name: `Tristan Dunlop`,
        role: '3D Artist',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/tristan-dunlop-2.jpg`,
        linkedIn: `www.linkedin.com/in/tristan-dunlop`,
        website: `https://tristandunlop.com`,
    },
    {
        name: `Vijit Dua`,
        role: 'Project Lead - Web Development',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/vijit-dua-1.jpg`,
        linkedIn: `https://linkedin.com/in/vijitdua`,
        website: `https://vijitdua.com/socials`,
    },
    {
        name: `Vinh Nguyen`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/vinh-nguyen-1.jpg`,
        linkedIn: `http://linkedin.com/in/npvin`,
        website: null,
    },
    {
        name: `Yama Hareb`,
        role: 'Concept Artist',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/yama-hareb-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/yama-hareb/`,
        website: `https://www.wildblur.com/`,
    },
    {
        name: `Yashvi Sompura`,
        role: '3D Artist',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/yashvi-sompura-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/yashvi-sompura-4370901a5`,
        website: `https://yashvi1412.artstation.com/`,
    },
    {
        name: `Zhijun Zeng`,
        role: 'Designer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/zhijun-zeng-2.jpg`,
        linkedIn: `www.linkedin.com/in/zhijunzeng`,
        website: `https://zhijunzeng.com`,
    },
    {
        name: `Zoe Benn`,
        role: '3D Artist',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/zoe-benn-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/zoe-benn-ba15941b8/`,
        website: `https://www.artstation.com/ghostlyzenn`,
    },
];