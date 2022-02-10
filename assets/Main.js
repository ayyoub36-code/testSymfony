import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import ProjectList from "./pages/ProjectList"
import ProjectCreate from "./pages/ProjectCreate"
import ProjectEdit from "./pages/ProjectEdit"
import ProjectShow from "./pages/ProjectShow"

function Main() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<ProjectList />}></Route>
                <Route path="/create" element={<ProjectCreate />}></Route>
                <Route path="/edit/:id" element={<ProjectEdit />}></Route>
                <Route path="/show/:id" element={<ProjectShow />}></Route>
            </Routes>
        </Router>
    );
}

export default Main;

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}