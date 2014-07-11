/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/14/14
 * Time: 7:24 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('UserManagement.view.users.UserPersonalDetails',{
    extend: 'Ext.form.FieldSet',
    alias : 'widget.userPersonalDetails',
    itemId:'userPersonalDetailsId',
    defaults:{
       margin:'0 10 10 0'
    },
    items:[
        {
            xtype:'container',
            margin:'20 0 10 0',
            msgTarget:'side',
            defaults:{
               xtype:'textfield',
               flex:1,
               msgTarget:'side',
               allowBlank:false,
            },
            layout:{
                type:'hbox'
            },
            items:[
                {
                    fieldLabel: 'First Name',
                    itemId:'first_name_id',
                    name:'user[first_name]',
                },
                {
                    fieldLabel: 'Last Name',
                    margin:"0 0 0 20",
                    name:'user[last_name]',
                }
            ]
        },
        {
            xtype:'textfield',
            fieldLabel:'Mobile Number',
            name:'personal_detail[mobile_number]',
            msgTarget:'side',
            allowBlank:false,
        },
        {
            xtype      : 'fieldcontainer',
            fieldLabel : 'Gender',
            width:400,
            defaultType: 'radiofield',
            defaults: {
                flex: 1
            },
            layout: 'hbox',
            msgTarget:'side',
            allowBlank:false,
            items: [
                {
                    boxLabel  : 'Male',
                    name      : 'personal_detail[gender]',
                    inputValue: true,
                    id        : 'male'
                },
                {
                    boxLabel  : 'Female',
                    name      : 'personal_detail[gender]',
                    inputValue: false,
                    id        : 'female',
                    selected:true
                }
            ]
        },
        {
            xtype:'container',
            fieldLabel : 'Photo',
            items:[
                {
                    xtype:'filefield',
                    name:'personal_detail[photo]',
                    msgTarget:'side',
                    buttonText:'Select Photo',
                    width:330
                },
//                {
//                    xtype:'filefield',
//                    name:'personal_detail[photo]',
//                    msgTarget:'side',
//                    buttonText:'Select Photo',
//                    width:330
//                },
            ]

        },
        {
            xtype: 'datefield',
            fieldLabel: 'Date Of Birth',
            name: 'personal_detail[date_of_birth]',
            // The value matches the format; will be parsed and displayed using that format.
            format: 'M d, Y',
            value:'03-04-2012'
        },
        {
            xtype:'fieldset',
            title:'Address Details',
            padding:'12 12 12 12',
            margin:'10 10 10 10',
            collapsible:true,
            items:[
                {
                    xtype:'textarea',
                    name:'personal_detail[address]',
                    rows      : 5,
                    cols      : 40,
                    fieldLabel:'Address'
                },
                {
                    xtype:'textfield',
                    name:'personal_detail[state]',
                    fieldLabel:'State'
                },
                {
                    xtype:'textfield',
                    name:'personal_detail[city]',
                    fieldLabel:'City'
                },
                {
                    xtype:'textfield',
                    name:'personal_detail[country]',
                    fieldLabel:'Country'
                },
                {
                    xtype:'textfield',
                    name:'personal_detail[pincode]',
                    fieldLabel:'Pin Code'
                },
            ]
        },
    ]

})