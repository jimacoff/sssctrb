/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/14/14
 * Time: 2:34 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('UserManagement.view.users.NonIndianSpecificDetails.OtherDetails',{
    extend: 'Ext.form.FieldSet',
    alias : 'widget.nonIndianOtherDetails',
    items:[
        {
            xtype      : 'fieldcontainer',
            fieldLabel : 'Employed In India',
            defaultType: 'radiofield',
            defaults: {
                flex: 1
            },
            layout: 'hbox',
            msgTarget:'side',
            allowBlank:false,
            items: [
                {
                    boxLabel  : 'No',
                    name      : 'nonIndianNational[employed_in_india]',
                    inputValue: 1,
                    id        : 'employed_no',
                    selected:true
                },
                {
                    boxLabel  : 'Yes',
                    name      : 'nonIndianNational[employed_in_india]',
                    inputValue: 2,
                    id        : 'employed_yes',
                }
            ]
        },
        {
            xtype:'textfield',
            fieldLabel:'Purpose Of Visit',
            name:'nonIndianNational[purpose_of_visit]'
        },
        {
            xtype:'fieldcontainer',
            fieldLabel : 'Proposed Next Destination In India',
            items:[
                {
                    xtype      : 'fieldcontainer',
                    defaultType: 'radiofield',
                    defaults: {
                        flex: 1
                    },
                    layout: 'hbox',
                    msgTarget:'side',
                    allowBlank:false,
                    items: [
                        {
                            boxLabel  : 'Bangalore',
                            name      : 'nonIndianNational[proposed_next_destination_in_india]',
                            inputValue: 1,
                            id        : 'destination_bangalore',
                            selected:true
                        },
                        {
                            boxLabel  : 'Mumbai',
                            name      : 'nonIndianNational[proposed_next_destination_in_india]',
                            inputValue: 2,
                            id        : 'destination_mumbai',
                        },
                        {
                            boxLabel  : 'Chennai',
                            name      : 'nonIndianNational[proposed_next_destination_in_india]',
                            inputValue: 3,
                            id        : 'destination_chennai',
                        },
                        {
                            boxLabel  : 'Delhi',
                            name      : 'nonIndianNational[proposed_next_destination_in_india]',
                            inputValue: 4,
                            id        : 'destination_delhi',
                        },
                        {
                            boxLabel  : 'Others',
                            name      : 'nonIndianNational[proposed_next_destination_in_india]',
                            inputValue: 5,
                            id        : 'destination_others',
                        },
                    ]
                },
                {
                    xtype: 'textfield',
                    fieldLabel:'If Others',
                    name:'nonIndianNational[proposed_next_destination_in_india_others]',
                    format:'M d, Y'
                },
            ]
        },
        {
            xtype: 'textarea',
            fieldLabel:'Contact Person Name & Address in case of Emergency',
            name:'nonIndianNational[emergency_contact_details]',
        }
    ]
})