import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    // If user is not logged in
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // If user is not admin/owner
    if (role !== "OWNER") {
        return <Navigate to="/" replace />;
    }

    // If admin
    return children;
}

export default AdminRoute;
