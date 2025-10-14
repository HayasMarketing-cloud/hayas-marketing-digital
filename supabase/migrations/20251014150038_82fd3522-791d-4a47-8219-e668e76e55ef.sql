-- Add UPDATE policy for orders table
-- Users can only update their own orders
CREATE POLICY "Users can update their own orders"
ON public.orders
FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM public.customers 
    WHERE customers.id = orders.customer_id 
    AND customers.user_id = auth.uid()
  )
);

-- Add DELETE policy for orders table
-- Prevent users from deleting orders (only system should delete)
CREATE POLICY "Users cannot delete orders"
ON public.orders
FOR DELETE
USING (false);