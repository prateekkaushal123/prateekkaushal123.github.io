var b,a3=-1,a4=-1,d=0;
b=0;
var p=new Array("TYRION LANNISTER","ROBERT BARATHEON","NED STARK","DAENERYS TARGARYEN","JON SNOW","ARYA STARK","JEOFFFRY BARATHEON","KHAL DRAGGO","STANNIS BARATHEON","TYWIN LANNISTER","THE HOUND","RHEAGAR TARGARYEN","CATALYN STARK","CERSEI LANNISTER","JAIME LANNISTER","Petyr Baelish","Sansa Stark","Bran Stark","Samwell Tarly","Margaery Tyrell","Varys","Ramsay Bolton","Jaqen H'ghar","Roose Bolton","High Sparrow","Loras Tyrell","Hodor","Myrcella Baratheon","Jorah Mormont","MAD KING");
var a1=new Array();var a10=new Array(7);
var a2= new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var wd,nm;
var q=new Array(-1,-1);
var za=new Array();
var t=0;

function chang()
{
if(nm==0)
    wd="0";
if(nm==1)
    wd="1";
if(nm==02)
    wd="2";
if(nm==03)
    wd="3";
if(nm==04)
    wd="4";
if(nm==05)
    wd="5";
if(nm==06)
    wd="6";
if(nm==07)
    wd="7";
if(nm==08)
    wd="8";
if(nm==09)
    wd="9";


}
var nm1,wd;
function chang1()
{
if(nm1==0)
    wd1="50";
if(nm1==1)
    wd1="49";
if(nm1==02)
    wd1="48";
if(nm1==03)
    wd1="47";
if(nm1==04)
    wd1="46";
if(nm1==05)
    wd1="45";
if(nm1==06)
    wd1="44";
if(nm1==07)
    wd1="43";
if(nm1==08)
    wd1="42";
if(nm1==09)
    wd1="41";
if(nm1==10)
    wd1="40";
if(nm1==11)
    wd1="39";
if(nm1==12)
    wd1="38";
if(nm1==13)
    wd1="37";
if(nm1==14)
    wd1="36";
if(nm1==15)
    wd1="36";
if(nm1==16)
    wd1="35";
if(nm1==17)
    wd1="35";
if(nm1==18)
    wd1="34";
if(nm1==19)
    wd1="33";
if(nm1==20)
    wd1="32";
if(nm1==21)
    wd1="31";
if(nm1==22)
    wd1="30";
if(nm1==23)
    wd1="29";
if(nm1==24)
    wd1="28";
if(nm1==25)
    wd1="27";
if(nm1==26)
    wd1="26";
if(nm1==27)
    wd1="25";
if(nm1==28)
    wd1="24";
if(nm1==29)
    wd1="23";
if(nm1==30)
    wd1="22";
if(nm1==31)
    wd1="21";
if(nm1==32)
    wd1="20";
if(nm1==33)
    wd1="19";
if(nm1==34)
    wd1="18";
if(nm1==35)
    wd1="17";
if(nm1==36)
    wd1="15";
if(nm1==37)
    wd1="14";
if(nm1==38)
    wd1="12";
if(nm1==39)
    wd1="11";
if(nm1==40)
    wd1="10";
if(nm1==41)
    wd1="9";
if(nm1==42)
    wd1="8";
if(nm1==43)
    wd1="7";
if(nm1==44)
    wd1="6";
if(nm1==45)
    wd1="5";
if(nm1==46)
    wd1="4";
if(nm1==47)
    wd1="3";
if(nm1==48)
    wd1="2";
if(nm1==49)
    wd1="1";


}
function over()
{
    $(".foot").show();
}

function score()
{
   $("#sc").empty();
        nm=d;
        chang();
        $("#sc").append("SCORE: "+wd);
        if(d==7)
            over();
  
}
function turn()
{
   $("#st").empty();
   
        if(t<50)
        {
        nm1=t;
        chang1();
        
        $("#st").append("TURNS: "+wd1);
    }
    else
    {
over();



    }
        
    
  
}



$(document).ready(
function()
{
   assig();
 ;


})



