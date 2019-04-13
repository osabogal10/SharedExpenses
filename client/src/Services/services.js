import axios from 'axios'

//const baseURL = 'https://shielded-springs-79676.herokuapp.com/api/1.0/app'
const baseURL = ''

const getUser = (token, onComplete, onError) => {
  axios.get(`${baseURL}/user`,
    {
      headers: {
        //'Authorization': `Bearer ${token}`
        'Authorization': token,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      mode:'no-cors'
    })
    .then(onComplete ? onComplete : (res) => console.log('response: ', res))
    .catch(onError ? onError : (err) => console.log('err: ', err));
}

const getGroups = (token, onComplete, onError) => {
  axios.get(`${baseURL}/groups`,
    {
      headers: {
        'Authorization': token
      }
    })
    .then(onComplete ? onComplete : (res) => console.log('response: ', res))
    .catch(onError ? onError : (err) => console.log('err: ', err));
}

const getGroupDetail = (id, token, onComplete, onError) => {
  axios.get(`${baseURL}/group/${id}`,
    {
      headers: {
        'Authorization': token
      }
    })
    .then(onComplete ? onComplete : (res) => console.log('response: ', res))
    .catch(onError ? onError : (err) => console.log('err: ', err));
}

const getExpenseDetail = (id, token, onComplete, onError) => {
  axios.get(`${baseURL}/expense/${id}`,
    {
      headers: {
        'Authorization': token
      }
    })
    .then(onComplete ? onComplete : (res) => console.log('response: ', res))
    .catch(onError ? onError : (err) => console.log('err: ', err));
}

const Services = {getUser,getGroups,getGroupDetail,getExpenseDetail}
export default Services;
