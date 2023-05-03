import { drukCyr, drukCyrBold, drukCyrItalic } from "@/pages/_app";

export default function Roadmap(){
    return(
        <section className="
            px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[200px]
            relative 
        ">
            <h2 className={`${drukCyrBold} uppercase
                text-[70px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[156px] leading-[80%]
            `}>
                Roadmap
            </h2>
            <div className="w-[75%] h-[65%] right-0 absolute bg-[url('/images/eclipse-roadmap-right.png')] bg-no-repeat bg-contain bg-right"></div>
            
            <div className="mt-[40px] [&>div]:ml-[30px] [&>div>ul]:list-image-[url(/images/icon/list.svg)] sm:grid sm:grid-cols-2">
        
                <div className="sm:cols-span-1">
                    <p className={`${drukCyr} text-transparent bg-clip-text bg-gradient-to-b from-my_green from-25% via-white via-60% to-my_blue to-80%
                        text-[40px]
                    `}>
                        Phase <span className={drukCyrItalic}>1</span>
                    </p>
                    <ul className=" [&>li]:mb-[14px]
                        font-medium text-[16px] leading-[100%]
                        mt-[8px]
                        [&>li]:ml-[14px] [&>li]:pl-[11px]
                    ">
                        <li>Create website</li>
                        <li>Presale and Launch</li>
                        <li>Marketing</li>
                        <li>Crypto influencers AMA</li>
                        <li>3000 Telegram Members</li>
                        <li>5000 holders</li>
                        <li>Buyback and burn</li>
                    </ul>
                </div>

                <div className="sm:cols-span-1">
                    <p className={`${drukCyr} text-transparent bg-clip-text bg-gradient-to-b from-my_green from-25% via-white via-60% to-my_blue to-80%
                        text-[40px]
                    `}>
                        Phase 2
                    </p>
                    <ul className=" [&>li]:mb-[14px]
                        font-medium text-[16px] leading-[100%]
                        mt-[8px]
                        [&>li]:ml-[14px] [&>li]:pl-[11px]
                    ">
                        <li>Listing on CoinMarketCap</li>
                        <li>Listing on Coingecko</li>
                        <li>Partnership<br/> with Marketing Agencies</li>
                        <li>10 000 Telegram Members</li>
                        <li>15 000 holders</li>
                    </ul>
                </div>

                <div className="sm:cols-span-1">
                    <p className={`${drukCyr} text-transparent bg-clip-text bg-gradient-to-b from-my_green from-25% via-white via-60% to-my_blue to-80%
                        text-[40px]
                    `}>
                        Phase 3
                    </p>
                    <ul className=" [&>li]:mb-[14px]
                        font-medium text-[16px] leading-[100%]
                        mt-[8px]
                        [&>li]:ml-[14px] [&>li]:pl-[11px]
                    ">
                        <li>Global marketing</li>
                        <li>NFT Launch</li>
                        <li>50 000 holders</li>
                        <li>New Partnerships </li>
                        <li>Exchange Listing CEX</li>
                    </ul>
                </div>

                <div className="sm:cols-span-1">
                    <p className={`${drukCyr} text-transparent bg-clip-text bg-gradient-to-b from-my_green from-25% via-white via-60% to-my_blue to-80%
                        text-[40px]
                    `}>
                        Phase 4
                    </p>
                    <ul className=" [&>li]:mb-[14px]
                        font-medium text-[16px] leading-[100%]
                        mt-[8px]
                        [&>li]:ml-[14px] [&>li]:pl-[11px]
                    ">
                        <li>100 000 holders</li>
                        <li>New Exchange Listing CEX</li>
                        <li>Launching our first Launchpad</li>
                        <li>Focus on Global Business Development</li>
                        <li>Assistance for wolf parks</li>
                    </ul>
                </div>

            </div>
        </section>
    )
}