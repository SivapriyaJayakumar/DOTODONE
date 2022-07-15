var display=document.getElementById("storetask");
var button=document.getElementById("add");
var conpar=document.getElementById("listofdone");
var congratsdiv=document.createElement("div");
congratsdiv.classList.add("congrats");
conpar.appendChild(congratsdiv);
var dateobj=new Date();
var p;
var h;
var counttag=0;
var todolistarr=new Array();
var i=1;
var tasksdeleted=[];
var closeimg;

button.addEventListener("click",()=>{
    var dateofnote=dateobj.getDate();
    var monofnote=dateobj.getMonth();
    var yearofnote=dateobj.getFullYear();
    var hr=dateobj.getHours();
    var min=dateobj.getMinutes();
    if(hr<10){
        hr="0"+hr;
    }
    if(min<10){
        min="0"+min;
    }
    var outermaindiv=document.createElement('div');
    outermaindiv.classList.add('outermain');
    var task=document.getElementById("entertask").value;
    todolistarr[i]=task;
    document.getElementById("entertask").value="";
    var outerdiv=document.createElement("div");
    p =document.createElement("span");
    outerdiv.setAttribute('id','outerdiv');
    p.setAttribute('id','paradiv');
    p.classList.add("paradiv");
    outerdiv.classList.add("outerdiv");
    var editbtn=document.createElement('button');
    editbtn.textContent="CREATE TAG";
    editbtn.classList.add('edit');
    closeimg=document.createElement("img");
    closeimg.setAttribute("src","./assets/remove.png");
    closeimg.classList.add("remove");
    p.textContent=task;
    console.log(task);
    outerdiv.contentEditable=false;
    p.contentEditable=true;
    outerdiv.appendChild(p);
    var br=document.createElement('br');
    var datestr=document.createElement('span');
    datestr.classList.add('createddate')
    datestr.textContent="       Created on " +dateofnote+": "+monofnote+": "+yearofnote + " at "+hr+": "+min;
    var outerdivtag=document.createElement('div');
    outerdivtag.classList.add('outertagdiv');
    outerdiv.append(datestr);
    outerdiv.appendChild(editbtn);
    outerdiv.appendChild(closeimg);
    outermaindiv.appendChild(outerdiv);
    outermaindiv.appendChild(outerdivtag);

    display.appendChild(outermaindiv);

        function tasks(str){
            tasksdeleted.push(str);
        }
        editbtn.addEventListener('click',()=>{
            counttag=counttag+1;
            console.log('create');
            var modal=document.createElement('div');
            modal.classList.add('modal');
            var tagname=document.createElement('input');
            tagname.classList.add('tagname');
            tagname.setAttribute('id','tag'+counttag);
            var labeltag=document.createElement('label');
            labeltag.textContent="Enter a Tag Name  :  ";
            labeltag.classList.add('labeltag');
            var br=document.createElement('br');
            var closetag=document.createElement('button');
            closetag.textContent="CLOSE";
            closetag.classList.add('edit');
            modal.appendChild(labeltag);
            modal.appendChild(tagname);
            modal.appendChild(closetag);
            var par= document.getElementById('taskcomp');
            par.appendChild(modal);
            closetag.addEventListener('click',()=>{
                    var strtag=document.getElementById('tag'+counttag).value;
                    console.log(strtag+" "+counttag);
                    var tagdiv=document.createElement('span');
                    tagdiv.textContent=strtag;
                    tagdiv.classList.add('taginfo');
                    outerdivtag.append(tagdiv);
                    console.log(strtag);
                    modal.classList.remove('modal');
                    modal.classList.add('closemodal');
                    console.log(strtag);
                
            })
        })
            


    closeimg.addEventListener("click",()=>{

        tasks(outerdiv.firstChild.textContent);
        var dateofnote=dateobj.getDate();
        var monofnote=dateobj.getMonth();
        var yearofnote=dateobj.getFullYear();
        var hr=dateobj.getHours();
        var min=dateobj.getMinutes();
        if(hr<10){
            hr="0"+hr;
        }
        if(min<10){
            min="0"+min;
        }
        var datestr=document.createElement('span');
        datestr.classList.add('createddate')
        datestr.textContent="Completed on " +dateofnote+": "+monofnote+": "+yearofnote+" at "+hr+": "+min;
        tasksdeleted.map(
            (value,index)=>{
                console.log(tasksdeleted);
                console.log("Index is "+index+"  value is "+value);
                console.log(tasksdeleted.length-1);
                    if(outerdiv.firstChild.textContent==value){
                        var ptask=document.createElement("p");
                        ptask.contentEditable=false;
                        ptask.classList.add("ptask");
                        ptask.textContent=value;
                        ptask.appendChild(datestr);
                        var imgdone=document.createElement("img");
                        imgdone.setAttribute("src","./assets/checked.png");
                        imgdone.classList.add("tick");
                        congratsdiv.appendChild(imgdone);
                        congratsdiv.appendChild(ptask);
                        var imgtick=document.createElement("br");
                        congratsdiv.appendChild(imgtick);
                    }
                

            }

        )

        outermaindiv.removeChild(outerdiv);
        outermaindiv.removeChild(outerdivtag);
           
        
        })

});
