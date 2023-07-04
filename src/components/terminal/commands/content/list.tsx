import { IList } from '../../../../types/interface/components/list.interface';
import { About, Education, Experience, SocialMedia, Help, Personal, Gui, Theme, Contact } from '../exports';

const returnCommandList = (): IList[] => {
    return [
        {
            name: 'help',
            description: 'List all commands available',
            component: <Help />,
        },
        {
            name: 'gui',
            description: 'Open the website using graphic user interface',
            component: <Gui />,
        },
        {
            name: 'about',
            description: 'Show a short description of me',
            component: <About />,
        },
        {
            name: 'education',
            description: 'Show all my academic education information',
            component: <Education />,
        },
        {
            name: 'experience',
            description: 'Show all my professional experience information',
            component: <Experience />,
        },
        {
            name: 'socialmedia',
            description: 'Show all social media available',
            component: <SocialMedia />,
        },
        {
            name: 'personal',
            description:
                'Show some personal information, likes my hoobies, series/animes/cartoons/movies I am watching and etc',
            component: <Personal />,
        },
        {
            name: 'clear',
            description: 'Clear the terminal',
            component: <></>,
        },
        {
            name: 'theme',
            description: 'Change the theme',
            component: <Theme />
        },
        {
            name: 'contact',
            description: 'Enter in contact with me by whatsapp (open automatically the whatsapp)',
            component: <Contact />
        }
    ];
};

export default returnCommandList;
