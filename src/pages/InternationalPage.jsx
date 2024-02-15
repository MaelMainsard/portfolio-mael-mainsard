import react, {useRef ,useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import {Card, CardBody} from "@nextui-org/react";
import * as THREE from 'three';
import gsap from 'gsap';
import {useTheme} from "next-themes";


export const InternationalPage = () => {

    const canvasRef = useRef();
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()


    useEffect(() => {
        setMounted(true)
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            innerWidth / innerHeight,
            0.1,
            1000
        )
        const renderer = new THREE.WebGLRenderer({ 
            canvas: canvasRef.current ,
            antialias: true,
            alpha: true

        })
        renderer.setSize(innerWidth,innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setClearColor( `${theme === 'light' ? 0xfff : 0x000}`, 0 );
        scene.background = null;

        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(5,50,50),
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
            sphere.rotation.y += 0.002
            gsap.to(group.rotation, {
                x: -mouse.y * 0.3,
                y: mouse.x * 0.5,
                duration: 2
            })
        }

        animate();

        addEventListener('mousemove', () => {
            mouse.x = (event.clientX / innerWidth) * 2 - 1
            mouse.y = (event.clientY / innerHeight) * 2 + 1
        })

    
      return () => {
        renderer.dispose();
      };
    }, []);

    
    return  <canvas ref={canvasRef} className=' max-w-full'/>
}