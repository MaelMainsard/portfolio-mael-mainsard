import React, { useState,useReducer } from 'react';

import { useTranslation } from "react-i18next";
import {ProjectCard} from "../components/ProjectCard"
import {CardHeader, Card, CardBody,Dropdown,DropdownTrigger,Button,DropdownMenu,DropdownItem,Checkbox} from "@nextui-org/react";


export const ProjectPage = () => {

    const { t } = useTranslation();

    // const [task, updateTask] = useReducer((prev, next) => ({
    //     ...prev, ...next
    //   }),
    //    {
    //     selectedType: [],
    //     tempSelectedType: [],

    //     selectedFront: [],
    //     tempSelectedFront: [],

    //     selectedBack: [],
    //     tempSelectedBack: [],
    //    }
    //   );

    // const handleItemType = (item) => {
    //     const selectedIndex = task.selectedType.indexOf(item);
    //     if (selectedIndex === -1) {
    //         updateTask({selectedType:[...task.selectedType, item]});
    //     } else {
    //         updateTask({selectedType : task.selectedType.filter((selectedType) => selectedType !== item)});
    //     }
    // };
    // const handleItemFront = (item) => {
    //     const selectedIndex = task.selectedFront.indexOf(item);
    //     if (selectedIndex === -1) {
    //         updateTask({selectedFront:[...task.selectedFront, item]});
    //     } else {
    //         updateTask({selectedFront : task.selectedFront.filter((selectedFront) => selectedFront !== item)});
    //     }
    // };
    // const handleItemBack = (item) => {
    //     const selectedIndex = selectedItems.indexOf(item);
    //     if (selectedIndex === -1) {
    //         setSelectedItems([...selectedItems, item]);
    //     } else {
    //         setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
    //     }
    // };

    const type = [
        t('three.text-10'),
        t('three.text-11'),
    ]

    const front = [
        'Flutter',
        'Node JS'
    ]

    const back = [
        'Firebase'
    ]

    const projects = [
        { img: '/planmysearch.png',type: type[0], front: front[0],back: back[0] },
        { img: '/kiomdawifi.png',type: type[0], front: front[0],back: back[0] },
        { img: '/kiomdaapi.png', type: type[1],  front: front[1],back: back[0] },
    ];


    return(
        <Card>
            {/* <CardHeader className='flex flex-row justify-center'>
                <Dropdown closeOnSelect={false}  onOpen={()=>updateTask({selectedType: task.tempSelectedType})} onClose={()=>updateTask({tempSelectedType: task.selectedType})}>
                    <DropdownTrigger className='w-fit'>
                        <Button
                            variant="bordered"
                            className='text-wrap'
                        >
                            {t('three.text-9')}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        {type.map((item, index) => (
                            <DropdownItem key={index}>
                                <Checkbox isSelected={task.selectedType.includes(item)} onValueChange={() => handleItemType(item)}>{item}</Checkbox>
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>

                <Dropdown closeOnSelect={false}  onOpen={()=>updateTask({selectedFront: task.tempSelectedFront})} onClose={()=>updateTask({tempSelectedFront: task.selectedFront})}>
                    <DropdownTrigger className='w-fit'>
                        <Button
                            variant="bordered"
                            className='text-wrap'
                        >
                            {t('three.text-12')}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        {front.map((item, index) => (
                            <DropdownItem key={index}>
                                <Checkbox isSelected={task.selectedFront.includes(item)} onValueChange={() => handleItemFront(item)}>{item}</Checkbox>
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </CardHeader> */}
            <CardBody>
                <div className="flex flex-wrap gap-5 justify-center">
                    {projects.map((project, subIndex) => {
                        return <ProjectCard key={subIndex} {...project} />;
                    })}
                </div>
            </CardBody>
        </Card>
    )
}