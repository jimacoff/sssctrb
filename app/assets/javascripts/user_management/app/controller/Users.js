Ext.define('UserManagement.controller.Users', {
  extend: 'Ext.app.Controller',

  stores: ['UsersStore'],
  models: ['UserManagement.model.User','UserManagement.model.IndianNationalUser'],

  views: [
      'AddEditUser',
      'AllUsers',
      'UserManagement.view.SignUp',
      'UserManagement.view.users.UserPersonalDetails',
      'UserManagement.view.users.IndianSpecificDetails',
      'UserManagement.view.users.NonIndianSpecificDetails',
      'UserManagement.view.users.NonIndianSpecificDetails.PassportDetails',
      'UserManagement.view.users.NonIndianSpecificDetails.VisaDetails',
      'UserManagement.view.users.NonIndianSpecificDetails.ArrivalInformation',
      'UserManagement.view.users.NonIndianSpecificDetails.AddressReferenceInIndia',
      'UserManagement.view.users.NonIndianSpecificDetails.OtherDetails',

  ],

  refs: [{
    ref: 'addEditUserForm',
    selector: 'addEditUserForm'
  },{
      ref: 'signUpForm',
      selector: 'signUpForm'
  },{
      ref: 'allUsers',
      selector: 'allUsers'
  }],

  init: function() {
    this.control({
      'addEditUserForm':{
          afterrender:this.renderUsersForm
      },
      'sample':{
        render:this.renderSampleForm
      },
      'addEditUserForm button[itemId="form_submit"]': {
        click: this.saveUser,
      },
      'allUsers': {
          afterrender: this.getAllUsers
      },
      'signUpForm':{
//          afterrender: this.
      },
      'signUpForm button[itemId="form_submit"]': {
          click: this.saveUser,
      },
    });
  },
  getAllUsers: function(allusersGrid,eOpts){
      var usersStore = allusersGrid.getStore();
      var authentication_key = allusersGrid.authentication_key;

      usersStore.load({
          params:{
              authenticity_token: authentication_key
          },
          scope:this,
          callback:function(records,operation,success){
            if(success){
//              alert("Data Loaded");
            }
          }
      })

      usersStore.on('load',function(){
          alert(usersStore.getCount());
      })

  },
  renderUsersForm:function(){
      var userForm = this.getAddEditUserForm();
      purpose = userForm.purpose;

      var data = {
          "all_users_root":
              [{
                "email":"mail2sanand+16@gmail.com",
                "first_name":'Arvind',
                "last_name":"Srinivasan",
                "dob":"03-15-2012",
                "gender":2,
                "indian":true,
                "indianNationalData":{
                    'address':'fggffg fgf gf gfg fg fg fgfg',
                    'state':'Karnataka',
                    'city':'Bangalore',
                    'pincode':'560045',
                    'verification_id_proof':'PAN Card',
                    'verification_id_number':'AFR2345U',
                    'mobile_number':'9884834561',
                }
              }]
      }

      var usersStore = this.getUsersStoreStore();

//      usersStore.loadRawData(Ext.JSON.encode(data));
      usersStore.loadRawData(data);
//      usersStore.loadData(Ext.JSON.encode(data));
//      usersStore.loadData(data);

      var newUser = usersStore.getAt(0);

      usersStore.on('load',function(){
          alert(usersStore.getCount())
      })

//      var newUser = Ext.create('UserManagement.model.User',Ext.JSON.encode(data));

      this.formLoadRecord(newUser,userForm.getForm());

  },
  formLoadRecord:function(record,form){

      form.loadRecord(record);

//      var associatedData = record.getIndianNationalInfo();
//      form.setValues(associatedData.data);

//      Ext.each(record.associations.items,function(eachAssociation){
//          var instanceName = eachAssociation.instanceName;
//
//          console.log(record.indianNational);
//
////          form.setValues();
//      })

//      record.columnsS
// loop through each field store to load the data into the form by field id
//      Ext.each(record.ColumnsStore.data.items, function(item) {
//          Ext.each(item.FieldsStore.data.items, function(fields) {
//              alert(fields.data['Id']);
//              alert(fields.data['DisplayName']);
//
////              form.setValues([{ id: fields.data['Id'], value: fields.data['DisplayName'] }]);
//          });
//      });
  },
  saveUser:function(button){
//    var userFormView = this.getAddEditUserForm();
      var userFormView = button.up('.form');

      var form_submit_path = userFormView.form_submit_path;
      var userForm = userFormView.getForm();

      if(userForm.isValid()){
          userForm.submit({
              url: form_submit_path,
              waitMsg: 'Registering User...',
              success:function(form,action){
                  var result = action.result;

                  var result_message = result.message;

                  Ext.Msg.show({
                      title:'Alert',
                      msg:result_message,
                      buttons:Ext.Msg.OK
                  });

                  location.href = "/";
              },
              failure:function(form,action){
                  var result_message = action.result.message;
                  var errorMessage = "Please check the below errors before proceeding:";
                  for(eachMessage in result_message){
                      errorMessage = errorMessage + "<ul>"+ eachMessage + " : " + result_message[eachMessage]+"</ul>";
                  }

                  Ext.Msg.show({
                      title:'Alert',
                      msg:errorMessage,
                      buttons:Ext.Msg.OK
                  });
              }
          });
      }
      else{
          Ext.Msg.show({
              title:'Alert',
              msg:"Please correct the errors in the form before proceeding",
              buttons:Ext.Msg.OK
          });
      }

  } // End of Save User

});
