"use strict";

define(
		[	'src/SearchByName',
			'../src/styleUtils',
			'../src/errorHandler'
		],
		function (
			CSLEDIT_SearchByName,
			styleUtils,
			errorHandler
		) {
	$(document).ready(function () {
		var searchByName = new CSLEDIT_SearchByName($('#mainContainer'), {
			editStyle_func : function (styleURL) {
				styleUtils.editStyle(styleURL, "../visualEditor");
			}
		});
	});
});
