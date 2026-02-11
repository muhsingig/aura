DROP TABLE IF EXISTS public.products;

CREATE TABLE public.products (
  id text PRIMARY KEY,
  title text NOT NULL,
  description text,
  price numeric NOT NULL,
  image text,
  notes text[]
);

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read access" ON public.products;
CREATE POLICY "Allow public read access"
ON public.products
FOR SELECT
TO anon
USING (true);

INSERT INTO public.products (id, title, description, price, image, notes)
VALUES
  ('p1', 'BON BON LATTE', 'A delightful Spanish-inspired treat. Layers of sweetened condensed milk and bold espresso, topped with silky steamed milk and a drizzle of caramel.', 450.00, '/products/bon_bon_latte.png', ARRAY['Sweet', 'Creamy', 'Indulgent']),
  ('p2', 'CARAMEL MACCHIATO', 'A rich, velvety blend with deep espresso notes, finished with a smooth vanilla aroma and a buttery caramel drizzle profile.', 440.00, '/products/caramel_macchiato.png', ARRAY['Caramel', 'Vanilla', 'Espresso']),
  ('p3', 'DOUBLE CHOC FRAPPE', 'The ultimate chocolate lover''s dream. Rich cocoa blended with ice, milk, and chocolate chips, finished with whipped cream and chocolate sauce.', 470.00, '/products/double_choc_frappe.png', ARRAY['Deep Chocolate', 'Icy', 'Decadent']),
  ('p4', 'MATCHA LATTE', 'Premium ceremonial grade matcha whisked to perfection with steamed milk. A harmonious balance of earthy, grassy notes and creamy sweetness.', 400.00, '/products/matcha_latte.png', ARRAY['Earthy', 'Antioxidant', 'Smooth']),
  ('p5', 'TIRAMISU LATTE', 'Your favorite dessert in a cup. Espresso combined with flavors of mascarpone, cocoa, and ladyfingers, topped with a dusting of cocoa powder.', 480.00, '/products/tiramisu_latte.png', ARRAY['Dessert', 'Cocoa', 'Mascarpone']),
  ('p6', 'CAPPUCCINO', 'A classic Italian staple. Equal parts espresso, steamed milk, and velvety milk foam, dusted with chocolate or cinnamon.', 330.00, '/products/cappuccino.png', ARRAY['Classic', 'Foamy', 'Balanced']);
