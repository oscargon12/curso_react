import React from "react";
import ReactDOM from "react-dom";

const Name = "Oscar Gonzalez";

const user1 = {
  name: "Oscar Gonzalez",
  age: 33,
  Country: "Colombia"
};

const App = <h1>Tengo {user1.age} años</h1>;

const root = document.getElementById("root");

ReactDOM.render(App, root);
