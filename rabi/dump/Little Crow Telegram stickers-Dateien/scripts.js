
//ФУНКЦИИ КАБИНЕТА

//функция строит список любимых коллекций
function build_hearts_list() {
    //удаляем существующий список
    shortlist = $(".cabinet_section.hearts .collections_shortlist");
    lang = $("html").attr("lang");
    $(".collections_shortlist_item",shortlist).remove();
    //строим новый список
    likedCollections = Cookies.get("likedCollections");
    if (likedCollections!==undefined && likedCollections!=="" && likedCollections!=="[]") {
        likedCollections = JSON.parse(likedCollections);
        htmlstring = '';
        $.each(likedCollections,function(key,value){
            cid = value;
            value = value.split("___");
            //console.log(value);
            if (value[2]!==undefined && value[2]=="api") {
                var dirsuffix = value[0].substr(0, 1).toLowerCase();
                if (value[3]!==undefined && value[3]=="animated") {
                    var src = '/_data/stickers/'+dirsuffix+'/'+value[0]+'/'+value[0]+'_001.svg';
                } else {
                    var src = '/_data/stickers/'+dirsuffix+'/'+value[0]+'/'+value[0]+'_001.webp';
                }
            } else {
                var src = '/_data/stickers/'+value[0]+'/'+value[0]+'_001.png';
            }
            htmlstring+='<div class="collections_shortlist_item clickable_area"><div class="imageblock"><div class="image"><img src="'+src+'" alt=""></div></div><div class="textsblock"><div class="title"><a href="/'+lang+'/stickers/'+value[0]+'/">'+value[1]+'</a></div></div><div class="actions"><div class="action delete" data-cid="'+cid+'"><span class="i"><svg><use xlink:href="#delete"></use></svg></span></div></div></div>';
        })
        shortlist.prepend(htmlstring);
        $(".cabinet_section.hearts .cabinet_section_actions").show();
    } else {
        $(".cabinet_section.hearts .cabinet_section_actions").hide();
    }
}
//функция строит список избранных стикеров
function build_stars_list() {
    //удаляем существующий список
    stickerslist = $(".cabinet_section.stars .stickers_list");
    lang = $("html").attr("lang");
    $(".stickers_list_item",stickerslist).remove();
    //строим новый список
    favStickers = Cookies.get("favStickers");
    if (favStickers!==undefined && favStickers!=="" && favStickers!=="[]") {
        favStickers = JSON.parse(favStickers);
        htmlstring = '';
        $.each(favStickers,function(key,value){
            sid = value;
            value = value.split("___");
            //console.log(value);
            if (value[2]!==undefined && value[2]=="api") {
                var dirsuffix = value[0].substr(0, 1).toLowerCase();
                if (value[3]!==undefined && value[3]=="animated") {
                    var src = '/_data/stickers/'+dirsuffix+'/'+value[0]+'/'+value[1]+'.svg';
                } else {
                    var src = '/_data/stickers/'+dirsuffix+'/'+value[0]+'/'+value[1]+'.webp';
                }
            } else {
                var src = '/_data/stickers/'+value[0]+'/'+value[1]+'.png';
            }
            htmlstring+='<div class="stickers_list_item"><a href="/'+lang+'/stickers/'+value[0]+'/'+(value[1].substr(-3, 3))+'/"><img src="'+src+'" alt=""></a><div class="stickers_list_actions"><div class="action delete" data-sid="'+sid+'"><span class="i"><svg><use xlink:href="#delete"></use></svg></span></div><a class="action download" href="/save/file/stickers/'+value[0]+'/'+value[1]+'/"><span class="i"><svg><use xlink:href="#download"></use></svg></span></a></div></div>';
        })
        stickerslist.prepend(htmlstring);
        $(".cabinet_section.stars .cabinet_section_actions").show();
    } else {
        $(".cabinet_section.stars .cabinet_section_actions").hide();
    }
}


