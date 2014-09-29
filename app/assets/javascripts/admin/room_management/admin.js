// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

Ext.Loader.setConfig({enabled: true});
//Ext.Loader.setPath('Ext.ux', '../ux');

Ext.application({
    // the global namespace
    name: 'RoomManagement',
    appFolder: '/assets/admin/room_management/app',
    controllers: [
        'Admin'  //,'RoomSchedule','RoomTypeConfig'
    ],
    stores: [
//        'UsersStore'
    ],
    models: [
//        'UserManagement.model.User',
//        'UserManagement.model.IndianNationalUser'
    ],
    autoCreateViewport: true
});
