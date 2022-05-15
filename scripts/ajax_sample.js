"use strict"

console.log(Mustache.version);

$(function(){
    var $orders=$('#orders');
    var $name=$('#name');
    var $drink=$('#drink');

    // var orderTemplate=""+
    // "<li>"+
    // "<p><strong>name:</strong> {{name}}</p>" +
    // "<p><strong>drink:</strong> {{drink}}</p>" +
    // "<button data-id='{{id}}' class='remove'>X</button>" +
    // "</li>";
    var orderTemplate=$('#order-template').html();

    function addOrder(order){
        
        //$orders.append('<li>name: '+order.name+', drink: '+order.drink+'</li>');\
        $orders.append(Mustache.render(orderTemplate, order));
    }

    $.ajax({
        type: "GET",
        url:'http://127.0.0.1:5000/api/Orders',
        success:function(data){
            console.log('success',data);
            $.each(data, function(i, item){
                addOrder(item);
            });
        },
        error:function(){
            alert('error loading orders');
        }
    });

    $('#add-order').on('click', function(){
        var newOrder={
            Id:0,
            Name:$name.val(),
            Drink:$drink.val(),
        };

        $.ajax({
            type:'POST',
            url:'http://127.0.0.1:5000/api/Orders',
            contentType: 'application/json',
            data:newOrder,
            success:function(item){
                addOrder(item);
            },
            error:function(){
                alert('error saving order');
            }
        });
    });

    $orders.delegate('.remove', 'click', function(){
        var $li=$(this).closest('li');
        $.ajax({
            type:'DELETE',
            url:'http://127.0.0.1:5000/api/Orders/'+$(this).attr('data-id'),
            success:function(){
                $li.fadeOut(300, function(){
                    $(this).remove();
                });
            },
            error:function(){
                alert('error delete order');
            }
        });
    });

    $orders.delegate('.editOrder','click',function(){
        var $li=$(this).closest('li');
        $li.find('input.name').val($li.find('span.name').html());
        $li.find('input.drink').val($li.find('span.drink').html());
        $li.addClass('edit');
    });

    $orders.delegate('.cancelEdit','click',function(){
        $(this).closest('li').removeClass('edit');
    });

    $orders.delegate('.saveEdit','click',function(){
        var $li=$(this).closest('li');
        var newOrder={
            name: $li.find('input.name').val(),
            drink: $li.find('input.drink').val()
        };

        $.ajax({
            type:'PUT',
            url:'http://127.0.0.1:5000/api/Orders/'+$li.attr('data-id'),
            contentType: 'application/json',
            data:newOrder,
            success:function(item){
                $li.find('span.name').html(item.name);
                $li.find('span.drink').html(item.drink);
                $li.removeClass('edit');
            },
            error:function(){
                alert('error updating order');
            }
        });

    });
});
