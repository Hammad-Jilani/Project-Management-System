import { FETCH_ISSUES_REQUEST, FETCH_ISSUES_BY_ID_REQUEST, CREATE_ISSUE_REQUEST, DELETE_ISSUE_REQUEST, ASSIGNED_ISSUE_TO_USER_REQUEST, FETCH_ISSUES_SUCCESS, FETCH_ISSUES_BY_ID_SUCCESS, UPDATE_ISSUE_STATUS_SUCCESS, CREATE_ISSUE_SUCCESS, ASSIGNED_ISSUE_TO_USER_SUCCESS, DELETE_ISSUE_SUCCESS, FETCH_ISSUES_FAILURE, CREATE_ISSUE_FAILURE, DELETE_ISSUE_FAILURE, ASSIGNED_ISSUE_TO_USER_FAILURE } from './ActionTypes';

const initalState = {
  issue: [],
  loading: false,
  error: null,
  issueDetails: null
}
const issueReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_ISSUES_REQUEST:
    case FETCH_ISSUES_BY_ID_REQUEST:
    case CREATE_ISSUE_REQUEST:
    case DELETE_ISSUE_REQUEST:
    case ASSIGNED_ISSUE_TO_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_ISSUES_SUCCESS:
      return {
        ...state,
        loading: false,
        issue: action.issue
      }
    case FETCH_ISSUES_BY_ID_SUCCESS:
    case UPDATE_ISSUE_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        issueDetails: action.issues
      }
    case CREATE_ISSUE_SUCCESS:
      return {
        ...state,
        loading: false,
        issue: [...state.issue, action.issues]
      }
    case ASSIGNED_ISSUE_TO_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        issue: state.issue.map(is => is.id === action.issues.id ? action.issues : is)
      }
    case DELETE_ISSUE_SUCCESS:
      return {
        ...state,
        loading: false,
        issue: state.issue.filter(one => one.id !== action.issueId)
      }
    case FETCH_ISSUES_FAILURE:
    case CREATE_ISSUE_FAILURE:
    case DELETE_ISSUE_FAILURE:
    case ASSIGNED_ISSUE_TO_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    default:
      return state;
  }
}
export default issueReducer