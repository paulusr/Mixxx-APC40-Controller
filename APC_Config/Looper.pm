package APC_Config::Looper;
use parent qw(APC_Config);
use strict;
use warnings;




sub track_master {
	return {
		row_1  => {
			on  => { group => '[Master]', key => 'APC.reloop_exit' },
		},
		row_2  => {
			on  => { group => '[Master]', key => 'APC.loop_double' },
		},
		row_3  => {
			on  => { group => '[Master]', key => 'APC.loop_halve' },
		},
		row_4  => {
			on  => { group => '[Master]', key => 'APC.move_loop_fwd_down' },
			off =>  { group => '[Master]', key => 'APC.move_loop_fwd_up' },
		},
		row_5  => {
			on  => { group => '[Master]', key => 'APC.move_loop_back_down' },
			off =>  { group => '[Master]', key => 'APC.move_loop_back_up' },
		},
	};
}





1;
