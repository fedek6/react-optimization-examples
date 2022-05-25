import { useEffect } from 'react';

export const useRenderInfo = (name: string) => {
  useEffect(() => {
    console.log("Render: ", `<${name} />`);
  });
}
