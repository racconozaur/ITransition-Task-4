import axios from 'axios'
import {setUser} from "../reducers/userReducer";

export const registration = async (email, password) => {
    try {
        const response = await axios.post(`https://agile-peak-50869.herokuapp.com/api/auth/registration`, {
            email,
            password
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const login =  (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`https://agile-peak-50869.herokuapp.com/api/auth/login`, {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`https://agile-peak-50869.herokuapp.com/api/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem('token')
        }
    }
}

export const deleteuser = async (id) => {
    try {
        await axios.delete(`https://agile-peak-50869.herokuapp.com/api/auth/delete/${id}`)
        
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const updateStatus = async (id) => {
    try {
        await axios.patch(`https://agile-peak-50869.herokuapp.com/api/auth/user/${id}`)
        
    } catch (e) {
        alert(e.response.data.message)
    }
}





