Ext.define('UserManagement.model.AssociatedDataBehaviour', {
    extend : 'Ext.data.Model',

    requires : 'Ext.data.proxy.Memory',    //'Ext.data.proxy.Memory',

    proxy : {
        type : 'memory',
        reader: {type: 'json'}
    },

    constructor : function (data, id, raw, convertedData, parseAssociation) {
        console.log(this.proxy);
        this.callParent([data, id, raw, convertedData]);

        if (parseAssociation) {
            this.proxy.reader.readAssociated(this, data);
        }
    }
});