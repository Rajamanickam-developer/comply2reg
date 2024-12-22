import { Footer } from "../components/Footer"


export function AboutUs(){
    return(
      <>
        <section className="h-screen relative">
            <img 
                src={require("../assets/about_page.png")}
                alt="about"
                className="about-image w-full pt-16 relative"
            />
            <div className="absolute w-full top-0 bottom-0 px-8 flex justify-center items-center">
                <div className="text-[#FFFFFF] text-center flex flex-col gap-2 lg:gap-3">
                    <h1 className="text-xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold">Leading the Future of Compliance</h1>
                    <p className="text-xs sm:text-sm md:text-md lg:text-lg font-light md:px-8 lg:px-12 xl:px-20 leading-6">At Comply2reg, we help businesses to navigate global compliance with ease. By combining advanced AI with deep regulatory insights, we deliver actionable intelligence to simplify management and achieve benchmarks through automation and precision</p>
                </div>
            </div>
        </section>
        <section>
            <div className="grid grid-cols-1 md:grid-cols-4 px-8 lg:px-16 py-12 md:py-14 lg:py-24 gap-2 md:gap-8 lg:gap-10">
                <div className="bg-[#6366F1] col-span-1 md:col-span-2 p-16 lg:p-16 xl:p-20 flex items-center justify-center rounded">
                    <img
                    src={require("../assets/carbon_sight.png")}
                    alt="about" className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]"
                    />
                </div>
                <div className="col-span-1 md:col-span-2 px-4 py-4 lg:ps-12 xl:ps-18">
                    <span class="inline-flex mb-1 md:mb-2 items-center rounded-md bg-[#EEF2FF] px-2 py-0.5 text-[8px] font-medium text-[#4338CA] ring-1 ring-inset ring-blue-700/10">Our Story</span>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-lg md:text-xl lg:text-2xl font-bold md:font-extrabold text-[#171717]">From Vision to Reality</h1>
                        <p className="text-xs lg:text-sm xl:text-lg font-normal text-[#737373] leading-5">Born out of a commitment to redefine compliance, ComplyToRegulations bridges regulatory frameworks with actionable insights. Our journey reflects innovation, collaboration, and a passion for empowering compliance professionals to overcome challenges and drive impactful outcomes.</p>
                    </div>
                </div>
                <div className="bg-[#5EEAD4] col-span-1 md:col-span-4 px-4 py-8 lg:py-12 rounded">
                    <div className="flex justify-center">
                        <img
                            src={require("../assets/tabler_scale.png")}
                            alt="about" className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"
                        />
                    </div>
                    <div className="mt-6 md:px-4 lg:px-6">
                        <span class="inline-flex mb-1 md:mb-2 items-center rounded-md bg-[#F0FDFA] px-2 py-0.5 text-[8px] font-medium text-[#0F766E] ring-1 ring-inset ring-green-600/20">Our belief</span>
                        <div className="flex flex-col gap-1 md:gap-2">
                            <h1 className="text-lg md:text-xl lg:text-2xl font-bold md:font-extrabold text-[#171717]">Driving Ethical Compliance Together</h1>
                            <p className="text-xs lg-text-sm xl:text-lg font-normal text-[#737373] leading-5">We envision a world where compliance is seamless and empowers businesses to innovate responsibly. By combining cutting-edge AI with user-centric design, we make compliance proactive, accessible, and a foundation for trust and success in navigating evolving standards</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-2 px-4 md:px-0 py-4 lg:pe-14 xl:pe-24">
                    <span class="inline-flex mb-1 md:mb-2 items-center rounded-md bg-[#F3F4F6] px-2 py-0.5 text-[8px] font-medium text-[#404040] ring-1 ring-inset ring-blue-700/10">Future roadmap</span>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-lg md:text-xl lg:text-2xl font-bold md:font-extrabold text-[#171717]">Leading the Way in Compliance, Innovating for Tomorrow</h1>
                        <p className="text-xs lg-text-sm xl:text-lg font-normal text-[#737373] leading-5">Our vision is to leverage AI and NLP to automate compliance, harmonize global regulations, and drive proactive strategies. By integrating predictive analytics and expanding regulatory repositories, we aim to create a global compliance community that redefines how organizations navigate regulations.</p>
                    </div>
                </div>
                <div className="bg-[#E5E5E5] col-span-1 md:col-span-2 p-16 flex items-center justify-center rounded">
                    <img
                    src={require("../assets/Vector.png")}
                    alt="about" className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"
                    />
                </div>
            </div>
        </section>
        <section className="flex flex-col items-center relative inline-block">
            <div className="flex w-full min-h-screen mt-auto py-10 bg-[#FAF5FF] flex-col justify-center items-center gap-[15px] lg:gap-4 xl:gap-6 static">
                <div className="px-16 md:px-40 lg:px-64 text-center text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#171717] font-bold">
                    <h1>Take control of your Compliance workflows!</h1>
                </div>
                <p className="text-xs sm:text-md lg:text-lg font-light md:px-8 lg:px-12 xl:px-20 text-[#404040]">Schedule a demo with us to know more</p>
                <button className="px-3 py-1.5 md:px-5 md:py-2.5 text-xs bg-[#2563EB] text-[#FFFFFF] rounded-md md:rounded-lg">Contact us</button>
            </div>
            <Footer />
        </section>
      </>
    )          
}          