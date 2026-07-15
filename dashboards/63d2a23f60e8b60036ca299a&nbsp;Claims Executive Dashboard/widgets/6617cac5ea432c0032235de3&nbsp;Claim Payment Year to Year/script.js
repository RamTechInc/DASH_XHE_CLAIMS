/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions

widget.on('beforeviewloaded', function ( ev, args ) {
  args.options.navigator.enabled = true;
});
*/
widget.on('processresult',function (se, ev) {
var month = ev.result.xAxis.categories
for(i=0;i<12;i++){
var test=month[i].substr(0, 8);

if(month[i]%100==1){month[i]="January";i++;
}


if(month[i]%100==2){month[i]="February";i++;
}


if(month[i]%100==3){month[i]="March";i++;
}


if(month[i]%100==4){month[i]="April";i++;
}


if(month[i]%100==5){month[i]="May";i++;
}


if(month[i]%100==6){month[i]="June";i++;
}

if(month[i]%100==7){month[i]="July";i++;
}

if(month[i]%100==8){month[i]="August";i++;
}

if(month[i]%100==9){month[i]="September";i++;
}


if(month[i]%100==10){month[i]="October";i++;
}


if(month[i]%100==11){month[i]="November";i++;
}


if(month[i]%100==12){month[i]="December";i++;
}

}})

;
