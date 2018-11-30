package APC_Config::Device_Control;
use parent qw(APC_Config);
use strict;
use warnings;

sub device_control {
	return {
		row_1_knob_1  => {
			on => { group => '[EffectRack1_EffectUnit1_Effect1]', key => 'APC.eq8_sweep_frequency' },
		},
		row_1_knob_2  => {
			on => { group => '[EffectRack1_EffectUnit1_Effect1]', key => 'APC.eq8_sweep_gain' },
		},
		row_1_knob_3  => {
			on => { group => '[EffectRack1_EffectUnit1_Effect1]', key => 'parameter7' },
		},
		row_1_knob_4  => {
			on => { group => '[EffectRack1_EffectUnit1_Effect1]', key => 'parameter8' },
		},
		row_2_knob_1  => {
			on => { group => '[EffectRack1_EffectUnit1_Effect1]', key => 'APC.eq8_param1' },
		},
		row_2_knob_2  => {
			on => { group => '[EffectRack1_EffectUnit1_Effect1]', key => 'APC.eq8_param2' },
		},
		row_2_knob_3  => {
			on => { group => '[EffectRack1_EffectUnit1_Effect1]', key => 'APC.eq8_param3' },
		},
		row_2_knob_4  => {
			on => { group => '[EffectRack1_EffectUnit1_Effect1]', key => 'APC.eq8_filter' },
		},

		row_1_btn_1  => {
			on => { group => '[EffectRack1_EffectUnit1]', key => 'group_[Master]_enable' },
			out => { group => '[EffectRack1_EffectUnit1]', key => 'group_[Master]_enable',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_1_btn_2  => {
			on => { group => '[EffectRack1_EffectUnit1_Effect1]', key => 'APC.eq8_param_reset' },
		},
		row_1_btn_4  => {
			on => { group => '[EffectRack1_EffectUnit1_Effect1]', key => 'APC.eq8_filter_toggle' },
		},
	};
}



1;
