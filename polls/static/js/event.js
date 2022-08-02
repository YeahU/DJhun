//$(document).ready(function(){
//  $("button").click(function(){
//    $("p").toggle();
//  });
//});



//function myFunction() {
//    const num = "{{value}}";
//
//    document.getElementById("demo").innerHTML = num;
//    if(num%2 == 0){
//        document.getElementById("demo").innerHTML = "aaaaaaaaaaaaaaaaaaaaaa";
//    }
//    if(num%2 == 1){
//        document.getElementById("demo").innerHTML = "bbbbbbbbbbbbbbbbbbbbbb";
//    }
//    num += 1;
//}
function show_eng(){
    var a = document.getElementById("a").innerHTML
    document.getElementById("demo").innerHTML = "bbbbbbbbbbbbbbbbbbbbbb";
//    $(function () {
//            $("button").on("click", getData);
//        });
//    $.ajax({
//        type:"GET",  //전송타입
//        url:"show_eng",//서버요청대상파일
//        dataType:"json",  //응답타입
//        data: {
//            'input_val': a
//        }
//        success: function (data) {
//            document.getElementById("result").innerHTML = data['eng'];
//        }
//    });
}
$(function () {
        $("button").on("click", getData);
    });
    function getData() {
    $.ajax({
            type:"get",  //전송타입
            url:"event",//서버요청대상파일
            dataType:"text",  //응답타입
            success: function (data, status, xhr) {
                $("#result").text(data);
            },
            error: function (xhr, status, e) {
                console.log("error", e);
                console.log("status", status);
            }
        });
}
