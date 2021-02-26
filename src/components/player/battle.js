import store from "../../config/store";

export function readyPosition() {
    store.dispatch({
        type: "Game_still",
        payload:{
            playerclass: "player-still",
            monsterclass: "monster-still"
        }
    });
}

// export function spriteMove(props) {
    export function quizPass() {
        store.dispatch({
            type: "Game_animate",
            payload:{
                playerclass: "player-attack",
                monsterclass: "mosnter-hurt"
            }
        });
    }
    export function quizFail() {
        store.dispatch({
            type: "Game_animate",
            payload:{
                playerclass: "player-still",
                monsterclass: "mosnter-attack"
            }
        });
    }
//}