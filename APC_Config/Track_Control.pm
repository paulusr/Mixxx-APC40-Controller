package APC_Config::Track_Control;
use parent qw(APC_Config);
use strict;
use warnings;

sub track_control {
	return {
		row_1_knob_1  => {
			on => { group => '[EffectRack1_EffectUnit2_Effect1]', key => 'parameter3' },
		},
		row_2_knob_1  => {
			on => { group => '[EffectRack1_EffectUnit2_Effect1]', key => 'parameter2' },
		},
		row_1_knob_2  => {
			on  => { group => '[Channel1]', key => 'pregain' },
		},
		row_2_knob_2  => {
			on  => { group => '[QuickEffectRack1_[Channel1]]', key => 'super1' },
		},

		row_1_knob_3  => {
			on => { group => '[EffectRack1_EffectUnit3_Effect1]', key => 'parameter3' },
		},
		row_2_knob_3  => {
			on => { group => '[EffectRack1_EffectUnit3_Effect1]', key => 'parameter2' },
		},
		row_1_knob_4  => {
			on  => { group => '[Channel2]', key => 'pregain' },
		},
		row_2_knob_4  => {
			on  => { group => '[QuickEffectRack1_[Channel2]]', key => 'super1' },
		},

		row_1_btn_1  => {
			on  => { group => '[Channel1]', key => 'APC.reset_eq3_params' },
		},
		row_1_btn_2  => {
			on  => { group => '[Channel1]', key => 'APC.reset_gain' },
		},
		row_1_btn_3  => {
			on  => { group => '[Channel2]', key => 'APC.reset_eq3_params' },
		},
		row_1_btn_4  => {
			on  => { group => '[Channel2]', key => 'APC.reset_gain' },
		},
	};
}



1;
