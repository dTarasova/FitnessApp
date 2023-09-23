import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { useForm } from "react-hook-form";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {
    const {
        register, 
        trigger,
        formState: {errors}
    } = useForm();
    
    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    const inputStyles = `w-full rounded-lg bg-primary-300
    px-5 py-3 placeholder-white mt-5`;

    return (
    <section 
        id='ourclasses'
        className='mx-auto w-5/6 pt-24 pb-32'
        >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            className=''>
                <div className=''>

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

                    {/* {FORM AND IMAGE} */}
                    <div className='md:flex justify-between gap-8 mt-10'>
                        
                        {/* {FORM AND BUTTON} */}
                        <div className='mt-10 basis-3/5 md:mt-0'>
                            {/* {FORM} */}
                            <form
                                target='_blank'
                                onSubmit={onSubmit}
                                action="https://formsubmit.co/el/tuxaji"
                                method='POST'
                            >
                                <input
                                    className={inputStyles}
                                    type='text'
                                    placeholder='NAME'
                                    {...register("name", {
                                        required: true,
                                        maxLength: 100,
                                    })} />
                                {
                                    errors.name && (
                                        <p>
                                            {errors.name.type === "required" && "This is required field"}
                                            {errors.name.type === "maxLength" && "Max number of symbols = 100"}
                                        </p>
                                    )
                                }

                                <input
                                    className={inputStyles}
                                    type='text'
                                    placeholder='E-MAIL'
                                    {...register("email", {
                                        required: true,
                                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9._-]+\.[A-Z]{2,}$/i,
                                    })} />
                                {
                                    errors.name && (
                                        <p>
                                            {errors.name.type === "required" && "This is required field"}
                                            {errors.name.type === "pattern" && "invalid email"}
                                        </p>
                                    )
                                }

                                <textarea
                                    className={inputStyles}
                                    rows={4}
                                    placeholder='MESSAGE'
                                    {...register("name", {
                                        required: true,
                                        maxLength: 2000,
                                    })} />
                                {
                                    errors.name && (
                                        <p>
                                            {errors.name.type === "required" && "This is required field"}
                                            {errors.name.type === "maxLength" && "Max number of symbols = 2000"}
                                        </p>
                                    )
                                }

                                <button
                                    type='submit'
                                    className=' mt-5 rounded-md bg-secondary-500 hover:bg-primary-500 px-10 py-2 hover:text-white'

                                >SUBMIT
                                </button>
                            </form>  
                        </div>

                        {/* {GRAPHIC} */}
                        <div className=''>
                            <img alt={ContactUsPageGraphic} src={ContactUsPageGraphic}/>
                        </div>
                    </div>
             </div>
        </motion.div>

    </section>
  )
}

export default ContactUs


