import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {ROUTES} from 'helpers/constants'

import ScrollToTop from 'components/ScrollToTop'

import Home from 'features/Home'
import NotFound from 'features/NotFound'
import PickFurniture from 'features/PickFurniture'

const Routes = () => {
  return (
    <Router>
      <ScrollToTop />

      <Switch>
        <Route exact path={ROUTES.home}>
          <Home />
        </Route>
        <Route path={`${ROUTES.pickFurniture}/:styleId`}>
          <PickFurniture />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
