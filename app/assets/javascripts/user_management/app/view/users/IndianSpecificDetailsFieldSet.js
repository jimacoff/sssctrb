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

Ext.define('UserManagement.view.users.IndianSpecificDetailsFieldSet',{
    extend:'Ext.form.FieldSet',
    alias : 'widget.indianSpecificDetailsFieldSet',
    itemId:'indianSpecificDetailsId',
    items:[
        {
            xtype:'fieldcontainer',
            fieldLabel:'Verification',
            layout:'vbox',
            items:[
                {
                    xtype:'combo',
                    flex:1,
                    fieldLabel:'Id Proof',
                    name:'indianNational[verification_id_proof]',
                    store:verificationStore,
                    displayField:'value',
                    valueField:'value',
                    query:'local',
                    msgTarget:'side',
                },
                {
                    xtype:'textfield',
                    flex:1,
                    name:'indianNational[verification_id_number]',
                    fieldLabel:'Id Number',
                    msgTarget:'side',
                    allowBlank:false,
                }
            ]
        },
    ]
})
