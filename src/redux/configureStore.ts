import { Store, Middleware, AnyAction } from "redux";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import rootReducer, { IRootState } from './reducers'

const logger : Middleware<{}, IRootState> = (store) => (next) => (action) => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

export default function configureAppStore(preloadedState?: any) {
    const store = configureStore({
        reducer: rootReducer,
        middleware: [logger, ...getDefaultMiddleware()],
        preloadedState
    })

    // if (process.env.NODE_ENV !== 'production' && module.hot) {
    //     module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
    // }

    return store
}