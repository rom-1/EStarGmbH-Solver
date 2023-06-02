// ==UserScript==
// @name         EstarGmbH Disable Wait Time
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Disables the wait time on every page
// @author       Martin J.
// @match        https://*.estargmbh.de/*
// @grant        none
// @require 	   http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==


$(document).ready(function() {

setTimeout(function() {
	$('#btnFragebogenForm').click()
	$('#btnNext').prop('disabled', false);
	$('#btnNext').html('<i class="fa fa-chevron-right fa-fw"></i>');
}, 500);

setTimeout(function() {
if ($("#btn").text()=='speichern') {
    $("#gelesen").click()
    $("#nonPrivateUse").attr('checked', true); // Fuer Betriebliche Kommunikationsmittel v1.1, Eintragen des Wertes #nonPrivateUse = keine private Nutzung, für Private Nutzung auf #privateUse aendern.
    setTimeout(function() {
        $("#btn").click()
        $('#btnNext').click()
    }, 600);
}else{
    $('#btnNext').click()
}
}, 600);

});
