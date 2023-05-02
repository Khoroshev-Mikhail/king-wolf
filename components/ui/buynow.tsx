import { drukCyr, manrope } from "@/pages/_app";

export default function Buynow({ green } : { green?: boolean }){
    return(
        <button className={`text-my_blue text-[20px] rounded-2xl  font-extrabold uppercase
            ${manrope} ${green ? 'bg-my_green' : 'bg-white'}
            w-full sm:w-[235px]
            h-[50px]
        `}>
            Buy now
        </button>
    )
}