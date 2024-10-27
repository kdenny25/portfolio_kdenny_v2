$('.drawer').on('click', function(e){
    e.preventDefault()
    const drawer = $('#project-drawer')
    const width = drawer.css('width')

    if(drawer.data('status') === 'closed'){
        // Open drawer
        drawer.css({'right': '', 'left': '0px'}).animate({
        'left': width })

        // assign new status
        drawer.data('status', 'open')
    }

})

$('.close-project').on('click', function(e){
    e.preventDefault()
    const drawer = $('#project-drawer')
    const width = drawer.css('width')

    if(drawer.data('status') === 'open'){
        // Close drawer
        drawer.css({'right': '', 'left': width}).animate({'left': '0px'})

        // assign new status
        drawer.data('status', 'closed')
    }
})