import { IonApp, IonButton, IonButtons, IonCard, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonSearchbar, IonSegment, IonSegmentButton, IonToolbar } from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import { useHistory } from "react-router";
import './Search.css'
const Search: React.FC = () => {
    const history = useHistory()
    return(
        <IonPage>
        <IonHeader>
        <IonToolbar>
        <IonSearchbar className="Searching" style={{marginTop:"15px"}} showCancelButton ="always" mode="ios" onIonCancel={()=>history.push("/Home")}></IonSearchbar>
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
          <IonSegmentButton className='hover'value="All">
            <IonLabel style={{color:'black'}}>All</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton className='hover' value="Joule App">
            <IonLabel style={{color:'black'}}>Joule App</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton className='hover' value="ChefSteps.com">
            <IonLabel style={{color:'black'}}>ChefSteps.com</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        </IonToolbar>
      </IonHeader>
      
        <IonContent fullscreen>
            <IonGrid>
      <div className="dividing-line">
      Visual Doneness Guide
      </div>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Ultimate Chicken Breast</h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>Visual Doneless Guide</p>
            </div>
            </div>
        </IonCard>

        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Basic Chicken Breast</h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>Visual Doneless Guide</p>
            </div>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Ultimate Chicken Thighs</h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>Visual Doneless Guide</p>
            </div>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Foolproof Fried Chicken</h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>Visual Doneless Guide</p>
            </div>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Juicy Grilled Chicken Leg</h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>Visual Doneless Guide</p>
            </div>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Guide Boost: Red Barbecue<br/> Chicken</h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>Visual Doneless Guide</p>
            </div>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Guide Boost: Green Curry<br/> Chicken</h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>Visual Doneless Guide</p>
            </div>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Black Pepper Chicken, With<br/>Chef Gregory Gourdet</h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>Visual Doneless Guide</p>
            </div>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Herbed Chicken Breast, <br/>Broccoli, and Potatoes With<br/> Jef Nelson</h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>Visual Doneless Guide</p>
            </div>
            </div>
        </IonCard>

        <div className="dividing-line">
      Just Time & Temp
      </div>

      
      <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Chicken Leg</h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>1 Hour 15 Minutes - 1 Hour 45 Minutes</p>
            </div>
            </div>
        </IonCard>

        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Chicken Breast</h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>45 Minutes - 2 Hour 15 Minutes</p>
            </div>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Chicken Thigh</h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>1 Hour - 1 Hour 30 Minutes</p>
            </div>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Chicken Wings</h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>1 Hour - 1 Hour 15 Minutes</p>
            </div>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Chicken Liver</h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>1 Hour - 1 Hour 30 Minutes</p>
            </div>
            </div>
        </IonCard>

        <div className="dividing-line">
      ChefSteps.com Results
      </div>
      <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Can't-F***-It-Up Fried Chicken </h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>CHEFSTEPS.COM</p>
            </div>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Chicken Liver Pate</h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>CHEFSTEPS.COM</p>
            </div>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Sous Vide Chicken Breast</h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>CHEFSTEPS.COM</p>
            </div>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Crispy Chicken Thighs Made Simple<br/> With Sous Vide </h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>CHEFSTEPS.COM</p>
            </div>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Smokerless Smoke Chicken </h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>CHEFSTEPS.COM</p>
            </div>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Chicken Wings</h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>CHEFSTEPS.COM</p>
            </div>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Tips & Tricks: Best Way to Truss a <br/>Chicken</h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>CHEFSTEPS.COM</p>
            </div>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Chicken Roulade </h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>CHEFSTEPS.COM</p>
            </div>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Ultimate Korean Fried Chicken</h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>CHEFSTEPS.COM</p>
            </div>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Black Pepper Chicken, With <br/> Chef Gregory Gourdet </h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>CHEFSTEPS.COM</p>
            </div>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Crispy Chicken With Broccoli<br/> Cheddar Sauce </h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>CHEFSTEPS.COM</p>
            </div>
            </div>
        </IonCard>
        <IonCard>
            <div style={{display:'flex', height:'120px'}}>
            <img style={{}}src="assets/foto/beef.jpg" alt="yoast seo" height="120px" width="120px"/>
            <div>
            <h6 style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"15px",color:'black'}}>Crispy Chicken Legs</h6>
            <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:"bold", fontSize:"10px"}}>CHEFSTEPS.COM</p>
            </div>
            </div>
        </IonCard>
        </IonGrid>
        </IonContent>
        </IonPage>
    )
}
export default Search;