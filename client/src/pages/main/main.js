import React from 'react';
import SearchDisplay from '../../displays/search-display'
import StepsDisplay from '../../displays/steps-display';
import CardListDisplay from '../../displays/card-list-display';
import LinkListDisplay from '../../displays/link-list-display';
import AboutUsDisplay from '../../displays/about-us-display';
import ChooseDisplay from '../../displays/choose-display';

const Main = () => {
    return (
        <>
            <SearchDisplay/>
            <StepsDisplay/>
            <CardListDisplay/>
            <LinkListDisplay/>
            <AboutUsDisplay/>
            <ChooseDisplay/>
        </>
    );
};

export default Main;