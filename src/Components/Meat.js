import React ,{useState} from 'react';
import data from "./data";
import Rates from './Rates'

const Meat = () => {
    const [meal, setMeal] = useState(data)
    const [dish, setDish]= useState()
    console.log(meal)
    return (
        <div className='container'>
            <div className='row'>
                {
                    meal.map(el=>(
                        <div className='col-4 my-5'>
                            <img src={el.img} alt="" className='w-75 h-50'/>
                            <h5 className='my-2'> {el.title}</h5>
                            <p>{el.price}</p>
                            <Rates el={el}/>
                            <button className='mx-auto btn btn-outline-success' onClick={() => console.log()}>order</button>

                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Meat;