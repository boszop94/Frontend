
import Vue from 'vue'
export default {
    getUser(callback){
    Vue.$http.get('http://localhost:3000/users')
    .then((response) => {
        console.log(response)
        callback(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }
}
