import axios from 'axios';

export function getUsers(){
    axios.get('http://localhost:5000/api/users')
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}