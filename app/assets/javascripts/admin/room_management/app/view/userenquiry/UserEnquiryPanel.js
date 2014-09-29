Ext.define('RoomManagement.view.userenquiry.UserEnquiryPanel',{
    extend:'Ext.panel.Panel',
    title:'Enquiry Booking',
    alias:'widget.enquiry_panel',
    layout:{
        type:'hbox'
    },
    width:1000,
    height:400,
    items:[
        {
            xtype:'enquiry_contents'
//            flex:5
        }
    ]
})
