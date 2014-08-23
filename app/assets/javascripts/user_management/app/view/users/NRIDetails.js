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

Ext.define('UserManagement.view.users.NRIDetails',{
    extend:'Ext.form.Panel',
    alias : 'widget.nriDetails',
    items:[
        {
            xtype:'textfield',
            flex:1,
            fieldLabel:'Id Proof',
            value:'Passport',
            readOnly:true
        },
        {
            xtype:'textfield',
            flex:1,
            name:'verification_id_number',
            fieldLabel:'Passport Number',
            msgTarget:'side',
            allowBlank:false
        },
        {
            xtype: 'datefield',
            format: 'M d, Y',
            flex:1,
            name:'date_of_entry_into_india',
            fieldLabel:'Date of Entry into INDIA'
        }
    ]
})
