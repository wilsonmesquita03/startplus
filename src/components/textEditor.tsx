"use client"; // necessário para Next.js 13+

import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";

export default function TextEditor() {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        autofocus: true,
        tools: {},
      });
      editorRef.current = editor;
    }

    return () => {
      editorRef.current?.destroy();
      editorRef.current = null;
    };
  }, []);

  return <div id="editorjs" className="border p-4" />;
}
