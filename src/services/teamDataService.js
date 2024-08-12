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
            specificRole: '',
            profileImage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
            profileLink: '/', // This can be linked in or any other link we choose
            bio: 'Details of the members of our team are coming soon!',
        },
        {
            name: 'Coming soon',
            specificRole: '',
            profileImage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
            profileLink: '/', // This can be linked in or any other link we choose
            bio: 'Details of the members of our team are coming soon!',
        },
        {
            name: 'Coming soon',
            specificRole: '',
            profileImage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
            profileLink: '/', // This can be linked in or any other link we choose
            bio: 'Details of the members of our team are coming soon!',
        },
        {
            name: 'Coming soon',
            specificRole: '',
            profileImage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
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
            const role = fetchedData.role;
            const specificRole = fetchedData?.specificRole || null; // TODO: Add type check for 'developer' | 'designer' | 'operations' | 'finance'
            const profileImage = fetchedData.profileImage;
            const profileLink = fetchedData?.profileLink || null;
            const bio = fetchedData?.bio || null;
            translatedMemberData.push({name: name, role: role, specificRole: specificRole, profileImage: profileImage, profileLink: profileLink, bio: bio});
        });

        return fetchedData; 
    } catch(error){
        return [{error: 'Error fetching data, please try again later'}];
    }
}