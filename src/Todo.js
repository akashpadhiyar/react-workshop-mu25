import React from 'react';
class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mydata:[],txt1:'' };
    }

    addData(){
        var temparr = this.state.mydata
        temparr.push(this.state.txt1)
        this.setState({mydata:temparr,txt1:''})
    }
    render() {
        return (
            <>
                <h1>Todo</h1>
                Title : <input type='text' value={this.state.txt1} onChange={(e)=>this.setState({txt1:e.target.value})} />

                <input type='button' onClick={this.addData.bind(this)} value="Add"/>

                {this.state.mydata.map((value,index)=>{
                    return (<li key={index}>{value}</li>)
                })}
            </>
        );
    }
}
export default Todo;
