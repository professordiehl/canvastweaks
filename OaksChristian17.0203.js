$.ajaxSetup({
cache: true
});




/*  Help Ticket Updates
// Created by Jason Diehl for Oaks Christian School
*/
$(document).ready(function(){
  var sp = $('#login_form label[for=pseudonym_session_unique_id]>span');
  sp.text('Username');
});


function fixForm(){

  var $form = $('#create_ticket');
 //H4 Heading Label
  $form.find('h4')
  .css("font-size", "14px")
  .css("font-weight", "bold")
  .text('Ticketing is open 24 hours a day, 7 days a week.')
  //Alert Text
  $form.find('div[class="alert"]')
  .css("font-size", "13px")
  .css("padding", "1px")
   	.text('Support staff hours are Monday-Friday, 8:00am-5:00pm PST, except for Holiday closings and extended hours during the start and end of semesters.')
	.append('<br><p>After submitting the ticket, please check the email listed for Oaks Christian School for your response. You can check on the status of your ticket at the <a href="https://help.instructure.com/tickets" target="_blank" style="font-weight:bold;">Help Center</a></p>')
	
   /* Label Text for Subject */
  $form.find('label[for="error_subject"]')
  .css("top-margin", "1px")
  .css("font-size", "14px")
  .css("font-weight", "bold")
       .text('Course Name, Module, and Assignment Affected')
       .append('<small style="color:red;">*required</small>')
  /*Label Text for Comments */
  $form.find('input')	
   .css({
	 height : '20px',
   })
  $form.find('label[for="error-comments"]')
  .css("font-size", "14px")
  .css("font-weight", "bold")
       .text('Please provide a detailed description of your issue.')
	   .append('<small style="color:red;">*required.</small>')
   $form.find('textarea')
   .css({
	 height : '82px',  
   })
  /* Label Text for Severity */
   $form.find('label[for="severity"]')
  .css("font-size", "14px")
  .css("font-weight", "bold")
  .text('How is this affecting you?')
 }
/* Help Ticket Event Listener */
$(document).on('click', '#help-dialog-options a[href="#create_ticket"]', function() { setTimeout(fixForm, 1); })


// ==UserScript==
// @name        View All Grades for a Student
//  Adapted from James Jones' Canvancement Tools
//  Canvancement Tools can be found at https://github.com/jamesjonesmath/canvancement/
// ==/UserScript==
var regex = new RegExp('/users/([0-9]+)$');
var matches = regex.exec(document.location);
if (matches) {
  if ($('#jj_allgrades').length == 0) {
    var url = '/users/' + matches[1] + '/grades';
    $('#right-side').append('<a id="jj_allgrades" class="btn button-sidebar-wide" href="' + url + '"><i class="icon-gradebook"></i> View Grades for Student</a>');
  }
}
// ==UserScript==
// @name        Add Name to Grades page
//  Adapted from James Jones' Canvancement Tools
//  Canvancement Tools can be found at https://github.com/jamesjonesmath/canvancement/
// ==/UserScript==
var includeSisId = true;
var nameOrder = [
  'short_name',
  'name',
  'sortable_name'
];
var addNameRegex = new RegExp('/users/([0-9]+)/grades$');
var addNameMatches = addNameRegex.exec(document.location);
if (addNameMatches) {
	$('div#right-side-wrapper').show(); 
	$('#right-side').append('<h3>Grading Scheme</h3> <table border="0" class="ic-Table ic-Table--hover-row ic-Table--striped"> <tbody> <tr> <th scope="col">Name</th> <th scope="col">Range</th> <th scope="col">&nbsp;</th> </tr><tr> <td>A</td><td>100%</td><td>to 93%</td></tr><tr> <td>A-</td><td>< 93%</td><td>to 90%</td></tr><tr> <td>B+</td><td>< 90%</td><td>to 87%</td></tr><tr> <td>B</td><td>< 87%</td><td>to 83%</td></tr><tr> <td>B-</td><td>< 83%</td><td>to 80%</td></tr><tr> <td>C+</td><td>< 80%</td><td>to 77%</td></tr><tr> <td>C</td><td>< 77%</td><td>to 73%</td></tr><tr> <td>C-</td><td>< 73%</td><td>to 70%</td></tr><tr> <td>D+</td><td>< 70%</td><td>to 67%</td></tr><tr> <td>D</td><td>< 67%</td><td>to 63%</td></tr><tr> <td>D-</td><td>< 63%</td><td>to 60%</td></tr><tr> <td>F</td><td>< 60%</td><td>to 0%</td></tr></tbody></table>');
   $.getJSON('/api/v1/users/' + addNameMatches[1], function (data) {
    var name;
    for (var i = 0; i < nameOrder.length; i++) {
      var key = nameOrder[i];
      if (typeof data[key] !== 'undefined' && data[key]) {
        name = data[key];
        break;
      }
    }
    if (includeSisId && typeof data.sis_user_id !== 'undefined' && data.sis_user_id) {
      name += ' (' + data.sis_user_id + ')';
    }
    console.log(name);
    if (typeof name !== 'undefined') {
      $('h2:contains("Courses ")').text(name);
    }
  });
}

