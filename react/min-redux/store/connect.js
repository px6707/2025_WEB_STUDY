import { useContext, useEffect, useState } from 'react';
import ReduxContext from './context';

export const connect = (mapStateToProps, mapDispatchTrops) => MyComponent => {
    return function ConnectComponent(props) {

        const _store = useContext(ReduxContext);

        const [, setBool] = useState(true);
        const forceUpdate = () => setBool(val => !val);

        useEffect(() => {
            _store.subscribe(forceUpdate)
        }, []);

        return <ReduxContext.Consumer>
            {
                store => <MyComponent 
                    {...props}
                    {...mapStateToProps(store.getState())}
                    {...mapDispatchTrops(store.dispatch)}
                />
            }
        </ReduxContext.Consumer>
    }
}