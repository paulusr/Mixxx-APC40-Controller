var APC = {};

// --------------------------
// INTITIALISATION & SHUTDOWN

APC.init = function (id, debugging) {
	// set mode to Ableton Live - all controls momentary
	var byteArray = [ 0xF0, 0x47, 0x00, 0x73, 0x60, 0x00, 0x04, 0x41, 0x08, 0x01, 0x01, 0xF7 ];
	midi.sendSysexMsg(byteArray,byteArray.length);

	APC.fx_eq8_load_values_init();

	APC.set_knob_styles();
	APC.set_knob_values();
	APC.set_pad_values();

	engine.beginTimer(2000,"APC.fx_eq_load_init",true);
	engine.beginTimer(4000,"APC.fx_echo_load_init",true);
	//engine.beginTimer(8000,"APC.print_fx_specs",true);

	//engine.connectControl("[Master]","PeakIndicator","APC.onPeakMaster");
	engine.connectControl("[Channel1]","PeakIndicator","APC.onPeakDeck");
	engine.connectControl("[Channel2]","PeakIndicator","APC.onPeakDeck");
	//engine.connectControl("[Channel3]","PeakIndicator","APC.onPeakDeck");
	//engine.connectControl("[Channel4]","PeakIndicator","APC.onPeakDeck");
	
	engine.softTakeover('[Sampler1]', 'volume', true);
	engine.softTakeover('[Sampler2]', 'volume', true);
	engine.softTakeover('[Sampler3]', 'volume', true);
	engine.softTakeover('[Sampler4]', 'volume', true);
	engine.softTakeover('[Sampler5]', 'volume', true);
	engine.softTakeover('[Sampler6]', 'volume', true);
	engine.softTakeover('[Sampler7]', 'volume', true);
	engine.softTakeover('[Sampler8]', 'volume', true);
}

APC.shutdown = function() {
}

// --------------------------
// MIDI Configuration

APC.midi_config = {
    '[Channel1]': {
		'high':			{ 'status': 0xB0, 'note': 0x30 }, // r1_knob1
		'mid':			{ 'status': 0xB0, 'note': 0x34 }, // r2_knob1
		'filter':		{ 'status': 0xB0, 'note': 0x35 }, // r2_knob2
		'gain':			{ 'status': 0xB0, 'note': 0x31 }, // r1_knob2

		'loop_on':		{ 'status': 0x90, 'note': 0x39, 'value': 4 }, // tr1_row5 red flash
		'loop_off':		{ 'status': 0x80, 'note': 0x39, 'value': 0 }, // tr1_row5
		'spinback':		{ 'status': 0x91, 'note': 0x34, 'value': 1 }, // tr2_row6
		'cue':			{ 'status': 0x91, 'note': 0x33, 'value': 1 }, // tr2_row7
		
		'loop_one':		{ 'status': 0x92, 'note': 0x35, 'value': 1 }, // tr3_row1 green
		'loop_half':	{ 'status': 0x92, 'note': 0x36, 'value': 1 }, // tr3_row2 green
		'loop_quart':	{ 'status': 0x92, 'note': 0x37, 'value': 1 }, // tr3_row3 green
		'loop_h_dc':	{ 'status': 0x92, 'note': 0x38, 'value': 3 }, // tr3_row4 red
		'loop_q_dc':	{ 'status': 0x92, 'note': 0x39, 'value': 3 }, // tr3_row5 red
		'brake':		{ 'status': 0x92, 'note': 0x34, 'value': 1 }, // tr3_row6
	},
    '[Channel2]': {
		'high':			{ 'status': 0xB0, 'note': 0x32 }, // r1_knob3
		'mid':			{ 'status': 0xB0, 'note': 0x36 }, // r2_knob3
		'filter':		{ 'status': 0xB0, 'note': 0x37 }, // r2_knob4
		'gain':			{ 'status': 0xB0, 'note': 0x33 }, // r1_knob4

		'loop_on':		{ 'status': 0x93, 'note': 0x39, 'value': 4 }, // tr4_row5 red flash
		'loop_off':		{ 'status': 0x83, 'note': 0x39, 'value': 0 }, // tr4_row5
		'spinback':		{ 'status': 0x94, 'note': 0x34, 'value': 1 }, // tr5_row6
		'cue':			{ 'status': 0x94, 'note': 0x33, 'value': 1 }, // tr5_row7
		'loop_one':		{ 'status': 0x95, 'note': 0x35, 'value': 1 }, // tr6_row1 green
		'loop_half':	{ 'status': 0x95, 'note': 0x36, 'value': 1 }, // tr6_row2 green
		'loop_quart':	{ 'status': 0x95, 'note': 0x37, 'value': 1 }, // tr6_row3 green
		'loop_h_dc':	{ 'status': 0x95, 'note': 0x38, 'value': 3 }, // tr6_row4 red
		'loop_q_dc':	{ 'status': 0x95, 'note': 0x39, 'value': 3 }, // tr6_row5 red
		'brake':		{ 'status': 0x95, 'note': 0x34, 'value': 1 }, // tr6_row6
	},
    '[Master]': {
		'sam_norm_on':	{ 'status': 0x96, 'note': 0x35, 'value': 3 }, // tr7_row1 red
		'sam_norm_off':	{ 'status': 0x96, 'note': 0x35, 'value': 5 }, // tr7_row1 orange
		'sam_mom_on':	{ 'status': 0x97, 'note': 0x35, 'value': 3 }, // tr8_row1 red
		'sam_mom_off':	{ 'status': 0x97, 'note': 0x35, 'value': 5 }, // tr8_row1 orange

		'reloop':		{ 'status': 0x90, 'note': 0x52, 'value': 1 }, // mst_row1 green
		'loop_in_on':	{ 'status': 0x96, 'note': 0x35, 'value': 1 }, // tr7_row1 green
		'loop_in_off':	{ 'status': 0x96, 'note': 0x35, 'value': 0 }, // tr7_row1 none
		'loop_out_on':	{ 'status': 0x97, 'note': 0x35, 'value': 1 }, // tr8_row1 green
		'loop_out_off':	{ 'status': 0x97, 'note': 0x35, 'value': 0 }, // tr8_row1 none

		'sweep_freq':	{ 'status': 0xB0, 'note': 0x10 }, // r1_knob1
		'sweep_gain':	{ 'status': 0xB0, 'note': 0x11 }, // r1_knob2
		'filter':		{ 'status': 0xB0, 'note': 0x12 }, // r1_knob3
		'gain':			{ 'status': 0xB0, 'note': 0x13 }, // r1_knob4
		'parameter1':	{ 'status': 0xB0, 'note': 0x14 }, // r2_knob1 eq8_45
		'parameter2':	{ 'status': 0xB0, 'note': 0x15 }, // r2_knob2 eq8_100
		'parameter3':	{ 'status': 0xB0, 'note': 0x16 }, // r2_knob3 eq8_220
		'head_mix':		{ 'status': 0xB0, 'note': 0x17 }, // r2_knob4
	},
};


// 'knob_style': { 'single': 1, 'volume': 2, 'pan': 3 },

APC.midi_style_config = {
    '[Channel1]': {
		'high':			{ 'note': 0x38, 'value': 3 }, // r1_knob1
		'mid':			{ 'note': 0x3C, 'value': 3 }, // r2_knob1
		'filter':		{ 'note': 0x3D, 'value': 3 }, // r2_knob2
		'gain':			{ 'note': 0x39, 'value': 3 }, // r1_knob2
	},
    '[Channel2]': {
		'high':			{ 'note': 0x3A, 'value': 3 }, // r1_knob3
		'mid':			{ 'note': 0x3E, 'value': 3 }, // r2_knob3
		'filter':		{ 'note': 0x3F, 'value': 3 }, // r2_knob4
		'gain':			{ 'note': 0x3B, 'value': 3 }, // r1_knob4
	},
    '[Master]': {
		'sweep_freq':	{ 'note': 0x18, 'value': 1 }, // r1_knob1
		'sweep_gain':	{ 'note': 0x19, 'value': 3 }, // r1_knob2
		'filter':		{ 'note': 0x1A, 'value': 2 }, // r1_knob3
		'gain':			{ 'note': 0x1B, 'value': 3 }, // r1_knob4
		'parameter1':	{ 'note': 0x1C, 'value': 3 }, // r2_knob1 eq8_45
		'parameter2':	{ 'note': 0x1D, 'value': 3 }, // r2_knob2 eq8_100
		'parameter3':	{ 'note': 0x1E, 'value': 3 }, // r2_knob3 eq8_220
		'head_mix':		{ 'note': 0x1F, 'value': 1 }, // r2_knob4
	},
};

APC.set_knob_styles = function() {
	var cfg;
	var groups = [ '[Master]', '[Channel1]', '[Channel2]' ];
	for (var i = 0; i <= 2; i++) {
		cfg = APC.midi_style_config[ groups[i] ];
		for ( var key in cfg ) {
			midi.sendShortMsg(0xB0, cfg[key]['note'], cfg[key]['value']);
		}
	}
}

APC.set_knob_values = function() {
	var cfg = APC.midi_config['[Master]'];
	midi.sendShortMsg(0xB0, cfg['sweep_freq']['note'],	0);
	midi.sendShortMsg(0xB0, cfg['sweep_gain']['note'],	64);
	midi.sendShortMsg(0xB0, cfg['filter']['note'],		0);
	midi.sendShortMsg(0xB0, cfg['gain']['note'],		64);
	midi.sendShortMsg(0xB0, cfg['parameter1']['note'],	64);
	midi.sendShortMsg(0xB0, cfg['parameter2']['note'],	64);
	midi.sendShortMsg(0xB0, cfg['parameter3']['note'],	64);
	midi.sendShortMsg(0xB0, cfg['head_mix']['note'],	127);

	var groups = [ '[Channel1]', '[Channel2]' ];
	for (var i = 0; i < 2; i++) {
		cfg = APC.midi_config[ groups[i] ];
		midi.sendShortMsg(0xB0, cfg['high']['note'],	64);
		midi.sendShortMsg(0xB0, cfg['mid']['note'],		64);
		midi.sendShortMsg(0xB0, cfg['filter']['note'],	64);
		midi.sendShortMsg(0xB0, cfg['gain']['note'],	64);
	}
}

