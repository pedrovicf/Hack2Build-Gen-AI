/*global QUnit*/

sap.ui.define([
	"hack2build/controller/H2B.controller"
], function (Controller) {
	"use strict";

	QUnit.module("H2B Controller");

	QUnit.test("I should test the H2B controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
