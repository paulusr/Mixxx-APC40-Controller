package APC_Config::Control;
use parent qw(APC_Config);
use strict;
use warnings;

sub track_7 {
	return {
		row_2  => {
			on  => { group => '[Master]', key => 'APC.loop_two_down' },
			off => { group => '[Master]', key => 'APC.loop_temp_up' },
		},
		row_3  => {
			on  => { group => '[Master]', key => 'APC.loop_one_down' },
			off => { group => '[Master]', key => 'APC.loop_temp_up' },
		},
		row_4  => {
			on  => { group => '[Master]', key => 'APC.loop_half_down' },
			off => { group => '[Master]', key => 'APC.loop_temp_up' },
		},
		row_5  => {
			on  => { group => '[Master]', key => 'APC.loop_quarter_down' },
			off => { group => '[Master]', key => 'APC.loop_temp_up' },
		},
	};
}

sub track_8 {
	return {
		row_1  => {
			on  => { group => '[Master]', key => 'APC.dubstep_rate_down' },
			off => { group => '[Master]', key => 'APC.dubstep_rate_up' },
		},
		row_2  => {
			on  => { group => '[Master]', key => 'APC.one_decay_down' },
			off => { group => '[Master]', key => 'APC.one_decay_up' },
		},
		row_3  => {
			on  => { group => '[Master]', key => 'APC.half_decay_down' },
			off => { group => '[Master]', key => 'APC.half_decay_up' },
		},
		row_4  => {
			on  => { group => '[Master]', key => 'APC.loop_half_and_decay_down' },
			off => { group => '[Master]', key => 'APC.loop_half_and_decay_up' },
		},
		row_5  => {
			on  => { group => '[Master]', key => 'APC.loop_quarter_and_decay_down' },
			off => { group => '[Master]', key => 'APC.loop_quarter_and_decay_up' },
		},
	};
}

sub track_master {
	return {
		row_1  => {
			on  => { group => '[Channel1]', key => 'APC.control_group_toggle' },
		},
		row_2  => {
			on  => { group => '[Channel2]', key => 'APC.control_group_toggle' },
		},
		row_3  => {
			on  => { group => '[Sampler1]', key => 'APC.control_group_toggle' },
		},
		row_4  => {
			on  => { group => '[Sampler2]', key => 'APC.control_group_toggle' },
		},
		fader  => {
			on => { group => '[EffectRack1_EffectUnit1]', key => 'mix' },
		},
	};
}




1;
