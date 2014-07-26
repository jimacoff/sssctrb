/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/14/14
 * Time: 9:56 AM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('UserManagement.view.addressBook.PassportDetails',{
    extend:'Ext.form.Panel',
    alias : 'widget.passportDetails',
    itemId:'passportVisaDetailsId',
    defaults:{
        margin:'0 10 10 0'
    },
    border:0,
//    margin:'20 20 20 20',
    items:[
        {
            xtype:'form',
            itemId:'passportDetails',
            border:0,
            items:[
                {
                    xtype:'nonIndianPassportDetails',
                    title:'Passport Details',
                    collapsible:true,
                    itemId:'nonIndianSpecific_passportDetails',
                    margin:'20 10 10 10',
                    defaults: {
                        flex: 1,
                        padding:'10 10 10 10'
                    }
                }
            ]
        },
    ]
})

