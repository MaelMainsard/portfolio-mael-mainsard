import react,{useRef, useEffect} from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export const SubAnimation = ({text}) => {

    const ref = useRef(null);
    const isToView = useInView(ref,{ once : true})
    const mainControls = useAnimation();

    const animateText = text.split(" ");

    useEffect(()=>{
        if(isToView){
            mainControls.start({ opacity: 1 })
        }
    },[isToView])


    return(
        <div ref={ref}>
            {animateText.map((el, i) => (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={mainControls}
                    transition={{
                        duration: 0.25,
                        delay: i / 10,
                    }}
                    key={i}
                >
                    {el}{" "}
                </motion.span>
            ))}
        </div>
    );

}