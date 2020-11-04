import {
    GET_COMISSION,
    ADD_COMISSION,
    EDIT_COMISSION,
    DELETE_COMISSION,
    SEARCH_COMISSION,
    UPDATE_COMISSION
} from '../Action/actionType'

export const getComission = () => ({
    type: GET_COMISSION,
})
export const AddComission = (data) => ({
    type: ADD_COMISSION,
    data
})
export const editComission = () => ({
    type: EDIT_COMISSION,
})
export const deleteComission = (data) => ({
    type: DELETE_COMISSION,
    id: data.id
})
export const searchComission = (value) => ({
    type: SEARCH_COMISSION,
    value
})
export const updateComission = (data) => ({
    type: UPDATE_COMISSION,
    data
})

