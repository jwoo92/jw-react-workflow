import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { MainContainer, HomeContainer, ScrollToTopOnMount } from 'containers'

const getRoutes = (store) => (
  <Router>
    <ScrollToTopOnMount>
      <MainContainer>
        <Switch>
          <Route exact={true} path='/' component={HomeContainer} />
          <Route render={() => <Redirect to='/' />} />
        </Switch>
      </MainContainer>
    </ScrollToTopOnMount>
  </Router>
)

export default getRoutes
