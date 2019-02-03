import * as React from 'react';

interface TextareaProps {
  ref: (dom: HTMLTextAreaElement) => void;
  onChange: (text: string) => void;
  value: string;
}

export default class extends React.Component<TextareaProps> {
  render() {
    const { onChange, ...props } = this.props;
    return (
      <textarea {...props} onChange={e => onChange(e.target.value)} name="content" />
    );
  }
}