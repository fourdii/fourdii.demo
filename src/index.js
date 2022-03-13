import { render } from 'react-dom'
import React , {Suspense }from 'react'
import App from './App'
import './index.css'

render(
    <Suspense fallback={null}>
<App />
</Suspense>
, document.querySelector('#root'))
