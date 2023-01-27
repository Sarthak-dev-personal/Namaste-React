import {
    useEffect,
    useState,
} from 'react';

import { useParams } from 'react-router-dom';

import Shimmer from './Shimmer';
import { IMG_CDN_URL } from '../constants';

const RESTAURANT_MENU_URL = 'https://www.swiggy.com/dapi/menu/v4/full?lat=18.57800063085906&lng=73.68628509342672&menuId='

const RestaurantMenu = () => {
    const { resId } = useParams();

    console.log(resId);

    const [restaurant, setRestaurant] =  useState(null);

    useEffect(
        () => {
            fetchRestauratnDetails();
        }, []
    );

    const fetchRestauratnDetails = async () => {
        const restaurantDetails = await fetch(
            `${RESTAURANT_MENU_URL}${resId}`
        );

        const restaurant = await restaurantDetails?.json();

        setRestaurant(restaurant?.data);
    }

    if (!restaurant) {
        return <Shimmer />;
    }

    return <>
        <div className='menu'>
            <div>
                <h1>Restraunt id: {resId}</h1>
                <h2>{restaurant?.name}</h2>
                <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
                <h3>{restaurant?.area}</h3>
                <h3>{restaurant?.city}</h3>
                <h3>{restaurant?.avgRating} stars</h3>
                <h3>{restaurant?.costForTwoMsg}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                {Object.values(restaurant?.menu?.items).map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
                </ul>
            </div>
        </div>
    </>
}

export default RestaurantMenu;
