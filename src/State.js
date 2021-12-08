 import React, {useState} from "react";
import {Modal} from "react-bootstrap"


 const State = () => {
    const [counter,setCounter]= useState(Math.max(0))
    const [show , setShow]= useState(Math.max(0))
     const [value,setValue]=useState('')
     console.log(counter)
     return(
         <div className='container'>
             <h1>Сиз кнопканы {counter} жолу бастыныз! </h1>
             <button
                 className="btn btn-primary"
                 onClick={()=>setCounter(counter +1)}
             >Click me</button>

             <button
             className='btn btn-danger'
             onClick={()=> setCounter(counter - 1)}
             >Click me</button>
             <button className='btn btn-primary' onClick={()=> setShow(!show)}
             >Launch demo modal</button>

             <Modal show={show} >
                 <Modal.Header closeButton onClick={() => setShow(!show)}>
                     <Modal.Title>Modal heading</Modal.Title>
                 </Modal.Header>
                 <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                 <Modal.Footer>
                     <button className="btn btn-secondary" onClick={() => setShow(!show)}>
                         Close
                     </button>
                     <button className="btn btn-primary" onClick={() => setShow(!show)} >
                         Save Changes
                     </button>
                 </Modal.Footer>
             </Modal>
             <input type="text" onChange={(e)=> console.log(setValue(e.target.value))}/>
             <span>{value}</span>

         </div>
     )
 }

 export default State