import axios, {AxiosError} from 'axios'
import {
    TEAM_NAME,
    TEAM_ID,
    COMPETITION_ID,
    COMPETITIONS,
    PART_ID,
    PARENT_RELATION,
    BASE_URL,
    BASE_URL_API,
} from '@env'

export const clientSportNet = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-type': 'application/json',
    },
})

export const clientBaseAPI = axios.create({
    baseURL: BASE_URL_API,
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
})

//https://footballapi.pulselive.com/football/teams?pageSize=100&comps=1&altIds=true&page=0

//todo improve error handler
const errorHandler = (error: unknown) => {
    if (error instanceof AxiosError) {
        if (error?.response) {
            // The server responded with a status code outside the 2xx range
            console.log('Error response:', error.response)
            console.log('Error response statusText:', error.response.statusText)
        } else if (error?.request) {
            // The request was made but no response was received
            console.log('Error request:', error.request)
        } else {
            // Something happened in setting up the request that triggered an error
            console.log('Error message:', error?.message)
        }
    }
}

export const receiveStatistics = async () => {
    try {
        const {data} = await clientBaseAPI.get(`/premierLeague/results`)
        // const {data} = await clientSportNet.get(
        //     `public/${PARENT_RELATION}/competitions/${COMPETITIONS}/parts/${PART_ID}`,
        // )
        // const {results, players} = data.resultsTable

        return data
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}

export const receivePlayers = async () => {
    try {
        //premierLeague/results
        const {data} = await clientBaseAPI.get(`/premierLeague/players`)

        return data
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}

export const receiveNextMatches = async () => {
    try {
        const {data} = await clientBaseAPI.get(`/premierLeague/nextMatches`)

        return data
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}

export const receiveLastMatches = async () => {
    try {
        const {data} = await clientBaseAPI.get(
            `/premierLeague/liverpoolMatchesResults`,
        )
        return data
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}

export const receiveArticles = async () => {
    try {
        const {data} = await clientBaseAPI.get(
            `/premierLeague/liverpoolArticles`,
        )

        return data
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}

export const receiveShopItems = async () => {
    try {
        const {data} = await clientBaseAPI.get(`/premierLeague/liverpoolShop`)
        return data
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}

export const receiveVideo = async () => {
    try {
        const {data} = await clientBaseAPI.get(`/video`)
        return data
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}

export const receiveImages = async () => {
    try {
        const {data} = await clientBaseAPI.get(`/img`)
        return data
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}

export const receivePublicKeyStripe = async () => {
    try {
        const {data} = await clientBaseAPI.get(`/payment-public-permission`)
        return data
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}

export const implementPaymentSheet = async (payload: object) => {
    try {
        const {data} = await clientBaseAPI.post(`/payment-sheet`, {
            ...payload,
        })
        return data
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}
