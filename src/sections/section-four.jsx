import { useTranslation } from "react-i18next";
import { ReviewCard } from "../components/ReviewCard";

export const SectionFour = () => {
    const { t } = useTranslation();


    return (
        <div className="flex flex-col w-full justify-center align-middle items-center text-center mt-20">
            <span className=" font-s11 font-bold text-5xl mb-8">{t('four.text-1')}</span>
            <div className="flex flex-wrap gap-5 justify-center">
                {t('four.reviews', { returnObjects: true }).map((item, index) => (
                    <ReviewCard key={index} review={item}/>
                ))}
            </div>
        </div>
    );
}