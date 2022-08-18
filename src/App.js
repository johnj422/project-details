import './App.css';
import React, { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";





function App() {

  const { register, handleSubmit, watch, setError, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const watchName = watch('name')
  const watchCard = watch('card')
  const watchMonth = watch('month')
  const watchYear = watch('year')
  const watchCvc = watch('cvc')

  useEffect(() => {
    if(watchYear){
      if(watchYear.length > 2){
        let error = 'Formato YY'
      }
    }

    
  }, [watchYear])
  
  return (
    <div className="App">
      <div className='left-container'>
        <div className='front-card'>
          <div className='logo'></div>
          <div className='card-number'>
            {!watchCard ?
              <p>0000 0000 0000 0000</p>
              : <p>{`${watchCard.slice(0, 4)} ${watchCard.slice(4, 8)} ${watchCard.slice(8, 12)} ${watchCard.slice(12, 16)}`}</p>
            }

          </div>
          <div className='name'>
            {!watchName ?
              <p>Jane Appleseed</p>
              : <p>{watchName}</p>
            }
          </div>
          <div className='exp-date'>
            {!watchMonth ?
              <p>00/00</p>
              : <p>{`${watchMonth}/${watchYear}`}</p>
            }
          </div>

        </div>
        <div className='back-card'>
          <div className='cvc-back'>
            {!watchCvc ?
              <p>000</p>
              : <p>{watchCvc}</p>
            }

          </div>
        </div>

      </div>
      <div className='right-container'>

        <form className='form' onSubmit={handleSubmit(onSubmit)} >
          {/* register your input into the hook by invoking the "register" function */}
          <label>CARDHOLDER NAME</label>
          <input placeholder="e.g. Jane Appleseed" {...register("name")} />
          <label>CARD NUMBER</label>
          {/* include validation with required or other standard HTML validation rules */}
          <input placeholder='e.g. 1234 5678 9123 0000'{...register("card", { required: 'Ingresa un número válido' }, {maxLength: 16})} />
          {/* errors will return when field validation fails  */}
          <div className='info'>
            <div className='info-labels'>
              <label>EXP. DATE &nbsp;(MM/YY)</label>
              <label>CVC</label>

            </div>
            <div className='info-container'>

              <input className='month' placeholder='MM'{...register("month", { required: "Can't be blank" },{maxLength: 2})} />
              <input className='year' placeholder='YY'{...register("year", { required: true },{maxLength: 2})} />
              {errors.year && <p>{errors.year.message}</p>}
              <input className='cvc' placeholder='e.g. 123'{...register("cvc", { required: true },{maxLength: 3})} />
              {errors.cvc && <p>{errors.cvc.message}</p>}
            </div>
          </div>
          {errors.name && <span>This field is required</span>}

          <input className='button' type="submit" value='Confirm' />
        </form>

      </div>

    </div>
  );
}

export default App;
