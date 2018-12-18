function scroll() {
    $('body').scrollspy({ target: '#mainNav' })
}

function collapseNav() {
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    
    $('.navbar-brand').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    
    $('body').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
}

function handleCreateApp() {
    scroll();
    collapseNav();
}
$(handleCreateApp);