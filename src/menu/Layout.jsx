import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav style={{color: "blue"}}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/student/form/">Student Form</Link>
                    </li>
                    <li>
                        <Link to="/student/list">Student List</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout;