
import React, {useEffect} from 'react';
import { HashRouter} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import RouteMain from './routes/RouteMain';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import lenis from './lib/lenis';

function App() {
    useEffect(() => {//부드러운 스크롤 효과
        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
    }, []);

    return (
        <HashRouter>
            {/*<APIProvider>*/}
                <RecoilRoot>
                    {/* 전역 알림 */}
                    {/*<ToastContainer*/}
                    {/*    position="top-center"*/}
                    {/*    autoClose={3000}*/}
                    {/*    hideProgressBar={false}*/}
                    {/*    closeOnClick*/}
                    {/*    pauseOnHover*/}
                    {/*    draggable*/}
                    {/*/>*/}

                    {/* 전체 라우트 관리 */}
                    <RouteMain />
                </RecoilRoot>
            {/*</APIProvider>*/}
        </HashRouter>
    );
}

export default App;
