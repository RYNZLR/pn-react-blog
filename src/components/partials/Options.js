import React, { useState } from 'react';



export default function Options(props){

    const [isShown, setShown] = useState(false);


    function renderItems(){
        if(isShown){
            return(
                <div>
                    { props.children }
                </div>
            )
        }
        else{
            return null
        }
    }

    function showText() {

        return isShown ? "Verberg opties" : "Toon opties"
        
    }

    function toggle(e){
        e.preventDefault();
        setShown(!isShown);
    }


    return(
        <div className="optionsMenu">
            { renderItems() }
            <a href="#" className="options-toggle" onClick={toggle}>{showText()}</a>
        </div>
    );

}