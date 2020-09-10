import React from 'react';

export interface LoadingProps {
    
}
 
const Loading: React.SFC<LoadingProps> = () => {
    return (
        <div className="text-center" style={{ paddingTop: '23%' }}>
            <i className="fas fa-spinner fa-spin fa-5x" />
        </div>
        
    );
}
 
export default Loading;