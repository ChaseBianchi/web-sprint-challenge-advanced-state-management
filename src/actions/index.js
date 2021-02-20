import axios from 'axios';
export const FETCH_BEGIN = 'FETCH_BEGIN'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'
export const POST_SUCCESS = 'POST_SUCCESS'
export const UPDATE_ERR = 'UPDATE_ERR'


export const fetchData = () => dispatch =>{
    dispatch({type: FETCH_BEGIN})
    axios.get('http://localhost:3333/smurfs')
        .then(res=>{
            console.log('fetchdata: ',res)
            dispatch({type: FETCH_SUCCESS, payload: res.data})
        }).catch(err=>{
            dispatch({type: FETCH_FAIL, payload: err.res.data})
        })
}

export const addSmurf = (newSmurf) => dispatch =>{
    axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(res=>{
            console.log(res);
            dispatch({type: POST_SUCCESS, payload: res.data})
        })
}

export const updateError = ()=>dispatch=>{
    dispatch({type: UPDATE_ERR})
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

