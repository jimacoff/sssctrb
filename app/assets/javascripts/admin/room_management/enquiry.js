// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

Ext.Loader.setConfig({enabled: true});
//Ext.Loader.setPath('Ext.ux', '../ux');

Ext.application({
    // the global namespace
    name: 'RoomManagement',
    appFolder: '/assets/admin/room_management/app',
    controllers: [
        'UserEnquiry'   //,'Calendar','RoomSchedule','RoomTypeConfig'
    ],
    stores: [],
    models: [],
    autoCreateViewport: false,
    launch:function(){
        Ext.create('Ext.panel.Panel',{
            layout: 'fit',
            title:'Enquiry Booking',
            margin:'10 0 0 0',
            items:[
                {
                    xtype:'enquiry_contents'
                }
            ],
            renderTo: Ext.get('users_index')
        })
    }
});
