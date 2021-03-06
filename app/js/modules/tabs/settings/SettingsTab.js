(function() {
  angular.module('app.modules.tabs.settings', ['app.modules.tabs.settings.controllers']).config(function($stateProvider) {
    return $stateProvider.state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'js/modules/tabs/settings/views/settings.html',
          controller: 'SettingsCtrl as vm'
        }
      }
    }).state('tab.account', {
      url: '/account',
      views: {
        'tab-settings': {
          templateUrl: 'js/modules/tabs/settings/views/account.html'
        }
      }
    }).state('tab.login', {
      url: '/login',
      views: {
        'tab-settings': {
          templateUrl: 'js/modules/states/login/views/login.html',
          controller: 'LoginCtrl as login'
        }
      }
    });
  });

}).call(this);
