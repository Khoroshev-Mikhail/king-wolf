import Image from "next/image";
import Social from "./ui/social";
import cross from "../public/images/cross.png"
import burger from "../public/images/burger.png"
import { useState } from "react";
import { drukCyr, drukCyrBold } from "@/pages/_app";

export default function Panel(){
    const [ isHidden, setIsHidden ] = useState<boolean>(true)
    return(
        <div className="w-full flex relative z-1
            justify-between sm:justify-end
            py-[13px] sm:py-[39px]
        ">
            <Social />
            <div className="relative flex flex-col justify-center
                sm:ml-[50px] 
            ">
                <Image className="cursor-pointer
                    w-[39px] sm:w-[67px] 
                    h-[17px] sm:h-[21px]" 
                    src={ burger } alt="menu-toggle" onClick={()=> setIsHidden(false) }
                />
            </div>
            <div className={ `${isHidden ? 'hidden' : 'block'} absolute w-full z-2 bg-blue rounded-b-2xl
                pb-[25px] sm:pb-[125px]
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
                    <li className="pt-[60px] sm:pt-[120px]">
                        <Social green/>
                    </li>
                    <li className="pt-[60px] sm:pt-[120px]">
                        <button className="text-blue bg-white text-[20px] rounded-2xl
                            w-full sm:w-[235px]
                            h-[50px]
                        ">BUY NOW</button>
                    </li>
                </menu>
            </div>
        </div>
    )
}