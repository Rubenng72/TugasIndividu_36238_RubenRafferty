import { arrowForwardCircle, image, qrCodeOutline, searchOutline } from "ionicons/icons";
import React, { useEffect } from 'react';
import { useRef, useState } from 'react';
import { IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonContent, IonTitle, IonButtons, IonMenuButton, IonHeader, IonToolbar, IonGrid, IonCol, IonRow, IonCard, IonCardContent, IonFab, IonFabButton, IonIcon, IonButton, IonPage } from '@ionic/react';
import SplashScreen from "./SplashScreen";
import './Home.css'
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    
    return(
        <IonPage>
        <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          {/* <IonButtons slot='end'>
            <Link to={'/Search'}> Search  <IonIcon icon={searchOutline}></IonIcon></Link>
          </IonButtons> */}
          <IonButtons slot="end">
            <IonButton routerLink="/Search" routerDirection="none">
            Search  &nbsp; 
            <IonIcon md={searchOutline} />
            </IonButton> 
          </IonButtons>
        </IonToolbar>
        
      </IonHeader>
      <IonContent>
      <IonTitle className="container">
      <img  src="assets/foto/food1.jpg" alt="Error"/>
      <IonTitle className="bottom-left">Get Your Joule. Be <br/>Happy.</IonTitle>
      <IonTitle className="bottom-right">Explore</IonTitle>
      
      </IonTitle>
      
      
      
      
      <div className="dividing-line">
      Search By Type
      </div>
      
      

      <IonGrid>
          <IonRow>
              <IonCol size="4">
                <IonCard>
                    <div className="ion-text-center">
                    <img style={{borderRadius:'50%', marginTop:'10px'}}src="assets/foto/beef.png" alt="yoast seo" height="50px" width="50px"/>
                    
                    <p style={{margin:'10px'}}>Beef</p>
                    </div>
        
                </IonCard>
              </IonCol>
              <IonCol size="4">
              <IonCard>
                    <div className="ion-text-center">
                    <img style={{borderRadius:'50%', marginTop:'10px'}}src="assets/foto/fish.png" alt="yoast seo" height="50px" width="50px"/>
                    
                    <p style={{margin:'10px'}}>Seafood</p>
                    </div>
        
                </IonCard>
              </IonCol>
              <IonCol size="4">
              <IonCard>
                    <div className="ion-text-center">
                    <img style={{borderRadius:'50%', marginTop:'10px'}}src="assets/foto/chicken.png" alt="yoast seo" height="50px" width="50px"/>
                    
                    <p style={{margin:'10px'}}>Poultry</p>
                    </div>
        
                </IonCard>
              </IonCol>
          </IonRow>
          <IonRow>
              <IonCol size="4">
              <IonCard>
                    <div className="ion-text-center">
                    <img style={{borderRadius:'50%', marginTop:'10px'}}src="assets/foto/pork1.png" alt="yoast seo" height="50px" width="50px"/>
                    
                    <p style={{margin:'10px'}}>Pork</p>
                    </div>
        
                </IonCard>
              </IonCol>
              <IonCol size="4">
              <IonCard>
                    <div className="ion-text-center">
                    <img style={{borderRadius:'50%', marginTop:'10px'}}src="assets/foto/lamb.png" alt="yoast seo" height="50px" width="50px"/>
                    
                    <p style={{margin:'10px'}}>Lamb</p>
                    </div>
        
                </IonCard>
              </IonCol>
              <IonCol size="4">
              <IonCard>
                    <div className="ion-text-center">
                    <img style={{borderRadius:'50%', marginTop:'10px'}}src="assets/foto/dear.png" alt="yoast seo" height="50px" width="50px"/>
                    
                    <p style={{margin:'10px'}}>Game</p>
                    </div>
        
                </IonCard>
                  
              </IonCol>
          </IonRow>
          <IonRow>
              <IonCol size="4">
              <IonCard>
                    <div className="ion-text-center">
                    <img style={{borderRadius:'50%', marginTop:'10px'}}src="assets/foto/plant.png" alt="yoast seo" height="50px" width="50px"/>
                    
                    <p style={{margin:'10px'}}>Vegetables</p>
                    </div>
        
                </IonCard>
              </IonCol>
              <IonCol size="4">
              <IonCard>
                    <div className="ion-text-center">
                    <img style={{borderRadius:'50%', marginTop:'10px'}}src="assets/foto/cake.png" alt="yoast seo" height="50px" width="50px"/>
                    
                    <p style={{margin:'10px'}}>Desserts</p>
                    </div>
        
                </IonCard>
              </IonCol>
              <IonCol size="4">
              <IonCard>
                    <div className="ion-text-center">
                    <img style={{borderRadius:'50%', marginTop:'10px'}}src="assets/foto/egg.png" alt="yoast seo" height="50px" width="50px"/>
                    
                    <p style={{margin:'10px'}}>Others</p>
                    </div>
        
                </IonCard>
              </IonCol>
          </IonRow>
      </IonGrid>

      <div className="dividing-line">
      Cooking Guides
      </div>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="180px" width="180px"/>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Get Started: Basic Guides</h6>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="180px" width="180px"/>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Quick & Easy</h6>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="180px" width="180px"/>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Cook in a Jar--No Bag<br/> Required!</h6>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="180px" width="180px"/>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>All the Guides</h6>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="180px" width="180px"/>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Joule Ready (Available in <br/>the US)</h6>
            </div>
        </IonCard>
        
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={qrCodeOutline} />
          </IonFabButton>
        </IonFab>
      
        <IonFab className="Fabcenter" vertical="bottom" horizontal="center" slot="fixed">
          <IonButton className="decoration">
            <IonLabel>Search For Joule</IonLabel>
          </IonButton>
        </IonFab>

        </IonContent>
      </IonPage>

      
       
    );

};

export default Home;