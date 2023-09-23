import Logo from "@/assets/Logo.png"
const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="md:flex justify-between w-5/6 mx-auto">
            {/* {LOGO AND DESCRIPTION} */}
            <div className="mt-16 basis-1/4 md:mt-0">
                <div>
                    <img src={Logo} alt="logo"/>
                </div>
                <div>
                    <p className="my-5">
                        Our fitness can't be more happy to see you soon! 
                    </p>
                </div>
            </div>

            {/* {LINKS} */}
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">
                    Links
                </h4>

                <p className="my-5">
                    <a href="https://www.w3schools.com/">Our history</a>
                </p>

                <p className="my-5">
                    <a href="https://www.w3schools.com/">Our certificates</a>
                </p>

                <p className="my-5">
                    <a href="https://www.w3schools.com/">Something else</a>
                </p>
                

            </div>

            {/* {CONTACT US} */}
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">
                    Contact us
                </h4>
                <p className="my-5">
                    We are waiting for your call! 
                </p>
                <p className="my-5">
                    +49(177)111111
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
