import { words } from "./words"


export const randomWord = () => {
    return words[Math.floor(Math.random() * words.length)]
}

export const checkWord = (gameword, word) => {
    return gameword === word
}