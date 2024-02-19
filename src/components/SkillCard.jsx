import React from 'react';
import {Card, CardBody,CardFooter, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LaptopIcon from '@mui/icons-material/Laptop';
import WebIcon from '@mui/icons-material/Web';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import StorageIcon from '@mui/icons-material/Storage';


import { useTranslation } from "react-i18next";

const handleItemClick = (link) => {
    window.open(link, '_blank');
};

const iconMap = {
    phone: PhoneIphoneIcon,
    laptop: LaptopIcon,
    web: WebIcon,
    home: HomeMaxIcon,
    accountTree: AccountTreeIcon,
    storageIcon: StorageIcon
};

const dataMap = {
    phone: [
        { label: 'Flutter', image: '/technos/flutter.png', alt: 'Flutter', link: 'https://flutter.dev' },
        { label: 'Dart', image: '/technos/dart.png', alt: 'Dart', link: 'https://dart.dev' },
        { label: 'PWA', image: '/technos/pwa.png', alt: 'PWA', link: 'https://web.dev/explore/progressive-web-apps?hl=fr' },
        { label: 'Windev Mobile', image: '/technos/windev.png', alt: 'Windev Mobile', link: 'https://windev.com/windevmobile/index.html' },
    ],
    laptop: [
        { label: 'C++', image: '/technos/c++.png', alt: 'C++', link: 'https://en.wikipedia.org/wiki/C%2B%2B' },
        { label: 'C#', image: '/technos/cs.png', alt: 'C#', link: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)' },
        { label: 'Dotnet Core', image: '/technos/core.png', alt: 'Net core', link: 'https://dotnet.microsoft.com/en-us/download' },
        { label: 'Electrion JS', image: '/technos/electron.png', alt: 'Electron JS', link: 'https://www.electronjs.org' },
    ],
    web: [
        { label: 'React', image: '/technos/react.png', alt: 'React', link: 'https://react.dev' },
        { label: 'Vue', image: '/technos/vue.png', alt: 'Vue', link: 'https://vuejs.org' },
        { label: 'Vite', image: '/technos/vite.png', alt: 'Vite', link: 'https://vitejs.dev' },
        { label: 'Next', image: '/technos/next.png', alt: 'Next', link: 'https://nextjs.org' },
        { label: 'Nuxt', image: '/technos/nuxt.png', alt: 'Nuxt', link: 'https://nuxt.com' },
    ],
    home: [
        { label: 'Arduino', image: '/technos/arduino.png', alt: 'Arduino', link: 'https://www.arduino.cc' },
        { label: 'Micropython', image: '/technos/mycropython.png', alt: 'Micropython', link: 'https://micropython.org' },
        { label: 'Lora', image: '/technos/lora.png', alt: 'Lora', link: 'https://lora-alliance.org' },
        { label: 'Sigfox', image: '/technos/sigfox.png', alt: 'Sigfox', link: 'https://www.sigfox.com' },
    ],
    accountTree: [
        { label: 'Scrum', image: '/technos/scrum.png', alt: 'Scrum', link: 'https://www.scrum.org' },
        { label: 'Kamban', image: '/technos/kamban.png', alt: 'Kamban', link: 'https://creativetech-fr.devoteam.com/2017/10/26/methode-kamban-quesaco/' },
        { label: 'GitLab', image: '/technos/gitlab.png', alt: 'GitLab', link: 'https://about.gitlab.com' },
        { label: 'GitHub', image: '/technos/github.png', alt: 'GitHub', link: 'https://github.com' },
        { label: 'Jira', image: '/technos/jira.png', alt: 'Jira', link: 'https://www.atlassian.com' },
        { label: 'Trello', image: '/technos/trello.png', alt: 'Trello', link: 'https://www.trello.com' },
    ],
    storageIcon: [
        { label: 'Postgresql', image: '/technos/postgresql.png', alt: 'Postgresql', link: 'https://www.postgresql.org' },
        { label: 'Mysql', image: '/technos/mysql.png', alt: 'Mysql', link: 'https://www.mysql.com' },
        { label: 'Firebase', image: '/technos/firebase.png', alt: 'Firebase', link: 'https://firebase.google.com' },
        { label: 'AWS', image: '/technos/aws.png', alt: 'AWS', link: 'https://aws.amazon.com' },
    ]
};

export const SkillCard = ({ icon, text }) => {
    
    const { t } = useTranslation();
    const IconComponent = iconMap[icon];
    const data = dataMap[icon] || [];
    return (
        <Card className="w-48 h-48">
                <CardBody className="flex flex-col items-center justify-center">
                    <IconComponent sx={{ fontSize: 50 }} />
                    <span className="font-s11 text-xs mt-4 text-center">{t(text)}</span>
                </CardBody>
                <CardFooter>
                    <Dropdown>
                        <DropdownTrigger className='w-full'>
                            <Button
                                variant="bordered"
                                className='text-wrap'
                            >
                                {t('two.text-8')}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            {data.map((item, index) => (
                                <DropdownItem key={index} onClick={() => handleItemClick(item.link)} endContent={<img src={item.image} className='w-5' alt={item.alt} />}>
                                    {item.label}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </CardFooter>
            </Card>
    );
};