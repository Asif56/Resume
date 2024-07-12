// import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import WebIcon from '@mui/icons-material/Web';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import Christmas from '../assets/images/Christmas.png'
import Google from '../assets/images/Google.png'
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import Diwali from '../assets/images/Dewali.png'
import BERN_1 from '../assets/images/BERN_1.png'
import BERN_2 from '../assets/images/BERN_2.png'
import image from '../assets/images/profileImage.jpg'

export default {
    name: 'Asif Malik',
    title: 'Full Stack Web Developer',
    
    birthday: '15-Dec-1997',
    email: 'asif56175@gmail.com',
    address: 'Delhi, NCR',
    phone: '9528263200',
    image,

    socials: {
        LinkedIn: {
            link: 'https://www.linkedin.com/in/asifmalik56175/',
            text: 'MyLinkedIn',
            icon: <LinkedInIcon />,
        },
        Github: {
            link: 'https://github.com/Asif56',
            text: 'MyGithub',
            icon: <GitHubIcon />,
        },


    },
    about: "Enthusiastic Web Developer eager to contribute to team success through hard work, attention to detail.A clear understanding of ReactJs and NodeJs. Motivated to learn, grow and excel in learning new things.",
    
    experiance:[
        {
            title:'Telus International',
            date:'05/2022 - 12/2023',
            description:["Worked on internal web aplication, involving the refunding of client funds for specified reasons determined by the client The process depended on the agent's negotiation with client, and applied offers and taxes specific to the client's regions. And created some other component such as Adding links to Kabab menu, updating the language.",
        "Worked on Customer Journey, a Reporting tool of Smart IVR, which helps to demonstrate the number of valid inbound and outbound calls handled by agents over time by Representing the reports of all possible diversion intent calls via charts, graphs and tables.",
        "Worked on creating packages of UI common components by storybook like Text, Card, Form, Labels, Tooltips etc."],

        },
        {
            title:'Impetus Technologies Pvt.Ltd',
            date:'06/2021 - 05/2022',

            description:["Worked on REST API simulator which is a platform that can be used to plug to any project with mock data. User is able to create multiple mocks services on the air and able to use them in their new or existing project and be able to doing CRUD operation with the help of Mock APIs.",
            "Create a web app for the Canteen Management System where users can register and buy items from the CMS. This web app also includes a payment gateway, allowing users to add money to their wallet. Other features include sorting, pagination, and searching of items list tables with authorization and authentication.",
            "A react app with server-side rendering application where user can look at any news with respect to any country or by searching news. There is used of localization functionality."]
        },
        {
            title:'BoticX Labs',
            date:'05/2020 - 04/2021',
            description:["Design and Develop a website for an AI based product from scratch that can extract textual information from any documents (pdf/scanned or image). And also added functionality where user can extract the text of selected portions on document.",
        "Build Backend in NodeJs to communicate with the AI Engine that will process the documents.",
        "Design and Develop a web interface to control and manage a robot and visualize the map and location of the moving robot on a web page using ReactJs and Roslibjs library.",
         "Use Roslibjs and ROS Bridge for managing data sharing between Robot and Web Interface by publishing and subscribing data on the specific nodes."],

        }
    ],

    education:[
        {
            title:'B.Tech',
            date:'2015-2019',
            description:"Meerut Institute of Technology, Meerut, 62.5%"
        },
        {
            title:'Intermediate',
            date:'2013-2015',
            description:"S.F.D.A.V. Public School, Muzaffarnagar, 70.8%."
        },
        {
            title:'High School',
            date:'2011-2013',
            description:"S.F.D.A.V. Public School, Muzaffarnagar, 7.8 CGPA."
        },
    ],
    service:[
        {
            title:"Web Developement",
            description:'I have been working on web developemt for 3.5 years as MERN.',
            icon:<WebIcon/>
        },
        {
            title:"Blockchain",
            description:'I have been working on Blockchain for 1 year.',
            icon:<CurrencyBitcoinIcon/>
        },
        {
            title:"Fast Delivery",
            description:'I deliver your buisness as fast as possible.',
            icon:<ScheduleSendIcon/>
        }
    ],
    skill:[
        {
            title:'FRONT-END',
            description:[
                "ReactJs",
                "Redux",
                "HTML/CSS",
                "JavaScript",
                'Typescript',
                'NextJs',
                'Enzyme/Jest'
            ],
            
        },
        {
            title:'BECK-END',
            description:[
                'NodeJs',
                'Express',
                'Webpack',
                'MongoDB',
                'MySQL/SQL',

            ],
            
        },
        {
            title:'OTHERS SKILLS',
            description:[
                'GraphQL',
                'Socket.IO',
                'Tailwind CSS',
                'GSAP',
                'GIT',
                'Three.js',
                "Material-Ui/bootstrap",
            
            ],
            
        },
        
        {
            title:'BLOCKCHAIN',
            description:[
                'Solidity',
                'Ether/Web3',
                'NFT',
                "Hardhat/Truffle"
            ],
            
        },
    ],
    projects:[
        {
            tag:['HTML','GSAP','CSS'],
            image:[`${Diwali}`],
            title:"Diwali",
            caption:'Sparks of joy, lights of hope. Happy Diwali!',
            description:"Sparks of joy, lights of hope. Happy Diwali!",
            links:[
                {link:"https://asif56.github.io/Diwali", icon:<LanguageIcon/>},
                {link:"https://github.com/Asif56/Diwali", icon:<GitHubIcon/>}

            ]
        },
        {
            tag:['HTML','CSS',"Three.JS"],
            image:[`${Christmas}`],
            title:"Christmas",
            caption:'Fill your heart with love, joy, and peace. Merry Christmas!',
            description:"Fill your heart with love, joy, and peace. Merry Christmas!",
            links:[
                {link:"https://asif56.github.io/christmasDay", icon:<LanguageIcon/>},
                {link:"https://github.com/Asif56/christmasDay", icon:<GitHubIcon/>}

            ]
        },
        {
            tag:["ReactJs",'CSS'],
            image:[`${Google}`],
            title:"Google Clone",
            caption:'With the ability to search for up-to-date results.',

            description:"With the ability to search for up-to-date results.",
            links:[
                {link:"https://clone-73b79.web.app/", icon:<LanguageIcon/>},
                {link:"https://github.com/Asif56/google1", icon:<GitHubIcon/>}

            ]
        },
        {
            tag:['Blockchain','ReactJs','NodeJs','Solidity'],
            image:[`${BERN_1}`,`${BERN_2}`],
            title:"TODO 3.0 Decentralize app",
            caption:"A simple mordern to-do list Dapp with features like due dates and tasks'proiority.",
            description:"A simple mordern to-do list Dapp with features like due dates and tasks'proiority.",
            links:[
                {link:"https://fantastic-frangollo-2a1c7c.netlify.app/", icon:<LanguageIcon/>},
                {link:"https://github.com/Asif56/BERN", icon:<GitHubIcon/>}

            ]
        },
    ]
};