var speedGraderHide = new RegExp('/courses/([0-9]+)/gradebook');
var speedGradeVanishHowTo = speedGraderHide.exec(document.location);
if (speedGradeVanishHowTo) {
	$('.al-dropdown_container').remove();
}

var gradesPages = new RegExp('/grades$');
var addGradeLedger = gradesPages.exec(document.location);
if (addGradeLedger) {
	$('div#right-side-wrapper').show(); 
	$('#right-side').append('<h3>Grading Scheme</h3> <table border="0" class="ic-Table ic-Table--hover-row ic-Table--striped"> <tbody> <tr> <th scope="col">Name</th> <th scope="col">Range</th> <th scope="col">&nbsp;</th> </tr><tr> <td>A</td><td>100%</td><td>to 93%</td></tr><tr> <td>A-</td><td>< 93%</td><td>to 90%</td></tr><tr> <td>B+</td><td>< 90%</td><td>to 87%</td></tr><tr> <td>B</td><td>< 87%</td><td>to 83%</td></tr><tr> <td>B-</td><td>< 83%</td><td>to 80%</td></tr><tr> <td>C+</td><td>< 80%</td><td>to 77%</td></tr><tr> <td>C</td><td>< 77%</td><td>to 73%</td></tr><tr> <td>C-</td><td>< 73%</td><td>to 70%</td></tr><tr> <td>D+</td><td>< 70%</td><td>to 67%</td></tr><tr> <td>D</td><td>< 67%</td><td>to 63%</td></tr><tr> <td>D-</td><td>< 63%</td><td>to 60%</td></tr><tr> <td>F</td><td>< 60%</td><td>to 0%</td></tr></tbody></table>');
}
/* 
// Add Student Grading Scheme to Individual Course Grades
*/
$('#student-grades-right-content').css("display", "inline-block").append('<div id="GradeWidget-grades-note"><h3>Grading Notes</h3><p>The total grade is not necessarily a predictor of an end of term grade, rather it is a snapshot of current progress. For example, prior to large assignments (test, projects, papers) being graded, smaller assignments heavily influence the overall grade. </p><p>Students and parents are urged to speak with your Teacher if you have questions about your grades.</p><ul id="GradeWidget-grades-notes-list"><li><img alt="Complete" class="graded_icon" src="/images/pass.png"> Assignment is turned in.</li><li>"-" Assignment has not been logged or is missing. </li><li><span class="icon-check-plus standalone-icon">An assignment has been graded.</span></li><li><span class="icon-discussion standalone-icon">A graded assignment has a comment from the teacher.<span></li><li><span alt="Digial File Submitted" class="submission_icon icon-document"> A digital file was submitted and grades are pending.</span></li><li><span alt="Rubric" class="icon-rubric" style="color:#008EE2;"> </span>This assignment was graded with a Rubric.</li><li><img alt="See Turnitin Results" src="https://du11hjcvx0uqb.cloudfront.net/dist/images/turnitin_acceptable_score-c89bd64eea.png"> This assignment has a Turnitin Score.</li></ul> </div>');

