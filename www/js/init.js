/*
JSON is automatically included with each app.

Use the $fh.ready() (http://docs.feedhenry.com/wiki/Ready) function to trigger 
loading the local config and binding a click event to invoke the cloud action 
call which will return the remote config.
*/

$fh.ready(function() {
  // Device is ready.
  document.getElementById('list_button').onclick = function() {

  $fh.cloud(
    {
      path:'/fhdb/list'
    },
    function(res) {
      alert(JSON.stringify(res));
      document.getElementById('Results').innerHTML = JSON.stringify(res);
    },
    function(code,errorprops,params) {
      alert('An error occured: ' + code + ' : ' + errorprops.error);
      console.log('An error occured: ' + code + ' : ' + errorprops.error);
      document.getElementById('Results').innerHTML = 'An error occured: ' + code + ' : ' + errorprops.error;
    }
  );
};

  document.getElementById('deleteall_button').onclick = function() {

  $fh.cloud(
    {
      path:'cloud/deleteall'
    },
    function(res) {
      document.getElementById('Results').innerHTML = JSON.stringify(res);
    },
    function(code,errorprops,params) {
      console.log('An error occured: ' + code + ' : ' + errorprops.error);
      document.getElementById('Results').innerHTML = 'An error occured: ' + code + ' : ' + errorprops.error;
    }
  );
};

  document.getElementById('list_lastname_button').onclick = function() {

  $fh.cloud(
    {
      path:'cloud/listLastName'
    },
    function(res) {
      document.getElementById('Results').innerHTML = JSON.stringify(res);
    },
    function(code,errorprops,params) {
      console.log('An error occured: ' + code + ' : ' + errorprops.error);
      document.getElementById('Results').innerHTML = 'An error occured: ' + code + ' : ' + errorprops.error;
    }
  );
};


  document.getElementById('addjim_button').onclick = function() {

  $fh.cloud(
    {
      path:'cloud/addMrJones'
    },
    function(res) {
      document.getElementById('Results').innerHTML = JSON.stringify(res);
    },
    function(code,errorprops,params) {
      console.log('An error occured: ' + code + ' : ' + errorprops.error);
      document.getElementById('Results').innerHTML = 'An error occured: ' + code + ' : ' + errorprops.error;
    }
  );
};

  document.getElementById('addjack_button').onclick = function() {

  $fh.cloud(
    {
      path:'cloud/addMrSmith'
    },
    function(res) {
      document.getElementById('Results').innerHTML = JSON.stringify(res);
    },
    function(code,errorprops,params) {
      console.log('An error occured: ' + code + ' : ' + errorprops.error);
      document.getElementById('Results').innerHTML = 'An error occured: ' + code + ' : ' + errorprops.error;
    }
  );
};

});
