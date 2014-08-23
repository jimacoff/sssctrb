Ext.define('UserManagement.model.UserProfile.IndianUser', {
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
      instanceName:'verification_id_detail',
      model:'UserManagement.model.UserProfile.VerificationIdDetails',
      getterName:'getVerification_id_details',
//      setterName:'setIndianNationalInfo',
      associationKey:'verification_id_detail',
      associatedName:'verification_id_detail'
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
