import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './FreeTrial.css';

function FreeTrial() {
    return (
        <>
            <ul className="nav nav-pills nav-justified">
                <li className="nav-item">
                <Link className = 'nav-link' to='/Home'>Home</Link>
                </li>
            <li className="nav-item">
                <Link className = 'nav-link' to='/About'>About</Link>
            </li>
            <li className="nav-item">
                <Link className = 'nav-link' to='/FreeTrial'>Free Trial</Link>
            </li>
            </ul>

            <h1 className='header'>Free Trial</h1>
            <div className = 'container'>
                <h2 className='text-capitalize'>try monthly budget manager</h2>
                <p className = 'paragraph1'>To believe that a budget manager really makes all the difference sometimes you have to see it first hand first. This is why when you sign up now, we will provide a 30 day free trial to explore all of the benefits offered with our Budget Manager.</p>
                <h2 className='text-capitalize'>What all comes with the free trial?</h2>
                <p className ='paragraph1'>We are providing full access to our budget manager. You get all features of being able to track expense, see where you money is going, and set and calculate a budget for a month. Getting you back on track financially is our main priority. We want to show the world that tracking expenses is easy and efficient and are confident that by trying out our application free for a month you'll see the benefit to it. After the trial expires, you can continue to use our service with a monthly subscription of just &#36;4.99 per month. </p>
                <h2 className = 'text-capitalize'>We love it, now what?</h2>
                <p className='paragraph1'>After our free trial if you fall in love with our application and see the benefits there are different routes you can choose to continue to stay with us. All of the options provided are kept in mind to help save you money without making you spend too much of that newly found surplus of cash!
                    <ul className='paragraph1'>
                        <li>Month by Month Subscription: &#36;4.99</li>
                        <li>3 Month Subscription: &#36;11.99</li>
                        <li>6 Month Subscription: &#36;24.99</li>
                        <li>Year Subscription: &#36;49.99</li>
                    </ul>
                </p>
                <p className = 'paragraph1'>
                    <button className ='signup-button'><span className ='signup-text'>Sign Up</span></button>
                </p>

            </div>
        </>
    );
};

export default FreeTrial;
