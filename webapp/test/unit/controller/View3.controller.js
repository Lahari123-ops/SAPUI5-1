/*global QUnit*/

sap.ui.define([
	"project1/controller/View3.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View3 Controller");

	QUnit.test("I should test the View3 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
