import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const content = `# 雨天里的拥抱\n\n窗外在下雨，屋里是热可可。\n\n- 一起看电影\n- 一起做饭\n`;
export default function BlogDetail(){return <article className="card p-8 prose prose-rose max-w-none"><ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown></article>}
