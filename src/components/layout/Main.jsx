import React from 'react'
import routes from '@/views/'
import { Route,Switch,Redirect } from 'react-router-dom'

export default props => {
  const arr = []
  console.log(routes )
  const createRoutes = (arrSet) => {
    arrSet.map(elem=>{
      if(elem.path){
        arr.push(
          <Route
            key={elem.id}
            path={elem.path}
            component={elem.component}
            exact
          />
        )
      }
      if(elem.children){
        createRoutes(elem.children)
      }
    })
    return arr
  }

  return (
    <div className='main'>
      <Switch>
        {createRoutes(routes)}
        <Redirect from='/*' to="/" />
      </Switch>
    </div>
  )
}
