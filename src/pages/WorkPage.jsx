import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {useTheme} from "next-themes";
import {Card, CardBody} from "@nextui-org/react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const WorkPage = () => {
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
      }, [])
    
      if(!mounted) return null
    
    return (
        <Card>
            <CardBody>
                <VerticalTimeline>
                    {t('three.works', { returnObjects: true }).map((item, index) => ( 
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: `${theme === 'light' ? '#F4F4F5':'#3F3F46'}`, color: `${theme === 'light' ? '#000':'#fff'}` }}
                            contentArrowStyle={{ borderRight: `${theme === 'light' ? '#F4F4F5 7px solid':'#3F3F46 7px solid'}` }}
                            iconStyle={{ background: `${theme === 'light' ? '#F4F4F5':'#3F3F46'}`, color: `${theme === 'light' ? '#000':'#fff'}` }}
                            date={item.date}
                            lineColor='#000'

                        >
                            <h3 className="vertical-timeline-element-title">{item.title}</h3>
                            <h7 className="vertical-timeline-element-subtitle">{item.date}</h7>
                            <p style={{ textAlign: 'left' }}>
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </CardBody>
        </Card>
    );
}