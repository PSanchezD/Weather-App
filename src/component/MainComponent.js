import { Component } from "react";
import Home from './homeComponent';
import Nav from './navComponent'


class Main extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    
    render(){
        return(
            <>
                <Nav/>
                <Home/>
            </>
        )
    }
}
export default Main