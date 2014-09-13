Ext.define('AdminRoomManagement.view.Viewport',{
    extend:'Ext.panel.Panel',
    layout: 'fit',
    margin:'10 0 0 0',
    items:[
        {
            xtype:'room_management_panel'
        }
    ],
    renderTo: Ext.get('admin_index')
});