import React, { useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const inputRef = useRef();
  const [isValid, setIsValid] = useState(true);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const itemCount = inputRef.current.value;
    const convertedItemCount = +itemCount;

    if (
      convertedItemCount === 0 ||
      convertedItemCount < 0 ||
      convertedItemCount > 5
    ) {
      setIsValid(false);
      return;
    }

    props.onAdd(convertedItemCount)
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "10",
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!isValid && <p>Please provide a valid number (1 - 5).</p>}
    </form>
  );
};

export default MealItemForm;
