import {MarkdownPlugin} from './shared/language/plugins/markdown';
declare const ide:{register(plugin:unknown):void};
ide.register(new MarkdownPlugin());
