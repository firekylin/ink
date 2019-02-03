import cls from 'classnames';
import * as React from 'react';

import { Mode } from '../types/mode';

interface ModebarProps {
  modeValue: Mode;
  onModeChange: (mode: Mode) => void;

  fullScreenValue: boolean;
  onFullScreenChange: (fullScreen: boolean) => void;
}

export default class extends React.Component<ModebarProps> {
  render() {
    const {
      modeValue: activeMode,
      onModeChange,
      fullScreenValue: isFullScreen,
      onFullScreenChange
    } = this.props;

    const modeArr = [
      { name: 'preview', title: 'Preview Mode' },
      { name: 'split', title: 'Split Mode' },
      { name: 'edit', title: 'Edit Mode' }
    ];

    const modeElements = modeArr.map(({ name: mode, title }) =>
      <li className="tb-btn pull-right">
        <a
          className={cls('editor-toolbar', mode, { active: mode === activeMode })}
          onClick={() => onModeChange(mode as Mode)}
          title={title}
        />
      </li>
    );
    return (
      <ul className="md-modebar">
        {modeElements}
        <li className="tb-btn spliter pull-right" />
        <li className="tb-btn pull-right">
          <a
            className={cls('editor-toolbar', {
              unzen: isFullScreen,
              zen: !isFullScreen
            })}
            onClick={() => onFullScreenChange(!isFullScreen)}
            title="FullScreen Mode"
          />
        </li>
      </ul>
    );
  }
};