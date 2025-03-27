import React from "react";
import Header from "./Header";
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
        <div>
            <Header />
            <h1>Home Component</h1>
        </div>
        )
    }
}
export default Home