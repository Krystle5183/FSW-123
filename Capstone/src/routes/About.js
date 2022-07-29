import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './About.css';

function About() {
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

            <h1 className="header">About Monthly Expense Manager </h1>
                <div className = 'container'>
                    <h2 className ='text-capitalize'>What sparked the idea:</h2>
                    <p className ='paragraph'>Being able to manage money propely is one of the keys to being successful in todays society. Having a helper like Monthly Expense Manager enables you to see your expenses, identify opportunities for improvements, and rid yourself of unnecessary or unwanted expenses! 
                        <p className='nested-paragraph'>"I was struggling to meet my financial requirements every month and needed a way to track my expenses to budget more efficiently. Since I was also going to school for Web Development, I thought I would create an application to be able to manage my expenses as well as make income to further help my situtation. My goal at the time was to help myself, as well as anyone else who was currently in a similar position to myself. Thats how I thought of starting the Monthly Expense Manager service." - Kyle Rosentrater, CEO </p>
                    </p>
                    <h2 className ='text-capitalize'>Why use a budget manager?</h2>
                    <p className ='paragraph'>Budgeting provides a systematic way of reviewing estimated with actual results, coordinating future activities and setting realistic targets. It is an effective management tool and benefits include: Provides a time frame required to control finances. Highlights cashflow shortages/financing requirements etc.</p>
                    <h2 className = 'text-capitalize'>benefits of use</h2>
                    <p className = 'paragraph'>
                        <ul>
                            <li>Track expenses on a month to month bases</li>
                            <li>Know where your money goes</li>
                            <li>Expenses all organized in one place</li>
                            <li>Can plan for the entire month before it begins</li>
                        </ul>
                        <p>There are many more benefits as well such as not stressing as much and being able to expect or predict future surpluses to enable you to save and ultimately manage your money smarter and more efficiently.</p>
                    </p>
                </div>
                
        </>
    );
};

export default About;