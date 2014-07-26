Ext.define('UserManagement.view.addressBook.MemberDetailsPanel',{
    extend:'Ext.form.Panel',
    alias:'widget.memberDetailsPanel',
    width:400,
    layout:'anchor',
    initComponent:function(){
        var me = this;
        me.items = [
            {
                xtype:'tabpanel',
                defaults:{
                    width:500,
                    height:400,
                    margin:'0 10 0 10',
                    autoScroll:true,
                },
                items:[
                    {
                        xtype:'userPersonalDetails',
                        title:'User Personal Details',
                        itemId:'userPersonalDetailsId'
                    },
                    {
                        xtype:'passportDetails',
                        title:'Passport Details',
                        itemId:'passportDetailsId'
                    },
                    {
                        xtype:'visaDetails',
                        title:'Visa Details',
                        itemId:'visaDetailsId'
                    },
                    {
                        xtype:'arrivalAndOtherInformation',
                        title:'Arrival / Other Info',
                        itemId:'arrivalAndOtherInformationId'
                    }
                ]
            }
        ];
        me.dockedItems = [
            {
                xtype:'toolbar',
                dock:'bottom',
                items:[
                    '->',
                    {
                        xtype:'button',
                        text:'Save',
                        itemId:'Save'

                    },
                    {
                        xtype:'button',
                        text:'Reset'
                    }
                ]
            }
        ];
        me.callParent(arguments);
    }
})

