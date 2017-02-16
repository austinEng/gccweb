angular.module('gccweb')
  .controller("mainAnnouncementsController", function($scope, MainAnnouncement) {
    $scope.ma = MainAnnouncement.query();
    console.log($scope.ma);
  })
  .controller("smallAnnouncementsController", function($scope, SmallAnnouncement) {
    $scope.sa = SmallAnnouncement.query();
  })
  .controller("memoryVerseController", function($scope, MemoryVerse) {
    var mvList = MemoryVerse.query(function () {
      $scope.mv = mvList[0];
      console.log($scope.mv);
    });
  });
