# babel
  ```
    {
      "presets":[
        "es2015" // 表示babel-preset-es2015
      ]
    }
  ```
  presets是一系列plugin的集合，
    - "es2015":代表一些列的插件，不用再plugins配置里一个一个写；
    - "stage-x"
    - env
    - react
    - flow
    - latest

      1. es2015
        check-es2015-constants
        transform-es2015-arrow-functions
        transform-es2015-block-scoped-functions
        transform-es2015-block-scoping
        transform-es2015-classes
        transform-es2015-computed-properties
        transform-es2015-destructuring
        transform-es2015-duplicate-keys
        transform-es2015-for-of
        transform-es2015-function-name
        transform-es2015-literals
        transform-es2015-modules-commonjs
        transform-es2015-object-super
        transform-es2015-parameters
        transform-es2015-shorthand-properties
        transform-es2015-spread
        transform-es2015-sticky-regex
        transform-es2015-template-literals
        transform-es2015-typeof-symbol
        transform-es2015-unicode-regex
        transform-regenerator

        2. es2016
        transform-exponentiation-operator

        3. es2017
        syntax-trailing-function-commas
        transform-async-to-generator


  ### babel-preset-stage-x
    js的一些还未正式纳入标准的提案，他们在不同的阶段用stage-x表示，
    这些提案，正在积极通过TC39的流程成为标准的一部分。

    这个流程分为5（0-4）个阶段,
      - babel-preset-stage-0 仅仅是个想法，包含stage-1,-2,-3
      - babel-preset-stage-1 提议
      - babel-preset-stage-2 草案
      - babel-preset-stage-3 候选
      - babel-preset-stage-4 已完成

  ### babel-preset-env： 根据设定的支持条件，查找出转义插件列表
    在特性环境，使用**env**选项来设置特性配置：
      env执行时，首选读取browers配置中的条件，根据条件从**broserslist**模块得出该条件下所有浏览器最低版本号列表，而env的转义插件提供了浏览器最低版本号列表，最终得出babel转义插件列表
    ```
      {
        "presets"[
          ["env", {
            "targets":{
              "browers":["> 1%", "last 2 versions", "not ie <= 8"]
            }
          }]
        ]
      }
    ```
  ### stage-x
    1. stage-0
      包含stage-1,2,3的所有功能
    2. stage-1
    3. stage-2
    4. stage-3
    5. stage-4
