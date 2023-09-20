import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Logo from "@/assets/Logo.png"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}
const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between"; // common UI thing to separate by 2 ends, rest empty space in between 
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"

  return (
    <nav>
      <div // outer div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`} 
        //fixed - navbar always at the top, 
        //z-30 (not overwritten by anything, always on top 
        // w-full - takes full width 
        // py-6 - padding of 6 from the top 
      >
        <div className={`${flexBetween} mx-auto w-5/6`} // right side
          // mx-auto centers in the middle 
          // takes 5/6 of all width of the navbar  
        >
          <div className={`${flexBetween} w-full gap-16`}
          //  gap between elements
        >
          {/*left side*/}
            <img alt="logo" src={Logo} />

          {/*right side*/}
          {isAboveMediaScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link 
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}/>
                <Link 
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}/>
                <Link 
                  page="Our classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}/>
                <Link 
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}/>
              </div>
            

            <div className={`${flexBetween} gap-8`}>
              <p>Sign In</p>
              {/* Become a member passed as a child  */}
              <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
            </div>
          
          </div>
          ) : (
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white"/>
            </button>
          )}         
          </div>
        </div>
      </div>

      {/*Mobile Menu Modal */}
      {!isAboveMediaScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl"> 
          {/* Close Icon */}
          <div className="flex justify-end p-12">
            <button
              onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-400"/>
            </button>
          </div>

          {/* {Menu Items} */}
          <div className={"ml-[33%] flex flex-col gap-10 text-2xl"}>
            <Link 
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}/>
            <Link 
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}/>
            <Link 
              page="Our classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}/>
            <Link 
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}/>
        </div>

      </div>
      )}
    </nav>
  );
};
export default Navbar;
