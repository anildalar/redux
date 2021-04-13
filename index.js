//1.Action = Events JsObject {}

//Lets Create new Action



//Action Creator
function BuyOneLaptopForMe(){
    //the role of any function is to return something
    //This is an example of function return an object
    return {
        "type" : "BUYLAPTOP",
        "info" : {

        }
    }
}

//2.Reducers = functions  oldvalue -> newvalue

let initialData = {
    noOFlaptop:10
}

//Lets Create a reducer function

// accept oldvalue and return  new value
let reducer = (state = initialData,action)=>{
    switch(action.type){
        case 'BUYLAPTOP':
            return {
                noOFlaptop: state.noOFlaptop - 1 
            }
            break;
        case 'SELLLAPTOP':
            return {
                noOFlaptop: state.noOFlaptop + 1 
            }
            break;
        default:

    } 
}

//3.Store  -> store newValue

//lets create store object
const redux = require('redux');
const createStore = redux.createStore;

const store = createStore(reducer);

console.log('Initial Store',store.getState());
const unsubscribe = store.subscribe(()=>{ console.log('Updated State',store.getState()) });
//Trigger Action
store.dispatch(BuyOneLaptopForMe()); // Priyanka
store.dispatch(BuyOneLaptopForMe()); // Mahima