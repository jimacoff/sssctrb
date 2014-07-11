/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/19/14
 * Time: 1:23 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('UserManagement.view.userProfile.DetailsPanel',{
    extend:'Ext.form.Panel',
    alias:'widget.detailsPanel',
    panel_for:"",
    route_maps:null,
//    width:400,
//    height:500,
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        height:30,
        items: [
            '->',
            {
                xtype:'button',
                padding:'4 4 4 4',
                margin: '0 10 0 0',
                text:'Save',
                itemId:'saveDetailsButtonItemId'
            },
            {
                xtype:'button',
                padding:'4 4 4 4',
                margin: '0 10 0 0',
                text:'Cancel',
                itemId:'cancelDetailsButtonItemId'
            }
        ]
    }]
})
