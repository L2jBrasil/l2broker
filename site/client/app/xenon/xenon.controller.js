'use strict';

(function() {

class XenonController {

  constructor($timeout) {
    $timeout(() => { jQuery('.page-loading-overlay').addClass('loaded'); }, 0);
    // this.$http = $http;
    // this.awesomeThings = [];

    // $http.get('/api/things').then(response => {
    //   this.awesomeThings = response.data;
    //   socket.syncUpdates('thing', this.awesomeThings);
    // });

    // $scope.$on('$destroy', function() {
    //   socket.unsyncUpdates('thing');
    // });
  }

  addThing() {
    // if (this.newThing) {
    //   this.$http.post('/api/things', { name: this.newThing });
    //   this.newThing = '';
    // }
  }

  deleteThing() {
    //this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('siteApp')
  .controller('XenonController', XenonController);

})();