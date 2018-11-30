package APC_Config::Decks;
use parent qw(APC_Config);
use strict;
use warnings;

sub track_1 {
	return {
		row_1  => {
			on  => { group => '[Channel1]', key => 'APC.hotcue_down' },
			off  => { group => '[Channel1]', key => 'APC.hotcue_up' },
			out => { group => '[Channel1]', key => 'hotcue_1_enabled',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_2  => {
			on  => { group => '[Channel1]', key => 'APC.hotcue_down' },
			off  => { group => '[Channel1]', key => 'APC.hotcue_up' },
			out => { group => '[Channel1]', key => 'hotcue_2_enabled',
											min=>'0.5',max=>'1',on=>'0x05',off=>'0x00' },
		},
		row_3  => {
			on  => { group => '[Channel1]', key => 'APC.hotcue_down' },
			off  => { group => '[Channel1]', key => 'APC.hotcue_up' },
			out => { group => '[Channel1]', key => 'hotcue_3_enabled',
											min=>'0.5',max=>'1',on=>'0x03',off=>'0x00' },
		},
		row_4  => {
			#on  => { group => '[Channel1]', key => 'APC.loop_group_toggle' },
			on =>  { group => '[Channel1]', key => 'APC.pitch_bend_down' },
			off =>  { group => '[Channel1]', key => 'APC.pitch_bend_up' },
			#on  => { group => '[Channel1]', key => 'APC.beat_decay_down' },
			#off => { group => '[Channel1]', key => 'APC.beat_decay_up' },
		},
		row_5  => {
			on  => { group => '[Channel1]', key => 'APC.loop_group_toggle' },
			#on  => { group => '[Channel1]', key => 'APC.rate_up_temp_down' },
			#off => { group => '[Channel1]', key => 'APC.rate_up_temp_up' },
			#on  => { group => '[Channel1]', key => 'APC.loop_echo_sim_down' },
			#off => { group => '[Channel1]', key => 'APC.loop_echo_sim_up' },
		},
		row_6  => {
			on  => { group => '[Channel1]', key => 'APC.rate_up_temp_down' },
			off => { group => '[Channel1]', key => 'APC.rate_up_temp_up' },
		},
		row_7  => {
			on  => { group => '[Channel1]', key => 'APC.rate_down_temp_down' },
			off => { group => '[Channel1]', key => 'APC.rate_down_temp_up' },
		},
		row_8  => {
			on  => { group => '[Channel1]', key => 'APC.waveform_plus_down' },
			off  => { group => '[Channel1]', key => 'APC.waveform_plus_up' },
		},
		row_9  => {
			on  => { group => '[Channel1]', key => 'APC.waveform_minus_down' },
			off  => { group => '[Channel1]', key => 'APC.waveform_minus_up' },
		},
		row_10	=> {
			on  => { group => '[Channel1]', key => 'APC.waveform_sync' },
		},
		fader  => {
			on => { group => '[Channel1]', key => 'APC.bass_fader' },
		},
	};
}

sub track_2 {
	return {
		row_1  => {
			on  => { group => '[Channel1]', key => 'APC.hotcue_down' },
			off  => { group => '[Channel1]', key => 'APC.hotcue_up' },
			out => { group => '[Channel1]', key => 'hotcue_4_enabled',
											min=>'0.5',max=>'1',on=>'0x03',off=>'0x00' },
		},
		row_2  => {
			on  => { group => '[Channel1]', key => 'APC.hotcue_down' },
			off  => { group => '[Channel1]', key => 'APC.hotcue_up' },
			out => { group => '[Channel1]', key => 'hotcue_5_enabled',
											min=>'0.5',max=>'1',on=>'0x03',off=>'0x00' },
		},
		row_3  => {
			on  => { group => '[Channel1]', key => 'APC.hotcue_down' },
			off  => { group => '[Channel1]', key => 'APC.hotcue_up' },
			out => { group => '[Channel1]', key => 'hotcue_6_enabled',
											min=>'0.5',max=>'1',on=>'0x03',off=>'0x00' },
		},
		row_4  => {
			#on  => { group => '[Channel1]', key => 'APC.fx_gate_down' },
			#off => { group => '[Channel1]', key => 'APC.fx_gate_up' },
			on  => { group => '[Channel1]', key => 'APC.beat_reduce_down' },
			off => { group => '[Channel1]', key => 'APC.beat_reduce_up' },
		},
		row_5  => {
			on  => { group => '[Channel1]', key => 'APC.fx_echo_down' },
			off => { group => '[Channel1]', key => 'APC.fx_echo_up' },
			out => { group => '[EffectRack1_EffectUnit2_Effect2]', key => 'enabled',
											min=>'0.5',max=>'1',on=>'0x04',off=>'0x00' },
		},
		row_6  => {
			on  => { group => '[Channel1]', key => 'APC.spinback_down' },
			off => { group => '[Channel1]', key => 'APC.spinback_up' },
		},
		row_7  => {
			on  => { group => '[Channel1]', key => 'APC.cue_down' },
			off => { group => '[Channel1]', key => 'APC.cue_up' },
		},
		row_8  => {
			on  => { group => '[Channel1]', key => 'APC.deck_toggle_2_1_down' },
			off => { group => '[Channel1]', key => 'APC.deck_toggle_2_1_up' },
		},
		row_9  => {
			on  => { group => '[Channel1]', key => 'APC.deck_toggle_2_2_down' },
			off => { group => '[Channel1]', key => 'APC.deck_toggle_2_2_up' },
		},
		row_10	=> {
			on  => { group => '[Channel1]', key => 'APC.deck_toggle_2_3_down' },
			out => { group => '[Channel1]', key => 'sync_master',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		fader  => {
			on => { group => '[Channel1]', key => 'APC.bass_high_fader' },
		},
	};
}


sub track_3 {
	return {
		row_1  => {
			on  => { group => '[Channel1]', key => 'APC.loop_one_down' },
			off => { group => '[Channel1]', key => 'APC.loop_temp_up' },
		},
		row_2  => {
			on  => { group => '[Channel1]', key => 'APC.loop_half_down' },
			off => { group => '[Channel1]', key => 'APC.loop_temp_up' },
		},
		row_3  => {
			on  => { group => '[Channel1]', key => 'APC.loop_quarter_down' },
			off => { group => '[Channel1]', key => 'APC.loop_temp_up' },
		},
		row_4  => {
			on  => { group => '[Channel1]', key => 'APC.loop_half_and_decay_down' },
			off => { group => '[Channel1]', key => 'APC.loop_half_and_decay_up' },
		},
		row_5  => {
			on  => { group => '[Channel1]', key => 'APC.loop_quarter_and_decay_down' },
			off => { group => '[Channel1]', key => 'APC.loop_quarter_and_decay_up' },
		},
		row_6  => {
			on  => { group => '[Channel1]', key => 'APC.brake_down' },
			off => { group => '[Channel1]', key => 'APC.brake_up' },
		},
		row_7  => {
			on  => { group => '[Channel1]', key => 'play' },
			out => { group => '[Channel1]', key => 'play',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_8  => {
			on  => { group => '[Channel1]', key => 'pfl' },
			out => { group => '[Channel1]', key => 'pfl',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_9  => {
			on  => { group => '[Channel1]', key => 'quantize' },
			out => { group => '[Channel1]', key => 'quantize',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_10	=> {
			on  => { group => '[Channel1]', key => 'keylock' },
			out => { group => '[Channel1]', key => 'keylock',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		fader  => {
			on => { group => '[Channel1]', key => 'volume' },
		},
	};
}



sub track_4 {
	return {
		row_1  => {
			on  => { group => '[Channel2]', key => 'APC.hotcue_down' },
			off  => { group => '[Channel2]', key => 'APC.hotcue_up' },
			out => { group => '[Channel2]', key => 'hotcue_1_enabled',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_2  => {
			on  => { group => '[Channel2]', key => 'APC.hotcue_down' },
			off  => { group => '[Channel2]', key => 'APC.hotcue_up' },
			out => { group => '[Channel2]', key => 'hotcue_2_enabled',
											min=>'0.5',max=>'1',on=>'0x05',off=>'0x00' },
		},
		row_3  => {
			on  => { group => '[Channel2]', key => 'APC.hotcue_down' },
			off  => { group => '[Channel2]', key => 'APC.hotcue_up' },
			out => { group => '[Channel2]', key => 'hotcue_3_enabled',
											min=>'0.5',max=>'1',on=>'0x03',off=>'0x00' },
		},
		row_4  => {
			#on  => { group => '[Channel2]', key => 'APC.loop_group_toggle' },
			#on  => { group => '[Channel2]', key => 'APC.beat_decay_down' },
			#off => { group => '[Channel2]', key => 'APC.beat_decay_up' },
			on =>  { group => '[Channel2]', key => 'APC.pitch_bend_down' },
			off =>  { group => '[Channel2]', key => 'APC.pitch_bend_up' },
		},
		row_5  => {
			on  => { group => '[Channel2]', key => 'APC.loop_group_toggle' },
			#on  => { group => '[Channel2]', key => 'APC.rate_up_temp_down' },
			#off => { group => '[Channel2]', key => 'APC.rate_up_temp_up' },
			#on  => { group => '[Channel2]', key => 'APC.loop_echo_sim_down' },
			#off => { group => '[Channel2]', key => 'APC.loop_echo_sim_up' },
		},
		row_6  => {
			on  => { group => '[Channel2]', key => 'APC.rate_up_temp_down' },
			off => { group => '[Channel2]', key => 'APC.rate_up_temp_up' },
		},
		row_7  => {
			on  => { group => '[Channel2]', key => 'APC.rate_down_temp_down' },
			off => { group => '[Channel2]', key => 'APC.rate_down_temp_up' },
		},
		row_8  => {
			on  => { group => '[Channel2]', key => 'APC.waveform_plus_down' },
			off  => { group => '[Channel2]', key => 'APC.waveform_plus_up' },
		},
		row_9  => {
			on  => { group => '[Channel2]', key => 'APC.waveform_minus_down' },
			off  => { group => '[Channel2]', key => 'APC.waveform_minus_up' },
		},
		row_10	=> {
			on  => { group => '[Channel2]', key => 'APC.waveform_sync' },
		},
		fader  => {
			on => { group => '[Channel2]', key => 'APC.bass_fader' },
		},
	};
}

sub track_5 {
	return {
		row_1  => {
			on  => { group => '[Channel2]', key => 'APC.hotcue_down' },
			off  => { group => '[Channel2]', key => 'APC.hotcue_up' },
			out => { group => '[Channel2]', key => 'hotcue_4_enabled',
											min=>'0.5',max=>'1',on=>'0x03',off=>'0x00' },
		},
		row_2  => {
			on  => { group => '[Channel2]', key => 'APC.hotcue_down' },
			off  => { group => '[Channel2]', key => 'APC.hotcue_up' },
			out => { group => '[Channel2]', key => 'hotcue_5_enabled',
											min=>'0.5',max=>'1',on=>'0x03',off=>'0x00' },
		},
		row_3  => {
			on  => { group => '[Channel2]', key => 'APC.hotcue_down' },
			off  => { group => '[Channel2]', key => 'APC.hotcue_up' },
			out => { group => '[Channel2]', key => 'hotcue_6_enabled',
											min=>'0.5',max=>'1',on=>'0x03',off=>'0x00' },
		},
		row_4  => {
			#on  => { group => '[Channel2]', key => 'APC.fx_gate_down' },
			#off => { group => '[Channel2]', key => 'APC.fx_gate_up' },
			on  => { group => '[Channel2]', key => 'APC.beat_reduce_down' },
			off => { group => '[Channel2]', key => 'APC.beat_reduce_up' },
		},
		row_5  => {
			on  => { group => '[Channel2]', key => 'APC.fx_echo_down' },
			off => { group => '[Channel2]', key => 'APC.fx_echo_up' },
			out => { group => '[EffectRack1_EffectUnit3_Effect2]', key => 'enabled',
											min=>'0.5',max=>'1',on=>'0x04',off=>'0x00' },
		},
		row_6  => {
			on  => { group => '[Channel2]', key => 'APC.spinback_down' },
			off => { group => '[Channel2]', key => 'APC.spinback_up' },
		},
		row_7  => {
			on  => { group => '[Channel2]', key => 'APC.cue_down' },
			off => { group => '[Channel2]', key => 'APC.cue_up' },
		},
		row_8  => {
			on  => { group => '[Channel2]', key => 'APC.deck_toggle_2_1_down' },
			off => { group => '[Channel2]', key => 'APC.deck_toggle_2_1_up' },
		},
		row_9  => {
			on  => { group => '[Channel2]', key => 'APC.deck_toggle_2_2_down' },
			off => { group => '[Channel2]', key => 'APC.deck_toggle_2_2_up' },
		},
		row_10	=> {
			on  => { group => '[Channel2]', key => 'APC.deck_toggle_2_3_down' },
			out => { group => '[Channel2]', key => 'sync_master',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		fader  => {
			on => { group => '[Channel2]', key => 'APC.bass_high_fader' },
		},
	};
}


sub track_6 {
	return {
		row_1  => {
			on  => { group => '[Channel2]', key => 'APC.loop_one_down' },
			off => { group => '[Channel2]', key => 'APC.loop_temp_up' },
		},
		row_2  => {
			on  => { group => '[Channel2]', key => 'APC.loop_half_down' },
			off => { group => '[Channel2]', key => 'APC.loop_temp_up' },
		},
		row_3  => {
			on  => { group => '[Channel2]', key => 'APC.loop_quarter_down' },
			off => { group => '[Channel2]', key => 'APC.loop_temp_up' },
		},
		row_4  => {
			on  => { group => '[Channel2]', key => 'APC.loop_half_and_decay_down' },
			off => { group => '[Channel2]', key => 'APC.loop_half_and_decay_up' },
		},
		row_5  => {
			on  => { group => '[Channel2]', key => 'APC.loop_quarter_and_decay_down' },
			off => { group => '[Channel2]', key => 'APC.loop_quarter_and_decay_up' },
		},
		row_6  => {
			on  => { group => '[Channel2]', key => 'APC.brake_down' },
			off => { group => '[Channel2]', key => 'APC.brake_up' },
		},
		row_7  => {
			on  => { group => '[Channel2]', key => 'play' },
			out => { group => '[Channel2]', key => 'play',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_8  => {
			on  => { group => '[Channel2]', key => 'pfl' },
			out => { group => '[Channel2]', key => 'pfl',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_9  => {
			on  => { group => '[Channel2]', key => 'quantize' },
			out => { group => '[Channel2]', key => 'quantize',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_10	=> {
			on  => { group => '[Channel2]', key => 'keylock' },
			out => { group => '[Channel2]', key => 'keylock',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		fader  => {
			on => { group => '[Channel2]', key => 'volume' },
		},
	};
}


sub crossfader {
	return {
		play_btn  => {
			on =>  { group => '[PreviewDeck1]', key => 'LoadSelectedTrackAndPlay' },
		},
		stop_btn  => {
			on =>  { group => '[PreviewDeck1]', key => 'APC.stop_btn_down' },
			off =>  { group => '[PreviewDeck1]', key => 'APC.stop_btn_up' },
		},
		rec_btn  => {
			on =>  { group => '[PreviewDeck1]', key => 'APC.goto_next_hotcue' },
		},
	};
}





1;
