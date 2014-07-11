/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/14/14
 * Time: 2:34 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('UserManagement.view.users.NonIndianSpecificDetails.AddressReferenceInIndia',{
    extend: 'Ext.form.FieldSet',
    alias : 'widget.nonIndianAddressReferenceInIndia',
    layout:'vbox',
    items:[
        {
            xtype:'fieldcontainer',
            fieldLabel : 'Any Home Address Or Referrence in India',
            items:[
                {
                    xtype      : 'fieldcontainer',
                    defaultType: 'radiofield',
                    defaults: {
                        flex: 1,
                        padding:'0 40 0 0',
                        margin:'0 40 0 0 '
                    },
                    layout: 'hbox',
                    msgTarget:'side',
                    items: [
                        {
                            boxLabel  : 'None',
                            name      : 'nonIndianNational[address_referrence_in_india]',
                            inputValue: 1,
                            id        : 'none'
                        },
                        {
                            boxLabel  : 'Prashanthi Nilayam',
                            name      : 'nonIndianNational[address_referrence_in_india]',
                            inputValue: 2,
                            id        : 'prashanthiNilayam',
                            selected:true
                        },
                        {
                            boxLabel  : 'Others',
                            name      : 'nonIndianNational[address_referrence_in_india]',
                            inputValue: 2,
                            id        : 'others',
                            selected:true
                        }
                    ]
                },
                {
                    xtype:'textfield',
                    flex:1,
                    padding:'0 150 20 0',
                    name:'nonIndianNational[other_address_referrence]',
                    fieldLabel:'If Any other, mention here',
                }
            ]
        },
    ]
})