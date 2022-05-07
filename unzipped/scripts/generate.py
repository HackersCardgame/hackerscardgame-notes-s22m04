#!/usr/bin/env fontforge

import fontforge, sys;

source_file = "../src/Neocyr.sfd"
output_file = "../ttf/Neocyr.ttf"

font=fontforge.open(source_file);
font.generate(output_file);
font.close();