function assig()
{
    if(a2[0]==0)
    {
    var x=Math.floor(Math.random() * 30);
   $("#p1").append(p[x]);
    a1[0]=x;a10[0]=x;
}
 if(a2[01]==0)
    {
 var x=Math.floor(Math.random() * 30);
   $("#p2").append(p[x]);
   a1[1]=x;a10[1]=x;
}
if(a2[02]==0)
    {
 var x=Math.floor(Math.random() * 30);
   $("#p3").append(p[x]);
   a1[2]=x;a10[2]=x;
}
if(a2[03]==0)
    {
 var x=Math.floor(Math.random() * 30);
   $("#p4").append(p[x]);
   a1[3]=x;a10[3]=x;
}

    if(a2[04]==0)
    {
 var x=Math.floor(Math.random() * 30);
   $("#p5").append(p[x]);
   a1[4]=x;a10[4]=x;
}
if(a2[05]==0)
    {
 var x=Math.floor(Math.random() * 30);
   $("#p6").append(p[x]);
   a1[5]=x;a10[5]=x;
}
if(a2[06]==0)
    {
 var x=Math.floor(Math.random() * 30);
   $("#p7").append(p[x]);
   a1[6]=x;a10[6]=x;
}

a10.sort(function(a, b){return a - b});


if(a2[07]==0)
    {
 var x=a10[0];
   $("#p8").append(p[x]);
   a1[7]=x;
}
if(a2[08]==0)
    {
 var x=a10[1];;
   $("#p9").append(p[x]);
   a1[8]=x;
}
if(a2[09]==0)
    {
 var x=a10[2];;
   $("#p10").append(p[x]);
   a1[9]=x;
}
if(a2[10]==0)
    {
 var x=a10[3];;
   $("#p11").append(p[x]);
   a1[10]=x;
}
if(a2[11]==0)
    {
 var x=a10[4];;
   $("#p12").append(p[x]);
   a1[11]=x;
}
if(a2[12]==0)
    {
 var x=a10[5];;
   $("#p13").append(p[x]);
   a1[12]=x;
}
if(a2[13]==0)
    {
 var x=a10[6];
   $("#p14").append(p[x]);
   a1[13]=x;
}

}


$("#st").click(
    function(){
 $("#p1").empty();
  $("#p2").empty();
   $("#p3").empty();
    $("#p4").empty();
     $("#p5").empty();
      $("#p6").empty();
       $("#p7").empty();
        $("#p8").empty();
         $("#p9").empty();
          $("#p10").empty();
           $("#p11").empty();
            $("#p12").empty();
             $("#p13").empty();
              $("#p14").empty();





    })




function rem()
{
    if(q[0]==0 || q[1]==0)
  $("#p1").empty();

 if(q[0]==01 || q[1]==01)
  $("#p2").empty();

 if(q[0]==02 || q[1]==02)
$("#p3").empty();

if(q[0]==03 || q[1]==03)
$("#p4").empty();

if(q[0]==04 || q[1]==04)
$("#p5").empty();

if(q[0]==05 || q[1]==05)
$("#p6").empty();

if(q[0]==06 || q[1]==06)
$("#p7").empty();

if(q[0]==07 || q[1]==07)
$("#p8").empty();

if(q[0]==08 || q[1]==08)
$("#p9").empty();

if(q[0]==09 || q[1]==09)
$("#p10").empty();

if(q[0]==10 || q[1]==10)
$("#p11").empty();

if(q[0]==11 || q[1]==11)
$("#p12").empty();

if(q[0]==12 || q[1]==12)
$("#p13").empty();

if(q[0]==13 || q[1]==13)
$("#p14").empty();

if(q[0]==14 || q[1]==14)
$("#p15").empty();
  
}





















function tog()
{
    if(a2[0]==0)
        $("#i1").slideDown("fast");
    if(a2[01]==0)
        $("#i2").slideDown("fast");
if(a2[02]==0)
        $("#i3").slideDown("fast");
if(a2[03]==0)
        $("#i4").slideDown("fast");
if(a2[04]==0)
        $("#i5").slideDown("fast");
if(a2[05]==0)
        $("#i6").slideDown("fast");
if(a2[06]==0)
        $("#i7").slideDown("fast");
if(a2[07]==0)
        $("#i8").slideDown("fast");
if(a2[08]==0)
        $("#i9").slideDown("fast");
if(a2[09]==0)
        $("#i10").slideDown("fast");
if(a2[10]==0)
    $("#i11").slideDown("fast");
if(a2[11]==0)
    $("#i12").slideDown("fast");
if(a2[12]==0)
    $("#i13").slideDown("fast");
if(a2[13]==0)
    $("#i14").slideDown("fast");
if(a2[14]==0)
     $("#i15").slideDown("fast");



}




