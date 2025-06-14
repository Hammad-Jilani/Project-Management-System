import api, { API_BASE_URL } from "@/config/api";
import { ACCEPT_INVITATION_REQUEST, ACCEPT_INVITATION_SUCCESS, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS, DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, FETCH_PROJECT_BY_ID_REQUEST, FETCH_PROJECT_BY_ID_SUCCESS, FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_SUCCESS, INVITE_TO_PROJECT_REQUEST, INVITE_TO_PROJECT_SUCCESS, SEARCH_PROJECT_REQUEST, SEARCH_PROJECT_SUCCESS } from "./ActionType";

export const fetchProjects = ({ category, tag }) => async (dispatch) => {
  dispatch({ type: FETCH_PROJECTS_REQUEST })
  try {
    const { data } = await api.get("/api/projects", { params: { category, tag } })
    console.log("all project ", data);
    dispatch({ type: FETCH_PROJECTS_SUCCESS, projects: data })

  } catch (e) {
    console.log(e);

  }
}

export const searchProjects = (keyword) => async (dispatch) => {
  dispatch({ type: SEARCH_PROJECT_REQUEST })
  try {
    const { data } = await api.get("/api/projects/search?keyword=" + keyword)
    console.log("search project ", data);
    dispatch({ type: SEARCH_PROJECT_SUCCESS, projects: data })

  } catch (e) {
    console.log(e);

  }
}

export function createProjects(projectDat) {
  return async function (dispatch) {
    dispatch({ type: CREATE_PROJECT_REQUEST })
    try {
      const { data } = await api.post("/api/projects", projectDat)
      console.log("create project ", data);
      dispatch({ type: CREATE_PROJECT_SUCCESS, project: data })
    } catch (error) {
      console.log(error);
    }
  }
}

export function fetchProjectById(id) {
  return async function (dispatch) {
    dispatch({ type: FETCH_PROJECT_BY_ID_REQUEST })
    try {
      const { data } = await api.get("/api/projects/" + id)
      console.log("project", data);
      dispatch({ type: FETCH_PROJECT_BY_ID_SUCCESS, project: data })

    } catch (error) {
      console.log(error);
    }
  }
}

export function deleteProject({ projectId }) {
  return async function (dispatch) {
    dispatch({ type: DELETE_PROJECT_REQUEST })
    try {
      const { data } = await api.delete("/api/projects/" + projectId)
      console.log("delete project", data);
      dispatch({ type: DELETE_PROJECT_SUCCESS, projectId })

    } catch (error) {
      console.log(error);
    }
  }
}

export function inviteToProject({ email, projectId }) {
  return async function (dispatch) {
    dispatch({ type: INVITE_TO_PROJECT_REQUEST })
    console.log('chrck email ', email, projectId);

    try {
      const { data } = await api.post("/api/projects/invite", { email, projectId })
      console.log("invite projects", data);
      dispatch({ type: INVITE_TO_PROJECT_SUCCESS, payload: data })
    } catch (error) {
      console.log(error);
    }
  }
}

export function acceptInvitation({ token, navigate }) {
  return async function (dispatch) {
    dispatch({ type: ACCEPT_INVITATION_REQUEST })
    try {

      const { data } = await api.get("/api/projects/accept_invitation", { params: { token: token } })
      navigate("/project/" + data.projectId)
      console.log("accept invitation projects", data);
      dispatch({ type: ACCEPT_INVITATION_SUCCESS, payload: data })
    } catch (error) {
      console.log(error);
    }
  }
}