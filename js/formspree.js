var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/contact@egecodz.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.find('.alert-success').hide();
			$contactForm.find('.alert-danger').hide();
			$contactForm.find('.alert-warning').hide();
			$contactForm.append('<div class="alert alert-warning">En cours</div>');
		},
		success: function(data) {
			
			$('#name').val('');
			$('#email').val('');
			$('#subject').val('');
			$('#message').val('');
			$contactForm.find('.alert-success').hide();
			$contactForm.find('.alert-danger').hide();
			$contactForm.find('.alert-warning').hide();
			$contactForm.append('<div class="alert alert-success">Message envoy&eacute;!</div>');
		},
		error: function(err) {
			$contactForm.find('.alert-success').hide();
			$contactForm.find('.alert-danger').hide();
			$contactForm.find('.alert-warning').hide();
			$contactForm.append('<div class="alert alert-danger">Merci de verifier vos informations</div>');
		}
	});
});