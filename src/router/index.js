import { Router, Route, hashHistory } from 'react-router';
import index from '../components/index'
import app from '../components/App'

render((
    <Router history={hashHistory}>
        <Route path="/" component={app}/>
        <Route path="/index" component={index}/>
    </Router>
), document.getElementById('app'));

