import { DOMAttributes } from 'react';

declare module '*.gql' {
	import { DocumentNode } from 'graphql';
	const value: DocumentNode;
	export = schema;
}
declare module '*.scss' {
	const content: Record<string, string>;
	export default content;
}

declare module 'react' {
	interface HTMLAttributes<T> extends DOMAttributes<T> {
		'data-datocms-content-link-group'?: boolean;
		'data-datocms-content-link-boundary'?: boolean;
		'data-datocms-content-link-source'?: string | null;
		'data-datocms-content-link-url'?: string | null;
	}
}
