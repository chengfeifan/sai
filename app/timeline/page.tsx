"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ImageUpload } from "@/components/image-upload";

export default function TimelinePage() {
  const [img, setImg] = useState("");
  const events = [{title:"去海边",date:"2026-04-03",content:"一起看日出",tags:["旅行","浪漫"]}];
  return <div className="space-y-4"><h1 className="text-2xl font-semibold">时间线</h1><div className="card p-4 space-y-2"><div className="grid md:grid-cols-2 gap-2"><Input placeholder="按年份筛选"/><Input placeholder="按标签筛选"/></div><Input placeholder="标题"/><Textarea placeholder="内容"/><div className="grid md:grid-cols-3 gap-2"><Input type="date"/><Input placeholder="地点"/><Input placeholder="心情"/></div><Input placeholder="标签（逗号分隔）"/><label className="text-sm"><input type="checkbox"/> 置顶</label><ImageUpload onUploaded={setImg}/>{img && <p className="text-xs break-all">{img}</p>}<div className="flex gap-2"><Button>新建</Button><Button className="bg-zinc-500">编辑</Button><Button className="bg-red-400">删除</Button></div></div><div className="relative timeline-line pl-10 space-y-4">{events.map(e=><article key={e.title} className="card p-4 relative"><span className="absolute -left-8 top-5 h-3 w-3 rounded-full bg-primary"/><p className="text-xs text-zinc-500">{e.date}</p><h3 className="font-semibold">{e.title}</h3><p>{e.content}</p><p className="text-xs text-rose-600">#{e.tags.join(" #")}</p></article>)}</div></div>
}