$('#i1').click(
	function(){
if(b==1)
    {
        
        if(a3==a1[0])
        {q[1]=0;
            a2[0]=-1;
            a2[a4]=-1;
            $("#i1").slideToggle(500,function(){rem();});
            d+=1;
            
        }

        else
        {
            q[0]=-1;q[1]=-1;
         $("#i1").slideToggle(500,function(){tog();});
            
             
        }
        b++;

       
    }










if(b==0)
    {
    	$("#i1").slideToggle();
    	b++;
        a3=a1[0];a4=0;
        q[0]=0;

    }
    if(b==2)
        b=0;

score();t++;
turn();

})



$('#i2').click(
	function(){

        if(b==1)
    {
        
        if(a3==a1[01])
        {q[1]=1;
            a2[01]=-1;
            a2[a4]=-1;
            $("#i2").slideToggle(500,function(){rem();});
            
            d+=1;
        }

        else
        {$("#i2").slideToggle(500,function(){tog();
});
          q[0]=-1;q[1]=-1; 
        }
        b++;


    }



if(b<2)
{
    $("#i2").slideToggle();
    b++;a3=a1[01];a4=01;q[0]=01;
}
if(b==2)
        b=0;

score();t++;
turn();

})


$('#i3').click(
	function(){

        if(b==1)
    {
        
        if(a3==a1[02])
        {q[1]=2;
            a2[02]=-1;
            a2[a4]=-1;
            $("#i3").slideToggle(500,function(){rem();
            });
            d+=1;
        }

        else
        {$("#i3").slideToggle(500,function(){tog();});
q[1]=-1;q[1]=-1;
        }
        b++;


    }
if(b<2)
{
    $("#i3").slideToggle();
    b++;a3=a1[02];a4=02;q[0]=2;
}if(b==2)
        b=0;
score();t++;
turn();

})


$('#i4').click(
	function(){

        if(b==1)
    {
       
        if(a3==a1[03])
        {q[1]=3;
            a2[03]=-1;
            a2[a4]=-1;
             $("#i4").slideToggle(500,function(){rem();
            });
            d+=1;
        }

        else
        { $("#i4").slideToggle(500,function(){tog();}); q[0]=-1;q[1]=-1;

        }
        b++;


    }
if(b<2)
{
    $("#i4").slideToggle();
    b++;a3=a1[03];a4=03;q[0]=03;
}if(b==2)
        b=0;
score();t++;
turn();
})


$('#i5').click(
	function(){
        if(b==1)
    {
        
        if(a3==a1[04])
        {q[1]=4;
            a2[04]=-1;
            a2[a4]=-1;
            $("#i5").slideToggle(500,function(){rem();
            });
            d+=1;
        }

        else
        {$("#i5").slideToggle(500,function(){tog();}); q[0]=-1;q[1]=-1;

        }
        b++;


    }
if(b<2)
{
    $("#i5").slideToggle();
    b++;a3=a1[04];a4=04;q[0]=04;
}if(b==2)
        b=0;
score();t++;
turn();
})


$('#i6').click(
	function(){
        if(b==1)
    {
        
        if(a3==a1[05])
        {q[1]=5;
            a2[05]=-1;
            a2[a4]=-1;
            $("#i6").slideToggle(500,function(){rem();
            });
            d+=1;
        }

        else
        {$("#i6").slideToggle(500,function(){tog();}); q[0]=-1;q[1]=-1;

        }
        b++;


    }
		if(b<2)
{

    $("#i6").slideToggle();
    b++;a3=a1[05];a4=05;q[0]=05;
}if(b==2)
        b=0;
score();t++;
turn();
})

$('#i7').click(
    function(){
        if(b==1)
    {
       
        if(a3==a1[06])
        {q[1]=6;
            a2[06]=-1;
            a2[a4]=-1;
             $("#i7").slideToggle(500,function(){rem();
            });
            d+=1;
        }

        else
        { $("#i7").slideToggle(500,function(){tog();}); q[0]=-1;q[1]=-1;

        }
        b++;


    }
        if(b<2)
{

    $("#i7").slideToggle();
    b++;a3=a1[06];a4=06;q[0]=06;
}if(b==2)
        b=0;
score();t++;
turn();
})

