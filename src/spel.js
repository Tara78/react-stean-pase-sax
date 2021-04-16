import React from 'react'; 

class Spel extends React.Component{

    
    costructor(){
        super()
        this.sate ={
            answer:'YES'
        }

    }

    
    render(){       
         return(
            <div>
<h1>Is State important) {this.state.answer}</h1>

            </div>

        )

    }

  

    
}

export default Spel; 