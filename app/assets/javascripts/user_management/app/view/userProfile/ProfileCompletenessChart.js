/**
 * Created with JetBrains RubyMine.
 * User: asriniva
 * Date: 6/16/14
 * Time: 1:27 PM
 * To change this template use File | Settings | File Templates.
 */



Ext.define('UserManagement.view.userProfile.ProfileCompletenessChart',{
    extend:'Ext.chart.Chart',
    alias:'widget.profileCompletenessChart',
    purpose:'',
    itemId:'profileCompletenessChart',
    width: 380,
    height: 160,
    animate: true,
    store: 'UserManagement.store.UserProfile.ProfileCompletenessChartStore',
    initComponent:function(){
        var me = this;

        me.axes = [
            {
                type: 'Numeric',
                position: 'bottom',
                fields: ['percentage_complete'],
                label: {
                    renderer: Ext.util.Format.numberRenderer('0,0')
                },
                minimum: 0,
                maximum: 100,
                title: 'Percentage Complete'
            }, {
                type: 'Category',
                position: 'left',
                fields: ['profile_name'],
            }
        ];

        me.series = [
            {
                type: 'bar',
                axis: 'bottom',
                xField: 'profile_name',
                yField: 'percentage_complete',
                highlight: true,
                label: {
                    display: 'insideEnd',
                    field: 'percentage_complete',
                    renderer: Ext.util.Format.numberRenderer('0'),
                    orientation: 'horizontal',
                    color: '#333',
                    'text-anchor': 'middle'
                },
                listeners:{
                    itemdblclick:{
                        element: 'el',
                        fn:function(chartObject){
                            me.fireEvent('profileChartDoubleClick',chartObject,this);
                        }
                    }
                }
            }
        ];

        me.callParent(arguments);

    }
})