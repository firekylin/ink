/**
 * 本项目的编辑器是由 https://github.com/leozdgao/react-markdown 该项目修改而来，感谢作者的无私奉献！
 */
import cls from 'classnames';
import * as React from 'react';

import InkToolbar from './components/toolbar';
import InkModebar from './components/modebar';
import InkTextarea from './components/textarea';
import InkPreview from './components/preview';

type Mode = 'editor' | 'preview' | 'split';
interface InkEditorProps {
  value: string;
  className?: string;
  onChange: (value: string) => void;
  onFullScreen: (isFullScreen: boolean) => void;
}

interface InkEditorState {
  mode: Mode;
  isFullScreen: boolean;
}
export default class InkEditor extends React.Component<InkEditorProps, InkEditorState> {
  dom: HTMLTextAreaElement;

  updateMode = mode => {
    this.setState({ mode });
  }

  updateFullScreen = isFullScreen => {
    this.setState({ isFullScreen });
  }

  render() {
    const { mode } = this.state;
    const editorClassName = cls('ink-editor', this.props.className);
    // const panelClassName = cls('ink-panel', { fullscreen: this.state.isFullScreen });
    // const editorClassName = cls('ink-textarea', { expand: this.state.mode === 'edit' });
    //   const previewClassName = cls('ink-preview', 'markdown', {
    //   expand: this.state.mode === 'preview',
    //     shrink: this.state.mode === 'edit'
    // });

    return (
      <div className={editorClassName}>
        <div className="ink-editor__header">
          <InkToolbar />
          <InkModebar
            modeValue={this.state.mode}
            fullScreenValue={this.state.isFullScreen}
            onModeChange={this.updateMode}
            onFullScreenChange={this.updateFullScreen}
          />
        </div>
        <div className="ink-editor__body">
          <InkTextarea
            ref={dom => { this.dom = dom }}
            value={this.props.value}
            onChange={this.props.onChange}
          />
          <InkPreview text={this.props.value} />
          <div className={cls({ hide: mode !== 'split' }, 'md-spliter')} />
        </div>
        <div className="ink-editor__footer">
          <a href="javascript:void(0);" className="ink-editor__resize"></a>
        </div>
      </div>
    );
  }
}

