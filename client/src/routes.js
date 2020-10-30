//Определяем все наборы ссылок тут
import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {LinksPage} from './pages/LinksPage'
import {CreatePage} from './pages/CreatePage'
import {DetailPage} from './pages/DetailPage'
import {AuthPage} from './pages/AuthPage'

export const useRoutes = isAuthenticated => {
  // Это роуты для авторизованного пользователя
  if (isAuthenticated) {
    return(
      <Switch>
        <Route path="/links" exact>
          <LinksPage/>
        </Route>
        <Route path="/create" exact>
          <CreatePage/>
        </Route>
        <Route path="/detail/:id">
          <DetailPage/>
        </Route>
        <Redirect to="/create"/>
      </Switch>
    )
  }
  //Это роуты для не авторизованного пользователя
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage/>
      </Route>
      <Redirect to="/"/>
    </Switch>
  )

}