$(document).ready(function(){
  var hashAddress=window.location.hash;
  var addressBar=hashAddress.substr(1);
  // $(".part1Content").fadeIn(1000);
  var film1={
    order:1,
    title:"2.0",
    image:"movie_1.jpg",
    rating:"8.2",
    time:"November 29, 2018",
    content:"When mobiles start flying from people's hands, Dr Vaseegaran and his robot Nila are asked to help. However, due to Pakshi Rajan having a hand in this, the two have to reinstate Chitti to defeat him.",
    dirName:"S.Shankar",
    cotegory:"action"
  };
  var film2={
    order:2,
    title:"Asuran",
    image:"movie_2.jpg",
    rating:"9.6",
    time:"October 3, 2019",
    content:"Sivasaami, a farmer, goes on the run with his family while attempting to save his son, Chidambaram, from the consequences of murdering a wealthy man.",
    dirName:"Vetrimaran",
    cotegory:"action"
  };
  var film3={
    order:3,
    title:"Bigil",
    image:"movie_3.jpg",
    rating:10,
    time:"October 24, 2019",
    content:"Michael, an aggressive young man, gives up his dream of becoming a footballer after his father's murder. However, a friend convinces him to coach a women's football team and turn his life around.",
    dirName:"Atlee",
    cotegory:"action"
  };
  var film4={
    order:4,
    title:"Dev",
    image:"movie_4.jpg",
    rating:"4.8",
    time:"February 13, 2019",
    content:"Dev, an adventure-loving young man, often embarks on escapades with his best friend, Vicky. His life takes a turn when Vicky tries to set him up with Meghna, a USA-based businesswoman.",
    dirName:"Rajath Ravishankar",
    cotegory:"action"
  };
  var film5={
    order:5,
    title:"Kaala",
    image:"movie_5.jpg",
    rating:"6.7",
    time:"June 6, 2018",
    content:"Karikaalan learns Haridev Abhayankar, a corrupt politician, is trying to take people's land in Dharavi. He convinces the people to stand up against the government and fight for their rights.",
    dirName:"Pa. Ranjith",
    cotegory:"drama"
  };
  var film6={
    order:6,
    title:'M.S.Dhoni',
    image:"movie_6.jpg",
    rating:"7.8",
    time:"September 30, 2016",
    content:"M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.",
    dirName:"Neeraj Pandey",
    cotegory:"sport"
  };
  var film7={
    order:7,
    title:"96",
    image:"movie_7.jpg",
    rating:8.6,
    time:"October 4, 2018",
    content:"K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.",
    dirName:"C. Prem Kumar",
    cotegory:"romance"
  };
  var film8={
    order:8,
    title:"Naanum Rowdy thaan",
    image:"movie_8.jpg",
    rating:7.6,
    time:"October 21, 2015",
    content:"Pandian, the son of a police officer, falls in love with Kadambari, a hearing impaired girl. She agrees to love him only if he helps her kill a notorious gangster who murdered her parents.",
    dirName:"Vignesh Shivan",
    cotegory:"comedy"
  };
  var film9={
    order:9,
    title:"Titanic",
    image:"movie_9.jpg",
    rating:9.6,
    time:"November 18, 1997",
    content:"Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
    dirName:"James Cameron",
    cotegory:"romance"
  };
  var film10={
    order:10,
    title:"The Time Machine",
    image:"movie_10.jpg",
    rating:8.4,
    time:"March 8, 2002",
    content:"Scientist Alexander Hartdegen's intention to prove his theory of time travel turns into an obsession when he decides to go back in time to save his girlfriend from dying.",
    dirName:"Simon Wells",
    cotegory:"sci-Fi"
  };
  var film11={
    order:11,
    title:"The Terminator",
    image:"movie_11.jpg",
    rating:9,
    time:"October 26, 1984",
    content:"A cyborg assassin is sent back in time to kill Sarah, a waitress, in a bid to stop her son who will wage a long war against his enemy in the future unless the course of history is altered.",
    dirName:"James Cameron",
    cotegory:"sci-Fi"    
  };
  var film12={
    order:12,
    title:"Avatar",
    image:"movie_12.jpg",
    rating:7.8,
    time:"December 10, 2009",
    content:"Jake, who is paraplegic, replaces his twin on the Na'vi inhabited Pandora for a corporate mission. After the natives accept him as one of their own, he must decide where his loyalties lie.",
    dirName:"James Cameron",
    cotegory:"sci-Fi"
  };

  function nameGenerator(){
    var names=["Raghuraj","Jeyaruban","Ravishankar","Shruthi","Mallika","keerthy Suresh","Malavika mohan","Nai sekar","Thanuyan","Kokki kumar","Vallavan","Ilakkiya","Niranjana","Actor Dhanush","Vijay kumar"];
    return names[Math.round(Math.random()*14)];
  }
  function countryGenerator(){
    var country=["Srilanka","India","China","Denmark","America","London","Africa","Germany","Kailasa","Colambia","Chennai","Mumbai","Thiruchchi","Jaffna","Kandy"];
    return country[Math.round(Math.random()*14)];
  }
  function dateGenerator(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return mm + '/' + dd + '/' + yyyy;
  }
  function commentGenerator(){
    var comment=["Vera level","Super movie","Nice movie","Don't watch it.","Acting is a super...","Good story...","No comments. simply waste...","What a tallent","Direction super", "No idea..."];
    return comment[Math.round(Math.random()*comment.length-1)];
  }

  var totalFilm=[film1,film2,film3,film4,film5,film6,film7,film8,film9,film10,film11,film12];
  if((addressBar>0)&&(addressBar<=12)){
    $("#movieTitle").html(totalFilm[addressBar-1]['title']);
    $("#movieDetailImage").css("background-image","url('img/"+totalFilm[addressBar-1]['image']+"')");
    $("#movieRate").html(totalFilm[addressBar-1]['rating']);
    $("#showTime").html(totalFilm[addressBar-1]['time']);
    $("#movieDetails").html(totalFilm[addressBar-1]['content']);
    $(".part1Content").fadeIn(1000);
    $("#dirName").html(totalFilm[addressBar-1]['dirName']);
    $(".part2Content").fadeIn(3000);
    $("#episodeContentTitle1").html(nameGenerator());
    $("#episodeContentTitleSub1").html(countryGenerator());
    $("#episodeContentDate1").html(dateGenerator());
    $("#episodeContentDetail1").html(commentGenerator());
    $("#episodeContentTitle2").html(nameGenerator());
    $("#episodeContentTitleSub2").html(countryGenerator());
    $("#episodeContentDate2").html(dateGenerator());
    $("#episodeContentDetail2").html(commentGenerator());
    $("#episodeContentTitle3").html(nameGenerator());
    $("#episodeContentTitleSub3").html(countryGenerator());
    $("#episodeContentDate3").html(dateGenerator());
    $("#episodeContentDetail3").html(commentGenerator());
    $(".part3Content").fadeIn(2000);
  }



  //start the filter
  function htmlHide(){
    $(".movieRow2, .movieRow3").hide();
    $("#moviePhoto1,#moviePhoto2,#moviePhoto3,#moviePhoto4").hide();
    $(".movieName1,.movieName2,.movieName3,.movieName4").hide();
    $(".cotegry1,.cotegry2,.cotegry3,.cotegry4").hide();
  }

  function htmlShow(displayPositionA,totalFilm,addressBar){
    $(".movieDisplayTitle").html(addressBar);
    $("#moviePhoto"+displayPositionA).css("background-image","url('img/"+totalFilm[i]['image']+"')");
    $(".movieName"+displayPositionA).html(totalFilm[i]['title']);
    $(".cotegry"+displayPositionA).html(totalFilm[i]['cotegory']);
    $("#link"+displayPositionA).attr("href","detail.html#"+(i+1));
    $("#moviePhoto"+displayPositionA).show();
    $(".movieName"+displayPositionA).show();
    $(".cotegry"+displayPositionA).show();
  }

  // start the filtering with cotogry
  //hide the html
  var displayPosition=1;
  for(var i=0; i<totalFilm.length; i++){
    if(addressBar==totalFilm[i]['cotegory']){
      htmlHide();
    }
  }
  //showing the results
  for(var i=0; i<totalFilm.length; i++){
    if(addressBar==totalFilm[i]['cotegory']){
      $(".movieDisplayTitle").html(addressBar+" Movies");
      $("#moviePhoto"+displayPosition).css("background-image","url('img/"+totalFilm[i]['image']+"')");
      $(".movieName"+displayPosition).html(totalFilm[i]['title']);
      $(".cotegry"+displayPosition).html(totalFilm[i]['cotegory']);
      $("#link"+displayPosition).attr("href","detail.html#"+(i+1));
      $("#moviePhoto"+displayPosition).show();
      $(".movieName"+displayPosition).show();
      $(".cotegry"+displayPosition).show();
      displayPosition++
    }
  }


  //start the filtering with letters
  //hide the html
  var displayPositionA=1;
  for(var i=0; i<totalFilm.length; i++){
    if(addressBar==totalFilm[i]['title'][0]){
      htmlHide();
    }
  }
  //showing the results
  for(var i=0; i<totalFilm.length; i++){
    if(addressBar==totalFilm[i]['title'][0]){
      htmlShow(displayPositionA,totalFilm,addressBar);
      displayPositionA++
    }
  }

  //start the filtering with numbers
  //hide the html
  var displayPositionB=1;
  if(addressBar=='numX'){
    htmlHide();

  //showing the results
    var numbersA=[0,1,2,3,4,5,6,7,8,9];
    for(y of numbersA){
      for(var i=0; i<totalFilm.length; i++){
        if(y==totalFilm[i]['title'][0]){
          htmlShow(displayPositionB,totalFilm,addressBar);
          displayPositionB++
        }
      }
    }
  }

  if(displayPosition===1 && displayPositionA===1 && displayPositionB===1 && (addressBar.length)>0){
    htmlHide();
    $(".movieRow1").html("<h1 class='text-primary'>No results found...</h1>");
  }


  //search button using
  $('.searchInput').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        var a=$(".searchInput").val();
        window.location="redirect.html#"+a;
    }
    event.stopPropagation();
  });





  //start the add show function
  //enable or disable the add button
  $("#tvShowInput").keyup(function(){
    var addInput=$("#tvShowInput").val();
    if(addInput.length>0){
      $("#addSubmitBtn").removeAttr('disabled');
    }
    else{
      $("#addSubmitBtn").attr('disabled','disabled');
    }
  });

  //display the message
  $("#addShowForm").submit(function(){
    addInput=$("#tvShowInput").val();
    if(addInput[0]==addInput.match(/[a-z]/i)){
      $("#tvShowDisplayMsg").html(addInput+" has been added.");
    }
    else{
      $("#tvShowDisplayMsg").html("Invalid TV Show name");
    }
    return false;
  })



  //Sign in form validation
  var user1={
    name:"Raghuraj",
    email:"balaraghu@gmail.com",
    password:"(Raghu-98)"
  };
  var user2={
    name:"Priyah",
    email:"priyah@gmail.com",
    password:"(Priyah-22)"
  };
  var user3={
    name:"Sivakumar",
    email:"sivakumar@gmail.com",
    password:"(sivaK-a9)"
  };
  var user4={
    name:"Sruthi",
    email:"balasruthi@hotmail.com",
    password:"Shruthi-B8"
  };
  var user5={
    name:"Kaviya",
    email:"kaviya@yahoo.com",
    password:"Kaviya:98"
  };
  var totalUser=[user1,user2,user3,user4,user5];
  $("#logInFormValidate").submit(function(){
    var logInEmail=$("#logInEmail").val();
    var logInPassword=$("#logInPassword").val();
    var isEmail=false;
    var isPassword=false;
    if(logInEmail.length>3 && logInPassword.length>7){
      //checking email...
      for(var i=0; i<totalUser.length; i++){
        if(logInEmail==totalUser[i]['email']){
          isEmail=true;
        }
        if(logInPassword==totalUser[i]['password']){
          isPassword=true;
        }
      }
      if(isEmail===true && isPassword===true){
        alert("Successful");
        return true;
      }
      else{
        alert("Unsuccessful");
      }
      return false;
    }
    else{
      alert("Unsuccessful");
      return false;
    }
  });



  //Signup form validation
  // var signUpName=$("#signUpName").val();
  // var signUpEmail=$("#signUpEmail").val();
  // var signUpPwd=$("#signUpPassword").val();
  var isSignUpName=false;
  var isSignUpEmail=false;
  var isSignUpPwd=false;
  //check the name
  $("#signUpName").keyup(function(){
    var signUpName=$("#signUpName").val();
    if(signUpName.length==0){
      $("#nameErrorMsg").html("Name is required.");
      $("#signUpName, .borderPart1").css("borderColor","red");
      $("#signUpName, .shadowPart1").css("boxShadow","0 0 10px red");
      $("#nameErrorMsg").show();
      return false;
    }
    else{
      $("#signUpName, .borderPart1").css("borderColor","black");
      $("#signUpName, .shadowPart1").css("boxShadow","none");
      $("#nameErrorMsg").hide();

      var letters = /^[A-Za-z]+$/;
      if(signUpName.match(letters) && signUpName.length>5){
        $("#signUpName, .borderPart1").css("borderColor","black");
        $("#signUpName, .shadowPart1").css("boxShadow","none");
        $("#nameErrorMsg").hide();
        isSignUpName=true;
        
      }
      else{
        $("#nameErrorMsg").html("Your name is invalid.");
        $("#signUpName, .borderPart1").css("borderColor","red");
        $("#signUpName, .shadowPart1").css("boxShadow","0 0 10px red");
        $("#nameErrorMsg").show();
        return false;
      }
    }
    
  });

  //check the email
  $("#signUpEmail").keyup(function(){
    var signUpEmail=$("#signUpEmail").val();
    if(signUpEmail.length==0){
      $("#emailErrorMsg").html("Your email address is required.");
      $("#signUpEmail, .borderPart2").css("borderColor","red");
      $("#signUpEmail, .shadowPart2").css("boxShadow","0 0 10px red");
      $("#emailErrorMsg").show();
      return false;
    }
    else{
      $("#signUpEmail, .borderPart2").css("borderColor","black");
      $("#signUpEmail, .shadowPart2").css("boxShadow","none");
      $("#emailErrorMsg").hide();
      
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(signUpEmail.match(mailformat)){
        $("#signUpEmail, .borderPart2").css("borderColor","black");
        $("#signUpEmail, .shadowPart2").css("boxShadow","none");
        $("#emailErrorMsg").hide();
        isSignUpEmail=true;
      }
      else{
        $("#emailErrorMsg").html("Your email address is invalid.");
        $("#signUpEmail, .borderPart2").css("borderColor","red");
        $("#signUpEmail, .shadowPart2").css("boxShadow","0 0 10px red");
        $("#emailErrorMsg").show();
        return false;
      }
    }
    
  });

  //check the password
  $("#signUpPassword").keyup(function(){
    var signUpPwd=$("#signUpPassword").val();
    if(signUpPwd.length==0){
      $("#pwdErrorMsg").html("Password is required.");
      $("#signUpPassword, .borderPart3").css("borderColor","red");
      $("#signUpPassword, .shadowPart3").css("boxShadow","0 0 10px red");
      $("#pwdErrorMsg").show();
      return false;
    }
    else{
      $("#signUpPassword, .borderPart3").css("borderColor","black");
      $("#signUpPassword, .shadowPart3").css("boxShadow","none");
      $("#pwdErrorMsg").hide();

      var pwdFormat=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
      if(signUpPwd.match(pwdFormat) && signUpPwd.length==8){
        $("#signUpPassword, .borderPart3").css("borderColor","black");
        $("#signUpPassword, .shadowPart3").css("boxShadow","none");
        $("#pwdErrorMsg").hide();
        isSignUpPwd=true;
      }
      else{
        $("#pwdErrorMsg").html("Your password is not a correct format.");
        $("#signUpPassword, .borderPart3").css("borderColor","red");
        $("#signUpPassword, .shadowPart3").css("boxShadow","0 0 10px red");
        $("#pwdErrorMsg").show();
        return false;
      }
    }
  });

  // storing the new user data
  $("#signUpValidation").submit(function(){
    let a=$("#signUpName").val();
    let b=$("#signUpEmail").val();
    let c=$("#signUpPassword").val();
    if(isSignUpName===true && isSignUpEmail===true && isSignUpPwd===true){
      var userDetails={name:a, email:b, password:c};
      alert("Successfully added your accound. Kindly check your Name: "+userDetails['name']+', email: '+userDetails['email']+", password: "+userDetails['password']);
      return true;
    }
    return false;
  });
});
