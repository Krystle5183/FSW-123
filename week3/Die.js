import React from "react";

function Die({number}) {

    return (
        <div className = 'wrapper'>
            {number !== 0 && <div className = 'dice'>{number}</div>}
        </div>
    );
}

export default Die;