import React from 'react'
import { createContext, useContext, useState} from "react";

export const GameContext = createContext();



export const GameProvider = ({children}) => {











    const state = {

    }


    const actions = {

    }

    return <GameContext.Provider  value={{state, actions}}  >{children}</GameContext.Provider>
}
