import {theme} from "./themes/primaryTheme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Route, Routes, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import {routes} from "./configs/routesConfig";
import AboutPage from "./screens/AboutUsPage";
import TeamPage from "./screens/TeamPage";
import ContactUsPage from "./screens/ContactUsPage";
import NoPage from "./screens/NoPage";
import HomePage from "./screens/HomePage";
import ScrollToTop from "./ScrollToTop";

/**
 * Main app, wrapped inside other JSX & React components in index.js.
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    return (
        // Provide theme
        <ThemeProvider theme={theme}>
            <CssBaseline/>

            <ScrollToTop />

            {/* Begin browser routes */}
            <Routes>

                {/* Primary routes */}
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path={routes.about} element={<AboutPage />} />
                    
                    {/* New Game Routes */}
                    {/* <Route path="games/the-come-up" element={<TheComeUpPage />} /> */}
                    {/* <Route path="games/aescension" element={<AescensionPage />} /> */}
                    {/* <Route path="games/mimicry" element={<MimicryPage />} /> */}

                    <Route path={routes.team} element={<TeamPage />} />

                    {/* 1. THE ACTUAL PAGE: Now lives at /career */}
                    <Route path={routes.career} element={<ContactUsPage />} />
                    
                    {/* 2. THE REDIRECTS: Catches both /contact and /contacts */}
                    <Route path={routes.contact} element={<Navigate to={routes.career} replace />} />
                    <Route path="/contacts" element={<Navigate to={routes.career} replace />} />

                    <Route path='*' element={<NoPage/>}/>
                </Route>

            </Routes>

        </ThemeProvider>
    );
}

export default App;
