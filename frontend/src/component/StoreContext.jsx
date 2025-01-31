import { createContext } from "react";
import {featured_dish} from '../assets/assets'

export const StoreContext=createContext(null)
const StoreContextProvider =(props)=>{


    const contextValue={
        featured_dish
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;