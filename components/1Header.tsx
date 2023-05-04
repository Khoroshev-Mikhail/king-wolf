import { drukCyrBold, drukCyrBoldItalic } from "@/pages/_app";
import Buynow from "./ui/buynow";
import bigwolf from '../public/images/big-wolf.png'
import bigwolf_mobile from '../public/images/big-wolf-mobile.png'
import Image from "next/image";
import { useState } from "react";
import Social from "./ui/social";
import cross from "../public/images/cross.png"
import burger from "../public/images/burger.png"
import { drukCyr } from "@/pages/_app";

export default function Header(){
    const [ isHidden, setIsHidden ] = useState<boolean>(true)
    return(
        <div className="relative h-screen sm:h-auto min-h-[600px] mb-[70px]">

            <div className="hidden sm:block h-full min-h-screen absolute z-10 top-0 w-[75%] bg-[url('/images/eclipse-header-left.svg')] sm:bg-[url('/images/eclipse-header-left-big.svg')] bg-no-repeat bg-left-top bg-contain"></div>
            <div className="sm:hidden h-full min-h-screen absolute z-10 top-0 w-[75%] bg-[url('/images/eclipse-header-left-mobile.svg')] sm:bg-[url('/images/eclipse-header-left-big.svg')] bg-no-repeat bg-left-top bg-contain"></div>
            <div className="sm:hidden h-full min-h-screen absolute z-10 top-0 right-0 w-[50%] bg-[url('/images/eclipse-header-right.svg')] bg-no-repeat bg-right-bottom bg-contain"></div>

            <div className={`${isHidden ? 'hidden' : 'block'} h-screen min-h-[650px] md:min-h-[680px] lg:min-h-[780px] absolute top-0 left-0 w-full z-40 bg-my_blue rounded-b-2xl
                    px-[20px]
            ` }>
                <menu className={`${drukCyr} text-[40px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[66px] text-white`}>
                    <li className="flex justify-end py-[13px] sm:py-[26px] md:py-[39px] 
                        lg:pr-[100px] xl:pr-[200px]
                    ">
                        <Image className="cursor-pointer w-[30px] sm:w-[49px] h-[30px] sm:h-[49px]" src={ cross } alt="menu-toggle" onClick={()=> setIsHidden(true) }/>
                    </li>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">TOKENOMICS</a></li>
                    <li><a href="#">ROADMAP</a></li>
                    <li><a href="#">CONTACTS</a></li>
                    <li className="pt-[60px] xl:pt-[100px]">
                        <Social green/>
                    </li>
                    <li className="animate-bounce absolute w-full left-0 bottom-[20px] px-[20px]">
                        <Buynow />
                    </li>
                </menu>
            </div>

            <div className="w-full relative flex z-30
                justify-between sm:justify-end
                py-[13px] sm:py-[26px] md:py-[39px] 
                px-[20px]
                lg:pr-[100px] xl:pr-[200px]
            ">  
                <div className="sm:hidden">
                    <Social />
                </div>
                <div className="flex flex-col justify-center sm:ml-[50px] ">
                    <Image className="cursor-pointer w-[39px] sm:w-[67px] h-[17px] sm:h-[21px]"  src={ burger } alt="menu-toggle" onClick={()=> setIsHidden(false) }/>
                </div> 
                
            </div>

            <header className="h-full mt-[20px] sm:mt-0 px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[200px]">
                <h1 data-aos="fade-right" data-aos-duration="1500" className={`${drukCyrBold} text-my_blue z-20 relative uppercase
                    text-[70px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[156px]
                    leading-[80%]
                `}>
                    King wolf:
                </h1>
                <h2 data-aos="fade-right" data-aos-duration="1500" className={`${drukCyrBold} relative z-20  uppercase
                    text-[70px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[156px]
                    leading-[80%]
                `}>
                    Be <span className={`${drukCyrBoldItalic} pl-[3px] xl:pl-[5px]`}>Part </span>of<br />
                    the <span className="text-my_green">wolf<br /></span>
                    pack
                </h2>
                <p data-aos="fade-right" data-aos-duration="1500" className="left-0
                    z-20 absolute bottom-[100px] sm:relative sm:bottom-[0]
                    mt-[20px] sm:mt-[40px]
                    pl-[20px] sm:pl-[0]
                    text-[16px] md:text-[20px] leading-[22px]
                    
                    w-full sm:max-w-[50%] md:max-w-[40%]
                ">
                    Shiba inu had an affair<br className="sm:hidden" /> with a wolf and a wolf cub was born. His mission is to unite everyone and become the king of memecoins
                </p>
                <div className="">
                    <Image src={bigwolf_mobile} alt="King wolf" className="w-full absolute z-0 left-0 bottom-[-70px] sm:inline-flex sm:hidden" loading="lazy"/>
                    <Image src={bigwolf} alt="King wolf" className="w-[50%] absolute z-0 top-0 right-0 hidden sm:inline-flex max-w-[700px]" loading="lazy"/> 
                </div>

                <div className="absolute z-20 left-0 w-full
                    sm:relative
                    px-[20px] sm:px-0 sm:mt-[20px]
                    bottom-[20px] sm:bottom-[0]
                ">
                    <Buynow green />
                </div>
            </header>
        </div>
    )
}