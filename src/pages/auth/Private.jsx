import { useSelector } from "react-redux"
import { Navigate, Outlet, useNavigate } from "react-router";

function Private() {

    const authUser = useSelector((state) => state.auth );
    const navigaate = useNavigate();
    
    if (!authUser.isLogin) {
        return <Navigate to={"/login"} />;
    }

    if (authUser.isLogin && authUser.user.role != "admin") {
        // return "you are not admin, you are user";
          return <Navigate to={"/"}/>
    }

    if (authUser.isLogin && authUser.user.role == "admin") {
        return  <Outlet />
    }
    
    // return  <Outlet />
}

export default Private

// import { useSelector } from "react-redux";
// import { Navigate, Outlet, useNavigate } from "react-router";
// import { useEffect } from "react";

// function Private() {
//   const authUser = useSelector((state) => state.auth);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // If user is logged in but not an admin, redirect to homepage
//     if (authUser.isLogin && authUser.user.role != "admin") {
//       navigate("/");
//     }
//   }, [authUser, navigate]);

//   // If user is not logged in, redirect to login
//   if (!authUser.isLogin) {
//     return <Navigate to={"/login"} />;
//   }

//   // If user is an admin, allow access to the child routes
//   if (authUser.isLogin && authUser.user.role == "admin") {
//     return <Outlet />;
//   }

//   return null;
// }

// export default Private;
