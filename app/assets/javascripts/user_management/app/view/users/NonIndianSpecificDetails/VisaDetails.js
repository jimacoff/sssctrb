/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/14/14
 * Time: 2:34 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('UserManagement.view.users.NonIndianSpecificDetails.VisaDetails',{
    extend: 'Ext.form.FieldSet',
    alias : 'widget.nonIndianVisaDetails',
    items:[
        {
            xtype:'textfield',
            fieldLabel:'VISA Number',
            name:'nonIndianNational[visa_number]'
        },
        {
            xtype:'textfield',
            fieldLabel:'City Of Issue',
            name:'nonIndianNational[visa_city_of_issue]'
        },
        {
            xtype:'textfield',
            fieldLabel:'Country Of Issue',
            name:'nonIndianNational[visa_country_of_ssue]'
        },
        {
            xtype: 'datefield',
            fieldLabel:'Date Of Issue',
            name:'nonIndianNational[visa_date_of_issue]',
            format:'M d, Y'
        },
        {
            xtype: 'datefield',
            fieldLabel:'Valid Till',
            name:'nonIndianNational[visa_valid_till]',
            format:'M d, Y'
        },
        {
            xtype:'fieldcontainer',
            fieldLabel:'Type of VISA',
            layout:'vbox',
            items:[
                {
                    xtype:'fieldcontainer',
                    defaultType:'radiofield',
                    defaults:{
                        flex:1,
                        margin:'10 20 0 0',
                    },
                    layout:'hbox',
                    items:[
                        {
                            boxLabel  : 'Tourist',
                            name      : 'nonIndianNational[visa_type]',
                            inputValue: 1,
                            id        : 'visa_tourist',
                            selected:true
                        },
                        {
                            boxLabel  : 'PIO',
                            name      : 'nonIndianNational[visa_type]',
                            inputValue: 2,
                            id        : 'visa_pio',
                        },
                        {
                            boxLabel  : 'OCI',
                            name      : 'nonIndianNational[visa_type]',
                            inputValue: 3,
                            id        : 'visa_oci',
                        },
                        {
                            boxLabel  : 'Others',
                            name      : 'nonIndianNational[visa_type]',
                            inputValue: 4,
                            id        : 'visa_others',
                        },
                    ]
                },
                {
                    xtype:'textfield',
                    flex:1,
                    name:'nonIndianNational[other_type_of_visa]',
                    fieldLabel:'If Others mention',
                }
            ]
        },
    ]
})