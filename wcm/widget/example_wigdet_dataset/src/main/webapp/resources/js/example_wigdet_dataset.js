var HelloWorld = SuperWidget.extend({
    message: null,

    init: function() {
        this.loadTable();
    },

    bindings: {
        local: {
            'show-message': ['click_showMessage']
        }
    },

    
    loadTable: function() {
        var that = this;
        that.myTable = FLUIGC.datatable('#datatable' + "_" + that.instanceId, {
            dataRequest: DatasetFactory.getDataset('colleague', null,null,null).values,
            renderContent: ['colleagueName', 'login', 'mail', 'defaultLanguage'],
            header: [
                {'title': 'colleagueName'},
                {'title': 'login'},
                {'title': 'mail'},
                {'title': 'defaultLanguage'}
            ],
            search: {
                enabled: true,
                onlyEnterkey: true,
                onSearch: function(res) {
                    if (!res) {
                        that.myTable.reload(dataInit);
                    }
                    var dataAll = that.myTable.getData();
                    var search = dataAll.filter(function(el) {
                        return el.colleagueName.toUpperCase().indexOf(res.toUpperCase()) >= 0
                            || el.login.toUpperCase().indexOf(res.toUpperCase()) >= 0
                            || el.mail.toUpperCase().indexOf(res.toUpperCase()) >= 0;
                    });
                    if (search && search.length) {
                        that.myTable.reload(search);
                    } else {
                        FLUIGC.toast({
                            title: 'Searching: ',
                            message: 'No results',
                            type: 'success'
                        });
                    }
                }
            },
            navButtons: {
                enabled: false,
            },
        }, function(err, data) {
            if(data) {
                dataInit = data;
            }
            else if (err) {
                FLUIGC.toast({
                    message: err,
                    type: 'danger'
                });
            }
        });
    }
});