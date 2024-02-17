import { useTranslation } from "react-i18next";
import {Card, CardBody} from "@nextui-org/react";
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <Card className="rounded-none">
            <CardBody className="p-10 flex flex-row justify-between">
                <div>
                    <img src="/Logo.png" className="w-10"/>
                    <p className="font-bold text-inherit">Maël Mainsard</p>
                </div>
                <div className="space-y-2">
                    <h6>{t('six.text-1')}</h6> 
                    <div className=" grid grid-flow-col gap-4">
                        <a className="cursor-pointer" href="https://github.com/MaelMainsard" target="_blank">
                            <GitHubIcon sx={{fontSize: '40px'}}/>
                        </a>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}