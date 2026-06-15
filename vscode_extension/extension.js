const vscode = require('vscode');
const componentsData = require('./componentsData');

function activate(context) {
    console.log('MS UI KIT extension is now active!');

    let disposable = vscode.commands.registerCommand('ms-ui-kit.insertComponent', async function () {
        // Check if active text editor exists
        const editor = vscode.window.activeTextEditor;
        
        if (!editor) {
            vscode.window.showErrorMessage('Please open a file first to use MS UI KIT components!');
            return;
        }

        // Create quick pick items
        const quickPickItems = componentsData.map(comp => ({
            label: comp.name,
            detail: `From: ${comp.directory}`,
            content: comp.content
        }));

        // Show quick pick menu
        const selected = await vscode.window.showQuickPick(quickPickItems, {
            placeHolder: 'Select a component to insert',
            title: 'MS UI KIT Components',
            matchOnDetail: true,
            matchOnDescription: true
        });

        if (selected) {
            // Insert at cursor position
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
