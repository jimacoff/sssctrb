/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/14/14
 * Time: 3:36 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.define('UserManagement.view.SignUp',{
    extend:'Ext.form.Panel',
    alias : 'widget.signUpForm',

    authentication_key:'',
    form_submit_path:'',
    users_check_for_duplicate_user_path:'',
    asset_path_valid:'',
    asset_path_invalid:'',
    purpose:'',
    border:0,

    width:700,
    layout: 'anchor',
    bodyPadding: 20,
    fieldDefaults:{
        flex:1,
        margin     : "10 0 0 0"
    },
    initComponent:function(){
        var me = this;
        me.items = [
            {
                xtype:'hiddenfield',
                name:'authenticity_token',
                value:this.authentication_key
            },
            {
                xtype:'combo',
                fieldLabel: 'Nationality',
                itemId:'nationality',
                flex:1,
                store:'UserGroups',
                name: 'user[user_group_id]',
                displayField:'group_name',
                valueField:'id',
                query:'local',
                msgTarget:'side',
                listeners:{
                    afterrender:function(thisCombo,eOpts){
                        thisCombo.select(thisCombo.getStore().getAt(0));
                    }
                }
            },
            {
                xtype:'container',
                layout:'hbox',
                items:[
                    {
                        //                            flex:1,
                        xtype:'textfield',
                        width:30,
                        fieldLabel:'E-mail Id (Username)',
                        name:'user[email]',
//                        value:'mail2ssdsssds@dfddfd.com',
                        allowBlank:false,
                        itemId:'emailId',
                        msgTarget:'side',
                        listeners:{
                            blur:function(emailField){
                                var emailInput = emailField.getValue();
                                var form = this.up('.form');

                                if(emailInput == ""){
                                    form.down('#validEmailImage').hide();
                                    form.down('#invalidEmailImage').hide();
                                }else{
                                    Ext.Ajax.request({
                                        url:me.users_check_for_duplicate_user_path,
                                        method:'GET',
                                        params:{email:emailInput},
                                        scope:this,
                                        success:function(response){
                                            result = Ext.decode(response.responseText);

                                            if(result.success){
                                                form.down('#validEmailImage').show();
                                                form.down('#invalidEmailImage').hide();
                                            }else{
                                                form.down('#validEmailImage').hide();
                                                form.down('#invalidEmailImage').show();
                                            }
                                        },
                                        failure:function(response){
                                            form.down('#validEmailImage').hide();
                                            form.down('#invalidEmailImage').show();
                                        }
                                    })
                                }
                            }
                        }
                    },
                    {
                        xtype:'image',
                        shrinkWrap:true,
                        margin:"15 0 0 5",
                        hidden:true,
                        width:20,
                        height:20,
                        itemId:'validEmailImage',
                        src:this.asset_path_valid,
                        alt:'Available',
                        title:'Available'

                        //                            autoEl:'div',
                        //                            flex:1,
                    },
                    {
                        xtype:'image',
                        hidden:true,
                        margin:"15 0 0 5",
                        shrinkWrap:true,
                        width:20,
                        height:20,
                        //                            flex:1,
                        itemId:'invalidEmailImage',
                        src:this.asset_path_invalid,
                        alt:'Not Available',
                        title:'Not Available'
                        //                            autoEl:'div'
                    }
                ]
            },
            {
                xtype:'textfield',
                fieldLabel:'Password',
                inputType:'password',
                name:'user[password]',
                msgTarget:'side',
                allowBlank:false,
            },
            {
                xtype:'textfield',
                inputType:'password',
                fieldLabel:'Confirm Password',
                msgTarget:'side',
                allowBlank:false,
            },
            {
                xtype:'container',
                flex:1,
                msgTarget:'side',
                defaultType:'textfield',
                layout:{
                    type:'hbox'
                },
                items:[
                    {
                        fieldLabel: 'First Name',
                        itemId:'first_name_id',
                        flex:1,
                        msgTarget:'side',
                        allowBlank:false,
                        name:'user[first_name]',
//                        value:'dfdfdfdfd'
                    },
                    {
                        fieldLabel: 'Last Name',
                        margin:"10 0 0 20",
                        flex:1,
                        msgTarget:'side',
                        allowBlank:false,
                        name:'user[last_name]',
//                        value:'dfddrerererer'
                    }
                ]
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
})
