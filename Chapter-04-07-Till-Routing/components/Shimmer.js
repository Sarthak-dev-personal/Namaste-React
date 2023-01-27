
const shimmerCards = Array(10).fill("").map(
    (element, index) => <div className="shimmer-card" key={index}></div>
);

const Shimmer = () => {
    return <div className="restaurant-list">
        { shimmerCards }
    </div>
}

export default Shimmer;
