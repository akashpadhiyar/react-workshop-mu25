import './Style.css'
function About(){
var a = 10
var b = 20
var c = a + b
var msg = ""
if(c==30){
    msg = "C Value is " + c
}else{
    msg = "C Value is Not 30"
}
var mycolor = {
    backgroundColor:'blue',
    color:'white'
}
return (<>
        <h1>About Component</h1>
        A Value is {a} <br/>
        B Value is {b}<br/>
        Sum is {a+b} <br/>
        {msg}
        <p style={{backgroundColor:'red',color:'white'}}>I am InLine Css</p>
        <p style={mycolor}>I am Internal Css</p>
        <p style={mycolor}>I am Internal Css</p>
        <p className="myclass">I M Class Data</p>
    </>)
}
export default About