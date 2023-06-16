import Help from "./help"

const returnCommandList = () => {
   return [
        {
            name: "help",
            description: "List all commands available",
            component: <Help />
        },
        {
            name: "version",
            description: "Show version information",
            component: <p>teste</p>
        },
        {
            name: "gui",
            description: "Open the website using graphic user interface",
            component: <p>teste</p>
        },
        {
            name: "about",
            description: "Show a short description of me",
            component: <p>teste</p>
        },
        {
            name: "education",
            description: "Show all my academic education information",
            component: <p>teste</p>
        },
        {
            name: "experience",
            description: "Show all my professional experience information",
            component: <p>teste</p>
        },
        {
            name: "socialmedia",
            description: "Show all social media available",
            component: <p>teste</p>
        },
        {
            name: "personal",
            description: "Show some personal information, likes my hoobies, series/animes/cartoons/movies I am watching and etc",
            component: <p>teste</p>
        },
        {
            name: "clear",
            description: "Clear the terminal",
            component: <></>
        },
        {
            name: "contact",
            description: "Enter in contact with me",
            component: <p>teste</p>
        }
    ]
}

export default returnCommandList;
