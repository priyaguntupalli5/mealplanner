ALTER TABLE app.person
ADD COLUMN terms_and_conditions BOOLEAN DEFAULT false;

alter type app.current_user add attribute terms_and_conditions boolean;

--  Current person is updated with terms and conditions
create or replace function app.current_person() returns app.current_user as $$
    select app.person.id, app.person.role::text, app.person.email, 
           app.person.full_name, app.person.slug, app.person.terms_and_conditions
    from app.person
    where id = nullif(current_setting('jwt.claims.person_id', true), '')::bigint
  $$ language sql stable security definer;

  -- Function to update terms and conditions of person
CREATE OR REPLACE FUNCTION app.update_person_terms(person_terms boolean) RETURNS VOID AS $$
DECLARE
    person_id_param BIGINT;
BEGIN
    -- Fetch the person_id from the current session
    person_id_param := NULLIF(current_setting('jwt.claims.person_id', true), '')::BIGINT;

    update app.person
    set terms_and_conditions = person_terms
    WHERE id = person_id_param;
END;
$$ LANGUAGE plpgsql;

grant execute on function app.update_person_terms(boolean) to app_admin, app_meal_designer, app_user;

