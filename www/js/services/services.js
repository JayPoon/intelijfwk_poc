/* JavaScript content from scripts/console/services/services.js in folder common */
define(['angular'], function (angular) {
    'use strict';
    //

    
     
     
     return angular.module($config.meta.ns.services, []).constant('ApiBase', '').constant('restful', true)

        .factory("$cordova", function ($rootScope, $document, $q) {
                
            var q = $q.defer();
//            $document.bind('deviceready', function () {
//              $rootScope.$apply(q.resolve());
//            });
                 
            document.addEventListener("deviceready", function () {
                    $rootScope.$apply(q.resolve())
             }, false);
            return {
              ready: function () {
                return q.promise
              }
            };
          })    

        /*
         * apiService
         * */
        .factory('apiService', ['$http', 'ApiBase', 'restful', function ($http, ApiBase, restful) {
            //将API $HTTP 请求包装成服务
            var API_BASE_URL = $config.base_url;

             /**  
             * 重写angular的param方法，使angular使用jquery一样的数据序列化方式  The workhorse; converts an object to x-www-form-urlencoded serialization.  
             * @param {Object} obj  
             * @return {String}  
             */  
            var param = function(obj) {
                var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
                  
                for(name in obj) {
                  value = obj[name];
                    
                  if(value instanceof Array) {
                    for(i=0; i<value.length; ++i) {
                      subValue = value[i];
                      fullSubName = name + '[' + i + ']';
                      innerObj = {};
                      innerObj[fullSubName] = subValue;
                      query += param(innerObj) + '&';
                    }
                  }
                  else if(value instanceof Object) {
                    for(subName in value) {
                      subValue = value[subName];
                      fullSubName = name + '[' + subName + ']';
                      innerObj = {};
                      innerObj[fullSubName] = subValue;
                      query += param(innerObj) + '&';
                    }
                  }
                  else if(value !== undefined && value !== null)
                    query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                }
                  
                return query.length ? query.substr(0, query.length - 1) : query;
              };


            var DoPost = function (apiPath, postData) {
                //angular post  方法封装
                return $http({
                    method: 'POST',
                    url: API_BASE_URL + apiPath,
                    data: postData,
                    transformRequest: function transform(data){
                        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data; 
                    },
                    headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}
                });
            };
            var DoPut = function (apiPath, postData) {
                //angular post  方法封装
                return $http({
                    method: 'PUT',
                    url: API_BASE_URL + apiPath,
                    data: postData,
                    transformRequest: function transform(data){
                        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data; 
                    },
                    headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}
                });
            };
            var DoDelete = function (apiPath, postData) {
                //angular post  方法封装
                return $http({
                    method: 'DELETE',
                    url: API_BASE_URL + apiPath,
                    params: postData
                    // params: postData,
                    // headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}
                });
            };
            var DoGet = function (apiPath, params) {
                //angular post  方法封装
                return $http({
                    method: 'GET',
                    url: API_BASE_URL + apiPath,
                    params: params
                    //params: params,
                    //headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}

                });
            };

            var handleSuccess = function(response){
                return response.data
            };

            var handleError = function(response){
                return response.data
            };

            return {
                Post: function (apiPath, postData) {
                    return DoPost(apiPath, postData).then(handleSuccess,handleError);
                },
                Get: function (apiPath, params) {
                    return DoGet(apiPath, params).then(handleSuccess,handleError);
                },
                Delete: function (apiPath, params) {
                    return DoDelete(apiPath, params).then(handleSuccess,handleError);
                },
                Put: function (apiPath, params) {
                    return DoPut(apiPath, params).then(handleSuccess,handleError);
                }
            }
        }])
   
});