

function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^(\([-+]?[0-9]+)\)$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function available(date){

var day = date.getDay();

  // Only make Mon through friday selectable
  if(day == 1 || day == 2 || day == 4 || day == 3 || day == 5){
    return [true, ''];
  }else{
    return [false, ''];
  }
}

$( function() {
    $( "#datepicker" ).datepicker({ beforeShowDay: available});
  } );

  $( function() {
      $( "select" ).selectable();
    } );



  $("#phone").on("change", function(){
                if (!validatePhone("phone")){
                    alert("Wrong format for phone");
                    $("#phone").val("(xxx)");
                    $("#phone").addClass("error");
                }
                else {
                    $("#phone").removeClass("error");
                }
            });


  $('#sup').click(function (e) {
            console.log($('#name2').val());
            var focusSet = false;


            if (!$('#name2').val()) {
                if ($("#name2").parent().next(".validation").length == 0) // only add if not added
                {
                    $("#name2").parent().after("<div class='validation' style='color:red;margin-bottom: 20px;'>Please enter name address</div>");
                }
                e.preventDefault(); // prevent form from POST to server
                $('#name2').focus();
                focusSet = true;
            } else {
                $("#name2").parent().next(".validation").remove(); // remove it
            }
            if (!$('#email2').val()) {
                if ($("#email2").parent().next(".validation").length == 0) // only add if not added
                {
                    $("#email2").parent().after("<div class='validation' style='color:red;margin-bottom: 20px;'>Please enter password</div>");
                }
                e.preventDefault(); // prevent form from POST to server
                if (!focusSet) {
                    $("#email2").focus();
                }
            } else {
                $("#email2").parent().next(".validation").remove(); // remove it
            }
        });

$(document).ready(function() {
        $("#reserveForm").validate();
      });
