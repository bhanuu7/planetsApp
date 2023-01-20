// Write your code here
import './index.css'

const PlanetItem = props => {
  const {item} = props
  const {name, imageUrl, description} = item
  return (
    <div className="planetItem">
      <img src={imageUrl} className="image" alt={`planet ${name}`} />
      <h2>{name}</h2>
      <p className="font">{description}</p>
    </div>
  )
}
export default PlanetItem
