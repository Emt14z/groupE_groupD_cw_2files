// About Page Script
  $(document).ready(function () {
    // Toggle Mobile Menu
    $('.menu-toggle').click(function () {
      $('.nav-links').toggleClass('active');
    });

    // Smooth Scroll for Anchor Links
    $('a[href^="#"]').on('click', function (e) {
      const target = $($(this).attr('href'));
      if (target.length) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 70
        }, 600);
      }
    });
    
    // Form Input Focus Highlight
    $('input, textarea').on('focus', function () {
      $(this).css('border-color', '#e74c3c');
    }).on('blur', function () {
      $(this).css('border-color', '#ccc');
    });

    // Simple Form Validation (just alert on empty)
    $('form').on('submit', function (e) {
      let isValid = true;
      $(this).find('input, textarea').each(function () {
        if (!$(this).val()) {
          $(this).css('border-color', 'red');
          isValid = false;
        }
      });
      if (!isValid) {
        alert('Please fill in all required fields.');
        e.preventDefault();
      }
    });
  });
