begin;
DROP FUNCTION IF EXISTS app.reset_password(bigint, text);

REVOKE EXECUTE ON FUNCTION app.reset_password(bigint, text) FROM app_admin;
commit;
