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
        website: null,
    },
    {
        name: `Andrea Salonga`,
        role: 'Designer',
        profilePicture: null,
        linkedIn: `https://www.linkedin.com/in/andrea-salonga-4a9a1b161/`,
        website: `https://sites.google.com/view/andreasalonga-portfolio/home?authuser=1`,
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
        profilePicture: null,
        linkedIn: `https://www.linkedin.com/in/anthony-martos/`,
        website: `https://anthonymartossound.com/`,
    },
    {
        name: `Benjamin Nelson`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/ben-nelson-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/benjamin-nelson-77883618b/`,
        website: `https://github.com/bnelson1324/`,
    },
    {
        name: `Bledine Ngunte`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/bledine-ngunte-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/bledine-messa/`,
        website: null,
    },
    {
        name: `Brenda Do`,
        role: 'Designer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/brenda-do-2.jpg`,
        linkedIn: `http://linkedin.com/in/brenda-do-90b404235`,
        website: `https://brendado.wixsite.com/portfolio`,
    },
    {
        name: `Carlos Redondo Rubio`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/carlos-redondo-2.jpg`,
        linkedIn: `http://www.linkedin.com/in/carlos-redondo-7732b5166`,
        website: null,
    },
    {
        name: `Chiu-Ssu Hsieh`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/chiu-ssu-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/chiu-ssu-hsieh/`,
        website: null,
    },
    {
        name: `Cole Scott`,
        role: '3D Artist',
        profilePicture: null,
        linkedIn: `https://www.linkedin.com/in/colemscott/`,
        website: null,
    },
    {
        name: `Dylan Wheeler`,
        role: 'Character Animator',
        profilePicture: null,
        linkedIn: `https://www.linkedin.com/in/dylan-wheeler-43931b204/`,
        website: `https://artism31.wixsite.com/dylan-wheeler-animat`,
    },
    {
        name: `Dorothy Le`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/dorothy-le-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/dorothykle/`,
        website: null,
    },
    {
        name: `Evan Wanamaker`,
        role: 'Game Developer',
        profilePicture: null,
        linkedIn: `https://www.linkedin.com/in/evanwanamaker/`,
        website: null,
    },
    {
        name: `Evan Schneiderman`,
        role: 'Marketing',
        profilePicture: null,
        linkedIn: `https://www.linkedin.com/in/evan-schneiderman-061340141/`,
        website: null,
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
        profilePicture: null,
        linkedIn: `https://github.com/Honghui-Li-8`,
        website: null,
    },
    {
        name: `Jaden Yang`,
        role: 'Project Lead - Web Development',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/jaden-yang-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/jaden-yang-8a75ab222/`,
        website: null,
    },
    {
        name: `Jake Connors`,
        role: '3D Artist',
        profilePicture: null,
        linkedIn: `https://www.linkedin.com/in/jake-connors-b195b822a/`,
        website: null,
    },
    {
        name: `Johanna Moreno`,
        role: 'Designer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/johanna-moreno-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/johannacmoreno/`,
        website: `https://johannamorenodesign.com/`,
    },
    {
        name: `John Overton`,
        role: 'Team Lead, Project Lead - Mobile Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/john-overton-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/johnovertonid/`,
        website: `https://github.com/4554551NX`,
    },
    {
        name: `Joyel Joseph`,
        role: 'Project Lead - Davis Dot',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/joyel-joseph-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/joyel-joseph-7772252b6/`,
        website: `https://joejoseph6.wixsite.com/joyel`,
    },
    {
        name: `Karan Binning`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/karan-binning-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/karan-binning/`,
        website: null,
    },
    {
        name: `Karim Abou-Seido`,
        role: 'Developer, Sound Designer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/karim-abou-seido-1.jpg`,
        linkedIn: `http://www.linkedin.com/in/karim-abou-seido-ba7b0830a/`,
        website: `https://github.com/karimabouseido`,
    },
    {
        name: `Kristi Eckert`,
        role: 'Project Lead - Mobile Games Division',
        profilePicture: null,
        linkedIn: `https://www.linkedin.com/in/kristi-rose-eckert/`,
        website: `https://kristi-eckert.com/`,
    },
    {
        name: `Kyle Dundas`,
        role: '3D Artist',
        profilePicture: null,
        linkedIn: `https://www.linkedin.com/in/kyle-dundas/`,
        website: `https://kdundas2025.wixsite.com/kyle-dundas`,
    },
    {
        name: `Maanit Shah`,
        role: 'Developer',
        profilePicture: null,
        linkedIn: `http://www.linkedin.com/in/maanit-shah`,
        website: `https://github.com/maanitshah25`,
    },
    {
        name: `Marc Paolo Yap`,
        role: 'Developer',
        profilePicture: null,
        linkedIn: `https://www.linkedin.com/in/marc-paolo-yap/`,
        website: null,
    },
    {
        name: `Michelle Aung`,
        role: 'Designer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/michelle-aung-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/michelle-aung/`,
        website: `https://www.michelleaung.com/`,
    },
    {
        name: `Michelle Mendoza`,
        role: 'Designer',
        profilePicture: null,
        linkedIn: `http://linkedin.com/in/mimendoza02`,
        website: null,
    },
    {
        name: `Miles Stevenson`,
        role: 'IT Technician',
        profilePicture: null,
        linkedIn: `https://www.linkedin.com/in/miles-stevenson-334baa300/`,
        website: null,
    },
    {
        name: `Minh Pham`,
        role: 'Developer',
        profilePicture: null,
        linkedIn: null,
        website: null,
    },
    {
        name: `Nahom Yoseph`,
        role: 'Project Lead - Start-Up App',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/nahom-yoseph-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/nahom-yoseph/`,
        website: null,
    },
    {
        name: `Naomi Zhao`,
        role: 'Developer',
        profilePicture: null,
        linkedIn: `https://www.linkedin.com/in/naomi-zhao-b80375253/`,
        website: `https://github.com/naomitzhao`,
    },
    {
        name: `Nate Tam`,
        role: 'Narrative Designer',
        profilePicture: null,
        linkedIn: `https://www.linkedin.com/in/nate-tam-writing/`,
        website: null,
    },
    {
        name: `Nicolas Holasek`,
        role: 'Project Lead - Indie Games Division',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/nicolas-holasek-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/nicolas-holasek/`,
        website: null,
    },
    {
        name: `Nithin Dhananjayan`,
        role: 'Developer',
        profilePicture: null,
        linkedIn: `https://www.linkedin.com/in/nithin-dhananjayan-2729853/`,
        website: null,
    },
    {
        name: `Nithin Senthil`,
        role: 'Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/nithin-senthil-1.jpg`,
        linkedIn: `http://www.linkedin.com/in/nithin-senthil`,
        website: `https://github.com/nithinsenthil`,
    },
    {
        name: `Patrick Nguyen`,
        role: 'Developer',
        profilePicture: null,
        linkedIn: `https://www.linkedin.com/in/patrickhcnguyen/`,
        website: null,
    },
    {
        name: `Rani Saro`,
        role: 'Developer',
        profilePicture: null,
        linkedIn: `https://www.linkedin.com/in/ranisaro/`,
        website: `http://ranisaro.tech/`,
    },
    {
        name: `Robert Ehteshamzadeh`,
        role: 'Project Lead - Web Development and CalShare',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/robert-ehteshamzadeh-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/rje4242/`,
        website: `https://github.com/rje4242`,
    },
    {
        name: `Rutuja Abhijit Kale`,
        role: 'Developer',
        profilePicture: null,
        linkedIn: `http://www.linkedin.com/in/rutuja-abhijit-kale`,
        website: null,
    },
    {
        name: `Shad Wilde`,
        role: '2D Animator',
        profilePicture: null,
        linkedIn: `https://www.linkedin.com/in/shad-wilde-bba31482/`,
        website: `https://www.linkedin.com/in/shad-wilde-bba31482/`,
    },
    {
        name: `Sophia Ngo`,
        role: 'Designer',
        profilePicture: null,
        linkedIn: `https://www.linkedin.com/in/sophia-ngo15/`,
        website: null,
    },
    {
        name: `Taira Asakura`,
        role: 'Designer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/taira-asakura-1.jpg`,
        linkedIn: `https://www.linkedin.com/in/taira-asakura/`,
        website: `https://tairaasakura.com/`,
    },
    {
        name: `Trevor Bates`,
        role: '3D Animator',
        profilePicture: null,
        linkedIn: `https://www.linkedin.com/in/trevor-bates-26548a223/`,
        website: null,
    },
    {
        name: `Trung Vo`,
        role: 'Designer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/trung-vo-2.jpg`,
        linkedIn: `https://www.linkedin.com/in/trung--vo/`,
        website: `https://trungvo.info`,
    },
    {
        name: `Veronica Dequez`,
        role: 'Sound Designer',
        profilePicture: null,
        linkedIn: `https://linkedin.com/in/veronica-duquez`,
        website: `https://vduquez01.wixsite.com/veronica-duquez`,
    },
    {
        name: `Vijit Dua`,
        role: 'Project Lead - Web Development and Davis Dot',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/vijit-dua-1.jpg`,
        linkedIn: `https://linkedin.com/in/vijitdua`,
        website: `https://vijitdua.com/socials`,
    },
    {
        name: `Vinh Nguyen`,
        role: 'Project Lead - Start-Up App, Developer',
        profilePicture: `${process.env.PUBLIC_URL}/profile-images/vinh-nguyen-1.jpg`,
        linkedIn: `http://linkedin.com/in/npvin`,
        website: null,
    },
];