//функция добавляет коллекцию в список любимых
function activate_heart(cid) {
    likedCollections = Cookies.get("likedCollections");
    if (likedCollections==undefined) {
        likedCollections = new Array(cid);
        Cookies.set('likedCollections', JSON.stringify(likedCollections), {expires: 365});
    } else {
        likedCollections = JSON.parse(likedCollections);
        likedCollections.push(cid);
        Cookies.set('likedCollections', JSON.stringify(likedCollections), {expires: 365});
    }
    $("html").addClass("unseen_cabinet");
    //console.log(Cookies.get("likedCollections"));
}
//функция удаляет коллекцию из списка любимых
function disactivate_heart(cid) {
    likedCollections = Cookies.get("likedCollections");
    if (likedCollections!=undefined) {
        likedCollections = JSON.parse(likedCollections);
        new_likedCollections = new Array();
        $.each(likedCollections,function(key,value){
            if (value!=cid) {
                new_likedCollections.push(value);
            }
        })
        Cookies.set('likedCollections', JSON.stringify(new_likedCollections), {expires: 365});
        build_hearts_list();
    }
    //console.log(Cookies.get("likedCollections"));
}
//функция удаляет все коллекции из списка любимых (удаляет cookie)
function clear_hearts() {
    Cookies.remove("likedCollections");
    build_hearts_list();
    arrange_hearts();
    $(".cabinet_section.hearts .head .stat").html(0);
}
//функция расставляет статусы любимым коллекциям
function arrange_hearts() {
    likedCollections = Cookies.get("likedCollections");
    if (likedCollections!=undefined) {
        likedCollections = JSON.parse(likedCollections);
        $("[data-heart-state]").attr("data-heart-state","0");
        $.each(likedCollections,function(key,value){
            $("[data-heart-state][data-cid='"+value+"']").attr("data-heart-state","1");
        });
        $(".cabinet_section.hearts .head .stat").html(likedCollections.length);
    } else {
        $(".cabinet_section.hearts .head .stat").html(0);
    }
}

//функция добавляет стикер в избранные
function activate_star(sid) {
    favStickers = Cookies.get("favStickers");
    if (favStickers==undefined) {
        favStickers = new Array(sid);
        Cookies.set('favStickers', JSON.stringify(favStickers), {expires: 365});
    } else {
        favStickers = JSON.parse(favStickers);
        favStickers.push(sid);
        Cookies.set('favStickers', JSON.stringify(favStickers), {expires: 365});
    }
    $("html").addClass("unseen_cabinet");
    //console.log(Cookies.get("favStickers"));
}
//функция удаляет стикер из избранных
function disactivate_star(sid) {
    favStickers = Cookies.get("favStickers");
    if (favStickers!=undefined) {
        favStickers = JSON.parse(favStickers);
        new_favStickers = new Array();
        $.each(favStickers,function(key,value){
            if (value!=sid) {
                new_favStickers.push(value);
            }
        })
        Cookies.set('favStickers', JSON.stringify(new_favStickers), {expires: 365});
        build_stars_list();
    }
    //console.log(Cookies.get("favStickers"));
}
//функция удаляет все стикеры из списка избранных (удаляет cookie)
function clear_stars() {
    Cookies.remove("favStickers");
    build_stars_list();
    arrange_stars();
    $(".cabinet_section.stars .head .stat").html(0);
}
//функция расставляет звезды стикерам
function arrange_stars() {
    favStickers = Cookies.get("favStickers");
    if (favStickers!=undefined) {
        favStickers = JSON.parse(favStickers);
        $("[data-star-state]").attr("data-star-state","0");
        $.each(favStickers,function(key,value){
            $("[data-star-state][data-sid='"+value+"']").attr("data-star-state","1");
        });
        $(".cabinet_section.stars .head .stat").html(favStickers.length);
    } else {
        $(".cabinet_section.stars .head .stat").html(0);
    }
}   
//функция скачивания стикеров со звездами
function download_stars() {
    if (favStickers!=undefined) {
        $.ajax({
            type: 'POST',
            url: "/save/zip/stickers/",
            success: function(data) {
                $("#modal__download-stars .b").html(data);
            },
            error:  function(xhr, str){
                alert('Возникла ошибка: ' + xhr.responseCode);
            }
        });
        return false;
    }
}

