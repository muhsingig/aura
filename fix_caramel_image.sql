-- FIX CARAMEL MACCHIATO IMAGE PATH
-- Run this in the Supabase SQL Editor to link the correct image file
UPDATE public.products 
SET image = '/products/caramel_macchiato.png' 
WHERE id = 'p2';
