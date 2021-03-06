import { pass, fail } from '../test-utils';

describe('Destructuring - Binding pattern', () => {

        describe('Array binding', () => {

            fail(`([a.b]) => 0`, {
                source: '([a.b]) => 0',
                line: 1,
            });

            fail(`function a([a.b]) {}`, {
                source: 'function a([a.b]) {}',
                line: 1,
            });

            fail(`function* a([a.b]) {}`, {
                source: 'function* a([a.b]) {}',
                line: 1,
            });

            fail(`(function ([a.b]) {})`, {
                source: '(function ([a.b]) {})',
                line: 1,
            });

            fail(`(function* ([a.b]) {})`, {
                source: '(function* ([a.b]) {})',
                line: 1,
            });

            fail(`({a([a.b]){}})`, {
                source: '({a([a.b]){}})',
                line: 1,
            });

            fail(`({*a([a.b]){}})`, {
                source: '({*a([a.b]){}})',
                line: 1,
            });

            fail(`({set a([a.b]){}})`, {
                source: '({set a([a.b]){}})',
                line: 1,
            });

            pass(`let [a,,b]=0`, {
                source: 'let [a,,b]=0',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'VariableDeclaration',
                            declarations: [
                                {
                                    type: 'VariableDeclarator',
                                    init: {
                                        type: 'Literal',
                                        value: 0,
                                        start: 11,
                                        end: 12,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 11
                                            },
                                            end: {
                                                line: 1,
                                                column: 12
                                            }
                                        },
                                        raw: '0'
                                    },
                                    id: {
                                        type: 'ArrayPattern',
                                        elements: [
                                            {
                                                type: 'Identifier',
                                                name: 'a',
                                                start: 5,
                                                end: 6,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 5
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 6
                                                    }
                                                }
                                            },
                                            null,
                                            {
                                                type: 'Identifier',
                                                name: 'b',
                                                start: 8,
                                                end: 9,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 8
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 9
                                                    }
                                                }
                                            }
                                        ],
                                        start: 4,
                                        end: 10,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 4
                                            },
                                            end: {
                                                line: 1,
                                                column: 10
                                            }
                                        }
                                    },
                                    start: 4,
                                    end: 12,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 4
                                        },
                                        end: {
                                            line: 1,
                                            column: 12
                                        }
                                    }
                                }
                            ],
                            kind: 'let',
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
                            }
                        }
                    ],
                    sourceType: 'script',
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
                    }
                }
            });

            pass(`try {} catch ([e]) {}`, {
                source: 'try {} catch ([e]) {}',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'TryStatement',
                            block: {
                                type: 'BlockStatement',
                                body: [],
                                start: 4,
                                end: 6,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 4
                                    },
                                    end: {
                                        line: 1,
                                        column: 6
                                    }
                                }
                            },
                            handler: {
                                type: 'CatchClause',
                                param: {
                                    type: 'ArrayPattern',
                                    elements: [
                                        {
                                            type: 'Identifier',
                                            name: 'e',
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
                                        }
                                    ],
                                    start: 14,
                                    end: 17,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 14
                                        },
                                        end: {
                                            line: 1,
                                            column: 17
                                        }
                                    }
                                },
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
                                start: 7,
                                end: 21,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 7
                                    },
                                    end: {
                                        line: 1,
                                        column: 21
                                    }
                                }
                            },
                            finalizer: null,
                            start: 0,
                            end: 21,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 21
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 21,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 21
                        }
                    }
                }
            });

            pass(`try {} catch ([e, ...a]) {}`, {
                source: 'try {} catch ([e, ...a]) {}',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'TryStatement',
                            block: {
                                type: 'BlockStatement',
                                body: [],
                                start: 4,
                                end: 6,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 4
                                    },
                                    end: {
                                        line: 1,
                                        column: 6
                                    }
                                }
                            },
                            handler: {
                                type: 'CatchClause',
                                param: {
                                    type: 'ArrayPattern',
                                    elements: [
                                        {
                                            type: 'Identifier',
                                            name: 'e',
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
                                        {
                                            type: 'RestElement',
                                            argument: {
                                                type: 'Identifier',
                                                name: 'a',
                                                start: 21,
                                                end: 22,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 21
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 22
                                                    }
                                                }
                                            },
                                            start: 18,
                                            end: 22,
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 18
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 22
                                                }
                                            }
                                        }
                                    ],
                                    start: 14,
                                    end: 23,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 14
                                        },
                                        end: {
                                            line: 1,
                                            column: 23
                                        }
                                    }
                                },
                                body: {
                                    type: 'BlockStatement',
                                    body: [],
                                    start: 25,
                                    end: 27,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 25
                                        },
                                        end: {
                                            line: 1,
                                            column: 27
                                        }
                                    }
                                },
                                start: 7,
                                end: 27,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 7
                                    },
                                    end: {
                                        line: 1,
                                        column: 27
                                    }
                                }
                            },
                            finalizer: null,
                            start: 0,
                            end: 27,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 27
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 27,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 27
                        }
                    }
                }
            });

            pass(`var [a, ...a] = 0;`, {
                source: 'var [a, ...a] = 0;',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'VariableDeclaration',
                            declarations: [
                                {
                                    type: 'VariableDeclarator',
                                    init: {
                                        type: 'Literal',
                                        value: 0,
                                        start: 16,
                                        end: 17,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 16
                                            },
                                            end: {
                                                line: 1,
                                                column: 17
                                            }
                                        },
                                        raw: '0'
                                    },
                                    id: {
                                        type: 'ArrayPattern',
                                        elements: [
                                            {
                                                type: 'Identifier',
                                                name: 'a',
                                                start: 5,
                                                end: 6,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 5
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 6
                                                    }
                                                }
                                            },
                                            {
                                                type: 'RestElement',
                                                argument: {
                                                    type: 'Identifier',
                                                    name: 'a',
                                                    start: 11,
                                                    end: 12,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 11
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 12
                                                        }
                                                    }
                                                },
                                                start: 8,
                                                end: 12,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 8
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 12
                                                    }
                                                }
                                            }
                                        ],
                                        start: 4,
                                        end: 13,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 4
                                            },
                                            end: {
                                                line: 1,
                                                column: 13
                                            }
                                        }
                                    },
                                    start: 4,
                                    end: 17,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 4
                                        },
                                        end: {
                                            line: 1,
                                            column: 17
                                        }
                                    }
                                }
                            ],
                            kind: 'var',
                            start: 0,
                            end: 18,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 18
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 18,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 18
                        }
                    }
                }
            });

            pass(`let [...a] = 0;`, {
                source: 'let [...a] = 0;',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'VariableDeclaration',
                            declarations: [
                                {
                                    type: 'VariableDeclarator',
                                    init: {
                                        type: 'Literal',
                                        value: 0,
                                        start: 13,
                                        end: 14,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 13
                                            },
                                            end: {
                                                line: 1,
                                                column: 14
                                            }
                                        },
                                        raw: '0'
                                    },
                                    id: {
                                        type: 'ArrayPattern',
                                        elements: [
                                            {
                                                type: 'RestElement',
                                                argument: {
                                                    type: 'Identifier',
                                                    name: 'a',
                                                    start: 8,
                                                    end: 9,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 8
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 9
                                                        }
                                                    }
                                                },
                                                start: 5,
                                                end: 9,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 5
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 9
                                                    }
                                                }
                                            }
                                        ],
                                        start: 4,
                                        end: 10,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 4
                                            },
                                            end: {
                                                line: 1,
                                                column: 10
                                            }
                                        }
                                    },
                                    start: 4,
                                    end: 14,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 4
                                        },
                                        end: {
                                            line: 1,
                                            column: 14
                                        }
                                    }
                                }
                            ],
                            kind: 'let',
                            start: 0,
                            end: 15,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 15
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 15,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 15
                        }
                    }
                }
            });

            pass(`let [a,,]=0`, {
                source: 'let [a,,]=0',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'VariableDeclaration',
                            declarations: [
                                {
                                    type: 'VariableDeclarator',
                                    init: {
                                        type: 'Literal',
                                        value: 0,
                                        start: 10,
                                        end: 11,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 10
                                            },
                                            end: {
                                                line: 1,
                                                column: 11
                                            }
                                        },
                                        raw: '0'
                                    },
                                    id: {
                                        type: 'ArrayPattern',
                                        elements: [
                                            {
                                                type: 'Identifier',
                                                name: 'a',
                                                start: 5,
                                                end: 6,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 5
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 6
                                                    }
                                                }
                                            },
                                            null
                                        ],
                                        start: 4,
                                        end: 9,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 4
                                            },
                                            end: {
                                                line: 1,
                                                column: 9
                                            }
                                        }
                                    },
                                    start: 4,
                                    end: 11,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 4
                                        },
                                        end: {
                                            line: 1,
                                            column: 11
                                        }
                                    }
                                }
                            ],
                            kind: 'let',
                            start: 0,
                            end: 11,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 11
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 11,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 11
                        }
                    }
                }
            });

            pass(`var [let] = ariya;`, {
                source: 'var [let] = ariya;',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'VariableDeclaration',
                            declarations: [
                                {
                                    type: 'VariableDeclarator',
                                    init: {
                                        type: 'Identifier',
                                        name: 'ariya',
                                        start: 12,
                                        end: 17,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 12
                                            },
                                            end: {
                                                line: 1,
                                                column: 17
                                            }
                                        }
                                    },
                                    id: {
                                        type: 'ArrayPattern',
                                        elements: [
                                            {
                                                type: 'Identifier',
                                                name: 'let',
                                                start: 5,
                                                end: 8,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 5
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 8
                                                    }
                                                }
                                            }
                                        ],
                                        start: 4,
                                        end: 9,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 4
                                            },
                                            end: {
                                                line: 1,
                                                column: 9
                                            }
                                        }
                                    },
                                    start: 4,
                                    end: 17,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 4
                                        },
                                        end: {
                                            line: 1,
                                            column: 17
                                        }
                                    }
                                }
                            ],
                            kind: 'var',
                            start: 0,
                            end: 18,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 18
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 18,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 18
                        }
                    }
                }
            });

            pass(`let [{a}] = 0`, {
                source: 'let [{a}] = 0',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'VariableDeclaration',
                            declarations: [
                                {
                                    type: 'VariableDeclarator',
                                    init: {
                                        type: 'Literal',
                                        value: 0,
                                        start: 12,
                                        end: 13,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 12
                                            },
                                            end: {
                                                line: 1,
                                                column: 13
                                            }
                                        },
                                        raw: '0'
                                    },
                                    id: {
                                        type: 'ArrayPattern',
                                        elements: [
                                            {
                                                type: 'ObjectPattern',
                                                properties: [
                                                    {
                                                        type: 'Property',
                                                        kind: 'init',
                                                        key: {
                                                            type: 'Identifier',
                                                            name: 'a',
                                                            start: 6,
                                                            end: 7,
                                                            loc: {
                                                                start: {
                                                                    line: 1,
                                                                    column: 6
                                                                },
                                                                end: {
                                                                    line: 1,
                                                                    column: 7
                                                                }
                                                            }
                                                        },
                                                        computed: false,
                                                        value: {
                                                            type: 'Identifier',
                                                            name: 'a',
                                                            start: 6,
                                                            end: 7,
                                                            loc: {
                                                                start: {
                                                                    line: 1,
                                                                    column: 6
                                                                },
                                                                end: {
                                                                    line: 1,
                                                                    column: 7
                                                                }
                                                            }
                                                        },
                                                        method: false,
                                                        shorthand: true,
                                                        start: 6,
                                                        end: 7,
                                                        loc: {
                                                            start: {
                                                                line: 1,
                                                                column: 6
                                                            },
                                                            end: {
                                                                line: 1,
                                                                column: 7
                                                            }
                                                        }
                                                    }
                                                ],
                                                start: 5,
                                                end: 8,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 5
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 8
                                                    }
                                                }
                                            }
                                        ],
                                        start: 4,
                                        end: 9,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 4
                                            },
                                            end: {
                                                line: 1,
                                                column: 9
                                            }
                                        }
                                    },
                                    start: 4,
                                    end: 13,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 4
                                        },
                                        end: {
                                            line: 1,
                                            column: 13
                                        }
                                    }
                                }
                            ],
                            kind: 'let',
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
                        }
                    ],
                    sourceType: 'script',
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
                }
            });

            pass(`function f([x] = [1]) {};`, {
                source: 'function f([x] = [1]) {};',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'FunctionDeclaration',
                            params: [
                                {
                                    type: 'AssignmentPattern',
                                    left: {
                                        type: 'ArrayPattern',
                                        elements: [
                                            {
                                                type: 'Identifier',
                                                name: 'x',
                                                start: 12,
                                                end: 13,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 12
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 13
                                                    }
                                                }
                                            }
                                        ],
                                        start: 11,
                                        end: 14,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 11
                                            },
                                            end: {
                                                line: 1,
                                                column: 14
                                            }
                                        }
                                    },
                                    right: {
                                        type: 'ArrayExpression',
                                        elements: [
                                            {
                                                type: 'Literal',
                                                value: 1,
                                                start: 18,
                                                end: 19,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 18
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 19
                                                    }
                                                },
                                                raw: '1'
                                            }
                                        ],
                                        start: 17,
                                        end: 20,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 17
                                            },
                                            end: {
                                                line: 1,
                                                column: 20
                                            }
                                        }
                                    },
                                    start: 11,
                                    end: 20,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 11
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
                                body: [],
                                start: 22,
                                end: 24,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 22
                                    },
                                    end: {
                                        line: 1,
                                        column: 24
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
                            end: 24,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 24
                                }
                            }
                        },
                        {
                            type: 'EmptyStatement',
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

            pass(`({f({x} = {x: 10}) {}});`, {
                source: '({f({x} = {x: 10}) {}});',
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
                                            name: 'f',
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
                                        value: {
                                            type: 'FunctionExpression',
                                            params: [
                                                {
                                                    type: 'AssignmentPattern',
                                                    left: {
                                                        type: 'ObjectPattern',
                                                        properties: [
                                                            {
                                                                type: 'Property',
                                                                kind: 'init',
                                                                key: {
                                                                    type: 'Identifier',
                                                                    name: 'x',
                                                                    start: 5,
                                                                    end: 6,
                                                                    loc: {
                                                                        start: {
                                                                            line: 1,
                                                                            column: 5
                                                                        },
                                                                        end: {
                                                                            line: 1,
                                                                            column: 6
                                                                        }
                                                                    }
                                                                },
                                                                computed: false,
                                                                value: {
                                                                    type: 'Identifier',
                                                                    name: 'x',
                                                                    start: 5,
                                                                    end: 6,
                                                                    loc: {
                                                                        start: {
                                                                            line: 1,
                                                                            column: 5
                                                                        },
                                                                        end: {
                                                                            line: 1,
                                                                            column: 6
                                                                        }
                                                                    }
                                                                },
                                                                method: false,
                                                                shorthand: true,
                                                                start: 5,
                                                                end: 6,
                                                                loc: {
                                                                    start: {
                                                                        line: 1,
                                                                        column: 5
                                                                    },
                                                                    end: {
                                                                        line: 1,
                                                                        column: 6
                                                                    }
                                                                }
                                                            }
                                                        ],
                                                        start: 4,
                                                        end: 7,
                                                        loc: {
                                                            start: {
                                                                line: 1,
                                                                column: 4
                                                            },
                                                            end: {
                                                                line: 1,
                                                                column: 7
                                                            }
                                                        }
                                                    },
                                                    right: {
                                                        type: 'ObjectExpression',
                                                        properties: [
                                                            {
                                                                type: 'Property',
                                                                key: {
                                                                    type: 'Identifier',
                                                                    name: 'x',
                                                                    start: 11,
                                                                    end: 12,
                                                                    loc: {
                                                                        start: {
                                                                            line: 1,
                                                                            column: 11
                                                                        },
                                                                        end: {
                                                                            line: 1,
                                                                            column: 12
                                                                        }
                                                                    }
                                                                },
                                                                value: {
                                                                    type: 'Literal',
                                                                    value: 10,
                                                                    start: 14,
                                                                    end: 16,
                                                                    loc: {
                                                                        start: {
                                                                            line: 1,
                                                                            column: 14
                                                                        },
                                                                        end: {
                                                                            line: 1,
                                                                            column: 16
                                                                        }
                                                                    },
                                                                    raw: '10'
                                                                },
                                                                kind: 'init',
                                                                computed: false,
                                                                method: false,
                                                                shorthand: false,
                                                                start: 11,
                                                                end: 16,
                                                                loc: {
                                                                    start: {
                                                                        line: 1,
                                                                        column: 11
                                                                    },
                                                                    end: {
                                                                        line: 1,
                                                                        column: 16
                                                                    }
                                                                }
                                                            }
                                                        ],
                                                        start: 10,
                                                        end: 17,
                                                        loc: {
                                                            start: {
                                                                line: 1,
                                                                column: 10
                                                            },
                                                            end: {
                                                                line: 1,
                                                                column: 17
                                                            }
                                                        }
                                                    },
                                                    start: 4,
                                                    end: 17,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 4
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 17
                                                        }
                                                    }
                                                }
                                            ],
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
                                            async: false,
                                            generator: false,
                                            expression: false,
                                            id: null,
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
                                        },
                                        kind: 'init',
                                        computed: false,
                                        method: true,
                                        shorthand: false,
                                        start: 2,
                                        end: 21,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 2
                                            },
                                            end: {
                                                line: 1,
                                                column: 21
                                            }
                                        }
                                    }
                                ],
                                start: 1,
                                end: 22,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 1
                                    },
                                    end: {
                                        line: 1,
                                        column: 22
                                    }
                                }
                            },
                            start: 0,
                            end: 24,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 24
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 24,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 24
                        }
                    }
                }
            });

            pass(`f = function({x} = {x: 10}) {};`, {
                source: 'f = function({x} = {x: 10}) {};',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'ExpressionStatement',
                            expression: {
                                type: 'AssignmentExpression',
                                left: {
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
                                operator: '=',
                                right: {
                                    type: 'FunctionExpression',
                                    params: [
                                        {
                                            type: 'AssignmentPattern',
                                            left: {
                                                type: 'ObjectPattern',
                                                properties: [
                                                    {
                                                        type: 'Property',
                                                        kind: 'init',
                                                        key: {
                                                            type: 'Identifier',
                                                            name: 'x',
                                                            start: 14,
                                                            end: 15,
                                                            loc: {
                                                                start: {
                                                                    line: 1,
                                                                    column: 14
                                                                },
                                                                end: {
                                                                    line: 1,
                                                                    column: 15
                                                                }
                                                            }
                                                        },
                                                        computed: false,
                                                        value: {
                                                            type: 'Identifier',
                                                            name: 'x',
                                                            start: 14,
                                                            end: 15,
                                                            loc: {
                                                                start: {
                                                                    line: 1,
                                                                    column: 14
                                                                },
                                                                end: {
                                                                    line: 1,
                                                                    column: 15
                                                                }
                                                            }
                                                        },
                                                        method: false,
                                                        shorthand: true,
                                                        start: 14,
                                                        end: 15,
                                                        loc: {
                                                            start: {
                                                                line: 1,
                                                                column: 14
                                                            },
                                                            end: {
                                                                line: 1,
                                                                column: 15
                                                            }
                                                        }
                                                    }
                                                ],
                                                start: 13,
                                                end: 16,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 13
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 16
                                                    }
                                                }
                                            },
                                            right: {
                                                type: 'ObjectExpression',
                                                properties: [
                                                    {
                                                        type: 'Property',
                                                        key: {
                                                            type: 'Identifier',
                                                            name: 'x',
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
                                                        value: {
                                                            type: 'Literal',
                                                            value: 10,
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
                                                            raw: '10'
                                                        },
                                                        kind: 'init',
                                                        computed: false,
                                                        method: false,
                                                        shorthand: false,
                                                        start: 20,
                                                        end: 25,
                                                        loc: {
                                                            start: {
                                                                line: 1,
                                                                column: 20
                                                            },
                                                            end: {
                                                                line: 1,
                                                                column: 25
                                                            }
                                                        }
                                                    }
                                                ],
                                                start: 19,
                                                end: 26,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 19
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 26
                                                    }
                                                }
                                            },
                                            start: 13,
                                            end: 26,
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 13
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 26
                                                }
                                            }
                                        }
                                    ],
                                    body: {
                                        type: 'BlockStatement',
                                        body: [],
                                        start: 28,
                                        end: 30,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 28
                                            },
                                            end: {
                                                line: 1,
                                                column: 30
                                            }
                                        }
                                    },
                                    async: false,
                                    generator: false,
                                    expression: false,
                                    id: null,
                                    start: 4,
                                    end: 30,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 4
                                        },
                                        end: {
                                            line: 1,
                                            column: 30
                                        }
                                    }
                                },
                                start: 0,
                                end: 30,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 0
                                    },
                                    end: {
                                        line: 1,
                                        column: 30
                                    }
                                }
                            },
                            start: 0,
                            end: 31,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 31
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 31,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 31
                        }
                    }
                }
            });

            pass(`function a([a=0]) {}`, {
                source: 'function a([a=0]) {}',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'FunctionDeclaration',
                            params: [
                                {
                                    type: 'ArrayPattern',
                                    elements: [
                                        {
                                            type: 'AssignmentPattern',
                                            left: {
                                                type: 'Identifier',
                                                name: 'a',
                                                start: 12,
                                                end: 13,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 12
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 13
                                                    }
                                                }
                                            },
                                            right: {
                                                type: 'Literal',
                                                value: 0,
                                                start: 14,
                                                end: 15,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 14
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 15
                                                    }
                                                },
                                                raw: '0'
                                            },
                                            start: 12,
                                            end: 15,
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 12
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 15
                                                }
                                            }
                                        }
                                    ],
                                    start: 11,
                                    end: 16,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 11
                                        },
                                        end: {
                                            line: 1,
                                            column: 16
                                        }
                                    }
                                }
                            ],
                            body: {
                                type: 'BlockStatement',
                                body: [],
                                start: 18,
                                end: 20,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 18
                                    },
                                    end: {
                                        line: 1,
                                        column: 20
                                    }
                                }
                            },
                            async: false,
                            generator: false,
                            expression: false,
                            id: {
                                type: 'Identifier',
                                name: 'a',
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
                            end: 20,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 20
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 20,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 20
                        }
                    }
                }
            });

            pass(`var [,a] = 0;`, {
                source: 'var [,a] = 0;',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'VariableDeclaration',
                            declarations: [
                                {
                                    type: 'VariableDeclarator',
                                    init: {
                                        type: 'Literal',
                                        value: 0,
                                        start: 11,
                                        end: 12,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 11
                                            },
                                            end: {
                                                line: 1,
                                                column: 12
                                            }
                                        },
                                        raw: '0'
                                    },
                                    id: {
                                        type: 'ArrayPattern',
                                        elements: [
                                            null,
                                            {
                                                type: 'Identifier',
                                                name: 'a',
                                                start: 6,
                                                end: 7,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 6
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 7
                                                    }
                                                }
                                            }
                                        ],
                                        start: 4,
                                        end: 8,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 4
                                            },
                                            end: {
                                                line: 1,
                                                column: 8
                                            }
                                        }
                                    },
                                    start: 4,
                                    end: 12,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 4
                                        },
                                        end: {
                                            line: 1,
                                            column: 12
                                        }
                                    }
                                }
                            ],
                            kind: 'var',
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
                        }
                    ],
                    sourceType: 'script',
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
                }
            });

            pass(`var [a]=[1];`, {
                source: 'var [a]=[1];',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'VariableDeclaration',
                            declarations: [
                                {
                                    type: 'VariableDeclarator',
                                    init: {
                                        type: 'ArrayExpression',
                                        elements: [
                                            {
                                                type: 'Literal',
                                                value: 1,
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
                                                raw: '1'
                                            }
                                        ],
                                        start: 8,
                                        end: 11,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 8
                                            },
                                            end: {
                                                line: 1,
                                                column: 11
                                            }
                                        }
                                    },
                                    id: {
                                        type: 'ArrayPattern',
                                        elements: [
                                            {
                                                type: 'Identifier',
                                                name: 'a',
                                                start: 5,
                                                end: 6,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 5
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 6
                                                    }
                                                }
                                            }
                                        ],
                                        start: 4,
                                        end: 7,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 4
                                            },
                                            end: {
                                                line: 1,
                                                column: 7
                                            }
                                        }
                                    },
                                    start: 4,
                                    end: 11,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 4
                                        },
                                        end: {
                                            line: 1,
                                            column: 11
                                        }
                                    }
                                }
                            ],
                            kind: 'var',
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
                            }
                        }
                    ],
                    sourceType: 'script',
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
                    }
                }
            });

            pass(`var [[a]]=0;`, {
                source: 'var [[a]]=0;',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'VariableDeclaration',
                            declarations: [
                                {
                                    type: 'VariableDeclarator',
                                    init: {
                                        type: 'Literal',
                                        value: 0,
                                        start: 10,
                                        end: 11,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 10
                                            },
                                            end: {
                                                line: 1,
                                                column: 11
                                            }
                                        },
                                        raw: '0'
                                    },
                                    id: {
                                        type: 'ArrayPattern',
                                        elements: [
                                            {
                                                type: 'ArrayPattern',
                                                elements: [
                                                    {
                                                        type: 'Identifier',
                                                        name: 'a',
                                                        start: 6,
                                                        end: 7,
                                                        loc: {
                                                            start: {
                                                                line: 1,
                                                                column: 6
                                                            },
                                                            end: {
                                                                line: 1,
                                                                column: 7
                                                            }
                                                        }
                                                    }
                                                ],
                                                start: 5,
                                                end: 8,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 5
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 8
                                                    }
                                                }
                                            }
                                        ],
                                        start: 4,
                                        end: 9,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 4
                                            },
                                            end: {
                                                line: 1,
                                                column: 9
                                            }
                                        }
                                    },
                                    start: 4,
                                    end: 11,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 4
                                        },
                                        end: {
                                            line: 1,
                                            column: 11
                                        }
                                    }
                                }
                            ],
                            kind: 'var',
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
                            }
                        }
                    ],
                    sourceType: 'script',
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
                    }
                }
            });

            pass(`var a, [a] = 0;`, {
                source: 'var a, [a] = 0;',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'VariableDeclaration',
                            declarations: [
                                {
                                    type: 'VariableDeclarator',
                                    init: null,
                                    id: {
                                        type: 'Identifier',
                                        name: 'a',
                                        start: 4,
                                        end: 5,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 4
                                            },
                                            end: {
                                                line: 1,
                                                column: 5
                                            }
                                        }
                                    },
                                    start: 4,
                                    end: 5,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 4
                                        },
                                        end: {
                                            line: 1,
                                            column: 5
                                        }
                                    }
                                },
                                {
                                    type: 'VariableDeclarator',
                                    init: {
                                        type: 'Literal',
                                        value: 0,
                                        start: 13,
                                        end: 14,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 13
                                            },
                                            end: {
                                                line: 1,
                                                column: 14
                                            }
                                        },
                                        raw: '0'
                                    },
                                    id: {
                                        type: 'ArrayPattern',
                                        elements: [
                                            {
                                                type: 'Identifier',
                                                name: 'a',
                                                start: 8,
                                                end: 9,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 8
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 9
                                                    }
                                                }
                                            }
                                        ],
                                        start: 7,
                                        end: 10,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 7
                                            },
                                            end: {
                                                line: 1,
                                                column: 10
                                            }
                                        }
                                    },
                                    start: 7,
                                    end: 14,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 7
                                        },
                                        end: {
                                            line: 1,
                                            column: 14
                                        }
                                    }
                                }
                            ],
                            kind: 'var',
                            start: 0,
                            end: 15,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 15
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 15,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 15
                        }
                    }
                }
            });

            pass(`var [a, a] = 0;`, {
                source: 'var [a, a] = 0;',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'VariableDeclaration',
                            declarations: [
                                {
                                    type: 'VariableDeclarator',
                                    init: {
                                        type: 'Literal',
                                        value: 0,
                                        start: 13,
                                        end: 14,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 13
                                            },
                                            end: {
                                                line: 1,
                                                column: 14
                                            }
                                        },
                                        raw: '0'
                                    },
                                    id: {
                                        type: 'ArrayPattern',
                                        elements: [
                                            {
                                                type: 'Identifier',
                                                name: 'a',
                                                start: 5,
                                                end: 6,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 5
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 6
                                                    }
                                                }
                                            },
                                            {
                                                type: 'Identifier',
                                                name: 'a',
                                                start: 8,
                                                end: 9,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 8
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 9
                                                    }
                                                }
                                            }
                                        ],
                                        start: 4,
                                        end: 10,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 4
                                            },
                                            end: {
                                                line: 1,
                                                column: 10
                                            }
                                        }
                                    },
                                    start: 4,
                                    end: 14,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 4
                                        },
                                        end: {
                                            line: 1,
                                            column: 14
                                        }
                                    }
                                }
                            ],
                            kind: 'var',
                            start: 0,
                            end: 15,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 15
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 15,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 15
                        }
                    }
                }
            });

            pass(`var [a, ...a] = 0;`, {
                source: 'var [a, ...a] = 0;',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'VariableDeclaration',
                            declarations: [
                                {
                                    type: 'VariableDeclarator',
                                    init: {
                                        type: 'Literal',
                                        value: 0,
                                        start: 16,
                                        end: 17,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 16
                                            },
                                            end: {
                                                line: 1,
                                                column: 17
                                            }
                                        },
                                        raw: '0'
                                    },
                                    id: {
                                        type: 'ArrayPattern',
                                        elements: [
                                            {
                                                type: 'Identifier',
                                                name: 'a',
                                                start: 5,
                                                end: 6,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 5
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 6
                                                    }
                                                }
                                            },
                                            {
                                                type: 'RestElement',
                                                argument: {
                                                    type: 'Identifier',
                                                    name: 'a',
                                                    start: 11,
                                                    end: 12,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 11
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 12
                                                        }
                                                    }
                                                },
                                                start: 8,
                                                end: 12,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 8
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 12
                                                    }
                                                }
                                            }
                                        ],
                                        start: 4,
                                        end: 13,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 4
                                            },
                                            end: {
                                                line: 1,
                                                column: 13
                                            }
                                        }
                                    },
                                    start: 4,
                                    end: 17,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 4
                                        },
                                        end: {
                                            line: 1,
                                            column: 17
                                        }
                                    }
                                }
                            ],
                            kind: 'var',
                            start: 0,
                            end: 18,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 18
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 18,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 18
                        }
                    }
                }
            });
        });

        describe('Binding Identifier', () => {

            pass(`for(let in 0);`, {
                source: 'for(let in 0);',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'ForInStatement',
                            body: {
                                type: 'EmptyStatement',
                                start: 13,
                                end: 14,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 13
                                    },
                                    end: {
                                        line: 1,
                                        column: 14
                                    }
                                }
                            },
                            left: {
                                type: 'Identifier',
                                name: 'let',
                                start: 4,
                                end: 7,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 4
                                    },
                                    end: {
                                        line: 1,
                                        column: 7
                                    }
                                }
                            },
                            right: {
                                type: 'Literal',
                                value: 0,
                                start: 11,
                                end: 12,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 11
                                    },
                                    end: {
                                        line: 1,
                                        column: 12
                                    }
                                },
                                raw: '0'
                            },
                            start: 0,
                            end: 14,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 14
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 14,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 14
                        }
                    }
                }
            });
        });

        describe('Object binding', () => {

            pass(`var {a} = 0;`, {
                source: 'var {a} = 0;',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'VariableDeclaration',
                            declarations: [
                                {
                                    type: 'VariableDeclarator',
                                    init: {
                                        type: 'Literal',
                                        value: 0,
                                        start: 10,
                                        end: 11,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 10
                                            },
                                            end: {
                                                line: 1,
                                                column: 11
                                            }
                                        },
                                        raw: '0'
                                    },
                                    id: {
                                        type: 'ObjectPattern',
                                        properties: [
                                            {
                                                type: 'Property',
                                                kind: 'init',
                                                key: {
                                                    type: 'Identifier',
                                                    name: 'a',
                                                    start: 5,
                                                    end: 6,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 5
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 6
                                                        }
                                                    }
                                                },
                                                computed: false,
                                                value: {
                                                    type: 'Identifier',
                                                    name: 'a',
                                                    start: 5,
                                                    end: 6,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 5
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 6
                                                        }
                                                    }
                                                },
                                                method: false,
                                                shorthand: true,
                                                start: 5,
                                                end: 6,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 5
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 6
                                                    }
                                                }
                                            }
                                        ],
                                        start: 4,
                                        end: 7,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 4
                                            },
                                            end: {
                                                line: 1,
                                                column: 7
                                            }
                                        }
                                    },
                                    start: 4,
                                    end: 11,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 4
                                        },
                                        end: {
                                            line: 1,
                                            column: 11
                                        }
                                    }
                                }
                            ],
                            kind: 'var',
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
                            }
                        }
                    ],
                    sourceType: 'script',
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
                    }
                }
            });

            pass(`var [{a = 0}] = 0;`, {
                source: 'var [{a = 0}] = 0;',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'VariableDeclaration',
                            declarations: [
                                {
                                    type: 'VariableDeclarator',
                                    init: {
                                        type: 'Literal',
                                        value: 0,
                                        start: 16,
                                        end: 17,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 16
                                            },
                                            end: {
                                                line: 1,
                                                column: 17
                                            }
                                        },
                                        raw: '0'
                                    },
                                    id: {
                                        type: 'ArrayPattern',
                                        elements: [
                                            {
                                                type: 'ObjectPattern',
                                                properties: [
                                                    {
                                                        type: 'Property',
                                                        kind: 'init',
                                                        key: {
                                                            type: 'Identifier',
                                                            name: 'a',
                                                            start: 6,
                                                            end: 7,
                                                            loc: {
                                                                start: {
                                                                    line: 1,
                                                                    column: 6
                                                                },
                                                                end: {
                                                                    line: 1,
                                                                    column: 7
                                                                }
                                                            }
                                                        },
                                                        computed: false,
                                                        value: {
                                                            type: 'AssignmentPattern',
                                                            left: {
                                                                type: 'Identifier',
                                                                name: 'a',
                                                                start: 6,
                                                                end: 7,
                                                                loc: {
                                                                    start: {
                                                                        line: 1,
                                                                        column: 6
                                                                    },
                                                                    end: {
                                                                        line: 1,
                                                                        column: 7
                                                                    }
                                                                }
                                                            },
                                                            right: {
                                                                type: 'Literal',
                                                                value: 0,
                                                                start: 10,
                                                                end: 11,
                                                                loc: {
                                                                    start: {
                                                                        line: 1,
                                                                        column: 10
                                                                    },
                                                                    end: {
                                                                        line: 1,
                                                                        column: 11
                                                                    }
                                                                },
                                                                raw: '0'
                                                            },
                                                            start: 6,
                                                            end: 11,
                                                            loc: {
                                                                start: {
                                                                    line: 1,
                                                                    column: 6
                                                                },
                                                                end: {
                                                                    line: 1,
                                                                    column: 11
                                                                }
                                                            }
                                                        },
                                                        method: false,
                                                        shorthand: true,
                                                        start: 6,
                                                        end: 11,
                                                        loc: {
                                                            start: {
                                                                line: 1,
                                                                column: 6
                                                            },
                                                            end: {
                                                                line: 1,
                                                                column: 11
                                                            }
                                                        }
                                                    }
                                                ],
                                                start: 5,
                                                end: 12,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 5
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 12
                                                    }
                                                }
                                            }
                                        ],
                                        start: 4,
                                        end: 13,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 4
                                            },
                                            end: {
                                                line: 1,
                                                column: 13
                                            }
                                        }
                                    },
                                    start: 4,
                                    end: 17,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 4
                                        },
                                        end: {
                                            line: 1,
                                            column: 17
                                        }
                                    }
                                }
                            ],
                            kind: 'var',
                            start: 0,
                            end: 18,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 18
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 18,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 18
                        }
                    }
                }
            });

            pass(`var [{__proto__:a, __proto__:b}] = 0;`, {
                source: 'var [{__proto__:a, __proto__:b}] = 0;',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'VariableDeclaration',
                            declarations: [
                                {
                                    type: 'VariableDeclarator',
                                    init: {
                                        type: 'Literal',
                                        value: 0,
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
                                        },
                                        raw: '0'
                                    },
                                    id: {
                                        type: 'ArrayPattern',
                                        elements: [
                                            {
                                                type: 'ObjectPattern',
                                                properties: [
                                                    {
                                                        type: 'Property',
                                                        kind: 'init',
                                                        key: {
                                                            type: 'Identifier',
                                                            name: '__proto__',
                                                            start: 6,
                                                            end: 15,
                                                            loc: {
                                                                start: {
                                                                    line: 1,
                                                                    column: 6
                                                                },
                                                                end: {
                                                                    line: 1,
                                                                    column: 15
                                                                }
                                                            }
                                                        },
                                                        computed: false,
                                                        value: {
                                                            type: 'Identifier',
                                                            name: 'a',
                                                            start: 16,
                                                            end: 17,
                                                            loc: {
                                                                start: {
                                                                    line: 1,
                                                                    column: 16
                                                                },
                                                                end: {
                                                                    line: 1,
                                                                    column: 17
                                                                }
                                                            }
                                                        },
                                                        method: false,
                                                        shorthand: false,
                                                        start: 6,
                                                        end: 17,
                                                        loc: {
                                                            start: {
                                                                line: 1,
                                                                column: 6
                                                            },
                                                            end: {
                                                                line: 1,
                                                                column: 17
                                                            }
                                                        }
                                                    },
                                                    {
                                                        type: 'Property',
                                                        kind: 'init',
                                                        key: {
                                                            type: 'Identifier',
                                                            name: '__proto__',
                                                            start: 19,
                                                            end: 28,
                                                            loc: {
                                                                start: {
                                                                    line: 1,
                                                                    column: 19
                                                                },
                                                                end: {
                                                                    line: 1,
                                                                    column: 28
                                                                }
                                                            }
                                                        },
                                                        computed: false,
                                                        value: {
                                                            type: 'Identifier',
                                                            name: 'b',
                                                            start: 29,
                                                            end: 30,
                                                            loc: {
                                                                start: {
                                                                    line: 1,
                                                                    column: 29
                                                                },
                                                                end: {
                                                                    line: 1,
                                                                    column: 30
                                                                }
                                                            }
                                                        },
                                                        method: false,
                                                        shorthand: false,
                                                        start: 19,
                                                        end: 30,
                                                        loc: {
                                                            start: {
                                                                line: 1,
                                                                column: 19
                                                            },
                                                            end: {
                                                                line: 1,
                                                                column: 30
                                                            }
                                                        }
                                                    }
                                                ],
                                                start: 5,
                                                end: 31,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 5
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 31
                                                    }
                                                }
                                            }
                                        ],
                                        start: 4,
                                        end: 32,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 4
                                            },
                                            end: {
                                                line: 1,
                                                column: 32
                                            }
                                        }
                                    },
                                    start: 4,
                                    end: 36,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 4
                                        },
                                        end: {
                                            line: 1,
                                            column: 36
                                        }
                                    }
                                }
                            ],
                            kind: 'var',
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

           /* pass(`var {a, x: {y: a}} = 0;`, {
                source: 'vvar {a, x: {y: a}} = 0;',
                loc: true,
                ranges: true,
                raw: true,
                expected: {}
            });*/

            pass(`var {let, yield} = 0;`, {
                source: 'var {let, yield} = 0;',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'VariableDeclaration',
                            declarations: [
                                {
                                    type: 'VariableDeclarator',
                                    init: {
                                        type: 'Literal',
                                        value: 0,
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
                                        raw: '0'
                                    },
                                    id: {
                                        type: 'ObjectPattern',
                                        properties: [
                                            {
                                                type: 'Property',
                                                kind: 'init',
                                                key: {
                                                    type: 'Identifier',
                                                    name: 'let',
                                                    start: 5,
                                                    end: 8,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 5
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 8
                                                        }
                                                    }
                                                },
                                                computed: false,
                                                value: {
                                                    type: 'Identifier',
                                                    name: 'let',
                                                    start: 5,
                                                    end: 8,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 5
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 8
                                                        }
                                                    }
                                                },
                                                method: false,
                                                shorthand: true,
                                                start: 5,
                                                end: 8,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 5
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 8
                                                    }
                                                }
                                            },
                                            {
                                                type: 'Property',
                                                kind: 'init',
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
                                                computed: false,
                                                value: {
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
                                                method: false,
                                                shorthand: true,
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
                                            }
                                        ],
                                        start: 4,
                                        end: 16,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 4
                                            },
                                            end: {
                                                line: 1,
                                                column: 16
                                            }
                                        }
                                    },
                                    start: 4,
                                    end: 20,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 4
                                        },
                                        end: {
                                            line: 1,
                                            column: 20
                                        }
                                    }
                                }
                            ],
                            kind: 'var',
                            start: 0,
                            end: 21,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 21
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 21,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 21
                        }
                    }
                }
            });

            pass(`({let} = 0);`, {
                source: '({let} = 0);',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'ExpressionStatement',
                            expression: {
                                type: 'AssignmentExpression',
                                left: {
                                    type: 'ObjectPattern',
                                    properties: [
                                        {
                                            type: 'Property',
                                            key: {
                                                type: 'Identifier',
                                                name: 'let',
                                                start: 2,
                                                end: 5,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 2
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 5
                                                    }
                                                }
                                            },
                                            value: {
                                                type: 'Identifier',
                                                name: 'let',
                                                start: 2,
                                                end: 5,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 2
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 5
                                                    }
                                                }
                                            },
                                            kind: 'init',
                                            computed: false,
                                            method: false,
                                            shorthand: true,
                                            start: 2,
                                            end: 5,
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 2
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 5
                                                }
                                            }
                                        }
                                    ],
                                    start: 1,
                                    end: 6,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 1
                                        },
                                        end: {
                                            line: 1,
                                            column: 6
                                        }
                                    }
                                },
                                operator: '=',
                                right: {
                                    type: 'Literal',
                                    value: 0,
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
                                    raw: '0'
                                },
                                start: 1,
                                end: 10,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 1
                                    },
                                    end: {
                                        line: 1,
                                        column: 10
                                    }
                                }
                            },
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
                            }
                        }
                    ],
                    sourceType: 'script',
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
                    }
                }
            });

            pass(`let {a:{}} = 0`, {
                source: 'let {a:{}} = 0',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'VariableDeclaration',
                            declarations: [
                                {
                                    type: 'VariableDeclarator',
                                    init: {
                                        type: 'Literal',
                                        value: 0,
                                        start: 13,
                                        end: 14,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 13
                                            },
                                            end: {
                                                line: 1,
                                                column: 14
                                            }
                                        },
                                        raw: '0'
                                    },
                                    id: {
                                        type: 'ObjectPattern',
                                        properties: [
                                            {
                                                type: 'Property',
                                                kind: 'init',
                                                key: {
                                                    type: 'Identifier',
                                                    name: 'a',
                                                    start: 5,
                                                    end: 6,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 5
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 6
                                                        }
                                                    }
                                                },
                                                computed: false,
                                                value: {
                                                    type: 'ObjectPattern',
                                                    properties: [],
                                                    start: 7,
                                                    end: 9,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 7
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 9
                                                        }
                                                    }
                                                },
                                                method: false,
                                                shorthand: false,
                                                start: 5,
                                                end: 9,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 5
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 9
                                                    }
                                                }
                                            }
                                        ],
                                        start: 4,
                                        end: 10,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 4
                                            },
                                            end: {
                                                line: 1,
                                                column: 10
                                            }
                                        }
                                    },
                                    start: 4,
                                    end: 14,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 4
                                        },
                                        end: {
                                            line: 1,
                                            column: 14
                                        }
                                    }
                                }
                            ],
                            kind: 'let',
                            start: 0,
                            end: 14,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 14
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 14,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 14
                        }
                    }
                }
            });

            pass(`let {a,b=0,c:d,e:f=0,[g]:[h]}=0`, {
                source: 'let {a,b=0,c:d,e:f=0,[g]:[h]}=0',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'VariableDeclaration',
                            declarations: [
                                {
                                    type: 'VariableDeclarator',
                                    init: {
                                        type: 'Literal',
                                        value: 0,
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
                                        },
                                        raw: '0'
                                    },
                                    id: {
                                        type: 'ObjectPattern',
                                        properties: [
                                            {
                                                type: 'Property',
                                                kind: 'init',
                                                key: {
                                                    type: 'Identifier',
                                                    name: 'a',
                                                    start: 5,
                                                    end: 6,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 5
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 6
                                                        }
                                                    }
                                                },
                                                computed: false,
                                                value: {
                                                    type: 'Identifier',
                                                    name: 'a',
                                                    start: 5,
                                                    end: 6,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 5
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 6
                                                        }
                                                    }
                                                },
                                                method: false,
                                                shorthand: true,
                                                start: 5,
                                                end: 6,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 5
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 6
                                                    }
                                                }
                                            },
                                            {
                                                type: 'Property',
                                                kind: 'init',
                                                key: {
                                                    type: 'Identifier',
                                                    name: 'b',
                                                    start: 7,
                                                    end: 8,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 7
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 8
                                                        }
                                                    }
                                                },
                                                computed: false,
                                                value: {
                                                    type: 'AssignmentPattern',
                                                    left: {
                                                        type: 'Identifier',
                                                        name: 'b',
                                                        start: 7,
                                                        end: 8,
                                                        loc: {
                                                            start: {
                                                                line: 1,
                                                                column: 7
                                                            },
                                                            end: {
                                                                line: 1,
                                                                column: 8
                                                            }
                                                        }
                                                    },
                                                    right: {
                                                        type: 'Literal',
                                                        value: 0,
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
                                                        raw: '0'
                                                    },
                                                    start: 7,
                                                    end: 10,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 7
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 10
                                                        }
                                                    }
                                                },
                                                method: false,
                                                shorthand: true,
                                                start: 7,
                                                end: 10,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 7
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 10
                                                    }
                                                }
                                            },
                                            {
                                                type: 'Property',
                                                kind: 'init',
                                                key: {
                                                    type: 'Identifier',
                                                    name: 'c',
                                                    start: 11,
                                                    end: 12,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 11
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 12
                                                        }
                                                    }
                                                },
                                                computed: false,
                                                value: {
                                                    type: 'Identifier',
                                                    name: 'd',
                                                    start: 13,
                                                    end: 14,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 13
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 14
                                                        }
                                                    }
                                                },
                                                method: false,
                                                shorthand: false,
                                                start: 11,
                                                end: 14,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 11
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 14
                                                    }
                                                }
                                            },
                                            {
                                                type: 'Property',
                                                kind: 'init',
                                                key: {
                                                    type: 'Identifier',
                                                    name: 'e',
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
                                                computed: false,
                                                value: {
                                                    type: 'AssignmentPattern',
                                                    left: {
                                                        type: 'Identifier',
                                                        name: 'f',
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
                                                    },
                                                    right: {
                                                        type: 'Literal',
                                                        value: 0,
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
                                                        raw: '0'
                                                    },
                                                    start: 17,
                                                    end: 20,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 17
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 20
                                                        }
                                                    }
                                                },
                                                method: false,
                                                shorthand: false,
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
                                                }
                                            },
                                            {
                                                type: 'Property',
                                                kind: 'init',
                                                key: {
                                                    type: 'Identifier',
                                                    name: 'g',
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
                                                computed: true,
                                                value: {
                                                    type: 'ArrayPattern',
                                                    elements: [
                                                        {
                                                            type: 'Identifier',
                                                            name: 'h',
                                                            start: 26,
                                                            end: 27,
                                                            loc: {
                                                                start: {
                                                                    line: 1,
                                                                    column: 26
                                                                },
                                                                end: {
                                                                    line: 1,
                                                                    column: 27
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    start: 25,
                                                    end: 28,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 25
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 28
                                                        }
                                                    }
                                                },
                                                method: false,
                                                shorthand: false,
                                                start: 21,
                                                end: 28,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 21
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 28
                                                    }
                                                }
                                            }
                                        ],
                                        start: 4,
                                        end: 29,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 4
                                            },
                                            end: {
                                                line: 1,
                                                column: 29
                                            }
                                        }
                                    },
                                    start: 4,
                                    end: 31,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 4
                                        },
                                        end: {
                                            line: 1,
                                            column: 31
                                        }
                                    }
                                }
                            ],
                            kind: 'let',
                            start: 0,
                            end: 31,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 31
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 31,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 31
                        }
                    }
                }
            });

            pass(`let {a,} = 0`, {
                source: 'let {a,} = 0',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'VariableDeclaration',
                            declarations: [
                                {
                                    type: 'VariableDeclarator',
                                    init: {
                                        type: 'Literal',
                                        value: 0,
                                        start: 11,
                                        end: 12,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 11
                                            },
                                            end: {
                                                line: 1,
                                                column: 12
                                            }
                                        },
                                        raw: '0'
                                    },
                                    id: {
                                        type: 'ObjectPattern',
                                        properties: [
                                            {
                                                type: 'Property',
                                                kind: 'init',
                                                key: {
                                                    type: 'Identifier',
                                                    name: 'a',
                                                    start: 5,
                                                    end: 6,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 5
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 6
                                                        }
                                                    }
                                                },
                                                computed: false,
                                                value: {
                                                    type: 'Identifier',
                                                    name: 'a',
                                                    start: 5,
                                                    end: 6,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 5
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 6
                                                        }
                                                    }
                                                },
                                                method: false,
                                                shorthand: true,
                                                start: 5,
                                                end: 6,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 5
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 6
                                                    }
                                                }
                                            }
                                        ],
                                        start: 4,
                                        end: 8,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 4
                                            },
                                            end: {
                                                line: 1,
                                                column: 8
                                            }
                                        }
                                    },
                                    start: 4,
                                    end: 12,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 4
                                        },
                                        end: {
                                            line: 1,
                                            column: 12
                                        }
                                    }
                                }
                            ],
                            kind: 'let',
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
                            }
                        }
                    ],
                    sourceType: 'script',
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
                    }
                }
            });

            pass(`function a({}) {}`, {
                source: 'function a({}) {}',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'FunctionDeclaration',
                            params: [
                                {
                                    type: 'ObjectPattern',
                                    properties: [],
                                    start: 11,
                                    end: 13,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 11
                                        },
                                        end: {
                                            line: 1,
                                            column: 13
                                        }
                                    }
                                }
                            ],
                            body: {
                                type: 'BlockStatement',
                                body: [],
                                start: 15,
                                end: 17,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 15
                                    },
                                    end: {
                                        line: 1,
                                        column: 17
                                    }
                                }
                            },
                            async: false,
                            generator: false,
                            expression: false,
                            id: {
                                type: 'Identifier',
                                name: 'a',
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
                            end: 17,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 17
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 17,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 17
                        }
                    }
                }
            });

            pass(`for (let {} in 0);`, {
                source: 'for (let {} in 0);',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'ForInStatement',
                            body: {
                                type: 'EmptyStatement',
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
                            },
                            left: {
                                type: 'VariableDeclaration',
                                declarations: [
                                    {
                                        type: 'VariableDeclarator',
                                        init: null,
                                        id: {
                                            type: 'ObjectPattern',
                                            properties: [],
                                            start: 9,
                                            end: 11,
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 9
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 11
                                                }
                                            }
                                        },
                                        start: 9,
                                        end: 11,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 9
                                            },
                                            end: {
                                                line: 1,
                                                column: 11
                                            }
                                        }
                                    }
                                ],
                                kind: 'let',
                                start: 5,
                                end: 11,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 5
                                    },
                                    end: {
                                        line: 1,
                                        column: 11
                                    }
                                }
                            },
                            right: {
                                type: 'Literal',
                                value: 0,
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
                                },
                                raw: '0'
                            },
                            start: 0,
                            end: 18,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 18
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 18,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 18
                        }
                    }
                }
            });

            pass(`for (var [x, y] in z);`, {
                source: `for (var [x, y] in z);`,
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    sourceType: 'script',
                    body: [
                        {
                            type: 'ForInStatement',
                            body: {
                                type: 'EmptyStatement',
                                start: 21,
                                end: 22,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 21
                                    },
                                    end: {
                                        line: 1,
                                        column: 22
                                    }
                                }
                            },
                            left: {
                                type: 'VariableDeclaration',
                                declarations: [
                                    {
                                        type: 'VariableDeclarator',
                                        init: null,
                                        id: {
                                            type: 'ArrayPattern',
                                            elements: [
                                                {
                                                    type: 'Identifier',
                                                    name: 'x',
                                                    start: 10,
                                                    end: 11,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 10
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 11
                                                        }
                                                    }
                                                },
                                                {
                                                    type: 'Identifier',
                                                    name: 'y',
                                                    start: 13,
                                                    end: 14,
                                                    loc: {
                                                        start: {
                                                            line: 1,
                                                            column: 13
                                                        },
                                                        end: {
                                                            line: 1,
                                                            column: 14
                                                        }
                                                    }
                                                }
                                            ],
                                            start: 9,
                                            end: 15,
                                            loc: {
                                                start: {
                                                    line: 1,
                                                    column: 9
                                                },
                                                end: {
                                                    line: 1,
                                                    column: 15
                                                }
                                            }
                                        },
                                        start: 9,
                                        end: 15,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 9
                                            },
                                            end: {
                                                line: 1,
                                                column: 15
                                            }
                                        }
                                    }
                                ],
                                kind: 'var',
                                start: 5,
                                end: 15,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 5
                                    },
                                    end: {
                                        line: 1,
                                        column: 15
                                    }
                                }
                            },
                            right: {
                                type: 'Identifier',
                                name: 'z',
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
                            start: 0,
                            end: 22,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 22
                                }
                            }
                        }
                    ],
                    start: 0,
                    end: 22,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 22
                        }
                    }
                }
            });

            pass(`[] = [1,2];
            ({} = {a:1,b:2});`, {
                source: `[] = [1,2];
                ({} = {a:1,b:2});`,
                loc: true,
                ranges: true,
                raw: true,
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
                        line: 2,
                        column: 33
                      }
                    },
                    body: [
                      {
                        type: 'ExpressionStatement',
                        start: 0,
                        end: 11,
                        loc: {
                          start: {
                            line: 1,
                            column: 0
                          },
                          end: {
                            line: 1,
                            column: 11
                          }
                        },
                        expression: {
                          type: 'AssignmentExpression',
                          start: 0,
                          end: 10,
                          loc: {
                            start: {
                              line: 1,
                              column: 0
                            },
                            end: {
                              line: 1,
                              column: 10
                            }
                          },
                          operator: '=',
                          left: {
                            type: 'ArrayPattern',
                            start: 0,
                            end: 2,
                            loc: {
                              start: {
                                line: 1,
                                column: 0
                              },
                              end: {
                                line: 1,
                                column: 2
                              }
                            },
                            elements: []
                          },
                          right: {
                            type: 'ArrayExpression',
                            start: 5,
                            end: 10,
                            loc: {
                              start: {
                                line: 1,
                                column: 5
                              },
                              end: {
                                line: 1,
                                column: 10
                              }
                            },
                            elements: [
                              {
                                type: 'Literal',
                                start: 6,
                                end: 7,
                                loc: {
                                  start: {
                                    line: 1,
                                    column: 6
                                  },
                                  end: {
                                    line: 1,
                                    column: 7
                                  }
                                },
                                value: 1,
                                raw: '1'
                              },
                              {
                                type: 'Literal',
                                start: 8,
                                end: 9,
                                loc: {
                                  start: {
                                    line: 1,
                                    column: 8
                                  },
                                  end: {
                                    line: 1,
                                    column: 9
                                  }
                                },
                                value: 2,
                                raw: '2'
                              }
                            ]
                          }
                        }
                      },
                      {
                        type: 'ExpressionStatement',
                        start: 28,
                        end: 45,
                        loc: {
                          start: {
                            line: 2,
                            column: 16
                          },
                          end: {
                            line: 2,
                            column: 33
                          }
                        },
                        expression: {
                          type: 'AssignmentExpression',
                          start: 29,
                          end: 43,
                          loc: {
                            start: {
                              line: 2,
                              column: 17
                            },
                            end: {
                              line: 2,
                              column: 31
                            }
                          },
                          operator: '=',
                          left: {
                            type: 'ObjectPattern',
                            start: 29,
                            end: 31,
                            loc: {
                              start: {
                                line: 2,
                                column: 17
                              },
                              end: {
                                line: 2,
                                column: 19
                              }
                            },
                            properties: []
                          },
                          right: {
                            type: 'ObjectExpression',
                            start: 34,
                            end: 43,
                            loc: {
                              start: {
                                line: 2,
                                column: 22
                              },
                              end: {
                                line: 2,
                                column: 31
                              }
                            },
                            properties: [
                              {
                                type: 'Property',
                                start: 35,
                                end: 38,
                                loc: {
                                  start: {
                                    line: 2,
                                    column: 23
                                  },
                                  end: {
                                    line: 2,
                                    column: 26
                                  }
                                },
                                method: false,
                                shorthand: false,
                                computed: false,
                                key: {
                                  type: 'Identifier',
                                  start: 35,
                                  end: 36,
                                  loc: {
                                    start: {
                                      line: 2,
                                      column: 23
                                    },
                                    end: {
                                      line: 2,
                                      column: 24
                                    }
                                  },
                                  name: 'a'
                                },
                                value: {
                                  type: 'Literal',
                                  start: 37,
                                  end: 38,
                                  loc: {
                                    start: {
                                      line: 2,
                                      column: 25
                                    },
                                    end: {
                                      line: 2,
                                      column: 26
                                    }
                                  },
                                  value: 1,
                                  raw: '1'
                                },
                                kind: 'init'
                              },
                              {
                                type: 'Property',
                                start: 39,
                                end: 42,
                                loc: {
                                  start: {
                                    line: 2,
                                    column: 27
                                  },
                                  end: {
                                    line: 2,
                                    column: 30
                                  }
                                },
                                method: false,
                                shorthand: false,
                                computed: false,
                                key: {
                                  type: 'Identifier',
                                  start: 39,
                                  end: 40,
                                  loc: {
                                    start: {
                                      line: 2,
                                      column: 27
                                    },
                                    end: {
                                      line: 2,
                                      column: 28
                                    }
                                  },
                                  name: 'b'
                                },
                                value: {
                                  type: 'Literal',
                                  start: 41,
                                  end: 42,
                                  loc: {
                                    start: {
                                      line: 2,
                                      column: 29
                                    },
                                    end: {
                                      line: 2,
                                      column: 30
                                    }
                                  },
                                  value: 2,
                                  raw: '2'
                                },
                                kind: 'init'
                              }
                            ]
                          }
                        }
                      }
                    ],
                    sourceType: 'script'
                  }
            });

            pass(`for (var {x, y} in z);`, {
                source: 'for (var {x, y} in z);',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    start: 0,
                    end: 22,
                    loc: {
                      start: {
                        line: 1,
                        column: 0
                      },
                      end: {
                        line: 1,
                        column: 22
                      }
                    },
                    body: [
                      {
                        type: 'ForInStatement',
                        start: 0,
                        end: 22,
                        loc: {
                          start: {
                            line: 1,
                            column: 0
                          },
                          end: {
                            line: 1,
                            column: 22
                          }
                        },
                        left: {
                          type: 'VariableDeclaration',
                          start: 5,
                          end: 15,
                          loc: {
                            start: {
                              line: 1,
                              column: 5
                            },
                            end: {
                              line: 1,
                              column: 15
                            }
                          },
                          declarations: [
                            {
                              type: 'VariableDeclarator',
                              start: 9,
                              end: 15,
                              loc: {
                                start: {
                                  line: 1,
                                  column: 9
                                },
                                end: {
                                  line: 1,
                                  column: 15
                                }
                              },
                              id: {
                                type: 'ObjectPattern',
                                start: 9,
                                end: 15,
                                loc: {
                                  start: {
                                    line: 1,
                                    column: 9
                                  },
                                  end: {
                                    line: 1,
                                    column: 15
                                  }
                                },
                                properties: [
                                  {
                                    type: 'Property',
                                    start: 10,
                                    end: 11,
                                    loc: {
                                      start: {
                                        line: 1,
                                        column: 10
                                      },
                                      end: {
                                        line: 1,
                                        column: 11
                                      }
                                    },
                                    method: false,
                                    shorthand: true,
                                    computed: false,
                                    key: {
                                      type: 'Identifier',
                                      start: 10,
                                      end: 11,
                                      loc: {
                                        start: {
                                          line: 1,
                                          column: 10
                                        },
                                        end: {
                                          line: 1,
                                          column: 11
                                        }
                                      },
                                      name: 'x'
                                    },
                                    kind: 'init',
                                    value: {
                                      type: 'Identifier',
                                      start: 10,
                                      end: 11,
                                      loc: {
                                        start: {
                                          line: 1,
                                          column: 10
                                        },
                                        end: {
                                          line: 1,
                                          column: 11
                                        }
                                      },
                                      name: 'x'
                                    }
                                  },
                                  {
                                    type: 'Property',
                                    start: 13,
                                    end: 14,
                                    loc: {
                                      start: {
                                        line: 1,
                                        column: 13
                                      },
                                      end: {
                                        line: 1,
                                        column: 14
                                      }
                                    },
                                    method: false,
                                    shorthand: true,
                                    computed: false,
                                    key: {
                                      type: 'Identifier',
                                      start: 13,
                                      end: 14,
                                      loc: {
                                        start: {
                                          line: 1,
                                          column: 13
                                        },
                                        end: {
                                          line: 1,
                                          column: 14
                                        }
                                      },
                                      name: 'y'
                                    },
                                    kind: 'init',
                                    value: {
                                      type: 'Identifier',
                                      start: 13,
                                      end: 14,
                                      loc: {
                                        start: {
                                          line: 1,
                                          column: 13
                                        },
                                        end: {
                                          line: 1,
                                          column: 14
                                        }
                                      },
                                      name: 'y'
                                    }
                                  }
                                ]
                              },
                              init: null
                            }
                          ],
                          kind: 'var'
                        },
                        right: {
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
                          name: 'z'
                        },
                        body: {
                          type: 'EmptyStatement',
                          start: 21,
                          end: 22,
                          loc: {
                            start: {
                              line: 1,
                              column: 21
                            },
                            end: {
                              line: 1,
                              column: 22
                            }
                          }
                        }
                      }
                    ],
                    sourceType: 'script'
                  }
            });

            pass(`var {} = 0`, {
                source: 'var {} = 0',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    sourceType: 'script',
                    body: [
                        {
                            type: 'VariableDeclaration',
                            declarations: [
                                {
                                    type: 'VariableDeclarator',
                                    init: {
                                        type: 'Literal',
                                        value: 0,
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
                                        raw: '0'
                                    },
                                    id: {
                                        type: 'ObjectPattern',
                                        properties: [],
                                        start: 4,
                                        end: 6,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 4
                                            },
                                            end: {
                                                line: 1,
                                                column: 6
                                            }
                                        }
                                    },
                                    start: 4,
                                    end: 10,
                                    loc: {
                                        start: {
                                            line: 1,
                                            column: 4
                                        },
                                        end: {
                                            line: 1,
                                            column: 10
                                        }
                                    }
                                }
                            ],
                            kind: 'var',
                            start: 0,
                            end: 10,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 10
                                }
                            }
                        }
                    ],
                    start: 0,
                    end: 10,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 10
                        }
                    }
                }
            });

            pass(`let {a:{}} = 0`, {
                source: 'let {a:{}} = 0',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    start: 0,
                    end: 14,
                    loc: {
                      start: {
                        line: 1,
                        column: 0
                      },
                      end: {
                        line: 1,
                        column: 14
                      }
                    },
                    body: [
                      {
                        type: 'VariableDeclaration',
                        start: 0,
                        end: 14,
                        loc: {
                          start: {
                            line: 1,
                            column: 0
                          },
                          end: {
                            line: 1,
                            column: 14
                          }
                        },
                        declarations: [
                          {
                            type: 'VariableDeclarator',
                            start: 4,
                            end: 14,
                            loc: {
                              start: {
                                line: 1,
                                column: 4
                              },
                              end: {
                                line: 1,
                                column: 14
                              }
                            },
                            id: {
                              type: 'ObjectPattern',
                              start: 4,
                              end: 10,
                              loc: {
                                start: {
                                  line: 1,
                                  column: 4
                                },
                                end: {
                                  line: 1,
                                  column: 10
                                }
                              },
                              properties: [
                                {
                                  type: 'Property',
                                  start: 5,
                                  end: 9,
                                  loc: {
                                    start: {
                                      line: 1,
                                      column: 5
                                    },
                                    end: {
                                      line: 1,
                                      column: 9
                                    }
                                  },
                                  method: false,
                                  shorthand: false,
                                  computed: false,
                                  key: {
                                    type: 'Identifier',
                                    start: 5,
                                    end: 6,
                                    loc: {
                                      start: {
                                        line: 1,
                                        column: 5
                                      },
                                      end: {
                                        line: 1,
                                        column: 6
                                      }
                                    },
                                    name: 'a'
                                  },
                                  value: {
                                    type: 'ObjectPattern',
                                    start: 7,
                                    end: 9,
                                    loc: {
                                      start: {
                                        line: 1,
                                        column: 7
                                      },
                                      end: {
                                        line: 1,
                                        column: 9
                                      }
                                    },
                                    properties: []
                                  },
                                  kind: 'init'
                                }
                              ]
                            },
                            init: {
                              type: 'Literal',
                              start: 13,
                              end: 14,
                              loc: {
                                start: {
                                  line: 1,
                                  column: 13
                                },
                                end: {
                                  line: 1,
                                  column: 14
                                }
                              },
                              value: 0,
                              raw: '0'
                            }
                          }
                        ],
                        kind: 'let'
                      }
                    ],
                    sourceType: 'script'
                  }
            });

            pass(`(a, b, [c]) => 0`, {
                source: '(a, b, [c]) => 0',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    type: 'Program',
                    body: [
                        {
                            type: 'ExpressionStatement',
                            expression: {
                                type: 'ArrowFunctionExpression',
                                body: {
                                    type: 'Literal',
                                    value: 0,
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
                                    },
                                    raw: '0'
                                },
                                params: [
                                    {
                                        type: 'Identifier',
                                        name: 'a',
                                        start: 1,
                                        end: 2,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 1
                                            },
                                            end: {
                                                line: 1,
                                                column: 2
                                            }
                                        }
                                    },
                                    {
                                        type: 'Identifier',
                                        name: 'b',
                                        start: 4,
                                        end: 5,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 4
                                            },
                                            end: {
                                                line: 1,
                                                column: 5
                                            }
                                        }
                                    },
                                    {
                                        type: 'ArrayPattern',
                                        elements: [
                                            {
                                                type: 'Identifier',
                                                name: 'c',
                                                start: 8,
                                                end: 9,
                                                loc: {
                                                    start: {
                                                        line: 1,
                                                        column: 8
                                                    },
                                                    end: {
                                                        line: 1,
                                                        column: 9
                                                    }
                                                }
                                            }
                                        ],
                                        start: 7,
                                        end: 10,
                                        loc: {
                                            start: {
                                                line: 1,
                                                column: 7
                                            },
                                            end: {
                                                line: 1,
                                                column: 10
                                            }
                                        }
                                    }
                                ],
                                id: null,
                                async: false,
                                generator: false,
                                expression: true,
                                start: 0,
                                end: 16,
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 0
                                    },
                                    end: {
                                        line: 1,
                                        column: 16
                                    }
                                }
                            },
                            start: 0,
                            end: 16,
                            loc: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 1,
                                    column: 16
                                }
                            }
                        }
                    ],
                    sourceType: 'script',
                    start: 0,
                    end: 16,
                    loc: {
                        start: {
                            line: 1,
                            column: 0
                        },
                        end: {
                            line: 1,
                            column: 16
                        }
                    }
                }
            });

            fail(`"use strict"; 1, { arguments } = [];`, {
                source: '"use strict"; 1, { arguments } = [];',
                line: 1,
            });
