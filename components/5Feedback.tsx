import Image from "next/image";
import wolf from '../public/images/feedback-wolf.png'
import { drukCyrBold, drukCyrBoldItalic, manrope } from "@/pages/_app";
import Social from "./ui/social";
import Ticker from "./ui/ticker";

export default function Feedback(){
    return(
        <section className="
            px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[200px]
            mt-[85px]
        ">
            <h2 className={`${drukCyrBold} uppercase
                text-[70px] leading-[80%]
            `}>
                <span className="text-my_green">Ready</span> to be 
                <span className={drukCyrBoldItalic}> part</span> of the pack?
            </h2>
            <div className="mt-[40px] p-[20px] pb-[40px] bg-my_blue rounded-t-2xl bg-[url('/images/grid-form.png')] bg-no-repeat bg-top bg-contain">
                
                    <div className="flex justify-between px-[10px]">
                        <p className="inline-flex 
                            text-[20px] leading-[150%]
                        ">
                            Contact us
                        </p>
                        <div>
                            <Social green />
                        </div>
                    </div>
                    <div className="mt-[30px]">
                        <form>
                            <input className="w-full bg-transparent border-white border-2 py-[18px] px-[20px] text-white placeholder-white text-[16px] leading-[180%] rounded-2xl font-medium" name="name" type="text" placeholder="Name"/>
                            <input className="mt-[8px] w-full bg-transparent border-white border-2 py-[18px] px-[20px] text-white placeholder-white text-[16px] leading-[180%] rounded-2xl font-medium" name="email" type="email" placeholder="Email"/>
                            <button className={`mt-[8px] text-my_blue text-[16px] leading-[180%] bg-white rounded-2xl font-bold uppercase
                                ${manrope}
                                w-full sm:w-[235px]
                                h-[50px]
                            `}>
                                Send
                            </button>
                            <p className="mt-[8px] text-center font-normal text-[7px] text-[#ffffffb3]">By submitting your data to this form, you agree to the privacy Policy</p>
                        </form>
                    </div>
                
            </div>
            <div className="relative">
                <Image src={wolf} alt="wolf" className="relative rounded-2xl top-[-15px]"/>
            </div>

        <Ticker green />
        
        </section>
    )
}