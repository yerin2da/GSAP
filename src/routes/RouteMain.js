
import {Routes, Route, Navigate} from "react-router-dom";
import Layout from "../layouts/Layout";
import PrivateRoute from "./PrivateRoute";

import Main from "../pages/main/Main";

import Login from "../pages/Login";

import Sell from "../pages/Sell";
import Register from "../pages/Register";

import Notice from "../pages/Notice";
import NoticeView from "../pages/NoticeView";
import Guide from "../pages/Guide";


import ExhibiGallery from "../pages/exhibition/ExhibiGallery";
import GuideGallery from "../pages/guide/GuideGallery";
import JejuFestival from "../pages/main/JejuFestival";
import ThemeGallery from "../pages/theme/ThemeGallery";
import MusicalGallery from "../pages/stage/MusicalGallery";
import MusicGallery from "../pages/stage/MusicGallery";
import GuideDetail from "../pages/guide/GuideDetail";
import PlayGallery from "../pages/stage/PlayGallery";
import KorMusic from "../pages/stage/KorMusic";
import AllSearch from "../pages/main/AllSearch";
import MainMenu from "../pages/main/MainMenu";


export default function RouteMain() {
    return (
        <Routes>

            <Route element={<Layout />}>{/* (공통 레이아웃) */}

                {/* 메인 */}
                <Route path="/" element={<Main />} />





                {/*  로그인한 사용자만 접근 가능 */}
                <Route element={<PrivateRoute />}>


                </Route>

            </Route>
        </Routes>
    );
}

{/*<Route path="/rest" element={<Rest />} />*/}
