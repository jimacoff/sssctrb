/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/16/14
 * Time: 3:36 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('UserManagement.model.UserProfile.NonIndianSpecificDetails', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'non_indian_specific_detail[passport_number]', type: 'string',mapping:'passport_number'},
        { name: 'non_indian_specific_detail[passport_city_of_issue]', type: 'string',mapping:'passport_city_of_issue'},
        { name: 'non_indian_specific_detail[passport_country_of_issue]', type: 'string',mapping:'passport_country_of_issue' },
        { name: 'non_indian_specific_detail[passport_date_of_issue]', type: 'string',mapping:'passport_date_of_issue' },
        { name: 'non_indian_specific_detail[passport_valid_till]', type: 'string',mapping:'passport_valid_till' },

        { name: 'non_indian_specific_detail[user_id]', type: 'string',mapping:'user_id'},

        { name: 'updated_at', type: 'string' },
    ],
});