//функция выводит небольшое сообщение в углу экрана
var lil_sysmsg = function(status,text){
  /* collect html from data */
  var html = "<div class='sysmsg lil_sysmsg "+status+"'><div>"+text+"</div></div>";
  /* create sysmsg container */
  if ($(".sysmsg_container").length<1) {
      $("body").append("<div class='sysmsg_container'></div>");
  }
  /* push message to container */
  $(".sysmsg_container").prepend(html);
  /* delete message in 5 seconds */
  var current_message = $(".sysmsg_container .sysmsg:eq(0)");
  var sto = setTimeout(function(){
      current_message.animate({opacity:0},500,function(){
          $(this).remove();
      })
  },2000);
}



//функция меняет настройку
function set_setting(setting_name,setting_value) {
    if (setting_name!=undefined && setting_value!=undefined) {
        settings = Cookies.get("settings");
        if (settings!=undefined && settings!="" && settings!="[]") {
            settings = JSON.parse(settings);
        } else {
            settings = {};
        }
        settings[setting_name] = setting_value;
        Cookies.set('settings', JSON.stringify(settings), {expires: 365});
        console.log(settings);
    }
}

//считаем нажатие по кнопке "Установить"
var install_collection = function() {
    jQuery.ajax({
        url: "install/",
    }).done(function( data ) {

    });
}


