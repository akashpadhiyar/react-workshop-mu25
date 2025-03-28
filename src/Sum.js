import React from "react";
class Sum extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
       const {txt1,txt2} = this.props
       var c = parseInt(txt1)+parseInt(txt2)
        return (<>
        <h1>Sum Component</h1>
        A Valuee is : {txt1} <br/>
        B Value is :{txt2}<br/>
        Sum is {c}
        </>)
    }
}
export default Sum