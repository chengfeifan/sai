alter table public.profiles enable row level security;
alter table public.timeline_events enable row level security;
alter table public.albums enable row level security;
alter table public.photos enable row level security;
alter table public.blog_posts enable row level security;
alter table public.anniversaries enable row level security;

create policy "profiles owner" on public.profiles for all using (auth.uid() = id) with check (auth.uid() = id);
create policy "timeline owner" on public.timeline_events for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "albums owner" on public.albums for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "photos owner" on public.photos for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "blog owner" on public.blog_posts for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "anniversary owner" on public.anniversaries for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

insert into storage.buckets (id, name, public) values ('photos','photos', true) on conflict (id) do nothing;
create policy "photo upload auth" on storage.objects for insert with check (bucket_id = 'photos' and auth.role() = 'authenticated');
create policy "photo read auth" on storage.objects for select using (bucket_id = 'photos' and auth.role() = 'authenticated');
