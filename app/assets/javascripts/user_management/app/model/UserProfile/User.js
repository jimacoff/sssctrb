Ext.define('UserManagement.model.UserProfile.User', {
  extend:'Ext.data.Model',
  fields: [
    { name: 'id', type: 'int'},
    { name: 'email', type: 'string'},
    { name: 'first_name', type: 'string'},
    { name: 'last_name', type: 'string'},
    { name: 'nationality', type: 'int'},
    { name: 'dependent_user_id', type: 'int'},

    { name: 'full_name', type: 'string' ,
        convert:function(newValue,record){
            return record.get('first_name') + " " + record.get('last_name')
        }
    },
    { name: 'gender_age', type: 'string' ,
      convert:function(newValue,record){
          var rec_gender = record.get('gender');
          var gender = (rec_gender ? (rec_gender == 1 ? "M" : "F") : '');
          return    gender+ "( " + record.get('age') + " )";
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
      getterName:'getPersonalDetail',
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
    },
    {
      type:'hasMany',
      instanceName:'visaDetails',
      model:'UserManagement.model.UserProfile.VisaDetails',
      getterName:'getVisaDetails',
//      setterName:'setIndianNationalInfo',
      associationKey:'visa_details',
      associatedName:'visa_details'
    }
//      ,{
//          type:'hasOne',
//          instanceName:'passportDetail',
////      model:'UserManagement.model.UserProfile.NonIndianSpecificDetails',
//          model:'UserManagement.model.UserProfile.PassportDetails',
//          getterName:'getpassportDetail',
//          associationKey:'passportDetail',
//          associatedName:'passportDetail'
//      }
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
            root:'/'
        }
    }

});
