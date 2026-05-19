import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function Anniversaries(){return <div className="space-y-4"><h1 className="text-2xl font-semibold">纪念日</h1><div className="card p-4 space-y-2"><Input placeholder="纪念日名称"/><Input type="date"/><label className="text-sm"><input type="checkbox"/> 每年重复</label><Button>添加纪念日</Button></div><div className="card p-4">下一个纪念日：恋爱周年（还有 86 天）</div></div>}
