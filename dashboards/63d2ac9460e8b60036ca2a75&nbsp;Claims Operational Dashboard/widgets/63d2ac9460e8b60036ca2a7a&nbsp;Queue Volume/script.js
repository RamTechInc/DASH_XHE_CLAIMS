/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions

widget.on('beforeviewloaded', function(widget, args){

//var newmaxCharactersPerLabel = 25; //Set length of the line length
//args.options.xAxis.labels.maxCharactersPerLabel = newmaxCharactersPerLabel;
args.options.xAxis.labels.rotation = -30; //Label Rotation
args.options.xAxis.labels.formatter = function(){
return this.value.replace(' ','<br/>')
}
})

widget.on('beforeviewloaded', function ( ev, args ) {
  args.options.navigator.enabled = true;
});
*/
