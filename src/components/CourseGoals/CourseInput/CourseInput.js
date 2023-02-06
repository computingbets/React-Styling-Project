import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    // onAddGoal passes up to App.js, where data set lives
    props.onAddGoal(enteredValue);
  };
  // pass 

  return (

    // Returns props that fire state funct in first of seq, then state variable to pass data up thru state variable
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      {/* imported button component */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
