function init() {

    var elm1 = $("#txtElement1");
    var typText1 = "Your name is";
    var inptElm1 = $("#inputElement1");
    var btn1 = $("#btn1");
  
    typeAnimation (elm1,typText1,inptElm1, btn1);
}

function typeAnimation(el, txt, input, btn) {
    
    $(el).css("display","inline");
      
    var arr = txt.split('');
    var text="";
    for (i=0;i<arr.length;i++){
        text += arr[i];
        setDelay(el, text, input, i, arr.length, btn);
    }
}

function setDelay(el, text, inputElment, i, textLength, btn) {

    setTimeout(function(){
      
        $(el).html(text);
       
        if(i == textLength-1){
       
            $(inputElment).css("display","inline").delay(1000).focus();

            setTimeout(function () {
                $('#btn1').show(); 
            },1500)
            
                 
        }

    }, 70 * i);
}


$("#btn1").on("click", function(e){

    e.preventDefault();

    if ( $('#inputElement1').val() != '') {
        var elm2 = $("#txtElement2");
        var typText2 = 'and you would like to sign up with'+ '<br>' + 'the email address';
        var inptElm2 = $("#inputElement2");
        var btn2 = $("#btn2");

        setTimeout(function () {
            $('#btn2').show(); 
        },5500)
        
        typeAnimation (elm2,typText2,inptElm2, btn2);
    }else{
        alert('please enter name');
    }
})

$("#btn2").on("click", function(e){

    e.preventDefault();
    var emil=$('#inputElement2').val();
    var emailReg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (!emailReg.test( emil )) {
        // $("#inputElement2").css("border-color","red");
        alert('Plese enter valid email')
        return false;
    } 
    if ( $('#inputElement2').val() != '') {
  
        var elm3 = $("#txtElement3");
        var typText3 = 'Creating a strong password with a' + '<br>' + 'mix of some letter, symbol and' + '<br>'  + 'number';
        var inptElm3 = $("#inputElement3");
        var btn3 = $("#btn3");

        setTimeout(function () {
            $('#btn3').show(); 
        },7000)

        $('.item-1').addClass('move-top-1');
        typeAnimation (elm3,typText3,inptElm3, btn3);
    }
    else{
        alert('Thank you for your valid email')
    }
   
})

$("#btn3").on("click", function(e){
    e.preventDefault();
    $('.item-2').addClass('move-top-2');
    $('.item-3').addClass('move-top-3');

    if ( $('#inputElement3').val() != '') {

      var elm4 = $("#txtElement4");
      var typText4 = "Great, you are all set.";

      setTimeout(function () {
          $("#btn4").addClass('submit-btn'); 
      },2000)
      
      typeAnimation (elm4,typText4);
    }
    else{
        alert('please enter password');
    }
   
})



init();