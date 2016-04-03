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
      eventRender : scope.eventRender,
      eventNew: scope.eventNew,
      eventDrop: scope.eventDrop,
      eventResize: scope.eventResize,
      eventClick: scope.eventClick,
      eventMouseover: scope.eventMouseover,
      eventMouseout: scope.eventMouseout,
      noEvents: function() {
        console.log(calEvent);
      }
    });
      }
    };
  });
