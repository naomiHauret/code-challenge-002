import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Layout from "components/Layout"
import routes from "routes"

const Root = () => (
  <Router>
    <Layout>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} exact>
            {route.component}
          </Route>
        ))}
      </Switch>
    </Layout>
  </Router>
)

export default Root
