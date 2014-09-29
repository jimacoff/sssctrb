Ext.define('RoomManagement.view.userenquiry.EnquiryContents',{
    extend:'Ext.panel.Panel',
    alias:'widget.enquiry_contents',
    layout:'anchor',
    flex:1,
    border:0,
    initComponent:function(){
        var me = this;
        me.items=[
            {
                xtype:'enquirySchedulePanel'
            }
//            {
//                xtype:'tabpanel',
//                items:[
//                    {
////                        title:'Room Schedule',
//                        xtype:'roomSchedulePanel',
//                        height:'500'
////                        autoScroll:true
//                    },
//                ]
//            }
        ];
        me.callParent(arguments);
    }
})