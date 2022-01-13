
$(document).ready(function() {

  // Function for figuring out if browser is IE and tell use to not use it.
  $(function() {
    // if the browser is IE
    if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {

      // Shame them
      $("body").html("Internet Explorer is not supported, please use another browser.").css("color","black");
      return;

    }
  });

  // School change function that changes what is displayed
  function schoolChange() {

    // Set teacher to appropriate one
    teacher = (schoolID == "mes") ? "mes" : (schoolID == "as") ? "as" : (schoolID == "jes") ? "jes" : (schoolID == "wt") ? "wt" : "";

    // Set a school name by the schoolID
    let schoolName = (schoolID == "mes") ? "Minooka Elementary" : (schoolID == "as") ? "Aux Sable" : (schoolID == "jes") ? "Jones Elementary" : (schoolID == "wt") ? "Walnut Trails" : (schoolID == "mis") ? "Minooka Intermediate" : (schoolID == "mjhs") ? "Minooka Junior High" : "";

    let schoolDoc = (schoolID == "mes") ? "https://docs.google.com/document/d/e/2PACX-1vQoLcCl8COIocTzDzhe8MnCv5SFA3qqiICNlm1dpHS-V6l6DJN-11F5oP3I2AH8gPwynrgJmMzvy5bG/pub" : (schoolID == "as") ? "https://docs.google.com/document/d/e/2PACX-1vRm23ju4bZ1IfWzyJ1pvfAw_GRUqdCDgvNBUhQiaKTeP9rhFsrgHQLVv0NL52Mp3HI9HeNVK7EjTUzI/pub" : (schoolID == "jes") ? "https://docs.google.com/document/d/e/2PACX-1vTEjCfVxo3jX_EdajW_ECJr4zE4XHufEfzPsoEXz5AMS_Qu1qW6cNp6Cc8G4Q-rZKoFpJsMDfaN3CQ5/pub" : (schoolID == "wt") ? "https://docs.google.com/document/d/e/2PACX-1vR1JbeeG3I0qHqkC1WU4iecN2hwnj-vbBKsutXfq8-C0fw2ZIXj7RykSxXo9IhtBLOXKdzUs5RX4hXv/pub" : (schoolID == "mis") ? "https://docs.google.com/document/d/e/2PACX-1vRJR3Dmyv5I46KTDK-Vvn5dFK7PNVoBHwYV6b8sq-ukvFj3j7NM0K0mntvewyePKqqTU1jicskfiuXk/pub" : (schoolID == "mjhs") ? "https://docs.google.com/document/d/e/2PACX-1vSgWJtWk_QW_950jwcgmrsI1adwzi2_a70qygaosPiyW6e_dm5xRMVQmft65bm1hBwvd9iMiwUgAAsD/pub" : "";

    let jh_math = "https://docs.google.com/document/d/e/2PACX-1vT4qA6uqAwFD0M_yhIen5h15dw0Ph_YFIFWcOdQZOIOcYb0724rNCDQt4egHvjnMTnnW8qyk-xs9O99/pub",
        jh_fa = "https://docs.google.com/document/d/e/2PACX-1vQSZzu3I40TkXJHyE9VULSUaLMiatpxCe0b-PVCUCgYHZEL5jcw47nI20jKVhxYAJ14i4Upj14yf45g/pub",
        jh_science = "https://docs.google.com/document/d/e/2PACX-1vT_s4nGnHhbdK8oSR6ynmWBlkJRemTxp14MOS12GzHSCVB3gN-jkuzBt4a0zvJlx-17YUyLWw4Kcxjs/pub",
        jh_ss = "https://docs.google.com/document/d/e/2PACX-1vQm4P3AHM6YRxgaQFyOU1E3UCdOdQR9OsuoxFgnDWRZkxodVrym_vyMaeQCzJ0kSEoNxWqzPzahSOMu/pub",
        jh_la = "https://docs.google.com/document/d/e/2PACX-1vRXA-INVMnj_ockUcCVS-OueoKY00TSU7F420itlz_7EoAuiJXmisZmv1c0NegMEcTfSIqCxbmPB4dF/pub",
        jh_health = "https://docs.google.com/document/d/e/2PACX-1vT3CsCWhaiKYiwt4lcisWxMkCdxrtdyN_jC3Aprv_oHL96_pCvwIXnibqA1o8P4U2Klt3Xdh-lw8BIp/pub";

    // Fade out the default header, fade in the school header and bring in the schools button
    $(".default-header").fadeToggle(250);
    $(".school-header").delay(250).fadeIn(250).html(function() {
      if (teacher == ""){
        if (schoolID == "mjhs") {
          $(".school-header").css("grid-template-columns", "repeat(7, 1fr)");
          return "<h1 class='school-logo'>MJHS</h1><button class='dropdown school-subject' href=" + jh_math + ">Math</button><button class='dropdown school-subject' href=" + jh_ss + ">Social Studies</button><button class='dropdown school-subject' href=" + jh_science + ">Science</button><button class='dropdown school-subject' href=" + jh_fa + ">Fine Arts</button><button class='dropdown school-subject' href=" + jh_la + ">Language Arts</button><button class='dropdown school-subject' href=" + jh_health + ">Health</button>"
        } else {
          $(".school-header").css("grid-template-columns", "1fr 7fr");
          return "<button class='dropdown school-doc' href=" + schoolDoc + ">Teacher Links</button><h1 class='school-logo'>" + schoolName + "</h1><button class='teacher'></button>"
        }
      } else {
        $(".school-header").css("grid-template-columns", "1fr 6fr 1fr");
        return "<button class='dropdown school-doc' href=" + schoolDoc + ">Teacher Links</button><h1 class='school-logo'>" + schoolName + "</h1><button class='teacher'>Technology</button>"
      }
    } );  // Can change to either the variable teacher or just use technology
    $(".schools").delay(250).fadeToggle(250);
  }

  //Some variables and default settings
  let teacher = '';
  let iframe = $("#iframe");
  let schoolID = '';
  let focus = '';
  // $(".school-header").toggle();
  // $(".schools").toggle();
  // $(".teacher-frame").toggle();


  // Function that gets the ip and sets the school.
  $(function() {
    // json call to get public ip
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?", 
      function(json) {

        // function to get the inner ip
        function getUserIP(onNewIP) { // onNewIp - your listener function for new IPs
          // compatibility for firefox and chrome
          var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;

          var pc = new myPeerConnection({
                  iceServers: []
              }),
              noop = function() {},
              localIPs = {},
              ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;
      
          function iterateIP(ip) {
            if (!localIPs[ip]) onNewIP(ip);
            localIPs[ip] = true;
          }
      
          // create a bogus data channel
          var channel = pc.createDataChannel("");
      
          // create offer and set local description
          pc.createOffer().then(function(sdp) {
            sdp.sdp.split('\n').forEach(function(line) {
              if (line.indexOf('candidate') < 0) return;
              line.match(ipRegex).forEach(iterateIP);
            });
              
            pc.setLocalDescription(sdp, noop, noop);
          }).catch(function(reason) {
              // An error occurred, so handle the failure to connect
          });
      
          // listen for candidate events
          pc.onicecandidate = function(ice) {
            if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
            ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
          };
        }
      
        // Usage
      
        getUserIP(function(ip){

          // Sets both inner and outer IP
          const OUTER_IP = json.ip,
                INNER_IP = ip,

                // Regex for each school and outer IP
                // ([0-9]{1,3}(\.[0-9]{1,3}){2}(\.2[6-7]$))
                // ((50|12)(\.(207|233))(\.(255|117)(\.(26|33|82)$)))
                OUT_REGEX = /((50|12)(\.(207|233))(\.(255|117)(\.(26|33|82)$)))/g;
                MES_REGEX = /([0-9]{1,3}(\.[0-9]{0,2}(?:1))(\.[0-9]{1,3}){2})/g;
                MIS_REGEX = /([0-9]{1,3}(\.[0-9]{0,2}(?:2))(\.[0-9]{1,3}){2})/g;
                JH_REGEX = /([0-9]{1,3}(\.[0-9]{0,2}(?:3))(\.[0-9]{1,3}){2})/g;
                WT_REGEX = /([0-9]{1,3}(\.[0-9]{0,2}(?:4))(\.[0-9]{1,3}){2})/g;
                AUX_REGEX = /([0-9]{1,3}(\.[0-9]{0,2}(?:5))(\.[0-9]{1,3}){2})/g;
                JES_REGEX = /([0-9]{1,3}(\.[0-9]{0,2}(?:6))(\.[0-9]{1,3}){2})/g;

          // Do things about changing schools based on school stuff
          if (INNER_IP.match(MES_REGEX) && OUTER_IP.match(OUT_REGEX)) {
            
            schoolID = "mes";
            schoolChange();
            
          } else if (INNER_IP.match(MIS_REGEX) && OUTER_IP.match(OUT_REGEX)) {

            schoolID = 'mis';
            schoolChange();

          } else if (INNER_IP.match(JH_REGEX) && OUTER_IP.match(OUT_REGEX)) {

            schoolID = 'mjhs';
            schoolChange();

          } else if (INNER_IP.match(WT_REGEX) && OUTER_IP.match(OUT_REGEX)) {

            schoolID = 'wt';
            schoolChange();

          } else if (INNER_IP.match(AUX_REGEX) && OUTER_IP.match(OUT_REGEX)) {

            schoolID = 'as';
            schoolChange();

          } else if (INNER_IP.match(JES_REGEX) && OUTER_IP.match(OUT_REGEX)) {

            schoolID = 'jes';
            schoolChange();

          } else {

            return;

          }
        });
      } // end json callback
    ); // end call
  }) // end function

  // School link click
  $(".school-link").click(function(){

    // Change the ID and run the school change stuff
    schoolID = $(this).attr('id');
    schoolChange();
  });

  // Link that brings down Docs page
  $(document).on("click", ".teacher", function() {

    focus = $(this);

    // Check who the teacher is and set the src
    if (teacher == "as") {
      iframe.attr("src", "https://docs.google.com/document/d/e/2PACX-1vTQ-j-2RYW3ttsLsc-1mfGMgnlyOY1isNEBqjPUUTpt35yt3KWo3jE1q5HK0onnqRA91R_6_8r_CL6o/pub");
    } else if (teacher == "jes") {
      iframe.attr("src", "https://docs.google.com/document/d/e/2PACX-1vQOfXtCCRXylFmDnIwgXwryZn8TWoAPoxIzX087L9bl0p1AfxVoQq5vZrMF98see1DzwL6CLgZ5O5W3/pub");
    } else if (teacher == "mes") {
      iframe.attr("src", "https://docs.google.com/document/d/e/2PACX-1vTmNTDdvkNUzp_HpzVTm0NWrtXF9VtG7e7BgQX2Ig0PGaC__8y6_87rvK_-dnRsdlyEqxZxAK8uI0f3/pub");
    } else if (teacher == "wt") {
      iframe.attr("src", "https://docs.google.com/document/d/e/2PACX-1vQmOs9i-KaqVahIaYE3WgCdWR8XoNYHnlOPnT5U8aa4t-3WY6oYhhv4r9RmGAze_cdkuhZVUwKr7AOT/pub");
    }

    // Slide down the iframe and make sure the frame reloads
    $("#teacher-frame").slideDown();
    setTimeout(function() {iframe.attr("src", iframe.attr('src'));}, 100);
    setTimeout(function() {iframe.focus();}, 150);
  });

  // Link that pulls up that Docs page
  $(document).on("click", ".exit", function() {

    // Slide up the iframe
    $("#teacher-frame").slideUp();
    focus.focus();

  });

  // Link that rests everything to default
  $(".schools").click(function() {

    // Toggle and fade things that need to change
    $(".default-header").delay(250).fadeIn(250);
    $(".school-header").fadeToggle(250);
    $(".schools").fadeToggle(250);
    
  });

  // the tech link or possibly other stuff
  $(document).on("click", ".dropdown", function() {

    focus = $(this);

    // slide down the iframe and use the proper src
    $("#teacher-frame").slideDown();
    let newsrc = $(this).attr("href");
    iframe.attr('src', newsrc);
    setTimeout(function() {iframe.attr("src", iframe.attr('src'));}, 100);
    setTimeout(function() {iframe.focus(); }, 150);
  });

});