package APC_Config::Samplers;
use parent qw(APC_Config);
use strict;
use warnings;



sub track_7 {
	return {
		row_1  => {
			on  => { group => '[Master]', key => 'APC.pad_track7_row1_down' },
		},
		row_2  => {
			on  => { group => '[Sampler1]', key => 'APC.pad_track7_row2_down' },
			off => { group => '[Sampler1]', key => 'APC.pad_track7_row2_up' },
			out => { group => '[Sampler1]', key => 'play',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_3  => {
			on  => { group => '[Sampler2]', key => 'APC.pad_track7_row3_down' },
			off => { group => '[Sampler2]', key => 'APC.pad_track7_row3_up' },
			out => { group => '[Sampler2]', key => 'play',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_4  => {
			on  => { group => '[Sampler3]', key => 'APC.pad_track7_row4_down' },
			off => { group => '[Sampler3]', key => 'APC.pad_track7_row4_up' },
			out => { group => '[Sampler3]', key => 'play',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_5  => {
			on  => { group => '[Sampler4]', key => 'APC.pad_track7_row5_down' },
			off => { group => '[Sampler4]', key => 'APC.pad_track7_row5_up' },
			out => { group => '[Sampler4]', key => 'play',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
	};
}

sub track_8 {
	return {
		row_1  => {
			on  => { group => '[Master]', key => 'APC.pad_track8_row1_down' },
		},
		row_2  => {
			on  => { group => '[Sampler5]', key => 'APC.pad_track8_row2_down' },
			off => { group => '[Sampler5]', key => 'APC.pad_track8_row2_up' },
			out => { group => '[Sampler5]', key => 'play',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_3  => {
			on  => { group => '[Sampler6]', key => 'APC.pad_track8_row3_down' },
			off => { group => '[Sampler6]', key => 'APC.pad_track8_row3_up' },
			out => { group => '[Sampler6]', key => 'play',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_4  => {
			on  => { group => '[Sampler7]', key => 'APC.pad_track8_row4_down' },
			off => { group => '[Sampler7]', key => 'APC.pad_track8_row4_up' },
			out => { group => '[Sampler7]', key => 'play',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
		row_5  => {
			on  => { group => '[Sampler8]', key => 'APC.pad_track8_row5_down' },
			off => { group => '[Sampler8]', key => 'APC.pad_track8_row5_up' },
			out => { group => '[Sampler8]', key => 'play',
											min=>'0.5',max=>'1',on=>'0x01',off=>'0x00' },
		},
	};
}


1;
