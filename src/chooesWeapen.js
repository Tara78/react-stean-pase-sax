import React from 'react'; 

function ChooseWeapen(props){
    return(
    <section>
        <button value='sten' onClick= {props.updateUser}>Sten </button>
        <button value='sax'onClick= {props.updateUser}>Sax</button>
        <button value='pase'onClick= {props.updateUser}>Pase</button>
    </section>
    )
}

export default ChooseWeapen; 