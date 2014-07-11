/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/14/14
 * Time: 2:34 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('UserManagement.view.users.NonIndianSpecificDetails.PassportDetails',{
    extend: 'Ext.form.FieldSet',
    alias : 'widget.nonIndianPassportDetails',
    items:[
        {
            xtype:'textfield',
            fieldLabel:'Passport Number',
            name:'non_indian_specific_detail[passport_number]'
        },
        {
            xtype:'textfield',
            fieldLabel:'City Of Issue',
            name:'non_indian_specific_detail[passport_city_of_issue]'
        },
        {
            xtype:'textfield',
            fieldLabel:'Country Of Issue',
            name:'non_indian_specific_detail[passport_country_of_issue]'
        },
        {
            xtype: 'datefield',
            fieldLabel:'Date Of Issue',
            name:'non_indian_specific_detail[passport_date_of_issue]',
            format:'M d, Y'
        },
        {
            xtype: 'datefield',
            fieldLabel:'Valid Till',
            name:'non_indian_specific_detail[passport_valid_till]',
            format:'M d, Y'
        }
    ]
})