import { ThunkDispatch } from '@reduxjs/toolkit'
import { AnyAction, combineReducers } from 'redux'

import featuredCharacterReducer from './featuredCharacter.reducer'
import characterReducer from './character.reducer'

const rootReducer = combineReducers({
  featuredCharacter: featuredCharacterReducer,
  character: characterReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>

export default rootReducer
