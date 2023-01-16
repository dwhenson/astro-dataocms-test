import React  from "react";

function SelectFruits({ fruits }) {
  const [
    selectedOption,
    setSelectedOption,
  ] = React.useState("");

  return (
    <>
        <form>
        <fieldset>
          <legend>Fruits to Choose</legend>

          <select
            value={selectedOption}
            onChange={(event) => {
              setSelectedOption(
                event.target.value
              );
            }}
          >
            {fruits.map((fruit, index) => (
              <option
                key={index}
                value={fruit}
              >
                {fruit}
              </option>
            ))}
          </select>
        </fieldset>
      </form>

      <p>
        You chose to eat: {selectedOption}
      </p>
      </>
  );
}

export default SelectFruits;
