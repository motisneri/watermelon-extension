import { ContextItem } from "../../ContextItem";
import * as vscode from "vscode";
import  summarizeCodeContext  from "../vscode/summarizeCodeContext";  


export const getCodeContextSummary = async (prTitle: string, prBody: string, blockOfCode: string, userEmail: string) => {
  let items: ContextItem[] = [];
  let codeContextSummary = await summarizeCodeContext({
    pr_title: prTitle,
    pr_body: prBody,
    block_of_code: blockOfCode,
    user_email: userEmail
  });

  items.push(
    new ContextItem(
      "Summary",
      vscode.TreeItemCollapsibleState.Expanded,
      'AI generated code context summary',
      undefined,
      [
        new ContextItem(codeContextSummary, vscode.TreeItemCollapsibleState.None, "", undefined),
      ],
      "openai",
    )
  );
  return items;
};
