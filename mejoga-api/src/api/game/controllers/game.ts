/**
 * game controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::game.game", ({ strapi }) => ({
  async carregar(ctx) {
    console.log("RODANDO NO SERVIDOR");

    ctx.send("FINALIZANDO NO CLIENT")
  },
}));
