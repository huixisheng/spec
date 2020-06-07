declare const eslint: {
    extends: string[];
    plugins: string[];
    parserOptions: {
        sourceType: string;
    };
    env: {
        browser: boolean;
        node: boolean;
        es6: boolean;
        mocha: boolean;
        jest: boolean;
        jasmine: boolean;
    };
    rules: {
        'import/prefer-default-export': string;
        'max-len': (string | {
            code: number;
            tabWidth: number;
            ignoreComments: boolean;
            ignoreTrailingComments: boolean;
            ignoreUrls: boolean;
            ignoreStrings: boolean;
            ignoreRegExpLiterals: boolean;
        })[];
        'no-prototype-builtins': string;
        'import/no-named-as-default': string;
        'array-callback-return': string;
        'react/prefer-stateless-function': string;
        'react/prop-types': string;
        'react/state-in-constructor': string;
        'react/jsx-props-no-spreading': string;
        'react/destructuring-assignment': string;
        'jsx-a11y/no-static-element-interactions': string;
        'jsx-a11y/click-events-have-key-events': string;
        'import/no-cycle': string;
        'arrow-parens': string;
        'object-curly-newline': string;
        'operator-linebreak': string;
        'space-before-function-paren': string;
        'arrow-body-style': string;
        'no-param-reassign': string;
        "prefer-destructuring": (string | {
            VariableDeclarator: {
                array: boolean;
                object: boolean;
            };
            AssignmentExpression: {
                array: boolean;
                object: boolean;
            };
            enforceForRenamedProperties?: undefined;
        } | {
            enforceForRenamedProperties: boolean;
            VariableDeclarator?: undefined;
            AssignmentExpression?: undefined;
        })[];
    };
    settings: {
        'import/resolver': {
            node: {
                extensions: string[];
            };
            typescript: {
                alwaysTryTypes: boolean;
            };
        };
        "import/parsers": {
            "@typescript-eslint/parser": string[];
        };
    };
};
export default eslint;
