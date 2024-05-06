     $(function(){

        var bookForm = document.forms.bookForm;
        var bookFormFull = document.forms.bookFormFull;


        // Materialized jQuery Intializations
        $('.sidenav').sidenav();
        $('.tooltipped').tooltip();

        $('.tabs').tabs();
        $('.materialboxed').materialbox();
        $('.datepicker').datepicker({
            disableWeekends:true
        });
        $('.modal').modal();
        $('.parallax').parallax();
        $('.scrolling').scrollSpy();

            $('.carousel.single').carousel();

        $('.carousel.carousel-slider').carousel({
            fullWidth: true,
            indicators: true
          });
          autoplay();
          
          function autoplay() {
            $('.carousel').carousel('next');
            setTimeout(autoplay, 4500);
            }      
             $('#form-more-button').click(function(){
                 
                var email = bookForm.email;
                var emailFull = bookFormFull.emailFull;

                var date = $('#date-short.datepicker').val();
                var dateFull = bookFormFull.dateServiceFull;

                //  $('.modal-footer').css("background-color", "red");
                 emailFull.value = email.value;
                 dateFull.value = date;
             });

            //  $('#book-service-button').click(function(){

            //     var cbPsFull;
            //     $('#cb-ps-full') = cbPsFull;

            //     if(cbPsFull.value == false){
            //         ErrorEvent
            //     }

            //  })

             
     });
