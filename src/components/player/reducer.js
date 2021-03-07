const initState = {
    playerclass: "player-still",
    monsterclass: "monster-still",
    effectclass: "no-effect"
}

const playerReducer = (state = initState, action) => {
    switch(action.type) {
        case 'Game_animate':
            return {
                ...action.payload
            }
        case 'Game_still':
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export default playerReducer