'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async update(ctx){
        const { address, amount, token } = ctx.request.body;
        const temp = "-EarnedSTARSAmount-";
        const calc_token = sha256(amount+temp+address);
        if(calc_token==token){
            const doge = await strapi.services['earned-amount'].findOne({address: address});
            if(doge)
                await strapi.services['earned-amount'].update({address: address}, {amount: amount});
            else
                await strapi.services['earned-amount'].create({address: address, amount: amount});
        }
    }
};
