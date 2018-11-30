package APC_Config::EQ8;
use parent qw(APC_Config);
use strict;
use warnings;

sub track_1 {
	return {
		row_5  => {
			on  => { group => '[EffectRack1_EffectUnit1]', key => 'group_[Channel1]_enable' },
			#off => { group => '[Channel1]', key => 'APC.brake_final_up' },
			out => { group => '[EffectRack1_EffectUnit1]', key => 'group_[Channel1]_enable',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		fader  => {
			on => { group => '[EqualizerRack1_[Channel1]_Effect1]', key => 'APC.bass_control' },
		},
	};
}




1;
