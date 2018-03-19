(function ($) {

	"use strict";
	
	var nowTemp = new Date();
	var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

	var checkin = $('#meetingDate').datepicker({
	  format:'dd/mm/yyyy',
		onRender: function(date) {
		return date.valueOf() < now.valueOf() ? 'disabled' : '';
	  }
	}).on('changeDate', function(ev) {
		 $('#meetingDate').trigger('click');
	  checkin.hide();
	
}).data('datepicker');
	var checkout = $('#check_out').datepicker({
	  onRender: function(date) {
		return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
	  }
	}).on('changeDate', function(ev) {
	  checkout.hide();
	}).data('datepicker');

})(window.jQuery); // JavaScript Document