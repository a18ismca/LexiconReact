import React, {Component} from "react";

class Ismet extends Component {

    
    render(){
        function Hello(props){
            return <h4>Hello {props.name}</h4>
        }

        return (
            <Hello name="Ismet"></Hello>
        )
    }
    
}

export default Ismet;