sudo -u postgres psql -c "DROP DATABASE codesamurai;"
sudo -u postgres psql -c "CREATE DATABASE codesamurai;"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE codesamurai TO postgres;"
sudo -u postgres psql -d codesamurai -a -f init.sql
