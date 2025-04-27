import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
  AboutMe,
} from "./components";
import { SnackbarProvider } from "notistack";
import './index.scss';
import Charts from "./components/Charts";
import LazyLoad from 'react-lazyload';

function App() {
    const [mode, setMode] = useState<string>('light');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
        <SnackbarProvider maxSnack={3}>
             <div className={`main-container`}>
                <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
                <LazyLoad height={700} offset={100}>
                  <Main />
                </LazyLoad>
                <LazyLoad height={700} offset={100}>
                  <Expertise />
                </LazyLoad>
                <LazyLoad height={700} offset={100}>
                  <Charts />
                </LazyLoad>
                <LazyLoad height={700} offset={100}>
                  <Timeline />
                </LazyLoad>
                <LazyLoad height={700} offset={100}>
                  <Project />
                </LazyLoad>
                <LazyLoad height={700} offset={100}>
                  <Contact />
                </LazyLoad>
                <Footer />
            </div>
        </SnackbarProvider>
    );
}

export default App;