APC.set_pad_values = function() {
	//print("set_pad_values...");
	var groups = [ '[Channel1]', '[Channel2]' ];
	var pads = [
		'spinback',
		'cue',
		'loop_one',
		'loop_half',
		'loop_quart',
		'loop_h_dc',
		'loop_q_dc',
		'brake',
	];
	var length = pads.length;
	for (var i = 0; i < 2; i++) {
		cfg = APC.midi_config[ groups[i] ];
		for (var j = 0; j < length; j++) {
			var pad = pads[j];
			//print("set pad: " + cfg[pad]['status'] +','+ cfg[pad]['note'] +','+ cfg[pad]['value']);
			midi.sendShortMsg( cfg[pad]['status'], cfg[pad]['note'], cfg[pad]['value'] );
		}
	}

	pads = [
		'reloop',
	];
	length = pads.length;
	cfg = APC.midi_config['[Master]'];
	for (var j = 0; j < length; j++) {
		var pad = pads[j];
		//print("set pad: " + cfg[pad]['status'] +','+ cfg[pad]['note'] +','+ cfg[pad]['value']);
		midi.sendShortMsg( cfg[pad]['status'], cfg[pad]['note'], cfg[pad]['value'] );
	}
}


// --------------------------
// CONNECTED CONTROLS
// --------------------------


// Limiters and Gain

APC.onPeakMaster = function (value, group, control) {
	// print("APC.onPeakMaster value-group-control: " + value + " - " + group + " - " + control);
	if ( ! value ) { return; }
	value = engine.getParameter(group, "volume") - 0.02;
	engine.setParameter(group, "volume", value);
	var cfg = APC.midi_config[group];
	midi.sendShortMsg(
		cfg['gain']['status'],
		cfg['gain']['note'],
		script.absoluteLinInverse(value,0,1)
	);
	// print("APC.onPeakMaster new volume: " + value);
	// print("APC.onPeakMaster midi value: " + script.absoluteLinInverse(value,0,1) );
}

APC.onPeakDeck = function (value, group, control) {
	// print("APC.onPeakDeck value-group-control: " + value + " - " + group + " - " + control);
	if ( ! value ) { return; }
	value = engine.getParameter(group, "pregain") - 0.02;
	engine.setParameter(group, "pregain", value);
	var cfg = APC.midi_config[group];
	midi.sendShortMsg(
		cfg['gain']['status'],
		cfg['gain']['note'],
		script.absoluteLinInverse(value,0,1)
	);
	// print("APC.onPeakDeck new pregain: " + value);
	// print("APC.onPeakDeck midi value: " + script.absoluteLinInverse(value,0,1) );
}

APC.reset_master_gain = function (channel, control, value, status, group) {
	engine.setParameter( group, 'volume', 0.5 );
	var cfg = APC.midi_config[group]['gain'];
	midi.sendShortMsg(cfg['status'], cfg['note'], 64 );
}

APC.reset_gain = function (channel, control, value, status, group) {
	engine.setParameter( group, 'pregain', 0.5 );
	var cfg = APC.midi_config[group]['gain'];
	midi.sendShortMsg(cfg['status'], cfg['note'], 64 );
}



// --------------------------
// FX Specs
// --------------------------

APC.print_fx_specs = function() {
	//print("print_fx_specs...");
	APC.print_fx_unit_specs(	"[EffectRack1_EffectUnit1]");
	APC.print_fx_effect_specs(	"[EffectRack1_EffectUnit1_Effect1]");
	APC.print_fx_unit_specs(	"[EffectRack1_EffectUnit2]");
	APC.print_fx_effect_specs(	"[EffectRack1_EffectUnit2_Effect1]");
	APC.print_fx_unit_specs(	"[EffectRack1_EffectUnit3]");
	APC.print_fx_effect_specs(	"[EffectRack1_EffectUnit3_Effect1]");

	APC.print_fx_effect_params(	"[EffectRack1_EffectUnit2_Effect2]");
	APC.print_fx_effect_params(	"[EffectRack1_EffectUnit3_Effect2]");
	print("--- print_fx_specs done");
}

APC.print_fx_unit_specs = function(unit) {
	print(unit + " num_effects: " + engine.getValue(unit, "num_effects") );
	print(unit + " mix: " + engine.getValue(unit, "mix") );
	print(unit + " enabled: " + engine.getValue(unit, "enabled") );

	var channels = ["Master","Channel1","Channel2"];
	var num = channels.length;
	for (var i = 0; i < num; i++) {
		var channel = channels[i];
		print(channel + " enabled: " + engine.getValue(unit, "group_[" + channel + "]_enable") );
	}
}

APC.print_fx_effect_specs = function(effect) {
	print(effect + " enabled: " + engine.getValue(effect, "enabled") );
	print(effect + " num_parameters: " + engine.getValue(effect, "num_parameters") );
}

APC.print_fx_effect_params = function(effect) {
	print("fx_effect_params...");
	print(effect + " num_parameters: " + engine.getValue(effect, "num_parameters") );
	
	print(effect + " parameter1 value: " + engine.getValue(effect, "parameter1") );
	print(effect + " parameter2 value: " + engine.getValue(effect, "parameter2") );
	print(effect + " parameter3 value: " + engine.getValue(effect, "parameter3") );
	
	print(effect + " parameter1 param: " + engine.getParameter(effect, "parameter1") );
	print(effect + " parameter2 param: " + engine.getParameter(effect, "parameter2") );
	print(effect + " parameter3 param: " + engine.getParameter(effect, "parameter3") );

	print(effect + " parameter1 type: " + engine.getValue(effect, "parameter1_type") );
	print(effect + " parameter2 type: " + engine.getValue(effect, "parameter2_type") );
	print(effect + " parameter3 type: " + engine.getValue(effect, "parameter3_type") );

	print(effect + " parameter1 link_type: " + engine.getValue(effect, "parameter1_link_type") );
	print(effect + " parameter2 link_type: " + engine.getValue(effect, "parameter2_link_type") );
	print(effect + " parameter3 link_type: " + engine.getValue(effect, "parameter3_link_type") );

	print(effect + " parameter1 link_inverse: " + engine.getValue(effect, "parameter1_link_inverse") );
	print(effect + " parameter2 link_inverse: " + engine.getValue(effect, "parameter2_link_inverse") );
	print(effect + " parameter3 link_inverse: " + engine.getValue(effect, "parameter3_link_inverse") );

}


// --------------------------
// Modifier Buttons
// --------------------------

APC.shift     = false;
APC.shift_on  = function() { APC.shift = true; }
APC.shift_off = function() { APC.shift = false; }

APC.master     = false;
APC.master_on  = function() { APC.master = true; }
APC.master_off = function() { APC.master = false; }

// APC.rec_btn     = false;
// APC.rec_btn_on  = function() { APC.rec_btn = true; }
// APC.rec_btn_off = function() { APC.rec_btn = false; }
// 
// APC.play_btn     = false;
// APC.play_btn_on  = function() { APC.play_btn = true; }
// APC.play_btn_off = function() { APC.play_btn = false; }
// 
// APC.stop_btn     = false;
// APC.stop_btn_on  = function() { APC.stop_btn = true; }
// APC.stop_btn_off = function() { APC.stop_btn = false; }



// ENCODER

APC.encoder_deck = '';
APC.encoder_group = '';
APC.encoder_function = '';

APC.gain_adjust = 0;
APC.deck_scroll = 0;
APC.library_scroll = 0;
APC.library_scroll_counter = 3;
APC.scroll_counter = 0;
APC.rate_scroll = 0;
APC.rate_scroll_counter = 1;
APC.gain_scroll = 0;
APC.pitch_counter = 0;
APC.tempo_adjust = 0;
APC.loop_in_scroll = 0;
APC.loop_out_scroll = 0;

var encoder_functions = {
	"library_scroll" : function (value) {
		APC.library_scroll = 1;
		if ( value > 64 ) {
			APC.library_scroll_counter += (128 - value);
		}
		else {
			APC.library_scroll_counter += value;
		}
		if (APC.library_scroll_counter < 3) { return; }
		APC.library_scroll_counter = 0;
		if ( value < 64 ) {
			engine.setValue("[Playlist]", "SelectNextTrack", 1);
		}
		else {
			engine.setValue("[Playlist]", "SelectPrevTrack", 1);
		}
	},
	"deck_scroll" : function (value) {
		APC.deck_scroll = 1;
		if ( value > 64 ) { value = -128 + value; }
		engine.setParameter(
			APC.encoder_group,
			"playposition",
			engine.getParameter(APC.encoder_group, "playposition") + (value / 1000)
		);	
	},
	"deck_scroll_fine" : function (value) {
		APC.deck_scroll = 1;
		if ( value > 64 ) { value = -128 + value; }
		engine.setParameter(
			APC.encoder_group,
			"playposition",
			engine.getParameter(APC.encoder_group, "playposition") + (value / 20000)
		);	
	},
	"rate_scroll" : function (value) {
		//print("rate_scroll");
		APC.rate_scroll = 1;
		if ( value > 64 ) { value = -128 + value; }
		engine.setParameter(
			APC.encoder_group,
			"rate",
			engine.getParameter(APC.encoder_group, "rate") + (value * .01)
		);	
	},
	"rate_scroll_fine" : function (value) {
		//print("rate_scroll_fine");
		APC.rate_scroll = 1;
		if ( ! APC.rate_scroll_counter ) {
			APC.rate_scroll_counter = 1;
			return;
		}
		APC.rate_scroll_counter = 0;
		if ( value > 64 ) { value = -128 + value; }
		engine.setParameter(
			APC.encoder_group,
			"rate",
			engine.getParameter(APC.encoder_group, "rate") + (value * .0005)
		);	
	},
	"gain_scroll" : function (value) {
		//print("gain_scroll");
		APC.gain_scroll = 1;
		if ( value > 64 ) { value = -128 + value; }
		engine.setParameter(
			APC.encoder_group,
			"pregain",
			engine.getParameter(APC.encoder_group, "pregain") + (value * .01)
		);	
	},
	"loop_in_scroll" : function (value) {
		APC.loop_in_scroll = 1;
		if ( value > 64 ) { value = -128 + value; }
		engine.setValue(
			APC.encoder_group,
			"loop_start_position",
			engine.getValue(APC.encoder_group, "loop_start_position") + (value * 1000)
		);	
	},
	"loop_out_scroll" : function (value) {
		APC.loop_out_scroll = 1;
		if ( value > 64 ) { value = -128 + value; }
		engine.setValue(
			APC.encoder_group,
			"loop_end_position",
			engine.getValue(APC.encoder_group, "loop_end_position") + (value * 1000)
		);	
	},
	"fx_gate_rate" : function (value) {
		var cfg = APC.fx_gate_config;
		if ( cfg['rate'] <= 0 ) { return; }
		if ( value > 64 ) { value = -128 + value; }
		cfg['rate'] = cfg['rate'] + value;
		if ( cfg['rate'] <= 0 ) {
			cfg['rate'] = 0;
			return;
		}
		//cfg['counter'] = cfg['rate'] - 2;
	},
	"pitch_adjust" : function (value) {
		APC.pitch_counter += 1;
		if (APC.pitch_counter < 6) { return; }
		APC.pitch_counter = 0;
		var param = ( value > 64 ? -0.015 : 0.015 );
		param = engine.getParameter(APC.encoder_group, "pitch") + param;
		// print("pitch_adjust new: " + param);
		if ( param <= 0 ) { return; }
		// print("pitch_adjust changing");
		engine.setParameter(APC.encoder_group, "pitch", param );	
	},
}

