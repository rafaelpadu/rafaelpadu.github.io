import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'

import DashBoardReducer from '../dashboard/dashBoardReducer'
import BillingCyclesReducer from '../billingCycle/billingCycleReducer';
import TabReducer from '../commom/tab/tabReducers'
const rootReducer = combineReducers({
    dashboard: DashBoardReducer,
    tab: TabReducer,
    billingCycle: BillingCyclesReducer,
    form: formReducer,
    toastr: toastrReducer
})
export default rootReducer