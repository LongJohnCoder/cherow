import { pass, fail } from '../test-utils';
describe('Miscellaneous - Keywords', () => {

    fail(`do = 1;`, {
        source: `do = 1;`,
        line: 1
    });

    fail(`\\u0074rue`, {
        source: `\\u0074rue`,
        line: 1
    });

    fail(`else = 1;`, {
        source: `else = 1;`,
        line: 1
    });

    fail(`\\u0069\\u{66} (1) {}`, {
        source: `\\u0069\\u{66} (1) {}`,
        line: 1
    });

    fail(`var i\\u0066`, {
        source: `var i\\u0066`,
        line: 1
    });

    fail(`"use strict"; var le\\u0074`, {
        source: `"use strict"; var le\\u0074`,
        line: 1
    });

    pass(`function *a(){({yi\\u0065ld: 0})}`, {
        source: 'function *a(){({yi\\u0065ld: 0})}',
        ranges: true,
        expected: {
            body: [
              {
                async: false,
                body: {
                 body: [
                    {
                      end: 31,
                      expression: {
                        end: 30,
                        properties: [
                          {
                            computed: false,
                            end: 29,
                            key: {
                             end: 26,
                              name: 'yield',
                              start: 16,
                              type: 'Identifier',
                            },
                            kind: 'init',
                            method: false,
                            shorthand: false,
                            start: 16,
                            type: 'Property',
                            value: {
                              end: 29,
                              start: 28,
                              type: 'Literal',
                              value: 0,
                            }
                          }
                        ],
                        start: 15,
                        type: 'ObjectExpression',
                      },
                      start: 14,
                     type: 'ExpressionStatement'
                    },
                 ],
                  end: 32,
                  start: 13,
                  type: 'BlockStatement'
                },
                end: 32,
                expression: false,
                generator: true,
                id: {
                  end: 11,
                  name: 'a',
                  start: 10,
                 type: 'Identifier'
                },
                params: [],
                start: 0,
                type: 'FunctionDeclaration'
              }
            ],
           end: 32,
            sourceType: 'script',
           start: 0,
            type: 'Program'
          }
    });
});
