import {
    useState,
    useEffect,
} from 'react';

import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const RESTAURANT_API = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5799109&lng=73.68384759999999&page_type=DESKTOP_WEB_LISTING';

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState('');

    useEffect(
        () => {
            fetchRestaurants();
        }, []
    );

    const fetchRestaurants = async () => {
        const restaurants = await fetch(RESTAURANT_API);

        const allRestaurantsData = await restaurants.json();

        const actualRestaurantsList = allRestaurantsData?.data?.cards[2]?.data?.data?.cards || [];
        setAllRestaurants(actualRestaurantsList);
        setFilteredRestaurants(actualRestaurantsList);

    };

    const handleSearchInput = event => {
        setSearchText(event.target.value);
    };

    const handleSearch = () => {
        const filteredRestaurants = allRestaurants?.filter(
            restaurant => restaurant?.data?.name?.toUpperCase()?.includes(searchText.toUpperCase()),
        );

        setFilteredRestaurants(filteredRestaurants);
    };

    if (!allRestaurants.length) {
        return <Shimmer />;
    }

    const restaurantCards = filteredRestaurants?.map(
        filteredRestaurant => {

            const restaurantProps = {
                cloudinaryImageId: filteredRestaurant?.data?.cloudinaryImageId,
                cuisines: filteredRestaurant?.data?.cuisines,
                lastMileTravelString: filteredRestaurant?.data?.lastMileTravelString,
                name: filteredRestaurant?.data?.name,
            };

            return <Link
                to={`/restaurant/${filteredRestaurant?.data.id}`}
                key={filteredRestaurant?.data?.id}
            >
                <RestaurantCard {...restaurantProps} />
            </Link>
        },
    );

    return <>
        <div className='search-container'>
            <input
                type='search'
                className='search-input'
                value={searchText}
                onChange={handleSearchInput}
            />
            <button
                type='button'
                className='search-btn'
                onClick={handleSearch}
            >Search</button>
        </div>
        <div className='restaurant-list'>
            { restaurantCards }
        </div>
    </>
}

export default Body;