APC.encoder = function (channel, control, value) {
	if ( ! APC.encoder_function ) { return; }
	encoder_functions[APC.encoder_function]( value );
	// print("encoder");
	// print("encoder_function: " + APC.encoder_function);
}







// Tap Tempo - Library Button
// if library_btn is true when pad released:
// 		if shift key down, toggle show_samplers
//		else toggle maximize_library
// (other functions can set library_btn to false - e.g. sampler load)

APC.library_btn = false;

APC.tap_tempo_down = function() {
	APC.library_btn = true;
	APC.encoder_function = 'library_scroll';
	//print("tap_tempo_down " + APC.library_btn );
}

APC.tap_tempo_up = function() {
	//print("tap_tempo_up " + APC.library_btn );
	//print("val show_samplers " + engine.getValue("[Samplers]", "show_samplers") );
	//print("val maximize_library " + engine.getValue("[Master]", "maximize_library") );
	if ( APC.library_scroll ) {
		APC.library_scroll = 0;
	}
	else if ( APC.library_btn ) {
		script.toggleControl("[Master]", "maximize_library");
	}
	APC.library_btn = false;
	APC.encoder_function = '';
}

// LIBRARY

APC.playlist_next_or_toggle = function() {
	if ( APC.shift )
		{ engine.setValue("[Playlist]", "ToggleSelectedSidebarItem", 1); }
	else
		{ engine.setValue("[Playlist]", "SelectNextPlaylist", 1); }
}

APC.playlist_prev_or_toggle = function() {
	if ( APC.shift )
		{ engine.setValue("[Playlist]", "ToggleSelectedSidebarItem", 1); }
	else
		{ engine.setValue("[Playlist]", "SelectPrevPlaylist", 1); }
}


APC.stop_btn_down = function (channel, control, value, status, group) {
	APC.encoder_function = 'deck_scroll';
	APC.encoder_group = group;
}
APC.stop_btn_up = function (channel, control, value, status, group) {
	if ( ! APC.deck_scroll ) {
		script.toggleControl(group, "play")
	}
	APC.encoder_function = '';
	APC.encoder_group = '';
	APC.deck_scroll = 0;
}

APC.rec_btn_down = function (channel, control, value, status, group) {
	APC.encoder_function = 'deck_scroll';
	APC.encoder_group = group;
}
APC.rec_btn_up = function (channel, control, value, status, group) {
	APC.encoder_function = '';
	APC.encoder_group = '';
	APC.deck_scroll = 0;
}

APC.current_hotcue = {
	'[Channel1]': 0,
	'[Channel2]': 0,
	'[Channel3]': 0,
	'[Channel4]': 0,
	'[PreviewDeck1]': 0,
};

APC.goto_next_hotcue = function (channel, control, value, status, group) {
	var num = APC.current_hotcue[group];
	//print("num1: " + num );
	if (num === 36) {
		num = 0;
	}
	//print("num2: " + num );
	var current_hotcue;
	for (var i = num + 1; i <= 36; i++) {
		//print("i: " + i );
		if ( engine.getValue(group, 'hotcue_' + i + '_enabled' ) ) {
			engine.setValue(group, 'hotcue_' + i + '_gotoandplay', 1 );
			current_hotcue = i;
			break;
		}
	}
	//print("current_hotcue: " + current_hotcue );
	if ( current_hotcue ) {
		APC.current_hotcue[group] = current_hotcue;
	}
	else {
		APC.current_hotcue[group] = 0;
	}
}

// MINI DECKS

APC.minideck_cue = function (channel, control, value, status, group) {
	if ( APC.master ) {
		engine.setValue(group, "cue_gotoandstop", 1);
	}
	else {
		engine.setValue(group, "cue_gotoandplay", 1);
	}
}
APC.minideck_play = function (channel, control, value, status, group) {
	if ( engine.getValue(group, "play") ) {
		engine.setValue(group, "play", 0);
	}
	else if ( engine.getValue(group, "playposition") >= 1 ) {
		engine.setValue(group, "cue_gotoandplay", 1);
	}
	else {
		engine.setValue(group, "play", 1);
	}
}

APC.minideck_toggle1_down = function (channel, control, value, status, group) {
	APC.encoder_function = 'gain_scroll';
	APC.encoder_group = group;
}
APC.minideck_toggle1_up = function (channel, control, value, status, group) {
	if ( ! APC.gain_scroll ) {
		if ( APC.library_btn ) {
			engine.setValue(group, "LoadSelectedTrack", 1);
			APC.library_btn = false;
		}
		else {
			script.toggleControl(group, "pfl");
		}
	}
	APC.encoder_function = '';
	APC.encoder_group = '';
	APC.gain_scroll = 0;
}

APC.minideck_toggle2_down = function (channel, control, value, status, group) {
	APC.encoder_function = 'deck_scroll';
	APC.encoder_group = group;
}
APC.minideck_toggle2_up = function (channel, control, value, status, group) {
	if ( ! APC.deck_scroll ) {
		if ( APC.master ) {
			script.toggleControl(group, "keylock");
		}
		else {
			script.toggleControl(group, "quantize");
		}
	}
	APC.encoder_function = '';
	APC.encoder_group = '';
	APC.deck_scroll = 0;
}

APC.minideck_toggle3_down = function (channel, control, value, status, group) {
	APC.encoder_function = 'rate_scroll';
	APC.encoder_group = group;
}
APC.minideck_toggle3_up = function (channel, control, value, status, group) {
	if ( ! APC.rate_scroll ) {
		if ( APC.master ) {
			engine.setValue(group, "sync_enabled", 1);
			engine.setValue(group, 'sync_enabled', 0);
		}
		else {
			script.toggleControl(group, "repeat");
			//engine.setValue(group, "reloop_exit", 1);
		}
	}
	APC.encoder_function = '';
	APC.encoder_group = '';
	APC.rate_scroll = 0;
}




// TRANSPORT

// APC.cue = function (channel, control, value, status, group) {
// 	if ( ! APC.shift ) {
// 		engine.setValue(group, "cue_gotoandplay", 1);
// 	}
// 	else {
// 		engine.setValue(group, "cue_gotoandstop", 1);
// 	}
// }

// Cue
// if no modifier key, go to cue point and stop
// if master key down, go to cue point and play when released
// if shift key down, set new cue point

APC.cue_down = function (channel, control, value, status, group) {
	if ( APC.shift ) {
		engine.setValue(group, "cue_set", 1);
		return;
	}
	APC.longpress_start(channel, control, value, status, group);
	var deck = parseInt(group.substring(8,9));	
	engine.brake(deck, false);
	if ( APC.master ) {
		engine.setValue(group, "cue_gotoandplay", 1);
	}

	else {
		engine.setValue(group, "cue_gotoandstop", 1);
	}
}
APC.cue_up = function (channel, control, value, status, group) {
	if ( APC.shift ) { return; }
	if ( APC.btn_longpress[channel][control] ) {
		if ( ! engine.getValue(group, "play") ) {
			engine.setValue(group, "play", 1);
		}
	}
	APC.longpress_end(channel, control, value, status, group);
}



// --------------------------
// HOT CUES
// --------------------------

// If deck is playing...
// no modifier: go to hotcue and play
// shift btn: clear hotcue
// If deck is stopped...
// no modifier: go to hotcue and play as long as hotcue pad down
// master btn: continue playing when hotcue pad released
// shift btn: clear hotcue

APC.hotcue_map = {
	0: { 53: 1, 54: 2, 55: 3 },
	1: { 53: 4, 54: 5, 55: 6 },
	3: { 53: 1, 54: 2, 55: 3 },
	4: { 53: 4, 54: 5, 55: 6 },
};
APC.hotcue_mapXXX = {
	0: { 53: 4, 54: 5, 55: 6 },
	1: { 50: 1, 49: 2, 48: 3 },
	3: { 53: 4, 54: 5, 55: 6 },
	4: { 50: 1, 49: 2, 48: 3 },
};

APC.hotcue_stop = {
	'[Channel1]': { 1:0, 2:0, 3:0, 4:0, 5:0, 6:0 },
	'[Channel2]': { 1:0, 2:0, 3:0, 4:0, 5:0, 6:0 },
};

APC.hotcue_down = function (channel, control, value, status, group) {
	// print("hotcue_down");
	// print("channel: " + channel);
	// print("control: " + control);
	// print("value: " + value);
	// print("status: " + status);
	var cue_number = APC.hotcue_map[channel][control];
	// print("cue_number: " + cue_number);
	var cue = "hotcue_" + cue_number + "_";
	// print("group/cuepoint: " + group + " / " + cue);
	if ( engine.getValue(group, cue + "enabled" ) ) {
		if (APC.shift) {
			engine.setValue(group, cue + "clear", 1 )
		}
// 		else if (APC.stop_btn) {
// 			engine.setValue(group, cue + "gotoandstop", 1 );
// 		}
		else {
			if ( ! engine.getValue(group, "play") ) {
				APC.hotcue_stop[group][cue_number] = 1;
			}
			engine.setValue(group, cue + "gotoandplay", 1 );
		}
	}
	else {
		engine.setValue(group, cue + "set", 1 )
	}
}

APC.hotcue_up = function (channel, control, value, status, group) {
	// print("hotcue_up");
	var cue_number = APC.hotcue_map[channel][control];
	// print("cue_number: " + cue_number);
	// print("hotcue_stop: " + APC.hotcue_stop[group][cue_number]);
	if ( APC.hotcue_stop[group][cue_number] ) {
		if ( ! APC.master ) {
			engine.setValue(group, "hotcue_" + cue_number + "_gotoandstop", 1 );
		}
		APC.hotcue_stop[group][cue_number] = 0;
	}
}



