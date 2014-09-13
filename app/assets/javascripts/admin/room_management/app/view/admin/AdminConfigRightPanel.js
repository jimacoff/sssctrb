Ext.define('AdminRoomManagement.view.admin.AdminConfigRightPanel',{
    extend:'Ext.panel.Panel',
    alias:'widget.adminConfigRightPanel',
    layout:'anchor',
    flex:1,
    border:0,
    initComponent:function(){
        var me = this;
        me.items=[
            {
                xtype:'tabpanel',
                items:[
                    {
                        title:'Room Types',
                        xtype:'roomTypePanel'
                    },
                    {
                        title:'Room Schedule',
                        xtype:'roomSchedulePanel',
                        height:'500',
//                        autoScroll:true
                    }
                ]
            }
        ];
        me.callParent(arguments);
    }
})