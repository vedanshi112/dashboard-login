

// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//     const isLoggedIn = localStorage.getItem('isLoggedIn');
//     return isLoggedIn === 'true' ? children : <Navigate to="/" />;
// };

// export default ProtectedRoute;


import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log("🔐 ProtectedRoute: isLoggedIn =", isLoggedIn); // Debug line

    // Always use React Fragment to wrap children
    return isLoggedIn === 'true' ? <>{children}</> : <Navigate to="/" />;
};
 
export default ProtectedRoute;
