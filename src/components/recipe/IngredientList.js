// import React from "react";

// import "../styles/recipe.css"

// // export const RecipeList = () => {

// //     return (
// //         <>
// //        <h1>recipe page only for logged in user</h1>
// //         </>
// //     )
// // }

// export const IngredientList = ( {index, ingredient, quantity, unit} ) => {

//     return (
//         <>
//            <article className="recipes">
//                 <section key={`ingredient-${index}`} className="card">
//                         <div className="recipe_title"> {index+1} {ingredient} ---{quantity} {unit}</div>
                 
//                         </section>
//             </article>

//         </>
//     )
// }

// export const JsonDataDisplay = () =>{
//     const DisplayData=JsonData.map(
//         (info)=>{
//             return(
//                 <tr>
//                     <td>{info.id}</td>
//                     <td>{info.name}</td>
//                     <td>{info.city}</td>
//                 </tr>
//             )
//         }
//     )
 
//     return(
//         <div>
//             <table class="table table-striped">
//                 <thead>
//                     <tr>
//                     <th>Sr.NO</th>
//                     <th>Name</th>
//                     <th>City</th>
//                     </tr>
//                 </thead>
//                 <tbody>
                 
                    
//                     {DisplayData}
                    
//                 </tbody>
//             </table>
             
//         </div>
//     )
//  }
 
