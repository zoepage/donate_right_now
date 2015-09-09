'use strict'

// initialize Hoodie
var hoodie  = new Hoodie();

hoodie.global.findAll('item')
  .done(function(items){ 
    items.forEach( function (item) {
      console.log(item)
      $('#item-list').append(
        '<li>' + 
          '<span class="quantity w-7">'+ item.quantity + '</span>' +
          '<span class="todo w-20">'+ item.name + '</span> in ' +
          '<span class="location w-20">'+ item.location + '</span>' +
          '<span class="due w-20"> '+ item.due +'</span> ' +       
     //     '<span class="category"> '+ item.quantity +'</span> ' +
          '<span class="urgent w-7">'+ item.urgent +'</span>' +
        '</li>'
        )
    })    
  }
);