// --------------------------
// BRAKE FX
// --------------------------

// Brake button
// on button press: start brake
// on button release: if master - stop brake
// if no modifier key, brake until stopped
// if master key down, brake until pad released

APC.brake_down = function (channel, control, value, status, group) {
	var deck = parseInt(group.substring(8,9));
	engine.brake(deck, true);
}
APC.brake_up = function (channel, control, value, status, group) {
	if (APC.master) {
		var deck = parseInt(group.substring(8,9));
		engine.brake(deck, false);
	}
}


// Brake momentary button
// on button press: start brake
// on button release: stop brake

APC.brake_temp_down = function (channel, control, value, status, group) {
	var deck = parseInt(group.substring(8,9));
	engine.brake(deck, true);
}
APC.brake_temp_up = function (channel, control, value, status, group) {
	var deck = parseInt(group.substring(8,9));
	engine.brake(deck, false);
}


// Spinback
// if no modifier key, spinback until stopped
// if master key down, spinback until pad released

APC.spinback_down = function (channel, control, value, status, group) {
	var deck = parseInt(group.substring(8,9));	
	engine.spinback(deck, true);
}
APC.spinback_up = function (channel, control, value, status, group) {
	if (APC.master) {
		var deck = parseInt(group.substring(8,9));	
		engine.spinback(deck, false);
	}
}

// --------------------------
// Deck Toggle Column 1
// Waveform
// --------------------------

APC.waveform_plus_down = function (channel, control, value, status, group) {
	APC.encoder_function = 'deck_scroll';
	APC.encoder_group = group;
}
APC.waveform_plus_up = function (channel, control, value, status, group) {
	if ( ! APC.deck_scroll ) {
		engine.setValue(group,"waveform_zoom_down",1);
	}
	APC.encoder_function = '';
	APC.encoder_group = '';
	APC.deck_scroll = 0;
}
APC.waveform_minus_down = function (channel, control, value, status, group) {
	APC.encoder_function = 'deck_scroll_fine';
	APC.encoder_group = group;
}
APC.waveform_minus_up = function (channel, control, value, status, group) {
	if ( ! APC.deck_scroll ) {
		engine.setValue(group,"waveform_zoom_up",1);
	}
	APC.encoder_function = '';
	APC.encoder_group = '';
	APC.deck_scroll = 0;
}
APC.waveform_sync = function (channel, control, value, status, group) {
	if ( APC.master ) {
		engine.setValue(group,"beats_translate_curpos",1);
		return;
	}
	if (group === "[Channel1]") {
		engine.setValue(
			group,
			"waveform_zoom",
			engine.getValue("[Channel2]","waveform_zoom")
		);
	}
	else {
		engine.setValue(
			group,
			"waveform_zoom",
			engine.getValue("[Channel1]","waveform_zoom")
		);
	}
}

// --------------------------
// Deck Toggle Column 2
// --------------------------

APC.deck_toggle_2_1_down = function (channel, control, value, status, group) {
	APC.encoder_group = group;
	APC.encoder_function = 'rate_scroll';
}
APC.deck_toggle_2_1_up = function (channel, control, value, status, group) {
	if ( ! APC.rate_scroll ) {
		//print("APC.deck_toggle_2_1_up current rate: " + engine.getValue(group, 'rate' ) );
		if ( APC.master ) {
			engine.setValue(group, 'rate', 0);
		}
		else {
			engine.setValue(group, 'beatsync', 1);
			engine.setValue(group, 'beatsync', 0);
			engine.setValue(group, 'sync_enabled', 0);
		}
		//print("APC.deck_toggle_2_1_up new rate: " + engine.getValue(group, 'rate' ) );
	}
	APC.rate_scroll = 0;
	APC.encoder_group = '';
	APC.encoder_function = '';
}

APC.deck_toggle_2_2_down = function (channel, control, value, status, group) {
	APC.encoder_group = group;
	APC.encoder_function = 'rate_scroll_fine';
}
APC.deck_toggle_2_2_up = function (channel, control, value, status, group) {
	if ( ! APC.rate_scroll ) {
		if ( APC.master ) {
			engine.setValue(group, 'beatsync_tempo', 1);
			engine.setValue(group, 'beatsync_tempo', 0);
		}
		else {
			engine.setValue(group, 'beatsync_phase', 1);
			engine.setValue(group, 'beatsync_phase', 0);
		}
	}
	APC.rate_scroll = 0;
	APC.encoder_group = '';
	APC.encoder_function = '';
}

APC.deck_toggle_2_3_down = function (channel, control, value, status, group) {
	if ( APC.master ) {
		engine.setValue(group, 'rate', 0);
	}
	else {
		script.toggleControl(group, "sync_master");
	}
}




// --------------------------
// BETA FUNCTIONS
// --------------------------

APC.loop_echo_cfg = {
	'[Channel1]': { 'timer': 0, 'enabled': 0 },
	'[Channel2]': { 'timer': 0, 'enabled': 0 },
};

APC.loop_echo_sim_down = function (channel, control, value, status, group) {
	var cfg = APC.loop_echo_cfg[group];
	if ( cfg['timer'] ) {
		engine.stopTimer( cfg['timer'] );
		cfg['timer'] = 0;
	}
	if ( cfg['enabled'] ) {
		if ( engine.getValue(group, 'loop_enabled') ) {
			engine.setValue(group, 'reloop_exit', 1);
		}
		cfg['enabled'] = 0;
	}
	else {
		engine.setValue(group, 'loop_in', 1);
		cfg['enabled'] = 1;
	}
}
APC.loop_echo_sim_up = function (channel, control, value, status, group) {
	var cfg = APC.loop_echo_cfg[group];
	if ( cfg['timer'] ) {
		engine.stopTimer( cfg['timer'] );
		cfg['timer'] = 0;
	}
	if ( ! cfg['enabled'] ) { return; }
	engine.setValue(group, 'loop_out', 1);
	engine.setParameter(
		group,
		'volume',
		engine.getParameter(group, 'volume') - .05
	);	
	var samples = engine.getValue(group, 'loop_end_position') - engine.getValue(group, 'loop_start_position');
	var loop_length = Math.round( samples / 44.1 );

	cfg['timer'] = engine.beginTimer(
		loop_length,
		function () {
			var volume = engine.getParameter(group, 'volume');
			if ( volume < .05 ) { return; }
			engine.setParameter( group, 'volume', volume - .08 );	
		}
	);
}





APC.beat_decay_down = function (channel, control, value, status, group) {
	engine.connectControl(group, 'beat_active', 'APC.beat_active_decay');
}
APC.beat_decay_up = function (channel, control, value, status, group) {
	engine.connectControl(group, 'beat_active', 'APC.beat_active_decay', true);
	engine.connectControl(group, 'beat_active', 'APC.beat_active_reset_key');
}
APC.beat_active_decay = function (value, group, control) {
	if ( ! value ) { return; }
	var pitch = engine.getParameter(group,'pitch');
	if ( pitch <= 0 ) { return; }
	if ( APC.master ) {
		pitch = pitch - 0.1;
	}
	else {
		pitch = pitch - 0.075;
	}
	if ( pitch < 0 ) { pitch = 0; }
	engine.setParameter(group, 'pitch', pitch);	
}
APC.beat_active_reset_key = function (value, group, control) {
	if ( ! value ) { return; }
	engine.setValue(group,"reset_key",1);
	engine.connectControl(group, 'beat_active', 'APC.beat_active_reset_key', true);
}

// --------------------------
// end BETA FUNCTIONS
// --------------------------



APC.pitch_bend_down = function (channel, control, value, status, group) {
	APC.pitch_counter = 6;
	APC.encoder_group = group;
	APC.encoder_function = 'pitch_adjust';
}
APC.pitch_bend_up = function (channel, control, value, status, group) {
	engine.setValue(group,"reset_key",1);
	APC.encoder_group = '';
	APC.encoder_function = '';
}


// Rate Temp Down and Rewind
// if no modifier key, rate_temp_down
// if master key down, rate_temp_down_small
// if shift key down, rewind

APC.rate_down_temp_down = function (channel, control, value, status, group) {
	if (APC.shift) {
		engine.setValue(group,"back",1);
	}
	else if (APC.master) {
		engine.setValue(group,"rate_temp_down_small",1);
	}
	else {
		engine.setValue(group,"rate_temp_down",1);
	}
}
APC.rate_down_temp_up = function (channel, control, value, status, group) {
	if (APC.shift) {
		engine.setValue(group,"back",0);
	}
	else if (APC.master) {
		engine.setValue(group,"rate_temp_down_small",0);
	}
	else {
		engine.setValue(group,"rate_temp_down",0);
	}
}

// Rate Temp Up and Fast Forward
// if no modifier key, rate_temp_up
// if master key down, rate_temp_up_small
// if shift key down, ffwd

APC.rate_up_temp_down = function (channel, control, value, status, group) {
	if (APC.shift) {
		engine.setValue(group,"fwd",1);
	}
	else if (APC.master) {
		engine.setValue(group,"rate_temp_up_small",1);
	}
	else {
		engine.setValue(group,"rate_temp_up",1);
	}
}
APC.rate_up_temp_up = function (channel, control, value, status, group) {
	if (APC.shift) {
		engine.setValue(group,"fwd",0);
	}
	else if (APC.master) {
		engine.setValue(group,"rate_temp_up_small",0);
	}
	else {
		engine.setValue(group,"rate_temp_up",0);
	}
}

// Punch In

// if deck 1, and xfader full right, set xfader to centre position
// if deck 2, and xfader full left, set xfader to centre position
// when pad released reset xfader to where it was

APC.crossfader_pos = 0;

APC.punch_in_down = function (channel, control, value, status, group) {
	var pos = engine.getValue("[Master]", "crossfader");
	if ( (group === "[Channel1]" && pos >= 0.9) || (group === "[Channel2]" && pos <= -0.9) ) {
		engine.setValue("[Master]", "crossfader", 0);
	}
	APC.crossfader_pos = pos;
}
APC.punch_in_up = function (channel, control, value, status, group) {
	engine.setValue("[Master]", "crossfader", APC.crossfader_pos);
}


// Dubstep Rate

APC.current = {
    '[Channel1]': {
    	'rate': 0.5,
    },
    '[Channel2]': {
    	'rate': 0.5,
    },
};

