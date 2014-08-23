Ext.define('UserManagement.model.UserProfile.NRIDetails', {
  extend:'Ext.data.Model',
  fields: [
    { name: 'id', type: 'int'},
    { name: 'verification_id_number', type: 'string'},
    { name: 'verification_id_type_id', type: 'int',default:4},
    { name: 'date_of_entry_into_india', type: 'date'},
    { name: 'user_id', type: 'int'}
  ]
//  validations: [
//    { type: 'presence', field: 'first_name' },
//    { type: 'presence', field: 'last_name' },
//    { type: 'presence', field: 'email' }
//  ],
});
