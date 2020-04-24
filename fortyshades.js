document.getElementById("body").style.display="none";  
  document.getElementById("besttime").style.display="none";  
  var c=5;
  
  function converter(x)
       {
       console.log(x);
        min=parseInt(Math.floor(x/100/60));
	    sec=parseInt(Math.floor(x/100));
	    msec=parseInt(x%100);
	   if (min<10)
	      min="0"+min;
	   if (sec>=60)
	      sec=sec%60;
	   if (sec<10)
	      sec="0"+sec;
	   return min+ ":" + sec + ":" + msec; 
      }
  var count=setInterval(function(){
      c--;
	 if(c > 0){
	    id=document.getElementById("timer");
		id.innerHTML=c;
		}
	 else
	    {
	    document.getElementById("body").style.display="block";
        id.style.display="none";
		clearInterval(count);
		if(localStorage.getItem("bestfive") != null )
		  document.getElementById("canbehidden").style.display="none";
        start();
		}
 }, 1000);	
  var y=21;
  var l=1;
function myFunction(x) {
    var t=x.cellIndex;
    var z=x.parentElement.rowIndex;
    var a=tbl.rows[z].cells[t].getAttribute("value");
    if (a==l && l<=20)
	{
      tbl.rows[z].cells[t].innerHTML=y;
      y++;
      l++;
	} 
	if (a==l-20)
	{
	 l++;
	 tbl.rows[z].cells[t].style.visibility="hidden";
	}
	if(l==41){
	 stop();
	 console.log(l);
    }
}
  var min,sec,msec;
  var status=0;
  var  time=0;
 
 function start(){
   status=1;
   timer();
  }
 
function timer(){
  if(status==1){
    stopclock= setInterval(function(){
	   time++;
	    min=Math.floor(time/100/60);
	    sec=Math.floor(time/100);
	    msec=time%100;
			   if (min<10)
	      min="0"+min;
	   if (sec>=60)
	      sec=sec%60;
	   if (sec<10)
	      sec="0"+sec;
	   document.getElementById("clock").innerHTML=min + ":" + sec + ":" + msec;
	   
	},10);
  }
}

function stop(){
   status=0;
   clearInterval(stopclock);
   console.log("hi");
   console.log(time);
   storage();
   }

function storage(){
if(localStorage.getItem("bestfive") != null )
 bestfive=JSON.parse(localStorage.getItem("bestfive"));
else
 bestfive=[ ];
bestfive.push(time);			 
bestfive.sort(function(a,b){return a-b});
bestfive.splice(5);
localStorage.setItem(("bestfive"),JSON.stringify(bestfive));
const bestlist=JSON.parse(localStorage.getItem("bestfive"))
for( var i=0;i<Object.keys(bestlist).length;i++)
{
document.getElementById("canbehidden").style.display="none";
var node=document.createElement("LI");
var textnode=document.createTextNode(JSON.stringify(converter(bestlist[i])));
node.appendChild(textnode);
document.getElementById("besttime").appendChild(node);

}
 document.getElementById("besttime").style.display="block";
}

function converter(x)
{
       console.log(x);
        min=parseInt(Math.floor(x/100/60));
	    sec=parseInt(Math.floor(x/100));
	    msec=parseInt(x%100);
	   if (min<10)
	      min="0"+min;
	   if (sec>=60)
	      sec=sec%60;
	   if (sec<10)
	      sec="0"+sec;
	   return min+ ":" + sec + ":" + msec; 
 }
