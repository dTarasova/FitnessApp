import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Logo from "@/assets/Logo.png"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}
const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between"; // common UI thing to separate by 2 ends, rest empty space in between 
  
  return (
    <nav>
      <div // outer div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6`} 
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
          </div>

          <div className={`${flexBetween} gap-8`}>
            <p>Sign In</p>
            <button>Become a Member</button>
          </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar