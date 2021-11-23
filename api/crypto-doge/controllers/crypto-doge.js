'use strict';
const { sha256 } = require('js-sha256');
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async find(ctx) {
        const doges = await strapi.services['crypto-doge'].find({_limit: -1});
        return doges;
    },
    async findDogesByOwner(ctx) {
        const { owner } = ctx.params;
        const doges = await strapi.services['crypto-doge'].find({owner: owner});
        return doges;
    },
    async decreaseFightNumber(ctx) {
        const { tokenId, owner, token } = ctx.request.body;
        const temp = "_STARS_";
        const calc_token = sha256(tokenId+temp+owner);
        if(calc_token==token){
            const doge = await strapi.services['crypto-doge'].findOne({Doge_ID:tokenId});
            await strapi.services['crypto-doge'].update({id: doge.id}, {fightNumber: doge.fightNumber - 1});
        }
    },
    async findOne(ctx) {
        const { tokenId } = ctx.params;
        const doge = await strapi.services['crypto-doge'].findOne({Doge_ID:tokenId});
        return doge;
    },
    async findDogesByIds(ctx){
        const { ids } = ctx.request.body;
        const doges = await strapi.services['crypto-doge'].find({ Doge_ID: ids});
        return doges;
    },
    async updateOwner(ctx){
        const { tokenId, owner, referee, token } = ctx.request.body;
        const temp = "*STARS*";
        const calc_token = sha256(tokenId+temp+owner);
        let doges = await strapi.services['crypto-doge'].find({ owner: owner});
        const referral_status = (doges.length == 0 && referee != "0x0000000000000000000000000000000000000000")
        if(calc_token==token){
            await strapi.services['crypto-doge'].update({Doge_ID:tokenId}, {owner: owner});
        }
        doges = await strapi.services['crypto-doge'].find({ owner: owner});
        const purchaseTime = Date.now();
        const referral_history = await strapi.services['referral'].find({buyer: owner});
        if(referral_status && doges.length > 0 && referral_history.length == 0){
            await strapi.services['referral'].create({referee:referee, buyer: owner, purchaseTime: purchaseTime.toString()});
        }
    },
    async createDoge(ctx){
        const { tokenId, owner, classInfo, fightNumber, referee, token } = ctx.request.body;
        const temp = "-STARS-";
        const calc_token = sha256(tokenId+temp+owner+temp+classInfo);
        let doges = await strapi.services['crypto-doge'].find({ owner: owner});
        const referral_status = (doges.length == 0 && referee != "0x0000000000000000000000000000000000000000")
        if(calc_token==token){
            const doge = await strapi.services['crypto-doge'].findOne({Doge_ID:tokenId});
            if(doge)
                await strapi.services['crypto-doge'].update({Doge_ID:tokenId, owner: owner}, {classInfo: classInfo});
            else
                await strapi.services['crypto-doge'].create({Doge_ID:tokenId, owner: owner, fightNumber: fightNumber, classInfo: classInfo});
        }
        doges = await strapi.services['crypto-doge'].find({ owner: owner});
        const purchaseTime = Date.now();
        const referral_history = await strapi.services['referral'].find({buyer: owner});
        if(referral_status && doges.length > 0 && referral_history.length == 0){
            await strapi.services['referral'].create({referee:referee, buyer: owner, purchaseTime: purchaseTime.toString()});
        }
    }
};
