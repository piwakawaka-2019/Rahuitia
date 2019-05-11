const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_ALLRAHUI':
      return action.rahui;
    default:
      return state;
  }
};

//potential function for destring
// function getNewRahuiArr (allrahui) {
 
//   const newArr = allrahui.map(rahui => {
//     console.log ("1", rahui)
//     JSON.parse(rahui.geo_ref)
//     console.log ("2.updates", rahui)
//     return rahui
//   })
//   return newArr
// }


export default reducer