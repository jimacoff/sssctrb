
Ext.define('UserManagement.view.AddEditUser',{
    extend: 'Ext.form.Panel',
    alias : 'widget.addEditUserForm',

    authentication_key:'',
    users_check_for_duplicate_user_path:'',
    asset_path_valid:'',
    asset_path_invalid:'',
    form_submit_path:'',
    purpose:'',
    border:0,

    width:700,
    layout: 'anchor',
    bodyPadding: 20,
    fieldDefaults:{
        margin     : "10 0 0 0"
    },

    initComponent: function() {
        var me = this;
        this.items = [
            {
                xtype:'hiddenfield',
                name:'authenticity_token',
                value:this.authentication_key
            },
            {
                xtype:'combo',
                fieldLabel: 'Nationality',
                flex:1,
                store:nationalityStore,
                name: 'user[indian]',
                displayField:'value',
                valueField:'value',
                query:'local',
                msgTarget:'side'
            },
            {
                xtype:'userPersonalDetails',
                title:'Personal Details',
                collapsible:true,
                padding:'12 12 12 12',
                margin:'10 10 10 10'
            },
            {
                xtype:'indianSpecificDetails',
                title:'Indian Specific Details',
                padding:'12 12 12 12',
                margin:'10 10 10 10',
                collapsible:true
            },
            {
                xtype:'nonIndianSpecificDetails',
                title:'Non Indian Specific Details',
                padding:'12 12 12 12',
                margin:'10 10 10 10',
                collapsible:true
            },
            {
                xtype:'toolbar',
                margin:"20 0 0 0",
                cls:'sign_in_toolbar',
                flex:1,
                border:1,
                //                height:40,
                layout:{
                    //                    type:'hbox'
                },
                items:[
                    {
                        xtype:'button',
                        cls:'login_button',
    //                            flex:1,
                        text:this.purpose,
                        size:40,
                        itemId:'form_submit',
                    }
                ]
            }
        ],
        this.callParent(arguments);
    }
    /* Note this takes the place of what used to be bindModel() - based on @themightychris's simplification suggestion */
    ,loadRecord: function(model) {
        console.log(model.associations.items);

        var i, len, associations = model.associations.items, name, field;

        this.callParent(arguments);

        // loadRecord() won't include associated data, so let's do that.
        for (i=0, len=associations.length; i<len; i++) {
            name = associations[i].name;
            console.log(name);

            field = this.down('[name='+name+']');
            console.log("field : "+field);

            if (field && field.isFormField && field.bindStore) {
                field.bindStore(model[name]());
            }
        }
    },
});

