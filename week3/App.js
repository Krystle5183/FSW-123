import {useState} from "react"; //Allows setState to be utilized.
import Die from './Die';

function RollDice() {
    // Define state variable for each die.
    const [numberDieOne, setNumberDieOne] = useState("1");
    const [numberDieTwo, setNumberDieTwo] = useState("1");

    // Create method that will generate two random numbers and store them in state.
    const generateNumber = () => {
        // Math.floor for whole numbers. Math.random for random number. Times 6 to set numbers 1-6. 
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;
        setNumberDieOne(randomNumber1);
        setNumberDieTwo(randomNumber2);
    };

    // Render two randomly generated die and a button for the user to generate a new pair on click.

    return (
        <div>
            <Die number = {numberDieOne}/>
            <Die number = {numberDieTwo}/>
            <button onClick = {generateNumber}>Roll Dice</button>
        </div>
    );
}

export default RollDice;


