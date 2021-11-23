'use strict';
const _ = require('lodash');
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async getReferralHistory(ctx){
        const history = await strapi.services.referral.find();
        return _.groupBy(history, 'referee')
    }
};
