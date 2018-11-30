package APC_Config;
use strict;
use warnings;

sub new {
   my($class,%args) = @_;
   my $self = bless {}, $class;
   return $self;
}

sub inputs {
	my $self = shift;
	return {
		track_1		=> $self->track_1,
		track_2		=> $self->track_2,
		track_3		=> $self->track_3,
		track_4		=> $self->track_4,
		track_5		=> $self->track_5,
		track_6		=> $self->track_6,
		track_7		=> $self->track_7,
		track_8		=> $self->track_8,

		track_master	=> $self->track_master,
		track_control	=> $self->track_control,
		bank_select		=> $self->bank_select,
		device_control	=> $self->device_control,
		crossfader		=> $self->crossfader,
	};
}

sub track_1 { {} }
sub track_2 { {} }
sub track_3 { {} }
sub track_4 { {} }
sub track_5 { {} }
sub track_6 { {} }
sub track_7 { {} }
sub track_8 { {} }
sub track_master { {} }
sub track_control { {} }
sub bank_select { {} }
sub device_control { {} }
sub crossfader { {} }



1;
