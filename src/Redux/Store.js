import { createStore, combineReducers } from "redux"
import UserReducer from './Reducers/UserReducer'
import CategoryReducer from './Reducers/CategoryReducer'

const store = createStore(combineReducers({
    user : UserReducer,
    category : CategoryReducer
},{
    user : {loginstatus:false,user_id:undefined},
    category : {category_id: undefined}
}))

export default store;