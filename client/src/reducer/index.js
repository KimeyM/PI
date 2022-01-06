const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
}
  
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'GET_COUNTRIES':
        return {
          ...state,
          countries: action.payload,
          allCountries: action.payload,
        };

      case 'GET_NAME_COUNTRIES':
        return {
          ...state, 
          countries: action.payload
        };

      case 'FILTER_BY_CONTINENTS':
        return {
          ...state,
          countries: action.payload === "none" ? state.allCountries : state.allCountries.filter(e => e.continent === action.payload)
        };

      case 'POST_ACTIVITY':
          return {
            ...state,
            activities: [...state.activities, action.payload],
        };

      case 'GET_ALL_ACTIVITIES':
        return {
          ...state,
          activities: action.payload,
        };        
          
      case 'ORDER_BY_POPULATION':
        let sortedAr = action.payload === 'population_asc' ? state.countries.sort(function (a, b){
          if (a.population > b.population) {
            return 1;
          };
          if (b.population > a.population) {
            return -1;
          };
          return 0;
        }) :
          state.countries.sort(function (a, b) {
            if (a.population > b.population) {
              return -1;
            };
            return 0;
          });
          return {
            ...state,
            countries: sortedAr
          };
  
      case 'ORDER_BY_NAME':
        let sortedArr = action.payload === 'name_asc' ? state.countries.sort(function (a, b){
          if (a.name > b.name) {
            return 1;
          };
          if (b.name > a.name) {
            return -1;
          };
          return 0;
        }) :
        state.countries.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          };
          return 0;
        });
        return {
          ...state,
          countries: sortedArr
        };

      case 'FILTER_CREATED':
        return {
          ...state,
          countries: action.payload === 'none' ? state.allCountries : state.allCountries.filter((c)=>{return c.activities?.some((a)=> a.name === action.payload)})
        };
 
      default:
        return state
    };
  };