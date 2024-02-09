# Setup Backend
FROM node:20
WORKDIR /app/
COPY package*.json .
RUN npm i
COPY . .
EXPOSE 8000

# Setup Database
RUN apt-get update && \
    apt-get install -y postgresql && \
    apt-get clean
USER postgres
RUN /etc/init.d/postgresql start && psql -c "ALTER USER postgres WITH PASSWORD 'postgres';" && psql -c "CREATE DATABASE codeSamurai;" && psql -c "GRANT ALL PRIVILEGES ON DATABASE codeSamurai TO postgres;" && psql -d "postgres://postgres:postgres@localhost:5432/codeSamurai" -a -f init.sql

ENTRYPOINT ["bash", "entrypoint.sh"]