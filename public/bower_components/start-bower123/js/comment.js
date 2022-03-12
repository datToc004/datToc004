$(".commentbtn").on('click', function(e) {
        e.preventDefault();
        console.log('sdfsd');
        var _comment = $('#ccomment').val();
        var _user_id = $('input[name="user_id"]').val();
        var _dish_id = $('input[name="dish_id"]').val();
        var _token = $('input[name="_token"]').val();
        $.ajax({
            url: "/home/dishes/comment-dish",
            type: "post",
            dataType: 'json',
            data: {
                'note': _comment,
                'user_id': _user_id,
                'dish_id': _dish_id,
                '_token': _token
            },
            success: function(res) {
                var _html = `<div class="comment_box">
                                        <a> <img src="/bower_components/start-bower123/images/avatar.jpg" alt="
                                                avatar"> </a>
                                        <div class="inside_comment">
                                            <div class="comment-meta">
                                                <div class="commentsuser">${res.user_name}</div>
                                                <div class="comment_date">${res.created_at}</div>
                                            </div>
                                        </div>
                                        <div class="comment-body">
                                            <p>${_comment}</p>
                                        </div>
                                        <div class="reply"> <a>Reply</a> </div>
                                        <div class="arrow-down"></div>
                                    </div>`;
                if (res.bool == true) {
                    $('#numberComment').text(`(${res.numberComment}) Readers Comments `);
                    $('#ccomment').val('');
                    $(".comments").append(_html);
                }
            }
        });
    });