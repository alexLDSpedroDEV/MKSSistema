import React from 'react';
import { ConatinerMain, BoxMain } from '@/styles/StyledComponent';
import Itens from '../itens';

const Main = () => {
    return (
        <ConatinerMain data-testid="containerMain">
            <BoxMain data-testid="boxMain">
                <Itens />
            </BoxMain>
        </ConatinerMain>
    );
}

export default Main;
