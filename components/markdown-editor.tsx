"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Textarea } from "@/components/ui/textarea";

export function MarkdownEditor({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Textarea value={value} rows={14} onChange={(e) => onChange(e.target.value)} placeholder="使用 Markdown 记录今天..." />
      <div className="card p-4 prose prose-rose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{value || "_预览区_"}</ReactMarkdown>
      </div>
    </div>
  );
}
