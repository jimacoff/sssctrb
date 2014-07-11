Ext.define('UserManagement.model.IndianNationalUser', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'address', type: 'string' },
        { name: 'state', type: 'string' },
        { name: 'city', type: 'string' },
        { name: 'pincode', type: 'string' },
        { name: 'verification_id_proof', type: 'string' },
        { name: 'verification_id_number', type: 'string' },
        { name: 'mobile_number', type: 'string' },
    ],
//    validations: [
//        { type: 'presence', field: 'first_name' },
//        { type: 'presence', field: 'last_name' },
//        { type: 'presence', field: 'email' }
//    ],
//    associations:[{
//        type:'hasOne',
//        instanceName:'indianNational',
//        model:'UserManagement.model.IndianNationalUser',
//        getterName:'getIndianNationalInfo',
//        setterName:'setIndianNationalInfo',
//        associationKey:'indianNationalData',
//        associatedName:'indianNationalData'
//    }]

});
