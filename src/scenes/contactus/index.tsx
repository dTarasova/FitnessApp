import ActionButton from '@/shared/ActionButton';
import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
//3:25 - ПЕРЕСТАЛА СМОТРЕТЬ, ЧТО ОН ДЕЛАЕТ
const ContactUs = ({setSelectedPage}: Props) => {
  return (
    <section 
        id='ourclasses'
        className='mx-auto w-5/6 pt-24 pb-32'
        >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            className=''>
                <div className='md:flex  justify-between gap-8'>
                    <div className='mx-auto '>
                        {/* {HEADER} AND DESCRIPTION*/}
                        <div className='md:w-3/5'>
                            {/* {HEADER} */}
                            <HText>
                                <span className='text-primary-500'>JOIN NOW {" "}</span>
                                TO GET IN SHAPE
                            </HText>
                            {/* {DESCRIPTION} */}
                            <p className='py-5'>
                            Join our gym and unlock your potential for a healthier, more confident you. Exercise boosts your energy, 
                            reduces health risks, and builds strength, all while being part of a supportive 
                            fitness community. Don't wait – start your transformative journey today!
                            </p>
                        </div>
                        
                        {/* {FORM AND BUTTON} */}
                        <div>
                            {/* {FORM} */}
                            <div>

                            </div>
                            
                            {/* {BUTTON} */}
                            <div className='pb-10'>
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    SUBMIT
                                </ActionButton>
                            </div>
                            
                        </div>
                    
                    </div>
                    {/* {GRAPHIC} */}
                    <div className=''>
                        <img alt={ContactUsPageGraphic} src={ContactUsPageGraphic}/>
                    </div>

                </div>
        </motion.div>

    </section>
  )
}

export default ContactUs
