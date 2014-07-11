/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/16/14
 * Time: 3:36 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('UserManagement.model.UserProfile.AddressBookModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'first_name', type: 'string' },
        { name: 'last_name', type: 'string' },
        {
            name: 'full_name',
            type: 'string',
            convert:function(newValue, record){
                return record.get('first_name') + " " + record.get('last_name');
            }
        },
    ],
    proxy: {
        type: 'ajax',
        url:'/get_users_for_address_book',
        reader: {
            type: 'json',
            root:'address_book_users'
        }
    }
});
