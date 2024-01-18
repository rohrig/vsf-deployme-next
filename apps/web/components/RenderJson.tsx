import dynamic from 'next/dynamic';

const ReactJson = dynamic(() => import('react-json-view'), { ssr: false });

export const RenderJson = (json: Object) => {
  return (
    <ReactJson
      src={json}
      theme="pop"
      iconStyle="triangle"
      onEdit={false}
      onAdd={false}
      onDelete={false}
      enableClipboard={false}
      displayDataTypes={true}
      displayObjectSize={true}
      indentWidth={2}
      collapsed={false}
      style={{ position: 'relative', width: '100%' }}
    />
  );
};
