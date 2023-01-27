import { IMG_CDN_URL } from '../constants';

const RestaurantCard = ({
    cloudinaryImageId,
    cuisines,
    lastMileTravelString,
    name,
}) => {

    return <div className="card">
        <img src={`${IMG_CDN_URL}${cloudinaryImageId}`}></img>
        <h2>{name}</h2>
        <h3>{cuisines?.join(', ')}</h3>
        <h4>{lastMileTravelString} Kms</h4>
    </div>
}

export default RestaurantCard;
