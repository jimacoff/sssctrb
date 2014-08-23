Ext.define('UserManagement.model.UserProfile.VerificationIdDetails', {
  extend:'Ext.data.Model',
  fields: [
    { name: 'id', type: 'int'},
    { name: 'verification_id_number', type: 'string'},
    { name: 'verification_id_type_id', type: 'int'},
    { name: 'user_id', type: 'int'}
  ]
//  validations: [
//    { type: 'presence', field: 'first_name' },
//    { type: 'presence', field: 'last_name' },
//    { type: 'presence', field: 'email' }
//  ],
});
