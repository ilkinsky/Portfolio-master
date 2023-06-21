export default async(req, res) => { 
    const techs = [
        {
            "name": "HTML",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
        },
        {
            "name": "CSS",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
        },
        
        {
            "name": "Javascript",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        },
        {
            "name": "Bootstrap",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg",
        },
        {
            "name": "Jquery",
            "src": "https://caglarbostanci.com.tr/wp-content/uploads/2017/06/jquery-kucuk-icerik-caglarbostanci-com-tr.png",
        },
        {
            "name": "Java",
            "src": "https://s2.studylib.net/store/data/005614536_1-7fe406f737aae0b27d711a55628218e9-768x994.png",
        },
        {
            "name": "Python",
            "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
        },
        {
            "name": "Git",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
        },
        
        {
            "name": "Github",
            "src": "https://i.pinimg.com/736x/b1/5e/ed/b15eedbdafbbdbca3249e3942f4faf3b.jpg",
        },

        

    ]
    res.status(200).json(techs)
}