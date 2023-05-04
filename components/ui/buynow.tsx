import { manrope } from "@/pages/_app";

export default function Buynow({ green } : { green?: boolean }){
    return(
        <button className={`text-my_blue text-[20px] font-black uppercase
            ${manrope} ${green ? 'bg-my_green hover:bg-my_blue hover:text-white ' : 'bg-white hover:bg-my_green hover:text-my_blue'}
            rounded-2xl md:rounded-3xl 
            w-full sm:w-[235px]
            py-[14px] md:py-[22px]
            duration-300
        `}>
            Buy now
        </button>
    )
}