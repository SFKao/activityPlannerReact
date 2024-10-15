
import axios from "axios"

const axiosI = axios.create({
    baseURL: "http://localhost:8090",
    timeout:5000,
    headers: {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Headers":"POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin"
    }
});

axiosI.interceptors.request.use(request => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      request.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return request;
  }, error => {
    return Promise.reject(error);
  });

axiosI.interceptors.response.use(
response => response, // Directly return successful responses.
async error => {
    const originalRequest = error.config;
    if ((error.response.status === 401 || error.response.status === 403) && !originalRequest._retry && localStorage.getItem('refreshToken')) {
    originalRequest._retry = true; // Mark the request as retried to avoid infinite loops.
    try {
        const refreshToken = localStorage.getItem('refreshToken'); // Retrieve the stored refresh token.
        // Make a request to your auth server to refresh the token.
        const response = await axios.post(axiosI.defaults.baseURL+'/auth/refreshToken', 
        refreshToken,
        {headers: {"Content-Type": "text/plain"}}
        );
        const { token:accessToken, refreshToken: newRefreshToken } = response.data;
        // Store the new access and refresh tokens.
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', newRefreshToken);
        // Update the authorization header with the new access token.
        axiosI.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
        return axiosI(originalRequest); // Retry the original request with the new access token.
    } catch (refreshError) {
        // Handle refresh token errors by clearing stored tokens and redirecting to the login page.
        console.error('Token refresh failed:', refreshError);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        //window.location.href = '/login';
        return Promise.reject(refreshError);
    }
    }
    return Promise.reject(error); // For all other errors, return the error as is.
}
);

export const login = (usernameOrEmail, pass) => {

  axiosI.post("/auth/login", {usernameOrEmail, pass}, {
    headers: {
      "Content-Type":"application/json",
      "Access-Control-Allow-Origin":"*",
      "Access-Control-Allow-Headers":"POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin"
  }
  })
  .then(response=>{
    localStorage.setItem('accessToken', response.data.token)
    localStorage.setItem('refreshToken', response.data.refreshToken)
    window.location.href="/"
  })

};

export const actividadesRequest = () => {
  return axiosI.get("/api/activity")
  .then(response=>{
    return response.data;
  }).catch(error => {
    console.error(error);
    return [];
  })
}