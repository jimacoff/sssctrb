Ext.define('UserManagement.model.UserProfile.OverseasUser', {
  extend:'UserManagement.model.UserProfile.User',
  fields: [
//    { name: 'id', type: 'int'},
//    { name: 'email', type: 'string'},
//    { name: 'first_name', type: 'string'},

  ],
//  validations: [
//    { type: 'presence', field: 'first_name' },
//    { type: 'presence', field: 'last_name' },
//    { type: 'presence', field: 'email' }
//  ],
  associations:[
    {
      type:'hasOne',
      instanceName:'passport_detail',
      model:'UserManagement.model.UserProfile.PassportDetails',
      getterName:'getPassportDetail',
      associationKey:'passport_detail',
      associatedName:'passport_detail'
    }
  ]
//    proxy: {
//        type: 'ajax',
////        url:'/get_all_users',
//        reader: {
//            type: 'json',
//            root:'/'
//        }
//    }

});
