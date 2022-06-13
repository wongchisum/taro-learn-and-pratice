// import { Component,  } from 'react'
import './app.less'
import type {ReactNode} from 'react'



type AppProps = {
  children?:ReactNode
}
export default function App(props:AppProps) {
  return props?.children;
}

// export default App
