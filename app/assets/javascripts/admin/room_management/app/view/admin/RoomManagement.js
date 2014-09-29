Ext.define('RoomManagement.view.admin.RoomManagement',{
    extend:'Ext.panel.Panel',
    title:'Room Schedule Configuration',
    alias:'widget.room_management_panel',
    layout:{
        type:'hbox'
    },
    width:1000,
    height:400,
    items:[
        {
            xtype:'adminConfigRightPanel'
//            flex:5
        }
    ]
})
