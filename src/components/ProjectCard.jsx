import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from "react-i18next";
import {Divider, Card, CardFooter, Button, Image, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

export const ProjectCard = ({ id, img, techno }) => {
    const { t } = useTranslation();
    const { isOpen, onOpen, onOpenChange } = useDisclosure(); 

    return (
        <>
            <Card
                isFooterBlurred
                radius="lg"
                className="border-none"
            >
                <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    height={200}
                    src={img}
                    width={200}
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny ">{t('three.text-7')}</p>
                    <Button className="text-tiny" variant="flat" color="default" radius="lg" size="sm" onPress={onOpen}>
                        {t('three.text-8')}
                    </Button>
                </CardFooter>
            </Card>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 items-center font-s11 font-bold ">{t(`three.projects.${id}.title`)}</ModalHeader>
                            <Divider/>
                            <ModalBody className='flex flex-col items-center'>
                                <Image
                                    alt="Woman listing to music"
                                    className="object-cover"
                                    height={200}
                                    src={img}
                                    width={200}
                                />
                                <span className='font-s11 text-md'>{t(`three.text-15`)}</span>
                                <Divider/>
                                <p className='font-s11 text-sm opacity-70'>{t(`three.projects.${id}.description`)}</p>
                                <span className='font-s11 text-md'>{t(`three.text-18`)}</span>
                                <Divider/>
                                <div className='flex flex-wrap gap-5 justify-center'>
                                    {techno.map((item, index) => (
                                        <img key={index} src={item} className=' size-10' alt={`Technologie ${index + 1}`}/>
                                    ))}
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    {t(`three.text-14`)}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}