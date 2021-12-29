const initialState = {
    countries: [],
    allCountries: [],
    activities: [],
    allActivities: []
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
      case "GET_ALL_ACTIVITIES":
        return {
          ...state,
          activities: action.payload,
          allActivities: action.payload
        }

        case "FILTER_CREATED":
          // const allActivities = state.allActivities
          // const createdFilter = action.payload === "name" ? allActivities.filter(el => el.name) : allActivities.filter(el => el.name)
          // return {
          //   ...state,
          //   activities: action.payload === "All" ? state.allActivities : createdFilter
          // }
          
          return {
            ...state,
            activities: action.payload === "All" ? state.allActivities : state.allActivities.filter(e => e.name === action.payload)
          }

        case "POST_ACTIVITY":
          return {
            ...state,
          }
          
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