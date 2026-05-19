"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
export default function Settings(){return <div className="space-y-4"><h1 className="text-2xl font-semibold">设置</h1><div className="card p-4 space-y-2"><Input placeholder="昵称"/><Input placeholder="头像 URL"/><div className="flex gap-2"><Button>保存资料</Button><Button className="bg-zinc-500" onClick={()=>supabase.auth.signOut()}>退出登录</Button></div></div></div>}
