sudo -u postgres psql -c "ALTER USER postgres WITH PASSWORD 'root';"
sudo -u postgres psql -c "CREATE DATABASE codesamurai;"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE codesamurai TO postgres;"