/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/16/14
 * Time: 3:45 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('UserManagement.store.UserProfile.AddressBookStore', {
    extend:'Ext.data.Store',
    model:'UserManagement.model.UserProfile.AddressBookModel',
    autoLoad:false
//  data:[
//      {'user[email]': 'Ed'},
//  ]
});
