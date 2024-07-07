import {theme} from "./themes/primaryTheme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import HomePage from "./screens/HomePage";
import TopNavBarDesktop from "./components/layout/TopNavBarDesktop";
import MainLayout from "./layouts/MainLayout";
import {routes} from "./configs/routesConfig";
import ProjectsPage from "./screens/ProjectsPage";
import TeamPage from "./screens/TeamPage";
import ContactUsPage from "./screens/ContactUsPage";

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

            {/* Begin browser routes */}
            <Routes>

                {/* Primary routes */}
                <Route path = "/">

                    <Route index element={<MainLayout> <HomePage/> </MainLayout>}/>
                    <Route path={routes.projects} element={<MainLayout> <ProjectsPage/> </MainLayout>}/>
                    <Route path={routes.team} element={<MainLayout> <TeamPage/> </MainLayout>}/>
                    <Route path={routes.contact} element={<MainLayout> <ContactUsPage/> </MainLayout>}/>
                </Route>

                {/* Routes for dev-testing only*/}
                {/*TODO: Remove this branch before production and merge requests, for all feature branches use this branch for testing individual UI components*/}
                <Route path='/dev-test'>
                    <Route path='app-bar' element={<><TopNavBarDesktop/></>}/>
                </Route>

            </Routes>

        </ThemeProvider>
    );
}

export default App;
