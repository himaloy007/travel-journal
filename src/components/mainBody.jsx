import markers from '../assets/marker.png'




export default function Main(props){
    return(
        <div className="box-container">
            <div className="title-img">
                 <img src={props.image} alt={props.location} />
            </div>

            <div className="description">
                <img src={markers} alt="marker" className="marker" />
                <small className="location">{props.location}</small>
                <a href={props.address} className="map">View on google maps</a>
                 <h1>
                    {props.titles}
                </h1>

                <small className="date">
                    {props.checkIn} - {props.checkOut}
                </small>


                <p className="description-text">
                   {props.description}
                </p>


            </div>
                
           
           

        </div>
    )
}