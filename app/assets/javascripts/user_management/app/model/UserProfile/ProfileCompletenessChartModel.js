/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/16/14
 * Time: 3:36 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('UserManagement.model.UserProfile.ProfileCompletenessChartModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'profile_name', type: 'string' },
        { name: 'percentage_complete', type: 'string' },
    ],
});
