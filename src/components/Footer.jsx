
export function Footer(){
    return(
        <footer className="bg-[#172554] w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 px-8 lg:px-16 py-8 md:py-8 gap-6 md:gap-8 lg:gap-10">
                <div className="col-span-1 md:col flex flex-col gap-2 md:w-4/5">
                    <a className="flex items-center gap-2 md:gap-3">
                        <img src={require('../assets/Logo_white.png')} className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[32px] lg:h-[32px]" alt="logo" />
                        <h2 className="text-md md:text-xl lg:text-2xl font-semibold text-[#FFFFFF]">Comply2reg</h2>
                    </a>
                    <p className="text-[10px] lg:text-xs font-normal leading-[16px] text-[#FFFFFF]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                </div>
                <div className="flex justify-between">
                    <div className="text-[#FFFFFF] flex flex-col gap-2">
                        <h3 className="font-semibold text-md lg:text-xl lg:text-base">Quick links</h3>
                        <ul className="flex flex-col gap-2">
                            <a href=""><li className="text-[10px] lg:text-xs">About us</li></a>
                            <a href=""><li className="text-[10px] lg:text-xs">Blog</li></a>
                            <a href=""><li className="text-[10px] lg:text-xs">Features</li></a>
                            <a href=""><li className="text-[10px] lg:text-xs">Industries</li></a>
                        </ul>
                    </div>
                    <div className="text-[#FFFFFF] flex flex-col gap-2">
                        <h3 className="text-semibold text-md lg:text-xl lg:text-base">Contact</h3>
                        <p className="text-[10px] lg:text-xs">+91 9872344343</p>
                    </div>
                </div>
            </div>
            <div className="text-[#FFFFFF] flex justify-around md:justify-center items-end border-t border-gray-600 gap-2 md:gap-4 px-4 md:px-8 py-6 md:py-4 lg:py-6">
                <span className="text-[8px] xl:text-xs">© 2024 | Comply2reg all right reserved.</span>
                <span className="font-semibold text-[8px] xl:text-xs">Privacy policy</span>
                <span className="font-semibold text-[8px] xl:text-xs">Terms and conditions</span>
            </div>
        </footer>
    )
}