/* PLEASE NOTE
 If nothing loads the pen has exceeded the Instagram API
 request limit.
 */

var userFeed = new Instafeed({
    get: 'user',
    userId: '7523095',
    accessToken: '7523095.310e263.0821e92409004c668eac7c33a66e5090',
    sortBy: 'most-recent',
    limit: 6,
    template: '<div class="img"><a href="{{link}}"><img src="{{image}}" /></a></div>'
});
userFeed.run();

function getUserPic() {
    var access_token = "7523095.310e263.b9e774f471194f95aa91704c82f3161b";
    var user_id = "7523095";
    var url = "https://api.instagram.com/v1/users/" + user_id + "?access_token=" + access_token + "&callback=?";
    $.getJSON(url, function(data) {
        $(".user").append("<img src='" + data.data.profile_picture + "' />");
    });
}
getUserPic();

function mediaCount() {
    var user_id = "7523095";
    var access_token = "7523095.310e263.b9e774f471194f95aa91704c82f3161b";
    var url = "https://api.instagram.com/v1/users/" + user_id + "?access_token=" + access_token + "&callback=?";

    $.getJSON(url, function(data) {
        $('.followers').prepend(data.data.counts.followed_by.toString());
    });
}

mediaCount();

function followerCount() {
    var user_id = "7523095";
    var access_token = "7523095.310e263.b9e774f471194f95aa91704c82f3161b";
    var url = "https://api.instagram.com/v1/users/" + user_id + "?access_token=" + access_token + "&callback=?";

    $.getJSON(url, function(data) {
        $('.following').prepend(data.data.counts.follows.toString());
    });
}

followerCount();

function postCount() {
    var user_id = "7523095";
    var access_token = "7523095.310e263.b9e774f471194f95aa91704c82f3161b";
    var url = "https://api.instagram.com/v1/users/" + user_id + "?access_token=" + access_token + "&callback=?";

    $.getJSON(url, function(data) {
        $('.media').prepend(data.data.counts.media.toString());
    });
}

postCount();/**
 * Created by adiprasetiyo on 9/11/17.
 */
