import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { Fragment } from 'react';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    {publicRoutes.map((publicRoute, index) => {
                        const Layout =
                            publicRoute.layout === null
                                ? Fragment
                                : publicRoute.layout || DefaultLayout;
                        return (
                            <Route
                                path={publicRoute.path}
                                element={
                                    <Layout>{publicRoute.component}</Layout>
                                }
                                key={index}
                            />
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
