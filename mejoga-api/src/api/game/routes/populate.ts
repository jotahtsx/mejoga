export default {
    routes: [
        {
            method: "POST",
            path: "/jogos/carregar",
            handler: "game.populate"
        }
    ]
}