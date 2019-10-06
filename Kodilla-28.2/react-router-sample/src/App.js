import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory, Link, IndexLink } from 'react-router';
class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Navigation}>
                    <IndexRoute path='/' component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/hello/:name' component={Hello} />
                    <Route path='/kodilla' component={Kodilla} />
                    <Route path='*' component={PageNotFound} /> {/*  regex */}
                </Route>
            </Router>
        )
    }
}
const Home = () => <h1>Hej, tu Home component</h1>
const Contact = () => <h1>Tu Contact component</h1>
const PageNotFound = () => <h1>404 Not Found</h1>;
const Hello = (props) => <h1>Witaj, {props.params.name}</h1>
const Kodilla = () => <h1><a href='http://kodilla.com'>Link do kodilla.com</a></h1>
const Navigation = props => (
    <div>
        <ul>
            <li><IndexLink activeStyle={{backgroundColor: '#48abee'}} to='/'>Home</IndexLink></li> {/* activeClassName  */}
            <li><Link activeStyle={{backgroundColor: '#48abee'}} to='/contact'>Contact</Link></li>
            <li><Link activeStyle={{backgroundColor: '#48abee'}} to='/hello/Kasia'>Hello/Kasia</Link></li>
            <li><Link activeStyle={{backgroundColor: '#48abee'}} to='/kodilla'>Component Kodilla</Link></li>
            <li><Link activeStyle={{backgroundColor: '#48abee'}}><a href='http://kodilla.com'>kodilla.com z Link - prawidłowo</a></Link></li>
            <li><a href='http://kodilla.com'>kodilla.com bez {`<Link>`}</a></li> {/*  Tylko zewn. linki */}
        </ul>
        {props.children}
    </div>
)

export default App;
