import { useTranslation } from "react-i18next";
import {SkillCard} from "../components/SkillCard"

export const SectionTwo = () => {
    const { t } = useTranslation();

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
            <span className=" font-s11 font-bold text-5xl mb-8">{t('two.text-1')}</span>
            <span className="font-s11 text-sm opacity-70 mb-8 w-8/12">{t('two.text-2')}</span>
            <div className="flex flex-wrap gap-5 justify-center">
                {skills.map((feature, index) => (
                    <SkillCard key={index} {...feature} />
                ))}
            </div>
        </div>
    );
}