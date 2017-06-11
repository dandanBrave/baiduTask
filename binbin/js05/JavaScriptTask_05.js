//点击了“左侧入”
function leftAdd(){
    var leftin = document.getElementById("leftIn");
    leftin.onclick = function(e){
        e.preventDefault();
        if(isNaN(document.getElementById("insert").value)||document.getElementById("insert").value==""){
            alert("请输入数字");
        }else if(parseInt(document.getElementById("insert").value)>100||parseInt(document.getElementById("insert").value)<10){
            alert("请输入10到100之间的数字");
        }else{
            var digitList = document.getElementById("digitList");
            if(digitList.getElementsByTagName("span").length>60){
                alert("最多只能有60个小框");
            }else{
            var span = document.createElement("span");
            var height = document.getElementById("insert").value+"px";
            span.className="number";
            digitList.insertBefore(span,digitList.childNodes[0]);
            span.setAttribute("style","height:"+height);
            }
        }
    }
}

//点击了“右侧入”
function rightAdd(){
    var rightin = document.getElementById("rightIn");
    rightin.onclick = function(e){
        e.preventDefault();
        if(isNaN(document.getElementById("insert").value)||document.getElementById("insert").value==""){
            alert("请输入数字");
        }else if(parseInt(document.getElementById("insert").value)>100||parseInt(document.getElementById("insert").value)<10){
            alert("请输入10到100之间的数字");
        }else{
            var digitList = document.getElementById("digitList");
            if(digitList.getElementsByTagName("span").length>60){
                alert("最多只能有60个小框");
            }else{
            var span = document.createElement("span");
            var height = document.getElementById("insert").value+"px";
            span.className="number";
            digitList.insertBefore(span,digitList.childNodes[length-1]);
            span.setAttribute("style","height:"+height);
            }
        }
    }
}
//点击了“左侧出”
function leftRemove(){
    var leftout = document.getElementById("leftOut");
    leftout.onclick = function(e){
        e.preventDefault();
        var digitListsp=document.getElementById("digitList").getElementsByTagName("span");
        if(confirm("确认删除"+digitListsp[0].innerHTML+"吗？")){
            digitListsp[0].remove();
        }else{
            alert("取消删除");
        }
    }     
}

//点击了“右侧出”
function rightRemove(){
    var rightOut = document.getElementById("rightOut");
    rightOut.onclick = function(e){
        e.preventDefault();
        var digitListsp=document.getElementById("digitList").getElementsByTagName("span");
        if(confirm("确认删除"+digitListsp[digitListsp.length-1].innerHTML+"吗？")){
            digitListsp[digitListsp.length-1].remove();
        }else{
            alert("取消删除");
        }
    }     
}
//点击了“冒泡排序”使span排序
function bubbleSorter(){
    var bubblesort = document.getElementById("bubbleSort");
    bubbleSort.onclick = function(e){
        e.preventDefault();
        var digitListsp = document.getElementById("digitList").getElementsByTagName("span");
        var i = digitListsp.length;
        var exchangeOrder;
        while(i>0){
            for(var j=0;j<i-1;j++){
                if(digitListsp[j].style.height > digitListsp[j+1].style.height){
                    exchangeOrder = digitListsp[j].style.height;
                    digitListsp[j].style.height = digitListsp[j+1].style.height;
                    digitListsp[j+1].style.height = exchangeOrder;
                }
            }
            i--;
        }
    }
}
//点击span删除其本身
function sapnOut(){
    var digitlist = document.getElementById("digitList");
    digitlist.addEventListener("click",function(e){
        //兼容火狐浏览器
        var event = window.event||e;
        if(event.target.nodeName.toLowerCase()=="span"){
            digitlist.removeChild(event.target);
        }
    })
}
window.onload = function(){
    leftAdd();
    rightAdd();
    leftRemove();
    rightRemove();
    bubbleSorter();
    spanOut();

}