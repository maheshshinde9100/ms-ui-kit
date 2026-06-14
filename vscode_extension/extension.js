const vscode = require('vscode');
const componentsData = require('./componentsData');

function activate(context) {
  console.log('MS UI KIT extension is now active!');

  let disposable = vscode.commands.registerCommand('ms-ui-kit.insertComponent', async function () {
    const editor = vscode.window.activeTextEditor;
    
    if (!editor) {
      vscode.window.showErrorMessage('No active editor found! Please open a file first.');
      return;
    }

    const items = componentsData.map(comp => ({
      label: `$(symbol-class) ${comp.name}`,
      description: `From ${comp.directory}`,
      detail: comp.content.substring(0, 120).replace(/\s+/g, ' ').trim() + '...',
      content: comp.content
    }));

    const selected = await vscode.window.showQuickPick(items, {
      placeHolder: 'Select a component to insert',
      title: 'MS UI KIT - Insert Component',
      matchOnDescription: true,
      matchOnDetail: true
    });

    if (selected) {
      editor.edit(editBuilder => {
        const position = editor.selection.active;
        editBuilder.insert(position, selected.content);
      });
      vscode.window.showInformationMessage(`${selected.label} inserted successfully!`);
    }
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
