const initialState = {
    countries: [],
    allCountries: [],
    activities: [],
  }
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'GET_COUNTRIES':
        return {
          ...state,
          countries: action.payload,
          allCountries: action.payload,
        }
      case 'GET_NAME_COUNTRIES':
        return {
          ...state, 
          countries: action.payload
        }
    case 'FILTER_BY_CONTINENTS':
      return {
        ...state,
        countries: action.payload === "none" ? state.allCountries : state.allCountries.filter(e => e.continent === action.payload)
      }
      case "POST_ACTIVITY":
          return {
            ...state,
            activities: [...state.activities, action.payload]
        }
      case "GET_ALL_ACTIVITIES":
        return {
          ...state,
          activities: action.payload,
          // allActivities: action.payload
        }
      //   case 'FILTER_BY_ACTIVITY':
      
        case "FILTER_CREATED":
          // return{
          //   ...state,
          //   countries: action.payload === "All" ? state.allCountries : state.allCountries.filter(e => e.activities === action.payload)
          // }
              return {
              ...state,
              countries: state.countries.filter((c)=>{return c.activities?.some((a)=> a.name === action.payload)})
      }
          
            // const allCountries = state.allCountries
            // const statusFiltered =
            //   action.payload === 'All'
            //     ? allCountries
            //     : allCountries.filter(el => el.activities === action.payload)
            // //hacer la logica antes del return, si no rompe
            // return {
            //   ...state,
            //   countries: statusFiltered,
            // }

        
          
    case 'ORDER_BY_POPULATION':
      let sortedAr = action.payload === 'population_asc' ? state.countries.sort(function (a, b){
        if (a.population > b.population) {
          return 1;
        }
        if (b.population > a.population) {
          return -1;
        }
        return 0;
      }) :
        state.countries.sort(function (a, b) {
          if (a.population > b.population) {
            return -1;
          }
          return 0;
        })
        return {
          ...state,
          countries: sortedAr
        }
  
        case 'ORDER_BY_NAME':
          let sortedArr = action.payload === 'name_asc' ? state.countries.sort(function (a, b){
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          }) :
          state.countries.sort(function (a, b) {
            if (a.name > b.name) {
              return -1;
            }
            return 0;
          })
        return {
          ...state,
          countries: sortedArr
        }

 
      default:
        return state
    }
  }
  
  export default rootReducer