APC.dubstep_rate_down = function (channel, control, value, status, group) {
	APC.current[group]['rate'] = engine.getParameter(group, "rate");
	engine.setParameter(group, "rate", APC.current[group]['rate'] / 2 );
}
APC.dubstep_rate_up = function (channel, control, value, status, group) {
	var new_rate = APC.current['rate'];
	if ( APC.current[group]['rate'] ) { 
		engine.setParameter(group, "rate", APC.current[group]['rate'] );
	}
	else {
		engine.setValue(group, "rate_set_default", 1 );
	}
}

// --------------------------
// end UNUSED FUNCTIONS
// --------------------------












// --------------------------
// Looper - Momentary
// --------------------------

// Loop Temp

APC.stop_all_loops = function (channel, control, value, status, group) {
	if ( engine.getValue('[Channel1]',"loop_enabled") ) {
		engine.setValue('[Channel1]', "reloop_exit", 1);	
	}
	if ( engine.getValue('[Channel2]',"loop_enabled") ) {
		engine.setValue('[Channel2]', "reloop_exit", 1);	
	}
}

APC.loop_two_down = function () {
	engine.setValue(group, "beatloop", 2);
}
APC.loop_one_down = function (channel, control, value, status, group) {
	engine.setValue(group, "beatloop", 1);
}
APC.loop_half_down = function (channel, control, value, status, group) {
	engine.setValue(group, "beatloop", 0.5);
}
APC.loop_quarter_down = function (channel, control, value, status, group) {
	engine.setValue(group, "beatloop", 0.25);
}
APC.loop_temp_up = function (channel, control, value, status, group) {
	if ( engine.getValue(group,"loop_enabled") ) {
		engine.setValue(group, "reloop_exit", 1);	
	}
}

// Loop & Pitch Decay Temp

APC.pitch_decay_config = {
	'[Channel1]': {
		timer: 0,
	},
	'[Channel2]': {
		timer: 0,
	},
};

APC.loop_half_and_decay_down = function (channel, control, value, status, group) {
	//print("loop_half_and_decay_down");
// 	engine.setValue(group, "beatloop", 0.5);
// 	APC.pitch_decay( group, APC.pitch_decay_config[group] );
// 	APC.pitch_decay_timer( group, APC.pitch_decay_config[group], 100 );
	var decay;
	var interval;
	if ( APC.master ) {
		// 0.2 per second - 2.5s
		//decay = 0.02;
		//interval = 100;
		// 0.25 per second - 2s
		//decay = 0.02;
		//interval = 80;
		// 0.125 per second - 4s
		decay = 0.01;
		interval = 80;
	}
	else {
		// 0.25 per second - 2s
		decay = 0.01;
		interval = 40;
	}
	APC.loop_and_decay_down( group, APC.pitch_decay_config[group], 0.5, decay, interval );
}
APC.loop_half_and_decay_up = function (channel, control, value, status, group) {
	//print("loop_half_and_decay_up");
	APC.loop_and_decay_up( group, APC.pitch_decay_config[group] );
}

APC.loop_quarter_and_decay_down = function (channel, control, value, status, group) {
	//print("loop_quarter_and_decay_down");
// 	engine.setValue(group, "beatloop", 0.25);
// 	APC.pitch_decay( group, APC.pitch_decay_config[group] );
// 	APC.pitch_decay_timer( group, APC.pitch_decay_config[group], 100 );
	var decay;
	var interval;
	if ( APC.master ) {
		// 0.2 per second - 2.5s
		decay = 0.02;
		interval = 100;
		// 0.225 per second - 2.2s
		decay = 0.018;
		interval = 80;
	}
	else {
		// 0.5 per second - 1s
		decay = 0.02;
		interval = 40;
	}
	APC.loop_and_decay_down( group, APC.pitch_decay_config[group], 0.25, decay, interval );
}
APC.loop_quarter_and_decay_up = function (channel, control, value, status, group) {
	//print("loop_quarter_and_decay_up");
	APC.loop_and_decay_up( group, APC.pitch_decay_config[group] );
}

APC.loop_and_decay_down = function (group,cfg,loop,decay,interval) {
	//print("loop_and_decay_down");
	engine.setValue(group, "beatloop", loop);
	if ( cfg['timer'] ) {
		engine.stopTimer( cfg['timer'] );
		cfg['timer'] = 0;
	}
	APC.pitch_decay( group, cfg, decay );
	APC.pitch_decay_timer( group, cfg, decay, interval );
}

APC.loop_and_decay_up = function (group,cfg) {
	//print("loop_and_decay_up");
	if ( engine.getValue(group,"loop_enabled") ) {
		engine.setValue(group, "reloop_exit", 1);	
	}
	if ( cfg['timer'] ) {
		engine.stopTimer( cfg['timer'] );
		cfg['timer'] = 0;
	}
	engine.setValue(group,"reset_key",1);
}

APC.pitch_decay_timer = function (group,cfg,decay,interval) {
	//print("pitch_decay_timer");
	cfg['timer'] = engine.beginTimer(
		interval,
		function () { APC.pitch_decay(group,cfg,decay); }
	);
}

APC.pitch_decay = function (group,cfg,decay) {
	//print("pitch_decay");
	if ( ! decay ) { decay = 0.02; }
	var pitch = engine.getParameter(group, 'pitch');
	if ( pitch <= 0 ) {
		if ( cfg['timer'] ) {
			engine.stopTimer( cfg['timer'] );
			cfg['timer'] = 0;
		}
	}
	else {
		engine.setParameter(group, 'pitch', pitch - decay);
	}
}


// --------------------------
// SAMPLER / LOOPER
// --------------------------

APC.pad_track7_row1_down = function (channel, control, value, status, group) {
	if (APC.loop_group) {
		APC.loop_in();
	}
	else {
		APC.sampler_mode = 'normal';
		var cfg = APC.midi_config[group]['sam_mom_off'];
		midi.sendShortMsg( cfg['status'], cfg['note'], cfg['value'] );	
		cfg = APC.midi_config[group]['sam_norm_on'];
		midi.sendShortMsg( cfg['status'], cfg['note'], cfg['value'] );	
	}
}
APC.pad_track8_row1_down = function (channel, control, value, status, group) {
	if (APC.loop_group) {
		APC.loop_out();
	}
	else {
		APC.sampler_mode = 'momentary';
		var cfg = APC.midi_config[group]['sam_norm_off'];
		midi.sendShortMsg( cfg['status'], cfg['note'], cfg['value'] );	
		cfg = APC.midi_config[group]['sam_mom_on'];
		midi.sendShortMsg( cfg['status'], cfg['note'], cfg['value'] );	
	}
}

APC.sampler_volume = function (channel, control, value, status, group) {
	if (! APC.sampler_group) { return; }
	engine.setParameter(
		APC.sampler_group,
		'volume',
		script.absoluteLin(value, 0, 1)
	);
}

APC.pad_track7_row2_down = function (channel, control, value, status, group) {
	if (APC.loop_group) { APC.beatloop_btn(16); }
	else { APC.sampler_btn_down(channel, control, group); }
}
APC.pad_track7_row2_up = function (channel, control, value, status, group) {
	if (APC.loop_group) { return; }
	else { APC.sampler_btn_up(channel, control, group); }
}

APC.pad_track7_row3_down = function (channel, control, value, status, group) {
	if (APC.loop_group) { APC.beatloop_btn(8); }
	else { APC.sampler_btn_down(channel, control, group); }
}
APC.pad_track7_row3_up = function (channel, control, value, status, group) {
	if (APC.loop_group) { return; }
	else { APC.sampler_btn_up(channel, control, group); }
}

APC.pad_track7_row4_down = function (channel, control, value, status, group) {
	if (APC.loop_group) { APC.beatloop_btn(4); }
	else { APC.sampler_btn_down(channel, control, group); }
}
APC.pad_track7_row4_up = function (channel, control, value, status, group) {
	if (APC.loop_group) { return; }
	else { APC.sampler_btn_up(channel, control, group); }
}

APC.pad_track7_row5_down = function (channel, control, value, status, group) {
	if (APC.loop_group) { APC.beatloop_btn(2); }
	else { APC.sampler_btn_down(channel, control, group); }
}
APC.pad_track7_row5_up = function (channel, control, value, status, group) {
	if (APC.loop_group) { return; }
	else { APC.sampler_btn_up(channel, control, group); }
}

APC.pad_track8_row2_down = function (channel, control, value, status, group) {
	if (APC.loop_group) { APC.beatloop_btn(1); }
	else { APC.sampler_btn_down(channel, control, group); }
}
APC.pad_track8_row2_up = function (channel, control, value, status, group) {
	if (APC.loop_group) { return; }
	else { APC.sampler_btn_up(channel, control, group); }
}

APC.pad_track8_row3_down = function (channel, control, value, status, group) {
	if (APC.loop_group) { APC.beatloop_btn(0.5); }
	else { APC.sampler_btn_down(channel, control, group); }
}
APC.pad_track8_row3_up = function (channel, control, value, status, group) {
	if (APC.loop_group) { return; }
	else { APC.sampler_btn_up(channel, control, group); }
}

APC.pad_track8_row4_down = function (channel, control, value, status, group) {
	if (APC.loop_group) { APC.beatloop_btn(0.25); }
	else { APC.sampler_btn_down(channel, control, group); }
}
APC.pad_track8_row4_up = function (channel, control, value, status, group) {
	if (APC.loop_group) { return; }
	else { APC.sampler_btn_up(channel, control, group); }
}

APC.pad_track8_row5_down = function (channel, control, value, status, group) {
	if (APC.loop_group) { APC.beatloop_btn(0.125); }
	else { APC.sampler_btn_down(channel, control, group); }
}
APC.pad_track8_row5_up = function (channel, control, value, status, group) {
	if (APC.loop_group) { return; }
	else { APC.sampler_btn_up(channel, control, group); }
}
// --------------------------
// Sampler Decks
// --------------------------

APC.sampler_mode = 'normal';
APC.sampler_group = '';

APC.sampler_btn_down = function (channel, control, group) {
	if ( APC.library_btn ) {
		engine.setValue(group, "LoadSelectedTrack", 1);
	}
	else if (APC.master) {
		APC.sampler_group = group;
	}
	else {
		engine.setValue(group, 'start_play', 1);
		if ( APC.sampler_group && APC.sampler_group !== group ) {
			engine.softTakeoverIgnoreNextValue(APC.sampler_group, 'volume');
		}
		APC.sampler_group = group;
	}
}
APC.sampler_btn_up = function (channel, control, group) {
	if (APC.library_btn) {
		APC.library_btn = false;
		return;
	}
	else if (APC.master) {
		return;
	}
	else if (APC.sampler_mode === 'momentary') {
		engine.setValue(group, 'start_stop', 1);
	}
}


