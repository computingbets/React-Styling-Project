import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [truValid, setValid] = useState(true);

  // resets ui by setting state to true if there is a value in input
  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0 ) {
      setValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    // onAddGoal passes up to App.js, where data set lives
    if (enteredValue.trim().length === 0) {
      setValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
  // pass 

  return (

    // Returns props that fire state funct in first of seq, then state variable to pass data up thru state variable
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !truValid ? 'red' : 'black' }}>Course Goal</label>
        <input style={{ borderColor: !truValid ? 'red' : '#ccc', background : !truValid ? 'salmon' : 'transparent' }} type="text" onChange={goalInputChangeHandler} />
      </div>
      {/* imported button component */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
