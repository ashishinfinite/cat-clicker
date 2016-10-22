var img='<div class="image %data%"></div>';
var img_name='<img src="%data%">';
var cat_name='<p class="cat_name">%data%<p>';
var cnt='<p class="count">count:</p>'
var count1=0;
var count2=0;
var editted_img_class=img.replace("%data%","img1");

$('.container').append(editted_img_class);
var editted_cat_name=cat_name.replace("%data%","cat1");
$('.image').prepend(editted_cat_name);
var editted_img_name=img_name.replace("%data%","a.jpg");
$('.image').append(editted_img_name);
$('.image').append(cnt);


$(".img1").click(function(){
	count1++;
	$(".img1 .count").text("count:"+""+count1);
})


 var editted_img_class=img.replace("%data%","img2");
 $('.container:last').append(editted_img_class);
 var editted_cat_name=cat_name.replace("%data%","cat2");
 $('.img2').prepend(editted_cat_name);
 var editted_img_name=img_name.replace("%data%","a.jpg");
 $('.img2').append(editted_img_name);
 $('.img2').append(cnt);


$(".img2").click(function(){
	count2++;
	$(".img2 .count").text("count:"+""+count2);
})

