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
            title: 'A cool project',
            // Random image of a pumpkin for now, ensure it is wrapped in a MUI avatar
            logo: 'https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699',
            link: 'https://just-an-example-url.icarusdevteam.com',
            description: 'About of the cool project',
        },
        {
            title: '2 A cool project',
            // Random image of a pumpkin for now, ensure it is wrapped in a MUI avatar
            logo: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
            link: 'https://just-an-example-url-two.icarusdevteam.com',
            description: '2 About of the cool project',
        },

    ];
}