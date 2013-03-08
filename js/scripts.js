$(window).load(function(){
    
    // ieCheck
    var ie = false;
    var aniButtonDuration = 350;
	 var MSIE = false;
	 MSIE = ($.browser.msie) && ($.browser.version <= 8);
    
    if($.browser.msie && $.browser.version<9)
    {
        aniButtonDuration = 0;
        ie = true;
    }
    
    
    $('#description li').each(function(){
        if($(this).index() != 0)
            $(this).fadeOut();
    })  
    
    $('.gall_spinner').hide();
    $('#bgStretch')
		.bgStretch({
			align:'rightTop',
			navigs:$('#bgNav').navigs({prevBtn:$('#prev_arr'), nextBtn:$('#next_arr')})
		}).sImg({
			spinner:$('.gall_spinner')
		}) 
        
    $('#prev_arr, #next_arr')
	.sprites({
		method:'simple',
		duration:400,
		easing:'easeOutQuint',
		hover:true
	})
        
    $('').each(function(){
        $(this).find('>span').stop().animate({opacity:0},0);
        $(this).hover(function()
        {
            $(this).find('>span').stop().animate({opacity:1}, aniButtonDuration,'easeOutCubic')					   
        }, function(){
        	$(this).find('>span').stop().animate({opacity:0}, aniButtonDuration,'easeOutCubic')						   
        })
    })
	 
	 //follow-icons-------------	 
   $('.follow-icon .img_act').css({opacity:0})
	$('.follow-icon a').hover(function(){
		$(this).find('.img_act').stop().animate({opacity:1})
      $(this).find('p').stop().animate({color:'#000'}, 550, 'easeOutSine')						 
	}, function(){
		$(this).find('.img_act').stop().animate({opacity:0})
      $(this).find('p').stop().animate({color:'#1E1E1E'}, 550, 'easeOutSine')							 
	})
	
	
	$('.close_main').hover(
        function(){
            if (!MSIE){
                $(this).find('.close').stop().animate({'backgroundPosition':'right top'},200,'easeOutCubic');
            } else {
                $(this).find('.close').stop().css({'backgroundPosition':'right top'});
            }
        },
        function(){
            if (!MSIE){
                $(this).find('.close').stop().animate({'backgroundPosition':'right bottom'},200,'easeOutCubic');
            } else {
                $(this).find('.close').stop().css({'backgroundPosition':'right bottom'});
            }
        }
    );
	 
	 // scroller
    $('.scroll')
		.uScroll({
			axis:'y'
			,lay:'outside'
			,duration:600
			,easing:'easeInOutSine'
			,step:200
			,mousewheel:true
		})
		
	$('._shuttle').mouseover(
        function(){
            $(this).stop().animate({'opacity':'0.7'},500,'easeOutExpo');
        })
        $('._shuttle').mouseout(
		  function(){
            $(this).stop().animate({'opacity':'1'},500,'easeOutExpo');
        })
		  
		
	 $('.scroll_btn_down, .scroll_btn_up').css({'backgroundPosition':'center top'})
    $('.scroll-btns a').hover(function()
    {
        $(this).stop().animate({'backgroundPosition':'center bottom'}, 300,'easeOutCubic');			   
    }, function(){
        $(this).stop().animate({'backgroundPosition':'center top'}, 300,'easeOutCubic');			   
    })
	 // end scroller


    /////////////////////////////////////////////////////////////////////////// 
    //                           content switch                              //
    ///////////////////////////////////////////////////////////////////////////
    
    var content=$('#content'),
        nav=$('.menu'),
        close=$('.close_main'),
        comp_name=$('#logo'),
        splash = $('#splash');
    
    $('ul#menu').superfish({
      delay:       700,
      animation:   {height:'show'},
      speed:       300,
      autoArrows:  false,
      dropShadows: false
    });

    $('.submenu_1 a b').css({width:'0px'})
    $('.submenu_1 a').hover(function()
    {
        $(this).find('b').css({width:'0px', left:'0px'}).stop().animate({width:'100%'}, 300,'easeOutCubic');			   
    }, function(){
        $(this).find('b').stop().animate({width:'0px', left:'187px'}, 300,'easeOutCubic');						   
    })
    
    
    nav.navs({
		useHash:true,
        defHash:'#!/',
		hoverIn:function(li){
		   	  $('>a ',li).css({color:'#000'});
		   	  $('> a > span ',li).css({display:'block'}).stop().animate({opacity:1}, aniButtonDuration, 'easeOutCubic');
		},
		hoverOut:function(li){
		  if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
              $('>a ',li).css({color:'#fff'});
		   	  $('> a > span ',li).stop().animate({opacity:0}, aniButtonDuration, 'easeOutCubic', function(){
		   	      $(this).css({display:'none'});
		   	  });
          }
		}				
    })
    
     content.tabs({
		preFu:function(_)
        {
            _.li.css({display:'none', top:'620px'});
            _.li.each(function(){
                if($(this).height() < 457){
                    $(this).height(457);
                } else {
                    $(this).height($(this).height()+0)
                }
            })
		}
		,actFu:function(_)
        {

            if(_.pren == undefined){
                aniDelay = 250;
            } else {
                if(_.n == -1 && _.pren == -1){
                    aniDelay = 250;
                } else {
                    aniDelay = 450;
                }
            }
            
            if(_.n == -1){
                content.stop().delay(aniDelay).animate({height:'457px'}, 650,'easeOutCubic');
                splash.css({display:'block'}).stop().delay(aniDelay).animate({top:'0px'}, 650, 'easeOutQuint');
					 close.stop().delay(0).animate({right:'-157px'}, 350,'easeOutQuint');
					 comp_name.stop().delay(0).animate({left:'-207px'}, 350,'easeOutQuint');
            } else {
                content.stop().delay(aniDelay).animate({height:_.curr.height()+0}, 650,'easeOutCubic');
                splash.stop().animate({top:'620px'}, 350, 'easeInCubic', function(){
                    $(this).css({display:'none'});
                });
					 close.stop().delay(aniDelay).animate({right:'0px'}, 450,'easeOutQuint');
					 comp_name.stop().delay(aniDelay).animate({left:'0px'}, 450,'easeOutQuint');
            }
            
			$(window).trigger('resize');
        	if(_.curr){
        	   
				_.curr
					.stop()
					.delay(aniDelay).css({display:'block', top:content.height()}).animate({top:'0px'}, 650,'easeOutCubic');
            }

            
			if(_.prev){
			    _.prev 
    				.stop()
    				.animate({top:content.height()}, 350,'easeInSine', function(){
    				     $(this).css({display:'none'});
    			     });
            }
           
        }
		
	})
       
    nav.navs(function(n, _)
    {
		content.tabs(n);
	})
    
	 
	 //resize
   var mainDIV = $('.main');
    $(window).resize(function()
    {
       resizeContent(mainDIV.height(), 500); 
    });
    
    function resizeContent(height, _animationSpeed)
    {
        var window_H = $(window).height();
		  /*console.log("curPageNum = " + curPageNum)*/
		  var new_pos=(window_H - 800)/2
		  if(new_pos<0) {new_pos=0}
		  var new_height=(window_H - 1100)/2;
		  if(ie) {
			var new_height=(window_H - 1100)/2;
		  }
		  if(new_height<-150) {new_height=-150}
		  
		  $('.main').stop().delay(0).css({marginTop:new_pos+'px'}, 350,'easeOutCubic');
		  $('.bottom_bg').stop().delay(0).css({height:(new_height+307)+'px'}, 350,'easeOutCubic');
		  
		  $('body').stop().css({'minHeight':(window_H-new_pos)})
    }
	 $(window).trigger('resize');
 
})