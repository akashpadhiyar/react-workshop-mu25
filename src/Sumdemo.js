import React from 'react';
class Sumdemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    
    doSum() {
        var a = this.state.txt1
        var b = this.state.txt2
        var c = parseInt(a) + parseInt(b)
        this.setState({ ans: "Sum is " + c })
    }

    render() {
        return (
            <>
                <h1>Sum</h1>

                No1 : <input type='text' name='txt1' onChange={(e)=>this.setState({txt1:e.target.value })} />
                No2 : <input type='text' name='txt2'  onChange={(e)=>this.setState({txt2:e.target.value})} />
                <input type='button' onClick={this.doSum.bind(this)} value="Sum" />
                {this.state.ans}
            </>
        );
    }
}

export default Sumdemo;