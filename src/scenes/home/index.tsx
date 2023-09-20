import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";

import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png"; // any name could be used 


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
const Home = ({setSelectedPage}: Props) => {
    
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  

    return (
    <section
        id="home"
        className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            {/* {Image and main header} */}
            <div>
                <div>
                    {/* Main Header */}
                
                    {/* Headings */}
                    <div>
                        <div>
                            <div>
                                <img alt="home-page-text" src={HomePageText}/>
                            </div>
                        </div>

                        <p>
                            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                            Studios to get the Body Shapes That you Dream of.. Get Your Dream
                            Body Now.
                        </p>
                    </div>

                    {/* {Actions} */}
                    <div>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink
                            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}>

                            <p>Learn more</p>
                        </AnchorLink>
                    </div>
                </div>

                {/* {Image} */}
                <div>
                    <img alt="home-pageGraphic" src={HomePageGraphic} />
                </div>
            </div>

            {/* Sponsors */}
            {isAboveMediumScreens && (
                <div>
                    <div>
                        <div>
                            <img alt="redbull-sponsor" src={SponsorRedBull}/>
                            <img alt="forbes-sponsor" src={SponsorForbes}/>
                            <img alt="fortune-sponsor" src={SponsorFortune}/>
                        </div>
                    </div>
                </div>
            )}
        
      
    </section>
  )
}

export default Home;

