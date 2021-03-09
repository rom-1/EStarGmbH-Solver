// ==UserScript==
// @name         EstarGmbH Solver
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Klickt nach �ffnen einer Aufgabe bis zu den L�sungen durch, die L�sungen werden automatisch ausgef�llt. Im Endeffekt brauch man nichts weiteres tun, als die Aufgabe zu starten.
// @author       Martin J.
// @match        https://*.estargmbh.de/admin/*
// @grant        none
// @require 	   http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==


$(document).ready(function() {

$("input[name^='denequa_']").each(function() {
	if($(this).attr('value')=='1'){
		$(this).prev('.inputCheckbox').attr('checked', true);
	}
});

setTimeout(function() {
	$('#btnFragebogenForm').click()
	$('#btnNext').prop('disabled', false);
	$('#btnNext').html('<i class="fa fa-chevron-right fa-fw"></i>');
}, 500);

setTimeout(function() {
if ($("#btn").text()=='speichern') {
    $("#gelesen").click()
    $("#nonPrivateUse").attr('checked', true); // F�r Betriebliche Kommunikationsmittel v1.1, Eintragen des Wertes #nonPrivateUse = keine private Nutzung, f�r Private Nutzung auf #privateUse �ndern.
    setTimeout(function() {
        $("#btn").click()
        $('#btnNext').click()
    }, 600);
}else{
    $('#btnNext').click()
}
}, 600);

});