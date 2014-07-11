var usernameTpl = new Ext.XTemplate(
    '<tpl for="." >',
        '{full_name}',
    '<\/tpl>'
);

var genderAgeTpl = new Ext.XTemplate(
    '<tpl for="." >',
    '{gender_age}',
    '<\/tpl>'
);

/*
 '<tpl for="." >',
 '<tpl if="column_name == 0">',
 '<tpl elseif="column_name == 0">',
 '<tpl else="column_name == 0">',
 '<\/tpl>'
*/

Ext.define('UserManagement.view.AllUsers', {
    extend:'Ext.grid.Panel',
    alias: 'widget.allUsers',
    itemId:'allUsersGridPanel',
    authentication_key:'',
    store: 'UsersStore',

    initComponent:function(){
        var me = this;
        me.columns = [
            { text: 'Name',xtype:'templatecolumn',tpl:usernameTpl},
            { text: 'Email',dataIndex:'user[email]'},
            { text: 'Gender(Age)',xtype:'templatecolumn',tpl:genderAgeTpl},
            { text: 'Verification Proof',dataIndex:'indianNational[verification_id_proof]'},
            { text: 'Verification Id Number',dataIndex:'indianNational[verification_id_number]'},
            { text: 'Mobile Number',dataIndex:'indianNational[mobile_number]'},
            {
                header: 'Photo',
                dataIndex: 'photo',
                renderer: function(value){
                    return '<img width="40px" height="40px" src="' + value + '" />';
                }
            },
            { text: 'State',dataIndex:'indianNational[state]'},
            { text: 'City',dataIndex:'indianNational[city]'},
        ],
        this.callParent(arguments);
    },

});




























