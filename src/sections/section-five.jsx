import {Card, CardBody} from "@nextui-org/react";
import { Player } from '@lottiefiles/react-lottie-player';
import { SignupForm } from '../components/ContactForm';

export const SectionFive = () => {


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
                <SignupForm  className="flex-1"/>
            </CardBody>
        </Card>
    );
}