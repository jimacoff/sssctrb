Ext.define('UserManagement.controller.AddressBook', {
  extend: 'UserManagement.controller.UserProfile',
  user_details_paths:null,
  config_variables:null,
  views: [
      'UserManagement.view.addressBook.AddressBookTreePanel',
  ],

  models:[
    'UserManagement.model.UserProfile.AddressBookModel',
//    'UserManagement.model.UserProfile.UserProfileDetails',
//    'UserManagement.model.UserProfile.User',
//    'UserManagement.model.UserProfile.NonIndianSpecificDetails',
  ],
  stores:[
    'UserManagement.store.UserProfile.AddressBookStore',
//    'UserManagement.store.UserProfile.UsersStore'
  ],

  refs: [
      {
        ref: 'addressBookTreePanel',
        selector: 'addressBookTreePanel'
      },
  ],

  init: function() {
//    this.control({
      this.listen({
          controller:{

          },
          component:{
              'addressBookTreePanel':{
                  profileChartDoubleClick:this.onProfileChartDoubleClick,
                  afterrender:this.loadAddressBookData,

              },
              'detailsPanel button[itemId="saveDetailsButtonItemId"]':{
                  click:this.save_user_specific_details
              },
              'configure_paths':this.configure_paths
          }
      });
//      'sample':{
//        render:this.renderSampleForm
//      },
//      'addEditUserForm button[itemId="form_submit"]': {
//        click: this.saveUser,
//      },
//      'allUsers': {
//          afterrender: this.getAllUsers
//      },
//      'signUpForm':{
////          afterrender: this.
//      },
//      'signUpForm button[itemId="form_submit"]': {
//          click: this.saveUser,
//      },
//    });
  },
  loadAddressBookData:function(){

      var address_book_store =
          this.getUserManagementStoreUserProfileAddressBookStoreStore();

      address_book_store.load();

      var thisControllerRef = this;

      address_book_store.on('load',function(){

          var addressBookPanel = thisControllerRef.getAddressBookTreePanel();
          var addressBookTreePanel =
              addressBookPanel.down('#addressBookId');

          var addressBookRootNode = {
              name: 'users',
              text: 'Users',
              expanded: true,
              leaf: false,
              children: []
          };

          addressBookTreePanel.setRootNode(addressBookRootNode);

          var abRootnode = addressBookTreePanel.getRootNode();

          address_book_store.each(function(eachAddress){
              var childNode;

              childNode = {
                  name: eachAddress.get('full_name'),
                  text: eachAddress.get('full_name'),
                  leaf: true
              }

              abRootnode.appendChild(childNode);
          });


      });

  },
  configure_paths_and_variables:function(user_details_paths_params,config_variables){
      this.user_details_paths = user_details_paths_params;
      this.config_variables = config_variables;
  },
  getUserDetails:function(){
      // Get the complete User Details
      var user_details_store = this.getUserManagementStoreUserProfileUsersStoreStore();

      Ext.Ajax.request({
          scope:this,
          url:this.user_details_paths["user_details_get_path"],
          method:'GET',
          success:function(response){
              var responseJson = Ext.decode(response.responseText);

              if(responseJson.success){
                  user_details_store.loadRawData(responseJson);
              }
          }
      })

  },
  getUserSpecificDetailFromServer:
    function(user_record,url_path,purpose,user_specific_detail_record,function_to_call){
      Ext.Ajax.request({
          scope:this,
          url:url_path, //this.user_details_paths["personal_details_get_path"],
          method:'GET',
          success:function(response){
              var responseJson = Ext.decode(response.responseText);

              var user_specific_detail_response = responseJson.user_specific_detail;

              if(user_specific_detail_record){
                  Ext.Object.each(user_specific_detail_response,function(eachKey,eachvalue){
                      var new_key = purpose+"["+eachKey+"]"; //"personal_detail["+eachKey+"]"
                      if(user_specific_detail_record.get(new_key) != undefined){
                          user_specific_detail_record.set(new_key,eachvalue);
                      }
                  });
              }else{
                  var recordType = ""
                  if(purpose.search("personal_detail") != -1){
                      recordType = 'UserManagement.model.UserProfile.UserProfileDetails';
                      var newUserSpecificDetailRecord
                          = Ext.create(recordType,user_specific_detail_response);
                      user_record.personal_detail = newUserSpecificDetailRecord;
                  }else if(purpose.search("non_indian_specific_detail") != -1){
                      recordType = 'UserManagement.model.UserProfile.NonIndianSpecificDetails';
                      var newUserSpecificDetailRecord
                          = Ext.create(recordType,user_specific_detail_response);
                      user_record.non_indian_specific_detail = newUserSpecificDetailRecord;
                  }
              }

              if(function_to_call)
                function_to_call.call();

          }
      })

  },
  onProfileChartDoubleClick:function(specChartObject,chartEventObject){
      var chartParam = specChartObject.value[0];
      var xtypeConfiguration;

      // Get the User Personal Details
      var user_details_store = this.getUserManagementStoreUserProfileUsersStoreStore();
      var user = user_details_store.getAt(0);

      var user_specific_detail_record = null;
      var purpose = "";
      var user_specific_detail_path = "";

      if(chartParam.search("Non-Indian") != -1){
        xtypeConfiguration = [
            {
                xtype:'detailsPanel',
                panel_for:'nonIndianSpecificDetails',
                width:580,
                height:300,
                margin:'10 10 10 10',
                autoscroll:true,
//                overflowY: 'scroll',
//                overflowX: 'scroll',
                items:[
                    {
                        xtype:"nonIndianSpecificDetails"
                    }
                ]
            },
            "Non-Indian Specific Details",
            "nonIndianSpecific",
            620
        ]

        user_specific_detail_record = user.non_indian_specific_detail;
        purpose = "non_indian_specific_detail";
        user_specific_detail_path =
            this.user_details_paths["non_indian_specific_details_get_path"];

      }else if(chartParam.search("Personal") != -1){

          xtypeConfiguration = [
              {
                  xtype:'detailsPanel',
                  width:580,
                  height:500,
                  panel_for:'userPersonalDetails',
                  margin:'10 10 10 10',
                  autoscroll:true,
                  items:[
                      {
                          xtype:"userPersonalDetails"
                      }
                  ]
              },
              "Personal Details",
              "profileWindow",
              620
          ]

          user_specific_detail_record = user.personal_detail;
          purpose = "personal_detail";
          user_specific_detail_path = this.user_details_paths["personal_details_get_path"];

      }

      var thisController = this;
      this.getUserSpecificDetailFromServer(
          user,
          user_specific_detail_path,
          purpose,
          user_specific_detail_record,
          function(){
              thisController.launchDetailsWindow(xtypeConfiguration);

              if(user_specific_detail_record){
                  var userSpecificDetailView = thisController.getDetailsPanel();
                  var userSpecificDetailForm = userSpecificDetailView.getForm();
                  userSpecificDetailForm.loadRecord(user);
                  userSpecificDetailForm.loadRecord(user_specific_detail_record);
              }
      });

  },
  launchDetailsWindow:function(xtypeConfiguration){
      var profileCompletenessWindowId = xtypeConfiguration[2];
      var title = xtypeConfiguration[1];
      var windowHeight = xtypeConfiguration[3];

      var detailsWindow = this.getOrCreateProfileWindow({
          "id":'detailsWindow',
          "title":title,
          "width":windowHeight
      });

      xtypeConfiguration.splice(1,3);

        detailsWindow.removeAll();

        detailsWindow.add(xtypeConfiguration);

        detailsWindow.doLayout();
        detailsWindow.show();
  },
  getOrCreateProfileWindow:function(windowConfiguration){
      var profileWindow =
          Ext.WindowManager.get("detailsWindow");

      if(!profileWindow){
          profileWindow = this.createAndRegisterWindow(windowConfiguration);
      }

      return profileWindow;
  },
  createAndRegisterWindow:function(windowConfiguration){
      var profileWindow =
          Ext.create('Ext.window.Window',windowConfiguration);

      Ext.WindowManager.register(profileWindow);

      return profileWindow;
  },
  loadSpecificChartData:function(profileChart){
      var purpose = profileChart.purpose;
      var storeToBeLoaded;
      if(purpose == "fullProfile"){
          storeToBeLoaded = this.loadFullProfileStore();
      }
  },
  loadNonIndianProfileStore:function(){
      data = [
          {
              profile_name:'Passport Details',percentage_complete:'30'
          },
          {
              profile_name:'Other Details',percentage_complete:'10'
          }
      ];

      var profileCompletenessStore = this.getUserManagementStoreUserProfileProfileCompletenessChartStoreStore();
      profileCompletenessStore.loadRawData(data);
  },
  loadFullProfileStore:function(){
      data = [
          {
              profile_name:'Personal Profile',percentage_complete:'90'
          },
          {
              profile_name:'Non-Indian Specific',percentage_complete:'50'
          }
      ];

      var profileCompletenessStore = this.getUserManagementStoreUserProfileProfileCompletenessChartStoreStore();
      profileCompletenessStore.loadRawData(data);
  },
  save_user_specific_details:function(button){
      var detailsFormView = button.up('.form');
      var panel_for = detailsFormView.panel_for;

      var authencityTokenParam = $('meta[name="csrf-token"]').attr('content');
      var form_submit_path = "";

      if(panel_for == "userPersonalDetails"){
          form_submit_path = this.user_details_paths["personal_details_submit_path"];
      }else if(panel_for == "nonIndianSpecificDetails"){
          form_submit_path = this.user_details_paths["non_indian_specific_details_submit_path"];
      }

      var userSpecificDetailsForm = detailsFormView.getForm();

      if(userSpecificDetailsForm.isValid()){
          userSpecificDetailsForm.submit({
              url: form_submit_path,
              params:{
                  authenticity_token:authencityTokenParam
              },
              waitMsg: 'Saving User Details ...',
              success:function(form,action){
                  var result = action.result;

                  var result_message = result.message;

                  Ext.Msg.show({
                      title:'Alert',
                      msg:result_message,
                      buttons:Ext.Msg.OK
                  });

//                  location.href = "/";
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

  }


});
