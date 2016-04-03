'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope) {
    var year = new Date().getFullYear();
        var month = new Date().getMonth();
        var day = new Date().getDate();
        $scope.eventData = {
          events : [
            {'id':1, 'start': new Date(year, month, day, 12), 'end': new Date(year, month, day, 13, 35),'title':'Lunch with Mike'},
            {'id':2, 'start': new Date(year, month, day, 14), 'end': new Date(year, month, day, 14, 45),'title':'Dev Meeting'},
            {'id':3, 'start': new Date(year, month, day + 1, 18), 'end': new Date(year, month, day + 1, 18, 45),'title':'Hair cut'},
            {'id':4, 'start': new Date(year, month, day - 1, 8), 'end': new Date(year, month, day - 1, 9, 30),'title':'Team breakfast'},
            {'id':5, 'start': new Date(year, month, day + 1, 14), 'end': new Date(year, month, day + 1, 15),'title':'Product showcase'}
          ]
        };
        
        $scope.eventRender = function(calEvent, $event) {
          if (calEvent.end.getTime() < new Date().getTime()) {
            $event.css('backgroundColor', '#aaa');
            $event.find('.time').css({'backgroundColor': '#999', 'border':'1px solid #888'});
          }
        };
        
        $scope.eventNew = function(calEvent, $event) {
          console.log(calEvent);        
        };
        
        $scope.eventDrop = function(calEvent, $event) {
          console.log(calEvent);        
        };
        
        $scope.eventResize = function(calEvent, $event) {
          console.log(calEvent);        
        };
        
        $scope.eventClick = function(calEvent, $event) {
          console.log(calEvent);        
        };
        
        $scope.eventMouseover = function(calEvent, $event) {
          console.log(calEvent);        
        };
        
        $scope.eventMouseout = function(calEvent, $event) {
          console.log(calEvent);        
        };
  });
