Ext.define('UserManagement.model.UserGroup', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'group_name', type: 'string' },
        { name: 'group_description', type: 'string' }
    ],
    proxy: {
        type: 'ajax',
        url:'/get_user_groups',
        reader: {
            type: 'json',
            root:'/'
        }
    }
});
