$(function(){
  function splitLocation(name){
    let href = name.attr("href").split("/");
    href = href[href.length-1].split(".")[0];
    return href;
  }

  let currentHref = splitLocation($(location));

  $("#lnb a").each(function(){
    if ( currentHref == splitLocation($(this)) ) {
      $(this).addClass("on");
    }
  })
  $("dd:not(:first)").css({"display":"none", "height":0 });
  $(".accordion dl dt").click(function(){
    let thisElem = $(this);
    if ( $("+dd",thisElem).css("display") == "none" ) {
      let isAni = $("dd").is(":animated");
      if ( !isAni ) {
        $("dd").each(function(){
          if ( $(this).css("height") == "300px" ) {  // or parseInt($(this).css("height")) == 300
            $(this).animate( { height: "0"}, 400,function(){
              $(this).css("display","none");
            });
          }
        })
        $("+dd",thisElem).css("display", "block").animate( {height: 300}, 300);
      }

    }
  })
  $(".intro").css("flex-direction","row");

  console.log($(".select-inner")[0]);
  $(".map-change")[0].click(function(e){
    console.log("Test");
    $(".map-inner01").removeClass("active");
    $(".map-inner02").addClass("active");
    return false;
    e.preventDefault();
  })
  el().click(function(){
    return false;
    $(".map-inner01").removeClass("active");
    $(".map-inner02").addClass("active");
  })
})
