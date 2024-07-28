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
export async function getProjectData(){

    //  Temporarily we have created an array of objects to represent projects
    //  Eventually this will be replaced with a backend api call. The object is just here to give you a structure
    //  Title, logo, and link must always be rendered, other objects must only be rendered if they exist, if not skip them.

    return [
        {
            title: 'Coming Soon',
            // Random image of a pumpkin for now, ensure it is wrapped in a MUI avatar
            logo: 'https://www.creativefabrica.com/wp-content/uploads/2022/03/30/Building-Construction-Graphics-28094997-1.png',
            link: '/',
            description: 'Project details coming soon!',
        },
        {
            title: 'Coming Soon',
            // Random image of a pumpkin for now, ensure it is wrapped in a MUI avatar
            logo: 'https://www.creativefabrica.com/wp-content/uploads/2022/03/30/Building-Construction-Graphics-28094997-1.png',
            link: '/',
            description: 'Project details coming soon!',
        },
    ];
}