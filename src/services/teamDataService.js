/**
 * Fetches the team member data.
 *
 * @returns {Array<Object>} If successful: Array of objects where each object has the following fields:
 * - `name` (string, always present)
 * - `role` (string, always present)
 * - `specificRole` (string, sometimes present) : 'developer' | 'designer' | 'operations' | 'finance'
 * - `teamLead` (boolean, sometimes present. False if not present)
 * - `profileImage` (url string, always present)
 * - `profileLink` (url string, always present)
 * - `bio` (string, sometimes present)
 * @returns {Array<Object>} If error: Array with the first object containing an `error` field with the error description.
 */
export async function getTeamMemberData(){

    return [

        {
            name: 'Team Member 1',
            role: 'developer',
            specificRole: 'Lead Developer of Team 1',
            teamLead: true,
            // Random image of a pumpkin for now, this is a good test to ensure it is wrapped in a MUI avatar and ensure and it is rendered with a proper width and height removing extra background!
            profileImage: 'https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699',
            profileLink: 'https://just-an-example-url.icarusdevteam.com', // This can be linked in or any other link we choose
            bio: 'About the team member',
        },

        {
            name: 'Team Member 2',
            role: 'designer',
            // Random image for now, this is a good test to ensure it is wrapped in a MUI avatar and ensure and it is rendered with a proper width and height removing extra background!
            profileImage: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
            profileLink: 'https://just-an-example-url-two.icarusdevteam.com', // This can be linked in or any other link we choose
            bio: 'About the team member 2',
        },
        {
            name: 'Team Member 2',
            role: 'designer',
            // Random image for now, this is a good test to ensure it is wrapped in a MUI avatar and ensure and it is rendered with a proper width and height removing extra background!
            profileImage: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
            profileLink: 'https://just-an-example-url-two.icarusdevteam.com', // This can be linked in or any other link we choose
            bio: 'About the team member 2',
        },
        {
            name: 'Team Member 2',
            role: 'designer',
            // Random image for now, this is a good test to ensure it is wrapped in a MUI avatar and ensure and it is rendered with a proper width and height removing extra background!
            profileImage: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
            profileLink: 'https://just-an-example-url-two.icarusdevteam.com', // This can be linked in or any other link we choose
            bio: 'About the team member 2',
        },
        {
            name: 'Team Member 2',
            role: 'designer',
            // Random image for now, this is a good test to ensure it is wrapped in a MUI avatar and ensure and it is rendered with a proper width and height removing extra background!
            profileImage: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
            profileLink: 'https://just-an-example-url-two.icarusdevteam.com', // This can be linked in or any other link we choose
            bio: 'About the team member 2',
        },
        {
            name: 'Team Member 2',
            role: 'designer',
            // Random image for now, this is a good test to ensure it is wrapped in a MUI avatar and ensure and it is rendered with a proper width and height removing extra background!
            profileImage: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
            profileLink: 'https://just-an-example-url-two.icarusdevteam.com', // This can be linked in or any other link we choose
            bio: 'About the team member 2',
        },
        {
            name: 'Team Member 2',
            role: 'designer',
            // Random image for now, this is a good test to ensure it is wrapped in a MUI avatar and ensure and it is rendered with a proper width and height removing extra background!
            profileImage: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
            profileLink: 'https://just-an-example-url-two.icarusdevteam.com', // This can be linked in or any other link we choose
            bio: 'About the team member 2',
        },
        {
            name: 'Team Member 2',
            role: 'designer',
            // Random image for now, this is a good test to ensure it is wrapped in a MUI avatar and ensure and it is rendered with a proper width and height removing extra background!
            profileImage: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
            profileLink: 'https://just-an-example-url-two.icarusdevteam.com', // This can be linked in or any other link we choose
            bio: 'About the team member 2',
        },
        {
            name: 'Team Member 2',
            role: 'designer',
            // Random image for now, this is a good test to ensure it is wrapped in a MUI avatar and ensure and it is rendered with a proper width and height removing extra background!
            profileImage: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
            profileLink: 'https://just-an-example-url-two.icarusdevteam.com', // This can be linked in or any other link we choose
            bio: 'About the team member 2',
        },

    ];
}