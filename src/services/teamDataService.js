export const getTeamMembers = async () => {
    try {
        // Fetch the file directly from the public folder
        const response = await fetch(`${process.env.PUBLIC_URL}/team.json`);
        const data = await response.json();
        
        // Map over the members to format the image URL, just like before
        return data.members.map((member) => ({
            ...member,
            profilePicture: `${process.env.PUBLIC_URL}${member.profilePicture}`
        }));
    } catch (error) {
        console.error("Error fetching team data:", error);
        return [];
    }
};