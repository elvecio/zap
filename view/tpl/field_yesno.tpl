	<div class='field yesno'>
		<label class="mainlabel" for='id_{{$field.0}}'>{{$field.1}}</label>
		<div class='onoff' id="id_{{$field.0}}_onoff">
			<input  type="hidden" name='{{$field.0}}' id='id_{{$field.0}}' value="{{$field.2}}">
			<a href="#" class='off'>
				{{if $field.4}}{{$field.4.0}}{{else}}OFF{{/if}}
			</a>
			<a href="#" class='on'>
				{{if $field.4}}{{$field.4.1}}{{else}}ON{{/if}}
			</a>
		</div>
		<span class='field_help'>{{$field.3}}</span>
	</div>
