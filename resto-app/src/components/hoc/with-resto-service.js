import React from 'react';
import RestoServiceContext from '../resto-service-context';

// Позволяет нам передавать уже инициализированный сервис в пропсы объекту Wrapped
const WithRestoService = () => (Wrapped) => {
    return (props) => {
        return (
            <RestoServiceContext.Consumer>
                {
                    (restoService) => {
                        return <Wrapped {...props} restoService={restoService} />
                    }
                }
            </RestoServiceContext.Consumer>
        );
    };
};

export default WithRestoService;