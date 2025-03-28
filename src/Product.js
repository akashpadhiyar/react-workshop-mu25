import React from 'react';
import './Style.css'
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mydata:[]  };
    }
    componentDidMount(){
        fetch("https://dummyjson.com/products")
        .then(res=>res.json())
        .then(res=>{
            console.table(res)
            this.setState({mydata:res.products})
        })
        .catch(err=>alert(err))
    }
    render() {
        return (
            <>
            <div className='mydivbox'>
            {this.state.mydata.map((value,index)=>{
                return (<div className='mydiv'>
                    <img src={value.thumbnail} width={200}/>
                
                <p>{value.title}</p>
                <p>${value.price}</p>
                
                </div>)
            })}
            </div>
            </>
        );
    }
}

export default Product;