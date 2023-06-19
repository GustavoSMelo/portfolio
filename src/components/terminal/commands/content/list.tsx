import { IList } from '../../../../types/interface/components/list.interface';
import { About, Education, Experience, SocialMedia, Version, Help, Personal } from '../exports';
import Theme from './theme';

const returnCommandList = (): IList[] => {
    return [
        {
            name: 'help',
            description: 'List all commands available',
            component: <Help />,
        },
        {
            name: 'version',
            description: 'Show version information',
            component: <Version />,
        },
        {
            name: 'gui',
            description: 'Open the website using graphic user interface',
            component: <p>teste</p>,
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
        // {
        //     name: 'theme',
        //     description: 'Change the theme',
        //     component: () => <Theme />
        // },
    ];
};

export default returnCommandList;
