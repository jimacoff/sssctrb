Ext.define('AdminRoomManagement.view.admin.RoomTypePanel',{
    extend:'Ext.panel.Panel',
    alias:'widget.roomTypePanel',
    title:'Configurations',
//    layout:'vbox',
//    layoutConfig: {
//        padding:'5',
//        pack:'center',
//        align:'middle'
//    },
    margin:'20 0 0 30',
//    margin:'40',
    maxWidth:'500',
    minHeight:'300',
    border:1,
    initComponent:function(){
        var me = this;
        me.items=[
            {
                xtype:'grid',
                border:1,
                store:'AdminRoomManagement.store.RoomTypes',
                columns:[
                    {xtype: 'rownumberer'},
                    {header:'Room Type Name',dataIndex:'name',editor:'textfield',flex:1},
                    {header:'Room Type Description',dataIndex:'description',editor:'textfield',flex:1}
                ],
                plugins:[
                    Ext.create('Ext.grid.plugin.RowEditing',{
                        clicksToEdit:2
                    })
                ],
                selType: 'rowmodel'
            }
        ];

        me.dockedItems = [
            {
                xtype:'toolbar',
                dock:'top',
                items:[
                    '->',
                    {
                        xtype:'button',
                        text:'+',
                        itemId:'addVisa',
                        iconCls:'add_cls',
                        tooltip:'Add Room'
                    },
                    {
                        xtype:'button',
                        text:'-',
                        itemId:'deleteVisa',
                        iconCls:'delete_cls',
                        tooltip:'Delete Room'
                    }
                ]
            }
        ];

        me.callParent(arguments);
    }
})