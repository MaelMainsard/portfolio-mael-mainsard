import React, { useState,useEffect } from 'react';

import { useTranslation } from "react-i18next";
import {ProjectCard} from "../components/ProjectCard"
import {CardHeader,CardFooter,Pagination, Card, CardBody,Dropdown,DropdownTrigger,Button,DropdownMenu,DropdownItem,Checkbox} from "@nextui-org/react";
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

export const ProjectPage = () => {

    const { t } = useTranslation();
    
    const projetsList = [
        {id: 'planmysearch', img: '/projects/planmysearch.png', type: t('three.text-10'), front: 'Flutter', back: 'Firebase', techno: ["/technos/flutter.png","/technos/firebase.svg"] },
        {id: 'kiomdawifi', img: '/projects/kiomdawifi.png', type: t('three.text-10'), front: 'Flutter', back: 'Firebase', techno: ["/technos/flutter.png","/technos/firebase.svg"] },
        {id: 'kiomdaapi', img: '/projects/kiomdaapi.png', type: t('three.text-11'), front: 'React JS', back: 'Node JS & Firebase',techno: ["/technos/react.png","/technos/nodejs.png","/technos/firebase.svg"] },
        {id: 'deltadore', img: '/projects/deltadore.png', type: t('three.text-16'), front: 'C#', back: 'XLS',techno: ["/technos/cs.png","/technos/xls.png"] },
        {id: 'bobby', img: '/projects/bobby.png', type: t('three.text-17'), front: 'Windev Mobile', back: 'Micropython',techno: ["/technos/windev.png","/technos/mycropython.png"] },
    ];

    
    const [projects, setProjects] = useState(projetsList);

    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedFronts, setSelectedFronts] = useState([]);
    const [selectedBacks, setSelectedBacks] = useState([]);

    const types = [...new Set(projects.map(project => project.type))];
    const fronts = [...new Set(projects.map(project => project.front))];
    const backs = [...new Set(projects.map(project => project.back))];

    useEffect(() => {
        filterProjects(selectedTypes, selectedFronts, selectedBacks);
    }, [selectedTypes,selectedFronts,selectedBacks]);

    const handleTypeChange = (type) => {
        if (selectedTypes.includes(type)) {
            setSelectedTypes(selectedTypes.filter((t) => t !== type));
        } else {
            setSelectedTypes([...selectedTypes, type]);
        }
        filterProjects(selectedTypes, selectedFronts, selectedBacks);
    };
    const handleFrontChange = (front) => {
        if (selectedFronts.includes(front)) {
            setSelectedFronts(selectedFronts.filter(f => f !== front));
        } else {
            setSelectedFronts([...selectedFronts, front]);
        }
    };
    const handleBackChange = (back) => {
        if (selectedBacks.includes(back)) {
            setSelectedBacks(selectedBacks.filter(b => b !== back));
        } else {
            setSelectedBacks([...selectedBacks, back]);
        }
    };
    const filterProjects = (types, fronts, backs) => {
        let filteredProjects = projetsList;
    
        if (types.length > 0) {
            filteredProjects = filteredProjects.filter(project => types.includes(project.type));
        }
    
        if (fronts.length > 0) {
            filteredProjects = filteredProjects.filter(project => fronts.includes(project.front));
        }
    
        if (backs.length > 0) {
            filteredProjects = filteredProjects.filter(project => backs.includes(project.back));
        }
    
        setProjects(filteredProjects);
    };

    function resetFilters(){
        setSelectedTypes([])
        setSelectedFronts([])
        setSelectedBacks([])
        setProjects(projetsList);
    }


    return(
        <Card>
            <CardHeader className='flex flex-row justify-center space-x-2'>
                <Dropdown closeOnSelect={false}>
                    <DropdownTrigger className='w-fit'>
                        <Button variant="bordered" className='text-wrap'>
                            {t('three.text-9')}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Type Dropdown">
                        {types.map((type, index) => (
                            <DropdownItem key={index}>
                                <Checkbox isSelected={selectedTypes.includes(type)} onValueChange={() => handleTypeChange(type)}>{type}</Checkbox>
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>

                <Dropdown closeOnSelect={false}>
                    <DropdownTrigger className='w-fit'>
                        <Button variant="bordered" className='text-wrap'>
                            {t('three.text-12')}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Front Dropdown">
                        {fronts.map((front, index) => (
                            <DropdownItem key={index}>
                                <Checkbox isSelected={selectedFronts.includes(front)} onValueChange={() => handleFrontChange(front)}>{front}</Checkbox>
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>

                <Dropdown closeOnSelect={false}>
                    <DropdownTrigger className='w-fit'>
                        <Button variant="bordered" className='text-wrap'>
                            {t('three.text-13')}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Back Dropdown">
                        {backs.map((back, index) => (
                            <DropdownItem key={index}>
                                <Checkbox isSelected={selectedBacks.includes(back)} onValueChange={() => handleBackChange(back)}>{back}</Checkbox>
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>

                <Button color="default" onClick={resetFilters}>
                    <FilterAltOffIcon/>
                </Button>
            </CardHeader>
            <CardBody>
                <div className="flex flex-wrap gap-5 justify-center">
                    {projects.map((project, subIndex) => {
                        return <ProjectCard key={subIndex} {...project} />;
                    })}
                </div>
            </CardBody>
            <CardFooter className='flex flex-row justify-center'>
                <Pagination isCompact showControls total={1} initialPage={1} />
            </CardFooter>
        </Card>
    )
}