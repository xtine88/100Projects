
$(document).ready(function(){
  $('#add').click(function(){
      var addTitle = $('#addbook').val();
      if(addTitle.length > 0){
        $("#booklist").append("<li>" + addTitle + "</li>");
        $("#addbook").val('');
      }
  });
});
