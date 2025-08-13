import './style.css'
import ReactDOM from 'react-dom/client'
//import App from './App'
import Header from './Containers/Header.jsx'
import React from 'react'
import { Suspense } from 'react'
import { ModelProvider, ModelContext } from "./Components/ModelContext.jsx"
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HowToSection from './HowToSection.jsx';
import { Loader } from '@react-three/drei'
import SvgContainer from './Containers/svgContainer.jsx'
import { useProgress } from '@react-three/drei'


const root = ReactDOM.createRoot(document.querySelector('#root'))
const App = React.lazy(() => import('./App.jsx'))

// function Loader() {
//     const { active, progress, errors, item, loaded, total } = useProgress()
//      return <Html center>{progress} % loaded</Html>
// }


root.render(
    <>
        <Suspense fallback={<Loader />}>
            <Router>
                <ModelProvider>

                    <div className='header'>
                        <Header />
                    </div>

                    <div id='app'>

                        <Routes>
                            <Route path='/' element={<App />} />
                            <Route path='/HowTo/*' element={<HowToSection />} />
                        </Routes>


                    </div>


                </ModelProvider>

            </Router>
        </Suspense >

    </>
)

