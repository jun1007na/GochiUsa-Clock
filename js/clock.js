$(function () {
    $.extend({
        clock: function clock(target_day, target_time) {
            var dayOfTheWeek = new Array("日", "月", "火", "水", "木", "金", "土");
            var now = new Date();
            var month = now.getMonth() + 1;
            var date = now.getDate();
            var day = now.getDay();
            var hour = now.getHours();
            var min = now.getMinutes();
            var sec = now.getSeconds();

            if (min < 10) {
                min = "0" + min;
            }

            var clock_day = month + "月" + date + "日" + "（" + dayOfTheWeek[day] + "）";
            var clock_time = hour + ":" + min;

            //htmlの更新
            target_day.text(clock_day);
            target_time.text(clock_time);

            //1秒ごとに更新
            setTimeout(function () {
                clock(target_day, target_time);
            }, 1000);
        }
    });
    //現在日時を表示
    $.clock($("#current_day"), $("#current_time"));
});
