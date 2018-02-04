import { fail, pass } from '../test-utils';

describe('Literals - Numbers', () => {

    pass(`long octal number`, {
    source: '0o070707074567456713444224224353332222444535353535277772334455111111122330003',
    raw: true,
    ranges: true,
    loc: true,
    expected: {
        type: 'Program',
        start: 0,
        end: 77,
        loc: {
          start: {
            line: 1,
            column: 0
          },
          end: {
            line: 1,
            column: 77
          }
        },
        body: [
          {
            type: 'ExpressionStatement',
            start: 0,
            end: 77,
            loc: {
              start: {
                line: 1,
                column: 0
              },
              end: {
                line: 1,
                column: 77
              }
            },
            expression: {
              type: 'Literal',
              start: 0,
              end: 77,
              loc: {
                start: {
                  line: 1,
                  column: 0
                },
                end: {
                  line: 1,
                  column: 77
                }
              },
              value: 5.991100803910843e+66,
              raw: '0o070707074567456713444224224353332222444535353535277772334455111111122330003'
            }
          }
        ],
        sourceType: 'script'
      }
    });

    pass(`short octal number`, {
        source: '0o003535765333337775523337',
        raw: true,
        ranges: true,
        loc: true,
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
                type: 'ExpressionStatement',
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
                expression: {
                  type: 'Literal',
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
                  value: 33974783640419607000,
                  raw: '0o003535765333337775523337'
                }
              }
            ],
            sourceType: 'script'
          }
        });

    pass(`medium binary number`, {
            source: '0o003535765333337775523337766665344423433435',
            raw: true,
            ranges: true,
            loc: true,
            expected: {
                type: 'Program',
                start: 0,
                end: 44,
                loc: {
                  start: {
                    line: 1,
                    column: 0
                  },
                  end: {
                    line: 1,
                    column: 44
                  }
                },
                body: [
                  {
                    type: 'ExpressionStatement',
                    start: 0,
                    end: 44,
                    loc: {
                      start: {
                        line: 1,
                        column: 0
                      },
                      end: {
                        line: 1,
                        column: 44
                      }
                    },
                    expression: {
                      type: 'Literal',
                      start: 0,
                      end: 44,
                      loc: {
                        start: {
                          line: 1,
                          column: 0
                        },
                        end: {
                          line: 1,
                          column: 44
                        }
                      },
                      value: 6.1203529177194785e+35,
                      raw: '0o003535765333337775523337766665344423433435'
                    }
                  }
                ],
                sourceType: 'script'
              }
            });

    pass(`super long octal number`, {
                source: '0o00353576533333777552333776666534442343343535765333337775523337766665344423433435357653333377755233377666653444234334353576533333777552333776666534442343343535765333337775523337766665344423433435777777777755555555555555555555444444444444333333332345666666666665433532453253535765333337775523337766665344423433435357653333377755233377666653444234334353576533333777552333776666534442343343535765333337775523337766665344423433435357653333377755233377666653444234334357777777777555555555555555555554444444444443333333323456666666666654335324532535357653333377755233377666653444234334353576533333777552333776666534442343343535765333337775523337766665344423433435357653333377755233377666653444234334353576533333777552333776666534442343343577777777775555555555555555555544444444444433333333234566666666666543353245325353576533333777552333776666534442343343535765333337775523337766665344423433435357653333377755233377666653444234334353576533333777552333776666534442343343535765333337775523337766665344423433435777777777755555555555555555555444444444444333333332345666666666665433532453253535765333337775523337766665344423433435357653333377755233377666653444234334353576533333777552333776666534442343343535765333337775523337766665344423433435357653333377755233377666653444234334357777777777555555555555555555554444444444443333333323456666666666654335324532535357653333377755233377666653444234334353576533333777552333776666534442343343535765333337775523337766665344423433435357653333377755233377666653444234334353576533333777552333776666534442343343577777777775555555555555555555544444444444433333333234566666666666543353245325',
                raw: true,
                ranges: true,
                loc: true,
                expected: {
                    type: 'Program',
                    start: 0,
                    end: 1618,
                    loc: {
                      start: {
                        line: 1,
                        column: 0
                      },
                      end: {
                        line: 1,
                        column: 1618
                      }
                    },
                    body: [
                      {
                        type: 'ExpressionStatement',
                        start: 0,
                        end: 1618,
                        loc: {
                          start: {
                            line: 1,
                            column: 0
                          },
                          end: {
                            line: 1,
                            column: 1618
                          }
                        },
                        expression: {
                          type: 'Literal',
                          start: 0,
                          end: 1618,
                          loc: {
                            start: {
                              line: 1,
                              column: 0
                            },
                            end: {
                              line: 1,
                              column: 1618
                            }
                          },
                          value: Infinity,
                          raw: '0o00353576533333777552333776666534442343343535765333337775523337766665344423433435357653333377755233377666653444234334353576533333777552333776666534442343343535765333337775523337766665344423433435777777777755555555555555555555444444444444333333332345666666666665433532453253535765333337775523337766665344423433435357653333377755233377666653444234334353576533333777552333776666534442343343535765333337775523337766665344423433435357653333377755233377666653444234334357777777777555555555555555555554444444444443333333323456666666666654335324532535357653333377755233377666653444234334353576533333777552333776666534442343343535765333337775523337766665344423433435357653333377755233377666653444234334353576533333777552333776666534442343343577777777775555555555555555555544444444444433333333234566666666666543353245325353576533333777552333776666534442343343535765333337775523337766665344423433435357653333377755233377666653444234334353576533333777552333776666534442343343535765333337775523337766665344423433435777777777755555555555555555555444444444444333333332345666666666665433532453253535765333337775523337766665344423433435357653333377755233377666653444234334353576533333777552333776666534442343343535765333337775523337766665344423433435357653333377755233377666653444234334357777777777555555555555555555554444444444443333333323456666666666654335324532535357653333377755233377666653444234334353576533333777552333776666534442343343535765333337775523337766665344423433435357653333377755233377666653444234334353576533333777552333776666534442343343577777777775555555555555555555544444444444433333333234566666666666543353245325'
                        }
                      }
                    ],
                    sourceType: 'script'
                  }
                });
});