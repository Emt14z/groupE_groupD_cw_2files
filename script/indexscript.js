$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('.nav-links').toggleClass('active');
        $(this).attr('aria-expanded', $(this).attr('aria-expanded') === 'true' ? 'false' : 'true');
    });

    $('.reservation-form').submit(function(e) {
        e.preventDefault();
        
        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            date: $('#date').val(),
            time: $('#time').val(),
            guests: $('#guests').val(),
            specialRequests: $('#special-requests').val(),
            timestamp: new Date().toISOString()
        };

        let reservations = JSON.parse(localStorage.getItem('reservations')) || [];
        
        reservations.push(formData);
        
        localStorage.setItem('reservations', JSON.stringify(reservations));

        alert('Thank you! Your reservation request has been received. We will contact you shortly to confirm.');
        this.reset();
    });

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 800);
        }
    });
});
console.log(JSON.parse(localStorage.getItem('reservations')));