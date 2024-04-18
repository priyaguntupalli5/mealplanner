begin;
ALTER TABLE app.person DROP COLUMN if exists terms_and_conditions; 
alter type app.current_user drop attribute IF EXISTS terms_and_conditions;
drop function IF EXISTS app.current_person();
commit;