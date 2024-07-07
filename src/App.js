import {theme} from "./themes/primaryTheme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import HomePage from "./screens/HomePage";
import TopNavBar from "./components/TopNavBar";

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

                    <Route index element={<HomePage/>}/>

                </Route>

                {/* Routes for dev-testing only*/}
                {/*TODO: Remove before production*/}
                <Route path='/dev-test'>
                    <Route path='app-bar' element={<><TopNavBar/></>}/>
                </Route>

            </Routes>

        </ThemeProvider>
    );
}

export default App;
