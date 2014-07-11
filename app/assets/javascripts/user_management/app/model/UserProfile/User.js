Ext.define('UserManagement.model.UserProfile.User', {
  extend:'Ext.data.Model',
  fields: [
    { name: 'id', type: 'int' ,mapping:'user.id'},
    { name: 'user[email]', type: 'string',mapping:'user.email'},
    { name: 'user[first_name]', type: 'string' ,mapping:'user.first_name'},
    { name: 'user[last_name]', type: 'string' ,mapping:'user.last_name'},
    { name: 'nationality', type: 'string'},

    { name: 'full_name', type: 'string' ,
        convert:function(newValue,record){
            return record.get('user[first_name]') + " " + record.get('user[last_name]')
        }
    },
    { name: 'gender_age', type: 'string' ,
      convert:function(newValue,record){
          var rec_gender = record.get('user[gender]');
          var gender = (rec_gender ? (rec_gender == 1 ? "M" : "F") : '');
          return    gender+ "( " + record.get('user[age]') + " )";
      }
    },


  ],
//  validations: [
//    { type: 'presence', field: 'first_name' },
//    { type: 'presence', field: 'last_name' },
//    { type: 'presence', field: 'email' }
//  ],
  associations:[
    {
      type:'hasOne',
      instanceName:'personal_detail',
      model:'UserManagement.model.UserProfile.UserProfileDetails',
      getterName:'getpersonalDetail',
//      setterName:'setIndianNationalInfo',
      associationKey:'personal_detail',
      associatedName:'personal_detail'
    },
    {
      type:'hasOne',
      instanceName:'non_indian_specific_detail',
      model:'UserManagement.model.UserProfile.NonIndianSpecificDetails',
      getterName:'getNonIndianSpecificDetail',
//      setterName:'setIndianNationalInfo',
      associationKey:'non_indian_specific_detail',
      associatedName:'non_indian_specific_detail'
    }
  ],
//    constructor: function(data) {
//        this.callParent([data]);
//        var proxy = this.getProxy();
//        if (proxy) {
//            var reader = proxy.getReader();
//            if (reader) {
//                // this function is crucial... otherwise, the associations are not populated
//                reader.readAssociated(this, data);
//            }
//        }
//    },
    proxy: {
        type: 'ajax',
//        url:'/get_all_users',
        reader: {
            type: 'json',
            root:'user_details'
        }
    }

});
