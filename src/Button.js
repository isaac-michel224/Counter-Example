import React from 'react';
import {ThemeContextConsumer} from "./ThemeContextProvider";

function Button(props) {
    return(
        //we assign the onClick prop 
        <ThemeContextConsumer>
            {context => (
                <button onClick={context.toggleTheme} className="button">
                    Switch
                    <span role="img" aria-label="sun">
                    🌞
                    </span>

                    <span role="img" aria-label="moon">
                    🌚
                    </span>
                    </button>
                    
                
            )}
        </ThemeContextConsumer>
    )
}


export default Button;