// --------------------------
// Looper
// --------------------------

// Loop Group for Loop Effects

APC.loop_group = '';
APC.loop_groups = [ '[Channel1]', '[Channel2]' ];
APC.move_loop_fwd = false;
APC.move_loop_back = false;

APC.loop_group_toggle = function (channel, control, value, status, group) {
	var cfg = APC.midi_config[group];
	var mst_cfg = APC.midi_config['[Master]'];
	if ( group === APC.loop_group ) { // already on so turn off
		APC.midi_msg( cfg['loop_off'] );	
		APC.loop_group_set('');	
		APC.midi_msg( mst_cfg['loop_in_off'] );	
		APC.midi_msg( mst_cfg['loop_out_off'] );	
	}
	else {
		APC.loop_group_set(group);	
		APC.midi_msg( cfg['loop_on'] );	
		APC.midi_msg( mst_cfg['loop_in_on'] );	
		APC.midi_msg( mst_cfg['loop_out_on'] );	
	}
}
APC.loop_group_set = function (group) {
	APC.loop_group = '';
	var cfg = APC.midi_config[group];
	var length = APC.loop_groups.length;
	var key;
	for (var i = 0; i < length; i++) {
		key = APC.loop_groups[i];
		if ( group === key ) {
			APC.loop_group = group;
			// print("loop_group = " + APC.loop_group);
		}
	}
}
APC.midi_msg = function (cfg) {
	midi.sendShortMsg( cfg['status'], cfg['note'], cfg['value'] );	
}


APC.reloop_exit = function () {
	if ( ! APC.loop_group ) { return; }
	engine.setValue(APC.loop_group, "reloop_exit", 1);
	
}

APC.loop_double = function () {
	if ( ! APC.loop_group ) { return; }
	engine.setValue(APC.loop_group, "loop_double", 1);
}
APC.loop_halve = function () {
	if ( ! APC.loop_group ) { return; }
	engine.setValue(APC.loop_group, "loop_halve", 1);
}

APC.move_loop_fwd_down = function (channel, control, value, status, group) {
	APC.move_loop_fwd = true;
	APC.encoder_group = group;
	APC.encoder_function = 'loop_out_scroll';
}
APC.move_loop_fwd_up = function (channel, control, value, status, group) {
	APC.move_loop_fwd = false;
	APC.encoder_group = '';
	APC.encoder_function = '';
}

APC.move_loop_back_down = function (channel, control, value, status, group) {
	APC.move_loop_back = true;
	APC.encoder_group = group;
	APC.encoder_function = 'loop_in_scroll';
}
APC.move_loop_back_up = function (channel, control, value, status, group) {
	APC.move_loop_back = false;
	APC.encoder_group = '';
	APC.encoder_function = '';
}

APC.loop_in = function () {
	if ( ! APC.loop_group ) { return; }
	engine.setValue(APC.loop_group, "loop_in", ! APC.master);
}
APC.loop_out = function () {
	if ( ! APC.loop_group ) { return; }
	engine.setValue(APC.loop_group, "loop_out", ! APC.master);
	
}

APC.loop_thirtytwo	= function () { APC.beatloop_btn(32); }
APC.loop_sixteen	= function () { APC.beatloop_btn(16); }
APC.loop_eight		= function () { APC.beatloop_btn(8); }
APC.loop_four		= function () { APC.beatloop_btn(4); }
APC.loop_two		= function () { APC.beatloop_btn(2); }
APC.loop_one		= function () { APC.beatloop_btn(1); }
APC.loop_half		= function () { APC.beatloop_btn(0.5); }
APC.loop_quarter	= function () { APC.beatloop_btn(0.25); }
APC.loop_eighth		= function () { APC.beatloop_btn(0.125); }

APC.beatloop_btn = function (number) {
	//print('beatloop_btn');
	if ( ! APC.loop_group ) { return; }
	if ( APC.move_loop_fwd ) {
		//print('-move_loop_fwd');
		engine.setValue(APC.loop_group, "loop_move_" + number + "_forward", 1);
	}
	else if ( APC.move_loop_back ) {
		//print('-move_loop_back');
		engine.setValue(APC.loop_group, "loop_move_" + number + "_backward", 1);
	}
	else {
		//print('-set beatloop');
		engine.setValue(APC.loop_group, "beatloop", number);
	}
}

// --------------------------
// END Looper
// --------------------------

// Beat Reduce FX

APC.beat_reduce_down = function (channel, control, value, status, group) {
	engine.connectControl(group, 'beat_active', 'APC.beat_active_reduce');
}
APC.beat_reduce_up = function (channel, control, value, status, group) {
	engine.connectControl(group, 'beat_active', 'APC.beat_active_reduce', true);
}
APC.beat_active_reduce = function (value, group, control) {
	if ( ! value ) { return; }
	var volume_original = engine.getParameter(group, 'volume');
	var volume;
	if ( APC.master ) {
		volume = 0.25;
	}
	else {
		volume = 0.5;
	}
	engine.setParameter(group, 'volume', volume);	
	cfg['timer'] = engine.beginTimer(
		200,
		function () {
			engine.setParameter( group, 'volume', volume_original );
		}, true
	);
}

// Gate FX

APC.fx_gate_config = {
	timer: 0, rate: 5, counter: 0, volume: 'on',
};

APC.fx_gate_down = function (channel, control, value, status, group) {
	APC.encoder_group = group;
	APC.encoder_function = 'fx_gate_rate';
	var cfg = APC.fx_gate_config;
	if ( cfg['timer'] ) {
		engine.stopTimer( cfg['timer'] );
		cfg['timer'] = 0;
	}
	cfg['rate'] = 5; // 4 times per second
	cfg['counter'] = 4;
	cfg['timer'] = engine.beginTimer(
		50,
		function () {
			cfg['counter']++;
			//print("counter/rate: " + cfg['counter'] + '/' + cfg['rate']);
			if ( cfg['counter'] % cfg['rate'] ) {
				return;
			}
			cfg['counter'] = 0;
			if ( cfg['volume'] === 'on' ) {
				engine.setParameter( group, 'volume', 0.1 );
				cfg['volume'] = 'off';
			}
			else {
				engine.setParameter( group, 'volume', 1 );
				cfg['volume'] = 'on';
			}
		}
	);
}
APC.fx_gate_up = function (channel, control, value, status, group) {
	var cfg = APC.fx_gate_config;
	if ( cfg['timer'] ) {
		engine.stopTimer( cfg['timer'] );
		cfg['timer'] = 0;
	}
	cfg['rate'] = 5;
	cfg['counter'] = 0;
	engine.setParameter( group, 'volume', 1 );
	APC.encoder_group = '';
	APC.encoder_function = '';
}




// --------------------------
// Echo FX
// --------------------------
// init function: APC.fx_echo_load_init();

APC.fx_echo_config = {
	'[Channel1]': {
		effect: '[EffectRack1_EffectUnit2_Effect2]',
		send: 1, delay: 0.4, feedback: 0.8,
		enqbled: 0,
	},
	'[Channel2]': {
		effect: '[EffectRack1_EffectUnit3_Effect2]',
		send: 1, delay: 0.4, feedback: 0.8,
		enqbled: 0,
	},
};

APC.fx_echo_load_init = function() {
	print("fx_echo_load_init");
	APC.fx_echo_load('[Channel1]');
	APC.fx_echo_load('[Channel2]');
	engine.beginTimer(2000, 'APC.fx_echo_set_init', true);
	print("--- fx_echo_load_init done");
}

APC.fx_echo_load = function(group) {
	print("fx_echo_load for: " + group);
	var effect = APC.fx_echo_config[group]['effect'];
	for (var i = 1; i <= 9; i++) {
		engine.setValue(effect, "next_effect", 1);
	}
}

APC.fx_echo_set_init = function() {
	print("fx_echo_set_init");
	APC.fx_echo_set('[Channel1]');
	APC.fx_echo_set('[Channel2]');
}

APC.fx_echo_set = function(group) {
	print("fx_echo_set for: " + group);
	var cfg = APC.fx_echo_config[group];
	var effect = cfg['effect'];
	engine.setValue(effect, "enabled", 0);
	engine.setParameter(effect, "parameter1", cfg['send']);
	engine.setParameter(effect, "parameter2", cfg['delay']);
	engine.setParameter(effect, "parameter3", cfg['feedback']);
	print("--- fx_echo_set done");
}

// on button press
// if effect is not enabled, turn on effect, initialise long press
// if effect is enabled, turn off effect, clear long press
// on button release
// if it is a long press, turn off the send
// clear long press

APC.fx_echo_down = function (channel, control, value, status, group) {
	print("fx_echo_down...");
	print("channel, control, status: " + channel + ', ' + control + ', ' + status);
	var cfg = APC.fx_echo_config[group];
	if ( cfg['enqbled'] ) {
		engine.setValue( cfg['effect'], 'enabled', 0 );
		engine.setParameter( cfg['effect'], 'parameter1', 0 );
		cfg['enqbled'] = 0;
		APC.longpress_end(channel, control, value, status, group);
	}
	else {
		engine.setParameter( cfg['effect'], 'parameter1', 1 );
		engine.setValue( cfg['effect'], 'enabled', 1 );
		cfg['enqbled'] = 1;
		APC.longpress_start(channel, control, value, status, group);
	}
}

APC.fx_echo_up = function (channel, control, value, status, group) {
	print("fx_echo_up...");
	print("channel, control, status: " + channel + ', ' + control + ', ' + status);
	if ( APC.btn_longpress[channel][control] ) {
		engine.setParameter( APC.fx_echo_config[group]['effect'], 'parameter1', 0 );
	}
	APC.longpress_end(channel, control, value, status, group);
}



// --------------------------
// END Echo FX
// --------------------------






// --------------------------
// EQ FX
// --------------------------
// init function: APC.fx_eq_load_init();
// init function: APC.fx_eq8_load_values_init();

APC.fx_eq8_config = {
	unit: '[EffectRack1_EffectUnit1]',
	effect: '[EffectRack1_EffectUnit1_Effect1]',
	parameter1: {
		multiplier: .002,
		reset: 0, max: 0, min: 0
	},
	parameter2: {
		multiplier: .004,
		reset: 0, max: 0, min: 0
	},
	parameter3: {
		multiplier: .006,
		reset: 0, max: 0, min: 0
	},
	filter: {
		reset: 0, max: 0, min: 0
	},
	sweep: {
		freq: 0, gain: 0,
		reset: 0, max: 0, min: 0
	},
};

