// import React, { useState, useEffect} from 'react';
// import {Link} from 'react-router-dom'; //en react router dom v6 useHistory --> useNavigate()
// import { postActivity, getNameCountries } from '../actions';
// import { useDispatch, useSelector } from "react-redux";

// function validate(input) {
//     let errors = {};
//     if (!input.name) { //input = estado local
//         errors.name = 'Name is required';
//     } 
//     // else if (!input.nickname) {
//     //     errors.nickname = 'Nickname debe ser completado';
//     // }
//     return errors;
// };


// export default function ActivityCreate(){
//     const dispatch = useDispatch()
//     // const history = useNavigate() //me redirige a la ruta que le indique (useHistory=useNavigate)
//     const countries = useSelector((state) => state.countries)
//     const[errors, setErrors] = useState({});
//     const [input, setInput] = useState({
//         name: "",
//         difficulty: "",
//         duration: "",
//         season: "",
//         countries: []
//     })

//     function handleChange(e){
//         setInput({
//             ...input,
//             [e.target.name] : e.target.value
//         })
//         setErrors(validate({
//             ...input,
//             [e.target.name] : e.target.value
//         }));
//     }

// function handleCheck(e){
//     if (e.target.checked) {
//         setInput({
//             ...input,
//             status: e.target.value
//         })
//     }
// }

// function handleSelect(e){
//     setInput({
//         ...input,
//         countries: [...input.countries, e.target.value]
//         // me guarda en un arreglo todo lo que vaya seleccionando de select
//     })
// }

// function handleSubmit(e){
//     e.preventDefault();
//     dispatch(postActivity(input))
//     alert("¡Actividad creada!")
//     setInput({
//         name: "",
//         difficulty: "",
//         duration: "",
//         season: "",
//         countries: []
//     })
//     // history.push('/countries') //luego de crear el personaje, redirige automaticamente a Home
// }

// // function handleDelete(el){
// //     setInput({
// //         ...input,
// //         occupation: input.occupation.filter(occ => occ!== el)
// //     })
// // }


//     useEffect(() => {
//         dispatch(getNameCountries());
//     }, [dispatch]);

//     return (
//         <div>
//             <Link to='/countries'><button>Atrás</button></Link>
//             <h1>Create tourist activity</h1>
//             <form onSubmit={(e)=> handleSubmit(e)}>
//                 <div>
//                     <label>Name:</label>
//                     <input
//                     type="text"
//                     value= {input.name}
//                     name="name"
//                     onChange = {(e)=>handleChange(e)}
//                     />
//                     {errors.name && (
//                         <p className='error'>{errors.name}</p> //renderizo el error
//                     )}
//                 </div>
//                 <div>
//                     <label>Difficulty:</label>
//                         <label> <input
//                             type="checkbox"
//                             value= "1"
//                             name="1"
//                             onChange={(e)=>handleCheck(e)}
//                         />Very easy</label>
//                         <label> <input
//                             type="checkbox"
//                             value= "2"
//                             name="2"
//                             onChange={(e)=>handleCheck(e)}
//                         />Easy</label>
//                         <label> <input
//                             type="checkbox"
//                             value= "3"
//                             name="3"
//                             onChange={(e)=>handleCheck(e)}
//                         />Middle</label>
//                         <label> <input
//                             type="checkbox"
//                             value= "4"
//                             name="4"
//                             onChange={(e)=>handleCheck(e)}
//                         />Hard</label>
//                         <label> <input
//                             type="checkbox"
//                             value= "5"
//                             name="5"
//                             onChange={(e)=>handleCheck(e)}
//                         />Very hard</label>
//                 </div>
//                 <div>
//                     <label>Duration:</label>
//                         <input
//                         type="text"
//                         value= {input.difficulty}
//                         name="difficulty"
//                         onChange = {(e)=>handleChange(e)}
//                         />
//                 </div>
//                 <div>
//                     <label>Season:</label>
//                         <label> <input
//                             type="checkbox"
//                             value= "spring"
//                             name="spring"
//                             onChange={(e)=>handleCheck(e)}
//                         /> Spring</label>
//                         <label> <input
//                             type="checkbox"
//                             value= "summer"
//                             name="summer"
//                             onChange={(e)=>handleCheck(e)}
//                         /> Summer</label>
//                         <label> <input
//                             type="checkbox"
//                             value= "autumn"
//                             name="autumn"
//                             onChange={(e)=>handleCheck(e)}
//                         /> Autumn</label>
//                         <label> <input
//                             type="checkbox"
//                             value= "winter"
//                             name="winter"
//                             onChange={(e)=>handleCheck(e)}
//                         /> Winter</label>
//                 </div>
//                 <select onChange={(e) => handleSelect(e)}>
//                     {countries.map((cid) => (
//                         <option value = {cid.name} > {cid.name} </option>
//                     ))}
//                 </select>
                
//                <button type= 'submit'>Create tourist activity</button>
//             </form>




//             {/* {input.occupation.map(el =>
//                 <div className='divOcc'>
//                     <p>{el}</p>
//                     <button className="botonX" onClick={()=> handleDelete(el)}>x</button>
//                 </div>
//                 )} */}
//         </div>
//     )
// }