pg_dump -d 'postgres://postgres:root@localhost:5432/codesamurai' --schema-only --disable-triggers >init.sql
