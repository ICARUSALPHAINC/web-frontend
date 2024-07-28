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