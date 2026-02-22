import api from './axiosInstance';

const apiRequests = {

    //get
    getCards: () => api.get('/cards'),

    //post
    postCards: (data) => api.post('/cards/create',data),


    //delete
    deleteCards: (id) => api.delete(`/cards/delete/${id}`),


}

export default apiRequests;