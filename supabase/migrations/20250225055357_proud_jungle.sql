/*
  # Create admins table

  1. New Tables
    - `admins`
      - `id` (uuid, primary key)
      - `line_user_id` (text, unique)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `admins` table
    - Add policy for authenticated users to read admin status
*/

CREATE TABLE IF NOT EXISTS admins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  line_user_id text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can check admin status"
  ON admins
  FOR SELECT
  TO public
  USING (true);

-- Insert your LINE user ID as the first admin
INSERT INTO admins (line_user_id) VALUES ('U5542d094337c67a473d2163658577605');
