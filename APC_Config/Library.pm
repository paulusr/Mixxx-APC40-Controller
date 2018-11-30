package APC_Config::Library;
use parent qw(APC_Config);
use strict;
use warnings;


sub bank_select {
	return {
		select_left  => {
			on =>  { group => '[Playlist]', key => 'APC.playlist_prev_or_toggle' },
		},
		select_right  => {
			on =>  { group => '[Playlist]', key => 'APC.playlist_next_or_toggle' },
		},
		select_up  => {
			on =>  { group => '[Playlist]', key => 'SelectPrevTrack' },
		},
		select_down  => {
			on =>  { group => '[Playlist]', key => 'SelectNextTrack' },
		},
		tap_tempo  => {
			on =>  { group => '[Master]', key => 'APC.tap_tempo_down' },
			off =>  { group => '[Master]', key => 'APC.tap_tempo_up' },
			#on =>  { group => '[Master]', key => 'maximize_library' },
		},
		nudge_left  => {
			on =>  { group => '[Channel1]', key => 'LoadSelectedTrack' },
		},
		nudge_right  => {
			on =>  { group => '[Channel2]', key => 'LoadSelectedTrack' },
		},
	};
}


1;
