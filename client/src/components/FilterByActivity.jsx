// export default function FilterByActivity({activitySt, handleFilterAct}){
//     return (
//         <div style={{"width": "100%"}}>
//             <p className="mainText">FILTER BY ACTIVITY</p>
//             <div className="checksContainer">
//                 <input type="radio" name="activities" id="all" value="all" className="checkBox" defaultChecked onChange={handleFilterAct}/>
//                 <label htmlFor="all" className="labelAct">All</label>
//                 <br/>
//             </div>
//             {
//                 activitySt.length > 0 ?
//                 activitySt.map(el => {
//                     return (
//                         <div className="checksContainer" key={el}>
//                             <input className="checkBox" type="radio" name="activities" value={el} id={el} onChange={handleFilterAct}></input>
//                             <label htmlFor={el} className="labelAct">{el}</label>
//                             <br/>
//                         </div>
//                     )
//                 })
//                 : <></>
//             }
//         </div>
//     )
// }