// ==UserScript==
// @name PTS+
// @description Better PlanetTeamspeak
// @author Bluscream
// @version 1.0.3
// @encoding utf-8
// @icon https://www.planetteamspeak.com/wp-content/themes/planetteamspeak/favicon.ico
// @homepage https://r4p3.net
// @require https://raw.githubusercontent.com/meetselva/attrchange/master/js/attrchange.js
// @require https://raw.githubusercontent.com/brandonaaron/livequery/1.1.1/jquery.livequery.js
// @include *.planetteamspeak.com/*
// @grant unsafeWindow
// ==/UserScript==

/*jshint multistr: true */

var ts3server_link = "?nickname=TS%20User&addbookmark=test";
var pts_name = "[PTS+]";
var ts3server_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAADdUlEQVQ4jW1SW2xTBRj+z63nnN7v13Xr2VY6FheKwBSXDsZgwaiDFOeFjGhMeDExJkZe8JZgwoO3SGKMvoAxQmNgIgmXgJEwRtQt3TCQFqml3aXr1nZd7+ecnvac+sCqk/A9fX/yf/m+/4LAGnAcx5gOT28DQI5huFaSGjRJyWkMxxU8Ww7FouHxmiAI8AiwJvHt9n+K0oaRUi512dXqpAd379lCk3gmuRAfX05lNJu27nzfYnN2ZpYXgpIkiU0d2iSUyjJYr4tgYzZ9IJGmg3VE/uSB0bdOfnNqLPzd96ePGzXY2GwsEunfe/CiWmuw/y8BRckVns07vyjkMjEEoKbUO0dmJm98bXF09q4WBRrF5Xa/3/+K2aTLnw2c+mSLb38gvRg9X6tVWQwAgHF3D2iMzGvlYjaKAAi0Ut+NE7QruxQ9076hp4+r1qBU4aFve+9Wni3Fbt389VqX1/deIh4KoJ2eHt/rvr0/+2oZYCwtA4Vs8gbPllZohdaTTiXiGPZwykKJg2y+Aq+OvnG0tLp4vgGYXWu0P416rc53DvW00M/pMDCFJki1oWU4cufmuzxXWnW3OzHvRicQxMNdF0scqNQaTVf3E8/kMguXjFZmP5pdyXCxK1eAbDSgr4MBocrx6cVIQCajiL8iceDYQtFp062dGgMEQUCnNzjEGjdPK7RudHLu749PrrDJq2URThekdCz8x0eSKApVrhjW2rqOfHXisw9la0KTXgmiWIdkYmGWIGQySaqLOFvO3/shONHx493gBqHKRhuSxAIAYBhaT0Rv/7Tv+SFLNl8Bt8sMFElAcOr3e5H74Vvb+odfSibmQygAgCSJfJUr3/lPjKEqtd7DVfLXdwz5j9gtWjAbVLCUTJSPHzt6SEZScpONGckko+f+faT16OzyPlutiUbG1YpbjRpcKSdhJjg59+bh0V3zc/HpvoHhY/dD09e4SiGEPyrW6vTGjZt3nMgVWEmhULbMTE8tjZ098+31Xy5/LghCuX/whbcrfGPXg9Bv/Y8zB5yQKSi52kvIqDaSJCkEQRAAAKvN4dj38uFAT+/QJQwn9M1+pEmcbR1P0XKFbiW99Gchn0shCIDeYLS0Me5tJpvrxQpbbb09Nf5lMZe6sN4QWV+QtLLdbHVs1xvMDE4QKo5ludRy8kExl56oCfzs4xL/Azg6dhX/d2yIAAAAAElFTkSuQmCC";
//var $=jQuery.noConflict();

js_addItem = function(parent, html, before) {
    if(before){ jQuery(parent).before(html); }else{ jQuery(parent).after(html); }
};
js_insertItem = function(parent, html, prepend) {
    if(prepend){ jQuery(parent).prepend(html); }else{ jQuery(parent).append(html); }
};

