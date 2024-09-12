export {};

export type Maybe<T> = T | null;

interface File extends Blob {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/File/lastModified) */
    readonly lastModified: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/File/name) */
    readonly name: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/File/webkitRelativePath) */
    readonly webkitRelativePath: string;
}

export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Date: number;
    DateTime: string;
    HTML: any;
    JSON: string;
    UploadFile: File;
  };
    
declare global {
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type Rest = Record<string, any>

    type ID = Maybe<Scalars['ID']>
}