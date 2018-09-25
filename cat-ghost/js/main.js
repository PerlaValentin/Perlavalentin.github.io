  // CHECKLIST:
  // make food items draggable [X]
  // make catghost droppable [X]       
  // change droppable img src depending on which draggable is dropped [X]
  // create tongue hover state when draggable is dropped [X]
  // reset to OG cat ghost [X]
$(document).ready(function () {
// MOUSEOVER + MOUSEOUT - OG 
  $('#droppable').mouseover(function(){
    $(this).attr('src','cat-ghost/img/catghost-blink.svg');
  });
  $('#droppable').mouseout(function(){  
    $(this).attr('src','cat-ghost/img/catghost.svg');
  });  
// DRAGGABLE
  $( '.ui-widget-content' ).draggable({ opacity: 0.7, helper: 'clone' });
// DROPPABLE
  $( '#droppable' ).droppable({
      // change img src to respective 'food' ghost
      drop: function( event, ui ) {
           if (ui.draggable.attr('id') == 'donut') { 
            $(this).attr('src', 'cat-ghost/img/donutghost.svg');
            $(this).mouseover(function(){ // mouseover = blink img
            $(this).attr('src','cat-ghost/img/donutghost-blink.svg');
            });
            $(this).mouseout(function(){ // mouseout = regular img
            $(this).attr('src','cat-ghost/img/donutghost.svg');
            });
          } else if (ui.draggable.attr('id') == 'orange') {
            $(this).attr('src', 'cat-ghost/img/orangeghost.svg');
            $(this).mouseover(function(){
            $(this).attr('src','cat-ghost/img/orangeghost-blink.svg');
            });
            $(this).mouseout(function(){
            $(this).attr('src','cat-ghost/img/orangeghost.svg');
            });
          } else if (ui.draggable.attr('id') == 'steak') {
            $(this).attr('src', 'cat-ghost/img/steakghost.svg');
            $(this).mouseover(function(){
            $(this).attr('src','cat-ghost/img/steakghost-blink.svg');
            });
            $(this).mouseout(function(){  
            $(this).attr('src','cat-ghost/img/steakghost.svg');
            });
          } else if (ui.draggable.attr('id') == 'reset') {
            $(this).attr('src', 'cat-ghost/img/catghost.svg');
            $(this).mouseover(function(){
            $(this).attr('src','cat-ghost/img/catghost-blink.svg');
            });
            $(this).mouseout(function(){  
            $(this).attr('src','cat-ghost/img/catghost.svg');
            });
          }
      },
      // open mouth when food is dragged over to catghost
      over: function( event, ui ) {
          if ($(this).attr('src') == 'cat-ghost/img/catghost.svg') {
            $(this).attr('src', 'cat-ghost/img/catghost-open.svg');
          } else if ($(this).attr('src') == 'cat-ghost/img/donutghost.svg') { 
            $(this).attr('src', 'cat-ghost/img/donutghost-open.svg');
          } else if ($(this).attr('src') == 'cat-ghost/img/orangeghost.svg') { 
            $(this).attr('src', 'cat-ghost/img/orangeghost-open.svg');
          } else if ($(this).attr('src') == 'cat-ghost/img/steakghost.svg') { 
            $(this).attr('src', 'cat-ghost/img/steakghost-open.svg');
          }   
      }
    });
})