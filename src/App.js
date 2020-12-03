import React from 'react'
import {HashRouter,BrowserRouter} from 'react-router-dom'
import {Layout} from "./components/";
import { Provider } from 'mobx-react'
import store from './store/'

// const ele = < h2 > Hello React 17.0 </h2>
// import Elem from './views/TestJsx'
// import TestProps from './views/TestProps'
// import TestEvent from './views/TestEvent'
// import TestRender from './views/TestRender'
// import TestList from './views/TestList'
// import TestForm from "./views/TestForm";
// import NameForm from './views/NameForm.js'
// import Calculator from "./views/BoilingVerdict";
// import TestLift from './views/TestLift'
// import TestLang from './views/TestLang'
// import TestCombine from './views/TestCombine'
// import ThemeCtx,{themes} from "./utils/Theme";
// import TestTheme from './views/TestTheme'
// import TestHOC from "./views/study/TestHOC"
// import TestHooks from "./views/TestHooks";
// import TestType from "./views/study/TestType";
// import TestContext from "./views/TestContext";

import ThemeCtx from "./utils/Theme";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      color:'000000',
      background:'#ffffff'
    }
  }
  // toggleDisplay(){
  //   this.setState(state=>({
  //     theme:Math.random()>0.5?themes.light:themes.dark
  //   }))
  // }
  themeChange(key, e) {
    this.setState({[key]: e.target.value})
  }
    render() {
      let {color,background}=this.state
      return (
        <HashRouter>
          <Provider store={store}>
        {/*// <ThemeCtx.Provider*/}
        {/*//   value={{color,background}}*/}
        {/*// >*/}
        {/*<div>*/}
          {/*<TestForm></TestForm>*/}
          {/*<TestRender*/}
          {/*  style={{color:'red',fontSize:'30px'}}*/}
          {/*></TestRender>*/}
          {/*<Elem />*/}
          {/*{ele}*/}
          {/*<TestProps*/}
          {/*obj={{a:1,'hi':0}}*/}
          {/*bol={true}*/}
          {/*arr={[1,2,3,4]}*/}
          {/*ele={<div>hello elem</div>}*/}
          {/*/>*/}
          {/*<TestEvent></TestEvent>*/}
          {/*<NameForm></NameForm>*/}
          {/*<Calculator />*/}
          {/*  use={false}*/}
          {/*  num='0'*/}
          {/*>*/}
          {/*<TestList></TestList>*/}
          {/*</TestEvent>*/}
          {/*<TestLift></TestLift>*/}
          {/*<TestLang></TestLang>*/}
          {/*<TestCombine></TestCombine>*/}
          {/*<TestTheme></TestTheme>*/}
          {/*<TestContext></TestContext>*/}
          {/*<button onClick={()=>this.toggleDisplay()}>切换主题</button>*/}
          {/*<span>选择字体颜色</span><input type="color" onClick={(e)=>this.setState({color:e.target.value})} />*/}
          {/*<span>选择背景颜色</span><input type="color" onClick={(e)=>this.setState({background:e.target.value})} />*/}
          {/*<TestHOC />*/}
          {/*<TestHooks></TestHooks>*/}
          {/*  <TestType />*/}
          <ThemeCtx.Provider value = {{ color, background } } >
            {/*<span style = {*/}
            {/*  { paddingLeft: '50px' } } > 选择背景色： </span>*/}
            {/*<input type = "color"*/}
            {/*       value = { background }*/}
            {/*       onChange = {*/}
            {/*         (e) => this.themeChange('background', e) } />*/}
            {/*<hr />*/}
            <Layout />
          </ThemeCtx.Provider>

        {/*</div>*/}
       {/*</ThemeCtx.Provider>*/}
          </Provider>
        </HashRouter>
      )
    }
}
export default App
