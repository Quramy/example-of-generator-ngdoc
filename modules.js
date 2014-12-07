'use strict';

/**
 *
 * @ngdoc module
 * @name exampleOfGeneratorNgdoc
 * @module exampleOfGeneratorNgdoc
 * @packageName example-of-generator-ngdoc
 * @description
 * This is a sample module.
 *
 **/
angular.module('exampleOfGeneratorNgdoc', []);


'use strict';

/**
 *
 * @ngdoc directive
 * @module exampleOfGeneratorNgdoc
 * @name sampleElem
 * @restrict E
 * @description 
 * This is a sample directive.
 *
 * @example
    <example module="sampleElemExample" deps="" animate="false">
      <file name="index.html">
        <sample-elem></sample-elem>
      </file>
      <file name="main.js">
        angular.module('sampleElemExample', ['exampleOfGeneratorNgdoc']);
      </file>
    </example>
 *
 **/
angular.module('exampleOfGeneratorNgdoc').directive('sampleElem', function () {
  return {
    restrict: 'E',
    template: '<div class="sample-awesome">Hello, AngularJS directive!</div>'
  };
});

'use strict';

/**
 *
 * @ngdoc provider
 * @module exampleOfGeneratorNgdoc
 * @name sampleServiceProvider
 * @description
 *
 * This provider allows you to configure {@link sampleService sampleService}.
 *
 **/
angular.module('exampleOfGeneratorNgdoc').provider('sampleService', function () {
  var msg = 'Default message.';
  return {

    /**
     *
     * @ngdoc method
     * @name sampleServiceProvider#setMessaage
     * @param {String} message A message.
     * @description
     * Configure {@link sampleService sampleService} message.
     *
     **/
    setMessage: function (message) {
      msg = message;
    },

    /**
     *
     * @ngdoc service
     * @module exampleOfGeneratorNgdoc
     * @name sampleService
     * @description
     *
     * Sample service. It returns the message.
     *
     * @example
        <example module="sampleServiceExample" deps="">
          <file name="index.html">
            <div ng-controller="MainCtrl as main">
              Message: {{main.message}}
            </div>
          </file>
          <file name="main.js">
            angular.module('sampleServiceExample', ['exampleOfGeneratorNgdoc'])
              .config(function (sampleServiceProvider) {
                sampleServiceProvider.setMessage('Hello, AngularJS service!');
              })
              .controller('MainCtrl', function (sampleService) {
                this.message = sampleService.getMessage();
              });
          </file>
        </example>
     *
     **/
    $get: function () {
      return {
        /**
         * 
         * @ngdoc method
         * @name sampleService#get
         * @return {String} message
         * @description
         *
         * Get the message.
         **/
        getMessage: function () {
          return msg;
        }
      };
    }
  };
});