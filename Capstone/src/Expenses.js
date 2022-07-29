import { v4 as uuidv4 } from 'uuid';

const expenses = [
    {
        id: uuidv4(),
        name: "Rent",
        cost: 1600,
        frequency: "Monthly"
    },
    {
        id: uuidv4(),
        name: "Phone",
        cost: 75,
        frequency: "Monthly"
    },
    {
        id: uuidv4(),
        name: "Gas",
        cost: 35,
        frequency: "Weekly"
    },
    {
        id: uuidv4(),
        name: "Car Insurance",
        cost: 80,
        frequency: "Monthly"
    }
];

export default expenses;