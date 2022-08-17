import './App.css';
import React from "react";
import { useForm } from "react-hook-form";

function App() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="App">
      <div className='left-container'>
        <div className='front-card'>

        </div>
        <div className='back-card'>

        </div>

      </div>
      <div className='right-container'>

        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <label>CARDHOLDER NAME</label>
          <input placeholder="e.g. Jane Appleseed" {...register("example")} />
          <label>CARD NUMBER</label>
          {/* include validation with required or other standard HTML validation rules */}
          <input placeholder='e.g. 1234 5678 9123 0000'{...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          <div className='info'>
            <div className='info-labels'>
              <label>EXP DATE (MM/YY)</label>
              <label>CVC</label>

            </div>
            <div className='info-container'>

              <input className='month' placeholder='MM'{...register("exampleRequired", { required: true })} />
              <input className='year' placeholder='YY'{...register("exampleRequired", { required: true })} />
              <input className='cvc' placeholder='e.g. 123'{...register("exampleRequired", { required: true })} />
            </div>
          </div>
          {errors.exampleRequired && <span>This field is required</span>}

          <input className='button' type="submit" value='Confirm'/>
        </form>

      </div>

    </div>
  );
}

export default App;
