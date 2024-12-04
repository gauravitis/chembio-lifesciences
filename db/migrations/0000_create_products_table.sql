create table if not exists products (
    id uuid default gen_random_uuid() primary key,
    name varchar(255) not null,
    category varchar(100) not null,
    description text,
    specifications text,
    price decimal(10,2) not null,
    stock integer not null,
    tags text[],
    imageUrl text,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
);

-- Create an index on commonly searched fields
create index if not exists idx_products_name on products(name);
create index if not exists idx_products_category on products(category); 