/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Block } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useState } from "react";

// Função recursiva para renderizar a descrição com base nos tipos do conteúdo

export default function Editor({ defaultBlocks }: { defaultBlocks: Block[] | null }) {
  const [blocks, setBlocks] = useState<Block[]>(defaultBlocks || []);

  const config: { initialContent?: Block[] } = {}

  if (defaultBlocks && defaultBlocks.length > 0) {
    config.initialContent = defaultBlocks
  }

  const editor = useCreateBlockNote(config);

  return (
    <div>
      <input name="description" readOnly type="text" value={JSON.stringify(blocks)} className="hidden" />
      <BlockNoteView
        editor={editor}
        onChange={() => {
          setBlocks(editor.document);
        }}
      />
    </div>
  )
}
