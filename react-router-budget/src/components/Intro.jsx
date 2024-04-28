import { Form } from "react-router-dom"
import { UserPlusIcon } from "@heroicons/react/24/solid";

import illustration from "../assets/illustration.jpg"
import stockimage from "../assets/stockimage.avif"
const Intro = () => {
    return (
    <div className="intro">
        <div>
            <h1>
                Take Charge of <span className="accent">Your Finances</span>
            </h1>
            <p>
                       Unlock Financial Freedom with Personal Budgeting. Begin Your Journey Now!!.
            </p>
            <Form method="post">
                <input 
                 type="text" 
                 name="userName" 
                 required 
                 placeholder="what is your name?" 
                 aria-label="Your Name" 
                 autoComplete="given-name"
            />
            <input type="hidden" name="_action" value="newUser" />
            <button type="submit" className="btn btn--dark">
                <span>Create Account</span>
                <UserPlusIcon width ={20} />
            </button>

            </Form>

        </div>
        <img src={stockimage} alt="" width={600} />
    </div>
    )
}
export default Intro