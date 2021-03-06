import { pass, fail } from '../test-utils';

describe('Expressions - Async function', () => {

    fail(`"use strict"; (async function eval () { })`, {
        source: '"use strict"; (async function eval () { })',
        message: 'Eval or arguments can\'t be assigned to in strict mode code',
        line: 1,
        column: 29,
        index: 29
    });

    fail(`async function foo (foo) { super.prop };`, {
        source: 'async function foo (foo) { super.prop };',
        line: 1,
    });

    fail(`(async function foo() { } = 1)`, {
        source: '(async function foo() { } = 1)',
        line: 1,
    });

    fail(`(async function eval () { })`, {
        source: '(async function eval () { })',
        line: 1,
    });

    fail(`(async function foo() { } = 1)`, {
        source: '(async function foo() { } = 1)',
        line: 1,
    });

    fail(`async function foo(await) { }`, {
        source: 'async function foo(await) { }',
        line: 1,
    });

    fail(`async function foo() { return {await} }`, {
        source: 'async function foo() { return {await} }',
        line: 1,
    });

    fail(`(async\nfunction foo() { })`, {
        source: '(async\nfunction foo() { })',
        line: 1,
    });

    fail(`async a\n=> a`, {
        source: 'async a\n=> a',
        line: 1,
    });

    fail(`async ()\n=> a`, {
        source: 'async ()\n=> a',
        line: 1,
    });

    fail(`(async\nfunction foo() { })`, {
        source: '(async\nfunction foo() { })',
        line: 1,
    });

    fail(`async function foo() { (await 1) = 1; }`, {
        source: 'async function foo() { (await 1) = 1; }',
        line: 1,
        column: 32
    });

    fail(`async function af() { var a = (x, y, z = await 0) => { }; }`, {
        source: 'async function af() { var a = (x, y, z = await 0) => { }; }',
        next: true
    });

    fail(`function () { a = async await => { } }`, {
        source: 'function () { a = async await => { } }',
        next: true,
        message: 'Function declaration must have a name in this context',
        line: 1,
        column: 8,
        index: 8
    });

    fail(`(async function foo() { } = 1)`, {
        source: '(async function foo() { } = 1)',
        line: 1,
    });

    fail(`async function foo() { (await 1) = 1; }`, {
        source: 'async function foo() { (await 1) = 1; }',
        line: 1,
    });

    fail(`async function wrap() { async function await() { } };`, {
        source: 'async function wrap() { async function await() { } };',
        line: 1,
    });

    fail(`async function wrap() { async function await() { } };`, {
        source: 'async function wrap() { async function await() { } };',
        line: 1,
    });

    fail(`async function wrap() { async function await() { } };`, {
        source: 'async function wrap() { async function await() { } };',
        line: 1,
    });

    fail(`async function wrap() { async function await() { } };`, {
        source: 'async function wrap() { async function await() { } };',
        line: 1,
    });

    fail(`async function foo(await) { };`, {
        source: 'async function foo(await) { };',
        line: 1,
    });

    fail(`(async function foo(await) { });`, {
        source: '(async function foo(await) { });',
        line: 1,
    });

    fail(`async function foo(await) { }`, {
        source: 'async function foo(await) { }',
        line: 1,
    });

    fail(`"(async\nfunction foo() { })`, {
        source: '"(async\nfunction foo() { })',
        line: 1,
    });

    fail(`(async function foo(await) { })`, {
        source: '(async function foo(await) { })',
        line: 1,
    });

    fail(`(async function foo() { return {await} })`, {
        source: '(async function foo() { return {await} })',
        line: 1,
    });

    fail(`export async function() {}`, {
        source: 'export async function() {}',
        module: true,
        line: 1,
    });

    fail(`async while (1) {}`, {
        source: 'async while (1) {}',
        line: 1,
    });

    fail(`async function *f() {}`, {
        source: `(async
    function f() {})`,
        line: 1,
    });

    pass(`(async function ref(a, b = 39,) {});`, {
        source: '(async function ref(a, b = 39,) {});',
        ranges: true,
        raw: true,
        loc: true,
        expected: {
            type: 'Program',
            body: [{
                type: 'ExpressionStatement',
                expression: {
                    type: 'FunctionExpression',
                    params: [{
                            type: 'Identifier',
                            name: 'a',
                            start: 20,
                            end: 21,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 20
                                },
                                end: {
                                    line: 1,
                                    column: 21
                                }
                            }
                        },
                        {
                            type: 'AssignmentPattern',
                            left: {
                                type: 'Identifier',
                                name: 'b',
                                start: 23,
                                end: 24,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 23
                                    },
                                    end: {
                                        line: 1,
                                        column: 24
                                    }
                                }
                            },
                            right: {
                                type: 'Literal',
                                value: 39,
                                start: 27,
                                end: 29,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 27
                                    },
                                    end: {
                                        line: 1,
                                        column: 29
                                    }
                                },
                                raw: '39'
                            },
                            start: 23,
                            end: 29,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 23
                                },
                                end: {
                                    line: 1,
                                    column: 29
                                }
                            }
                        }
                    ],
                    body: {
                        type: 'BlockStatement',
                        body: [],
                        start: 32,
                        end: 34,
                        loc: {
                            start: {
                                line: 1,
                                column: 32
                            },
                            end: {
                                line: 1,
                                column: 34
                            }
                        }
                    },
                    async: true,
                    generator: false,
                    expression: false,
                    id: {
                        type: 'Identifier',
                        name: 'ref',
                        start: 16,
                        end: 19,
                        loc: {
                            start: {
                                line: 1,
                                column: 16
                            },
                            end: {
                                line: 1,
                                column: 19
                            }
                        }
                    },
                    start: 1,
                    end: 34,
                    loc: {
                        start: {
                            line: 1,
                            column: 1
                        },
                        end: {
                            line: 1,
                            column: 34
                        }
                    }
                },
                start: 0,
                end: 36,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 36
                    }
                }
            }],
            sourceType: 'script',
            start: 0,
            end: 36,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 36
                }
            }
        }
    });

    pass(`(async function ref(a, b = 39,) {});`, {
        source: '(async function ref(a, b = 39,) {});',
        ranges: true,
        raw: true,
        loc: true,
        expected: {
            type: 'Program',
            body: [{
                type: 'ExpressionStatement',
                expression: {
                    type: 'FunctionExpression',
                    params: [{
                            type: 'Identifier',
                            name: 'a',
                            start: 20,
                            end: 21,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 20
                                },
                                end: {
                                    line: 1,
                                    column: 21
                                }
                            }
                        },
                        {
                            type: 'AssignmentPattern',
                            left: {
                                type: 'Identifier',
                                name: 'b',
                                start: 23,
                                end: 24,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 23
                                    },
                                    end: {
                                        line: 1,
                                        column: 24
                                    }
                                }
                            },
                            right: {
                                type: 'Literal',
                                value: 39,
                                start: 27,
                                end: 29,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 27
                                    },
                                    end: {
                                        line: 1,
                                        column: 29
                                    }
                                },
                                raw: '39'
                            },
                            start: 23,
                            end: 29,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 23
                                },
                                end: {
                                    line: 1,
                                    column: 29
                                }
                            }
                        }
                    ],
                    body: {
                        type: 'BlockStatement',
                        body: [],
                        start: 32,
                        end: 34,
                        loc: {
                            start: {
                                line: 1,
                                column: 32
                            },
                            end: {
                                line: 1,
                                column: 34
                            }
                        }
                    },
                    async: true,
                    generator: false,
                    expression: false,
                    id: {
                        type: 'Identifier',
                        name: 'ref',
                        start: 16,
                        end: 19,
                        loc: {
                            start: {
                                line: 1,
                                column: 16
                            },
                            end: {
                                line: 1,
                                column: 19
                            }
                        }
                    },
                    start: 1,
                    end: 34,
                    loc: {
                        start: {
                            line: 1,
                            column: 1
                        },
                        end: {
                            line: 1,
                            column: 34
                        }
                    }
                },
                start: 0,
                end: 36,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 36
                    }
                }
            }],
            sourceType: 'script',
            start: 0,
            end: 36,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 36
                }
            }
        }
    });

    pass('async function f() { for await (a of [])  }', {
        source: 'async function f() { for await (a of [])  {} }',
        loc: true,
        ranges: true,
        next: true,
        expected: {
            type: 'Program',
            body: [{
                type: 'FunctionDeclaration',
                params: [],
                body: {
                    type: 'BlockStatement',
                    body: [{
                        type: 'ForOfStatement',
                        body: {
                            type: 'BlockStatement',
                            body: [],
                            start: 42,
                            end: 44,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 42
                                },
                                end: {
                                    line: 1,
                                    column: 44
                                }
                            }
                        },
                        left: {
                            type: 'Identifier',
                            name: 'a',
                            start: 32,
                            end: 33,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 32
                                },
                                end: {
                                    line: 1,
                                    column: 33
                                }
                            }
                        },
                        right: {
                            type: 'ArrayExpression',
                            elements: [],
                            start: 37,
                            end: 39,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 37
                                },
                                end: {
                                    line: 1,
                                    column: 39
                                }
                            }
                        },
                        await: true,
                        start: 21,
                        end: 44,
                        loc: {
                            start: {
                                line: 1,
                                column: 21
                            },
                            end: {
                                line: 1,
                                column: 44
                            }
                        }
                    }],
                    start: 19,
                    end: 46,
                    loc: {
                        start: {
                            line: 1,
                            column: 19
                        },
                        end: {
                            line: 1,
                            column: 46
                        }
                    }
                },
                async: true,
                generator: false,
                expression: false,
                id: {
                    type: 'Identifier',
                    name: 'f',
                    start: 15,
                    end: 16,
                    loc: {
                        start: {
                            line: 1,
                            column: 15
                        },
                        end: {
                            line: 1,
                            column: 16
                        }
                    }
                },
                start: 0,
                end: 46,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 46
                    }
                }
            }],
            sourceType: 'script',
            start: 0,
            end: 46,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 46
                }
            }
        }
    });

    pass(`a = async function f() {}`, {
        source: 'a = async function f() {}',
        ranges: true,
        raw: true,
        loc: true,
        expected: {
            type: 'Program',
            body: [{
                type: 'ExpressionStatement',
                expression: {
                    type: 'AssignmentExpression',
                    left: {
                        type: 'Identifier',
                        name: 'a',
                        start: 0,
                        end: 1,
                        loc: {
                            start: {
                                line: 1,
                                column: 0
                            },
                            end: {
                                line: 1,
                                column: 1
                            }
                        }
                    },
                    operator: '=',
                    right: {
                        type: 'FunctionExpression',
                        params: [],
                        body: {
                            type: 'BlockStatement',
                            body: [],
                            start: 23,
                            end: 25,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 23
                                },
                                end: {
                                    line: 1,
                                    column: 25
                                }
                            }
                        },
                        async: true,
                        generator: false,
                        expression: false,
                        id: {
                            type: 'Identifier',
                            name: 'f',
                            start: 19,
                            end: 20,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 19
                                },
                                end: {
                                    line: 1,
                                    column: 20
                                }
                            }
                        },
                        start: 4,
                        end: 25,
                        loc: {
                            start: {
                                line: 1,
                                column: 4
                            },
                            end: {
                                line: 1,
                                column: 25
                            }
                        }
                    },
                    start: 0,
                    end: 25,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 25
                        }
                    }
                },
                start: 0,
                end: 25,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 25
                    }
                }
            }],
            sourceType: 'script',
            start: 0,
            end: 25,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 25
                }
            }
        }
    });

    pass(`x = async function(a) { await a }`, {
        source: 'x = async function(a) { await a }',
        ranges: true,
        raw: true,
        loc: true,
        expected: {
            type: 'Program',
            body: [{
                type: 'ExpressionStatement',
                expression: {
                    type: 'AssignmentExpression',
                    left: {
                        type: 'Identifier',
                        name: 'x',
                        start: 0,
                        end: 1,
                        loc: {
                            start: {
                                line: 1,
                                column: 0
                            },
                            end: {
                                line: 1,
                                column: 1
                            }
                        }
                    },
                    operator: '=',
                    right: {
                        type: 'FunctionExpression',
                        params: [{
                            type: 'Identifier',
                            name: 'a',
                            start: 19,
                            end: 20,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 19
                                },
                                end: {
                                    line: 1,
                                    column: 20
                                }
                            }
                        }],
                        body: {
                            type: 'BlockStatement',
                            body: [{
                                type: 'ExpressionStatement',
                                expression: {
                                    type: 'AwaitExpression',
                                    argument: {
                                        type: 'Identifier',
                                        name: 'a',
                                        start: 30,
                                        end: 31,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 30
                                            },
                                            end: {
                                                line: 1,
                                                column: 31
                                            }
                                        }
                                    },
                                    start: 24,
                                    end: 31,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 24
                                        },
                                        end: {
                                            line: 1,
                                            column: 31
                                        }
                                    }
                                },
                                start: 24,
                                end: 31,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 24
                                    },
                                    end: {
                                        line: 1,
                                        column: 31
                                    }
                                }
                            }],
                            start: 22,
                            end: 33,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 22
                                },
                                end: {
                                    line: 1,
                                    column: 33
                                }
                            }
                        },
                        async: true,
                        generator: false,
                        expression: false,
                        id: null,
                        start: 4,
                        end: 33,
                        loc: {
                            start: {
                                line: 1,
                                column: 4
                            },
                            end: {
                                line: 1,
                                column: 33
                            }
                        }
                    },
                    start: 0,
                    end: 33,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 33
                        }
                    }
                },
                start: 0,
                end: 33,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 33
                    }
                }
            }],
            sourceType: 'script',
            start: 0,
            end: 33,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 33
                }
            }
        }
    });

    pass(`f(async function(x) { await x })`, {
        source: 'f(async function(x) { await x })',
        ranges: true,
        raw: true,
        loc: true,
        expected: {
            type: 'Program',
            body: [{
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: {
                        type: 'Identifier',
                        name: 'f',
                        start: 0,
                        end: 1,
                        loc: {
                            start: {
                                line: 1,
                                column: 0
                            },
                            end: {
                                line: 1,
                                column: 1
                            }
                        }
                    },
                    arguments: [{
                        type: 'FunctionExpression',
                        params: [{
                            type: 'Identifier',
                            name: 'x',
                            start: 17,
                            end: 18,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 17
                                },
                                end: {
                                    line: 1,
                                    column: 18
                                }
                            }
                        }],
                        body: {
                            type: 'BlockStatement',
                            body: [{
                                type: 'ExpressionStatement',
                                expression: {
                                    type: 'AwaitExpression',
                                    argument: {
                                        type: 'Identifier',
                                        name: 'x',
                                        start: 28,
                                        end: 29,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 28
                                            },
                                            end: {
                                                line: 1,
                                                column: 29
                                            }
                                        }
                                    },
                                    start: 22,
                                    end: 29,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 22
                                        },
                                        end: {
                                            line: 1,
                                            column: 29
                                        }
                                    }
                                },
                                start: 22,
                                end: 29,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 22
                                    },
                                    end: {
                                        line: 1,
                                        column: 29
                                    }
                                }
                            }],
                            start: 20,
                            end: 31,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 20
                                },
                                end: {
                                    line: 1,
                                    column: 31
                                }
                            }
                        },
                        async: true,
                        generator: false,
                        expression: false,
                        id: null,
                        start: 2,
                        end: 31,
                        loc: {
                            start: {
                                line: 1,
                                column: 2
                            },
                            end: {
                                line: 1,
                                column: 31
                            }
                        }
                    }],
                    start: 0,
                    end: 32,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 32
                        }
                    }
                },
                start: 0,
                end: 32,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 32
                    }
                }
            }],
            sourceType: 'script',
            start: 0,
            end: 32,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 32
                }
            }
        }
    });

    pass(`f(b, async function(b) { await b }, c)`, {
        source: 'f(b, async function(b) { await b }, c)',
        ranges: true,
        raw: true,
        loc: true,
        expected: {
            type: 'Program',
            body: [{
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: {
                        type: 'Identifier',
                        name: 'f',
                        start: 0,
                        end: 1,
                        loc: {
                            start: {
                                line: 1,
                                column: 0
                            },
                            end: {
                                line: 1,
                                column: 1
                            }
                        }
                    },
                    arguments: [{
                            type: 'Identifier',
                            name: 'b',
                            start: 2,
                            end: 3,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 2
                                },
                                end: {
                                    line: 1,
                                    column: 3
                                }
                            }
                        },
                        {
                            type: 'FunctionExpression',
                            params: [{
                                type: 'Identifier',
                                name: 'b',
                                start: 20,
                                end: 21,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 20
                                    },
                                    end: {
                                        line: 1,
                                        column: 21
                                    }
                                }
                            }],
                            body: {
                                type: 'BlockStatement',
                                body: [{
                                    type: 'ExpressionStatement',
                                    expression: {
                                        type: 'AwaitExpression',
                                        argument: {
                                            type: 'Identifier',
                                            name: 'b',
                                            start: 31,
                                            end: 32,
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 31
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 32
                                                }
                                            }
                                        },
                                        start: 25,
                                        end: 32,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 25
                                            },
                                            end: {
                                                line: 1,
                                                column: 32
                                            }
                                        }
                                    },
                                    start: 25,
                                    end: 32,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 25
                                        },
                                        end: {
                                            line: 1,
                                            column: 32
                                        }
                                    }
                                }],
                                start: 23,
                                end: 34,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 23
                                    },
                                    end: {
                                        line: 1,
                                        column: 34
                                    }
                                }
                            },
                            async: true,
                            generator: false,
                            expression: false,
                            id: null,
                            start: 5,
                            end: 34,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 5
                                },
                                end: {
                                    line: 1,
                                    column: 34
                                }
                            }
                        },
                        {
                            type: 'Identifier',
                            name: 'c',
                            start: 36,
                            end: 37,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 36
                                },
                                end: {
                                    line: 1,
                                    column: 37
                                }
                            }
                        }
                    ],
                    start: 0,
                    end: 38,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 38
                        }
                    }
                },
                start: 0,
                end: 38,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 38
                    }
                }
            }],
            sourceType: 'script',
            start: 0,
            end: 38,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 38
                }
            }
        }
    });

    pass(`async function foo(a = async () => await b) {}`, {
        source: 'async function foo(a = async () => await b) {}',
        ranges: true,
        raw: true,
        loc: true,
        expected: {
            type: 'Program',
            start: 0,
            end: 46,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 46
                }
            },
            body: [{
                type: 'FunctionDeclaration',
                start: 0,
                end: 46,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 46
                    }
                },
                id: {
                    type: 'Identifier',
                    start: 15,
                    end: 18,
                    loc: {
                        start: {
                            line: 1,
                            column: 15
                        },
                        end: {
                            line: 1,
                            column: 18
                        }
                    },
                    name: 'foo'
                },
                generator: false,
                expression: false,
                async: true,
                params: [{
                    type: 'AssignmentPattern',
                    start: 19,
                    end: 42,
                    loc: {
                        start: {
                            line: 1,
                            column: 19
                        },
                        end: {
                            line: 1,
                            column: 42
                        }
                    },
                    left: {
                        type: 'Identifier',
                        start: 19,
                        end: 20,
                        loc: {
                            start: {
                                line: 1,
                                column: 19
                            },
                            end: {
                                line: 1,
                                column: 20
                            }
                        },
                        name: 'a'
                    },
                    right: {
                        type: 'ArrowFunctionExpression',
                        start: 23,
                        end: 42,
                        loc: {
                            start: {
                                line: 1,
                                column: 23
                            },
                            end: {
                                line: 1,
                                column: 42
                            }
                        },
                        id: null,
                        generator: false,
                        expression: true,
                        async: true,
                        params: [],
                        body: {
                            type: 'AwaitExpression',
                            start: 35,
                            end: 42,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 35
                                },
                                end: {
                                    line: 1,
                                    column: 42
                                }
                            },
                            argument: {
                                type: 'Identifier',
                                start: 41,
                                end: 42,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 41
                                    },
                                    end: {
                                        line: 1,
                                        column: 42
                                    }
                                },
                                name: 'b'
                            }
                        }
                    }
                }],
                body: {
                    type: 'BlockStatement',
                    start: 44,
                    end: 46,
                    loc: {
                        start: {
                            line: 1,
                            column: 44
                        },
                        end: {
                            line: 1,
                            column: 46
                        }
                    },
                    body: []
                }
            }],
            sourceType: 'script'
        }
    });

    pass(`async function foo(a = {async bar() { await b }}) {}`, {
        source: 'async function foo(a = {async bar() { await b }}) {}',
        ranges: true,
        loc: true,
        raw: true,
        expected: {
            type: 'Program',
            start: 0,
            end: 52,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 52
                }
            },
            body: [{
                type: 'FunctionDeclaration',
                start: 0,
                end: 52,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 52
                    }
                },
                id: {
                    type: 'Identifier',
                    start: 15,
                    end: 18,
                    loc: {
                        start: {
                            line: 1,
                            column: 15
                        },
                        end: {
                            line: 1,
                            column: 18
                        }
                    },
                    name: 'foo'
                },
                generator: false,
                expression: false,
                async: true,
                params: [{
                    type: 'AssignmentPattern',
                    start: 19,
                    end: 48,
                    loc: {
                        start: {
                            line: 1,
                            column: 19
                        },
                        end: {
                            line: 1,
                            column: 48
                        }
                    },
                    left: {
                        type: 'Identifier',
                        start: 19,
                        end: 20,
                        loc: {
                            start: {
                                line: 1,
                                column: 19
                            },
                            end: {
                                line: 1,
                                column: 20
                            }
                        },
                        name: 'a'
                    },
                    right: {
                        type: 'ObjectExpression',
                        start: 23,
                        end: 48,
                        loc: {
                            start: {
                                line: 1,
                                column: 23
                            },
                            end: {
                                line: 1,
                                column: 48
                            }
                        },
                        properties: [{
                            type: 'Property',
                            start: 24,
                            end: 47,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 24
                                },
                                end: {
                                    line: 1,
                                    column: 47
                                }
                            },
                            method: true,
                            shorthand: false,
                            computed: false,
                            key: {
                                type: 'Identifier',
                                start: 30,
                                end: 33,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 30
                                    },
                                    end: {
                                        line: 1,
                                        column: 33
                                    }
                                },
                                name: 'bar'
                            },
                            kind: 'init',
                            value: {
                                type: 'FunctionExpression',
                                start: 33,
                                end: 47,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 33
                                    },
                                    end: {
                                        line: 1,
                                        column: 47
                                    }
                                },
                                id: null,
                                generator: false,
                                expression: false,
                                async: true,
                                params: [],
                                body: {
                                    type: 'BlockStatement',
                                    start: 36,
                                    end: 47,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 36
                                        },
                                        end: {
                                            line: 1,
                                            column: 47
                                        }
                                    },
                                    body: [{
                                        type: 'ExpressionStatement',
                                        start: 38,
                                        end: 45,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 38
                                            },
                                            end: {
                                                line: 1,
                                                column: 45
                                            }
                                        },
                                        expression: {
                                            type: 'AwaitExpression',
                                            start: 38,
                                            end: 45,
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 38
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 45
                                                }
                                            },
                                            argument: {
                                                type: 'Identifier',
                                                start: 44,
                                                end: 45,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 44
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 45
                                                    }
                                                },
                                                name: 'b'
                                            }
                                        }
                                    }]
                                }
                            }
                        }]
                    }
                }],
                body: {
                    type: 'BlockStatement',
                    start: 50,
                    end: 52,
                    loc: {
                        start: {
                            line: 1,
                            column: 50
                        },
                        end: {
                            line: 1,
                            column: 52
                        }
                    },
                    body: []
                }
            }],
            sourceType: 'script'
        }
    });

    pass(`async function foo(a = class {async bar() { await b }}) {}`, {
        source: 'async function foo(a = class {async bar() { await b }}) {}',
        loc: true,
        ranges: true,
        raw: true,
        expected: {
            type: 'Program',
            start: 0,
            end: 58,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 58
                }
            },
            body: [{
                type: 'FunctionDeclaration',
                start: 0,
                end: 58,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 58
                    }
                },
                id: {
                    type: 'Identifier',
                    start: 15,
                    end: 18,
                    loc: {
                        start: {
                            line: 1,
                            column: 15
                        },
                        end: {
                            line: 1,
                            column: 18
                        }
                    },
                    name: 'foo'
                },
                generator: false,
                expression: false,
                async: true,
                params: [{
                    type: 'AssignmentPattern',
                    start: 19,
                    end: 54,
                    loc: {
                        start: {
                            line: 1,
                            column: 19
                        },
                        end: {
                            line: 1,
                            column: 54
                        }
                    },
                    left: {
                        type: 'Identifier',
                        start: 19,
                        end: 20,
                        loc: {
                            start: {
                                line: 1,
                                column: 19
                            },
                            end: {
                                line: 1,
                                column: 20
                            }
                        },
                        name: 'a'
                    },
                    right: {
                        type: 'ClassExpression',
                        start: 23,
                        end: 54,
                        loc: {
                            start: {
                                line: 1,
                                column: 23
                            },
                            end: {
                                line: 1,
                                column: 54
                            }
                        },
                        id: null,
                        superClass: null,
                        body: {
                            type: 'ClassBody',
                            start: 29,
                            end: 54,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 29
                                },
                                end: {
                                    line: 1,
                                    column: 54
                                }
                            },
                            body: [{
                                type: 'MethodDefinition',
                                start: 30,
                                end: 53,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 30
                                    },
                                    end: {
                                        line: 1,
                                        column: 53
                                    }
                                },
                                computed: false,
                                key: {
                                    type: 'Identifier',
                                    start: 36,
                                    end: 39,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 36
                                        },
                                        end: {
                                            line: 1,
                                            column: 39
                                        }
                                    },
                                    name: 'bar'
                                },
                                static: false,
                                kind: 'method',
                                value: {
                                    type: 'FunctionExpression',
                                    start: 39,
                                    end: 53,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 39
                                        },
                                        end: {
                                            line: 1,
                                            column: 53
                                        }
                                    },
                                    id: null,
                                    generator: false,
                                    expression: false,
                                    async: true,
                                    params: [],
                                    body: {
                                        type: 'BlockStatement',
                                        start: 42,
                                        end: 53,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 42
                                            },
                                            end: {
                                                line: 1,
                                                column: 53
                                            }
                                        },
                                        body: [{
                                            type: 'ExpressionStatement',
                                            start: 44,
                                            end: 51,
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 44
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 51
                                                }
                                            },
                                            expression: {
                                                type: 'AwaitExpression',
                                                start: 44,
                                                end: 51,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 44
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 51
                                                    }
                                                },
                                                argument: {
                                                    type: 'Identifier',
                                                    start: 50,
                                                    end: 51,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 50
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 51
                                                        }
                                                    },
                                                    name: 'b'
                                                }
                                            }
                                        }]
                                    }
                                }
                            }]
                        }
                    }
                }],
                body: {
                    type: 'BlockStatement',
                    start: 56,
                    end: 58,
                    loc: {
                        start: {
                            line: 1,
                            column: 56
                        },
                        end: {
                            line: 1,
                            column: 58
                        }
                    },
                    body: []
                }
            }],
            sourceType: 'script'
        }
    });

    pass(`async function foo(a, b) { await a }`, {
        source: 'async function foo(a, b) { await a }',
        loc: true,
        ranges: true,
        raw: true,
        expected: {
            type: 'Program',
            start: 0,
            end: 36,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 36
                }
            },
            body: [{
                type: 'FunctionDeclaration',
                start: 0,
                end: 36,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 36
                    }
                },
                id: {
                    type: 'Identifier',
                    start: 15,
                    end: 18,
                    loc: {
                        start: {
                            line: 1,
                            column: 15
                        },
                        end: {
                            line: 1,
                            column: 18
                        }
                    },
                    name: 'foo'
                },
                generator: false,
                expression: false,
                async: true,
                params: [{
                        type: 'Identifier',
                        start: 19,
                        end: 20,
                        loc: {
                            start: {
                                line: 1,
                                column: 19
                            },
                            end: {
                                line: 1,
                                column: 20
                            }
                        },
                        name: 'a'
                    },
                    {
                        type: 'Identifier',
                        start: 22,
                        end: 23,
                        loc: {
                            start: {
                                line: 1,
                                column: 22
                            },
                            end: {
                                line: 1,
                                column: 23
                            }
                        },
                        name: 'b'
                    }
                ],
                body: {
                    type: 'BlockStatement',
                    start: 25,
                    end: 36,
                    loc: {
                        start: {
                            line: 1,
                            column: 25
                        },
                        end: {
                            line: 1,
                            column: 36
                        }
                    },
                    body: [{
                        type: 'ExpressionStatement',
                        start: 27,
                        end: 34,
                        loc: {
                            start: {
                                line: 1,
                                column: 27
                            },
                            end: {
                                line: 1,
                                column: 34
                            }
                        },
                        expression: {
                            type: 'AwaitExpression',
                            start: 27,
                            end: 34,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 27
                                },
                                end: {
                                    line: 1,
                                    column: 34
                                }
                            },
                            argument: {
                                type: 'Identifier',
                                start: 33,
                                end: 34,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 33
                                    },
                                    end: {
                                        line: 1,
                                        column: 34
                                    }
                                },
                                name: 'a'
                            }
                        }
                    }]
                }
            }],
            sourceType: 'script'
        }
    });

    pass(`async function await() { }`, {
        source: 'async function await() { }',
        loc: true,
        ranges: true,
        expected: {
            type: 'Program',
            start: 0,
            end: 26,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 26
                }
            },
            body: [{
                type: 'FunctionDeclaration',
                start: 0,
                end: 26,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 26
                    }
                },
                id: {
                    type: 'Identifier',
                    start: 15,
                    end: 20,
                    loc: {
                        start: {
                            line: 1,
                            column: 15
                        },
                        end: {
                            line: 1,
                            column: 20
                        }
                    },
                    name: 'await'
                },
                generator: false,
                expression: false,
                async: true,
                params: [],
                body: {
                    type: 'BlockStatement',
                    start: 23,
                    end: 26,
                    loc: {
                        start: {
                            line: 1,
                            column: 23
                        },
                        end: {
                            line: 1,
                            column: 26
                        }
                    },
                    body: []
                }
            }],
            sourceType: 'script'
        }
    });

    pass(`a = async function f() {}`, {
        source: 'a = async function f() {}',
        loc: true,
        ranges: true,
        raw: true,
        expected: {
            type: 'Program',
            start: 0,
            end: 25,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 25
                }
            },
            body: [{
                type: 'ExpressionStatement',
                start: 0,
                end: 25,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 25
                    }
                },
                expression: {
                    type: 'AssignmentExpression',
                    start: 0,
                    end: 25,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 25
                        }
                    },
                    operator: '=',
                    left: {
                        type: 'Identifier',
                        start: 0,
                        end: 1,
                        loc: {
                            start: {
                                line: 1,
                                column: 0
                            },
                            end: {
                                line: 1,
                                column: 1
                            }
                        },
                        name: 'a'
                    },
                    right: {
                        type: 'FunctionExpression',
                        start: 4,
                        end: 25,
                        loc: {
                            start: {
                                line: 1,
                                column: 4
                            },
                            end: {
                                line: 1,
                                column: 25
                            }
                        },
                        id: {
                            type: 'Identifier',
                            start: 19,
                            end: 20,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 19
                                },
                                end: {
                                    line: 1,
                                    column: 20
                                }
                            },
                            name: 'f'
                        },
                        generator: false,
                        expression: false,
                        async: true,
                        params: [],
                        body: {
                            type: 'BlockStatement',
                            start: 23,
                            end: 25,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 23
                                },
                                end: {
                                    line: 1,
                                    column: 25
                                }
                            },
                            body: []
                        }
                    }
                }
            }],
            sourceType: 'script'
        }
    });

    pass(`a = async function() {}`, {
        source: 'a = async function() {}',
        loc: true,
        ranges: true,
        raw: true,
        expected: {
            type: 'Program',
            start: 0,
            end: 23,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 23
                }
            },
            body: [{
                type: 'ExpressionStatement',
                start: 0,
                end: 23,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 23
                    }
                },
                expression: {
                    type: 'AssignmentExpression',
                    start: 0,
                    end: 23,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 23
                        }
                    },
                    operator: '=',
                    left: {
                        type: 'Identifier',
                        start: 0,
                        end: 1,
                        loc: {
                            start: {
                                line: 1,
                                column: 0
                            },
                            end: {
                                line: 1,
                                column: 1
                            }
                        },
                        name: 'a'
                    },
                    right: {
                        type: 'FunctionExpression',
                        start: 4,
                        end: 23,
                        loc: {
                            start: {
                                line: 1,
                                column: 4
                            },
                            end: {
                                line: 1,
                                column: 23
                            }
                        },
                        id: null,
                        generator: false,
                        expression: false,
                        async: true,
                        params: [],
                        body: {
                            type: 'BlockStatement',
                            start: 21,
                            end: 23,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 21
                                },
                                end: {
                                    line: 1,
                                    column: 23
                                }
                            },
                            body: []
                        }
                    }
                }
            }],
            sourceType: 'script'
        }
    });

    pass(`function f() { async function yield() {} }`, {
        source: 'function f() { async function yield() {} }',
        loc: true,
        ranges: true,
        raw: true,
        expected: {
            type: 'Program',
            body: [{
                type: 'FunctionDeclaration',
                params: [],
                body: {
                    type: 'BlockStatement',
                    body: [{
                        type: 'FunctionDeclaration',
                        params: [],
                        body: {
                            type: 'BlockStatement',
                            body: [],
                            start: 38,
                            end: 40,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 38
                                },
                                end: {
                                    line: 1,
                                    column: 40
                                }
                            }
                        },
                        async: true,
                        generator: false,
                        expression: false,
                        id: {
                            type: 'Identifier',
                            name: 'yield',
                            start: 30,
                            end: 35,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 30
                                },
                                end: {
                                    line: 1,
                                    column: 35
                                }
                            }
                        },
                        start: 15,
                        end: 40,
                        loc: {
                            start: {
                                line: 1,
                                column: 15
                            },
                            end: {
                                line: 1,
                                column: 40
                            }
                        }
                    }],
                    start: 13,
                    end: 42,
                    loc: {
                        start: {
                            line: 1,
                            column: 13
                        },
                        end: {
                            line: 1,
                            column: 42
                        }
                    }
                },
                async: false,
                generator: false,
                expression: false,
                id: {
                    type: 'Identifier',
                    name: 'f',
                    start: 9,
                    end: 10,
                    loc: {
                        start: {
                            line: 1,
                            column: 9
                        },
                        end: {
                            line: 1,
                            column: 10
                        }
                    }
                },
                start: 0,
                end: 42,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 42
                    }
                }
            }],
            sourceType: 'script',
            start: 0,
            end: 42,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 42
                }
            }
        }
    });

    pass(`function* g() { (async function yield() {}); }`, {
        source: 'function* g() { (async function yield() {}); }',
        raw: true,
        expected: {
            body: [{
                async: false,
                body: {
                    body: [{
                        expression: {
                            async: true,
                            body: {
                                body: [],
                                type: 'BlockStatement'
                            },
                            expression: false,
                            generator: false,
                            id: {
                                name: 'yield',
                                type: 'Identifier'
                            },
                            params: [],
                            type: 'FunctionExpression'
                        },
                        type: 'ExpressionStatement'
                    }],
                    type: 'BlockStatement'
                },
                expression: false,
                generator: true,
                id: {
                    name: 'g',
                    type: 'Identifier'
                },
                params: [],
                type: 'FunctionDeclaration'
            }],
            sourceType: 'script',
            type: 'Program'
        }
    });

    pass(`function f() { (async function yield() {}); }`, {
        source: 'function f() { (async function yield() {}); }',
        raw: true,
        loc: true,
        ranges: true,
        expected: {
            type: 'Program',
            start: 0,
            end: 45,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 45
                }
            },
            body: [{
                type: 'FunctionDeclaration',
                start: 0,
                end: 45,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 45
                    }
                },
                id: {
                    type: 'Identifier',
                    start: 9,
                    end: 10,
                    loc: {
                        start: {
                            line: 1,
                            column: 9
                        },
                        end: {
                            line: 1,
                            column: 10
                        }
                    },
                    name: 'f'
                },
                generator: false,
                expression: false,
                async: false,
                params: [],
                body: {
                    type: 'BlockStatement',
                    start: 13,
                    end: 45,
                    loc: {
                        start: {
                            line: 1,
                            column: 13
                        },
                        end: {
                            line: 1,
                            column: 45
                        }
                    },
                    body: [{
                        type: 'ExpressionStatement',
                        start: 15,
                        end: 43,
                        loc: {
                            start: {
                                line: 1,
                                column: 15
                            },
                            end: {
                                line: 1,
                                column: 43
                            }
                        },
                        expression: {
                            type: 'FunctionExpression',
                            start: 16,
                            end: 41,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 16
                                },
                                end: {
                                    line: 1,
                                    column: 41
                                }
                            },
                            id: {
                                type: 'Identifier',
                                start: 31,
                                end: 36,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 31
                                    },
                                    end: {
                                        line: 1,
                                        column: 36
                                    }
                                },
                                name: 'yield'
                            },
                            generator: false,
                            expression: false,
                            async: true,
                            params: [],
                            body: {
                                type: 'BlockStatement',
                                start: 39,
                                end: 41,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 39
                                    },
                                    end: {
                                        line: 1,
                                        column: 41
                                    }
                                },
                                body: []
                            }
                        }
                    }]
                }
            }],
            sourceType: 'script'
        }
    });

    pass(`function f() { ({ async yield() {} }); }`, {
        source: 'function f() { ({ async yield() {} }); }',
        loc: true,
        ranges: true,
        raw: true,
        expected: {
            type: 'Program',
            body: [{
                type: 'FunctionDeclaration',
                params: [],
                body: {
                    type: 'BlockStatement',
                    body: [{
                        type: 'ExpressionStatement',
                        expression: {
                            type: 'ObjectExpression',
                            properties: [{
                                type: 'Property',
                                key: {
                                    type: 'Identifier',
                                    name: 'yield',
                                    start: 24,
                                    end: 29,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 24
                                        },
                                        end: {
                                            line: 1,
                                            column: 29
                                        }
                                    }
                                },
                                value: {
                                    type: 'FunctionExpression',
                                    params: [],
                                    body: {
                                        type: 'BlockStatement',
                                        body: [],
                                        start: 32,
                                        end: 34,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 32
                                            },
                                            end: {
                                                line: 1,
                                                column: 34
                                            }
                                        }
                                    },
                                    async: true,
                                    generator: false,
                                    expression: false,
                                    id: null,
                                    start: 29,
                                    end: 34,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 29
                                        },
                                        end: {
                                            line: 1,
                                            column: 34
                                        }
                                    }
                                },
                                kind: 'init',
                                computed: false,
                                method: true,
                                shorthand: false,
                                start: 18,
                                end: 34,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 18
                                    },
                                    end: {
                                        line: 1,
                                        column: 34
                                    }
                                }
                            }],
                            start: 16,
                            end: 36,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 16
                                },
                                end: {
                                    line: 1,
                                    column: 36
                                }
                            }
                        },
                        start: 15,
                        end: 38,
                        loc: {
                            start: {
                                line: 1,
                                column: 15
                            },
                            end: {
                                line: 1,
                                column: 38
                            }
                        }
                    }],
                    start: 13,
                    end: 40,
                    loc: {
                        start: {
                            line: 1,
                            column: 13
                        },
                        end: {
                            line: 1,
                            column: 40
                        }
                    }
                },
                async: false,
                generator: false,
                expression: false,
                id: {
                    type: 'Identifier',
                    name: 'f',
                    start: 9,
                    end: 10,
                    loc: {
                        start: {
                            line: 1,
                            column: 9
                        },
                        end: {
                            line: 1,
                            column: 10
                        }
                    }
                },
                start: 0,
                end: 40,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 40
                    }
                }
            }],
            sourceType: 'script',
            start: 0,
            end: 40,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 40
                }
            }
        }
    });

    pass(`({ async [yield]() {} });`, {
        source: '({ async [yield]() {} });',
        loc: true,
        ranges: true,
        raw: true,
        expected: {
            type: 'Program',
            body: [{
                type: 'ExpressionStatement',
                expression: {
                    type: 'ObjectExpression',
                    properties: [{
                        type: 'Property',
                        key: {
                            type: 'Identifier',
                            name: 'yield',
                            start: 10,
                            end: 15,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 10
                                },
                                end: {
                                    line: 1,
                                    column: 15
                                }
                            }
                        },
                        value: {
                            type: 'FunctionExpression',
                            params: [],
                            body: {
                                type: 'BlockStatement',
                                body: [],
                                start: 19,
                                end: 21,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 19
                                    },
                                    end: {
                                        line: 1,
                                        column: 21
                                    }
                                }
                            },
                            async: true,
                            generator: false,
                            expression: false,
                            id: null,
                            start: 16,
                            end: 21,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 16
                                },
                                end: {
                                    line: 1,
                                    column: 21
                                }
                            }
                        },
                        kind: 'init',
                        computed: true,
                        method: true,
                        shorthand: false,
                        start: 3,
                        end: 21,
                        loc: {
                            start: {
                                line: 1,
                                column: 3
                            },
                            end: {
                                line: 1,
                                column: 21
                            }
                        }
                    }],
                    start: 1,
                    end: 23,
                    loc: {
                        start: {
                            line: 1,
                            column: 1
                        },
                        end: {
                            line: 1,
                            column: 23
                        }
                    }
                },
                start: 0,
                end: 25,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 25
                    }
                }
            }],
            sourceType: 'script',
            start: 0,
            end: 25,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 25
                }
            }
        }
    });

    pass(`function f() { ({ async [yield]() {} }); }`, {
        source: 'function f() { ({ async [yield]() {} }); }',
        loc: true,
        ranges: true,
        raw: true,
        expected: {
            type: 'Program',
            body: [{
                type: 'FunctionDeclaration',
                params: [],
                body: {
                    type: 'BlockStatement',
                    body: [{
                        type: 'ExpressionStatement',
                        expression: {
                            type: 'ObjectExpression',
                            properties: [{
                                type: 'Property',
                                key: {
                                    type: 'Identifier',
                                    name: 'yield',
                                    start: 25,
                                    end: 30,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 25
                                        },
                                        end: {
                                            line: 1,
                                            column: 30
                                        }
                                    }
                                },
                                value: {
                                    type: 'FunctionExpression',
                                    params: [],
                                    body: {
                                        type: 'BlockStatement',
                                        body: [],
                                        start: 34,
                                        end: 36,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 34
                                            },
                                            end: {
                                                line: 1,
                                                column: 36
                                            }
                                        }
                                    },
                                    async: true,
                                    generator: false,
                                    expression: false,
                                    id: null,
                                    start: 31,
                                    end: 36,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 31
                                        },
                                        end: {
                                            line: 1,
                                            column: 36
                                        }
                                    }
                                },
                                kind: 'init',
                                computed: true,
                                method: true,
                                shorthand: false,
                                start: 18,
                                end: 36,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 18
                                    },
                                    end: {
                                        line: 1,
                                        column: 36
                                    }
                                }
                            }],
                            start: 16,
                            end: 38,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 16
                                },
                                end: {
                                    line: 1,
                                    column: 38
                                }
                            }
                        },
                        start: 15,
                        end: 40,
                        loc: {
                            start: {
                                line: 1,
                                column: 15
                            },
                            end: {
                                line: 1,
                                column: 40
                            }
                        }
                    }],
                    start: 13,
                    end: 42,
                    loc: {
                        start: {
                            line: 1,
                            column: 13
                        },
                        end: {
                            line: 1,
                            column: 42
                        }
                    }
                },
                async: false,
                generator: false,
                expression: false,
                id: {
                    type: 'Identifier',
                    name: 'f',
                    start: 9,
                    end: 10,
                    loc: {
                        start: {
                            line: 1,
                            column: 9
                        },
                        end: {
                            line: 1,
                            column: 10
                        }
                    }
                },
                start: 0,
                end: 42,
                loc: {
                    start: {
                        line: 1,
                        column: 0
                    },
                    end: {
                        line: 1,
                        column: 42
                    }
                }
            }],
            sourceType: 'script',
            start: 0,
            end: 42,
            loc: {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 42
                }
            }
        }
    });

    pass(`export default async function() {}`, {
        source: 'export default async function() {}',
        ranges: true,
        raw: true,
        module: true,
        loc: true,
        expected: {
          type: 'Program',
          body: [
              {
                  type: 'ExportDefaultDeclaration',
                  declaration: {
                      type: 'FunctionDeclaration',
                      params: [],
                      body: {
                          type: 'BlockStatement',
                          body: [],
                          start: 32,
                          end: 34,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 32
                              },
                              end: {
                                  line: 1,
                                  column: 34
                              }
                          }
                      },
                      async: true,
                      generator: false,
                      expression: false,
                      id: null,
                      start: 15,
                      end: 34,
                      loc: {
                          start: {
                              line: 1,
                              column: 15
                          },
                          end: {
                              line: 1,
                              column: 34
                          }
                      }
                  },
                  start: 0,
                  end: 34,
                  loc: {
                      start: {
                          line: 1,
                          column: 0
                      },
                      end: {
                          line: 1,
                          column: 34
                      }
                  }
              }
          ],
          sourceType: 'module',
          start: 0,
          end: 34,
          loc: {
              start: {
                  line: 1,
                  column: 0
              },
              end: {
                  line: 1,
                  column: 34
              }
          }
      }
      });

    pass(`export async function f() {}`, {
        source: 'export async function f() {}',
        ranges: true,
        raw: true,
        loc: true,
        module: true,
        expected: {
          type: 'Program',
          body: [
              {
                  type: 'ExportNamedDeclaration',
                  source: null,
                  specifiers: [],
                  declaration: {
                      type: 'FunctionDeclaration',
                      params: [],
                      body: {
                          type: 'BlockStatement',
                          body: [],
                          start: 26,
                          end: 28,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 26
                              },
                              end: {
                                  line: 1,
                                  column: 28
                              }
                          }
                      },
                      async: true,
                      generator: false,
                      expression: false,
                      id: {
                          type: 'Identifier',
                          name: 'f',
                          start: 22,
                          end: 23,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 22
                              },
                              end: {
                                  line: 1,
                                  column: 23
                              }
                          }
                      },
                      start: 7,
                      end: 28,
                      loc: {
                          start: {
                              line: 1,
                              column: 7
                          },
                          end: {
                              line: 1,
                              column: 28
                          }
                      }
                  },
                  start: 0,
                  end: 28,
                  loc: {
                      start: {
                          line: 1,
                          column: 0
                      },
                      end: {
                          line: 1,
                          column: 28
                      }
                  }
              }
          ],
          sourceType: 'module',
          start: 0,
          end: 28,
          loc: {
              start: {
                  line: 1,
                  column: 0
              },
              end: {
                  line: 1,
                  column: 28
              }
          }
      }
      });

    pass(`export async function f(a) { await a }`, {
        source: 'export async function f(a) { await a }',
        ranges: true,
        raw: true,
        loc: true,
        module: true,
        expected: {
          type: 'Program',
          body: [
              {
                  type: 'ExportNamedDeclaration',
                  source: null,
                  specifiers: [],
                  declaration: {
                      type: 'FunctionDeclaration',
                      params: [
                          {
                              type: 'Identifier',
                              name: 'a',
                              start: 24,
                              end: 25,
                              loc: {
                                  start: {
                                      line: 1,
                                      column: 24
                                  },
                                  end: {
                                      line: 1,
                                      column: 25
                                  }
                              }
                          }
                      ],
                      body: {
                          type: 'BlockStatement',
                          body: [
                              {
                                  type: 'ExpressionStatement',
                                  expression: {
                                      type: 'AwaitExpression',
                                      argument: {
                                          type: 'Identifier',
                                          name: 'a',
                                          start: 35,
                                          end: 36,
                                          loc: {
                                              start: {
                                                  line: 1,
                                                  column: 35
                                              },
                                              end: {
                                                  line: 1,
                                                  column: 36
                                              }
                                          }
                                      },
                                      start: 29,
                                      end: 36,
                                      loc: {
                                          start: {
                                              line: 1,
                                              column: 29
                                          },
                                          end: {
                                              line: 1,
                                              column: 36
                                          }
                                      }
                                  },
                                  start: 29,
                                  end: 36,
                                  loc: {
                                      start: {
                                          line: 1,
                                          column: 29
                                      },
                                      end: {
                                          line: 1,
                                          column: 36
                                      }
                                  }
                              }
                          ],
                          start: 27,
                          end: 38,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 27
                              },
                              end: {
                                  line: 1,
                                  column: 38
                              }
                          }
                      },
                      async: true,
                      generator: false,
                      expression: false,
                      id: {
                          type: 'Identifier',
                          name: 'f',
                          start: 22,
                          end: 23,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 22
                              },
                              end: {
                                  line: 1,
                                  column: 23
                              }
                          }
                      },
                      start: 7,
                      end: 38,
                      loc: {
                          start: {
                              line: 1,
                              column: 7
                          },
                          end: {
                              line: 1,
                              column: 38
                          }
                      }
                  },
                  start: 0,
                  end: 38,
                  loc: {
                      start: {
                          line: 1,
                          column: 0
                      },
                      end: {
                          line: 1,
                          column: 38
                      }
                  }
              }
          ],
          sourceType: 'module',
          start: 0,
          end: 38,
          loc: {
              start: {
                  line: 1,
                  column: 0
              },
              end: {
                  line: 1,
                  column: 38
              }
          }
      }
      });

    pass(`a = async function f() {}`, {
        source: 'a = async function f() {}',
        ranges: true,
        raw: true,
        loc: true,
        expected: {
          type: 'Program',
          body: [
              {
                  type: 'ExpressionStatement',
                  expression: {
                      type: 'AssignmentExpression',
                      left: {
                          type: 'Identifier',
                          name: 'a',
                          start: 0,
                          end: 1,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 0
                              },
                              end: {
                                  line: 1,
                                  column: 1
                              }
                          }
                      },
                      operator: '=',
                      right: {
                          type: 'FunctionExpression',
                          params: [],
                          body: {
                              type: 'BlockStatement',
                              body: [],
                              start: 23,
                              end: 25,
                              loc: {
                                  start: {
                                      line: 1,
                                      column: 23
                                  },
                                  end: {
                                      line: 1,
                                      column: 25
                                  }
                              }
                          },
                          async: true,
                          generator: false,
                          expression: false,
                          id: {
                              type: 'Identifier',
                              name: 'f',
                              start: 19,
                              end: 20,
                              loc: {
                                  start: {
                                      line: 1,
                                      column: 19
                                  },
                                  end: {
                                      line: 1,
                                      column: 20
                                  }
                              }
                          },
                          start: 4,
                          end: 25,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 4
                              },
                              end: {
                                  line: 1,
                                  column: 25
                              }
                          }
                      },
                      start: 0,
                      end: 25,
                      loc: {
                          start: {
                              line: 1,
                              column: 0
                          },
                          end: {
                              line: 1,
                              column: 25
                          }
                      }
                  },
                  start: 0,
                  end: 25,
                  loc: {
                      start: {
                          line: 1,
                          column: 0
                      },
                      end: {
                          line: 1,
                          column: 25
                      }
                  }
              }
          ],
          sourceType: 'script',
          start: 0,
          end: 25,
          loc: {
              start: {
                  line: 1,
                  column: 0
              },
              end: {
                  line: 1,
                  column: 25
              }
          }
      }
      });

    pass(`x = async function(a) { await a }`, {
        source: 'x = async function(a) { await a }',
        ranges: true,
        raw: true,
        loc: true,
        expected: {
          type: 'Program',
          body: [
              {
                  type: 'ExpressionStatement',
                  expression: {
                      type: 'AssignmentExpression',
                      left: {
                          type: 'Identifier',
                          name: 'x',
                          start: 0,
                          end: 1,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 0
                              },
                              end: {
                                  line: 1,
                                  column: 1
                              }
                          }
                      },
                      operator: '=',
                      right: {
                          type: 'FunctionExpression',
                          params: [
                              {
                                  type: 'Identifier',
                                  name: 'a',
                                  start: 19,
                                  end: 20,
                                  loc: {
                                      start: {
                                          line: 1,
                                          column: 19
                                      },
                                      end: {
                                          line: 1,
                                          column: 20
                                      }
                                  }
                              }
                          ],
                          body: {
                              type: 'BlockStatement',
                              body: [
                                  {
                                      type: 'ExpressionStatement',
                                      expression: {
                                          type: 'AwaitExpression',
                                          argument: {
                                              type: 'Identifier',
                                              name: 'a',
                                              start: 30,
                                              end: 31,
                                              loc: {
                                                  start: {
                                                      line: 1,
                                                      column: 30
                                                  },
                                                  end: {
                                                      line: 1,
                                                      column: 31
                                                  }
                                              }
                                          },
                                          start: 24,
                                          end: 31,
                                          loc: {
                                              start: {
                                                  line: 1,
                                                  column: 24
                                              },
                                              end: {
                                                  line: 1,
                                                  column: 31
                                              }
                                          }
                                      },
                                      start: 24,
                                      end: 31,
                                      loc: {
                                          start: {
                                              line: 1,
                                              column: 24
                                          },
                                          end: {
                                              line: 1,
                                              column: 31
                                          }
                                      }
                                  }
                              ],
                              start: 22,
                              end: 33,
                              loc: {
                                  start: {
                                      line: 1,
                                      column: 22
                                  },
                                  end: {
                                      line: 1,
                                      column: 33
                                  }
                              }
                          },
                          async: true,
                          generator: false,
                          expression: false,
                          id: null,
                          start: 4,
                          end: 33,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 4
                              },
                              end: {
                                  line: 1,
                                  column: 33
                              }
                          }
                      },
                      start: 0,
                      end: 33,
                      loc: {
                          start: {
                              line: 1,
                              column: 0
                          },
                          end: {
                              line: 1,
                              column: 33
                          }
                      }
                  },
                  start: 0,
                  end: 33,
                  loc: {
                      start: {
                          line: 1,
                          column: 0
                      },
                      end: {
                          line: 1,
                          column: 33
                      }
                  }
              }
          ],
          sourceType: 'script',
          start: 0,
          end: 33,
          loc: {
              start: {
                  line: 1,
                  column: 0
              },
              end: {
                  line: 1,
                  column: 33
              }
          }
      }
      });

    pass(`f(async function(x) { await x })`, {
        source: 'f(async function(x) { await x })',
        ranges: true,
        raw: true,
        loc: true,
        expected: {
          type: 'Program',
          body: [
              {
                  type: 'ExpressionStatement',
                  expression: {
                      type: 'CallExpression',
                      callee: {
                          type: 'Identifier',
                          name: 'f',
                          start: 0,
                          end: 1,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 0
                              },
                              end: {
                                  line: 1,
                                  column: 1
                              }
                          }
                      },
                      arguments: [
                          {
                              type: 'FunctionExpression',
                              params: [
                                  {
                                      type: 'Identifier',
                                      name: 'x',
                                      start: 17,
                                      end: 18,
                                      loc: {
                                          start: {
                                              line: 1,
                                              column: 17
                                          },
                                          end: {
                                              line: 1,
                                              column: 18
                                          }
                                      }
                                  }
                              ],
                              body: {
                                  type: 'BlockStatement',
                                  body: [
                                      {
                                          type: 'ExpressionStatement',
                                          expression: {
                                              type: 'AwaitExpression',
                                              argument: {
                                                  type: 'Identifier',
                                                  name: 'x',
                                                  start: 28,
                                                  end: 29,
                                                  loc: {
                                                      start: {
                                                          line: 1,
                                                          column: 28
                                                      },
                                                      end: {
                                                          line: 1,
                                                          column: 29
                                                      }
                                                  }
                                              },
                                              start: 22,
                                              end: 29,
                                              loc: {
                                                  start: {
                                                      line: 1,
                                                      column: 22
                                                  },
                                                  end: {
                                                      line: 1,
                                                      column: 29
                                                  }
                                              }
                                          },
                                          start: 22,
                                          end: 29,
                                          loc: {
                                              start: {
                                                  line: 1,
                                                  column: 22
                                              },
                                              end: {
                                                  line: 1,
                                                  column: 29
                                              }
                                          }
                                      }
                                  ],
                                  start: 20,
                                  end: 31,
                                  loc: {
                                      start: {
                                          line: 1,
                                          column: 20
                                      },
                                      end: {
                                          line: 1,
                                          column: 31
                                      }
                                  }
                              },
                              async: true,
                              generator: false,
                              expression: false,
                              id: null,
                              start: 2,
                              end: 31,
                              loc: {
                                  start: {
                                      line: 1,
                                      column: 2
                                  },
                                  end: {
                                      line: 1,
                                      column: 31
                                  }
                              }
                          }
                      ],
                      start: 0,
                      end: 32,
                      loc: {
                          start: {
                              line: 1,
                              column: 0
                          },
                          end: {
                              line: 1,
                              column: 32
                          }
                      }
                  },
                  start: 0,
                  end: 32,
                  loc: {
                      start: {
                          line: 1,
                          column: 0
                      },
                      end: {
                          line: 1,
                          column: 32
                      }
                  }
              }
          ],
          sourceType: 'script',
          start: 0,
          end: 32,
          loc: {
              start: {
                  line: 1,
                  column: 0
              },
              end: {
                  line: 1,
                  column: 32
              }
          }
      }
      });

    pass(`f(b, async function(b) { await b }, c)`, {
        source: 'f(b, async function(b) { await b }, c)',
        ranges: true,
        raw: true,
        loc: true,
        expected: {
          type: 'Program',
          body: [
              {
                  type: 'ExpressionStatement',
                  expression: {
                      type: 'CallExpression',
                      callee: {
                          type: 'Identifier',
                          name: 'f',
                          start: 0,
                          end: 1,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 0
                              },
                              end: {
                                  line: 1,
                                  column: 1
                              }
                          }
                      },
                      arguments: [
                          {
                              type: 'Identifier',
                              name: 'b',
                              start: 2,
                              end: 3,
                              loc: {
                                  start: {
                                      line: 1,
                                      column: 2
                                  },
                                  end: {
                                      line: 1,
                                      column: 3
                                  }
                              }
                          },
                          {
                              type: 'FunctionExpression',
                              params: [
                                  {
                                      type: 'Identifier',
                                      name: 'b',
                                      start: 20,
                                      end: 21,
                                      loc: {
                                          start: {
                                              line: 1,
                                              column: 20
                                          },
                                          end: {
                                              line: 1,
                                              column: 21
                                          }
                                      }
                                  }
                              ],
                              body: {
                                  type: 'BlockStatement',
                                  body: [
                                      {
                                          type: 'ExpressionStatement',
                                          expression: {
                                              type: 'AwaitExpression',
                                              argument: {
                                                  type: 'Identifier',
                                                  name: 'b',
                                                  start: 31,
                                                  end: 32,
                                                  loc: {
                                                      start: {
                                                          line: 1,
                                                          column: 31
                                                      },
                                                      end: {
                                                          line: 1,
                                                          column: 32
                                                      }
                                                  }
                                              },
                                              start: 25,
                                              end: 32,
                                              loc: {
                                                  start: {
                                                      line: 1,
                                                      column: 25
                                                  },
                                                  end: {
                                                      line: 1,
                                                      column: 32
                                                  }
                                              }
                                          },
                                          start: 25,
                                          end: 32,
                                          loc: {
                                              start: {
                                                  line: 1,
                                                  column: 25
                                              },
                                              end: {
                                                  line: 1,
                                                  column: 32
                                              }
                                          }
                                      }
                                  ],
                                  start: 23,
                                  end: 34,
                                  loc: {
                                      start: {
                                          line: 1,
                                          column: 23
                                      },
                                      end: {
                                          line: 1,
                                          column: 34
                                      }
                                  }
                              },
                              async: true,
                              generator: false,
                              expression: false,
                              id: null,
                              start: 5,
                              end: 34,
                              loc: {
                                  start: {
                                      line: 1,
                                      column: 5
                                  },
                                  end: {
                                      line: 1,
                                      column: 34
                                  }
                              }
                          },
                          {
                              type: 'Identifier',
                              name: 'c',
                              start: 36,
                              end: 37,
                              loc: {
                                  start: {
                                      line: 1,
                                      column: 36
                                  },
                                  end: {
                                      line: 1,
                                      column: 37
                                  }
                              }
                          }
                      ],
                      start: 0,
                      end: 38,
                      loc: {
                          start: {
                              line: 1,
                              column: 0
                          },
                          end: {
                              line: 1,
                              column: 38
                          }
                      }
                  },
                  start: 0,
                  end: 38,
                  loc: {
                      start: {
                          line: 1,
                          column: 0
                      },
                      end: {
                          line: 1,
                          column: 38
                      }
                  }
              }
          ],
          sourceType: 'script',
          start: 0,
          end: 38,
          loc: {
              start: {
                  line: 1,
                  column: 0
              },
              end: {
                  line: 1,
                  column: 38
              }
          }
      }
      });

    pass(`async function foo(a = async () => await b) {}`, {
                  source: 'async function foo(a = async () => await b) {}',
                  ranges: true,
                  raw: true,
                  loc: true,
                  expected: {
                    type: 'Program',
                    start: 0,
                    end: 46,
                    loc: {
                      start: {
                        line: 1,
                        column: 0
                      },
                      end: {
                        line: 1,
                        column: 46
                      }
                    },
                    body: [
                      {
                        type: 'FunctionDeclaration',
                        start: 0,
                        end: 46,
                        loc: {
                          start: {
                            line: 1,
                            column: 0
                          },
                          end: {
                            line: 1,
                            column: 46
                          }
                        },
                        id: {
                          type: 'Identifier',
                          start: 15,
                          end: 18,
                          loc: {
                            start: {
                              line: 1,
                              column: 15
                            },
                            end: {
                              line: 1,
                              column: 18
                            }
                          },
                          name: 'foo'
                        },
                        generator: false,
                        expression: false,
                        async: true,
                        params: [
                          {
                            type: 'AssignmentPattern',
                            start: 19,
                            end: 42,
                            loc: {
                              start: {
                                line: 1,
                                column: 19
                              },
                              end: {
                                line: 1,
                                column: 42
                              }
                            },
                            left: {
                              type: 'Identifier',
                              start: 19,
                              end: 20,
                              loc: {
                                start: {
                                  line: 1,
                                  column: 19
                                },
                                end: {
                                  line: 1,
                                  column: 20
                                }
                              },
                              name: 'a'
                            },
                            right: {
                              type: 'ArrowFunctionExpression',
                              start: 23,
                              end: 42,
                              loc: {
                                start: {
                                  line: 1,
                                  column: 23
                                },
                                end: {
                                  line: 1,
                                  column: 42
                                }
                              },
                              id: null,
                              generator: false,
                              expression: true,
                              async: true,
                              params: [],
                              body: {
                                type: 'AwaitExpression',
                                start: 35,
                                end: 42,
                                loc: {
                                  start: {
                                    line: 1,
                                    column: 35
                                  },
                                  end: {
                                    line: 1,
                                    column: 42
                                  }
                                },
                                argument: {
                                  type: 'Identifier',
                                  start: 41,
                                  end: 42,
                                  loc: {
                                    start: {
                                      line: 1,
                                      column: 41
                                    },
                                    end: {
                                      line: 1,
                                      column: 42
                                    }
                                  },
                                  name: 'b'
                                }
                              }
                            }
                          }
                        ],
                        body: {
                          type: 'BlockStatement',
                          start: 44,
                          end: 46,
                          loc: {
                            start: {
                              line: 1,
                              column: 44
                            },
                            end: {
                              line: 1,
                              column: 46
                            }
                          },
                          body: []
                        }
                      }
                    ],
                    sourceType: 'script'
                  }
              });

    pass(`async function foo(a = {async bar() { await b }}) {}`, {
                  source: 'async function foo(a = {async bar() { await b }}) {}',
                  ranges: true,
                  loc: true,
                  raw: true,
                  expected: {
                    type: 'Program',
                    start: 0,
                    end: 52,
                    loc: {
                      start: {
                        line: 1,
                        column: 0
                      },
                      end: {
                        line: 1,
                        column: 52
                      }
                    },
                    body: [
                      {
                        type: 'FunctionDeclaration',
                        start: 0,
                        end: 52,
                        loc: {
                          start: {
                            line: 1,
                            column: 0
                          },
                          end: {
                            line: 1,
                            column: 52
                          }
                        },
                        id: {
                          type: 'Identifier',
                          start: 15,
                          end: 18,
                          loc: {
                            start: {
                              line: 1,
                              column: 15
                            },
                            end: {
                              line: 1,
                              column: 18
                            }
                          },
                          name: 'foo'
                        },
                        generator: false,
                        expression: false,
                        async: true,
                        params: [
                          {
                            type: 'AssignmentPattern',
                            start: 19,
                            end: 48,
                            loc: {
                              start: {
                                line: 1,
                                column: 19
                              },
                              end: {
                                line: 1,
                                column: 48
                              }
                            },
                            left: {
                              type: 'Identifier',
                              start: 19,
                              end: 20,
                              loc: {
                                start: {
                                  line: 1,
                                  column: 19
                                },
                                end: {
                                  line: 1,
                                  column: 20
                                }
                              },
                              name: 'a'
                            },
                            right: {
                              type: 'ObjectExpression',
                              start: 23,
                              end: 48,
                              loc: {
                                start: {
                                  line: 1,
                                  column: 23
                                },
                                end: {
                                  line: 1,
                                  column: 48
                                }
                              },
                              properties: [
                                {
                                  type: 'Property',
                                  start: 24,
                                  end: 47,
                                  loc: {
                                    start: {
                                      line: 1,
                                      column: 24
                                    },
                                    end: {
                                      line: 1,
                                      column: 47
                                    }
                                  },
                                  method: true,
                                  shorthand: false,
                                  computed: false,
                                  key: {
                                    type: 'Identifier',
                                    start: 30,
                                    end: 33,
                                    loc: {
                                      start: {
                                        line: 1,
                                        column: 30
                                      },
                                      end: {
                                        line: 1,
                                        column: 33
                                      }
                                    },
                                    name: 'bar'
                                  },
                                  kind: 'init',
                                  value: {
                                    type: 'FunctionExpression',
                                    start: 33,
                                    end: 47,
                                    loc: {
                                      start: {
                                        line: 1,
                                        column: 33
                                      },
                                      end: {
                                        line: 1,
                                        column: 47
                                      }
                                    },
                                    id: null,
                                    generator: false,
                                    expression: false,
                                    async: true,
                                    params: [],
                                    body: {
                                      type: 'BlockStatement',
                                      start: 36,
                                      end: 47,
                                      loc: {
                                        start: {
                                          line: 1,
                                          column: 36
                                        },
                                        end: {
                                          line: 1,
                                          column: 47
                                        }
                                      },
                                      body: [
                                        {
                                          type: 'ExpressionStatement',
                                          start: 38,
                                          end: 45,
                                          loc: {
                                            start: {
                                              line: 1,
                                              column: 38
                                            },
                                            end: {
                                              line: 1,
                                              column: 45
                                            }
                                          },
                                          expression: {
                                            type: 'AwaitExpression',
                                            start: 38,
                                            end: 45,
                                            loc: {
                                              start: {
                                                line: 1,
                                                column: 38
                                              },
                                              end: {
                                                line: 1,
                                                column: 45
                                              }
                                            },
                                            argument: {
                                              type: 'Identifier',
                                              start: 44,
                                              end: 45,
                                              loc: {
                                                start: {
                                                  line: 1,
                                                  column: 44
                                                },
                                                end: {
                                                  line: 1,
                                                  column: 45
                                                }
                                              },
                                              name: 'b'
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ],
                        body: {
                          type: 'BlockStatement',
                          start: 50,
                          end: 52,
                          loc: {
                            start: {
                              line: 1,
                              column: 50
                            },
                            end: {
                              line: 1,
                              column: 52
                            }
                          },
                          body: []
                        }
                      }
                    ],
                    sourceType: 'script'
                  }
              });

    pass(`async function foo(a = class {async bar() { await b }}) {}`, {
                  source: 'async function foo(a = class {async bar() { await b }}) {}',
                  loc: true,
                  ranges: true,
                  raw: true,
                  expected: {
                    type: 'Program',
                    start: 0,
                    end: 58,
                    loc: {
                      start: {
                        line: 1,
                        column: 0
                      },
                      end: {
                        line: 1,
                        column: 58
                      }
                    },
                    body: [
                      {
                        type: 'FunctionDeclaration',
                        start: 0,
                        end: 58,
                        loc: {
                          start: {
                            line: 1,
                            column: 0
                          },
                          end: {
                            line: 1,
                            column: 58
                          }
                        },
                        id: {
                          type: 'Identifier',
                          start: 15,
                          end: 18,
                          loc: {
                            start: {
                              line: 1,
                              column: 15
                            },
                            end: {
                              line: 1,
                              column: 18
                            }
                          },
                          name: 'foo'
                        },
                        generator: false,
                        expression: false,
                        async: true,
                        params: [
                          {
                            type: 'AssignmentPattern',
                            start: 19,
                            end: 54,
                            loc: {
                              start: {
                                line: 1,
                                column: 19
                              },
                              end: {
                                line: 1,
                                column: 54
                              }
                            },
                            left: {
                              type: 'Identifier',
                              start: 19,
                              end: 20,
                              loc: {
                                start: {
                                  line: 1,
                                  column: 19
                                },
                                end: {
                                  line: 1,
                                  column: 20
                                }
                              },
                              name: 'a'
                            },
                            right: {
                              type: 'ClassExpression',
                              start: 23,
                              end: 54,
                              loc: {
                                start: {
                                  line: 1,
                                  column: 23
                                },
                                end: {
                                  line: 1,
                                  column: 54
                                }
                              },
                              id: null,
                              superClass: null,
                              body: {
                                type: 'ClassBody',
                                start: 29,
                                end: 54,
                                loc: {
                                  start: {
                                    line: 1,
                                    column: 29
                                  },
                                  end: {
                                    line: 1,
                                    column: 54
                                  }
                                },
                                body: [
                                  {
                                    type: 'MethodDefinition',
                                    start: 30,
                                    end: 53,
                                    loc: {
                                      start: {
                                        line: 1,
                                        column: 30
                                      },
                                      end: {
                                        line: 1,
                                        column: 53
                                      }
                                    },
                                    computed: false,
                                    key: {
                                      type: 'Identifier',
                                      start: 36,
                                      end: 39,
                                      loc: {
                                        start: {
                                          line: 1,
                                          column: 36
                                        },
                                        end: {
                                          line: 1,
                                          column: 39
                                        }
                                      },
                                      name: 'bar'
                                    },
                                    static: false,
                                    kind: 'method',
                                    value: {
                                      type: 'FunctionExpression',
                                      start: 39,
                                      end: 53,
                                      loc: {
                                        start: {
                                          line: 1,
                                          column: 39
                                        },
                                        end: {
                                          line: 1,
                                          column: 53
                                        }
                                      },
                                      id: null,
                                      generator: false,
                                      expression: false,
                                      async: true,
                                      params: [],
                                      body: {
                                        type: 'BlockStatement',
                                        start: 42,
                                        end: 53,
                                        loc: {
                                          start: {
                                            line: 1,
                                            column: 42
                                          },
                                          end: {
                                            line: 1,
                                            column: 53
                                          }
                                        },
                                        body: [
                                          {
                                            type: 'ExpressionStatement',
                                            start: 44,
                                            end: 51,
                                            loc: {
                                              start: {
                                                line: 1,
                                                column: 44
                                              },
                                              end: {
                                                line: 1,
                                                column: 51
                                              }
                                            },
                                            expression: {
                                              type: 'AwaitExpression',
                                              start: 44,
                                              end: 51,
                                              loc: {
                                                start: {
                                                  line: 1,
                                                  column: 44
                                                },
                                                end: {
                                                  line: 1,
                                                  column: 51
                                                }
                                              },
                                              argument: {
                                                type: 'Identifier',
                                                start: 50,
                                                end: 51,
                                                loc: {
                                                  start: {
                                                    line: 1,
                                                    column: 50
                                                  },
                                                  end: {
                                                    line: 1,
                                                    column: 51
                                                  }
                                                },
                                                name: 'b'
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          }
                        ],
                        body: {
                          type: 'BlockStatement',
                          start: 56,
                          end: 58,
                          loc: {
                            start: {
                              line: 1,
                              column: 56
                            },
                            end: {
                              line: 1,
                              column: 58
                            }
                          },
                          body: []
                        }
                      }
                    ],
                    sourceType: 'script'
                  }
              });

    pass(`async function foo(a, b) { await a }`, {
                source: 'async function foo(a, b) { await a }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                  type: 'Program',
                  start: 0,
                  end: 36,
                  loc: {
                    start: {
                      line: 1,
                      column: 0
                    },
                    end: {
                      line: 1,
                      column: 36
                    }
                  },
                  body: [
                    {
                      type: 'FunctionDeclaration',
                      start: 0,
                      end: 36,
                      loc: {
                        start: {
                          line: 1,
                          column: 0
                        },
                        end: {
                          line: 1,
                          column: 36
                        }
                      },
                      id: {
                        type: 'Identifier',
                        start: 15,
                        end: 18,
                        loc: {
                          start: {
                            line: 1,
                            column: 15
                          },
                          end: {
                            line: 1,
                            column: 18
                          }
                        },
                        name: 'foo'
                      },
                      generator: false,
                      expression: false,
                      async: true,
                      params: [
                        {
                          type: 'Identifier',
                          start: 19,
                          end: 20,
                          loc: {
                            start: {
                              line: 1,
                              column: 19
                            },
                            end: {
                              line: 1,
                              column: 20
                            }
                          },
                          name: 'a'
                        },
                        {
                          type: 'Identifier',
                          start: 22,
                          end: 23,
                          loc: {
                            start: {
                              line: 1,
                              column: 22
                            },
                            end: {
                              line: 1,
                              column: 23
                            }
                          },
                          name: 'b'
                        }
                      ],
                      body: {
                        type: 'BlockStatement',
                        start: 25,
                        end: 36,
                        loc: {
                          start: {
                            line: 1,
                            column: 25
                          },
                          end: {
                            line: 1,
                            column: 36
                          }
                        },
                        body: [
                          {
                            type: 'ExpressionStatement',
                            start: 27,
                            end: 34,
                            loc: {
                              start: {
                                line: 1,
                                column: 27
                              },
                              end: {
                                line: 1,
                                column: 34
                              }
                            },
                            expression: {
                              type: 'AwaitExpression',
                              start: 27,
                              end: 34,
                              loc: {
                                start: {
                                  line: 1,
                                  column: 27
                                },
                                end: {
                                  line: 1,
                                  column: 34
                                }
                              },
                              argument: {
                                type: 'Identifier',
                                start: 33,
                                end: 34,
                                loc: {
                                  start: {
                                    line: 1,
                                    column: 33
                                  },
                                  end: {
                                    line: 1,
                                    column: 34
                                  }
                                },
                                name: 'a'
                              }
                            }
                          }
                        ]
                      }
                    }
                  ],
                  sourceType: 'script'
                }
            });

    pass(`async function await() { }`, {
                source: 'async function await() { }',
                loc: true,
                ranges: true,
                expected: {
                  type: 'Program',
                  start: 0,
                  end: 26,
                  loc: {
                    start: {
                      line: 1,
                      column: 0
                    },
                    end: {
                      line: 1,
                      column: 26
                    }
                  },
                  body: [
                    {
                      type: 'FunctionDeclaration',
                      start: 0,
                      end: 26,
                      loc: {
                        start: {
                          line: 1,
                          column: 0
                        },
                        end: {
                          line: 1,
                          column: 26
                        }
                      },
                      id: {
                        type: 'Identifier',
                        start: 15,
                        end: 20,
                        loc: {
                          start: {
                            line: 1,
                            column: 15
                          },
                          end: {
                            line: 1,
                            column: 20
                          }
                        },
                        name: 'await'
                      },
                      generator: false,
                      expression: false,
                      async: true,
                      params: [],
                      body: {
                        type: 'BlockStatement',
                        start: 23,
                        end: 26,
                        loc: {
                          start: {
                            line: 1,
                            column: 23
                          },
                          end: {
                            line: 1,
                            column: 26
                          }
                        },
                        body: []
                      }
                    }
                  ],
                  sourceType: 'script'
                }
            });

    pass(`a = async function f() {}`, {
                source: 'a = async function f() {}',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                  type: 'Program',
                  start: 0,
                  end: 25,
                  loc: {
                      start: {
                          line: 1,
                          column: 0
                      },
                      end: {
                          line: 1,
                          column: 25
                      }
                  },
                  body: [{
                      type: 'ExpressionStatement',
                      start: 0,
                      end: 25,
                      loc: {
                          start: {
                              line: 1,
                              column: 0
                          },
                          end: {
                              line: 1,
                              column: 25
                          }
                      },
                      expression: {
                          type: 'AssignmentExpression',
                          start: 0,
                          end: 25,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 0
                              },
                              end: {
                                  line: 1,
                                  column: 25
                              }
                          },
                          operator: '=',
                          left: {
                              type: 'Identifier',
                              start: 0,
                              end: 1,
                              loc: {
                                  start: {
                                      line: 1,
                                      column: 0
                                  },
                                  end: {
                                      line: 1,
                                      column: 1
                                  }
                              },
                              name: 'a'
                          },
                          right: {
                              type: 'FunctionExpression',
                              start: 4,
                              end: 25,
                              loc: {
                                  start: {
                                      line: 1,
                                      column: 4
                                  },
                                  end: {
                                      line: 1,
                                      column: 25
                                  }
                              },
                              id: {
                                  type: 'Identifier',
                                  start: 19,
                                  end: 20,
                                  loc: {
                                      start: {
                                          line: 1,
                                          column: 19
                                      },
                                      end: {
                                          line: 1,
                                          column: 20
                                      }
                                  },
                                  name: 'f'
                              },
                              generator: false,
                              expression: false,
                              async: true,
                              params: [],
                              body: {
                                  type: 'BlockStatement',
                                  start: 23,
                                  end: 25,
                                  loc: {
                                      start: {
                                          line: 1,
                                          column: 23
                                      },
                                      end: {
                                          line: 1,
                                          column: 25
                                      }
                                  },
                                  body: []
                              }
                          }
                      }
                  }],
                  sourceType: 'script'
              }
            });

    pass(`a = async function() {}`, {
                source: 'a = async function() {}',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                  type: 'Program',
                  start: 0,
                  end: 23,
                  loc: {
                      start: {
                          line: 1,
                          column: 0
                      },
                      end: {
                          line: 1,
                          column: 23
                      }
                  },
                  body: [{
                      type: 'ExpressionStatement',
                      start: 0,
                      end: 23,
                      loc: {
                          start: {
                              line: 1,
                              column: 0
                          },
                          end: {
                              line: 1,
                              column: 23
                          }
                      },
                      expression: {
                          type: 'AssignmentExpression',
                          start: 0,
                          end: 23,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 0
                              },
                              end: {
                                  line: 1,
                                  column: 23
                              }
                          },
                          operator: '=',
                          left: {
                              type: 'Identifier',
                              start: 0,
                              end: 1,
                              loc: {
                                  start: {
                                      line: 1,
                                      column: 0
                                  },
                                  end: {
                                      line: 1,
                                      column: 1
                                  }
                              },
                              name: 'a'
                          },
                          right: {
                              type: 'FunctionExpression',
                              start: 4,
                              end: 23,
                              loc: {
                                  start: {
                                      line: 1,
                                      column: 4
                                  },
                                  end: {
                                      line: 1,
                                      column: 23
                                  }
                              },
                              id: null,
                              generator: false,
                              expression: false,
                              async: true,
                              params: [],
                              body: {
                                  type: 'BlockStatement',
                                  start: 21,
                                  end: 23,
                                  loc: {
                                      start: {
                                          line: 1,
                                          column: 21
                                      },
                                      end: {
                                          line: 1,
                                          column: 23
                                      }
                                  },
                                  body: []
                              }
                          }
                      }
                  }],
                  sourceType: 'script'
              }
            });

    pass(`function f() { async function yield() {} }`, {
                source: 'function f() { async function yield() {} }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'FunctionDeclaration',
                            params: [],
                            body: {
                                type: 'BlockStatement',
                                body: [
                                    {
                                        type: 'FunctionDeclaration',
                                        params: [],
                                        body: {
                                            type: 'BlockStatement',
                                            body: [],
                                            start: 38,
                                            end: 40,
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 38
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 40
                                                }
                                            }
                                        },
                                        async: true,
                                        generator: false,
                                        expression: false,
                                        id: {
                                            type: 'Identifier',
                                            name: 'yield',
                                            start: 30,
                                            end: 35,
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 30
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 35
                                                }
                                            }
                                        },
                                        start: 15,
                                        end: 40,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 15
                                            },
                                            end: {
                                                line: 1,
                                                column: 40
                                            }
                                        }
                                    }
                                ],
                                start: 13,
                                end: 42,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 13
                                    },
                                    end: {
                                        line: 1,
                                        column: 42
                                    }
                                }
                            },
                            async: false,
                            generator: false,
                            expression: false,
                            id: {
                                type: 'Identifier',
                                name: 'f',
                                start: 9,
                                end: 10,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 9
                                    },
                                    end: {
                                        line: 1,
                                        column: 10
                                    }
                                }
                            },
                            start: 0,
                            end: 42,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 42
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 42,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 42
                        }
                    }
                }
            });

    pass(`function* g() { (async function yield() {}); }`, {
                source: 'function* g() { (async function yield() {}); }',
                raw: true,
                expected: {
                      body: [
                        {
                         async: false,
                          body: {
                           body: [
                              {
                                expression: {
                                 async: true,
                                  body: {
                                    body: [],
                                    type: 'BlockStatement'
                                  },
                                  expression: false,
                                  generator: false,
                                  id: {
                                    name: 'yield',
                                    type: 'Identifier'
                                  },
                                  params: [],
                                  type: 'FunctionExpression'
                                },
                                type: 'ExpressionStatement'
                             }
                            ],
                            type: 'BlockStatement'
                          },
                         expression: false,
                          generator: true,
                          id: {
                            name: 'g',
                            type: 'Identifier'
                          },
                          params: [],
                          type: 'FunctionDeclaration'
                        }
                      ],
                      sourceType: 'script',
                      type: 'Program'
                    }
            });

    pass(`function f() { (async function yield() {}); }`, {
                source: 'function f() { (async function yield() {}); }',
                raw: true,
                loc: true,
                ranges: true,
                expected: {
                    type: 'Program',
                    start: 0,
                    end: 45,
                    loc: {
                      start: {
                        line: 1,
                        column: 0
                      },
                      end: {
                        line: 1,
                        column: 45
                      }
                    },
                    body: [
                      {
                        type: 'FunctionDeclaration',
                        start: 0,
                        end: 45,
                        loc: {
                          start: {
                            line: 1,
                            column: 0
                          },
                          end: {
                            line: 1,
                            column: 45
                          }
                        },
                        id: {
                          type: 'Identifier',
                          start: 9,
                          end: 10,
                          loc: {
                            start: {
                              line: 1,
                              column: 9
                            },
                            end: {
                              line: 1,
                              column: 10
                            }
                          },
                          name: 'f'
                        },
                        generator: false,
                        expression: false,
                        async: false,
                        params: [],
                        body: {
                          type: 'BlockStatement',
                          start: 13,
                          end: 45,
                          loc: {
                            start: {
                              line: 1,
                              column: 13
                            },
                            end: {
                              line: 1,
                              column: 45
                            }
                          },
                          body: [
                            {
                              type: 'ExpressionStatement',
                              start: 15,
                              end: 43,
                              loc: {
                                start: {
                                  line: 1,
                                  column: 15
                                },
                                end: {
                                  line: 1,
                                  column: 43
                                }
                              },
                              expression: {
                                type: 'FunctionExpression',
                                start: 16,
                                end: 41,
                                loc: {
                                  start: {
                                    line: 1,
                                    column: 16
                                  },
                                  end: {
                                    line: 1,
                                    column: 41
                                  }
                                },
                                id: {
                                  type: 'Identifier',
                                  start: 31,
                                  end: 36,
                                  loc: {
                                    start: {
                                      line: 1,
                                      column: 31
                                    },
                                    end: {
                                      line: 1,
                                      column: 36
                                    }
                                  },
                                  name: 'yield'
                                },
                                generator: false,
                                expression: false,
                                async: true,
                                params: [],
                                body: {
                                  type: 'BlockStatement',
                                  start: 39,
                                  end: 41,
                                  loc: {
                                    start: {
                                      line: 1,
                                      column: 39
                                    },
                                    end: {
                                      line: 1,
                                      column: 41
                                    }
                                  },
                                  body: []
                                }
                              }
                            }
                          ]
                        }
                      }
                    ],
                    sourceType: 'script'
                  }
            });

    pass(`function f() { ({ async yield() {} }); }`, {
                source: 'function f() { ({ async yield() {} }); }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'FunctionDeclaration',
                            params: [],
                            body: {
                                type: 'BlockStatement',
                                body: [
                                    {
                                        type: 'ExpressionStatement',
                                        expression: {
                                            type: 'ObjectExpression',
                                            properties: [
                                                {
                                                    type: 'Property',
                                                    key: {
                                                        type: 'Identifier',
                                                        name: 'yield',
                                                        start: 24,
                                                        end: 29,
                                                        loc: {
                                                            start: {
                                                                line: 1,
                                                                column: 24
                                                            },
                                                            end: {
                                                                line: 1,
                                                                column: 29
                                                            }
                                                        }
                                                    },
                                                    value: {
                                                        type: 'FunctionExpression',
                                                        params: [],
                                                        body: {
                                                            type: 'BlockStatement',
                                                            body: [],
                                                            start: 32,
                                                            end: 34,
                                                            loc: {
                                                                start: {
                                                                    line: 1,
                                                                    column: 32
                                                                },
                                                                end: {
                                                                    line: 1,
                                                                    column: 34
                                                                }
                                                            }
                                                        },
                                                        async: true,
                                                        generator: false,
                                                        expression: false,
                                                        id: null,
                                                        start: 29,
                                                        end: 34,
                                                        loc: {
                                                            start: {
                                                                line: 1,
                                                                column: 29
                                                            },
                                                            end: {
                                                                line: 1,
                                                                column: 34
                                                            }
                                                        }
                                                    },
                                                    kind: 'init',
                                                    computed: false,
                                                    method: true,
                                                    shorthand: false,
                                                    start: 18,
                                                    end: 34,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 18
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 34
                                                        }
                                                    }
                                                }
                                            ],
                                            start: 16,
                                            end: 36,
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 16
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 36
                                                }
                                            }
                                        },
                                        start: 15,
                                        end: 38,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 15
                                            },
                                            end: {
                                                line: 1,
                                                column: 38
                                            }
                                        }
                                    }
                                ],
                                start: 13,
                                end: 40,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 13
                                    },
                                    end: {
                                        line: 1,
                                        column: 40
                                    }
                                }
                            },
                            async: false,
                            generator: false,
                            expression: false,
                            id: {
                                type: 'Identifier',
                                name: 'f',
                                start: 9,
                                end: 10,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 9
                                    },
                                    end: {
                                        line: 1,
                                        column: 10
                                    }
                                }
                            },
                            start: 0,
                            end: 40,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 40
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 40,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 40
                        }
                    }
                }
            });

    pass(`'use strict'; ({ async yield() {} });`, {
                source: '"use strict"; ({ async yield() {} });',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'ExpressionStatement',
                            expression: {
                                type: 'Literal',
                                value: 'use strict',
                                start: 0,
                                end: 12,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 0
                                    },
                                    end: {
                                        line: 1,
                                        column: 12
                                    }
                                },
                                raw: '"use strict"'
                            },
                            directive: 'use strict',
                            start: 0,
                            end: 13,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 13
                                }
                            }
                        },
                        {
                            type: 'ExpressionStatement',
                            expression: {
                                type: 'ObjectExpression',
                                properties: [
                                    {
                                        type: 'Property',
                                        key: {
                                            type: 'Identifier',
                                            name: 'yield',
                                            start: 23,
                                            end: 28,
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 23
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 28
                                                }
                                            }
                                        },
                                        value: {
                                            type: 'FunctionExpression',
                                            params: [],
                                            body: {
                                                type: 'BlockStatement',
                                                body: [],
                                                start: 31,
                                                end: 33,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 31
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 33
                                                    }
                                                }
                                            },
                                            async: true,
                                            generator: false,
                                            expression: false,
                                            id: null,
                                            start: 28,
                                            end: 33,
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 28
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 33
                                                }
                                            }
                                        },
                                        kind: 'init',
                                        computed: false,
                                        method: true,
                                        shorthand: false,
                                        start: 17,
                                        end: 33,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 17
                                            },
                                            end: {
                                                line: 1,
                                                column: 33
                                            }
                                        }
                                    }
                                ],
                                start: 15,
                                end: 35,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 15
                                    },
                                    end: {
                                        line: 1,
                                        column: 35
                                    }
                                }
                            },
                            start: 14,
                            end: 37,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 14
                                },
                                end: {
                                    line: 1,
                                    column: 37
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 37,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 37
                        }
                    }
                }
            });

    pass(`({ async [yield]() {} });`, {
                source: '({ async [yield]() {} });',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'ExpressionStatement',
                            expression: {
                                type: 'ObjectExpression',
                                properties: [
                                    {
                                        type: 'Property',
                                        key: {
                                            type: 'Identifier',
                                            name: 'yield',
                                            start: 10,
                                            end: 15,
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 10
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 15
                                                }
                                            }
                                        },
                                        value: {
                                            type: 'FunctionExpression',
                                            params: [],
                                            body: {
                                                type: 'BlockStatement',
                                                body: [],
                                                start: 19,
                                                end: 21,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 19
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 21
                                                    }
                                                }
                                            },
                                            async: true,
                                            generator: false,
                                            expression: false,
                                            id: null,
                                            start: 16,
                                            end: 21,
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 16
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 21
                                                }
                                            }
                                        },
                                        kind: 'init',
                                        computed: true,
                                        method: true,
                                        shorthand: false,
                                        start: 3,
                                        end: 21,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 3
                                            },
                                            end: {
                                                line: 1,
                                                column: 21
                                            }
                                        }
                                    }
                                ],
                                start: 1,
                                end: 23,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 1
                                    },
                                    end: {
                                        line: 1,
                                        column: 23
                                    }
                                }
                            },
                            start: 0,
                            end: 25,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 25
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 25,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 25
                        }
                    }
                }
            });

    pass(`function f() { ({ async [yield]() {} }); }`, {
                source: 'function f() { ({ async [yield]() {} }); }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'FunctionDeclaration',
                            params: [],
                            body: {
                                type: 'BlockStatement',
                                body: [
                                    {
                                        type: 'ExpressionStatement',
                                        expression: {
                                            type: 'ObjectExpression',
                                            properties: [
                                                {
                                                    type: 'Property',
                                                    key: {
                                                        type: 'Identifier',
                                                        name: 'yield',
                                                        start: 25,
                                                        end: 30,
                                                        loc: {
                                                            start: {
                                                                line: 1,
                                                                column: 25
                                                            },
                                                            end: {
                                                                line: 1,
                                                                column: 30
                                                            }
                                                        }
                                                    },
                                                    value: {
                                                        type: 'FunctionExpression',
                                                        params: [],
                                                        body: {
                                                            type: 'BlockStatement',
                                                            body: [],
                                                            start: 34,
                                                            end: 36,
                                                            loc: {
                                                                start: {
                                                                    line: 1,
                                                                    column: 34
                                                                },
                                                                end: {
                                                                    line: 1,
                                                                    column: 36
                                                                }
                                                            }
                                                        },
                                                        async: true,
                                                        generator: false,
                                                        expression: false,
                                                        id: null,
                                                        start: 31,
                                                        end: 36,
                                                        loc: {
                                                            start: {
                                                                line: 1,
                                                                column: 31
                                                            },
                                                            end: {
                                                                line: 1,
                                                                column: 36
                                                            }
                                                        }
                                                    },
                                                    kind: 'init',
                                                    computed: true,
                                                    method: true,
                                                    shorthand: false,
                                                    start: 18,
                                                    end: 36,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 18
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 36
                                                        }
                                                    }
                                                }
                                            ],
                                            start: 16,
                                            end: 38,
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 16
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 38
                                                }
                                            }
                                        },
                                        start: 15,
                                        end: 40,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 15
                                            },
                                            end: {
                                                line: 1,
                                                column: 40
                                            }
                                        }
                                    }
                                ],
                                start: 13,
                                end: 42,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 13
                                    },
                                    end: {
                                        line: 1,
                                        column: 42
                                    }
                                }
                            },
                            async: false,
                            generator: false,
                            expression: false,
                            id: {
                                type: 'Identifier',
                                name: 'f',
                                start: 9,
                                end: 10,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 9
                                    },
                                    end: {
                                        line: 1,
                                        column: 10
                                    }
                                }
                            },
                            start: 0,
                            end: 42,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 42
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 42,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 42
                        }
                    }
                }
            });
});