
#/bun/sh

./generate.py

cd ..
rm Neocyr.zip
zip Neocyr.zip . -r -x *.svn*
