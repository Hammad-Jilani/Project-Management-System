import api from "@/config/api"
import { CREATE_COMMENT_FAILURE, CREATE_COMMENT_REQUEST, CREATE_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE, DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS, FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS } from "./ActionTypes"

export function createComment(commentData) {
  return async function (dispatch) {
    dispatch({ type: CREATE_COMMENT_REQUEST })
    try {
      const { data } = await api.post(`/api/comments`, commentData)
      console.log('comment created ', data);
      dispatch({ type: CREATE_COMMENT_SUCCESS, comments: data })

    } catch (error) {
      console.log("error - ", error);
      dispatch({
        type: CREATE_COMMENT_FAILURE,
        error: error.message
      })
    }
  }
}

export function deleteComment(commentId) {
  return async function (dispatch) {
    dispatch({ type: DELETE_COMMENT_REQUEST })
    try {
      await api.delete(`/api/comments/${commentId}`)
      dispatch({ type: DELETE_COMMENT_SUCCESS, commentId })
    } catch (error) {
      console.log("error - ", error);
      dispatch({
        type: DELETE_COMMENT_FAILURE,
        error: error.message
      })
    }
  }
}
export function fetchComments(issueId) {
  return async function (dispatch) {
    dispatch({ type: FETCH_COMMENTS_REQUEST })
    try {
      const { data } = await api.get(`/api/comments/${issueId}`)
      dispatch({ type: FETCH_COMMENTS_SUCCESS, comments: data })
      console.log('fetch comment ', data);


    } catch (error) {
      console.log("error - ", error);
      dispatch({
        type: FETCH_COMMENTS_FAILURE,
        error: error.message
      })
    }
  }
}