/* 
// Add Observer Grading Scheme
*/
$('#observer-grades-right-content').css("display", "inline-block").append('<div id="GradeWidget-grades-note"><h3>Grading Notes</h3><p>The total grade is not necessarily a predictor of an end of term grade, rather it is a snapshot of current progress. For example, prior to large assignments (test, projects, papers) being graded, smaller assignments heavily influence the overall grade. </p><p>Students and parents are urged to speak with your Teacher if you have questions about your grades.</p><ul id="GradeWidget-grades-notes-list"><li><img alt="Complete" class="graded_icon" src="/images/pass.png"> Assignment is turned in.</li><li>"-" Assignment has not been logged or is missing. </li><li><span class="icon-check-plus standalone-icon">An assignment has been graded.</span></li><li><span class="icon-discussion standalone-icon">A graded assignment has a comment from the teacher.<span></li><li><span alt="Digial File Submitted" class="submission_icon icon-document"> A digital file was submitted and grades are pending.</span></li><li><span alt="Rubric" class="icon-rubric"> This assignment was graded with a Rubric.</span></li></ul> </div>');
/* 
/* 
// Adding Grade Rounding on Student/Observer Pages and Invidual Course Grades
*/

$(function () {

    const APPLY_DELAY = 1000;

    const GRADING_SCALE = {
        92.5: "A",
        89.5: "A-",
        86.5: "B+",
        82.5: "B",
        79.5: "B-",
        76.5: "C+",
        72.5: "C",
        69.5: "C-",
        66.5: "D+",
		62.5: "D",
        60: "D-",
        0: "F"
    };

    function applyWithTimeout(callback) {
        setTimeout(function () {
            callback.call();
        }, APPLY_DELAY);
    }

    $('#grade_entry').blur(function () {
        applyWithTimeout(function(){applyChangesToGradeBook()});
    });

    $('.revert_score_link').click(function(){
        applyWithTimeout(function(){applyChangesToGradeBook()});
    });

    function getFixedPercent(string){
        if(string){
            var percentValuePattern = /([0-9]*[.]?[0-9]+).*/;
            var matches = percentValuePattern.exec(string.trim());
            if(matches && matches[1]){
                return Math.round(matches[1]);
            }
        }
        return null;
    }

    function applyChangesToGradeBook() {
        $('.group_total').each(function () {
            var title = $(this).find('.title').html();
            if (title) {
                var percentElement = $(this).find('.grade');
                var fixedPercent = getFixedPercent($(percentElement).html());
                if(fixedPercent){
                    $(percentElement).html(fixedPercent + "%");
                }
            }
        });

        var finalGradeElement = $('.final_grade').find('.grade');
        if(finalGradeElement.length > 0){
            var finalPercent = getFixedPercent($(finalGradeElement).html());
            if(finalPercent){
                $(finalGradeElement).html(finalPercent + "%");
                var finalGradePercentage = $('#final_letter_grade_text');
                if(finalGradePercentage.length > 0){
                    $(finalGradePercentage).html(getLetterGrade(finalPercent));
                }
            }
        }
    }

    function getLetterGrade(percentage){
        var maxPercentage = 0;
        for(var key in GRADING_SCALE){
            var index = parseFloat(key);
            if (percentage >= index && index >= parseFloat(maxPercentage)){
                maxPercentage = key;
            }
        }
        return GRADING_SCALE[maxPercentage];
    }

    function applyChangesToCourseList(){
        $('.course_details.student_grades').find('.percent').each(function(){
            var percent = getFixedPercent($(this).html());
            if(percent != null){
                $(this).html(percent + "%");
            }
        });
    }
	function applyChangesToObserverCourseList(){
        $('.course_details.observer_grades').find('.percent').each(function(){
            var percent = getFixedPercent($(this).html());
            if(percent != null){
                $(this).html(percent + "%");
            }
        });
    }

    applyWithTimeout(function(){applyChangesToGradeBook()});
    applyWithTimeout(function(){applyChangesToCourseList()});
	applyWithTimeout(function(){applyChangesToObserverCourseList()});

});


/*jslint browser: true, sloppy: false, eqeq: false, vars: false, maxerr: 50, indent: 4, plusplus: true */
/*global $, jQuery, alert, console, tinyMCE */

// These tools were designed to facilitate rapid course development in the Canvas LMS
// Copyright (C) 2014  Kenneth Larsen - Center for Innovative Design and Instruction
// Utah State University

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
// http://www.gnu.org/licenses/agpl-3.0.html

