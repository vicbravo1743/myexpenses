import React from 'react';
import Content from '../shared/Content';

export interface HomeScreenProps {
    
}
 
const HomeScreen: React.SFC<HomeScreenProps> = () => {
    return (
        <Content title="Dashboard">
            Contenido
        </Content>
    );
}
 
export default HomeScreen;