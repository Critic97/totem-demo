import React from 'react';
import Helmet from 'react-helmet';

import ReactDOM from 'react-dom/client';
import './index.scss';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Blog from './pages/Blog';

import Solutions from './pages/Solutions';
    import ELearning from './pages/Solutions/E-Learning';
    import Metaverse from './pages/Solutions/Metaverse';
    import MixedReality from './pages/Solutions/MixedReality';
    import SeriousGames from './pages/Solutions/SeriousGames';
    import Simulations from './pages/Solutions/Simulations';

import Products from './pages/Products';

import ErrorPage from './pages/Error';

import { Router, Switch, BrowserRouter, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import { URLS } from './consts/urls';

function capitaliseFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function getPageName() {
    let pageName = "";
    const linkArr = window.location.href.split("/");
	pageName = linkArr[linkArr.length-1];
	
	if (pageName.includes('-')) {
        let nameArr = pageName.split('-')
        pageName = "";

        nameArr.forEach((item) => {
            pageName += capitaliseFirstLetter(item) + " "
        })

        return pageName;
    } else {
        return capitaliseFirstLetter(pageName);
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<Helmet><title>{getPageName()} | Totem Learning</title></Helmet>
		<BrowserRouter forceRefresh={true}>
			<Switch>
				<Route exact path={URLS.HOME} component={HomePage}/>

				<Route path={URLS.ABOUT_US} component={About}/>
				<Route path={URLS.BLOG} component={Blog}/>

                    
                <Route exact path={URLS.ELEARNING} component={ELearning}/>
                <Route exact path={URLS.METAVERSE} component={Metaverse}/>
                <Route exact path={URLS.MIXED_REALITY} component={MixedReality}/>
                <Route exact path={URLS.SERIOUS_GAMES} component={SeriousGames}/>
                <Route exact path={URLS.SIMULATIONS} component={Simulations}/>
				<Route path={URLS.SOLUTIONS} component={Solutions}/>


                <Route path={URLS.PRODUCTS} component={Products}/>

                <Route path="*" component={ErrorPage}/>
			</Switch>
		</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
