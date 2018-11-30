package APC_Config::Mini_Decks;
use parent qw(APC_Config);
use strict;
use warnings;



sub track_7 {
	return {
		row_6  => {
			on  => { group => '[Channel3]', key => 'APC.minideck_cue' },
		},
		row_7  => {
			#on  => { group => '[Channel3]', key => 'play' },
			on  => { group => '[Channel3]', key => 'APC.minideck_play' },
			#off  => { group => '[Channel3]', key => 'APC.minideck_play_up' },
			out => { group => '[Channel3]', key => 'play',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_8  => {
			on  => { group => '[Channel3]', key => 'APC.minideck_toggle1_down' },
			off => { group => '[Channel3]', key => 'APC.minideck_toggle1_up' },
			out => { group => '[Channel3]', key => 'pfl',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_9  => {
			on  => { group => '[Channel3]', key => 'APC.minideck_toggle2_down' },
			off => { group => '[Channel3]', key => 'APC.minideck_toggle2_up' },
			out => { group => '[Channel3]', key => 'quantize',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_10	=> {
			on  => { group => '[Channel3]', key => 'APC.minideck_toggle3_down' },
			off => { group => '[Channel3]', key => 'APC.minideck_toggle3_up' },
			out => { group => '[Channel3]', key => 'repeat',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		fader  => {
			on => { group => '[Channel3]', key => 'volume' },
		},
	};
}


sub track_8 {
	return {
		row_6  => {
			on  => { group => '[Channel4]', key => 'APC.minideck_cue' },
		},
		row_7  => {
			#on  => { group => '[Channel4]', key => 'play' },
			on  => { group => '[Channel4]', key => 'APC.minideck_play' },
			#off  => { group => '[Channel4]', key => 'APC.minideck_play_up' },
			out => { group => '[Channel4]', key => 'play',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_8  => {
			on  => { group => '[Channel4]', key => 'APC.minideck_toggle1_down' },
			off => { group => '[Channel4]', key => 'APC.minideck_toggle1_up' },
			out => { group => '[Channel4]', key => 'pfl',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_9  => {
			on  => { group => '[Channel4]', key => 'APC.minideck_toggle2_down' },
			off => { group => '[Channel4]', key => 'APC.minideck_toggle2_up' },
			out => { group => '[Channel4]', key => 'quantize',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_10	=> {
			on  => { group => '[Channel4]', key => 'APC.minideck_toggle3_down' },
			off => { group => '[Channel4]', key => 'APC.minideck_toggle3_up' },
			out => { group => '[Channel4]', key => 'repeat',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		fader  => {
			on => { group => '[Channel4]', key => 'volume' },
		},
	};
}


1;
