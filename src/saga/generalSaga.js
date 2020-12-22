import { put, call, select } from 'redux-saga/effects';
import { API } from "../api"
import * as Actions from '../actions/Actions';
import NavigationService from '../navigation/NavigationService';

export default function* generalSaga(action) {

  let currentState = yield select()
  // API.setHeader('Accept-Language', getAppLanguage())

  console.log('generalSaga', action);
  yield put(Actions.enableLoader(action.payload.actionType));

  if (action.payload.actionType == "SAVE") {
    yield put(Actions.saveResponsePresist(action.payload, action.payload.body))
    yield put(Actions.disableLoader(action.payload.actionType));
    return
  }

  console.log("Current State : ", action.payload.actionType, currentState)

  if (action.payload.setHeader && currentState.presistReducer.data.userData && currentState.presistReducer.data.userData.access_token) {
    let token = currentState.presistReducer.data.userData.access_token
    API.setHeader("Authorization", "Bearer " + token)
  }

  let callMethod =
    action.payload.requestMethod == "POST" ? API.post :
      action.payload.requestMethod == "GET" ? API.get :
        action.payload.requestMethod == "PUT" ? API.put :
          action.payload.requestMethod == "DELETE" ? API.delete : null
  const response = yield call( // open socket between server
    callMethod,
    action.payload.serviceUrl + (action.payload.urlParams ? (action.payload.urlParams) : "")
    +
    ((action.payload.page && action.payload.urlParams && action.payload.urlParams.toString().includes("?")) ? ("&page=" + action.payload.page)
      :
      (action.payload.page ? ("?page=" + action.payload.page) : "")
    )
    ,
    (action.payload.body ? action.payload.body : {})
  );
  console.log("%c" + action.payload.actionType + " Response : ", "background:green;color:white", "", response)

  try {
    //Will edit this section according to the api response
    if (response.ok) {
      if (response.data) {
        if (action.payload.reducerVariable) {
          if (action.payload.presist) {  // save in presist 
            yield put(Actions.saveResponsePresist(action.payload, response.data))
          }
          else {  // save in general
            yield put(Actions.saveResponseGeneral(action.payload, response.data))
          }
        }
      }
      yield put(Actions.disableLoader(action.payload.actionType));

      if (action.payload.navigationType == "back") {
        NavigationService.goBack()
      }

      else if (action.payload.navigateTo) { // Navigate to a screen after api call

        action.payload.navigationType == "navigate" ?
          NavigationService.navigate(action.payload.navigateTo, action.payload.extraData)
          :
          action.payload.navigationType == "replace" ?
            NavigationService.replace(action.payload.navigateTo, action.payload.extraData)
            :
            NavigationService.reset(action.payload.navigateTo, action.payload.extraData)

      }
      if (action.payload.nextAction) { // call an action after api success
        try {
          yield put(action.payload.nextAction);
        }
        catch {
          try {
            action.payload.nextAction()
          }
          catch {
            yield put(Actions.disableLoader(action.payload.actionType));
          }

        }

      }
    }
  }
  catch {
    yield put(Actions.disableLoader(action.payload.actionType));
  }
}

