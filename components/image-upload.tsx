"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";

export function ImageUpload({ bucket = "photos", onUploaded }: { bucket?: string; onUploaded: (url: string) => void }) {
  const [uploading, setUploading] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const path = `${Date.now()}-${file.name}`;
    const { error } = await supabase.storage.from(bucket).upload(path, file);
    if (!error) {
      const { data } = supabase.storage.from(bucket).getPublicUrl(path);
      onUploaded(data.publicUrl);
    }
    setUploading(false);
  }

  return (
    <div className="space-y-2">
      <input type="file" accept="image/*" onChange={handleUpload} />
      <Button type="button" disabled={uploading}>{uploading ? "上传中..." : "选择图片"}</Button>
    </div>
  );
}
