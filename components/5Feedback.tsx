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
            mb-[40px]
        ">
            <h2 className={`${drukCyrBold} uppercase
                text-[70px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[156px] leading-[80%]
                sm:w-[90%] md:w-[80%] lg:w-[70%]
            `}>
                <span className="text-my_green">Ready</span> to be 
                <span className={drukCyrBoldItalic}> part</span> of the pack?
            </h2>


                <div className="relative overflow-hidden sm:flex sm:justify-between mt-[40px] bg-my_blue rounded-2xl bg-[url('/images/grid-form.png')] bg-no-repeat bg-top bg-contain">
                    <div className="
                        p-[20px] sm:pb-[80px] md:pb-[100px] lg:pb-[100px] xl:pb-[140px] 
                        sm:pt-[20px] md:pt-[30px] lg:pt-[30px] xl:pt-[50px]
                        sm:pl-[20px] md:pl-[30px] lg:pl-[40px] xl:pl-[50px]
                        sm:w-[60%] md:w-[52%] lg:w-[48%]
                    ">
                        <div className="flex justify-between px-[10px] sm:px-[0px]">
                            <p className="inline-flex 
                                text-[20px] sm:text-[28px] leading-[150%]
                            ">
                                Contact us
                            </p>
                            <div className="sm:absolute sm:bottom-[20px] md:bottom-[30px] lg:bottom-[30px] xl:bottom-[50px]">
                                <Social green />
                            </div>
                        </div>
                        <div className="mt-[30px] sm:mt-[10px] md:mt-[20px] lg:mt-[30px] xl:mt-[40px]">
                            <form>
                                <input className="w-full bg-transparent border-white border-2 py-[18px] px-[20px] md:py-[22px] text-white placeholder-white text-[16px] sm:text-[20px] leading-[180%] rounded-2xl font-medium" name="name" type="text" placeholder="Name"/>
                                <input className="mt-[8px] md:mt-[10px] w-full bg-transparent border-white border-2 py-[18px] md:py-[22px] px-[20px] text-white placeholder-white text-[16px] leading-[180%] rounded-2xl font-medium" name="email" type="email" placeholder="Email"/>
                                <button className={`mt-[8px] md:mt-[10px] text-my_blue text-[16px] sm:text-[20px] leading-[180%] bg-white rounded-2xl font-bold uppercase
                                    ${manrope}
                                    w-full 
                                    p-[16px] sm:p-[22px]
                                `}>
                                    Send
                                </button>
                                <p className="mt-[8px] text-center sm:text-left font-normal text-[7px] sm:text-[10px] md:text-[10px] lg:text-[12px] text-[#ffffffb3]">By submitting your data to this form, you agree to the privacy Policy</p>
                            </form>
                        </div>
                    </div>

                    <div className="sm:absolute right-0 object-contain sm:right-[-190px] md:right-[-160px] lg:right-[-40px] xl:right-[-2px]">
                        <Image src={wolf} width={360} alt="wolf" className="
                            sm:w-[436px] md:w-[498px] lg:w-[512px] xl:w-[586px]
                            object-contain relative w-full top-[5px] sm:top-[-1px]
                        "/>
                    </div>
                </div>


        <Ticker green />
        
        </section>
    )
}