package APC_Config::APC_Note_Map;
use strict;
use warnings;

sub new {
   my($class,%args) = @_;
   my $self = bless {}, $class;
   return $self;
}

sub midi_config {
	return {

		track_1 => {
			row_1  => { note => '0x35', on => '0x90', off => '0x80' }, # Clip Launch
			row_2  => { note => '0x36', on => '0x90', off => '0x80' }, # 
			row_3  => { note => '0x37', on => '0x90', off => '0x80' }, # 
			row_4  => { note => '0x38', on => '0x90', off => '0x80' }, # 
			row_5  => { note => '0x39', on => '0x90', off => '0x80' }, #

			row_6  => { note => '0x34', on => '0x90', off => '0x80' }, # Clip Stop
			row_7  => { note => '0x33', on => '0x90', off => '0x80' }, # Track Select

			row_8  => { note => '0x32', on => '0x90', off => '0x80' }, # Activator
			row_9  => { note => '0x31', on => '0x90', off => '0x80' }, # Solo
			row_10 => { note => '0x30', on => '0x90', off => '0x80' }, # Record Arm

			fader  => { note => '0x07', on => '0xB0' }, # Fader
		},
		
		track_2 => {
			row_1  => { note => '0x35', on => '0x91', off => '0x81' }, # Clip Launch
			row_2  => { note => '0x36', on => '0x91', off => '0x81' }, # 
			row_3  => { note => '0x37', on => '0x91', off => '0x81' }, # 
			row_4  => { note => '0x38', on => '0x91', off => '0x81' }, # 
			row_5  => { note => '0x39', on => '0x91', off => '0x81' }, #

			row_6  => { note => '0x34', on => '0x91', off => '0x81' }, # Clip Stop
			row_7  => { note => '0x33', on => '0x91', off => '0x81' }, # Track Select

			row_8  => { note => '0x32', on => '0x91', off => '0x81' }, # Activator
			row_9  => { note => '0x31', on => '0x91', off => '0x81' }, # Solo
			row_10 => { note => '0x30', on => '0x91', off => '0x81' }, # Record Arm

			fader  => { note => '0x07', on => '0xB1' }, # Fader
		},
		
		track_3 => {
			row_1  => { note => '0x35', on => '0x92', off => '0x82' }, # Clip Launch
			row_2  => { note => '0x36', on => '0x92', off => '0x82' }, # 
			row_3  => { note => '0x37', on => '0x92', off => '0x82' }, # 
			row_4  => { note => '0x38', on => '0x92', off => '0x82' }, # 
			row_5  => { note => '0x39', on => '0x92', off => '0x82' }, #

			row_6  => { note => '0x34', on => '0x92', off => '0x82' }, # Clip Stop
			row_7  => { note => '0x33', on => '0x92', off => '0x82' }, # Track Select

			row_8  => { note => '0x32', on => '0x92', off => '0x82' }, # Activator
			row_9  => { note => '0x31', on => '0x92', off => '0x82' }, # Solo
			row_10 => { note => '0x30', on => '0x92', off => '0x82' }, # Record Arm

			fader  => { note => '0x07', on => '0xB2' }, # Fader
		},
		
		track_4 => {
			row_1  => { note => '0x35', on => '0x93', off => '0x83' }, # Clip Launch
			row_2  => { note => '0x36', on => '0x93', off => '0x83' }, # 
			row_3  => { note => '0x37', on => '0x93', off => '0x83' }, # 
			row_4  => { note => '0x38', on => '0x93', off => '0x83' }, # 
			row_5  => { note => '0x39', on => '0x93', off => '0x83' }, #

			row_6  => { note => '0x34', on => '0x93', off => '0x83' }, # Clip Stop
			row_7  => { note => '0x33', on => '0x93', off => '0x83' }, # Track Select

			row_8  => { note => '0x32', on => '0x93', off => '0x83' }, # Activator
			row_9  => { note => '0x31', on => '0x93', off => '0x83' }, # Solo
			row_10 => { note => '0x30', on => '0x93', off => '0x83' }, # Record Arm

			fader  => { note => '0x07', on => '0xB3' }, # Fader
		},
		
		track_5 => {
			row_1  => { note => '0x35', on => '0x94', off => '0x84' }, # Clip Launch
			row_2  => { note => '0x36', on => '0x94', off => '0x84' }, # 
			row_3  => { note => '0x37', on => '0x94', off => '0x84' }, # 
			row_4  => { note => '0x38', on => '0x94', off => '0x84' }, # 
			row_5  => { note => '0x39', on => '0x94', off => '0x84' }, #

			row_6  => { note => '0x34', on => '0x94', off => '0x84' }, # Clip Stop
			row_7  => { note => '0x33', on => '0x94', off => '0x84' }, # Track Select

			row_8  => { note => '0x32', on => '0x94', off => '0x84' }, # Activator
			row_9  => { note => '0x31', on => '0x94', off => '0x84' }, # Solo
			row_10 => { note => '0x30', on => '0x94', off => '0x84' }, # Record Arm

			fader  => { note => '0x07', on => '0xB4' }, # Fader
		},
		
		track_6 => {
			row_1  => { note => '0x35', on => '0x95', off => '0x85' }, # Clip Launch
			row_2  => { note => '0x36', on => '0x95', off => '0x85' }, # 
			row_3  => { note => '0x37', on => '0x95', off => '0x85' }, # 
			row_4  => { note => '0x38', on => '0x95', off => '0x85' }, # 
			row_5  => { note => '0x39', on => '0x95', off => '0x85' }, #

			row_6  => { note => '0x34', on => '0x95', off => '0x85' }, # Clip Stop
			row_7  => { note => '0x33', on => '0x95', off => '0x85' }, # Track Select

			row_8  => { note => '0x32', on => '0x95', off => '0x85' }, # Activator
			row_9  => { note => '0x31', on => '0x95', off => '0x85' }, # Solo
			row_10 => { note => '0x30', on => '0x95', off => '0x85' }, # Record Arm

			fader  => { note => '0x07', on => '0xB5' }, # Fader
		},
		
		track_7 => {
			row_1  => { note => '0x35', on => '0x96', off => '0x86' }, # Clip Launch
			row_2  => { note => '0x36', on => '0x96', off => '0x86' }, # 
			row_3  => { note => '0x37', on => '0x96', off => '0x86' }, # 
			row_4  => { note => '0x38', on => '0x96', off => '0x86' }, # 
			row_5  => { note => '0x39', on => '0x96', off => '0x86' }, #

			row_6  => { note => '0x34', on => '0x96', off => '0x86' }, # Clip Stop
			row_7  => { note => '0x33', on => '0x96', off => '0x86' }, # Track Select

			row_8  => { note => '0x32', on => '0x96', off => '0x86' }, # Activator
			row_9  => { note => '0x31', on => '0x96', off => '0x86' }, # Solo
			row_10 => { note => '0x30', on => '0x96', off => '0x86' }, # Record Arm

			fader  => { note => '0x07', on => '0xB6' }, # Fader
		},
		
		track_8 => {
			row_1  => { note => '0x35', on => '0x97', off => '0x87' }, # Clip Launch
			row_2  => { note => '0x36', on => '0x97', off => '0x87' }, # 
			row_3  => { note => '0x37', on => '0x97', off => '0x87' }, # 
			row_4  => { note => '0x38', on => '0x97', off => '0x87' }, # 
			row_5  => { note => '0x39', on => '0x97', off => '0x87' }, #

			row_6  => { note => '0x34', on => '0x97', off => '0x87' }, # Clip Stop
			row_7  => { note => '0x33', on => '0x97', off => '0x87' }, # Track Select

			row_8  => { note => '0x32', on => '0x97', off => '0x87' }, # Activator
			row_9  => { note => '0x31', on => '0x97', off => '0x87' }, # Solo
			row_10 => { note => '0x30', on => '0x97', off => '0x87' }, # Record Arm

			fader  => { note => '0x07', on => '0xB7' }, # Fader
		},
		
		track_master => {
			row_1  => { note => '0x52', on => '0x90', off => '0x80' }, # Scene Launch
			row_2  => { note => '0x53', on => '0x90', off => '0x80' }, # 
			row_3  => { note => '0x54', on => '0x90', off => '0x80' }, # 
			row_4  => { note => '0x55', on => '0x90', off => '0x80' }, # 
			row_5  => { note => '0x56', on => '0x90', off => '0x80' }, #

			row_6  => { note => '0x51', on => '0x90', off => '0x80' }, # Stop All Clips
			row_7  => { note => '0x50', on => '0x90', off => '0x80' }, # Track Select

			encoder => { note => '0x2F', on => '0xB0' }, # 
			fader  => { note => '0x0E', on => '0xB0' }, # Fader
		},
		
		track_control => {
			row_1_knob_1  => { note => '0x30', on => '0xB0' }, # 
			row_1_knob_2  => { note => '0x31', on => '0xB0' }, # 
			row_1_knob_3  => { note => '0x32', on => '0xB0' }, # 
			row_1_knob_4  => { note => '0x33', on => '0xB0' }, # 
			row_2_knob_1  => { note => '0x34', on => '0xB0' }, # 
			row_2_knob_2  => { note => '0x35', on => '0xB0' }, # 
			row_2_knob_3  => { note => '0x36', on => '0xB0' }, # 
			row_2_knob_4  => { note => '0x37', on => '0xB0' }, # 

			row_1_btn_1   => { note => '0x57', on => '0x90', off => '0x80' }, # 
			row_1_btn_2   => { note => '0x58', on => '0x90', off => '0x80' }, # 
			row_1_btn_3   => { note => '0x59', on => '0x90', off => '0x80' }, # 
			row_1_btn_4   => { note => '0x5A', on => '0x90', off => '0x80' }, # 
		},
		
		bank_select => {
			shift_btn		=> { note => '0x62', on => '0x90', off => '0x80' }, # 
			select_left		=> { note => '0x61', on => '0x90', off => '0x80' }, # 
			select_right	=> { note => '0x60', on => '0x90', off => '0x80' }, # 
			select_up		=> { note => '0x5E', on => '0x90', off => '0x80' }, # 
			select_down		=> { note => '0x5F', on => '0x90', off => '0x80' }, # 
			tap_tempo		=> { note => '0x63', on => '0x90', off => '0x80' }, # 
			nudge_left		=> { note => '0x65', on => '0x90', off => '0x80' }, # 
			nudge_right		=> { note => '0x64', on => '0x90', off => '0x80' }, # 
		},
		
		device_control => {
			row_1_knob_1  => { note => '0x10', on => '0xB0' }, # 
			row_1_knob_2  => { note => '0x11', on => '0xB0' }, # 
			row_1_knob_3  => { note => '0x12', on => '0xB0' }, # 
			row_1_knob_4  => { note => '0x13', on => '0xB0' }, # 
			row_2_knob_1  => { note => '0x14', on => '0xB0' }, # 
			row_2_knob_2  => { note => '0x15', on => '0xB0' }, # 
			row_2_knob_3  => { note => '0x16', on => '0xB0' }, # 
			row_2_knob_4  => { note => '0x17', on => '0xB0' }, # 
			
			row_1_btn_1   => { note => '0x3A', on => '0x90', off => '0x80' }, # 
			row_1_btn_2   => { note => '0x3B', on => '0x90', off => '0x80' }, # 
			row_1_btn_3   => { note => '0x3C', on => '0x90', off => '0x80' }, # 
			row_1_btn_4   => { note => '0x3D', on => '0x90', off => '0x80' }, # 
			row_2_btn_1   => { note => '0x3E', on => '0x90', off => '0x80' }, # 
			row_2_btn_2   => { note => '0x3F', on => '0x90', off => '0x80' }, # 
			row_2_btn_3   => { note => '0x40', on => '0x90', off => '0x80' }, # 
			row_2_btn_4   => { note => '0x41', on => '0x90', off => '0x80' }, # 
		},
		
		crossfader => {
			play_btn	=> { note => '0x5B', on => '0x90', off => '0x80' }, # 
			stop_btn	=> { note => '0x5C', on => '0x90', off => '0x80' }, # 
			rec_btn		=> { note => '0x5D', on => '0x90', off => '0x80' }, # 
			crossfader	=> { note => '0x0F', on => '0xB0' }, # 
		},
	};
}



1;
