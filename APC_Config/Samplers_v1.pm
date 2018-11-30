package APC_Config::Samplers;
use parent qw(APC_Config);
use strict;
use warnings;



sub track_7 {
	return {
		row_6  => {
			on  => { group => '[Sampler1]', key => 'APC.sampler_cue' },
		},
		row_7  => {
			#on  => { group => '[Sampler1]', key => 'play' },
			on  => { group => '[Sampler1]', key => 'APC.sampler_play' },
			#off  => { group => '[Sampler1]', key => 'APC.sampler_play_up' },
			out => { group => '[Sampler1]', key => 'play',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_8  => {
			on  => { group => '[Sampler1]', key => 'APC.sampler_pfl_or_load' },
			out => { group => '[Sampler1]', key => 'pfl',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_9  => {
			on  => { group => '[Sampler1]', key => 'quantize' },
			out => { group => '[Sampler1]', key => 'quantize',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_10	=> {
			on  => { group => '[Sampler1]', key => 'repeat' },
			out => { group => '[Sampler1]', key => 'repeat',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		fader  => {
			on => { group => '[Sampler1]', key => 'volume' },
		},
	};
}


sub track_8 {
	return {
		row_6  => {
			on  => { group => '[Sampler2]', key => 'APC.sampler_cue' },
		},
		row_7  => {
			#on  => { group => '[Sampler2]', key => 'play' },
			on  => { group => '[Sampler2]', key => 'APC.sampler_play' },
			#off  => { group => '[Sampler2]', key => 'APC.sampler_play_up' },
			out => { group => '[Sampler2]', key => 'play',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_8  => {
			on  => { group => '[Sampler2]', key => 'APC.sampler_pfl_or_load' },
			out => { group => '[Sampler2]', key => 'pfl',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_9  => {
			on  => { group => '[Sampler2]', key => 'quantize' },
			out => { group => '[Sampler2]', key => 'quantize',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_10	=> {
			on  => { group => '[Sampler2]', key => 'repeat' },
			out => { group => '[Sampler2]', key => 'repeat',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		fader  => {
			on => { group => '[Sampler2]', key => 'volume' },
		},
	};
}


1;
