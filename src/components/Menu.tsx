import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, bulbOutline, chatbox, chatboxOutline, cogOutline, heartOutline, heartSharp, helpCircleOutline, homeOutline, mailOutline, mailSharp, openOutline, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/Home',
    iosIcon: homeOutline,
    mdIcon: homeOutline
  },
  {
    title: 'Tips&Tricks',
    url: '/Tips & Tricks',
    iosIcon: bulbOutline,
    mdIcon: bulbOutline
  },
  {
    title: 'Help&Support',
    url: '/Help & Support',
    iosIcon: helpCircleOutline,
    mdIcon: helpCircleOutline
  },
  {
    title: 'Settings',
    url: '/Settings',
    iosIcon: cogOutline,
    mdIcon: cogOutline
  }
];



const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        <div className='talk'>
        <IonIcon className="talkicon" icon={chatbox}/>
        <div className='talk2'><p> Get your claws around<br/> Joule today!</p>
        <a style={{color:'orange'}}>Check it out</a> <IonIcon style={{color: 'orange'}} icon={openOutline}/>
        </div>
        <img style={{marginLeft : 'auto', marginRight:'auto',display:"block", marginTop:'0%'}} src='assets/foto/crab.png' alt ='crab' height={'200px'} width={'200px'}></img>
      </div>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
