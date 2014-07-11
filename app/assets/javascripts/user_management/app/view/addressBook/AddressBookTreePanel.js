/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/14/14
 * Time: 7:24 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('UserManagement.view.addressBook.AddressBookTreePanel',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.addressBookTreePanel',
    itemId:'addressBookId',
    defaults:{
       margin:'0 10 10 0'
    },
    initComponent:function(){
        var me = this;
        me.items = [
            {
                xtype:'treepanel',
//                title:'Address Book',
                width: 200,
                height: 350,
                itemId:'addressBookId',
//                useArrows: true,
                lines: true,
                border:0,
//                store: store,
//                rootVisible: false
            },
        ];

        me.callParent();
    },

})