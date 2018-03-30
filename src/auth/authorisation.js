import router from '../router/index.js'

// URL and endpoint constants
const API_URL = 'http://localhost:3001/'
const LOGIN_URL = API_URL + 'sessions/create/'
const SIGNUP_URL = API_URL + 'users/'

export default {
  loginValidator:{
   beforeEnter:(to,from,next) =>{
     if(localStorage.jwt &&JSON.parse(localStorage.jwt))next();
     else next('/signup')
   }
  },

  // // User object will let us check authentication status
  // user: {
  //   authenticated: false
  // },

  // // Send a request to the login URL and save the returned JWT
  // login(context, creds, redirect) {
  //   let user = new Object;
  //   user.email =z
  //   context.$http.post(LOGIN_URL, creds, (data) => {
  //     localStorage.setItem('id_token', data.id_token)
  //     localStorage.setItem('access_token', data.access_token)

  //     this.user.authenticated = true

  //     // Redirect to a specified route
  //     if(redirect) {
  //       router.go(redirect)        
  //     }

  //   }).error((err) => {
  //     context.error = err
  //   })
  // },

  // signup(context, creds, redirect) {
  //   context.$http.post(SIGNUP_URL, creds, (data) => {
  //     localStorage.setItem('id_token', data.id_token)
  //     localStorage.setItem('access_token', data.access_token)

  //     this.user.authenticated = true

  //     if(redirect) {
  //       router.go(redirect)        
  //     }

  //   }).error((err) => {
  //     context.error = err
  //   })
  // },

  // // To log out, we just need to remove the token
  // logout() {
  //   localStorage.removeItem('id_token')
  //   localStorage.removeItem('access_token')
  //   this.user.authenticated = false
  // },

  // checkAuth() {
  //   var jwt = localStorage.getItem('id_token')
  //   if(jwt) {
  //     this.user.authenticated = true
  //   }
  //   else {
  //     this.user.authenticated = false      
  //   }
  // },

  // // The object to be passed as a header for authenticated requests
  // getAuthHeader() {
  //   return {
  //     'Authorization': 'Bearer ' + localStorage.getItem('access_token')
  //   }
  // }
}


  

