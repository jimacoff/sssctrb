Ext.define('UserManagement.view.addressBook.MemberDetailsPanel',{
    extend:'Ext.form.Panel',
    alias:'widget.memberDetailsPanel',
    width:400,
    layout:'anchor',

    user_group:1,

    initComponent:function(){
        var me = this;
        user_group = this.user_group;
        insideTabPanels = this.getInsideTabPanels(user_group);

        me.items = [
            {
                xtype:'tabpanel',
                defaults:{
                    width:500,
                    height:400,
                    margin:'0 10 0 10',
                    autoScroll:true
                },
                items:insideTabPanels
//                    [
//                    {
//                        xtype:'userPersonalDetails',
//                        title:'User Personal Details',
//                        itemId:'userPersonalDetailsId'
//                    },
//                    {
//                        xtype:'passportDetails',
//                        title:'Passport Details',
//                        itemId:'passportDetailsId'
//                    },
//                    {
//                        xtype:'visaDetails',
//                        title:'Visa Details',
//                        itemId:'visaDetailsId'
//                    },
//                    {
//                        xtype:'arrivalAndOtherInformation',
//                        title:'Arrival / Other Info',
//                        itemId:'arrivalAndOtherInformationId'
//                    }
//                ]
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
    },
    getInsideTabPanels:function(user_group){
        tabPanels = [{
            xtype:'userPersonalDetails',
            title:'User Personal Details',
            itemId:'userPersonalDetailsId'
        }];

        if(user_group == 2){
            tabPanels.push({
                // Indian Devotees
                xtype:'indianSpecificDetails',
                title:'Verification Information',
                itemId:'verificationProofId'
            })
        }else if(user_group == 3 || user_group == 4){
            // NRI / Nepal / Bhutan Devotees
            tabPanels.push({
                xtype:'nriDetails',
                title:'Verification Information',
                itemId:'verificationProofId'
            })
        }else if(user_group == 5){
            // Overseas Devotees

            tabPanels.splice(1,0,
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
            );
        }

        return tabPanels;
    }
})

