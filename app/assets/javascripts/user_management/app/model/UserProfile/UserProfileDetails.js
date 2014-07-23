/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/16/14
 * Time: 3:36 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('UserManagement.model.UserProfile.UserProfileDetails', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'mobile_number', type: 'string'},
        { name: 'gender', type: 'boolean'},
        { name: 'address', type: 'string'},
        { name: 'state', type: 'string'},
        { name: 'city', type: 'string'},
        { name: 'pincode', type: 'string'},
        { name: 'country', type: 'string'},
        { name: 'date_of_birth', type: 'date'},

        { name: 'photo_path', type: 'string'},
        { name: 'user_id', type: 'string'},

        { name: 'photo_original_url', type: 'string'},
        { name: 'photo_medium_url', type: 'string'},
        { name: 'photo_thumb_url', type: 'string'},
        { name: 'photo_small_url', type: 'string'},

        { name: 'updated_at', type: 'string' },

//        { name: 'mobile_number', type: 'string' },
//        { name: 'mobile_number', type: 'string' },
//        { name: 'mobile_number', type: 'string' },
//        { name: 'mobile_number', type: 'string' },
    ],
    belongsTo:[
        {
            name:'user',
            instanceName:'user',
            model:'UserManagement.model.UserProfile.User',
            getterName:'getMainUserDetails',
//            setterName:'setUser',
            associationKey:'personal_detail',
//            foreignKey:'contact_id'
        }
    ]
});
