import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {RiRoadMapFill} from 'react-icons/ri'
import "./Styles.css"

const MapView = () => {

    38.88409346870995, -104.81075179298267
  return (
    <>
        <div className='container'> 
            <MapContainer className='leaflet-container' center={{lat:38.88409346870995 , lon:-104.81075179298267}} zoom={15}>
                <TileLayer
                attribution= '&copy; <a href="https://maps.app.goo.gl/FRbDBYYeYSpZ48wM9">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={{lat:38.88409346870995 , lon:-104.81075179298267}}>
                <Popup>
                    Collision Center & PDR. <br /> UBICATION<a href="https://maps.app.goo.gl/FRbDBYYeYSpZ48wM9"><RiRoadMapFill/></a>
                </Popup>
                </Marker>
            </MapContainer>
        </div>
    </>
  )
}

export default MapView