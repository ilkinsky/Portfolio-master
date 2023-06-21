export default async(req, res) => { 
    const project = [
        {
            "name": "Frozexxn.netlify.app",
            "link": "https://cdn.discordapp.com/attachments/994950277406916638/1120764808086687794/image.png",
            "description": "This is my other site",
            "html_url": "https://ringoffires.com"
        },
        {
            "name": "Computer sales",
            "link": "https://cdn.discordapp.com/attachments/994950277406916638/1120765026261794988/image.png",
            "description": "I put this site together for a project.",
            "html_url": "https://frozenn.netlify.app/"
        },
        {
            "name": "Country information",
            "link": "https://cdn.discordapp.com/attachments/994950277406916638/1120766277175218268/image.png",
            "description": "Its my first site.",
            "html_url": "country-informationss.netlify.app"
        }
    ]
    res.status(200).json(project)
}
