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
        { name: 'personal_detail[mobile_number]', type: 'string',mapping:'mobile_number'},
        { name: 'personal_detail[gender]', type: 'boolean',mapping:'gender'},
        { name: 'personal_detail[address]', type: 'string',mapping:'address' },
        { name: 'personal_detail[state]', type: 'string',mapping:'state' },
        { name: 'personal_detail[city]', type: 'string',mapping:'city' },
        { name: 'personal_detail[pincode]', type: 'string',mapping:'pincode' },
        { name: 'personal_detail[country]', type: 'string',mapping:'country' },
        { name: 'personal_detail[date_of_birth]', type: 'date',mapping:'date_of_birth' },

        { name: 'personal_detail[photo_path]', type: 'string',mapping:'photo_path' },
        { name: 'personal_detail[user_id]', type: 'string',mapping:'user_id'},

        { name: 'personal_detail[photo_original_url]', type: 'string',mapping:'photo_original_url' },
        { name: 'personal_detail[photo_medium_url]', type: 'string',mapping:'photo_medium_url'},
        { name: 'personal_detail[photo_thumb_url]', type: 'string',mapping:'photo_thumb_url'},
        { name: 'personal_detail[photo_small_url]', type: 'string',mapping:'photo_small_url'},

        { name: 'updated_at', type: 'string' },

//        { name: 'mobile_number', type: 'string' },
//        { name: 'mobile_number', type: 'string' },
//        { name: 'mobile_number', type: 'string' },
//        { name: 'mobile_number', type: 'string' },
    ],
});
