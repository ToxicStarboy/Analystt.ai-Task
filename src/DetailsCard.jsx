import React,{useState} from 'react'
// import DetailsHeading from './DetailsHeading';
import "./detailsHeading.css"

const DetailsCard = ({data}) => {
  const [selectedData, setSelectedData] = useState(null);
  const [showData, setShowData] = useState(false);
  const handleClick= (data)=> {
    setSelectedData(data);
    setShowData(!showData);
  }

  return ( 
    <div className='Details-Card'>
      <div className='Details-heading'>
        <div className='Details-name'>
            {data.company.name}
        </div>
        <div className='Details-contact'>
            <h3 >CONTACT</h3>
            <p>{data.name}</p>
        </div>
        <div className='Details-city'>
            <h3>CITY</h3>
            <p>{data.address.city}</p>
        </div>
        <div className='Details-website'>
            <h3>WEBSITE</h3>
            <p>{data.website}</p>
        </div>
      <button className='Button' onClick={()=> handleClick(data)}>{showData ? "Hide" : "Show"}</button>
      </div> 
      {showData && selectedData && selectedData.id===data.id && (
        <div className='Details-Drop'>
             <div style={{marginBottom:"20px", backgroundColor: "white"}}>
              <h4>Description</h4>
              <p>{data.company.catchPhrase} {data.company.bs}</p></div>
             <div className='Details-DropMore'>
             <div className='Details-Data'>
                <h4>Contact Person</h4>
                <p>{data.name}</p>
                <h4>Username</h4>
                <p>{data.username}</p>
                <h4>Email</h4>
                <p>{data.email}</p>
                <h4>Phone</h4>
                <p>{data.phone}</p>
             </div>
             <div className='Details-Data' style={{marginLeft:"200px"}}>
              <h4>Website</h4><p>{data.website}</p>
              <h4>Address</h4><p>{data.address.street} {data.address.suite} {data.address.city} {data.address.zipcode}</p>
              <h4>City</h4><p>{data.address.city}</p>
              <h4>Geo</h4><p>lat: {data.address.geo.lat} lng:{data.address.geo.lng}</p>
             </div>
            </div>
        </div>
      )}

      {/* </div>  */}
    </div>
  )
}

export default DetailsCard