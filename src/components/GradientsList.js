import React from "react"
import Gradient from "./Gradient/index"


/* const GradientsList = ({ list }) => {
    return (
      <ul className="row list-unstyled">
        {list.map((el) => (
          <Gradient
            name={el.name}
            colorStart={el.start}
            colorEnd={el.end}
            key={el.name}
          />
        ))}
      </ul>
    );
  }; */ 


const GradientsList = (props) => {
  console.log(props);
  const { list } = props;
  return (
    <ul className="row list-unstyled">
      {list.map((el) => {
        const { name, start, end } = el;
        return (
          <Gradient key={name} colorStart={start} colorEnd={end} name={name} />
        );
      })}
    </ul>
  );
};




export default GradientsList