//pts_listServers(servername, country, serverstatus, usersmin, usersmax, slotsmin, slotsmax, serverflagpw, serverflagcc, submit);
pts_listServers = function(servername, country, serverstatus, usersmin, usersmax, slotsmin, slotsmax, serverflagpw, serverflagcc, submit) {
    jQuery('.uk-search-field').val('');
    jQuery("input[data-uk-modal=\"{target:'#server_filter'}\"]").click();
    jQuery('select[name="serverflagcc"]').livequery(function(){
        /*if(purge){
            jQuery('input[name="servername"]').val('');
            jQuery('select[name="country"]').val('none');
            jQuery('select[name="serverstatus"]').val('none');
            jQuery('input[name="usersmin"]').val('');
            jQuery('input[name="usersmax"]').val('');
            jQuery('input[name="slotsmin"]').val('');
            jQuery('input[name="slotsmax"]').val('');
            jQuery('select[name="serverflagpw"]').val('none');
            jQuery('select[name="serverflagcc"]').val('none');
        }else{*/
            if(servername){jQuery('input[name="servername"]').val(servername);}
            if(country){jQuery('select[name="country"]').val(country);}
            if(serverstatus){jQuery('select[name="serverstatus"]').val(serverstatus);}
            if(usersmin){jQuery('input[name="usersmin"]').val(usersmin);}
            if(usersmax){jQuery('input[name="usersmax"]').val(usersmax);}
            if(slotsmin){jQuery('input[name="slotsmin"]').val(slotsmin);}
            if(slotsmax){jQuery('input[name="slotsmax"]').val(slotsmax);}
            if(serverflagpw){jQuery('select[name="serverflagpw"]').val(serverflagpw);}
            if(serverflagcc){jQuery('select[name="serverflagcc"]').val(serverflagcc);}
        //}
        if(submit){
            jQuery('form[action="//www.planetteamspeak.com/serverlist/result/"]>input[type="submit"]').click();
        }
    });
};
//pts_publicServers(country);
pts_publicServers = function(country) {
    if(country){
            pts_listServers('', country, '1', '1', '', '1', '', '0', '1', 1, 1);
    }else{
            pts_listServers('', 'none', '1', '1', '', '1', '', '0', '1', 1);
    }
};

(function() {
    'use strict';
    jQuery( document ).ready(function() {
        var $=jQuery.noConflict();
        jQuery('head').append('<link rel="stylesheet" href="https://rawgit.com/R4P3-NET/BetterPTS/master/css/main.css" type="text/css" />');
        jQuery('.tsicon-client_show').addClass('stylish_dontparse');
        jQuery('form[action="//www.planetteamspeak.com/serverlist/result/"]>fieldset>input[type="submit"]').after('&nbsp;&nbsp;<button id="public_servers_button" class="uk-button uk-button-success value="Public Servers">Public Servers</button>');
        jQuery('#public_servers_button').click(function(){ pts_publicServers(); });
        var str = jQuery('.uk-article-title').text();
        if (str.indexOf("Search Results") >= 0) {
            jQuery('a[href^="https://www.planetteamspeak.com/serverlist/result/server/ip/"]').each( function( index, element ){
                var href = jQuery(this).attr("href");var ip = href.substr(href.lastIndexOf('/') + 1);
                if(localStorage.getItem('ts3_link_params')){
                    jQuery(this).before('<a class="stylish_dontparse" title="'+ip+'" href="ts3server://'+ip+localStorage.getItem('ts3_link_params')+'"><img src="'+ts3server_icon+'"></a>&nbsp;&nbsp;&nbsp;');
                }else{
                    jQuery(this).before('<a class="stylish_dontparse" title="'+ip+'" href="ts3server://'+ip+'"><img src="'+ts3server_icon+'"></a>&nbsp;&nbsp;&nbsp;');
                }
            });
        }
        jQuery('#server_filter>div>form>.uk-button.uk-button-primary').after('&nbsp;&nbsp;&nbsp;<a href="#" id="ts3_link_params_button" class="uk-button uk-button-primary">Advanced Link Parameters</a>');
        jQuery('#ts3_link_params_button').click(function(){
            var params = prompt("Please enter a parameter.", "?nickname=UserNickname&password=serverPassword&channel=MyDefaultChannel&cid=channelID&channelpassword=defaultChannelPassword&token=TokenKey&addbookmark=MyBookMarkLabel");
            if (params) { localStorage.setItem('ts3_link_params', params); console.log('Set advanced ts3server:// link parameters to: "'+localStorage.getItem('ts3_link_params')+'"'); }else{ localStorage.setItem('ts3_link_params', params); console.log('Cleared advanced ts3server:// link parameters.'); }
            history.go();
        });
        /*jQuery('pre[class="de1"]').each( function( index, element ){
            var text = $(element).text();
            console.log(text);
            var match = text.substr(text.indexOf(' ')+1);
            console.log(match);
            jQuery('pre[class="de1"]').wrap('<a href="'+match+'"></a>');
        });*/
        console.log(pts_name+' loaded...');
    });
})();
