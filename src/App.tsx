import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Home from './components/Home';
import Search from './components/Search';
import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';

setupIonicReact();



const App: React.FC = () => {

  const [splash, setsplash] = useState<boolean>();
    useEffect(()=>{
        setsplash(true)
        setTimeout(()=>{
            setsplash(false)
        },2000)
    },[])
    if (splash){
        return < SplashScreen />
    }
    
  return (
    <IonApp>
      <IonReactRouter >
        <IonSplitPane contentId="main" >
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/Home"/>
            </Route>
            <Route path="/Home" >
            <Home />
            </Route>
            <Route component={Search} path="/Search" exact={true} >
            </Route>
            <Route path="/Tips & Tricks" >
              <Page />
            </Route>
            <Route path="/Help & Support" >
              <Page />
            </Route>
            <Route path="/Settings">
              <Page />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
