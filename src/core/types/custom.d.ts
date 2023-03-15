declare module '*.svg' {
  export const ReactComponent: StyledComponentPropsWithAs<
    FunctionComponent<SVGProps<SVGSVGElement> & { fill?: boolean }>
  >;

  export const src: string;
}

declare module '*.ttf';
declare module '*.webp';
