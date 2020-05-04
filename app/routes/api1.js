var User1       =require('../models/user1');

module.exports = function(router) {
	//USER ADD PLAYER ROUTE
	router.post('/players', function(req, res) {
	    var user = new User1();
	    user.name = req.body.name;
	    user.dob = req.body.dob;
	    user.place = req.body.place;
	    user.join = req.body.join;
          user.match = req.body.match;
	    
	    if (req.body.name == null || req.body.name == '' || req.body.dob == null || req.body.dob == '' || req.body.place == null || req.body.place == '' || req.body.join == null || req.body.join == '' || req.body.join == null || req.body.join == '') {
		    res.json({ success: false, message: 'Ensure username, email, and password were provided' });
	    } else {
            user.save(function(err) {
                  if (err) {
                        res.send('Username or email alreadt exist');
                  } else {
                        res.send('user created');
                  }
            });
	    }
    });

    router.get('/management', function(req, res) {
    	User1.find({}, function(err, user1) {
    		if (err) throw err;
    		User1.findOne({name: req.body.name }, function(err, mainUser) {
    			if (err) throw err;
    			if (!mainUser) {
    				//res.json({ success: false, message: 'No user found'});
    			}
    		});
    	});
    });
      return router;
}