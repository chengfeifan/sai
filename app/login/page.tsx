"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();
  async function login(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return setErr(error.message);
    router.push("/dashboard");
  }
  return <div className="max-w-md mx-auto card p-6 space-y-3"><h1 className="text-2xl font-semibold">欢迎回来</h1><p className="text-sm text-zinc-500">公开注册暂未开启，可预留邀请码：{inviteCode || "未填写"}</p><form onSubmit={login} className="space-y-3"><Input placeholder="邮箱" value={email} onChange={(e)=>setEmail(e.target.value)} /><Input type="password" placeholder="密码" value={password} onChange={(e)=>setPassword(e.target.value)} /><Input placeholder="邀请码（预留）" value={inviteCode} onChange={(e)=>setInviteCode(e.target.value)} /><Button className="w-full">登录</Button>{err && <p className="text-red-500 text-sm">{err}</p>}</form></div>;
}
