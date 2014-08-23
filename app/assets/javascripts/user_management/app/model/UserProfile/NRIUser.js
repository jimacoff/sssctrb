Ext.define('UserManagement.model.UserProfile.NRIUser', {
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
      instanceName:'nri_detail',
      model:'UserManagement.model.UserProfile.NRIDetails',
      getterName:'get_nri_details',
//      setterName:'setIndianNationalInfo',
      associationKey:'nri_detail',
      associatedName:'nri_detail'
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
