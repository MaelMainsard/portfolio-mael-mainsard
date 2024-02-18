import react,{useRef, useEffect,useState} from 'react';
import { useTranslation } from "react-i18next";
import {SkillCard} from "../components/SkillCard"
import { motion, useAnimation, useInView } from 'framer-motion';
import { SubAnimation } from '../animation/SubtitleAnimation';

export const SectionTwo = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isToView = useInView(ref,{ once : true})
    const mainControls = useAnimation();
    const [isEnter,enter] = useState(false)

    useEffect(()=>{
        if(isToView){
            mainControls.start({ y: 0 })
            enter(true)
        }
    },[isToView])



    const skills = [
        { icon: 'phone', text: 'two.text-3' },
        { icon: 'laptop', text: 'two.text-4' },
        { icon: 'web', text: 'two.text-5' },
        { icon: 'home', text: 'two.text-6' },
        { icon: 'accountTree', text: 'two.text-7' },
        { icon: 'storageIcon', text: 'two.text-9' }
    ];

    return (
        <div className="flex flex-col w-full justify-center align-middle items-center text-center mt-20">
            <span className="font-s11 font-bold text-5xl mb-8">{t('two.text-1')}</span>
            <span className="font-s11 text-sm opacity-70 mb-8 w-8/12">
                <SubAnimation text={t('two.text-2')}/>
            </span>
            <div ref={ref} className="flex flex-wrap gap-5 justify-center ">
                {skills.map((feature, index) => (
                    <motion.div
                    initial={{ y: 300 }}
                    animate={mainControls}
                    whileHover={{ scale: 1.1 }}
                    transition={{duration: isEnter ? 0.3 : 0.5, delay: isEnter ? 0 : index/10}}
                  >
                        <SkillCard key={index} {...feature} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}