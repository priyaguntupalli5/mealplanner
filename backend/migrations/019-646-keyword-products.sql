create or replace function app.ingredient_keyword_products(i app.ingredient) returns SETOF app.product as $$
    SELECT p.*
    FROM app.product p where i.product_keyword ilike ANY(p.product_keywords); 
$$ language SQL STABLE;
comment on function app.ingredient_keyword_products(app.ingredient) is 'Given a product keyword from ingredient, returns a set of products that have the product keyword';
