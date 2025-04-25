import api from "@/config/api";
import { FETCH_CHAT_BY_PROJECT_FAILURE, FETCH_CHAT_BY_PROJECT_REQUEST, FETCH_CHAT_BY_PROJECT_SUCCESS, FETCH_CHAT_MESSAGES_FAILURE, FETCH_CHAT_MESSAGES_REQUEST, FETCH_CHAT_MESSAGES_SUCCESS, SEND_MESSAGES_FAILURE, SEND_MESSAGES_REQUEST, SEND_MESSAGES_SUCCESS } from "./ActionTypes"

export function sendMessage(messageData) {
  return async function (dispatch) {
    dispatch({ type: SEND_MESSAGES_REQUEST })
    try {
      const { data } = await api.post("/api/messages/send", messageData)
      dispatch({ type: SEND_MESSAGES_SUCCESS, message: data })
    } catch (error) {
      console.log(error);
      dispatch({ type: SEND_MESSAGES_FAILURE, error: error.message })

    }
  }
}
export function fetchChatByProject(projectId) {
  return async function (dispatch) {
    dispatch({ type: FETCH_CHAT_BY_PROJECT_REQUEST })
    try {
      const { data } = await api.get(`/api/projects/${projectId}/chat`)
      console.log('fetch chat ', data);
      dispatch({ type: FETCH_CHAT_BY_PROJECT_SUCCESS, chat: data })

    } catch (error) {
      console.log(error);
      dispatch({ type: FETCH_CHAT_BY_PROJECT_FAILURE, error: error.message })
    }
  }
}

export function fetchChatMessages(chatId) {
  return async function (dispatch) {
    dispatch({ type: FETCH_CHAT_MESSAGES_REQUEST })
    try {
      const { data } = await api.get(`/api/messages/chat/${chatId}`)
      console.log('fetch messages ', data);
      dispatch({ type: FETCH_CHAT_MESSAGES_SUCCESS, chatId, messages: data })

    } catch (error) {
      console.log(error);
      dispatch({ type: FETCH_CHAT_MESSAGES_FAILURE, error: error.message })
    }
  }
}