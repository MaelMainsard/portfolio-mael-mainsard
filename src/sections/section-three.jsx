import { useTranslation } from "react-i18next";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import { ProjectPage } from "../pages/ProjectPage";

export const SectionThree = () => {
    const { t } = useTranslation();


    return (
        <div className="flex flex-col w-full justify-center align-middle items-center text-center mt-20">
            <span className=" font-s11 font-bold text-5xl mb-8">{t('three.text-1')}</span>
            <span className="font-s11 text-sm opacity-70 mb-8 w-8/12">{t('three.text-2')}</span>
            <div className="flex w-full flex-col items-center">
                <Tabs aria-label="Options" className="mb-8">
                    <Tab key={t('three.text-3')} title={t('three.text-3')}>
                        <ProjectPage/>
                    </Tab>
                    <Tab key={t('three.text-4')} title={t('three.text-4')}>
                        <Card>
                            <CardBody>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key={t('three.text-5')} title={t('three.text-5')}>
                        <Card>
                            <CardBody>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key={t('three.text-6')} title={t('three.text-6')}>
                        <Card>
                            <CardBody>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>  
        </div>
    );
}