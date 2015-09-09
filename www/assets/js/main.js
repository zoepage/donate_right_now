'use strict'

// initialize Hoodie
var hoodie  = new Hoodie();

hoodie.global.findAll('item')
  .done(function(items){ 
    items.forEach( function (item) {
      console.log(item)
      $('#item-list').append(
        '<li>' + 
          '<span class="quantity">'+ item.quantity + '</span>' +
          '<span class="todo">'+ item.name + '</span> im ' +
          '<span class="location">'+ item.location + '</span> bis ' +
     //     '<span class="due"> '+ item.quantity +'</span> ' +       
     //     '<span class="category"> '+ item.quantity +'</span> ' +
          '<span class="urgent">dringend:'+ item.urgent +'</span>' +
        '</li>'
        )
    })    
  }
);