/*
Welcome to your Dashboard's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions
*/

var widgetPadding = '0px 3px 0px 0px';
var widgetBorderStyle = 'solid';
var widgetBorderColor = '#f2f2f2';

dashboard.on('refreshend', function(sender, ev){
$('widget.columnar').css('padding', widgetPadding); // Add Padding between widgets
$('widget.columnar').css('border-right-style', widgetBorderStyle); // Add Right Border - Between widgets
$('widget.columnar').css('border-left-style', widgetBorderStyle);
$('widget.columnar').css('border-top-style', widgetBorderStyle);
$('widget.columnar').css('border-bottom-style', widgetBorderStyle);
$('widget.columnar').css('border-color', widgetBorderColor); // Add Border Color
});
