/*
JSON is automatically included with each app.

Use the $fh.ready() (http://docs.feedhenry.com/wiki/Ready) function to trigger 
loading the local config and binding a click event to invoke the cloud action 
call which will return the remote config.
*/

$fh.ready(function() {
  // Device is ready.
  document.getElementById('list_button').onclick = function() {
  // List all entries.
  $fh.cloud(
    {
      "path":'sssss',
      "type": "GET"
    },
    function(res) {
      // Success
      document.getElementById('Results').innerHTML = JSON.stringify(res);
    },
    function(code,errorprops,params) {
      // Error
      console.log('An error occured: ' + code + ' : ' + errorprops.error);
      document.getElementById('Results').innerHTML = 'An error occured: ' + code + ' : ' + errorprops.error;
    }
  );
  };

  document.getElementById('deleteall_button').onclick = function() {
  // Wipe all entries.
  $fh.cloud(
    {
      path:'fhdb/deleteall'
    },
    function(res) {
      // Success
      document.getElementById('Results').innerHTML = JSON.stringify(res);
    },
    function(code,errorprops,params) {
      // Error
      console.log('An error occured: ' + code + ' : ' + errorprops.error);
      document.getElementById('Results').innerHTML = 'An error occured: ' + code + ' : ' + errorprops.error;
    }
  );
  };

  document.getElementById('list_smith_button').onclick = function() {
  // List all entries for "Mr Smith"
  $fh.cloud(
    {
      path:'fhdb/listLastName'
    },
    function(res) {
      document.getElementById('Results').innerHTML = JSON.stringify(res);
    },
    function(code,errorprops,params) {
      // Error
      console.log('An error occured: ' + code + ' : ' + errorprops.error);
      document.getElementById('Results').innerHTML = 'An error occured: ' + code + ' : ' + errorprops.error;
    }
  );
  };

  document.getElementById('addjones_button').onclick = function() {
  // Add Jones entry.
  $fh.cloud(
    {
      path:'fhdb/addMrJones'
    },
    function(res) {
      // Success
      document.getElementById('Results').innerHTML = JSON.stringify(res);
    },
    function(code,errorprops,params) {
      // Error
      console.log('An error occured: ' + code + ' : ' + errorprops.error);
      document.getElementById('Results').innerHTML = 'An error occured: ' + code + ' : ' + errorprops.error;
    }
  );
  };

  document.getElementById('addsmith_button').onclick = function() {
  // Add Smith entry.
  $fh.cloud(
    {
      path:'fhdb/addMrSmith'
    },
    function(res) {
      // Success
      document.getElementById('Results').innerHTML = JSON.stringify(res);
    },
    function(code,errorprops,params) {
      // Error
      console.log('An error occured: ' + code + ' : ' + errorprops.error);
      document.getElementById('Results').innerHTML = 'An error occured: ' + code + ' : ' + errorprops.error;
    }
  );
  };
});
