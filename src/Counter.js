import React from 'react';
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {counter:0}
        console.log("Constructor Called")
    }

    incrementData(){
        if(this.state.counter>=5){  
            this.setState({msg:"Sorry >5"})
        }else{
            this.setState({counter:this.state.counter+1,msg:''})
        }
    }
    
    decrementData(){
        if(this.state.counter<=0){  
            this.setState({msg:"Sorry < 0"})
        }else{
            this.setState({counter:this.state.counter-1,msg:''})
        }
    }
    
componentDidMount(){
    console.log("Component Did Mount")
}
componentDidUpdate(){
    console.log("Component Did Update")
}

    render(){
        
        console.log("Render Called")
        return (<>
        <h1>Counter</h1>
        Value is {this.state.counter}
        <br/>
        <input type='button' value="+" 
        onClick={this.incrementData.bind(this)}/>

        <input type='button' value="-" 
        onClick={this.decrementData.bind(this)}/>
        
        
        <p style={{color:'red'}}>{this.state.msg}</p>

        </>)
    }
}
export default Counter