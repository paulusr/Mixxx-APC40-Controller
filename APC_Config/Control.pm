package APC_Config::Control;
use parent qw(APC_Config);
use strict;
use warnings;


sub track_master {
	return {
		row_1  => {
			on  => { group => '[Master]', key => 'APC.loop_one_down' },
			off => { group => '[Master]', key => 'APC.loop_temp_up' },
		},
		row_2  => {
			on  => { group => '[Master]', key => 'APC.loop_half_down' },
			off => { group => '[Master]', key => 'APC.loop_temp_up' },
		},
		row_3  => {
			on  => { group => '[Master]', key => 'APC.loop_quarter_down' },
			off => { group => '[Master]', key => 'APC.loop_temp_up' },
		},
		row_4  => {
			on  => { group => '[Master]', key => 'APC.loop_half_and_decay_down' },
			off => { group => '[Master]', key => 'APC.loop_half_and_decay_up' },
		},
		row_5  => {
			on  => { group => '[Master]', key => 'APC.loop_quarter_and_decay_down' },
			off => { group => '[Master]', key => 'APC.loop_quarter_and_decay_up' },
		},
		fader  => {
			on => { group => '[EffectRack1_EffectUnit1]', key => 'mix' },
		},
	};
}




1;
