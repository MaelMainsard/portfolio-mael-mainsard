import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {Card, CardBody, CardHeader, Image} from "@nextui-org/react";

export const CertificationPage = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-warp gap-5">
            {t('three.certifications', { returnObjects: true }).map((item, index) => (
                <Card className=" w-60">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold mb-2">{item.title}</p>
                        <small className="text-default-500">{item.date}</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src={item.image}
                            width={270}
                        />
                    </CardBody>
                </Card>
            ))}
        </div>
    );
}