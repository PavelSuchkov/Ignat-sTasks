import {UserType} from "../HW8";

type ActionsType = {type: 'sort', payload: 'up' | 'down'} | {type: 'check', payload: '18'}

export const homeWorkReducer = (state: UserType[], action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const copyState = [...state].sort((a, b) => {
                if(a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? copyState : copyState.reverse()
        }
        case 'check': {

            return [...state].filter(p => p.age > action.payload)
        }
        default: return state
    }
}