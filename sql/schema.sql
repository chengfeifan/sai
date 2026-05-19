create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nickname text not null,
  avatar_url text,
  created_at timestamptz default now()
);

create table if not exists public.timeline_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  content text,
  event_date date not null,
  location text,
  mood text,
  tags text[] default '{}',
  is_pinned boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.albums (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  description text,
  cover_photo_url text,
  created_at timestamptz default now()
);

create table if not exists public.photos (
  id uuid primary key default gen_random_uuid(),
  album_id uuid references public.albums(id) on delete cascade,
  timeline_event_id uuid references public.timeline_events(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  file_url text not null,
  file_name text,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  content_md text not null,
  cover_image_url text,
  status text not null default 'draft',
  tags text[] default '{}',
  published_at timestamptz,
  created_at timestamptz default now()
);

create table if not exists public.anniversaries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  event_date date not null,
  repeat_yearly boolean default true,
  created_at timestamptz default now()
);
