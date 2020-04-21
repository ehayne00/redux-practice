import {combineReducers} from 'redux'

import familyMembersReducer from './familyMembers.js'
import usernameReducer from './username.js'

const rootReducer = combineReducers({    //naming convention rootReducer
    familyMembers: familyMembersReducer,
    username: usernameReducer
})

export default rootReducer;