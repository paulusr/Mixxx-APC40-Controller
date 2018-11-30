package APC_Config::Default;
use strict;
use warnings;
use parent qw(APC_Config);

sub track_master {
	return {
		row_6  => {
			on =>  { group => '[Master]', key => 'APC.stop_all_loops' },
		},
		row_7  => {
			on =>  { group => '[Master]', key => 'APC.master_on' },
			off =>  { group => '[Master]', key => 'APC.master_off' },
		},
		encoder  => {
			on =>  { group => '[Master]', key => 'APC.encoder' },
		},
		fader  => {
			#on => { group => '[Master]', key => 'headVolume' },
			on => { group => '[Master]', key => 'APC.sampler_volume' },
		},
	};
}

sub bank_select {
	return {
		shift_btn  => {
			on =>  { group => '[Master]', key => 'APC.shift_on' },
			off =>  { group => '[Master]', key => 'APC.shift_off' },
		},
	};
}

sub crossfader {
	return {
		crossfader  => {
			on => { group => '[Master]', key => 'crossfader' },
		},
	};
}

1;
