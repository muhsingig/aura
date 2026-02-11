DO $$
BEGIN
    UPDATE public.products SET title = 'BON BON LATTE', price = 450.00, image = '/products/bon_bon_latte.png' WHERE id = 'p1';
    UPDATE public.products SET title = 'CARAMEL MACCHIATO', price = 440.00, image = '/products/caramel_macchiato.png' WHERE id = 'p2';
    UPDATE public.products SET title = 'DOUBLE CHOC FRAPPE', price = 470.00, image = '/products/double_choc_frappe.png' WHERE id = 'p3';
    UPDATE public.products SET title = 'MATCHA LATTE', price = 400.00, image = '/products/matcha_latte.png' WHERE id = 'p4';
    UPDATE public.products SET title = 'TIRAMISU LATTE', price = 480.00, image = '/products/tiramisu_latte.png' WHERE id = 'p5';
    UPDATE public.products SET title = 'CAPPUCCINO', price = 330.00, image = '/products/cappuccino.png' WHERE id = 'p6';
END $$;
