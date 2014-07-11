Ext.define('UserManagement.model.User', {
//  extend: 'UserManagement.model.AssociatedDataBehaviour',
    extend:'Ext.data.Model',
  fields: [
    { name: 'id', type: 'int' },
    { name: 'user[email]', type: 'string',mapping:'email'},
    { name: 'user[first_name]', type: 'string' ,mapping:'first_name'},
    { name: 'user[last_name]', type: 'string' ,mapping:'last_name'},
    {   name: 'user[dob]',
        type: 'date',
        dateFormat: 'm-d-Y',
        mapping:'dob'
    },
    { name: 'user[gender]', type: 'int' ,mapping:'gender'},
    { name: 'desc', type: 'string'},
    { name: 'indian', type: 'string'},
    { name: 'photo', type: 'string'},

    { name: 'indianNational[address]', type: 'string', mapping: 'indian_national_details.address'},
    { name: 'indianNational[state]', type: 'string' ,mapping:'indian_national_details.state'},
    { name: 'indianNational[city]', type: 'string' ,mapping:'indian_national_details.city'},
    { name: 'indianNational[pincode]', type: 'string' ,mapping:'indian_national_details.pincode'},
    { name: 'indianNational[verification_id_proof]', type: 'string' ,mapping:'indian_national_details.verification_id_proof'},
    { name: 'indianNational[verification_id_number]', type: 'string' ,mapping:'indian_national_details.verification_id_number'},
    { name: 'indianNational[mobile_number]', type: 'string' ,mapping:'indian_national_details.mobile_number'},

    // Aliases for Grid
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
//  associations:[{
//      type:'hasOne',
//      instanceName:'indianNational',
//      model:'UserManagement.model.IndianNationalUser',
//      getterName:'getIndianNationalInfo',
////      setterName:'setIndianNationalInfo',
//      associationKey:'indianNationalData',
//      associatedName:'indianNationalData'
//  }],
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
        url:'/get_all_users',
        reader: {
            type: 'json',
            root:'all_users_root'
        }
    }

});