////////////////////////////////////////////////////
// KENNETHWARE CONFIG                             //
////////////////////////////////////////////////////


// Development version will be loaded in the following courses
var iframeID,
    // Path to where the canvasCustomTools folder is located
    klToolsPath = 'https://canvastools.oakschristian.org/course_design_tools/',
    // Path to the tools_variables file
    klToolsVariablesFile = klToolsPath + 'js/tools_variables.js',
    // Path to additional_customization file
    klToolsAdditionalCustomizationFile = klToolsPath + 'js/additional_customization.js',
    // To utilize the features that pull from the Canvas api you will need the hosted php files put their path here
    klApiToolsPath = klToolsPath + 'api/',
    // Path to institutional css file
    klGlobalCSSFile = 'https://canvastools.oakschristian.org/course_design_tools/canvasGlobal.css',
    klFontAwesomePath = '//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css',
    coursenum;

function klGetCourseNum() {
    'use strict';
    var matches, killspot;
    // Parse Course Number - It is stored in the variable "coursenum"
    coursenum = null;
    matches = location.pathname.match(/\/courses\/(.*)/);
    if (matches) {
        coursenum = matches[1];
        killspot = coursenum.indexOf("/", 0);
        if (killspot >= 0) {
            coursenum = coursenum.slice(0, killspot);
        }
    }
}
klGetCourseNum();


// Pull in custom variables
$.getScript(klToolsVariablesFile, function () {
    'use strict';
    console.log("tools_variables.js loaded");
    // Additional Customization
    $.getScript(klToolsAdditionalCustomizationFile, function () {
        console.log("additional_customization.js loaded");
        // Run code to initialize tools
        $.getScript(klToolsPath + "js/master_controls.js", function () {
            console.log("master_controls.js loaded");
        });
    });
});

////////////////////////////////////////////////////
// END KENNETHWARE CONFIG                         //
////////////////////////////////////////////////////

 
////// Course List Filter ////////
function courseListFilter() {
    'use strict';
    try {
        if ($('#my_courses_table').length > 0) {
            $("head").append($("<link/>", { rel: "stylesheet", href: klFontAwesomePath, type: 'text/css'}));
            var kl_course_filter = '<div id="kl_course_filter_wrapper"><label for="kl_course_filter">Filter by Term:</label> <select id="kl_course_filter"><option value="all">View All</option>',
                kl_course_terms = [],
                txt;
            $('td.course-list-term-column').each(function () {
                // Grab the text
                txt = $(this).text();
                // Add if not already in the array
                if ($.inArray(txt, kl_course_terms) === -1 ) {
                    kl_course_terms.push(txt);
                }
            });
            kl_course_terms.sort();

            $.each(kl_course_terms, function (index, el) {
                kl_course_filter += '<option value="' + el + '">' + el + '</option>';
            });
            kl_course_filter += '</select> <i class="fa fa-rocket kware" data-tooltip="top" title="USU Specific"></i></div>';
            $('#my_courses_table').before(kl_course_filter);
            $('#kl_course_filter').change(function () {
                var selectedTerm = $('#kl_course_filter option:selected').text();
                if (selectedTerm === 'View All') {
                    $('.course-list-table-row').show();
                } else {
                    $('.course-list-table-row').hide();
                    $('.course-list-term-column:contains("' + selectedTerm + '")').closest('tr').show();
                }

            });
        }
    } catch (err) {
        klFunctions.errorReport('Course List Filter', err);
    }
}

