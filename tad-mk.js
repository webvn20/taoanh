$(document).ready(function() {
    if (window.location.hostname != tmbq) {
        $("#tad-taianhve").hide();
        $(".tad-ketqua").hide();
        $("#tad-taoanh").click(function() {
            $(".load-anh").fadeIn(500, function() {
                go();
            });
        });
        var img = document.getElementById("Cimg");
        img.crossOrigin = "Anonymous";
        img.src = "https://1.bp.blogspot.com/-z3RZ2G93tVo/YHES6yUdnzI/AAAAAAAArsw/Jq_pD24Pn-sEW-XwzGl18qlgIYQZZOeqgCNcBGAsYHQ/s0/blank.png";

        function go() {
            var me = this,
                c = document.querySelector("canvas"),
                ctx = c.getContext("2d"),
                corners = vitri,
                radius = 10,
                cPoint, timer, step = 1;
            render();

            function render() {
                var p1, p2, p3, p4, y1c, y2c, y1n, y2n, w = img.width - 1,
                    h = img.height - 1;
                ctx.clearRect(0, 0, c.width, c.height);
                for (y = 0; y < h; y += step) {
                    for (x = 0; x < w; x += step) {
                        y1c = lerp(corners[0], corners[3], y / h);
                        y2c = lerp(corners[1], corners[2], y / h);
                        y1n = lerp(corners[0], corners[3], (y + step) / h);
                        y2n = lerp(corners[1], corners[2], (y + step) / h);
                        p1 = lerp(y1c, y2c, x / w);
                        p2 = lerp(y1c, y2c, (x + step) / w);
                        p3 = lerp(y1n, y2n, (x + step) / w);
                        p4 = lerp(y1n, y2n, x / w);
                        ctx.drawImage(img, x, y, step, step, p1.x, p1.y, Math.ceil(Math.max(step, Math.abs(p2.x - p1.x), Math.abs(p4.x - p3.x))) + 1, Math.ceil(Math.max(step, Math.abs(p1.y - p4.y), Math.abs(p2.y - p3.y))) + 1)
                    }
                }
                exp();
            }

            function lerp(p1, p2, t) {
                return {
                    x: p1.x + (p2.x - p1.x) * t,
                    y: p1.y + (p2.y - p1.y) * t
                }
            }
        }

        function exp() {
            html2canvas(document.querySelector(".tad-main"), {
                useCORS: !0,
                scrollX: 0,
                scrollY: 0,
                width: rongh2,
                height: daih2,
                scale: 1,
                x: 0,
                y: 0
            }).then(canvas => {
                canvas.toBlob(function(blob) {
                    var bloburl = URL.createObjectURL(blob);
                    $("#img-out").html("<img src='" + bloburl + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img>");
                    $("#tad-taianhve").attr("download", tenanhxuat).attr("href", bloburl);
                });
                $("#tad-taianhve").show();
                $(".tad-ketqua").show();
                $(".load-anh").fadeOut(500);
            }, 'image/jpeg');
        }
    }
});