APC.fx_eq3_config = {
	'[Channel1]': {
		unit: '[EffectRack1_EffectUnit2]',
		effect: '[EffectRack1_EffectUnit2_Effect1]',
    	filter: '[QuickEffectRack1_[Channel1]]',
    	filter_reset: 0,
	},
	'[Channel2]': {
		unit: '[EffectRack1_EffectUnit3]',
		effect: '[EffectRack1_EffectUnit3_Effect1]',
    	filter: '[QuickEffectRack1_[Channel2]]',
    	filter_reset: 0,
	},
};

APC.fx_eq_load_init = function() {
	print("fx_eq_load_init");
	APC.fx_eq8_load();
	APC.fx_eq3_load('[Channel1]');
	APC.fx_eq3_load('[Channel2]');
	print("--- fx_eq_load_init done");
}

APC.fx_eq8_load = function() {
	print('fx_eq8_load');
	var cfg = APC.fx_eq8_config;
	var unit = cfg['unit'];
	var effect = cfg['effect'];
	for (var i = 1; i <= 4; i++) {
		engine.setValue(effect, 'next_effect', 1);
	}
	engine.setValue(unit, 'mix', 1);
	engine.setValue(unit, 'enabled', 1);
	engine.setValue(unit, 'group_[Master]_enable', 0);
	engine.setValue(effect, 'enabled', 1);
}

APC.fx_eq3_load = function(group) {
	print('fx_eq3_load');
	var cfg = APC.fx_eq3_config[group];
	var unit = cfg['unit'];
	var effect = cfg['effect'];
	for (var i = 1; i <= 3; i++) {
		engine.setValue(effect, 'next_effect', 1);
	}
	engine.setValue(unit, 'mix', 1);
	engine.setValue(unit, 'enabled', 1);
	engine.setValue(unit, 'group_' + group + '_enable', 1);
	engine.setValue(effect, 'enabled', 1);
}

APC.fx_eq8_load_values_init = function() {
	// print('fx_eq8_load_values');
	// set eq8 filter values
	APC.fx_eq8_config['filter']['values_lpf'] = APC.eq8_filter_vals_lpf;
	APC.fx_eq8_config['filter']['values_hpf'] = APC.eq8_filter_vals_hpf;
	APC.fx_eq8_config['filter']['values'] = APC.eq8_filter_vals_lpf;
	// set eq8 sweep values
	APC.fx_eq8_config['sweep']['values'] = APC.eq8_sweep_vals;
}

// --------------------------
// *** EQ3 Functions ***

// APC.bass_fader
// APC.bass_high_fader
// APC.reset_eq3_params
// APC.super_filter

// Deck EQ Faders - todo does they need a reset param?

APC.bass_fader = function (channel, control, value, status, group) {
	// print("bass_fader: " + value);
	var effect = APC.fx_eq3_config[group]['effect'];
	if (value < 6) {
		engine.setParameter( effect, "parameter1", 0 );
	}
	else if (value > 121) {
		engine.setParameter( effect, "parameter1", 0.5 );
	}
	else {
		engine.setParameter( effect, "parameter1", (value - 5) * .0043 );
	}
}

APC.bass_high_fader = function (channel, control, value, status, group) {
	// print("bass_high_fader: " + value);
	var effect = APC.fx_eq3_config[group]['effect'];
	if (value < 6) {
		engine.setParameter( effect, "parameter1", 0 );
		engine.setParameter( effect, "parameter3", 0 );
	}
	else if (value > 121) {
		engine.setParameter( effect, "parameter1", 0.5 );
		engine.setParameter( effect, "parameter3", 0.5 );
	}
	else {
		value = (value - 5) * .0043;
		engine.setParameter( effect, "parameter1", value );
		engine.setParameter( effect, "parameter3", value );
	}
}

APC.reset_eq3_params = function (channel, control, value, status, group) {
	var effect = APC.fx_eq3_config[group]['effect'];
	engine.setParameter( effect, 'parameter2', 0.5 );
	engine.setParameter( effect, 'parameter3', 0.5 );
	var cfg = APC.midi_config[group];
	midi.sendShortMsg(cfg['mid']['status'], cfg['mid']['note'], 64 );
	midi.sendShortMsg(cfg['high']['status'], cfg['high']['note'], 64 );
}


// Super Filters (Low Pass left, High Pass right)

APC.super_filter = function (channel, control, value, status, group) {
	// print("super_filter: " + value);
	var cfg = APC.fx_eq3_config[group];
	// print("filter_reset: " + cfg['filter_reset']);
	if (value > 60 && value < 68) {
		if (cfg['filter_reset']) { return }
		engine.setParameter( cfg['filter'], "super1", 0.5 );
		cfg['filter_reset'] = 1;
		cfg = APC.midi_config[group]['filter'];
		midi.sendShortMsg(cfg['status'], cfg['note'], 64 );
		return;
	}
	cfg['filter_reset'] = 0;
	if (value < 61) {
		engine.setParameter( cfg['filter'], "super1", 0.1 + value * 0.0066 );
	}
	else {
		engine.setParameter( cfg['filter'], "super1", 0.5 + (value - 67) * 0.003 );
	}
}


// --------------------------
// *** START EQ8 ***

// APC.eq8_param1
// APC.eq8_param2
// APC.eq8_param3
// APC.reset_eq8_params
// 
// APC.eq8_sweep_gain
// APC.eq8_sweep_frequency
// 
// APC.eq8_filter_toggle
// APC.eq8_filter

// --------------------------
// EQ8 Params - 45Hz, 100Hz and 220Hz

APC.eq8_param1 = function (channel, control, value, status, group) {
	APC.eq8_param(group,value,'parameter1');
}
APC.eq8_param2 = function (channel, control, value, status, group) {
	APC.eq8_param(group,value,'parameter2');
}
APC.eq8_param3 = function (channel, control, value, status, group) {
	APC.eq8_param(group,value,'parameter3');
}
APC.reset_eq8_params = function (channel, control, value, status, group) {
	APC.eq8_params_reset(group);
}

APC.eq8_param = function (group, value, param) {
	// param is 'parameter1' etc.
	var effect = APC.fx_eq8_config['effect'];
	var cfg = APC.fx_eq8_config[param];
	if (value >= 63 && value <= 74) {
		if ( cfg['reset'] ) { return; }
		engine.setParameter(effect, param, 0.5);
		cfg['reset'] = 1;
		cfg = APC.midi_config[group][param];
		midi.sendShortMsg(cfg['status'], cfg['note'], 64);
		return;
	}
	cfg['reset'] = 0;
	if (value === 127) {
		if ( cfg['max'] ) { return; }
		cfg['max'] = 1;
	}
	else if (value === 0) {
		if ( cfg['min'] ) { return; }
		cfg['min'] = 1;
	}
	else {
		cfg['max'] = 0;
		cfg['min'] = 0;
	}
	if (value < 63) {
		value = value * .008;
	}
	else if (value > 74) {
		value = (value - 74) * cfg['multiplier'] + .5;
	}
	engine.setParameter(effect, param, value);
}

APC.eq8_params_reset = function (group) {
	var effect = APC.fx_eq8_config['effect'];
	var cfg;
	for (var i = 1; i <= 3; i++) {
		engine.setParameter(effect, 'parameter' + i, 0.5);
		cfg = APC.fx_eq8_config['parameter' + i];
		cfg['reset'] = 1;
		cfg['max'] = 0;
		cfg['min'] = 0;
		cfg = APC.midi_config[group]['parameter' + i];
		midi.sendShortMsg(cfg['status'], cfg['note'], 64);
	}
}

// --------------------------
// EQ8 Filter - low and high pass filters for parameters 5 to 8

APC.eq8_filter_config = {
	effect: '[EffectRack1_EffectUnit1_Effect1]',
	type: 'values_lpf',
	knob_status: 0xB0, knob_note: 0x13, knob_value: 0,
	btn_note: 0x3D,
	led_status: 0x90, led_note: 0x35, led_on_value: 3, led_off_value: 1,
	value: 0, reset: 0, max: 0, min: 0, is_on: false, is_temp: false
};

APC.eq8_filter_toggle = function (channel, control, value, status, group) {
	var cfg = APC.fx_eq8_config['filter'];
	if (cfg['type'] === 'values_lpf') {
		cfg['type'] = 'values_hpf';
		cfg['values'] = cfg['values_hpf'];
	}
	else {
		cfg['type'] = 'values_lpf';
		cfg['values'] = cfg['values_lpf'];
	}
}

APC.eq8_filter = function (channel, control, value, status, group) {
	// print('APC.eq8_filter value: ' + value);
	APC.eq8_filter_control( APC.fx_eq8_config['effect'], APC.fx_eq8_config['filter'], value );
}

APC.reset_eq8_filter = function (effect) {
	for (var i = 4; i <= 8; i++) {
		engine.setParameter(effect, 'parameter' + i, 0.5);
	}
}

APC.eq8_filter_control = function (effect, cfg, value) {
	if (value < 2) {
		if ( cfg['reset'] ) { return; }
		APC.reset_eq8_filter( effect );
		cfg['reset'] = 1;
		return;
	}
	if (value > 125) {
		if ( cfg['max'] ) { return; }
		value = 126;
		cfg['max'] = 1;
	}
	else {
		cfg['max'] = 0;
	}
	cfg['reset'] = 0;
	var values = cfg['values'];
	value -= 1;
	for (var i = 4; i <= 8; i++) {
		engine.setParameter(effect, 'parameter' + i, values[i-4][value] );	
	}
}

// --------------------------
// EQ8 Sweep - sweeps parameters 5 to 8

APC.eq8_sweep_config = {
	effect: '[EffectRack1_EffectUnit1_Effect1]',
	knob_status: 0xB0, knob_note: 0x34, knob_value: 0,
	gain_knob_status: 0xB0, gain_knob_note: 0x30, gain_knob_value: 64,
	btn_note: 0x57,
	led_status: 0x90, led_note: 0x35, led_on_value: 3, led_off_value: 1,
	value: 0, reset: 0, gain: 0, is_on: false, is_temp: false
};

APC.eq8_sweep_gain = function (channel, control, value, status, group) {
	APC.sweep_gain( APC.fx_eq8_config['effect'], APC.fx_eq8_config['sweep'], value );
}

