import React from 'react';

import Card from './card';

// const StyledCardList = styled.div`
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 90px 30px;
//     padding: 30px;


// `;
const CardList = (props) => {
    return (
        // <StyledCardList>
        //   {props.children}
        // </StyledCardList>
        <CardList>
            <Card secondary = {true}></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>

        </CardList>
    );
};

export default CardList;