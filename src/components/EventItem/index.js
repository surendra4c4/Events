// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, clickImage} = props
  const {id, imageUrl, name, location} = eventDetails

  const clickedImg = () => {
    clickImage(id)
  }

  return (
    <li className="list-item">
      <button type="button" className="btn" onClick={clickedImg}>
        <img src={imageUrl} alt="event" className="list-image" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
