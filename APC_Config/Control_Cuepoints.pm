package APC_Config::Control_Cuepoints;
use parent qw(APC_Config);
use strict;
use warnings;

sub track_1 {
	return {
		row_1  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_2  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_3  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_4  => {
			on  => { group => '[Channel1]', key => 'APC2.cue_group_toggle' },
		},
	};
}
sub track_2 {
	return {
		row_1  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_2  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_3  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_6  => {
			on  => { group => '[Channel1]', key => 'APC.spinback_or_jump_4_back_down' },
			off => { group => '[Channel1]', key => 'APC.spinback_or_jump_4_back_up' },
		},
	};
}
sub track_3 {
	return {
		row_1  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_2  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_3  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_6  => {
			on  => { group => '[Channel1]', key => 'APC.brake_or_jump_4_fwd_down' },
			off => { group => '[Channel1]', key => 'APC.brake_or_jump_4_fwd_up' },
		},
	};
}
sub track_4 {
	return {
		row_1  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_2  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_3  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_4  => {
			on  => { group => '[Channel2]', key => 'APC2.cue_group_toggle' },
		},
	};
}
sub track_5 {
	return {
		row_1  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_2  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_3  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_6  => {
			on  => { group => '[Channel2]', key => 'APC.spinback_or_jump_4_back_down' },
			off => { group => '[Channel2]', key => 'APC.spinback_or_jump_4_back_up' },
		},
	};
}
sub track_6 {
	return {
		row_1  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_2  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_3  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_6  => {
			on  => { group => '[Channel2]', key => 'APC.brake_or_jump_4_fwd_down' },
			off => { group => '[Channel2]', key => 'APC.brake_or_jump_4_fwd_up' },
		},
	};
}
sub track_7 {
	return {
		row_1  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_2  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_3  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_4  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_5  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_6  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_8  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_9  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_10  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
	};
}
sub track_8 {
	return {
		row_1  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_2  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_3  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_4  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_5  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_6  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_8  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_9  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
		row_10  => {
			on  => { group => '[Master]', key => 'APC2.hotcue_down' },
			off => { group => '[Master]', key => 'APC2.hotcue_up' },
		},
	};
}
sub track_master {
	return {
		row_1  => {
			on  => { group => '[Master]', key => 'APC2.loop_one_down' },
			off => { group => '[Master]', key => 'APC2.loop_temp_up' },
		},
		row_2  => {
			on  => { group => '[Master]', key => 'APC2.loop_half_down' },
			off => { group => '[Master]', key => 'APC2.loop_temp_up' },
		},
		row_3  => {
			on  => { group => '[Master]', key => 'APC2.loop_quarter_down' },
			off => { group => '[Master]', key => 'APC2.loop_temp_up' },
		},
		row_4  => {
			on  => { group => '[Master]', key => 'APC2.loop_half_and_decay_down' },
			off => { group => '[Master]', key => 'APC2.loop_half_and_decay_up' },
		},
		row_5  => {
			on  => { group => '[Master]', key => 'APC2.loop_quarter_and_decay_down' },
			off => { group => '[Master]', key => 'APC2.loop_quarter_and_decay_up' },
		},
	};
}

sub device_control {
	return {
		row_2_btn_1  => {
			on => { group => '[Master]', key => 'APC2.beatjump_2' },
		},
		row_2_btn_2  => {
			on => { group => '[Master]', key => 'APC2.beatjump_4' },
		},
		row_2_btn_3  => {
			on => { group => '[Master]', key => 'APC2.beatjump_8' },
		},
		row_2_btn_4  => {
			on => { group => '[Master]', key => 'APC2.beatjump_16' },
		},
	};
}
sub crossfader {
	return {
		play_btn  => {
			on =>  { group => '[Master]', key => 'APC2.play_btn_on' },
			off =>  { group => '[Master]', key => 'APC2.play_btn_off' },
		},
		stop_btn  => {
			on =>  { group => '[Master]', key => 'APC2.stop_btn_on' },
			off =>  { group => '[Master]', key => 'APC2.stop_btn_off' },
		},
		rec_btn  => {
			on =>  { group => '[Master]', key => 'APC2.rec_btn_on' },
			off =>  { group => '[Master]', key => 'APC2.rec_btn_off' },
		},
	};
}

1;
