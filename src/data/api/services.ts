import axios from 'axios';
import {TEAM_NAME, TEAM_ID, COMPETITION_ID, COMPETITIONS, PART_ID, PARENT_RELATION, BASE_URL, BASE_URL_FIREBASE} from '@env';


export const clientSportNet = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-type': 'application/json',
    },
});

export const clientArticlesFirebase = axios.create({
    baseURL: BASE_URL_FIREBASE,
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
});


export const receiveStatistics = async () => {
    try {
        const {data} = await clientSportNet.get(
            `public/${PARENT_RELATION}/competitions/${COMPETITIONS}/parts/${PART_ID}`,
        );
        const { results, players } = data.resultsTable;
        return { results, players };
    } catch (error) {
        // console.log('Error service receiveStatistics', error);
        return Promise.reject(error);
    }
};


export const receiveNextMatches = async () => {
    try {
        const {data} = await clientSportNet.get(
            `/matches?playerAppSpace=${TEAM_NAME}.futbalnet.sk&competitionId=${COMPETITION_ID}&withDate=true&closed=false&teamId=${TEAM_ID}&offset=0&limit=8`,
        );
        const {matches} = data;

        return matches;
    } catch (error) {
        // console.log('Error service receiveNextMatches', error);
        return Promise.reject(error);
    }
};

export const receiveArticles = async () => {
    try {
        const {data} = await clientArticlesFirebase.get(`/articles`);
        return data;
    } catch (error) {
        // console.log('Error service receiveArticles======', error);
        return Promise.reject(error);
    }
};

export const receiveVideo = async () => {
    try {
        const {data} = await clientArticlesFirebase.get(`/video`);
        return data;
    } catch (error) {
        // console.log('Error service  receiveVideo======', error);
        return Promise.reject(error);
    }
};

export const receiveImages = async () => {
    try {
        const {data} = await clientArticlesFirebase.get(`/img`);
        return data;
    } catch (error) {
        // console.log('Error service receiveImgs======', error);
        return Promise.reject(error);
    }
};


export const receivePublicKeyStripe = async () => {
    try {
        const {data} = await clientArticlesFirebase.get(`/payment-public-permission`);
        return data;
    } catch (error) {
        console.log('Error service receiveImgs======', error);
        return Promise.reject(error);
    }
};

export const implementPaymentSheet = async (payload: object) => {
    try {
        const {data} = await clientArticlesFirebase.post(`/payment-sheet`, {...payload});
        return data;
    } catch (error) {
        // console.log('Error service implementPaymentSheet======', error);
        return Promise.reject(error);
    }
};
