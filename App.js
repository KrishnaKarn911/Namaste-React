import React from "react";
import ReactDOM from "react-dom/client"



const root = ReactDOM.createRoot(document.getElementById("root"));

const description = <h3>Above are the fruits list</h3>
const bananaQuantity = 10
const appleQuantity = 5
const pineAppleQuantity = 6
const orangeQuantity = 7
const FruitListComponent = () => {
    return (<div>
        <div id="container">
            <li>Banana</li><p>{bananaQuantity}kg</p>
            <li>Apple</li><p>{appleQuantity}kg</p>
            <li>Orange</li><p>{orangeQuantity}kg</p>
            <li>PineApple</li><p>{pineAppleQuantity}kg</p>
        </div>
        {description}
    </div>)
}
const Heading = () => (<div><h1>List of Fruits and their quantity</h1>
    <FruitListComponent /></div>
)



root.render(<Heading />);