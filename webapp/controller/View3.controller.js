sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project1.controller.View3", {

        onInit: function () {
            var oData = {
                employees: [
                    { id: "1", name: "Lahari", role: "Developer" },
                    { id: "2", name: "Ravi", role: "Tester" }
                ]
            };

            var oModel = new sap.ui.model.json.JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onCreate: function () {
            var oModel = this.getView().getModel();
            var aData = oModel.getProperty("/employees");

            var newObj = {
                id: this.byId("idInput").getValue(),
                name: this.byId("nameInput").getValue(),
                role: this.byId("roleInput").getValue()
            };

            aData.push(newObj);
            oModel.setProperty("/employees", aData);
        },

        onRowSelect: function (oEvent) {
            var oItem = oEvent.getParameter("listItem");
            var oContext = oItem.getBindingContext();

            this.selectedPath = oContext.getPath();

            var data = oContext.getObject();

            this.byId("idInput").setValue(data.id);
            this.byId("nameInput").setValue(data.name);
            this.byId("roleInput").setValue(data.role);
        },

        onUpdate: function () {
            if (!this.selectedPath) {
                sap.m.MessageToast.show("Select a row first");
                return;
            }

            var oModel = this.getView().getModel();

            oModel.setProperty(this.selectedPath + "/id", this.byId("idInput").getValue());
            oModel.setProperty(this.selectedPath + "/name", this.byId("nameInput").getValue());
            oModel.setProperty(this.selectedPath + "/role", this.byId("roleInput").getValue());
        },

        onDelete: function () {
            if (!this.selectedPath) {
                sap.m.MessageToast.show("Select a row first");
                return;
            }

            var oModel = this.getView().getModel();
            var aData = oModel.getProperty("/employees");

            var index = this.selectedPath.split("/")[2];
            aData.splice(index, 1);

            oModel.setProperty("/employees", aData);

            this.selectedPath = null;
        }

    });
});