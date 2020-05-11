import { FieldNode, SelectionNode, DocumentNode } from 'graphql';
export declare type DirectiveInfo = {
    [fieldName: string]: {
        [argName: string]: any;
    };
};
export declare function getDirectiveInfoFromField(field: FieldNode, variables: Object): DirectiveInfo;
export declare function shouldInclude(selection: SelectionNode, variables?: {
    [name: string]: any;
}): boolean;
export declare function getDirectiveNames(doc: DocumentNode): string[];
export declare function hasDirectives(names: string[], doc: DocumentNode): boolean;
export declare function hasClientExports(document: DocumentNode): boolean;
//# sourceMappingURL=directives.d.ts.map