import { Node, DefinitionHolder } from './baseNodes';
import { PropNode } from './prop';

const typeString = 'ComponentNode';

export interface ComponentNode extends DefinitionHolder {
	name: string;
	propsFilename?: string;
}

export function componentNode(
	name: string,
	types: PropNode[],
	propsFilename: string | undefined,
): ComponentNode {
	return {
		type: typeString,
		name: name,
		types: types || [],
		propsFilename,
	};
}

export function isComponentNode(node: Node): node is ComponentNode {
	return node.type === typeString;
}
