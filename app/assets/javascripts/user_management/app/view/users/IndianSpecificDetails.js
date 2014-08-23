/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/14/14
 * Time: 9:47 AM
 * To change this template use File | Settings | File Templates.
 */

var verificationStore = Ext.create('Ext.data.Store', {
    fields:['id','value'],
    data : [
        {id: 1,    value: 'PAN Card'},
        {id: 2,    value: 'Passport'},
    ]
});

Ext.define('UserManagement.view.users.IndianSpecificDetails',{
    extend:'Ext.form.Panel',
    alias : 'widget.indianSpecificDetails',
    items:[
        {
            xtype:'combo',
            flex:1,
            fieldLabel:'Id Proof',
            name:'verification_id_type_id',
            store:'UserManagement.store.VerificationIdTypes',
            displayField:'verification_id_type_name',
            valueField:'id',
            query:'local',
            msgTarget:'side'
        },
        {
            xtype:'textfield',
            flex:1,
            name:'verification_id_number',
            fieldLabel:'Id Number',
            msgTarget:'side',
            allowBlank:false
        }
    ]
})
