package APC_Config::Control_Cuepoints;
use parent qw(APC_Config);
use strict;
use warnings;

sub track_1 {
	return {
		row_1  => {
			on  => { group => '[Channel1]', key => 'APC2.hotcue_down' },
			off => { group => '[Channel1]', key => 'APC2.hotcue_up' },
			out => { group => '[Channel1]', key => 'hotcue_1_enabled',
											min=>'0.5',max=>'1',on=>'0x03',off=>'0x00' },
		},
		row_2  => {
			on  => { group => '[Channel1]', key => 'APC2.hotcue_down' },
			off => { group => '[Channel1]', key => 'APC2.hotcue_up' },
			out => { group => '[Channel1]', key => 'hotcue_2_enabled',
											min=>'0.5',max=>'1',on=>'0x03',off=>'0x00' },
		},
	};
}
sub track_2 {
	return {
		row_1  => {
			on  => { group => '[Channel1]', key => 'APC2.hotcue_down' },
			off => { group => '[Channel1]', key => 'APC2.hotcue_up' },
			out => { group => '[Channel1]', key => 'hotcue_5_enabled',
											min=>'0.5',max=>'1',on=>'0x05',off=>'0x00' },
		},
		row_2  => {
			on  => { group => '[Channel1]', key => 'APC2.hotcue_down' },
			off => { group => '[Channel1]', key => 'APC2.hotcue_up' },
			out => { group => '[Channel1]', key => 'hotcue_6_enabled',
											min=>'0.5',max=>'1',on=>'0x05',off=>'0x00' },
		},
	};
}
sub track_3 {
	return {
		row_1  => {
			on  => { group => '[Channel1]', key => 'APC2.hotcue_down' },
			off => { group => '[Channel1]', key => 'APC2.hotcue_up' },
			out => { group => '[Channel1]', key => 'hotcue_9_enabled',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_2  => {
			on  => { group => '[Channel1]', key => 'APC2.hotcue_down' },
			off => { group => '[Channel1]', key => 'APC2.hotcue_up' },
			out => { group => '[Channel1]', key => 'hotcue_10_enabled',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
	};
}
sub track_4 {
	return {
		row_1  => {
			on  => { group => '[Channel1]', key => 'APC2.hotcue_down' },
			off => { group => '[Channel1]', key => 'APC2.hotcue_up' },
			out => { group => '[Channel1]', key => 'hotcue_13_enabled',
											min=>'0.5',max=>'1',on=>'0x03',off=>'0x00' },
		},
		row_2  => {
			on  => { group => '[Channel1]', key => 'APC2.hotcue_down' },
			off => { group => '[Channel1]', key => 'APC2.hotcue_up' },
			out => { group => '[Channel1]', key => 'hotcue_14_enabled',
											min=>'0.5',max=>'1',on=>'0x03',off=>'0x00' },
		},
	};
}
sub track_5 {
	return {
		row_1  => {
			on  => { group => '[Channel1]', key => 'APC2.hotcue_down' },
			off => { group => '[Channel1]', key => 'APC2.hotcue_up' },
			out => { group => '[Channel1]', key => 'hotcue_17_enabled',
											min=>'0.5',max=>'1',on=>'0x05',off=>'0x00' },
		},
		row_2  => {
			on  => { group => '[Channel1]', key => 'APC2.hotcue_down' },
			off => { group => '[Channel1]', key => 'APC2.hotcue_up' },
			out => { group => '[Channel1]', key => 'hotcue_18_enabled',
											min=>'0.5',max=>'1',on=>'0x05',off=>'0x00' },
		},
	};
}

sub crossfader {
	return {
		play  => {
			#on  => { group => '[Channel1]', key => 'APC2.hotcue_down' },
			#off => { group => '[Channel1]', key => 'APC2.hotcue_up' },
		},
		stop  => {
			on  => { group => '[Master]', key => 'APC2.cue_stop_on' },
			off => { group => '[Master]', key => 'APC2.cue_stop_off' },
		},
		record  => {
			on  => { group => '[Master]', key => 'APC2.cue_clear_on' },
			off => { group => '[Master]', key => 'APC2.cue_clear_off' },
		},
	};
}





1;
