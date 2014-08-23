Ext.define('UserManagement.model.VerificationIdType', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'verification_id_type_name', type: 'string' },
        { name: 'verification_id_type_description', type: 'string' }
    ],
    proxy: {
        type: 'ajax',
        url:'/get_verification_types',
        reader: {
            type: 'json',
            root:'/'
        }
    }
});
