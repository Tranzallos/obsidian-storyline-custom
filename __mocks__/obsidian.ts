// obsidian.ts
import { jest } from '@jest/globals';

export const addIcon = jest.fn();
export class ButtonComponent {}
export class DropdownComponent {}
export class FuzzySuggestModal {}
export class ItemView {}
export class Modal {}
export class Notice {}
export class Platform {}
export class Plugin {
  app = mockApp;
  loadData() {}
  registerEditorExtension() {}
  register() {}
  registerView() {}
  addRibbonIcon() {}
  addCommand() {}
  registerDomEvent() {}
  registerEvent() {}
  addSettingTab() {}
}
export class Setting {}
export class TFile {}
export class TextComponent {}
export class ToggleComponent {}
export class WorkspaceLeaf {}
export class normalizePath {}
export class parseYaml {}
export class setIcon {}

export class PluginSettingTab {}
export class SettingGroup {}
export class TFolder {}
export class TextAreaComponent {}
export class AbstractInputSuggest {}

const mockWorkspace = {
  onLayoutReady: jest.fn(),
  on: jest.fn(),
};

const mockVault = {
  on: jest.fn(),
}

const mockApp = {
  workspace: mockWorkspace,
  vault: mockVault,
};


// mocking these classes is not necessary. They're part of the import but only accessed as types {}, which should work out of the box.
// export class App {}
// export class MarkdownView {}
// export class Editor {}
