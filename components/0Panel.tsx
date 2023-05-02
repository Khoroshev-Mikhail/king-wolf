import Image from "next/image";
import Social from "./ui/social";
import cross from "../public/images/cross.png"
import burger from "../public/images/burger.png"
import { useState } from "react";
import { drukCyr } from "@/pages/_app";
import Buynow from "./ui/buynow";

export default function Panel(){
    const [ isHidden, setIsHidden ] = useState<boolean>(true)
    return(
        <div className="w-full relative flex z-30
            justify-between sm:justify-end
            py-[13px] sm:py-[26px] md:py-[39px] 
            px-[20px] xl:px-[40px]
            w-full xl:max-w-7xl xl:m-auto
        ">
            <Social />
            <div className="flex flex-col justify-center
                sm:ml-[50px] 
            ">
                <Image className="cursor-pointer
                    w-[39px] sm:w-[67px] 
                    h-[17px] sm:h-[21px]" 
                    src={ burger } alt="menu-toggle" onClick={()=> setIsHidden(false) }
                />
            </div>
            <div className={ `${isHidden ? 'hidden' : 'block'} h-screen min-h-[600px] absolute top-0 left-0 w-full z-20 bg-my_blue rounded-b-2xl
                px-[20px]
                pt-[13px] sm:pt-[39px]
            ` }>
                <menu className={`${drukCyr} text-[40px] text-white`}>
                    <li className="flex justify-end">
                        <Image className="cursor-pointer
                            w-[30px] sm:w-[49px] 
                            h-[30px] sm:h-[49px]"  
                            src={ cross } alt="menu-toggle" onClick={()=> setIsHidden(true) }
                        />
                    </li>
                    <li>HOME</li>
                    <li>TOKENOMICS</li>
                    <li>ROADMAP</li>
                    <li>CONTACTS</li>
                    {/* Может высоту меню сделать по высоте экрана и книзу прижать баттон бай нау */}
                    <li className="pt-[60px] sm:pt-[120px]">
                        <Social green/>
                    </li>
                    <li className="absolute w-full left-0 bottom-[20px]
                        px-[20px] 
                    ">
                        <Buynow />
                    </li>
                </menu>
            </div>
        </div>
    )
}