/*
            fail(`({ src: ([dest]) } = obj)`, {
                source: '({ src: ([dest]) } = obj)',
                line: 1,
            });*/

            fail(`function* a({e: a.b}) {}`, {
                source: 'function* a({e: a.b}) {}',
                line: 1,
            });

            fail(`({*a({e: a.b}){}})`, {
                source: '({*a({e: a.b}){}})',
                line: 1,
            });

            fail(`({e: a.b}) => 0`, {
                source: '({e: a.b}) => 0',
                line: 1,
            });

            fail(`function a({e: a.b}) {}`, {
                source: 'function a({e: a.b}) {}',
                line: 1,
            });

            fail(`({set a({e: a.b}){}})`, {
                source: '({set a({e: a.b}){}})',
                line: 1,
            });

            fail(`"use strict"; for (let {x: y = let};;) {}`, {
                source: '"use strict"; for (let {x: y = let};;) {}',
                line: 1,
            });

            fail(`"use strict"; for (let [x = let];;) {}`, {
                source: '"use strict"; for (let [x = let];;) {}',
                line: 1,
            });

            fail(`var ([x]) = 0`, {
                source: 'var ([x]) = 0',
                line: 1,
            });

            fail(`var [a.b] = 0`, {
                source: 'var [a.b] = 0',
                line: 1,
            });
    });
});