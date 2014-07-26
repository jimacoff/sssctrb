/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/14/14
 * Time: 2:34 PM
 * To change this template use File | Settings | File Templates.
 */

var visa_type_template = new Ext.XTemplate(
    '<tpl for=".">',
    '{[this.getVisatype(values.visa_type)]}',
    '</tpl>',
    {
        getVisatype:function(visa_type){
            visa_type_store = Ext.data.StoreManager.lookup('visa_type_store');
            return visa_type_store.findRecord('id',visa_type).get('visa_type');
        }
    }
);

Ext.create('Ext.data.Store',{
    storeId:'visaStoreId',
    model:'UserManagement.model.UserProfile.VisaDetails',
    data:[
        {
            "visa_number":"dffdfdf",
            "visa_city_of_issue":"dffdfd",
            "visa_country_of_issue":"sdsdsdsd",
            "visa_type":1,
            "visa_date_of_issue":"2014-07-20",
            "visa_valid_till":"2014-07-20"
        }
    ]
});

Ext.create('Ext.data.Store',{
    storeId:'visa_type_store',
    fields:["id","visa_type"],
    data:[
        {"id":1,"visa_type":"Tourist"},
        {"id":2,"visa_type":"PIO"},
        {"id":3,"visa_type":"OCI"},
        {"id":4,"visa_type":"Others"}
    ]
});

Ext.define('UserManagement.view.users.NonIndianSpecificDetails.VisaDetailsGrid',{
    extend:'Ext.grid.Panel',
    alias : 'widget.nonIndianVisaDetailsGrid',
    store: Ext.data.StoreManager.lookup('visaStoreId'),
    selType: 'rowmodel',
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2
        })
    ],
    margin:'10 0 0 0',
    height: 200,
    width: 800,
    initComponent:function(){
        var me = this;
        me.dockedItems = [
            {
                xtype:'toolbar',
                dock:'top',
                items:[
                    '->',
                    {
                        xtype:'button',
                        text:'+',
                        itemId:'addVisa',
                        iconCls:'add_cls',
                        tooltip:'Add New Visa'
                    },
                    {
                        xtype:'button',
                        text:'-',
                        itemId:'deleteVisa',
                        iconCls:'delete_cls',
                        tooltip:'Delete Visa'
                    }
                ]
            }
        ];

        me.columns = [
            {
                header: 'VISA Number',
                dataIndex: 'visa_number',
                flex: 1,
                editor: 'textfield'
            }, {
                header: 'City Of Issue',
                dataIndex: 'visa_city_of_issue',
                flex: 1,
                editor: 'textfield'
            }, {
                header: 'Country Of issue',
                dataIndex: 'visa_country_of_issue',
                flex: 1,
                editor: 'textfield'
            }, {
                xtype: 'datecolumn',
                header: 'Date Of issue',
                dataIndex: 'visa_date_of_issue',
                flex: 1,
                format:'M d, Y',
                editor: {
                    xtype:'datefield',
                    format:'M d, Y'
                }
            }, {
                xtype: 'datecolumn',
                format:'M d, Y',
                header: 'Valid Till',
                dataIndex: 'visa_valid_till',
                flex: 1,
                editor: {
                    xtype:'datefield',
                    format:'M d, Y'
                }
            }, {
                xtype:'templatecolumn',
                itemId:'visa_type_id',
                tpl:visa_type_template,
                header: 'VISA Type',

                flex: 1,
                editor: {
                    xtype:'combo',
                    store:Ext.data.StoreManager.lookup('visa_type_store'),
                    displayField:'visa_type',
                    valueField:'id',
                    listeners:{
                        afterrender:function(thisCombo,eOpts){
                            visaGrid = thisCombo.up('.grid');
                            selectedRecords = visaGrid.getSelectionModel().getSelection();
                            if(selectedRecords[0]){
                                thisCombo.select(selectedRecords[0].get('visa_type'));
                            }else{
                                thisCombo.select(1);
                            }
                        }
                    }
                }
            }

        ]

        me.callParent(arguments);
    }
});