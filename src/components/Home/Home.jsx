import React from 'react';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Banner />
            <CategoryList />
            <FeaturedJobs />
            <h2>This is home</h2>
        </div>
    );
};

export default Home;