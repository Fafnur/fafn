import { ASTUtils, Selectors, toHumanReadableText } from '@angular-eslint/utils';
import { ESLintUtils, TSESTree } from '@typescript-eslint/utils';

// NOTE: The rule will be available in ESLint configs as "@nx/workspace/component-class-prefix"
export const RULE_NAME = 'component-class-prefix';

export const rule = ESLintUtils.RuleCreator(() => __filename)({
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Classes decorated with @Component must have prefix "Fafn" (or custom) in their name.',
      recommended: 'error',
    },
    schema: [
      {
        type: 'object',
        properties: {
          suffixes: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      componentClassPrefix: 'Component class names should end with one of these prefixes: {{prefixes}}.',
    },
  },
  defaultOptions: [
    {
      prefixes: ['Fafn'],
    },
  ],
  create(context, [{ prefixes }]) {
    return {
      [Selectors.COMPONENT_CLASS_DECORATOR](node: TSESTree.Decorator) {
        const classParent = node.parent as TSESTree.ClassDeclaration;
        const className = ASTUtils.getClassName(classParent);

        if (!className || !prefixes.some((prefix) => className.startsWith(prefix))) {
          context.report({
            node: classParent.id ? classParent.id : classParent,
            messageId: 'componentClassPrefix',
            data: { prefixes: toHumanReadableText(prefixes) },
          });
        }
      },
    };
  },
});
