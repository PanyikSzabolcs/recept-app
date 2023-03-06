import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
} from "react-router-dom";
import { Home } from "./Components/Home";
import { RecipeCreate } from "./Components/RecipeCreate";
import { RecipeEdit } from "./Components/RecipeEdit";
import { RecipeList } from "./Components/RecipeList";
import { RecipeSingle } from "./Components/RecipeSingle";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router forceRefresh>
            <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-primary mb-3 ">
                <div id="navbarNav">
                    <ul className="navbar-nav lead font-weight-bold">
                        <li className="nav-item">
                            <NavLink to={`/`}>
                                <span className="nav-link">
                                    <img
                                        width="60px"
                                        src={`${process.env.REACT_APP_BACKEND_URL}/static/assets/logo.png`}
                                        alt=""
                                    />
                                </span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/receptek`} activeClassName="active" exact>
                                <span className="nav-link pt-4">Receptek</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/uj-recept`} activeClassName="active" exact>
                                <span className="nav-link pt-4">Új recept</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container" style={{ marginTop: "140px" }}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/receptek" component={RecipeList} />
                    <Route exact path="/uj-recept" component={RecipeCreate} />
                    <Route
                        exact
                        path="/recept-szerkesztes/:recipeSlug"
                        component={RecipeEdit}
                    />
                    <Route
                        exact
                        path="/recept/:recipeSlug"
                        component={RecipeSingle}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
