/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/14/14
 * Time: 2:34 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('UserManagement.view.users.NonIndianSpecificDetails.ArrivalInformation',{
    extend: 'Ext.form.FieldSet',
    alias : 'widget.nonIndianArrivalInformation',
    items:[
        {
            xtype:'textfield',
            fieldLabel:'Arrived in India from (Country)',
            name:'nonIndianNational[arrival_from_country]'
        },
        {
            xtype:'textfield',
            fieldLabel:'Citi and Place in the above country',
            name:'nonIndianNational[arrival_from_city_and_place]'
        },
        {
            xtype:'datefield',
            fieldLabel:'Date of Arrival in India',
            name:'nonIndianNational[arrival_date_in_india]',
            format:'M d, Y'
        },
        {
            xtype: 'datefield',
            fieldLabel:'Date of Arrival in Ashram',
            name:'nonIndianNational[arrival_date_in_ashram]',
            format:'M d, Y'
        },
        {
            xtype:'textfield',
            fieldLabel:'Time of Arrival in Ashram',
            name:'nonIndianNational[arrival_time_in_ashram]'
        },
        {
            xtype:'textfield',
            fieldLabel:'Planned number of days in Ashram',
            name:'nonIndianNational[arrival_stay_days_in_ashram]'
        },
    ]
})