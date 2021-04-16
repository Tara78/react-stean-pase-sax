import React from 'react'; 

function declareWinner(userWeapon, computerWeapon){
    let winner= ''; 
    if(userWeapon ===computerWeapon && userWeapon !==''){
winner= 'lika'; 
    }else if(userWeapon=='sten'){
        if(computerWeapon=='pase'){

            winner= 'Datorn Vann! ';
        }else{
            winner ='Du Vann!';
         }

        }else if(userWeapon=='sax'){
            if(computerWeapon=='sten'){
    
                winner= 'Datorn Vann! ';
            }else{
                winner ='Du Vann !'; }
            }
                else if(userWeapon=='sax'){
                    if(computerWeapon=='pase'){
            
                        winner= 'Datorn Vann! ';
                    }else{
                        winner ='Du Vann !'; }


    }
    return winner; 
}


function ChooseWinner(props){
const won = declareWinner(props.user, props.computer);

    return(
        <section>
            <h2>{won}</h2>
            <p>Du valde:{props.user}</p>
            <p>Darorn Valde{props.computer}</p>
        </section>
    ) 
}

export default ChooseWinner;