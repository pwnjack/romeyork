!function(){for(var i,n=function(){},o=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],t=o.length,e=window.console=window.console||{};t--;)i=o[t],e[i]||(e[i]=n)}(),$(function(){"#clip"===location.hash?$("#Container").mixItUp({load:{filter:".clip"}}):"#adv"===location.hash?$("#Container").mixItUp({load:{filter:".adv"}}):"#live"===location.hash?$("#Container").mixItUp({load:{filter:".live"}}):"#other"===location.hash?$("#Container").mixItUp({load:{filter:".other"}}):$("#Container").mixItUp()}),$(document).ready(function(){$("#Container").magnificPopup({delegate:"a",type:"iframe",gallery:{enabled:!0}})}),$(window).scroll(function(){$(this).scrollTop()>=50?$("#backtotop").fadeIn(200):$("#backtotop").fadeOut(200)}),$("#backtotop").click(function(){$("body,html").animate({scrollTop:0},500)});var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};isMobile.any()||$(function(){$(".item img").addClass("bw")});