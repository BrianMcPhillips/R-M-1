import React from 'react';
import ListPage from '../ListPage/ListPage';
import DetailPage from '../DetailPage/DetailPage';
import Header from '../Header/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Header /> 
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <ListPage {...routerProps} />}
          />
          <Route
            path="/detail/:id"
            exact
            render={(routerProps) => <DetailPage {...routerProps} />}
          />
        </Switch>
      </Router>
    </>
  );
}
