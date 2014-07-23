/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/14/14
 * Time: 7:24 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('UserManagement.view.users.UserPersonalDetailsFieldSet',{
    extend: 'Ext.form.FieldSet',
    alias : 'widget.userPersonalDetailsFieldSet',
    itemId:'userPersonalDetailsId',
    defaults:{
       margin:'0 10 10 0'
    },
    overflowY:'auto',
    items:[
        {
            xtype:'userPersonalDetails',
            border:0,
        }
    ]

})