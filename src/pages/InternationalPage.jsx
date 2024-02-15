import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import {
    Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,Card, CardBody,CardHeader,CardFooter,Image
} from "@nextui-org/react";
import * as THREE from 'three';
import gsap from 'gsap';
import CloseIcon from '@mui/icons-material/Close';

export const InternationalPage = () => {
    const canvasRef = useRef();
    const { t } = useTranslation();
    const [place, setPlace] = useState(null);


    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
            alpha: true
        })
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        scene.background = null;

        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(5, 100, 100),
            new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load('/international/globe.jpg')
            })
        )
        scene.add(sphere)

        const group = new THREE.Group()
        group.add(sphere)
        scene.add(group)

        camera.position.z = 10;

        const mouse = {
            x: undefined,
            y: undefined
        }

        function animate() {
            requestAnimationFrame(animate)
            renderer.render(scene, camera)
            if(place == null) {
                sphere.rotation.y += 0.002
                gsap.to(group.rotation, {
                    x: -mouse.y * 0.3,
                    y: mouse.x * 0.5,
                    duration: 2
                })
            }
            else {
                sphere.rotation.y += 0.0001
                gsap.to(group.rotation, {
                    x: place.y,
                    y: place.x,
                    duration: 0.5
                })
            }
        }

        animate();

        addEventListener('mousemove', () => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1
            mouse.y = (event.clientY / window.innerHeight) * 2 + 1
        })

        return () => {
            renderer.dispose();
        };
    }, [place]);

    const [selectedKeys, setSelectedKeys] = React.useState(new Set([t('three.text-19')]));

    const selectedValue = React.useMemo(
      () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
      [selectedKeys]
    );


    return (
        <>
            <div className='flex flex-row items-center space-x-2 justify-center'>
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            variant="bordered"
                        >
                            {selectedValue}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Static Actions"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedKeys}
                        onSelectionChange={setSelectedKeys}
                    >
                        {t('three.international', { returnObjects: true }).map((item, index) => (
                            <DropdownItem key={item.name} onPress={() => {setPlace(item);onOpen(true)}}>{item.name}</DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
                { place !== null && (
                    <Button onPress={() => {setPlace(null); setSelectedKeys(new Set([t('three.text-19')]))}}>
                        <CloseIcon/>
                    </Button>
                )}
            </div>
            {place !== null && (
                <div className='absolute h-full flex justify-center items-center mb-10 ml-52'>
                    <Card className="col-span-12 sm:col-span-4 h-[300px] w-52 mt-52 ml-52">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-[#11181C] opacity-60 uppercase font-bold">{t('three.text-20')}</p>
                            <h4 className="text-[#11181C] font-medium text-large">{place.name}</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src={place.img}
                        />
                        <CardFooter className="absolute bg-white/60 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                            <p className="text-black text-tiny">{place.description}</p>
                        </CardFooter>
                    </Card>
                </div>
            )}
            <canvas ref={canvasRef} className='max-w-full' />
        </>
    )
}
