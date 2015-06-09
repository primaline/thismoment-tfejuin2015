  
var sequenceNum = 1;


  /*LE DELETE ITEM GLOBAL FAIT LE CAFE ICI MAIS EST PAS TOP/*
  /*function addsequence(){
        var sequencecontainer = document.createElement('div');
        sequencecontainer.classList.add('sequence-canva');
        sequencecontainer.innerHTML = "<input name='sequence-title' class='sequence-title' type='text' value='sequence title'><h4 class='tool-box-title'>add</h4><ul class='tool-box'><li><a class='addtext'>Text</a></li><li><a class='adduniquephoto'>Full screen photo</a></li><li><a class='addmosaicphoto'>Photos mosaic</a></li><li><a class='addsidedtext'>Sided text and photos</a></li></ul>";
        $(sequencecontainer).insertBefore(".add-sequence");
        $("<a class='deleteitem'>delete</a>").insertAfter(sequencecontainer);
        $("<div class='sequence-row'><div class='sequence-access'</div></div>").appendTo(".sequencelist-container");
        $(".deleteitem").click(deleteItem);
  }*/

  function addsequence(){
        console.log(sequenceNum);

        sequenceNum++;

        var sequencecontainer = document.createElement('div');
        sequencecontainer.classList.add('sequence-canva');
        sequencecontainer.innerHTML = "<input spellcheck='false' name='sequence-title' class='sequence-title' type='text' placeholder='Type your sequence " +sequenceNum+ " title.' onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Type your sequence " +sequenceNum+ " title.'\"><span class='underliner'>this is an underline</span><h4 class='tool-box-title'>add</h4><ul class='tool-box'><li><a class='addtext'><span class='toolbox-image-un'>img</span><span class='toolbox-image-text'>Text</span></a></li><li><a class='adduniquephoto'><span class='toolbox-image-deux'>img</span><span class='toolbox-image-text'>Unique photo</span></a></li><li><a class='addmosaicphoto'><span class='toolbox-image-trois'>img</span><span class='toolbox-image-text'>Multiple photos</span></a></li><li><a class='addsidedtext'><span class='toolbox-image-quatre'>img</span><span class='toolbox-image-text'>Text &amp; photos</span></a></li></ul>";
        //var delete = le lien
        //inserer variable before
        $(sequencecontainer).insertBefore(".add-sequence");
        var deleteSequenceVar = $("<a class='deleteitemsequence'>delete</a>");
        deleteSequenceVar.appendTo(sequencecontainer);
        /*var sequenceCover = $("<div class='sequence-row'><div class='sequence-access'></div></div>");
        
        sequenceCover.appendTo(".sequencelist-container");*/
        deleteSequenceVar.click(deleteSequence);
        //nom de la variable click 
  }

  function deleteItem()
  {
     $(this).prev().remove();
     $(this).remove();
  }

  function deleteSequence()
  {
     $(this).parent('div').remove();
     $(".sequence-row:last").remove();
     $(this).remove();
  }

  function addText(sequence)
  {
    var toolboxtitle = sequence.querySelector('.tool-box-title');
    $("<textarea spellcheck='false' class='full-text' rows='4' cols='50' placeholder='Clic on this sweet little paragraph to edit it and tell us everything about your story.' onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Clic on this sweet little paragraph to edit it and tell us everything about your story.'\"></textarea><a class='deleteitem'>delete</a>").insertBefore(toolboxtitle);
    $(".deleteitem").click(deleteItem);
  }

  function addUniquePhoto(sequence)
  {

    //Création des différents éléments
    var toolboxtitle = sequence.querySelector('.tool-box-title');
    var uniquecontainer = document.createElement('div');
    uniquecontainer.classList.add('upload-file-container');
    uniquecontainer.innerHTML = "<label for='uniquephoto'>Select your photo</label><input name='uniquephoto' id='uniquephoto' class='uniquephoto' type='file'>";
    $(uniquecontainer).uniqueId();
    $(uniquecontainer).insertBefore(toolboxtitle);
    $("<a class='deleteitem'>delete</a>").insertBefore(toolboxtitle);

    //Mettre un id unique aux labels pour les input
    $("input:file[name='uniquephoto']").each(function(index){
        var currElem = $(this);
        var prevLabel = currElem.prev();
        currElem.attr("id", this.id + index);

        prevLabel.attr("for", prevLabel.attr("for") + index);
    });

    //Requête sur le input img
    var imageInput = uniquecontainer.querySelector('input');
    
    //bouton de supression           
    $(".deleteitem").click(deleteItem);

    //Récupération de l'image
    $(imageInput).change(
          function(){
        
            var imageWrapper = document.createElement('div');
            imageWrapper.innerHTML = "<img class='uniquephotodisplayed' />";
            $(imageWrapper).insertAfter(this.parentNode);
            $(this.parentNode).remove();
            if (this.files && this.files[0]) {
              var reader = new FileReader();
              reader.onload = function (e) {
              var imageNode = this.querySelector('img');
              selectedImage = e.target.result;
              $(imageNode).attr('src', selectedImage);
            }.bind(imageWrapper);
            reader.readAsDataURL(this.files[0]);
            }
          }
    );
  }


  function addMosaicPhoto(sequence)
  {

    //Création des différents éléments
    var toolboxtitle = sequence.querySelector('.tool-box-title');
    var mosaiccontainer = document.createElement('div');
    mosaiccontainer.classList.add('upload-mosaic-container');
    mosaiccontainer.innerHTML = "<label for='mosaicphoto'><span>Select your photos</span><span>Select your photos</span><span>Select your photos</span><span>Select your photos</span></label><input name='mosaicphoto' class='mosaicphoto' id='mosaicphoto' type='file' multiple>";
    $(mosaiccontainer).uniqueId();
    $(mosaiccontainer).insertBefore(toolboxtitle);
    $("<a class='deleteitem'>delete</a>").insertBefore(toolboxtitle);
    
    //Mettre un id unique aux labels pour les input
    $("input:file[name='mosaicphoto']").each(function(index){
        var currElem = $(this);
        var prevLabel = currElem.prev();
        currElem.attr("id", this.id + index);

        prevLabel.attr("for", prevLabel.attr("for") + index);
    });
    
    //Requête sur le input img
    var mosaicInput = mosaiccontainer.querySelector('input');

    //bouton de supression 
    $(".deleteitem").click(deleteItem);

    //Récupération de l'image
    $(mosaicInput).change(
          function(){
        
            var mosaicDisplayer = document.createElement('div');
            $(mosaicDisplayer).insertAfter(this.parentNode);
            $(this.parentNode).remove();

            for(var i=0; i<this.files.length; i++){
              var file = this.files[i];
              if(!file.type.match('image'))
                continue;

              var reader = new FileReader();
              reader.onload = (function(e) {
                var picFile = e.target;
                  var mosaicphotodisplayed = document.createElement('span');
                  mosaicphotodisplayed.innerHTML = "<img class='mosaicphotodisplayed' src='" + picFile.result + "' title='" + picFile.name + "'/>";
                  $(mosaicDisplayer).append(mosaicphotodisplayed);
              });
              reader.readAsDataURL(file);
            }
        }
    );
  }


  function addSidedText(sequence)
  {
    var toolboxtitle = sequence.querySelector('.tool-box-title');
    var sidedtextcontainer = $("<div class='sided-text-container'><textarea spellcheck='false' rows='4' cols='50' placeholder='Clic on this sweet little paragraph to edit it and tell us everything about your story.' onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Clic on this sweet little paragraph to edit it and tell us everything about your story.'\"></textarea><div class='sided-upload-container'><div class='sided-image-element'><p>Select your photos</p></div><div class='sided-image-element'><p>Select your photos</p></div></div></div>");
    sidedtextcontainer.insertBefore(toolboxtitle);
    var sidetextoptionsVar = $("<ul class='sidedtextoptions'></ul>")
    sidetextoptionsVar.appendTo(sidedtextcontainer);
    var interchangeLink = $("<li><a>switch</a></li>")
    interchangeLink.appendTo(sidetextoptionsVar);
    var deleteLink = $("<li><a>delete</a></li>")
    deleteLink.appendTo(sidetextoptionsVar);

    deleteLink.click(function() {
                               $(this).parents(".sided-text-container").remove();
                           });

    /*
    $( ".storypart" ).on( "click", ".addsidedtext", function() {
          var sequence = $(this).parents('.sequence-canva')[0];
    */

    interchangeLink.click(
          function () {
            var sidedtextcontainer = $(this).parents(".sided-text-container");
            console.log("rr");
            if(sidedtextcontainer.children("textarea").css("float") == "left") 
            {
              sidedtextcontainer.children("textarea").css("float", "right");
              sidedtextcontainer.children(".sided-upload-container").css("float", "left");
              sidedtextcontainer.children("textarea").css("margin-left", "0");
              sidedtextcontainer.children("textarea").css("margin-right", "10px");
              sidedtextcontainer.children(".sided-upload-container").css("margin-left", "10px");
              sidedtextcontainer.children(".sided-upload-container").css("margin-right", "0");
            }

            else {
              sidedtextcontainer.children("textarea").css("float", "left");
              sidedtextcontainer.children(".sided-upload-container").css("float", "right");
              sidedtextcontainer.children("textarea").css("margin-left", "10px");
              sidedtextcontainer.children("textarea").css("margin-right", "0");
              sidedtextcontainer.children(".sided-upload-container").css("margin-left", "0");
              sidedtextcontainer.children(".sided-upload-container").css("margin-right", "10px");
            }
          }            
    );
  }



  $(document).ready(function () {

        


        $(".add-sequence").click(addsequence);


        $("#coverbutton").click(
            function () {
                $("#coverbutton").css("color", "#777");
                $("#storybutton").css("color", "#000");
                $(".coverpart").css("display", "block");
                $(".storypart").css("display", "none");
            }            
        );


        $("#storybutton").click(
            function () {
                $("#coverbutton").css("color", "#000");
                $("#storybutton").css("color", "#777");
                $(".coverpart").css("display", "none");
                $(".storypart").css("display", "block");
            }            
        );


        $("#cover-picture-upload").change(
            function () {

              if (this.files && this.files[0]) {
              var reader = new FileReader();

              reader.onload = function (e) {


              $('.coverpicture').css('background', 'url('+e.target.result +')no-repeat center center fixed');
              
              }
              reader.readAsDataURL(this.files[0]); 
              } 
              console.log("miskin");      
        });




        $( ".storypart" ).on( "click", ".addtext", function() {
          var sequence = $(this).parents('.sequence-canva')[0];

          /*var toolboxtitle = sequence.querySelector('.tool-box-title');
          console.log(e.target.parentNode.parentNode);
                $("<textarea rows='4' cols='50'>Lorem Ipsum Sid Dolor quid meliora</textarea><a class='deleteitem'>delete</a>").insertBefore(toolboxtitle);
          console.log('tamere2');
                $(".deleteitem").click(
                     function() {
                         $(this).prev().remove();
                         $(this).remove();
                     }
                );
*/

            addText(sequence);

            }            
        );


$( ".storypart" ).on( "click", ".adduniquephoto", function() {
          var sequence = $(this).parents('.sequence-canva')[0];

             addUniquePhoto(sequence);

            }            
        );


$( ".storypart" ).on( "click", ".addmosaicphoto", function() {
          var sequence = $(this).parents('.sequence-canva')[0];

             addMosaicPhoto(sequence);

            }            
        );

$( ".storypart" ).on( "click", ".addsidedtext", function() {
          var sequence = $(this).parents('.sequence-canva')[0];

             addSidedText(sequence);

            }            
        );





        /*$(".addmosaicphoto").click(
          function () {      
                var mosaiccontainer = document.createElement('div');
                mosaiccontainer.classList.add('upload-mosaic-container');
                mosaiccontainer.innerHTML = "<input name='mosaicphoto[]' class='mosaicphoto' type='file' multiple>";
                $(mosaiccontainer).uniqueId();
                $(mosaiccontainer).insertBefore(".tool-box-title");
                $("<a class='deleteitem'>delete</a>").insertBefore(".tool-box-title");
                var mosaicInput = mosaiccontainer.querySelector('input');


                $(".deleteitem").click(
                     function() {
                         $(this).prev().remove();
                         $(this).remove();
                     }
                );


                $(mosaicInput).change(
                      function(){
                    
                        var mosaicDisplayer = document.createElement('div');
                        $(mosaicDisplayer).insertAfter(this.parentNode);
                        $(this.parentNode).remove();

                        for(var i=0; i<this.files.length; i++){
              var file = this.files[i];
              if(!file.type.match('image'))
                          continue;

                          var reader = new FileReader();
                          reader.onload = (function(e) {
                            var picFile = e.target;
                              var mosaicphotodisplayed = document.createElement('span');
                              mosaicphotodisplayed.innerHTML = "<img class='mosaicphotodisplayed' src='" + picFile.result + "' title='" + picFile.name + "'/>";
                              $(mosaicDisplayer).append(mosaicphotodisplayed);
                          });
                        reader.readAsDataURL(file);
                        }
                    }
                );

          }       
        )
*/




       /*$(".addsidedtext").click(
                  function () {
                      $("<div class='sided-text-container'><textarea rows='4' cols='50'>Lorem Ipsum Sid Dolor quid meliora</textarea><div class='sided-upload-container'><div class='sided-image-element'></div><div class='sided-image-element'></div><div class='sided-image-element'></div></div></div><a class='interchange'>interchanger</a><a class='deleteitem'>delete</a>").insertBefore(".tool-box-title");
        
                      $(".deleteitem").click(
                           function() {
                               $(this).prev().remove();
                               $(this).prev().remove();
                               $(this).remove();
                           }
                      );

                      $(".interchange").click(
                            function () {
                              if($(".sided-text-container textarea").css("float") == "left") {

                                $(".sided-text-container textarea").css("float", "right");
                                $(".sided-upload-container").css("float", "left");
                              }

                              else {
                                $(".sided-text-container textarea").css("float", "left");
                                $(".sided-upload-container").css("float", "right");
                            }
                            }            
                      );

                  }            
              );

*/

  

    });

