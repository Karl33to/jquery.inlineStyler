jquery.inlineStyler
===================

A jQuery plugin for converting CSS styles rules into inline style attributes.

## Features
- Lets you specify which HTML elements are targeted.
- Lets you specify which CSS style rules get written.
- Can work on the whole document or just a fragment.
- Doesn't affect any existing style attributes.
- Applicable styles are calculated by the browser, so complex selectors, media queries and specificity are all taken care of.
- Useful when preparing HTML emails for sending to webmail accounts where a stylesheet would normally be stripped out.

## Example
### Before:
```html
	<style>
		* {font-family: Arial, sans-serif;}
		h1 {font-size:16px;margin:25px 0;line-height:1.2;}
		p {margin: 15px 0;line-height:1.8;}
	</style>
	<h1>Lorem ipsum dolor sit amet</h1>
	<p>Cupiditate ab ea perspiciatis repellendus eligendi ad sed saepe modi!</p>
```
### After:
```html
	<style>
		* {font-family: Arial, sans-serif;}
		h1 {font-size:16px;margin:25px 0;line-height:1.2;}
		p {margin: 15px 0;line-height:1.8;}
	</style>
	<h1 style="font-family: Arial, sans-serif;font-size:16px;margin:25px 0;line-height:1.2;">Lorem ipsum dolor sit amet</h1>
	<p style="font-family: Arial, sans-serif;margin: 15px 0;line-height:1.8;">Cupiditate ab ea perspiciatis repellendus eligendi ad sed saepe modi!</p>
```

## Plugin Options and Usage
To use the plugin you need >= jQuery 1.5 and the plugin itself:
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.5.0/jquery.min.js"></script>
<script src="jquery.inline-styler.js"></script>
<script type="text/javascript">
	$(window).load(function() {
		$("#yourSelector").inlineStyler( );
	});
</script>
```

### Options
The options object is not required. By default, all supported email styles rules will be added to all HTML elements. Any otions you supply will completely override the defaults.
You can specify your own options in an object which is passed in as an argument on the main plugin function call.
The options object is split into two sections, propertyGroups and elementGroups, both are needed for the plugin to work correctly.

```javascript
var cssRules = {
	'propertyGroups' : {
		'block' : ['margin', 'padding'],
		'inline' : ['color'],
		'headings' : ['font-size', 'font-family',]
	},
	'elementGroups' : {
		'block' : ['DIV', 'P', 'H1'], 
		'inline' : ['SPAN'], 
		'headings' : ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']
	}
}
$(window).load(function() {
	$("#yourSelector").inlineStyler( cssRules );
});
```


#### Element Groups
Element Groups (elementGroups) define which HTML elements the style rules (defined by Property Groups) will be written to. Make sure they are all uppercase.
If there is only one value for an element group, it must still be an array (see 'inline' below for an example).
```javascript
'elementGroups' : {
	'block' : ['DIV', 'P', 'H1'], 
	'inline' : ['SPAN'], 
	'headings' : ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']
}
```

#### Property Groups
Property Groups (propertyGroups) can be called anything you like, but they must match up with the names of the Element Groups.
The property groups define which style rules will be written to the HTML elements defined by the Element Groups.
If there is only one value for a property, it must still be an array (see 'inline' below for an example).
```javascript
'propertyGroups' : {
	'block' : ['margin', 'padding'],
	'inline' : ['color'],
	'headings' : ['font-size', 'font-family',]
}
```

## Limitations:
- No way of applying rules to all HTML elements.
- Applied style rules are as the current browser sees them, so it's possible for IE to apply different styles to Chrome.

## TODO
- Specify property groups as strings when there is only one property.

## Alternatives
There are a couple of alternative methods of acheiving the same effect, but they all have their own drawbacks...
- Traverse the DOM and write all applicable styles to every element, this leads to a LOT of unecessary style attributes on every single HTML element.
- Scan the stylesheet and find the elements to apply them to, this method can break when the stylesheet contains media queries or imports and doesnt take into consideration CSS specificity calculations.
- Third party tools such as http://beaker.mailchimp.com/inline-css

## License
inlineStyler is under MIT License

That's it!
