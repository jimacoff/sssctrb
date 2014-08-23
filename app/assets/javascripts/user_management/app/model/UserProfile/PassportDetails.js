/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/16/14
 * Time: 3:36 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('UserManagement.model.UserProfile.PassportDetails', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'passport_number', type: 'string'},
        { name: 'passport_city_of_issue', type: 'string'},
        { name: 'passport_country_of_issue', type: 'string'},
        { name: 'passport_date_of_issue', type: 'string'},
        { name: 'passport_valid_till', type: 'string'},

        { name: 'user_id', type: 'string'},

        { name: 'updated_at', type: 'string' },
    ]
});
