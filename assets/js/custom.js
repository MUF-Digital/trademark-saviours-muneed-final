$(document).ready(function () {


	$(".send-mail form").submit(function (event) {
		event.preventDefault();
		var formData = {
		  name: $("#name").val(),
		  email: $("#email").val(),
		  phone: $("#phone").val(),
		  content: $("#register_content").val(),

		};
	
		$.ajax({
			type: "POST",
			url: "mail-test.php",
			data: formData,
			dataType: "json",
			encode: true,
			success: function (response) {
				console.log(response),
				$('.send-mail form').trigger("reset"),
				$(".modal").modal("hide");	
				// window.location = 'thankyou'
			},
			

			error: function (response) {
				console.log(response);
			}
		});
	});
    switchDiv();
    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");

    $('[href="#"],[href=""]').attr("href", "javascript:;");

    var len = $('.menu > li'), str;
    $(".menu-Bar").click(function () {
        $(this).toggleClass("open");
        $(".menuWrap").toggleClass("open");
        $("body").toggleClass("ovr-hiddn");
        for (var i = 1; i < len.length; i++) {
            str = (300 + 100 * (i - 1)) + "ms";
            len.eq(i).css('animation-delay', str)
        }
    });

    $(".loginUp").click(function () {
        $(".LoginPopup").fadeIn();
        $(".overlay").fadeIn();
    });

    $(".signUp").click(function () {
        $(".signUpPop").fadeIn();
        $(".overlay").fadeIn();
    });

    $(".closePop,.overlay").click(function () {
        $(".popupMain").fadeOut();
        $(".overlay").fadeOut();
    });

    $(".menu .menu-item-has-children").addClass("dropdown-nav ");
    $(".menu .menu-item-has-children ul.sub-menu").addClass("dropdown");

    $('.dropdown-nav').prepend('<span class="toggle_submenu"><i class="fal fa-plus"></i></span>')

    $('.toggle_submenu').click(function () {
        $('ul.dropdown').slideUp();
        $('.toggle_submenu').removeClass('active')

        if ($(this).parent().find('ul.dropdown').is(':visible')) {
            $(this).removeClass('active')
            $(this).parent().find('ul.dropdown').slideUp();
        } else {
            $(this).addClass('active')
            $(this).parent().find('ul.dropdown').slideDown()
        }
    })

    // SearchBar
    $('.search_btn').click(function () {
        $('.backdrop').fadeIn()
        $('.search_bar').addClass('active')
    })

    $('.hideSerch,.backdrop').click(function () {
        $('.search_bar').removeClass('active')
        $('.backdrop').fadeOut()
    })

    /* Tabbing Function */
    $("[data-targetit]").on("click", function (e) {
        $(this).addClass("active");
        $('.prod_col').removeClass('animate__zoomIn');
        $(this)
            .siblings()
            .removeClass("active");
        var target = $(this).data("targetit");
        $("." + target)
            .siblings('[class^="box-"]')
            .hide();
        $("." + target).show();
        $("." + target).find('.prod_col').addClass('animate__zoomIn');
        $(".tabViewList").slick("setPosition", 0);
    });

    // Accordian
    $(".accordions .acc_title").click(function () {
        $('.accordions li').removeClass('active')
        $('.acc_desc').slideUp();
        $(this).parent('li').addClass('active')
        if (!$(this).next('.acc_desc').is(':visible')) {
            $(this).next('.acc_desc').slideDown();
        } else {
            $('.accordions li').removeClass('active')
        }
    });

    $(".searchBtn").click(function () {
        $(".searchWrap").addClass("active");
        $(".overlay").fadeIn("active");
        $(".searchWrap input").focus();
        $(".searchWrap input").focusout(function (e) {
            $(this)
                .parents()
                .removeClass("active");
            $(".overlay").fadeOut("active");
            $("body").removeClass("ovr-hiddn");
        });
    });

    $(".testimonial-slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autolplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $(".logos_slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autolplaySpeed: 100,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
	
	
	
	
	
	// $('.individual').click(function () {
	// 	if ($(this).attr("value") == "individual") {
	// 		$(".ind_own_fld").show();    
	// 		$(".org_own_fld").hide();    
	// 		$(".org_own_fld input,.org_own_fld select").attr("required", false); 
	// 		$(".ind_own_fld input,.ind_own_fld select").attr("required", true); 
	
	// 	} 
	// });
	// $('.organization').click(function () {
	// 	console.log("Org")
	// 	if ($(this).attr("value") == "organization") {
	// 		$(".ind_own_fld").hide();    
	// 		$(".org_own_fld").show();    
	// 		$(".org_own_fld input,.org_own_fld select").attr("required", true); 
	// 		$(".ind_own_fld input,.ind_own_fld select").attr("required", false); 
	
	// 	}
	// 	var organizations = $('input[name="own_formation"]').val();
	// 	if(organizations == 'non us based'){
	// 		$('.st_formation').hide();
	// 		$('.ct_formation').show();
	// 		$(".ct_formation select").attr("required", true); 
	// 		$(".st_formation select").attr("required", false); 
			
	// 	}else if(organizations == 'us based'){
	// 		$('.ct_formation').hide();
	// 		$('.st_formation').show();
	// 		$(".ct_formation select").attr("required", false); 
	// 		$(".st_formation select").attr("required", true); 
	// 	}
	// });
	// $('.organizationz').click(function () {
	// 	console.log("Org")
		
	// 	if($(this).attr("value") == 'non us based'){
	// 		$('.st_formation').hide();
	// 		$('.ct_formation').show();
	// 		$(".ct_formation select").attr("required", true); 
	// 		$(".st_formation select").attr("required", false); 
			
	// 	}else if($(this).attr("value") == 'us based'){
	// 		$('.ct_formation').hide();
	// 		$(".ct_formation select").attr("required", false); 
	// 		$(".st_formation select").attr("required", true); 
	// 		$('.st_formation').show();
	// 	}
	// });
	
	
	
	
	
	// // TRADEMARK

	// $('.tdname_check').click(function () {
	// 	if ($(this).attr("value") == "tdname") {
	// 		$(".tdname_fld").show();
	// 		$(".tdlogo_fld").hide();
	// 		$(".tdslogan_fld").hide();
	// 				$(".variety_field").hide();
	// 		$(".logo_name").hide();
	// 		$(".vc_color").hide();
	// 		$(".variety_field_label").hide();
	// 	}  
	// });
	
	
	
	// $('.tdslogan_check').click(function () {
	// 	if ($(this).attr("value") == "tdslogan") {
	// 		$(".tdslogan_fld").show();
	// 		$(".tdname_fld").hide();
	// 		$(".tdlogo_fld").hide();
	// 		$(".variety_field").hide();
	// 		$(".logo_name").hide();
	// 		$(".vc_color").hide();
	// 		$(".variety_field_label").hide();
	// 	}  
	// });
	// $('.v_color_yes').click(function () {
	// 	if ($(this).attr("value") == "v_color_yes") {
	// 		$(".logo_name").show();
	// 		$(".variety_field").hide(); 
	// 	}  
	// });
	
	// $('.v_color_no').click(function () {
	// 	if ($(this).attr("value") == "v_color_no") {
	// 		$(".logo_name").show();
	// 		$(".variety_field").show(); 
	// 	}  
	// });
	
	
	
	// $('.tdlogo_check').click(function () {
	// 	if ($(this).attr("value") == "tdlogo") {
	// 		$(".tdlogo_fld").show();
	// 		// $(".variety_field").show();
	// 		$(".logo_name").show();
	// 		$(".vc_color").show();
	// 		$(".tdslogan_fld").hide();
	// 		$(".tdname_fld").hide();
	// 		$(".variety_field_label").show();
	// 	} 
	// });
	// $('.markyes').click(function () {
	// 	if ($(this).attr("value") == "yes") {
	// 		$(".name_mark").show(); 
	// 		$(".markchecked_fld2").show(); 
	// 		$(".markchecked_fld2_opt").show(); 
	 
	// 	} 
	// }); 
	// $('.markno').click(function () {
	// 	if ($(this).attr("value") == "no") {
	// 		$(".name_mark").hide(); 
	// 		$(".markchecked_fld2").hide(); 
	// 		$(".markchecked_fld2_opt").hide();  
	// 		 $(".markchecked_fld2_opt2").hide();
	// 	} 
	// });
	// $('.markyes2').click(function () {
	// 	if ($(this).attr("value") == "yes") {
	// 		$(".markchecked_fld").show(); 
	// 		$(".markchecked_fld2").hide();
	// 		$(".markchecked_fld2_opt").hide();
			 
	// 	} 
	// });
	// $('.markyes4').click(function () {
	// 	if ($(this).attr("value") == "yes") {
	// 		$(".eng-translation").show();  
			 
	// 	} 
	// });
	 
	//  $('.markno4').click(function () {
	// 	if ($(this).attr("value") == "no") {
	// 		$(".eng-translation").hide();  
	// 		$(".eng-translation input").attr("required", false); 
			 
	// 	}else{
	// 		$(".eng-translation").show();  
	// 		$(".eng-translation input").attr("required", true); 
	// 	} 
	// });
	// $('.markno2').click(function () {
	// 	if ($(this).attr("value") == "no") {
	// 		$(".markchecked_fld").hide();  
	// 		// $(".name_mark").hide();  
	// 		$(".markchecked_fld2_opt").show(); 
	// 		$(".markchecked_fld2").show();
	// 	} 
	// });
	
	// $('.markyes3').click(function () {
	// 	if ($(this).attr("value") == "yes") {
	// 		// $(".phide").show();  
	// 		$(".markchecked_fld2_name_mark").show();  
	// 	} 
	// });
	// $('.markyes5').click(function () {
	// 	if ($(this).attr("value") == "yes") {
	// 		$(".first_use_any").show();    
	// 		$("#first_use_anywhere").show();    
	// 		$("#first_use_anywhere2").show();    
	// 		$(".first_use_com").show();   
	// 				$(".phide2").hide();  
	
	// 	} 
	// });
	
	// $('.markno3').click(function () {
	// 	if ($(this).attr("value") == "no") {
	// 		// $(".phide").hide();   
	// 		$(".markchecked_fld2_name_mark").hide(); 
	// 	} 
	// });
	
	
	// $('.markno4').click(function () {
	// 	if ($(this).attr("value") == "no") {
	// 		$(".eng-translation").hide();    
	// 		$(".eng-translation input").attr("required", false); 
			 
	// 	}else{
	// 		$(".eng-translation").show();  
	// 		$(".eng-translation input").attr("required", true); 
	// 	} 
	// });
	// $('.markno5').click(function () {
	// 	if ($(this).attr("value") == "no") {
	// 		$(".first_use_any").hide();    
	// 		$("#first_use_anywhere").hide();    
	// 		$("#first_use_anywhere2").hide();    
	// 		$(".first_use_com").hide();    
	// 		$(".phide2").show();    
	// 	} 
	// });


});

$(window).on("scroll touchmove", function () {
    $(".main-header").toggleClass("sticky", $(document).scrollTop() > $(window).height());
});


$(window).on("load", function () {
    var currentUrl = window.location.href.substr(
        window.location.href.lastIndexOf("/") + 1
    );
    $("ul.menu li a").each(function () {
        var hrefVal = $(this).attr("href");
        if (hrefVal == currentUrl) {
            $('ul.menu li').removeClass("active");
            $(this).removeClass("active");
            $(this)
                .closest("li")
                .addClass("active");
        }
    });
    $('.dropdown-nav li').each(function () {
        if ($(this).hasClass('active')) {
            $(this).parent().parent().addClass('active')
        }
    })
});

/* RESPONSIVE JS */
if ($(window).width() < 824) { }

function switchDiv() {
    var $window = $(window).outerWidth();
    if ($window <= 768) {
        $(".topAppendTxt").each(function () {
            var getdtd = $(this)
                .find(".cloneDiv")
                .clone(true);
            $(this)
                .find(".cloneDiv")
                .remove();
            $(this).append(getdtd);
        });
    }
}

function goToScroll(e) {
    $("html, body").animate({
        scrollTop: $("." + e).offset().top
    },
        1000
    );
}