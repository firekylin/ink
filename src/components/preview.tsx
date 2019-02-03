import marked from 'marked';
import * as React from 'react';

interface PreviewProps {
  text: string;
}
export default class extends React.Component<PreviewProps> {
  render() {
    const { text } = this.props;
    const html = marked(text);
    return (
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    );
  }
}