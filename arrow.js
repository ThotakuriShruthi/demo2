function clock()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var day=date.getDay();
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var am_pm="AM";
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
          hh-=12;
        }
    }
    if(hh==0)
    {
     hh=12;
    }
    var arrvid=["./e1.mp4","M1.mp4"]
    var fulldate=dd+"/"+mo+"/"+yy
    document.getElementById("Date").innerHTML=fulldate;    
    var arrimage=["n0.jpg","n1.jpg","n2.jpg","n3.jpg","n4.jpg","n5.jpg","n6.jpg","n8.jpg","n9.jpg"]
     document.getElementById("Day").innerHTML=day;
     document.getElementById("Sec").innerHTML=ss;
     var updateTheTime=setTimeout(clock,1000)
}

     function greet()
     {
        var date=new Date();
        var hh=date.getHours();
         if(hh>=6 && hh<=12)
        {
        document.getElementById("GreetMessage").innerHTML="good morning"
        document.getElementById("bgVid").src="morning1.mp4"
        }
        else if(hh>12 && hh<=16)
       {
        document.getElementById("GreetMessage").innerHTML="good afternoon"
        document.getElementById("bgVid").src="afternoon.mp4"
        document.getElementById("bgVid").style.width="100%"
        document.getElementById("bgVid").style.bottom="-100px"
       }
       else if(hh>16 && hh<=20)
       {
        document.getElementById("GreetMessage").innerHTML="good evening"
        document.getElementById("bgVid").src="evening.mp4"
        document.getElementById("bgVid").style.width="100%"
        document.getElementById("bgVid").style.bottom="-100px"
      }
       else 
      {
        document.getElementById("GreetMesage").innerHTML="good night"
        document.getElementById("GreetMessage").style.color="white"
        document.getElementById("bgVid").src="e1.mp4"
        document.getElementById("bgVid").style.width="100%"
        document.getElementById("bgVid").style.bottom="-100px"
      }
}
    greet()
    function closeWind()
    {
        document.getElementById("greet").style.display="none"
    }

    var a=setTimeout(closeWind,5000);