/////// Sortable Rubrics ////////
function sortableRubric() {
    'use strict';
    try {
        var buttons = '<div class="kl_rubric_controls">' +
        '<button class="Button Button--mini kl_move_row_up"><i class="icon-mini-arrow-up"></i><span class="screenreader-only">Move rubric up</span></button>' +
        '<button class="Button Button--mini kl_move_row_down"><i class="icon-mini-arrow-down"></i><span class="screenreader-only">Move rubric down</span></button>' +
            '</div>';
        $('.rubric_table tbody tr.criterion').each(function (){
            if ($(this).find('.kl_rubric_controls').length === 0) {
                $(this).find('td').first().prepend(buttons);
            }
        });

       $(".kl_move_row_up, .kl_move_row_down").unbind('click').click(function () {
          var $element = $(this);
          var row = $element.parents("tr:first");
          row.addClass('kl_moving');
          $(this).addClass('kl_set_focus');
          setTimeout(function () {
              if($element.hasClass('kl_move_row_up')){
                if (row.prev().hasClass('criterion')) {
                    row.insertBefore(row.prev());
                }
              } else{
                if (row.next().hasClass('criterion') && !row.next().hasClass('blank')) {
                    row.insertAfter(row.next());
                }
              }
              setTimeout(function () {
                $('.kl_set_focus').focus().removeClass('kl_set_focus');
                $('.kl_moving').removeClass('kl_moving');
              }, 300);
          }, 300);
        });
    } catch (err) {
        klFunctions.errorReport('Sortable Rubrics', err);
    }
}


/*jshint multistr: true */

/**
 *
 */