APC.eq8_sweep_frequency = function (channel, control, value, status, group) {
	// print('APC.eq8_sweep_frequency value: ' + value);
	APC.sweep_control( APC.fx_eq8_config['effect'], APC.fx_eq8_config['sweep'], value );
}

APC.sweep_control = function (effect, cfg, value) {
	cfg['freq'] = value;
	if (value === 0 || value === 127) {
		if ( cfg['reset'] ) { return; }
		APC.reset_eq8_filter( effect );
		cfg['reset'] = 1;
		return;
	}
	cfg['reset'] = 0;
	var values = cfg['values'];
	var gain = cfg['gain'];
	value -= 1;
	if ( gain === 0 ) {
		for (var i = 4; i <= 8; i++) {
			//var param = values[i-4][value];
			// print('p' + i + ' value: ' + param);
			//param = 0.5;
			// print('p' + i + ' newvalue: ' + param);
			engine.setParameter(effect, 'parameter' + i, 0.5 );	
		}
	}
	else if ( gain > 0 ) {
		for (var i = 4; i <= 8; i++) {
			//var param = ( values[i-1][value] - 0.5 ) * gain;
			var param = values[i-4][value];
			// print('p' + i + ' value: ' + param);
			if ( param !== 0.5 ) {
				param = ( param - 0.5 ) * gain;
				param = param + 0.5;
			}
			// print('p' + i + ' newvalue: ' + param);
			engine.setParameter(effect, 'parameter' + i, param );	
		}
	}
	else {
		for (var i = 4; i <= 8; i++) {
			//var param = ( values[i-1][value] - 0.5 ) * gain;
			var param = values[i-4][value];
			// print('p' + i + ' value: ' + param);
			if ( param !== 0.5 ) {
				param = ( param * 1.25 - 0.5 ) * gain;
				param = param + 0.5;
			}
			// print('p' + i + ' newvalue: ' + param);
			engine.setParameter(effect, 'parameter' + i, param );	
		}
	}
}

APC.sweep_gain = function (effect, cfg, value) {
	if (value === 0) {
		cfg['gain'] = -1;
	}
	else if (value === 127) {
		cfg['gain'] = 1;
	}
	else if (value === 64) {
		cfg['gain'] = 0;
	}
	else {
		cfg['gain'] = script.absoluteNonLin(value, -1, 0, 1);
	}
	// print('eq8_sweep_gain' + cfg['gain'] );
	APC.sweep_control(effect, cfg, cfg['freq']);
}

// --------------------------
// EQ8 Values

APC.eq8_filter_vals_hpf = [
[0.5,0.481,0.462,0.442,0.423,0.404,0.385,0.365,0.346,0.327,0.308,0.288,0.269,0.25,0.231,0.212,0.192,0.173,0.154,0.135,0.115,0.096,0.077,0.058,0.038,0.019,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0.5,0.519,0.538,0.558,0.577,0.596,0.615,0.635,0.654,0.673,0.692,0.712,0.731,0.75,0.731,0.712,0.692,0.673,0.654,0.635,0.615,0.596,0.577,0.558,0.538,0.519,0.5,0.481,0.462,0.442,0.423,0.404,0.385,0.365,0.346,0.327,0.308,0.288,0.269,0.25,0.231,0.212,0.192,0.173,0.154,0.135,0.115,0.096,0.077,0.058,0.038,0.019,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.519,0.538,0.558,0.577,0.596,0.615,0.635,0.654,0.673,0.692,0.712,0.731,0.75,0.731,0.712,0.692,0.673,0.654,0.635,0.615,0.596,0.577,0.558,0.538,0.519,0.5,0.481,0.462,0.442,0.423,0.404,0.385,0.365,0.346,0.327,0.308,0.288,0.269,0.25,0.231,0.212,0.192,0.173,0.154,0.135,0.115,0.096,0.077,0.058,0.038,0.019,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.519,0.538,0.558,0.577,0.596,0.615,0.635,0.654,0.673,0.692,0.712,0.731,0.75,0.731,0.712,0.692,0.673,0.654,0.635,0.615,0.596,0.577,0.558,0.538,0.519,0.5,0.481,0.462,0.442,0.423,0.404,0.385,0.365,0.346,0.327,0.308,0.288,0.269,0.25,0.231,0.212,0.192,0.173,0.154,0.135,0.115,0.096,0.077,0.058,0.038,0.019,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.519,0.538,0.558,0.577,0.596,0.615,0.635,0.654,0.673,0.692,0.712,0.731,0.75,0.731,0.712,0.692,0.673,0.654,0.635,0.615,0.596,0.577,0.558,0.538,0.519,0.5,0.476,0.452,0.429,0.405,0.381,0.357,0.333,0.31,0.286,0.262,0.238,0.214,0.19,0.167,0.143,0.119,0.095,0.071,0.048,0.024,0],
];

APC.eq8_filter_vals_lpf = [
[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.519,0.538,0.558,0.577,0.596,0.615,0.635,0.654,0.673,0.692,0.712,0.731,0.75,0.731,0.712,0.692,0.673,0.654,0.635,0.615,0.596,0.577,0.558,0.538,0.519,0.5,0.476,0.452,0.429,0.405,0.381,0.357,0.333,0.31,0.286,0.262,0.238,0.214,0.19,0.167,0.143,0.119,0.095,0.071,0.048,0.024,0],
[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.519,0.538,0.558,0.577,0.596,0.615,0.635,0.654,0.673,0.692,0.712,0.731,0.75,0.731,0.712,0.692,0.673,0.654,0.635,0.615,0.596,0.577,0.558,0.538,0.519,0.5,0.481,0.462,0.442,0.423,0.404,0.385,0.365,0.346,0.327,0.308,0.288,0.269,0.25,0.231,0.212,0.192,0.173,0.154,0.135,0.115,0.096,0.077,0.058,0.038,0.019,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.519,0.538,0.558,0.577,0.596,0.615,0.635,0.654,0.673,0.692,0.712,0.731,0.75,0.731,0.712,0.692,0.673,0.654,0.635,0.615,0.596,0.577,0.558,0.538,0.519,0.5,0.481,0.462,0.442,0.423,0.404,0.385,0.365,0.346,0.327,0.308,0.288,0.269,0.25,0.231,0.212,0.192,0.173,0.154,0.135,0.115,0.096,0.077,0.058,0.038,0.019,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0.5,0.519,0.538,0.558,0.577,0.596,0.615,0.635,0.654,0.673,0.692,0.712,0.731,0.75,0.731,0.712,0.692,0.673,0.654,0.635,0.615,0.596,0.577,0.558,0.538,0.519,0.5,0.481,0.462,0.442,0.423,0.404,0.385,0.365,0.346,0.327,0.308,0.288,0.269,0.25,0.231,0.212,0.192,0.173,0.154,0.135,0.115,0.096,0.077,0.058,0.038,0.019,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0.5,0.481,0.462,0.442,0.423,0.404,0.385,0.365,0.346,0.327,0.308,0.288,0.269,0.25,0.231,0.212,0.192,0.173,0.154,0.135,0.115,0.096,0.077,0.058,0.038,0.019,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

APC.eq8_sweep_vals = [
[0.5,0.525,0.55,0.575,0.6,0.625,0.65,0.675,0.7,0.711,0.722,0.733,0.744,0.756,0.767,0.778,0.789,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.789,0.778,0.767,0.756,0.744,0.733,0.722,0.711,0.7,0.689,0.678,0.667,0.656,0.644,0.633,0.622,0.611,0.6,0.59,0.58,0.57,0.56,0.55,0.54,0.53,0.52,0.51,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.511,0.522,0.533,0.544,0.556,0.567,0.578,0.589,0.6,0.611,0.622,0.633,0.644,0.656,0.667,0.678,0.689,0.7,0.711,0.722,0.733,0.744,0.756,0.767,0.778,0.789,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.79,0.78,0.77,0.76,0.75,0.74,0.73,0.72,0.71,0.7,0.69,0.68,0.67,0.66,0.65,0.64,0.63,0.62,0.61,0.6,0.59,0.58,0.57,0.56,0.55,0.54,0.53,0.52,0.51,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.511,0.522,0.533,0.544,0.556,0.567,0.578,0.589,0.6,0.611,0.622,0.633,0.644,0.656,0.667,0.678,0.689,0.7,0.711,0.722,0.733,0.744,0.756,0.767,0.778,0.789,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.79,0.78,0.77,0.76,0.75,0.74,0.73,0.72,0.71,0.7,0.689,0.678,0.667,0.656,0.644,0.633,0.622,0.611,0.6,0.589,0.578,0.567,0.556,0.544,0.533,0.522,0.511,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.511,0.522,0.533,0.544,0.556,0.567,0.578,0.589,0.6,0.61,0.62,0.63,0.64,0.65,0.66,0.67,0.68,0.69,0.7,0.71,0.72,0.73,0.74,0.75,0.76,0.77,0.78,0.79,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.789,0.778,0.767,0.756,0.744,0.733,0.722,0.711,0.7,0.688,0.675,0.662,0.65,0.638,0.625,0.612,0.6,0.588,0.575,0.562,0.55,0.538,0.525,0.512,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.51,0.52,0.53,0.54,0.55,0.56,0.57,0.58,0.59,0.6,0.61,0.62,0.63,0.64,0.65,0.66,0.67,0.68,0.69,0.7,0.711,0.722,0.733,0.744,0.756,0.767,0.778,0.789,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.788,0.775,0.762,0.75,0.738,0.725,0.712,0.7,0.675,0.65,0.625,0.6,0.575,0.55,0.525,0.5],
];

// *** END EQ8 ***
// --------------------------


// --------------------------
// END EQ FX
// --------------------------





// Longpress - funtions keep track of long/short button presses

APC.btn_pressed		= { 0:{},1:{},2:{},3:{},4:{},5:{},6:{},7:{} }
APC.btn_longpress	= { 0:{},1:{},2:{},3:{},4:{},5:{},6:{},7:{} }

APC.longpress_start = function (channel, control, value, status, group) {
	APC.btn_pressed[channel][control] = 1;
	APC.btn_longpress[channel][control] = 0;
	engine.beginTimer(
		500,
		function () {
			if ( APC.btn_pressed[channel][control] ) {
				APC.btn_longpress[channel][control] = 1;
			}
			else {
				APC.btn_longpress[channel][control] = 0;
			}
		},
		true
	);
}

APC.longpress_end = function (channel, control, value, status, group) {
	APC.btn_pressed[channel][control] = 0;
	APC.btn_longpress[channel][control] = 0;
}
