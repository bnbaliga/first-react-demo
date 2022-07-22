import React from "react";

class Pet2 extends React.Component
{
  render()
  {
    return <span>My name is <em>{this.props.name}</em></span>;
  }
}

const Pet = (props) => {
//const Pet = function(props) {
//function Pet(props) {
  return (
    <div>
      <h1>{props.Name}</h1>
      <h2>{props.Animal}</h2>
      <h2>{props.Breed}</h2>
    </div>
  );
};

export default Pet;
//export default Pet2;
