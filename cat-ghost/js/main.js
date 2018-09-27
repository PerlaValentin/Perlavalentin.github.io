  // CHECKLIST:
  // make food items draggable [X]
  // make catghost droppable [X]       
  // change droppable img src depending on which draggable is dropped [X]
  // create tongue hover state when draggable is dropped [X]
  // reset to OG cat ghost [X]
$(document).ready(function () {
// MOUSEOVER + MOUSEOUT - OG 
  $('#droppable').mouseover(function(){
    $(this).attr('src','cat-ghost/img/thinking.png');
  });
  $('#droppable').mouseout(function(){  
    $(this).attr('src','cat-ghost/img/angel.png');
  });  
// DRAGGABLE
  $( '.ui-widget-content' ).draggable({ opacity: 0.7, helper: 'clone' });
// DROPPABLE
  $( '#droppable' ).droppable({
      // change img src to respective 'food' ghost
      drop: function( event, ui ) {
           if (ui.draggable.attr('id') == 'donut') { 
            $(this).attr('src', 'cat-ghost/img/scared.png');
            $(this).mouseout(function(){ // mouseout = regular img
            $(this).attr('src','cat-ghost/img/scared.png');
            });
          } else if (ui.draggable.attr('id') == 'orange') {
            $(this).attr('src', 'cat-ghost/img/meditation.png');
            $(this).mouseout(function(){
            $(this).attr('src','cat-ghost/img/meditation.png');
            });
          } else if (ui.draggable.attr('id') == 'steak') {
            $(this).attr('src', 'cat-ghost/img/running.png');
            $(this).mouseout(function(){  
            $(this).attr('src','cat-ghost/img/running.png');
            });
          } else if (ui.draggable.attr('id') == 'reset') {
            $(this).attr('src', 'cat-ghost/img/angel.png');
            $(this).mouseout(function(){  
            $(this).attr('src','cat-ghost/img/angel.png');
            });
          }
      },
    });
})