$('#i8').click(
    function(){
        if(b==1)
    {
        
        if(a3==a1[07])
        {q[1]=7;
            a2[07]=-1;
            a2[a4]=-1;
            $("#i8").slideToggle(500,function(){rem();
            });
            d+=1;
        }

        else
        {$("#i8").slideToggle(500,function(){tog();}); q[0]=-1;q[1]=-1;

        }
        b++;


    }
        if(b<2)
{

    $("#i8").slideToggle();
    b++;a3=a1[07];a4=07;q[0]=07;
}if(b==2)
        b=0;
score();t++;
turn();
})

$('#i9').click(
    function(){
        if(b==1)
    {
        
        if(a3==a1[08])
        {q[1]=8;
            a2[08]=-1;
            a2[a4]=-1;
            $("#i9").slideToggle(500,function(){rem();
            });
            d+=1;
        }

        else
        {$("#i9").slideToggle(500,function(){tog();}); q[0]=-1;q[1]=-1;

        }
        b++;


    }
        if(b<2)
{

    $("#i9").slideToggle();
    b++;a3=a1[08];a4=08;q[0]=08;
}if(b==2)
        b=0;
score();t++;
turn();
})

$('#i10').click(
    function(){
        if(b==1)
    {
        
        if(a3==a1[09])
        {q[1]=9;
            a2[09]=-1;
            a2[a4]=-1;
            $("#i10").slideToggle(500,function(){ rem();
            });
           d+=1;
        }

        else
        {$("#i10").slideToggle(500,function(){tog();}); q[0]=-1;q[1]=-1;

        }
        b++;


    }
        if(b<2)
{

    $("#i10").slideToggle();
    b++;a3=a1[09];a4=09;q[0]=09;
}if(b==2)
        b=0;
score();t++;
turn();
})



$('#i11').click(
    function(){
        if(b==1)
    {
        
        if(a3==a1[10])
        {q[1]=10;
            a2[10]=-1;
            a2[a4]=-1;
            $("#i11").slideToggle(500,function(){ rem();
            });
           d+=1;
        }

        else
        {$("#i11").slideToggle(500,function(){tog();}); q[0]=-1;q[1]=-1;

        }
        b++;


    }
        if(b<2)
{

    $("#i11").slideToggle();
    b++;a3=a1[10];a4=10;q[0]=10;
}
if(b==2)
        b=0;
score();t++;
turn();
})

$('#i12').click(
    function(){
        if(b==1)
    {
        
        if(a3==a1[11])
        {q[1]=11;
            a2[11]=-1;
            a2[a4]=-1;
            $("#i12").slideToggle(500,function(){ rem();});
           d+=1;
        }

        else
        {$("#i12").slideToggle(500,function(){tog();}); q[0]=-1;q[1]=-1;

        }
        b++;


    }
        if(b<2)
{

    $("#i12").slideToggle();
    b++;a3=a1[11];a4=11;q[0]=11;
}if(b==2)
        b=0;
score();t++;
turn();
})

$('#i13').click(
    function(){
        if(b==1)
    {
        
        if(a3==a1[12])
        {q[1]=12;
            a2[12]=-1;
            a2[a4]=-1;
            $("#i13").slideToggle(500,function(){ rem();
            });
           d+=1;
        }

        else
        {$("#i13").slideToggle(500,function(){tog();}); q[0]=-1;q[1]=-1;

        }
        b++;


    }
        if(b<2)
{

    $("#i13").slideToggle();
    b++;a3=a1[12];a4=12;q[0]=12;
}if(b==2)
        b=0;
score();t++;
turn();
})

$('#i14').click(
    function(){
        if(b==1)
    {q[1]=13;
        
        if(a3==a1[13])
        {
            a2[13]=-1;
            a2[a4]=-1;
            $("#i14").slideToggle(500,function(){ rem();
            });
           d+=1;
        }

        else
        {$("#i14").slideToggle(500,function(){tog();}); q[0]=-1;q[1]=-1;

        }
        b++;


    }
        if(b<2)
{

    $("#i14").slideToggle();
    b++;a3=a1[13];a4=13;q[0]=13;
}if(b==2)
        b=0;
score();
})


$('#i15').click(
    function(){
        if(b==1)
    {
        
        if(a3==a1[14])
        {q[1]=14;
            a2[14]=-1;
            a2[a4]=-1;
            $("#i15").slideToggle(500,function(){ rem();
            });
           d+=1;
        }

        else
        {$("#i15").slideToggle(500,function(){tog();}); q[0]=-1;q[1]=-1;

        }
        b++;


    }
        if(b<2)
{

    $("#i15").slideToggle();
    b++;a3=a1[14];a4=14;q[0]=14;
}if(b==2)
        b=0;
score();
})
