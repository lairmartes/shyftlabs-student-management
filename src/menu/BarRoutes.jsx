import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import StudentForm from '../app/student/page/StudentForm'
import StudentList from '../app/student/page/StudentList'
import NotFound from '../app/NotFound'
import Home from '../app/Home'
import Layout from "./Layout";

function BarRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/student/form" element={<StudentForm />}/>
                    <Route path="/student/list" element={<StudentList />}/>
                    <Route path="*" element={<NotFound />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default BarRoutes;