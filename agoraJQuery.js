// This function automatically executes when a document is ready.
$(function() {
  // This will fetch all the devices and will populate the UI for every device. (Audio and Video)
  getDevices(function(devices) {
    devices.audios.forEach(function(audio) {
      $("<option/>", {
        value: audio.value,
        text: audio.name,
      }).appendTo("#microphoneId")
    })
    devices.videos.forEach(function(video) {
        $("<option/>", {
          value: video.value,
          text: video.name,
        }).appendTo("#cameraId")
      })
      // To populate UI with different camera resolutions
    resolutions.forEach(function(resolution) {
      $("<option/>", {
        value: resolution.value,
        text: resolution.name
      }).appendTo("#cameraResolution")
    })
    M.AutoInit()
  })

  var fields = ["appID", "channel"]

  // This will start the join functions with all the configuration selected by the user.
  $("#join").on("click", function(e) {
    console.log("join")
    e.preventDefault();
    var params = serializeformData(); // Data is feteched and serilized from the form element.
    if (validator(params, fields)) {
      join(rtc, params)
    }
  })

  // For Sharing Screen
  $("#share").on("click", function(e) {
      console.log("share")
      e.preventDefault();
      var params = serializeformData(); // Data is feteched and serilized from the form element.
      if (validator(params, fields)) {
        join(rtcScreen, params)
      }
    })
    // This publishes the video feed to Agora
  $("#publish").on("click", function(e) {
    console.log("publish")
    e.preventDefault()
    var params = serializeformData()
    if (validator(params, fields)) {
      publish(rtc)
    }
  });
  // Unpublishes the video feed from Agora
  $("#unpublish").on("click", function(e) {
    console.log("unpublish")
    e.preventDefault()
    var params = serializeformData()
    if (validator(params, fields)) {
      unpublish(rtc)
    }
  });
  // Leeaves the chanenl if someone clicks the leave button
  $("#leave").on("click", function(e) {
      console.log("leave")
      e.preventDefault()
      var params = serializeformData()
      if (validator(params, fields)) {
        leave(rtc)
      }
    })
    // Unshare screen
  $("#unshare").on("click", function(e) {
    console.log("leave")
    e.preventDefault()
    var params = serializeformData()
    if (validator(params, fields)) {
      leave(rtcScreen)
    }
  })
})