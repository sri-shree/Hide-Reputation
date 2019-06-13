// ==UserScript==
// @name         Hide Reputation.
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide Reputation. 
// @author       Shree (https://stackoverflow.com/users/965146/shree)
// @match        *://*.stackoverflow.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let $rep = $('.-item').eq(1);
    $rep.css({'opacity': '0'});
    $rep.mouseenter(function() {
        $(this).css("opacity", "1");
    }).mouseleave(function() {
        $(this).css("opacity", "0");
    });
})();
