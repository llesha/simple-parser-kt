export var blocks = [{
    "type": "repeated",
    "message0": "repeated %1 %2 allowEmpty %3 %4 %5",
    "args0": [
        {
            "type": "field_input",
            "name": "sep",
            "text": ","
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "allow",
            "checked": true
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "repeated"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "literal",
    "message0": "\" %1 \"",
    "args0": [
        {
            "type": "field_input",
            "name": "value",
            "text": ""
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "number",
    "message0": "number",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "date",
    "message0": "date %1 position %2 %3 separator %4",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "position",
            "options": [
                [
                    "YYYY;MM;DD",
                    "ymd"
                ],
                [
                    "DD;MM;YYYY",
                    "dmy"
                ],
                [
                    "MM;DD;YYYY",
                    "mdy"
                ],
                [
                    "YYYY;M;D",
                    "ymdn0"
                ],
                [
                    "D;M;YYYY",
                    "dmyn0"
                ],
                [
                    "M;D;YYYY",
                    "mdyn0"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "separator",
            "options": [
                [
                    "/",
                    "/"
                ],
                [
                    "-",
                    "-"
                ],
                [
                    ":",
                    ":"
                ]
            ]
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "anything",
    "message0": "anything",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "line",
    "message0": "line %1 %2",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "linearg"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "main",
    "message0": "main %1 %2",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "named"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "custom",
    "message0": "custom %1 %2 %3",
    "args0": [
        {
            "type": "field_input",
            "name": "name",
            "text": "block_name"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "customarg"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 195,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "custom_argument",
    "message0": "argument",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 195,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "named",
    "message0": "named %1 %2 %3",
    "args0": [
        {
            "type": "field_input",
            "name": "name",
            "text": "name"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "named"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 270,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "word",
    "message0": "word",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
},
{
    "type": "regex",
    "message0": "regex %1",
    "args0": [
        {
            "type": "field_input",
            "name": "regex",
            "text": "\\w+"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
}]

export var toolbox = {
    "kind": "categoryToolbox",
    "contents": [
        {
            "kind": "category",
            "name": "Parse",
            "contents": [
                {
                    "kind": "block",
                    "type": "literal"
                },
                {
                    "kind": "block",
                    "type": "number"
                },
                {
                    "kind": "block",
                    "type": "word"
                },
                {
                    "kind": "block",
                    "type": "date"
                },
                {
                    "kind": "block",
                    "type": "regex"
                },
                {
                    "kind": "block",
                    "type": "anything"
                },
                {
                    "kind": "block",
                    "type": "repeated"
                },
                {
                    "kind": "block",
                    "type": "line"
                },
                {
                    "kind": "block",
                    "type": "main"
                },
                {
                    "kind": "block",
                    "type": "named"
                },
                {
                    "kind": "block",
                    "type": "custom"
                },
                {
                    "kind": "block",
                    "type": "custom_argument"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Process",
            "contents": [

            ]
        }
    ]
}