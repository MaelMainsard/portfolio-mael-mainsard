import { useTranslation } from "react-i18next";
import {Card, CardFooter, Button, Image} from "@nextui-org/react";

export const ProjectCard = ({ img }) => {
    const { t } = useTranslation();

    return (
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
                <Button className="text-tiny" variant="flat" color="default" radius="lg" size="sm">
                    {t('three.text-8')}
                </Button>
            </CardFooter>
        </Card>
    );
}