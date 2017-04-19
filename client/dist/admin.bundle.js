function ImagePreviewInputController(e,n,t){var r=this,o=n[0].querySelectorAll("input")[0],l=n[0].querySelectorAll("img")[0];o.addEventListener("change",function(e){var n=URL.createObjectURL(o.files[0]);l.setAttribute("src",n)}),r.$onChanges=function(e){e.item&&(o.value="",e.item.currentValue&&!e.item.currentValue.pic&&l.setAttribute("src",""))}}ImagePreviewInputController.$inject=["$scope","$element","$attrs"],angular.module("gccweb-admin",["ngRoute","ngResource"]).controller("documentController",["$scope",function(e){}]),angular.module("gccweb-admin").config(["$routeProvider","$locationProvider",function(e,n){n.hashPrefix(""),e.when("/",{templateUrl:"assets/templates/main.html"}).when("/mainAnnouncements",{templateUrl:"assets/templates/main.html",controller:"mainAnnouncementsController"}).when("/smallAnnouncements",{templateUrl:"assets/templates/main.html",controller:"smallAnnouncementsController"}).when("/memoryVerses",{templateUrl:"assets/templates/main.html",controller:"memoryVersesController"})}]),angular.module("gccweb-admin").component("imagePreviewInput",{templateUrl:"assets/templates/imagePreviewInput.html",controller:ImagePreviewInputController,bindings:{label:"@",item:"<",name:"@"}}),angular.module("gccweb-admin").controller("headerController",["$scope","$location",function(e,n){e.isActive=function(e){return e===n.path()}}]),angular.module("gccweb-admin").controller("mainAnnouncementsController",["$scope","MainAnnouncement",function(e,n){e.title="Main Announcements",e.route="mainAnnouncement",e.categories=["title","description"],e.data=n.query(),e.editForm="assets/templates/maForm.html",e.setItem=function(n){e.activeItem=n}}]),angular.module("gccweb-admin").controller("memoryVersesController",["$scope","MemoryVerse",function(e,n){e.title="Memory Verses",e.route="memoryVerse",e.categories=["reference","verse"],e.data=n.query(),e.editForm="assets/templates/mvForm.html",e.setItem=function(n){e.activeItem=n}}]),angular.module("gccweb-admin").controller("smallAnnouncementsController",["$scope","SmallAnnouncement",function(e,n){e.title="Small Announcements",e.route="smallAnnouncement",e.categories=["text"],e.data=n.query(),e.editForm="assets/templates/saForm.html",e.setItem=function(n){e.activeItem=n}}]),angular.module("gccweb-admin").directive("adminNav",function(){return{restrict:"E",templateUrl:"assets/templates/adminNav.html"}}),angular.module("gccweb-admin").factory("MainAnnouncement",["$resource",function(e){return e("/mainAnnouncement",{},{})}]).factory("SmallAnnouncement",["$resource",function(e){return e("/smallAnnouncement",{},{})}]).factory("MemoryVerse",["$resource",function(e){return e("/memoryVerse",{},{})}]);