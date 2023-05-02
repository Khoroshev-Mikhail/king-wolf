import { drukCyr, manrope } from "@/pages/_app";

export default function Buynow({ green } : { green?: boolean }){
    return(
        <button className={`text-my_blue text-[20px] font-black uppercase
            ${manrope} ${green ? 'bg-my_green' : 'bg-white'}
            rounded-2xl md:rounded-3xl 
            w-full sm:w-[235px]
            py-[14px] md:py-[22px]
        `}>
            Buy now
        </button>
    )
}