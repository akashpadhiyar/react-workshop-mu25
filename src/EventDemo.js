import React from "react";
class EventDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    btnUpdate(e){
        //alert('Hello React')
        console.log(e.type)
        console.warn(e.target.name)
        console.error(e.target.value)
    }

    render() {
        return (<>
        <h2>Event Demo</h2>
        <input type="text" name="txt1" onChange={this.btnUpdate.bind(this)}/>
        <input type="text" name="txt2" onChange={this.btnUpdate.bind(this)}/>
        <input type="button" name='btn1' onClick={this.btnUpdate.bind(this)} value="ClickMe1" />
        <input type="button" name='btn2' onClick={this.btnUpdate.bind(this)} value="ClickMe2" />
        </>)
    }

}
export default EventDemo