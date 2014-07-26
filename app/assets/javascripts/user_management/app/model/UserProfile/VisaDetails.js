/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 7/26/14
 * Time: 2:30 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('UserManagement.model.UserProfile.VisaDetails', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'visa_number', type: 'string'},
        { name: 'visa_city_of_issue', type: 'string'},
        { name: 'visa_country_of_issue', type: 'string'},
        { name: 'visa_date_of_issue', type: 'string'},
        { name: 'visa_valid_till', type: 'string'},
        { name: 'visa_type', type: 'int'},
        { name: 'visa_other_type', type: 'string'},

        { name: 'user_id', type: 'string'},

        { name: 'updated_at', type: 'string' },
    ]
});
