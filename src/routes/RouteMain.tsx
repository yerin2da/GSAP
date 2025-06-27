
import {Routes, Route} from "react-router-dom";
import Layout from "../components/Layout";
import PrivateRoute from "./PrivateRoute";
import Main from "../pages/Main";

export default function RouteMain() {
    return (
        <Routes>

            {/* (페이지) */}
            <Route element={<Layout />}>
                <Route index element={<Main />} />

                {/*  로그인한 사용자만 접근 가능 */}
                <Route element={<PrivateRoute />}></Route>

            </Route>
        </Routes>
    );
}
