import {Avatar,Button} from "@nextui-org/react";
import { useTranslation } from "react-i18next";

export const SectionOne = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col w-full justify-center align-middle items-center text-center mt-20">
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-32 h-32 text-large mb-3" />
            <span className="font-s11 text-xl mb-5">{t('one.text-1')}</span>
            <span className=" font-s11 font-bold text-5xl mb-8">{t('one.text-2')}</span>
            <span className="font-s11 text-sm opacity-70 mb-8 w-3/12">{t('one.text-3')}</span>
            <Button radius="full" className="w-fit p-7">
                <span className="font-s11 text-sm ">{t('one.text-4')}</span>
            </Button>
        </div>
    );
}