import React from 'react';
import { LiveProvider, LiveEditor, LivePreview } from 'react-live';
import theme from 'prism-react-renderer/themes/github';

export default function LiveCode({
  code,
  showPreview = true,
  showEditor = true,
  ...props
}) {
  return (
    <LiveProvider code={code} theme={theme} {...props}>
      <div
        style={{
          width: '100%',
          padding: '30px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {!props.disabled && showPreview && (
          <LivePreview
            style={{
              width: showEditor ? '40%' : '100%',
              padding: '30px',
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        )}
        {showEditor && (
          <LiveEditor
            style={{
              width: showPreview ? '60%' : '100%',
              outline: 'none',
              borderRadius: '12px',
              margin: '20px 0',
              fontSize: '1.7rem',
            }}
          />
        )}
      </div>
    </LiveProvider>
  );
}
