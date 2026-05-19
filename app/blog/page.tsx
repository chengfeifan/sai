"use client";
import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MarkdownEditor } from "@/components/markdown-editor";

export default function BlogPage(){const [md,setMd]=useState("# 今天\n写点温柔的话");return <div className="space-y-4"><h1 className="text-2xl font-semibold">博客</h1><div className="card p-4 space-y-2"><Input placeholder="标题"/><Input placeholder="标签"/><Input placeholder="封面图 URL"/><select className="border rounded-xl px-3 py-2"><option>草稿</option><option>发布</option></select><MarkdownEditor value={md} onChange={setMd}/><Button>保存博客</Button></div><div className="space-y-2"><Link href="/blog/1" className="card p-4 block"><h3 className="font-semibold">雨天里的拥抱</h3><p className="text-sm text-zinc-500">标签：日常, 心情</p></Link></div></div>}
