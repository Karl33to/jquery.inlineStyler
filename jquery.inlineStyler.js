(function($) {
	$.fn.inlineStyler = function(options) {
		var settings = $.extend({
			// These are the defaults.
			'propertyGroups' : {
				'block' : [
					'margin', 
					'padding'
				]
			},
			'elementGroups' : {
				'block' : ['DIV', 'P', 'H1']
			}
		}, options );

		this.each(function(index, value) {
			console.log('tagName: ' + $(this).prop("tagName") );
			for(var group in settings.elementGroups) { 
				console.log('group: ' + group);
				for(var i=0, len=settings.elementGroups[group].length; i<len; i++) {
					console.log('element: ' + settings.elementGroups[group][i]);
					// search for all these tags
					var elements = $(this).find(settings.elementGroups[group][i]);
					elements.each(function(){

						// get the current style rules
						if($(this).attr('style')){
							var styles = $(this).attr('style');
							var properties = styles.split(';');
						} else {
							var properties = [];
						}
						// find all the properties in this rule group
						for(var i=0, len=settings.propertyGroups[group].length; i<len; i++) {

							var thisProp = settings.propertyGroups[group][i];
							console.log('property: ' + thisProp);

							if($(this).css(thisProp)) {
								properties.push(thisProp + ':' + $(this).css(thisProp));
							}

						}
						// add them onto the element as an inline style rule
						$(this).attr('style', properties.join(';'));

					});
				}
			}
		});
	};
}( jQuery ));
