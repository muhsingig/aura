-- FIX IMAGE EXTENSIONS
-- Run this if your product images are not showing up
UPDATE public.products SET image = REPLACE(image, '.jpg', '.svg');
