import { useTranslation } from "react-i18next";
import {Card, CardBody, Button, Input, Textarea} from "@nextui-org/react";
import { Player } from '@lottiefiles/react-lottie-player';

export const SectionFive = () => {
    const { t } = useTranslation();


    return (
        <Card className="m-20">
            <CardBody className="pl-32 pr-32 pt-12 pb-12 flex flex-row space-x-10">
                <div className="flex flex-1 flex-col">
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/98a41c1e-7685-4c67-a970-77ce74861afb/Qc6USB97Dn.json"
                    >
                    </Player>
                </div>
                <div className="flex-1">
                    <p className="font-s11 font-bold text-2xl text-start mb-4">Contactez-moi et commençons à collaborer ensemble</p>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-4">
                        <Input type="email" label="Email" />
                        <Input type="email" label="Email" placeholder="Enter your email" />
                    </div>
                    <Textarea
                        label="Description"
                        placeholder="Enter your description"
                        className="mb-4"
                    />
                    <Button className="w-full">
                        Large
                    </Button> 
                </div>
            </CardBody>
        </Card>
    );
}