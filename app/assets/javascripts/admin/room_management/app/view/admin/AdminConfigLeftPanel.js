Ext.define('AdminRoomManagement.view.admin.AdminConfigLeftPanel',{
    extend:'Ext.panel.Panel',
    alias:'widget.adminConfigLeftPanel',
    initComponent:function(){
        var me = this;
        me.items=[
            {
                xtype:'tabpanel',
                items:[
                    {
                        title:'Room Type',
                        itemId:'roomTypeConfig'
                    },
                    {
                        title:'Room Schedule',
                        itemId:'roomSchConfig'
                    }
                ]
            }

        ];
        me.callParent(arguments);
    }
})