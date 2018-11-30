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
			on => { group => '[EffectRack1_EffectUnit1_Effect1]', key => 'APC.eq8_filter' },
		},
		row_1_knob_4  => {
			#on => { group => '[Master]', key => 'volume' },
			on => { group => '[Master]', key => 'headVolume' },
		},
		row_2_knob_1  => {
			on => { group => '[Master]', key => 'APC.eq8_param1' },
		},
		row_2_knob_2  => {
			on => { group => '[Master]', key => 'APC.eq8_param2' },
		},
		row_2_knob_3  => {
			on => { group => '[Master]', key => 'APC.eq8_param3' },
		},
		row_2_knob_4  => {
			on => { group => '[Master]', key => 'headMix' },
		},

		row_1_btn_1  => {
			on => { group => '[EffectRack1_EffectUnit1]', key => 'group_[Master]_enable' },
			out => { group => '[EffectRack1_EffectUnit1]', key => 'group_[Master]_enable',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_1_btn_2  => {
			on => { group => '[Master]', key => 'APC.reset_eq8_params' },
		},
		row_1_btn_3  => {
			on => { group => '[EffectRack1_EffectUnit1_Effect1]', key => 'APC.eq8_filter_toggle' },
		},
		row_1_btn_4  => {
			on => { group => '[Master]', key => 'APC.reset_master_gain' },
		},

		row_2_btn_1  => {
			on => { group => '[Channel1]', key => 'beatjump_4_backward' },
		},
		row_2_btn_2  => {
			on => { group => '[Channel1]', key => 'beatjump_4_forward' },
		},
		row_2_btn_3  => {
			on => { group => '[Channel2]', key => 'beatjump_4_backward' },
		},
		row_2_btn_4  => {
			on => { group => '[Channel2]', key => 'beatjump_4_forward' },
		},
	};
}



1;
