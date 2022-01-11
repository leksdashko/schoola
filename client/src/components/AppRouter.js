import React, { useContext } from 'react';
import {Routes, Route} from 'react-router-dom';
import { Context } from '..';
import { authRoutes, publicRoutes } from '../routes';

const NotFound = () => {
    return (
        <div>404</div>
    )
}

const AppRouter = () => {
    const {store} = useContext(Context);

    return (
        <Routes>
            {store.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} exact />
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} exact />
            )}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRouter;