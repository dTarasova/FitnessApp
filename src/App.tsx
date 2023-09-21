import { useEffect, useState } from 'react';
import Navbar from "@/scenes/navbar/index.tsx";
import {SelectedPage} from "@/shared/types.ts";
import Home from './scenes/home';
import Benefits from './scenes/benefits';
import OurClasses from './scenes/ourClasses';
import ContactUs from './scenes/contactus';


function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTpOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTpOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTpOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })

  return (
      <div className='app bg-gray-20'>
        <Navbar 
          isTopOfPage = {isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage}/>
        <Benefits setSelectedPage={setSelectedPage}/>
        <OurClasses setSelectedPage={setSelectedPage}/>
        <ContactUs setSelectedPage={setSelectedPage}/>
      </div>
  )
}

export default App
