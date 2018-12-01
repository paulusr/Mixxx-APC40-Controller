#!/Users/macuser/perl5/perlbrew/perls/perl-5.18.4/bin/perl5.18.4
use strict;
use warnings;


use Spreadsheet::ParseExcel;
use Data::Dumper;
use Template;

use APC_Config::APC_Note_Map;
my $Note_Map = APC_Config::APC_Note_Map->new;

use APC_Config;
my $Mixxx = APC_Config->new;

my $path_pfx = '/Users/macuser/Documents/Mixxx-dev/github-sandbox/';

# ---
my $path = $path_pfx . 'track_on-off-';
# ---

use APC_Config::Default;
use APC_Config::Library;
use APC_Config::Decks;
use APC_Config::Mini_Decks;
use APC_Config::Control;
use APC_Config::Looper;
use APC_Config::Samplers;
use APC_Config::Track_Control;
use APC_Config::Device_Control;

my @configs = (
	APC_Config::Default->new(),
	APC_Config::Library->new(),
	APC_Config::Decks->new(),
	APC_Config::Mini_Decks->new(),
	APC_Config::Samplers->new(),
	APC_Config::Looper->new(),
	APC_Config::Track_Control->new(),
	APC_Config::Device_Control->new(),
);

#get_inputs();
main();

sub get_inputs {
	my $inputs = $Mixxx->inputs();
	for my $cfg ( @configs ) {
		add_to_inputs( $inputs, $cfg );
	}
	#print Dumper($inputs);
	return $inputs;
}

sub add_to_inputs {
	my $inputs = shift;
	my $Cfg = shift or return;
	my $in = $Cfg->inputs();
	for my $track ( keys %$in ) {
		my $rows = $in->{$track};
		next unless %$rows;
		for my $row ( keys %$rows ) {
			my $cfg = $rows->{$row};
			next unless %$cfg;
			$inputs->{$track}{$row} = $cfg;
		}
	}
}

sub main {
	my $cfg = $Note_Map->midi_config();
	#my $inputs = $Mixxx->inputs();
	my $inputs = get_inputs();
	my ( @controls, @outputs, @keys );
	for my $track ( keys %$inputs ) {
		my $tcfg = $cfg->{$track};
		my $rows = $inputs->{$track};
		next unless %$rows;
		#print Dumper( $rows );
		for my $row ( keys %$rows ) {
			my $rcfg = $tcfg->{$row};
			my $line = $rows->{$row};
			if ( my $v = $line->{'on'} ) {
				my $group = $v->{'group'};
				my $key = $v->{'key'};
				my $options = $v->{'options'};
				if ( not $options ) {
					$options = ( $key =~ m/^APC/ ? 'Script-Binding' : '' );
				}
				my $hash = {
					group => $group,
					key => $key,
					status => $rcfg->{'on'},
					midino => $rcfg->{'note'},
					options => $options,
				};
				push( @controls, $hash );
				push( @keys, $key );
			}
			if ( my $v = $line->{'off'} ) {
				my $group = $v->{'group'};
				my $key = $v->{'key'};
				my $options = $v->{'options'};
				if ( not $options ) {
					$options = ( $key =~ m/^APC/ ? 'Script-Binding' : '' );
				}
				my $hash = {
					group => $group,
					key => $key,
					status => $rcfg->{'off'},
					midino => $rcfg->{'note'},
					options => $options,
				};
				push( @controls, $hash );
				push( @keys, $key );
			}
			if ( my $v = $line->{'out'} ) {
				my $group = $v->{'group'};
				my $key = $v->{'key'};
				my $hash = {
					group => $group,
					key => $key,
					status => $rcfg->{'on'},
					midino => $rcfg->{'note'},
					min => $v->{'min'},
					max => $v->{'max'},
					on => $v->{'on'},
					off => $v->{'off'},
				};
				#push( @outputs, $hash ) unless $key =~ m/vumeter|peak/i;
				push( @outputs, $hash );
				push( @keys, $key );
			}
			if ( my $v = $line->{'out2'} ) {
				my $group = $v->{'group'};
				my $key = $v->{'key'};
				my $hash = {
					group => $group,
					key => $key,
					status => $rcfg->{'on'},
					midino => $rcfg->{'note'},
					min => $v->{'min'},
					max => $v->{'max'},
					on => $v->{'on'},
					off => $v->{'off'},
				};
				#push( @outputs, $hash ) unless $key =~ m/vumeter|peak/i;
				push( @outputs, $hash );
				push( @keys, $key );
			}
		}
	}
	#print Dumper( \@keys );
	my $data = { controls => \@controls, outputs => \@outputs };
	#print Dumper( $data );
	#return;
	my $tmpl_path = '';
	my $file = 'template_Akai_APC40.midi.xml';
	#my $out_file = "Akai_APC40.midi.xml";
	my $out_file = $path . "Akai_APC40.midi.xml";
	my $template = Template->new({ INCLUDE_PATH => $tmpl_path });
	$template->process($file, $data, $out_file) || die $template->error();
	
	my $leds = led_control();
	my %done;
	my $controls = $data->{'controls'};
	for my $control ( @$controls ) {
		if ( $control->{'options'} ) {
			my $func = $control->{'key'};
			next if $done{$func}++;
			next if ( $func !~ m/^APC/ );
			next if ( $func !~ m/TODO$/ );
			print qq|$func = function(channel, control, value, status, group) {$leds}\n|;
		}
	}
	%done = ();
	for my $key ( sort @keys ) {
		next if $done{$key};
		print "$key\n";
		$done{$key}++;
	}
	print "Done\n";
}

sub led_control {
	return q|
	print(channel);
	print(control);
	print(value);
	print(status);
	print(group);
|;
}




=pod
my $res = absoluteNonLin(120, 0.1, 0.5, 0.9);
#absoluteNonLin(value, low, mid, high, min, max);
print($res);

sub absoluteNonLin {
	my ($value, $low, $mid, $high, $min, $max) = @_;
    if (!$min) {$min = 0;}
    if (!$max) {$max = 127;}
    my $center = ($max-$min)/2;
    if ($value==$center){
        return $mid;}
    if ($value<$center){
        return $low+($value/($center/($mid-$low)));}
    return $mid+(($value-$center)/($center/($high-$mid)));
}

=cut







