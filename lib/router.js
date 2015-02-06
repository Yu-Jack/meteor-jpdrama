Router.route('/', function() {
    // render the Home template with a custom data context
    this.render('Index');
});

Router.route('/home', function() {
    this.render('Home');
});

Router.route('/login', function(){
    this.render('Login');
});
