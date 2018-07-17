import axios from 'axios'
console.log('GOALLLL')
export default {
  getOffices (cb) {
    console.log('Home::created') // useful for understanding the lifecycle
    axios.get('http://core.naxa.com.np/office/api/office/')
    .then(function (response) {
      console.log(response.data)
      cb(response.data)
    })
    .catch(function (error) {
      // if an error occurs, print that error
      console.log(error)
    })
  },
  buyOffices (offices, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
