(function($) {
	$.fn.inlineStyler = function(options) {
		var settings = $.extend({
			// These are the defaults.
			// taken from http://templates.mailchimp.com/resources/email-client-css-support
			'propertyGroups' : {
				'*' : ['border', 'border-radius', 'box-shadow', 'height', 'margin', 'padding', 'width', 'max-width', 'min-width', 'border-collapse', 'border-spacing', 'caption-side', 'empty-cells', 'table-layout', 'direction', 'font', 'font-family', 'font-style', 'font-variant', 'font-size', 'font-weight', 'letter-spacing', 'line-height', 'text-align', 'text-decoration', 'text-indent', 'text-overflow', 'text-shadow', 'text-transform', 'white-space', 'word-spacing', 'word-wrap', 'vertical-align', 'color', 'background', 'background-color', 'background-image', 'background-position', 'background-repeat', 'Opacity', 'bottom', 'clear', 'clip', 'cursor', 'display', 'float', 'left', 'opacity', 'outline ', 'overflow', 'position', 'resize ', 'right', 'top', 'visibility', 'z-index', 'list-style-image', 'list-style-position', 'list-style-type'],
				'block' : ['margin', 'padding']
			},
			// taken from http://www.w3schools.com/tags/default.asp
			'elementGroups' : {
				'*' : ['A', 'ABBR', 'ACRONYM', 'ADDRESS', 'APPLET', 'AREA', 'ARTICLE', 'ASIDE', 'AUDIO', 'B', 'BASE', 'BASEFONT', 'BDI', 'BDO', 'BIG', 'BLOCKQUOTE', 'BODY', 'BR', 'BUTTON', 'CANVAS', 'CAPTION', 'CENTER', 'CITE', 'CODE', 'COL', 'COLGROUP', 'COMMAND', 'DATALIST', 'DD', 'DEL', 'DETAILS', 'DFN', 'DIALOG', 'DIR', 'DIV', 'DL', 'DT', 'EM', 'EMBED', 'FIELDSET', 'FIGCAPTION', 'FIGURE', 'FONT', 'FOOTER', 'FORM', 'FRAME', 'FRAMESET', 'H1', 'HEAD', 'HEADER', 'HR', 'HTML', 'I', 'IFRAME', 'IMG', 'INPUT', 'INS', 'KBD', 'KEYGEN', 'LABEL', 'LEGEND', 'LI', 'LINK', 'MAP', 'MARK', 'MENU', 'META', 'METER', 'NAV', 'NOFRAMES', 'NOSCRIPT', 'OBJECT', 'OL', 'OPTGROUP', 'OPTION', 'OUTPUT', 'P', 'PARAM', 'PRE', 'PROGRESS', 'Q', 'RP', 'RT', 'RUBY', 'S', 'SAMP', 'SCRIPT', 'SECTION', 'SELECT', 'SMALL', 'SOURCE', 'SPAN', 'STRIKE', 'STRONG', 'STYLE', 'SUB', 'SUMMARY', 'SUP', 'TABLE', 'TBODY', 'TD', 'TEXTAREA', 'TFOOT', 'TH', 'THEAD', 'TIME', 'TITLE', 'TR', 'TRACK', 'TT', 'U', 'UL', 'VAR', 'VIDEO', 'WBR']
			}
		}, options );
		this.each(function(index, value) {
			for(var group in settings.elementGroups) { 
				for(var i=0, len=settings.elementGroups[group].length; i<len; i++) {
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