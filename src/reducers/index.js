import { FETCH_SMURF, FETCH_SMURF_SUCCESS, ADD_SMURF, SET_FAILURE }  from './../actions'

export const initialState = {
    smurfs: [
        // {
        //   name:'Poppa Smurf',
        //   position:'Village Leader',
        //   nickname: 'Pops',
        //   description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
        // },
        // {
        //   id:"JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZ",
        //   name:'Smurfette',
        //   position:'Beautician',
        //   nickname: 'Smurfette',
        //   description: 'Smurfette\'s role in the village is that of any other smurf; chores, and helping out where she can, but for her specifically, she is often seen to be very active in organizing events.'
        // }
      ],
    isLoading: false,
    error: ''
}

export const reducer = ( state = initialState, action)=>{
    switch (action.type) {
    case(FETCH_SMURF):
        return({
            ...state,
            isLoading: true,
            error:''
        });
    case(FETCH_SMURF_SUCCESS):
        return({
            ...state,
            smurfs: action.payload,
            isLoading: false,
            error:'',
        });
    case(ADD_SMURF):
        return({
            ...state,
            smurfs: action.payload,
            isLoading: false,
            error: ''
        });
    case(SET_FAILURE):
        return({
            ...state,
            isLoading: false,
            error: action.payload
        })
    default:
        return state;
    

    } 
}


//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.