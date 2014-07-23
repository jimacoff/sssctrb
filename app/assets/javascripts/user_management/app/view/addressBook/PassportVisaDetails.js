/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/14/14
 * Time: 9:56 AM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('UserManagement.view.addressBook.PassportVisaDetails',{
    extend:'Ext.form.Panel',
    alias : 'widget.passportVisaDetails',
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
        {
            xtype:'form',
            itemId:'visaDetails',
            border:0,
            items:[
                {
                    xtype:'nonIndianVisaDetails',
                    title:'Visa Details',
                    collapsible:true,
                    itemId:'nonIndianSpecific_visaDetails',
                    margin:'20 10 10 10',
                    defaults: {
                        flex: 1,
                        padding:'10 10 10 10',
                    }
                }
            ]
        }
//        {
//            xtype:'nonIndianArrivalInformation',
//            title:'Arrival Information',
//            collapsible:true,
//            itemId:'nonIndianSpecific_arrivalInformation',
//            defaults: {
//                flex: 1,
//                padding:'10 10 10 10',
//            },
//        },
//        {
//            xtype:'nonIndianOtherDetails',
//            title:'Other Details',
//            collapsible:true,
//            itemId:'nonIndianSpecific_otherDetails',
//            defaults: {
//                flex: 1,
//                padding:'10 10 10 10',
//            },
//        }

    ]
})