var H5P = H5P || (function () {
  var head = document.getElementsByTagName('head')[0];
  var contentId = 0;
  var contents = {};

  /**
   * Wraps multiple content between a prefix and a suffix.
   */
  var wrap = function (prefix, content, suffix) {
    var result = '';
    for (var i = 0; i < content.length; i++) {
      result += prefix + content[i] + suffix;
    }
    return result;
  };

  /**
   *
   */
  var loadContent = function (id, script) {
    var url = script.getAttribute('data-h5p');
    var data, callback = 'H5P' + id;

    // Prevent duplicate loading.
    script.removeAttribute('data-h5p');

    // Callback for when content data is loaded.
    window[callback] = function (content) {
      contents[id] = content;

      var iframe = document.createElement('iframe');
      var parent = script.parentNode;
      parent.insertBefore(iframe, script);

      iframe.id = 'h5p-iframe-' + id;
      iframe.style.display = 'block';
      iframe.style.width = '100%';
      iframe.style.height = '1px';
      iframe.style.border = 'none';
      iframe.style.zIndex = 101;
      iframe.style.top = 0;
      iframe.style.left = 0;
      iframe.className = 'h5p-iframe';
      iframe.setAttribute('frameBorder', '0');
      iframe.contentDocument.open();
      iframe.contentDocument.write('\
        <!doctype html><html class="h5p-iframe">\
        <head>\
          <script>\
            var H5PIntegration = window.parent.H5P.getIntegration(' + id + ');\
          </script>\
          ' + wrap('<link rel="stylesheet" href="', content.styles, '">') + '\
          ' + wrap('<script src="', content.scripts, '"></script>') + '\
        </head><body>\
          <div class="h5p-content" data-class="' + content.library + '" data-content-id="' + id + '"/>\
        </body></html>');
      iframe.contentDocument.close();
      iframe.contentDocument.documentElement.style.overflow = 'hidden';

      // Clean up
      parent.removeChild(script);
      head.removeChild(data);
      delete window[callback];
    };

    // Create data script
    data = document.createElement('script');
    data.src = url + (url.indexOf('?') === -1 ? '?' : '&') + 'callback=' + callback;
    head.appendChild(data);
  };

  /**
   * Go throught all script tags with the data-h5p attribute and load content.
   */
  function H5P() {
    var scripts = document.getElementsByTagName('script');
    var h5ps = []; // Use seperate array since scripts grow in size.
    for (var i = 0; i < scripts.length; i++) {
      var script = scripts[i];
      if (script.hasAttribute('data-h5p')) {
        h5ps.push(script);
      }
    }
    for (i = 0; i < h5ps.length; i++) {
      loadContent(contentId, h5ps[i]);
      contentId++;
    }
  }

  /**
   * Return integration object
   */
  H5P.getIntegration = function (id) {
    var content = contents[id];
    return {
      getJsonContent: function () {
        return content.params;
      },
      getContentPath: function () {
        return content.path + 'content/' + content.id + '/';
      },
      getFullscreen: function () {
        return content.fullscreen;
      },
      getLibraryPath: function (library) {
        return content.path + 'libraries/' + library;
      },
      getContentData: function () {
        return {
          library: content.library,
          jsonContent: content.params,
          fullScreen: content.fullscreen,
          exportUrl: content.exportUrl,
          embedCode: content.embedCode
        };
      },
      i18n: content.i18n,
      showH5PIconInActionBar: function () {
        // Always show H5P-icon when embedding
        return true;
      }
    };
  };

  // Detect if we support fullscreen, and what prefix to use.
  var fullScreenBrowserPrefix, safariBrowser;
  if (document.documentElement.requestFullScreen) {
    fullScreenBrowserPrefix = '';
  }
  else if (document.documentElement.webkitRequestFullScreen &&
      navigator.userAgent.indexOf('Android') === -1 // Skip Android
      ) {
    safariBrowser = navigator.userAgent.match(/Version\/(\d)/);
    safariBrowser = (safariBrowser === null ? 0 : parseInt(safariBrowser[1]));

    // Do not allow fullscreen for safari < 7.
    if (safariBrowser === 0 || safariBrowser > 6) {
      fullScreenBrowserPrefix = 'webkit';
    }
  }
  else if (document.documentElement.mozRequestFullScreen) {
    fullScreenBrowserPrefix = 'moz';
  }
  else if (document.documentElement.msRequestFullscreen) {
    fullScreenBrowserPrefix = 'ms';
  }

  /**
   * Enter fullscreen mode.
   */
  H5P.fullScreen = function ($element, instance, exitCallback, body) {
    var iframe = document.getElementById('h5p-iframe-' + $element.parent().data('content-id'));
    var $classes = $element.add(body);
    var $body = $classes.eq(1);

    /**
      * Prepare for resize by setting the correct styles.
      *
      * @param {String} classes CSS
      */
     var before = function (classes) {
       $classes.addClass(classes);
       iframe.style.height = '100%';
     };

     /**
      * Gets called when fullscreen mode has been entered.
      * Resizes and sets focus on content.
      */
     var entered = function () {
       // Do not rely on window resize events.
       instance.$.trigger('resize');
       instance.$.trigger('focus');
     };

     /**
      * Gets called when fullscreen mode has been exited.
      * Resizes and sets focus on content.
      *
      * @param {String} classes CSS
      */
     var done = function (classes) {
       H5P.isFullscreen = false;
       $classes.removeClass(classes);

       // Do not rely on window resize events.
       instance.$.trigger('resize');
       instance.$.trigger('focus');

       if (exitCallback !== undefined) {
         exitCallback();
       }
     };

    H5P.isFullscreen = true;
    if (fullScreenBrowserPrefix === undefined) {
      // Create semi fullscreen.

      before('h5p-semi-fullscreen');
      iframe.style.position = 'fixed';

      var $disable = $element.prepend('<a href="#" class="h5p-disable-fullscreen" title="Disable fullscreen"></a>').children(':first');
      var keyup, disableSemiFullscreen = function () {
        $disable.remove();
        $body.unbind('keyup', keyup);
        iframe.style.position = 'static';
        done('h5p-semi-fullscreen');
        return false;
      };
      keyup = function (event) {
        if (event.keyCode === 27) {
          disableSemiFullscreen();
        }
      };
      $disable.click(disableSemiFullscreen);
      $body.keyup(keyup); // TODO: Does not work with iframe's $!
      entered();
    }
    else {
      // Create real fullscreen.

      before('h5p-fullscreen');
      var first, eventName = (fullScreenBrowserPrefix === 'ms' ? 'MSFullscreenChange' : fullScreenBrowserPrefix + 'fullscreenchange');
      document.addEventListener(eventName, function () {
        if (first === undefined) {
          // We are entering fullscreen mode
          first = false;
          entered();
          return;
        }

        // We are exiting fullscreen
        done('h5p-fullscreen');
        document.removeEventListener(eventName, arguments.callee, false);
      });

      if (fullScreenBrowserPrefix === '') {
        iframe.requestFullScreen();
      }
      else {
        var method = (fullScreenBrowserPrefix === 'ms' ? 'msRequestFullscreen' : fullScreenBrowserPrefix + 'RequestFullScreen');
        var params = (fullScreenBrowserPrefix === 'webkit' && safariBrowser === 0 ? Element.ALLOW_KEYBOARD_INPUT : undefined);
        iframe[method](params);
      }
    }
  };

  return H5P;
})();

new H5P();
