/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/14/14
 * Time: 9:56 AM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('UserManagement.view.addressBook.ArrivalAndOtherInformation',{
    extend:'Ext.form.Panel',
    alias : 'widget.arrivalAndOtherInformation',
    itemId:'ArrivalAndOtherInformationId',
    defaults:{
        margin:'20 10 10 10',
    },
    border:0,
    height:450,
    autoScroll:true,
//    overflowY:'auto',
//    margin:'20 20 20 20',
    items:[
        {
            xtype:'nonIndianAddressReferenceInIndia',
            title:'Home Address or Reference in India, if any',
        },
        {
            xtype:'nonIndianArrivalInformation',
            title:'Arrival Information',
            collapsible:true,
            itemId:'nonIndianSpecific_arrivalInformation',
            defaults: {
                flex: 1,
                padding:'10 10 10 10',
            },
        },
        {
            xtype:'nonIndianOtherDetails',
            title:'Other Details',
            collapsible:true,
            itemId:'nonIndianSpecific_otherDetails',
            defaults: {
                flex: 1,
                padding:'10 10 10 10',
            },
        }

    ]
})

