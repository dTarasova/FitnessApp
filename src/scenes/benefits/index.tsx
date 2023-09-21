import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
    HomeModernIcon,
    UserGroupIcon, 
    AcademicCapIcon
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
const Benefits = ({setSelectedPage}: Props) => {

    const benefits: Array<BenefitType> = [
        {
            icon: <HomeModernIcon className="h-6 w-6"/>,
            title: "State of the Art Facilities",
            description:
            "State-of-the-art gyms with excellent facilities are ready to keep you fit and happy.",
        },

        {
            icon: <UserGroupIcon className="h-6 w-6" />,
            title: "100's of Diverse Classes",
            description:
            "From dancing to fighting, from swimming to fencing. You name it, we have it",
        },
        {
            icon: <AcademicCapIcon className="h-6 w-6" />,
            title: "Expert and Pro Trainers",
            description:
            "All our trainers are highly qualified, sports masters and professional physiologists. ",
        },
    ];

    const container = {
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      };

  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
        >
        <motion.div onViewportEnter={() => {setSelectedPage(SelectedPage.Benefits)}}>
            {/* {Header} */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
            }}>
                <HText>MORE THAN JUST A GYM</HText>
                <p className="my-5 text-sm">
                We provide world class fitness equipment, trainers and classes to
                get you to your ultimate fitness goals with ease. We provide true
                care into each and every member.
                </p>
            </motion.div>

            {/* {Benefits} */}
            <motion.div 
                className="mt-5 items-center justify-between gap-8 md:flex"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit 
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}

            </motion.div>

            {/* {Graphics and description} */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-20 md:flex">
                {/* {Graphic} */}
                <img 
                    className="mx-auto"
                    alt="benefits-page-graphic"
                    src={BenefitsPageGraphic}
                />

                {/* {Description} */}
                <div>
                    {/* {title} */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            {/* {image is behind the text} */}
                            <HText>
                                MILLIONS OF HAPPY MEMBERS GETTIG{" "}
                                <span className="text-primary-500">FIT</span>
                            </HText>
                        </div>
                    </div>

                    {/* {description} */}
                    <div>
                        <p className="my-5">
                            Don't wait to start your fitness journey with us. Whether you're new to exercise or a seasoned 
                            fitness enthusiast, our fitness center is the perfect place to achieve your goals. 
                            Join the millions of happy members who have already experienced the positive impact of our facility.

                        </p>
                            
                        <p className="mb-5">
                            Take the first step today and discover the joy of getting fit, staying healthy, 
                            and reaching your full potential. We can't wait to welcome you to our fitness center family!
                            Contact us now to get started on your path to a happier and healthier you.
                        </p>
                    </div>

                    {/* {Button} */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-top-20 before:right-40 before:z-[1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>

        
        </motion.div>
    </section>
  )
}

export default Benefits