jQuery(document).ready(function($){

	//ГЛОБАЛЬНЫЕ СОБЫТИЯ И ФУНКЦИИ

    //добавляем класс при прокрутке страницы
    $(window).on("scroll resize",function(){
        if ($(window).scrollTop()>0) {
            $("html").addClass("scrolled_body");
        } else {
            $("html").removeClass("scrolled_body");
        }
    })
    //добавляем класс при загрузке страницы
	sto = setTimeout(function(){
        $("html").addClass("loaded_body");
        $(".logo .hide").animate({width:0},500,function(){
            $(".logo .show").fadeIn(500);
        });
    },1000);
    //скрываем блок ошибки, если он имеется
    if ($(".errorblock").length>0) {
        sto = setTimeout(function(){
            $(".errorblock").slideUp(1000);
        },2000);
    }
    //кликабельные зоны
    $(document).on("click",".clickable_area",function(a){
    	a.preventDefault();
        href = $("a:first-child",this).attr("href");
        location.href = href;
    })

    $(document).on("click",".bubbleTip",function(a){
        a.stopPropagation();
        $(this).fadeOut();
    })

    //НАВИГАЦИЯ

    //показываем/скрываем навигацию
    $(document).on("click",".navicon .i",function(){
        $("html").addClass("activated_nav");
    });
    $(document).on("click","nav .action.close .i",function(){
        $("html").removeClass("activated_nav");
    });
    //показываем/скрываем кабинет
    $(document).on("click",".cabinet .i",function(){
        $("html").addClass("activated_aside");
        $("html").removeClass("unseen_cabinet");
    });
    $(document).on("click","aside .action.close .i",function(){
        $("html").removeClass("activated_aside");
        //свернем также все активные секции кабинета
        $(".cabinet_section").removeClass("active");
        $(".cabinet_section .body").slideUp();
    });
    //при клике на оверлей, скрываем панели
    $(document).on("click",".holder .overlay",function(){
        $("html").removeClass("activated_nav activated_aside");
        //свернем также все активные секции кабинета
        $(".cabinet_section").removeClass("active");
        $(".cabinet_section .body").slideUp();
    });

    //управляем секциями кабинета
    $(document).on("click",".cabinet_section .head",function(){
        cursection = $(this).parents(".cabinet_section");
        if (!cursection.hasClass("active")) {
            cursection.siblings(".cabinet_section").removeClass("active");
            $(".body",cursection.siblings(".cabinet_section")).slideUp();
            cursection.addClass("active");
            $(".body",cursection).slideDown();
	        //секция "любимые коллекции" подгружает данные по ajax
            if (cursection.hasClass("hearts")) {
                build_hearts_list();
            }
	        //секция "избранные стикеры" подгружает данные по ajax
	        if (cursection.hasClass("stars")) {
	        	build_stars_list();
	        }
        } else {
            $(".cabinet_section").removeClass("active");
            $(".cabinet_section .body").slideUp();
        }
    })
    //удаляем любимые коллекции в кабинете
    $(document).on("click",".collections_shortlist .action.delete",function(a){
        a.stopPropagation();
        but = $(this)
        but.parents(".collections_shortlist_item").slideUp(500,function(){
            disactivate_heart(but.attr("data-cid"));
            arrange_hearts();
            $(this).remove();
        })
    })
    //удаляем все любимые коллекции в кабинете
    $(document).on("click",".cabinet_section.hearts .action.delete_all_collections",function(a){
        a.stopPropagation();
        clear_hearts();
        $(".cabinet_section.hearts .cabinet_section_actions").hide();
    })
    //удаляем избранные стикеры в кабинете
    $(document).on("click",".stickers_list .action.delete",function(a){
        a.stopPropagation();
        but = $(this);
        but.parents(".stickers_list_item").remove();
        disactivate_star(but.attr("data-sid"));
        arrange_stars();
    })
    //удаляем все избранные стикеры в кабинете
    $(document).on("click",".cabinet_section.stars .action.delete_all_stickers",function(a){
        a.stopPropagation();
        clear_stars();
        $(".cabinet_section.stars .cabinet_section_actions").hide();
    })
    //скачиваем все избранные стикеры в кабинете
    $(document).on("click",".cabinet_section.stars .action.download_all_stickers",function(a){
    	a.stopPropagation();
        download_stars();
    })


    //МОДАЛЬНЫЕ ОКНА

    //стандартное модальное окно
    $.fancybox.defaults.btnTpl = {
        smallBtn : '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg></button>'
    }
    $("[data-fancybox-modal]").fancybox({
        modal : false,// Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc        
        infobar : false,// Should display infobar (counter and arrows at the top)
        toolbar : false,// Should display toolbar (buttons at the top)
        autoFocus : false,
        smallBtn : true,
        hash : false, //false (off), null (on)
    });

    //ЛАЙКИ (HEARTS)

	arrange_hearts();
    //обработчик клика по сердцу
    $(document).on("click",".action.heart",function(a){
    	a.stopPropagation();
    	if ($(this).attr("data-heart-state")=="0") {
    		activate_heart($(this).attr("data-cid"));
    	} else {
    		disactivate_heart($(this).attr("data-cid"));
    	}
    	arrange_hearts();
    })

    //ЗВЕЗДЫ (STARS)

	arrange_stars();
    //обработчик клика по звезде
    $(document).on("click",".action.star",function(a){
    	a.stopPropagation();
    	if ($(this).attr("data-star-state")=="0") {
    		activate_star($(this).attr("data-sid"));
    	} else {
    		disactivate_star($(this).attr("data-sid"));
    	}
    	arrange_stars();
    })


    //КАРТОЧКИ КОЛЛЕКЦИЙ

    //показываем дополнительные категории
    $(document).on("click",".collections_list_item .textsblock .dir .dashed",function(a){
    	a.preventDefault();
    	a.stopPropagation();
    	$(this).parents(".dir").addClass("expanded");
    });
    //клик по ссылке категории не должен передаваться далее
    $(document).on("click",".collections_list_item .textsblock .dir a",function(a){
    	a.stopPropagation();
    })

    //КАРТОЧКИ СТИКЕРОВ


    // НАСТРОЙКИ

    //устанавливаем настройку
    $(document).on("click","[data-set-setting]",function(a){
        a.stopPropagation();
        setting_name = $(this).attr("data-set-setting");
        setting_value = $(this).attr("data-set-setting-value");
        if (setting_name!=undefined && setting_name!="" && setting_value!=undefined && setting_value!="") {
            set_setting(setting_name,setting_value);
            document.location.reload();
        }
    })

});

