// create a new instance of Application class
Ext.application({
    // the global namespace
    name: 'UserManagement',

    appFolder: '/assets/user_management/app',

    controllers: [
        'Users',
        'UserProfile',
        'AddressBook'
    ],
    stores: [
        'UsersStore'
    ],
    models: [
        'UserManagement.model.User',
        'UserManagement.model.IndianNationalUser'
    ]

//    autoCreateViewport: true
});