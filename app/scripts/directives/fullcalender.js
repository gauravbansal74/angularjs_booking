'use strict';

/**
 * @ngdoc directive
 * @name workspaceApp.directive:fullCalender
 * @description
 * # fullCalender
 */
angular.module('workspaceApp')
  .directive('fullCalender', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
        console.log($);
        $(element).weekCalendar({
      timeslotsPerHour: 6,
      timeslotHeigh: 30,
      hourLine: true,
      data: scope.eventData,
      height: function($calendar) {
        return $(window).height() - $('h1').outerHeight(true);
      },
      eventRender : function(calEvent, $event) {
        if (calEvent.end.getTime() < new Date().getTime()) {
          $event.css('backgroundColor', '#aaa');
          $event.find('.time').css({'backgroundColor': '#999', 'border':'1px solid #888'});
        }
      },
      eventNew: function(calEvent, $event) {
        console.log(calEvent);        
      },
      eventDrop: function(calEvent, $event) {
        console.log(calEvent);
      },
      eventResize: function(calEvent, $event) {
        console.log(calEvent);
      },
      eventClick: function(calEvent, $event) {
        console.log(calEvent);
      },
      eventMouseover: function(calEvent, $event) {
       console.log(calEvent);
      },
      eventMouseout: function(calEvent, $event) {
        console.log(calEvent);
      },
      noEvents: function() {
        console.log(calEvent);
      }
    });
      }
    };
  });
