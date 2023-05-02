import { drukCyr, drukCyrBold, drukCyrBoldItalic, drukCyrItalic } from "@/pages/_app";
import Buynow from "./ui/buynow";
import bigwolf from '../public/images/big-wolf.png'
import bigwolf_mobile from '../public/images/big-wolf-mobile.png'
import Image from "next/image";
import Panel from "./0Panel";

export default function Header(){
    return(
        <header className="h-screen min-h-[600px] relative
            px-[20px] pt-[13px] xl:px-[40px]
            w-full xl:max-w-7xl xl:m-auto
        ">
            <h1 className={`${drukCyrBold} text-my_blue z-20 relative uppercase
                text-[70px] sm:text-[100px] xl:text-[156px]
                leading-[80%]

            `}>
                King wolf:
            </h1>
            <h2 className={`${drukCyrBold} relative z-20  uppercase
                text-[70px] sm:text-[100px] xl:text-[156px]
                leading-[80%]
            `}>
                {/* Заменить на italic bold */}
                Be <span className={`${drukCyrBoldItalic} pl-[3px] xl:pl-[5px]`}>Part </span>of<br />
                the <span className="text-my_green">wolf<br /></span>
                pack
            </h2>
            <div className="">
                <Image src={bigwolf_mobile} alt="King wolf" className="w-full absolute z-0 left-0 bottom-[-0px] sm:inline-flex sm:hidden" loading="lazy"/>
                <Image src={bigwolf} alt="King wolf" className="w-[50%] absolute z-0 top-0 right-0 hidden sm:inline-flex" loading="lazy"/> 
            </div>
            <p className="left-0 text-stroke-black
                absolute z-20 sm:static bottom-[140px]
                px-[20px] sm:px-[0px]
                text-[16px] leading-[22px]
                sm: mt-[20px]
                w-full sm:max-w-[50%]
            ">
                Shiba inu had an affair<br className="sm:hidden" /> with a wolf and a wolf cub was born. His mission is to unite everyone and become the king of memecoins
            </p>
            <div className="absolute z-20 left-0 w-full
                
                px-[20px]
                bottom-[76px] sm:bottom-[150px]
            ">
                <Buynow green />
            </div>
        </header>
    )
}