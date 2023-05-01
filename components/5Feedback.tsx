import Image from "next/image";
import wolf from '../public/images/feedback-wolf.png'

export default function Feedback(){
    return(
        <section>
            <h2>ready to be part of the pack?</h2>
            <div>
                <form>
                    <p>Contact us</p>
                    <input name="name" type="text" placeholder="Name"/>
                    <input name="email" type="email" placeholder="Email"/>
                    <button>Send</button>
                    <p>By submitting your data to this form, you agree to the privacy Policy</p>
                    <div>
                        <a href="" ><img alt="twitter" /></a>
                        <a href="" ><img alt="telegram" /></a>
                    </div>
                </form>
            </div>
            <div>
                <Image src={wolf} alt="wolf" width={100} height={100}/>
            </div>
        </section>
    )
}