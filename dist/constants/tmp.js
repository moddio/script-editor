export const ACTIONS = [
    {
        "_id": "5a698b5322f6eb16d4c109d2",
        "title": "item in front of unit",
        "key": "getItemInFrontOfUnit",
        "data": {
            "type": "function",
            "category": "item",
            "fragments": [
                {
                    "type": "constant",
                    "text": "dropped item in front of"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.742Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109da",
        "title": "selected projectile (from the loop)",
        "key": "selectedProjectile",
        "data": {
            "type": "function",
            "category": "projectile",
            "fragments": [
                {
                    "type": "constant",
                    "text": "selected projectile"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.742Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109f3",
        "title": "attribute type of attribute",
        "key": "getAttributeTypeOfAttribute",
        "data": {
            "type": "function",
            "category": "attributeType",
            "fragments": [
                {
                    "type": "constant",
                    "text": "attribute type of"
                },
                {
                    "type": "variable",
                    "dataType": "attribute",
                    "title": "Attribute",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.742Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109fe",
        "title": "play video ad for player",
        "key": "playAdForPlayer",
        "data": {
            "type": "action",
            "category": "ad",
            "fragments": [
                {
                    "type": "constant",
                    "text": "play video ad for"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.742Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a2b",
        "title": "random number",
        "key": "getRandomNumberBetween",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "random number between"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Min",
                    "field": "min",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "and"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Max",
                    "field": "max",
                    "extraData": {
                        "dataType": "number"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.742Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a43",
        "title": "set timeout",
        "key": "setTimeOut",
        "data": {
            "type": "action",
            "category": "timer",
            "fields": {
                "isActionContainer": true,
                "actionContainerKey": "actions"
            },
            "fragments": [
                {
                    "type": "constant",
                    "text": "wait for"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Duration",
                    "field": "duration",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "milliseconds then run actions"
                },
                {
                    "field": "actions",
                    "forDataOnly": true,
                    "defaultValue": []
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.742Z"
    },
    {
        "_id": "5aa761929fd1871dac85dae7",
        "title": "unit's facing angle",
        "key": "unitsFacingAngle",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "facing angle of"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "unit"
                },
                {
                    "type": "constant",
                    "text": "in radians"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.742Z"
    },
    {
        "_id": "5ad84f348e7c25ddc8980f11",
        "title": "map's height",
        "key": "getMapHeight",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "map's height"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.742Z"
    },
    {
        "_id": "5ae2eea4873bcd3228598618",
        "title": "entity type",
        "key": "getEntityType",
        "data": {
            "type": "function",
            "category": "string",
            "fragments": [
                {
                    "type": "constant",
                    "text": "type of"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.742Z"
    },
    {
        "_id": "5ae2f561873bcd3228598619",
        "title": "selected entity (from the loop)",
        "key": "getSelectedEntity",
        "data": {
            "type": "function",
            "category": "entity",
            "fragments": [
                {
                    "type": "constant",
                    "text": "selected entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.742Z"
    },
    {
        "_id": "5afb0a3189c7b786e8f9a1dd",
        "title": "rotate entity to face a position instantly (ignore physics)",
        "key": "rotateEntityToFacePosition",
        "data": {
            "type": "action",
            "category": "entity",
            "fragments": [
                {
                    "type": "constant",
                    "text": "rotate"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "to face"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Position",
                    "field": "position",
                    "extraData": {
                        "dataType": "position"
                    },
                    "entity": null
                },
                {
                    "type": "constant",
                    "text": "instantly"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.742Z"
    },
    {
        "_id": "5afb268389c7b786e8f9a1ec",
        "title": "destroy entity",
        "key": "destroyEntity",
        "data": {
            "type": "action",
            "category": "entity",
            "fragments": [
                {
                    "type": "constant",
                    "text": "destroy"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.742Z"
    },
    {
        "_id": "5b0665993da48f42da7d40c2",
        "title": "set entity depth",
        "key": "setEntityDepth",
        "data": {
            "type": "action",
            "category": "entity",
            "fragments": [
                {
                    "type": "constant",
                    "text": "set sprite of"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "'s depth to"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Value",
                    "field": "value",
                    "extraData": {
                        "dataType": "number"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.742Z"
    },
    {
        "_id": "5b10e480cc132e031421c4aa",
        "title": "item at slot",
        "key": "getItemAtSlot",
        "data": {
            "type": "function",
            "category": "item",
            "fragments": [
                {
                    "type": "constant",
                    "text": "item at slot"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Slot",
                    "field": "slot",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "of"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "unit"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.742Z"
    },
    {
        "_id": "5bc9e742887d12a038fcfe58",
        "title": "hide unit from player",
        "key": "hideUnitFromPlayer",
        "data": {
            "type": "action",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "hide"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "from"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.742Z"
    },
    {
        "_id": "5bc9e742887d12a038fcfe59",
        "title": "show unit to player",
        "key": "showUnitToPlayer",
        "data": {
            "type": "action",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "show"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "to"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.742Z"
    },
    {
        "_id": "5d1c6bc92109a9a44364827a",
        "key": "entitiesCollidingWithLastRaycast",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "entities colliding with last raycast",
                    "type": "constant"
                }
            ],
            "type": "function",
            "category": "entityGroup",
            "uses": null
        },
        "title": "entities colliding with last triggering raycast",
        "createdAt": "2022-09-26T12:29:41.742Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109cb",
        "title": "last purchased unit",
        "key": "getLastPurchasedUnit",
        "data": {
            "type": "function",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "last purchased unit"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.742Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109fc",
        "title": "send chat message",
        "key": "sendChatMessage",
        "data": {
            "type": "action",
            "category": "ui",
            "fragments": [
                {
                    "type": "constant",
                    "text": "send chat message"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Message",
                    "field": "message",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "to everyone"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.743Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a34",
        "title": "play sound at position",
        "key": "playSoundAtPosition",
        "data": {
            "type": "action",
            "category": "sound",
            "uses": [
                "sounds"
            ],
            "fragments": [
                {
                    "type": "constant",
                    "text": "play sound"
                },
                {
                    "type": "variable",
                    "dataType": "sound",
                    "title": "Sound",
                    "field": "sound",
                    "extraData": {
                        "type": "sound"
                    }
                },
                {
                    "type": "constant",
                    "text": "at"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Position",
                    "field": "position",
                    "extraData": {
                        "dataType": "position"
                    },
                    "entity": null
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.743Z"
    },
    {
        "_id": "5a83c5d7c95798512888120e",
        "title": "xy coordinate",
        "key": "xyCoordinate",
        "data": {
            "type": "function",
            "category": "position",
            "fragments": [
                {
                    "type": "constant",
                    "text": "position ( x:"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Position (X)",
                    "field": "x",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ", y:"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Position (Y)",
                    "field": "y",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ")"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.743Z"
    },
    {
        "_id": "5aa761929fd1871dac85dae8",
        "title": "number at fixed decimal places",
        "key": "toFixed",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Value",
                    "field": "value",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "at"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Precision",
                    "field": "precision",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "decimal places"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.743Z"
    },
    {
        "_id": "5ac482528395fd2174e51fd4",
        "title": "current state of entity",
        "key": "getEntityState",
        "data": {
            "type": "function",
            "category": "state",
            "fragments": [
                {
                    "type": "constant",
                    "text": "current state of"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.743Z"
    },
    {
        "_id": "5ad770297340bf40185c9ad3",
        "title": "drop item at position",
        "key": "dropItemAtPosition",
        "data": {
            "type": "action",
            "category": "item",
            "fragments": [
                {
                    "type": "constant",
                    "text": "drop"
                },
                {
                    "type": "variable",
                    "dataType": "item",
                    "title": "Item",
                    "field": "item"
                },
                {
                    "type": "constant",
                    "text": "at"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Position",
                    "field": "position",
                    "extraData": {
                        "dataType": "position"
                    },
                    "entity": null
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.743Z"
    },
    {
        "_id": "5afa911d25ed43f9c8c5009c",
        "title": "apply force on entity at an angle",
        "key": "applyForceOnEntityAngle",
        "data": {
            "type": "action",
            "category": "entity",
            "fragments": [
                {
                    "type": "constant",
                    "text": "apply force"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Force",
                    "field": "force",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "on"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "at an angle of"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Angle",
                    "field": "angle",
                    "extraData": {
                        "dataType": "number"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.743Z"
    },
    {
        "_id": "5afef8ec97ad57a08436fe40",
        "title": "show input modal to player",
        "key": "showInputModalToPlayer",
        "data": {
            "type": "action",
            "category": "ui",
            "fragments": [
                {
                    "type": "constant",
                    "text": "show input modal to"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                },
                {
                    "type": "constant",
                    "text": "asking"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Input Label",
                    "field": "inputLabel",
                    "extraData": {
                        "dataType": "string"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.743Z"
    },
    {
        "_id": "5b10e2bdcc132e031421c4a7",
        "title": "item quantity",
        "key": "getItemQuantity",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "quantity of"
                },
                {
                    "type": "variable",
                    "dataType": "item",
                    "title": "Item",
                    "field": "item"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.743Z"
    },
    {
        "_id": "5b59f6d37cac912e2cdb2bd8",
        "title": "player is logged in",
        "key": "isPlayerLoggedIn",
        "data": {
            "type": "function",
            "category": "boolean",
            "fragments": [
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                },
                {
                    "type": "constant",
                    "text": "is logged in"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.743Z"
    },
    {
        "_id": "5bf2e17ebbb76e1bc0795b40",
        "title": "open dialogue for player",
        "key": "openDialogueForPlayer",
        "data": {
            "type": "action",
            "category": "dialogue",
            "uses": [
                "dialogue"
            ],
            "fragments": [
                {
                    "type": "constant",
                    "text": "open dialogue"
                },
                {
                    "type": "variable",
                    "dataType": "dialogue",
                    "title": "Dialogue",
                    "field": "dialogue",
                    "extraData": {
                        "type": "dialogue"
                    }
                },
                {
                    "type": "constant",
                    "text": "for"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.743Z"
    },
    {
        "_id": "5c4636d727098b4ee734f05d",
        "key": "continue",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "skip current iteration of the loop",
                    "type": "constant"
                }
            ],
            "type": "action",
            "category": "loop",
            "uses": null
        },
        "title": "skip iteration",
        "createdAt": "2022-09-26T12:29:41.743Z"
    },
    {
        "_id": "5c528e5027098b4ee73f9a59",
        "key": "openWebsiteForPlayer",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "open",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "string"
                    },
                    "title": "String",
                    "field": "string",
                    "dataType": "value",
                    "type": "variable"
                },
                {
                    "text": "for",
                    "type": "constant"
                },
                {
                    "title": "Player",
                    "field": "player",
                    "dataType": "player",
                    "type": "variable"
                }
            ],
            "type": "action",
            "category": "unit",
            "uses": null
        },
        "title": "open website for player",
        "createdAt": "2022-09-26T12:29:41.743Z"
    },
    {
        "_id": "5cfdf96f27098b4ee73f5e0f",
        "key": "setEntityLifeSpan",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "set",
                    "type": "constant"
                },
                {
                    "title": "Entity",
                    "field": "entity",
                    "dataType": "entity",
                    "type": "variable"
                },
                {
                    "text": "life span to",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "number"
                    },
                    "title": "Life span",
                    "field": "lifeSpan",
                    "dataType": "value",
                    "type": "variable"
                },
                {
                    "text": "ms",
                    "type": "constant"
                }
            ],
            "type": "action",
            "category": "entity",
            "uses": null
        },
        "title": "set entity life span",
        "createdAt": "2022-09-26T12:29:41.743Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109d4",
        "title": "selected item (from the loop)",
        "key": "selectedItem",
        "data": {
            "type": "function",
            "category": "item",
            "fragments": [
                {
                    "type": "constant",
                    "text": "selected item"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.743Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a0f",
        "title": "hide unit's name label from hostile players",
        "key": "hideUnitNameLabel",
        "data": {
            "type": "action",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "hide"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "'s name label from hostile players"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.743Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a1d",
        "title": "set triggering unit",
        "key": "setTriggeringUnit",
        "data": {
            "type": "action",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "set"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "as triggering unit"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.743Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a24",
        "title": "create unit at position",
        "key": "createUnitAtPosition",
        "data": {
            "type": "action",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "create"
                },
                {
                    "type": "variable",
                    "dataType": "unitType",
                    "title": "Unit Type",
                    "field": "unitType",
                    "extraData": {
                        "type": "unitType"
                    }
                },
                {
                    "type": "constant",
                    "text": "for"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "at"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Position",
                    "field": "position",
                    "extraData": {
                        "dataType": "position",
                        "defaultText": "position"
                    },
                    "entity": null
                },
                {
                    "type": "constant",
                    "text": "facing"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Facing Angle",
                    "field": "angle",
                    "extraData": {
                        "dataType": "number",
                        "defaultText": "angle"
                    }
                },
                {
                    "type": "constant",
                    "text": "radians"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.743Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a2c",
        "title": "hide overlay text for everyone",
        "key": "hideUiTextForEveryone",
        "data": {
            "type": "action",
            "category": "ui",
            "fragments": [
                {
                    "type": "constant",
                    "text": "hide"
                },
                {
                    "type": "variable",
                    "dataType": "updateUiText.target",
                    "title": "Target",
                    "field": "target"
                },
                {
                    "type": "constant",
                    "text": "for everyone"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.743Z"
    },
    {
        "_id": "5a6a07ef6f3a8a4568724fd9",
        "title": "players is friendly to another player",
        "key": "playersAreFriendly",
        "data": {
            "fragments": [
                {
                    "text": "",
                    "type": "constant"
                },
                {
                    "title": "Player a",
                    "field": "playerA",
                    "dataType": "player",
                    "type": "variable"
                },
                {
                    "text": "is friendly to",
                    "type": "constant"
                },
                {
                    "title": "Player b",
                    "field": "playerB",
                    "dataType": "player",
                    "type": "variable"
                }
            ],
            "type": "function",
            "category": "boolean",
            "uses": null
        },
        "createdAt": "2022-09-26T12:29:41.743Z"
    },
    {
        "_id": "5ab93d83ac7642f1fd397bbb",
        "title": "hide game suggestions",
        "key": "hideGameSuggestionsForPlayer",
        "data": {
            "type": "action",
            "category": "player",
            "fragments": [
                {
                    "type": "constant",
                    "text": "hide game suggestions for"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.743Z"
    },
    {
        "_id": "5ac7bd36de0d534adcf8d2fb",
        "title": "cos of an angle",
        "key": "cos",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "cos("
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Angle",
                    "field": "angle",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ")"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5ad038849c63a98ff2c4ab42",
        "title": "transform region to [ x, y, width, height ]",
        "key": "transformRegionDimensions",
        "data": {
            "type": "action",
            "category": "region",
            "fragments": [
                {
                    "type": "constant",
                    "text": "transform"
                },
                {
                    "type": "variable",
                    "dataType": "region",
                    "title": "Region",
                    "field": "region",
                    "extraData": {
                        "type": "region"
                    }
                },
                {
                    "type": "constant",
                    "text": "to ["
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Starting Position (X)",
                    "field": "x",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ","
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Starting Position (Y)",
                    "field": "y",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ","
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Width",
                    "field": "width",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ","
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Height",
                    "field": "height",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "]"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5af5e0b09201242e486787bc",
        "title": "make unit invisible to friendly players",
        "key": "makeUnitInvisibleToFriendlyPlayers",
        "data": {
            "type": "action",
            "category": "unit",
            "uses": [
                "playerTypes"
            ],
            "fragments": [
                {
                    "type": "constant",
                    "text": "make"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "invisible to friendly players"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5afb023389c7b786e8f9a1db",
        "title": "set entity attribute min value",
        "key": "setEntityAttributeMin",
        "data": {
            "type": "action",
            "category": "entity",
            "uses": [
                "attributeTypes"
            ],
            "fragments": [
                {
                    "type": "constant",
                    "text": "set min value of"
                },
                {
                    "type": "variable",
                    "dataType": "attributeType",
                    "title": "Attribute Type",
                    "field": "attribute",
                    "extraData": {
                        "type": "attributeType"
                    }
                },
                {
                    "type": "constant",
                    "text": "of"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "as"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Value",
                    "field": "value",
                    "extraData": {
                        "dataType": "number"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5b058c4bfa051159f154cb53",
        "title": "entity height",
        "key": "entityHeight",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "height of"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5b06f901ac924fc1a946546b",
        "title": "all units owned by player",
        "key": "allUnitsOwnedByPlayer",
        "data": {
            "type": "function",
            "category": "unitGroup",
            "fragments": [
                {
                    "type": "constant",
                    "text": "all units owned by"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5b4319fce9f5d50b6de92143",
        "title": "show invite friends modal to player",
        "key": "showInviteFriendsModal",
        "data": {
            "type": "action",
            "category": "ui",
            "fragments": [
                {
                    "type": "constant",
                    "text": "show invite friends modal to"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5ba3496acc55fcbcc1b2467b",
        "title": "show custom modal to player",
        "key": "showCustomModalToPlayer",
        "data": {
            "type": "action",
            "category": "ui",
            "fragments": [
                {
                    "type": "constant",
                    "text": "show"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Modal content",
                    "field": "htmlContent",
                    "extraData": {
                        "type": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "in modal to"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5bf7bd4ade80d7211ded7c57",
        "title": "last player selecting a dialogue option",
        "key": "getLastPlayerSelectingDialogueOption",
        "data": {
            "type": "function",
            "category": "player",
            "fragments": [
                {
                    "type": "constant",
                    "text": "last player selecting a dialogue option"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5dd429934c32a679f01c3979",
        "key": "playerAttributeMax",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "maximum value of",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "type": "attributeType"
                    },
                    "title": "Attribute",
                    "field": "attribute",
                    "dataType": "attributeType",
                    "type": "variable"
                },
                {
                    "text": "of",
                    "type": "constant"
                },
                {
                    "title": "Entity",
                    "field": "entity",
                    "dataType": "player",
                    "type": "variable"
                }
            ],
            "type": "function",
            "category": "number",
            "uses": null
        },
        "title": "player attribute max",
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109d7",
        "title": "last triggering item",
        "key": "getTriggeringItem",
        "data": {
            "type": "function",
            "category": "item",
            "fragments": [
                {
                    "type": "constant",
                    "text": "triggering item"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109e4",
        "title": "item particle",
        "key": "getItemParticle",
        "data": {
            "type": "function",
            "category": "particle",
            "uses": [
                "particleTypes"
            ],
            "fragments": [
                {
                    "type": "variable",
                    "dataType": "particleType",
                    "title": "Particle Type",
                    "field": "particleType",
                    "extraData": {
                        "type": "particleType"
                    }
                },
                {
                    "type": "constant",
                    "text": "of"
                },
                {
                    "type": "variable",
                    "dataType": "item",
                    "title": "Item",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109f2",
        "title": "all projectiles attached to unit",
        "key": "allProjectilesAttachedToUnit",
        "data": {
            "type": "function",
            "category": "projectileGroup",
            "fragments": [
                {
                    "type": "constant",
                    "text": "all projectiles attached to"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a2e",
        "title": "show overlay text for everyone",
        "key": "showUiTextForEveryone",
        "data": {
            "type": "action",
            "category": "ui",
            "fragments": [
                {
                    "type": "constant",
                    "text": "show"
                },
                {
                    "type": "variable",
                    "dataType": "updateUiText.target",
                    "title": "Target",
                    "field": "target"
                },
                {
                    "type": "constant",
                    "text": "for everyone"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a30",
        "title": "move debris",
        "key": "moveDebris",
        "data": {
            "type": "action",
            "category": "debris",
            "fragments": [
                {
                    "type": "constant",
                    "text": "move"
                },
                {
                    "type": "variable",
                    "dataType": "debris",
                    "title": "Debris",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "to"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Position",
                    "field": "position",
                    "extraData": {
                        "dataType": "position"
                    },
                    "entity": null
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a3c",
        "title": "for all items in a item group",
        "key": "forAllItems",
        "data": {
            "type": "action",
            "category": "loop",
            "fields": {
                "isActionContainer": true,
                "isClickable": true,
                "actionContainerKey": "actions"
            },
            "fragments": [
                {
                    "type": "constant",
                    "text": "for all items in"
                },
                {
                    "type": "variable",
                    "dataType": "itemGroup",
                    "title": "Item Group",
                    "field": "itemGroup"
                },
                {
                    "type": "constant",
                    "text": "do: [actions]",
                    "forModalOnly": true
                },
                {
                    "field": "actions",
                    "forDataOnly": true,
                    "defaultValue": []
                }
            ],
            "variables": [
                "selectedItem",
                "getSelectedItem"
            ]
        },
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a42",
        "title": "remove player from player group",
        "key": "removePlayerFromPlayerGroup",
        "data": {
            "fragments": [
                {
                    "text": " remove",
                    "type": "constant"
                },
                {
                    "title": "Player",
                    "field": "player",
                    "dataType": "player",
                    "type": "variable"
                },
                {
                    "text": "from",
                    "type": "constant"
                },
                {
                    "title": "Player group",
                    "field": "playerGroup",
                    "dataType": "playerGroup",
                    "type": "variable"
                }
            ],
            "type": "action",
            "category": "playerGroup",
            "uses": [
                "playerGroupVariables"
            ]
        },
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5a6ed7b3ae5a1ca244dd7ae7",
        "title": "player attribute",
        "key": "getPlayerAttribute",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "variable",
                    "dataType": "attributeType",
                    "title": "Attribute Type",
                    "field": "attribute",
                    "extraData": {
                        "type": "attributeType"
                    }
                },
                {
                    "type": "constant",
                    "text": "of"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5a88872dbfc117296c67e11e",
        "title": "player is controlled by human",
        "key": "playerIsControlledByHuman",
        "data": {
            "type": "function",
            "category": "boolean",
            "fragments": [
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                },
                {
                    "type": "constant",
                    "text": "is controlled by human"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5a9cd2400f258a37d00c0d85",
        "title": "set owner of a unit",
        "key": "setUnitOwner",
        "data": {
            "type": "action",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "set owner of"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "unit"
                },
                {
                    "type": "constant",
                    "text": "to"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5ad84f348e7c25ddc8980f12",
        "title": "map's width",
        "key": "getMapWidth",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "map's width"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5ade12e1d62df8ad3ced2109",
        "title": "update item quantity",
        "key": "updateItemQuantity",
        "data": {
            "type": "action",
            "category": "item",
            "fragments": [
                {
                    "type": "constant",
                    "text": "update"
                },
                {
                    "type": "variable",
                    "dataType": "item",
                    "title": "Item",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "'s quantity as"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Quantity",
                    "field": "quantity",
                    "extraData": {
                        "dataType": "number"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5afa911d25ed43f9c8c5009a",
        "title": "apply force on entity at angle (loss tolerant)",
        "key": "applyForceOnEntityAngleLT",
        "data": {
            "type": "action",
            "category": "entity",
            "fragments": [
                {
                    "type": "constant",
                    "text": "apply force"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Force",
                    "field": "force",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "on"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "at"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Angle",
                    "field": "angle",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "radians"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.744Z"
    },
    {
        "_id": "5afb187789c7b786e8f9a1e5",
        "data": {
            "type": "action",
            "category": "entity",
            "fragments": [
                {
                    "type": "constant",
                    "text": "set state of"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "to"
                },
                {
                    "type": "variable",
                    "dataType": "state",
                    "title": "State",
                    "field": "state",
                    "extraData": {
                        "type": "state"
                    }
                }
            ]
        },
        "key": "setEntityState",
        "title": "set entity state",
        "createdAt": "2022-09-26T12:29:41.745Z"
    },
    {
        "_id": "5b058c4bfa051159f154cb54",
        "title": "entity width",
        "key": "entityWidth",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "width of"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.745Z"
    },
    {
        "_id": "5b0bb094a91c51588c7ae7d9",
        "title": "hide minimap unit",
        "key": "hideUnitInPlayerMinimap",
        "data": {
            "type": "action",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "hide"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "unit"
                },
                {
                    "type": "constant",
                    "text": "in"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                },
                {
                    "type": "constant",
                    "text": "'s minimap"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.745Z"
    },
    {
        "_id": "5caf6f3a95c4c94b91c9b9f5",
        "title": "selected item type (from the loop)",
        "key": "selectedItemType",
        "data": {
            "type": "function",
            "category": "itemType",
            "fragments": [
                {
                    "type": "constant",
                    "text": "selected item type"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.745Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109ad",
        "title": "number of players",
        "key": "getPlayerCount",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "player count"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.745Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109d1",
        "title": "item currently held by unit",
        "key": "getItemCurrentlyHeldByUnit",
        "data": {
            "type": "function",
            "category": "item",
            "fragments": [
                {
                    "type": "constant",
                    "text": "item held by"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.745Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109f1",
        "title": "all items dropped on ground",
        "key": "allItemsDroppedOnGround",
        "data": {
            "type": "function",
            "category": "itemGroup",
            "fragments": [
                {
                    "type": "constant",
                    "text": "all items dropped on ground"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.745Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109f9",
        "title": "return",
        "key": "return",
        "data": {
            "type": "action",
            "category": "system",
            "fragments": [
                {
                    "type": "constant",
                    "text": "return without completing script"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.745Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a38",
        "title": "run script",
        "key": "runScript",
        "data": {
            "type": "action",
            "category": "script",
            "fragments": [
                {
                    "type": "constant",
                    "text": "run script"
                },
                {
                    "type": "variable",
                    "dataType": "script",
                    "title": "Script",
                    "field": "scriptName",
                    "extraData": {
                        "type": "script"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.745Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a3f",
        "title": "add unit to unit group",
        "key": "addUnitToUnitGroup",
        "data": {
            "fragments": [
                {
                    "text": "",
                    "type": "constant"
                },
                {
                    "title": "Undefined",
                    "field": "undefined",
                    "dataType": "undefined",
                    "type": "variable"
                },
                {
                    "title": "Undefined",
                    "field": "undefined",
                    "dataType": "undefined",
                    "type": "variable"
                },
                {
                    "title": "Undefined",
                    "field": "undefined",
                    "dataType": "undefined",
                    "type": "variable"
                }
            ],
            "type": "action",
            "category": "unitGroup",
            "uses": [
                "unitGroupVariables"
            ]
        },
        "createdAt": "2022-09-26T12:29:41.745Z"
    },
    {
        "_id": "5a8e5342b078e93550988367",
        "title": "human players",
        "key": "humanPlayers",
        "data": {
            "type": "function",
            "category": "playerGroup",
            "fragments": [
                {
                    "type": "constant",
                    "text": "human players"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.745Z"
    },
    {
        "_id": "5a8e5342b078e93550988368",
        "title": "last used item",
        "key": "lastUsedItem",
        "data": {
            "type": "function",
            "category": "item",
            "fragments": [
                {
                    "type": "constant",
                    "text": "last used item"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.745Z"
    },
    {
        "_id": "5afefc2f97ad57a08436fe42",
        "title": "last player custom input",
        "key": "playerCustomInput",
        "data": {
            "type": "function",
            "category": "string",
            "fragments": [
                {
                    "type": "constant",
                    "text": "last custom input of"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.745Z"
    },
    {
        "_id": "5c4ed94327098b4ee78d0989",
        "key": "arctan",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "arctan of",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "number"
                    },
                    "title": "Number",
                    "field": "number",
                    "dataType": "value",
                    "type": "variable"
                }
            ],
            "type": "function",
            "category": "number",
            "uses": null
        },
        "title": "arctan of angle",
        "createdAt": "2022-09-26T12:29:41.745Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109b9",
        "title": "concatenate",
        "key": "concat",
        "data": {
            "type": "function",
            "category": "string",
            "fragments": [
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Text A",
                    "field": "textA",
                    "extraData": {
                        "dataTypes": [
                            "string",
                            "number"
                        ]
                    }
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Text B",
                    "field": "textB",
                    "extraData": {
                        "dataTypes": [
                            "string",
                            "number"
                        ]
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.745Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109be",
        "title": "player name",
        "key": "getPlayerName",
        "data": {
            "type": "function",
            "category": "string",
            "fragments": [
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "'s name"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.745Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109d8",
        "title": "source item of projectile",
        "key": "getSourceItemOfProjectile",
        "data": {
            "type": "function",
            "category": "item",
            "fragments": [
                {
                    "type": "constant",
                    "text": "source item of"
                },
                {
                    "type": "variable",
                    "dataType": "projectile",
                    "title": "Projectile",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.745Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109e5",
        "title": "unit type of unit",
        "key": "getUnitTypeOfUnit",
        "data": {
            "type": "function",
            "category": "unitType",
            "fragments": [
                {
                    "type": "constant",
                    "text": "unit type of"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.745Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109ee",
        "title": "item type of item",
        "key": "getItemTypeOfItem",
        "data": {
            "type": "function",
            "category": "itemType",
            "fragments": [
                {
                    "type": "constant",
                    "text": "item type of"
                },
                {
                    "type": "variable",
                    "dataType": "item",
                    "title": "Item",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.745Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109f5",
        "title": "last triggering region",
        "key": "getTriggeringRegion",
        "data": {
            "type": "function",
            "category": "region",
            "fragments": [
                {
                    "type": "constant",
                    "text": "triggering region"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.745Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a01",
        "title": "player camera set zoom",
        "key": "playerCameraSetZoom",
        "data": {
            "type": "action",
            "category": "camera",
            "fragments": [
                {
                    "type": "constant",
                    "text": "set"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                },
                {
                    "type": "constant",
                    "text": "'s camera's zoom to"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Zoom Level",
                    "field": "zoom",
                    "extraData": {
                        "dataType": "number"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5a851da1d498b710108d0eae",
        "title": "math floor",
        "key": "mathFloor",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "floor of"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Value",
                    "field": "value",
                    "extraData": {
                        "dataType": "number"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5a9cd2400f258a37d00c0d86",
        "title": "set unit name",
        "key": "setUnitNameLabel",
        "data": {
            "type": "action",
            "category": "ui",
            "fragments": [
                {
                    "type": "constant",
                    "text": "set"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "unit"
                },
                {
                    "type": "constant",
                    "text": "name as"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Name",
                    "field": "name",
                    "extraData": {
                        "dataType": "string"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5ac25b16125316a59c7444b9",
        "title": "name of unit type",
        "key": "getUnitTypeName",
        "data": {
            "type": "function",
            "category": "string",
            "fragments": [
                {
                    "type": "constant",
                    "text": "name of"
                },
                {
                    "type": "variable",
                    "dataType": "unitType",
                    "title": "Unit Type",
                    "field": "unitType",
                    "extraData": {
                        "type": "unitType"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5ac39b82a322bc0c8d5608da",
        "title": "open shop for player",
        "key": "openShopForPlayer",
        "data": {
            "type": "action",
            "category": "shop",
            "uses": [
                "shop"
            ],
            "fragments": [
                {
                    "type": "constant",
                    "text": "open"
                },
                {
                    "type": "variable",
                    "dataType": "shop",
                    "title": "Shop",
                    "field": "shop",
                    "extraData": {
                        "type": "shop"
                    }
                },
                {
                    "type": "constant",
                    "text": "for"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5ad038849c63a98ff2c4ab44",
        "title": "y-coordinate of region",
        "key": "getYCoordinateOfRegion",
        "data": {
            "fragments": [
                {
                    "text": "y-coordinate of",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "type": "region"
                    },
                    "title": "Region",
                    "field": "region",
                    "dataType": "region",
                    "type": "variable"
                }
            ],
            "type": "function",
            "category": "number",
            "uses": null
        },
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5b2299c18e7632c111bf961c",
        "title": "square root",
        "key": "squareRoot",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "square root of"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Number",
                    "field": "number",
                    "extraData": {
                        "dataType": "number"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5bf3ce39518b36e4a426a864",
        "title": "close dialogue for player",
        "key": "closeDialogueForPlayer",
        "data": {
            "type": "action",
            "category": "dialogue",
            "uses": [
                "dialogue"
            ],
            "fragments": [
                {
                    "type": "constant",
                    "text": "close all dialogues for"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5c42ece3c548db372457187a",
        "title": "comment",
        "key": "comment",
        "data": {
            "type": "action",
            "category": "ui",
            "fragments": []
        },
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5d6531f8323e6bfd2352e227",
        "key": "createEntityAtPositionWithDimensions",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "create",
                    "type": "constant"
                },
                {
                    "title": "Entity",
                    "field": "entity",
                    "dataType": "entity",
                    "type": "variable"
                },
                {
                    "text": "at",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "position"
                    },
                    "title": "Position",
                    "field": "position",
                    "dataType": "value",
                    "type": "variable"
                },
                {
                    "text": "with height",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "number"
                    },
                    "title": "Height",
                    "field": "height",
                    "dataType": "value",
                    "type": "variable"
                },
                {
                    "text": "and width",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "number"
                    },
                    "title": "Width",
                    "field": "width",
                    "dataType": "value",
                    "type": "variable"
                },
                {
                    "text": "and facing angle",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "number"
                    },
                    "title": "Angle",
                    "field": "angle",
                    "dataType": "value",
                    "type": "variable"
                }
            ],
            "type": "action",
            "category": "entity",
            "uses": null
        },
        "title": "create entity at position",
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5da81dcd78b7be1365247614",
        "key": "increaseVariableByNumber",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "increase",
                    "type": "constant"
                },
                {
                    "title": "Variable",
                    "field": "variable",
                    "dataType": "variable",
                    "type": "variable"
                },
                {
                    "text": "by",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "number"
                    },
                    "title": "Number",
                    "field": "number",
                    "dataType": "value",
                    "type": "variable"
                }
            ],
            "type": "action",
            "category": "number",
            "uses": [
                "variables"
            ]
        },
        "title": "increase variable by number",
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109b6",
        "title": "mouse cursor position",
        "key": "getMouseCursorPosition",
        "data": {
            "type": "function",
            "category": "position",
            "fragments": [
                {
                    "type": "constant",
                    "text": "get"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                },
                {
                    "type": "constant",
                    "text": "'s mouse cursor position"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109c8",
        "title": "last overlapping unit",
        "key": "getLastOverlappingUnit",
        "data": {
            "type": "function",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "last overlapping unit"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109ef",
        "title": "all items in the game",
        "key": "allItems",
        "data": {
            "type": "function",
            "category": "itemGroup",
            "fragments": [
                {
                    "type": "constant",
                    "text": "all items in the game"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109f0",
        "title": "all items attached to unit",
        "key": "allItemsAttachedToUnit",
        "data": {
            "type": "function",
            "category": "itemGroup",
            "fragments": [
                {
                    "type": "constant",
                    "text": "all items attached to"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109f4",
        "title": "entire map region",
        "key": "getEntireMapRegion",
        "data": {
            "type": "function",
            "category": "region",
            "fragments": [
                {
                    "type": "constant",
                    "text": "entire map region"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a00",
        "title": "make player camera to track a unit",
        "key": "playerCameraTrackUnit",
        "data": {
            "type": "action",
            "category": "camera",
            "fragments": [
                {
                    "type": "constant",
                    "text": "make"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                },
                {
                    "type": "constant",
                    "text": "'s camera track"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "unit"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a04",
        "title": "make unit cast ability once",
        "key": "castAbility",
        "data": {
            "type": "action",
            "category": "unit",
            "uses": [
                "ability"
            ],
            "fragments": [
                {
                    "type": "constant",
                    "text": "make"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "cast"
                },
                {
                    "type": "variable",
                    "dataType": "ability",
                    "title": "Ability",
                    "field": "abilityName",
                    "extraData": {
                        "type": "ability"
                    }
                },
                {
                    "type": "constant",
                    "text": "once"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5a6a07ef6f3a8a4568724fda",
        "title": "player is hostile against another player",
        "key": "playersAreHostile",
        "data": {
            "fragments": [
                {
                    "text": "",
                    "type": "constant"
                },
                {
                    "title": "Player a",
                    "field": "playerA",
                    "dataType": "player",
                    "type": "variable"
                },
                {
                    "text": "is hostile against",
                    "type": "constant"
                },
                {
                    "title": "Player b",
                    "field": "playerB",
                    "dataType": "player",
                    "type": "variable"
                }
            ],
            "type": "function",
            "category": "boolean",
            "uses": null
        },
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5a81dbce63f73042380a0771",
        "title": "all items owned by unit",
        "key": "allItemsOwnedByUnit",
        "data": {
            "fragments": [
                {
                    "text": "all items owned by",
                    "type": "constant"
                },
                {
                    "title": "Entity",
                    "field": "entity",
                    "dataType": "unit",
                    "type": "variable"
                }
            ],
            "type": "function",
            "category": "itemGroup",
            "uses": null
        },
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5a8e5342b078e93550988366",
        "title": "computer players",
        "key": "computerPlayers",
        "data": {
            "type": "function",
            "category": "playerGroup",
            "fragments": [
                {
                    "type": "constant",
                    "text": "computer players"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5ab0072a20986a55f5a76501",
        "data": {
            "type": "action",
            "category": "entity",
            "fragments": [
                {
                    "type": "constant",
                    "text": "play"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                },
                {
                    "type": "variable",
                    "dataType": "animationType",
                    "title": "Animation",
                    "field": "animation",
                    "extraData": {
                        "type": "animationType"
                    }
                },
                {
                    "type": "constant",
                    "text": "animation"
                }
            ],
            "uses": [
                "animationTypes"
            ]
        },
        "key": "playEntityAnimation",
        "title": "play entity's animation",
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5ab931c043ac3e7c5072cba7",
        "title": "while",
        "key": "while",
        "data": {
            "type": "action",
            "category": "loop",
            "fields": {
                "isActionContainer": true,
                "isClickable": true,
                "actionContainerKey": "actions"
            },
            "fragments": [
                {
                    "type": "constant",
                    "text": "while"
                },
                {
                    "type": "variable",
                    "dataType": "conditions",
                    "title": "While Conditions",
                    "field": "conditions"
                },
                {
                    "type": "constant",
                    "text": "do: [actions]",
                    "forModalOnly": true
                },
                {
                    "field": "actions",
                    "forDataOnly": true,
                    "defaultValue": []
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.746Z"
    },
    {
        "_id": "5ae2e865873bcd3228598614",
        "title": "all entities in the game",
        "key": "allEntities",
        "data": {
            "type": "function",
            "category": "entityGroup",
            "fragments": [
                {
                    "type": "constant",
                    "text": "all entities in the game"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.747Z"
    },
    {
        "_id": "5af51c4050c3b22fd89db670",
        "title": "unit type of last purchased unit",
        "key": "lastPurchasedUnitTypetId",
        "data": {
            "type": "function",
            "category": "unitType",
            "fragments": [
                {
                    "type": "constant",
                    "text": "unit type of last purchased unit"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.747Z"
    },
    {
        "_id": "5afa911d25ed43f9c8c50099",
        "title": "apply force on entity XY",
        "key": "applyForceOnEntityXY",
        "data": {
            "type": "action",
            "category": "entity",
            "fragments": [
                {
                    "type": "constant",
                    "text": "apply force ( x:"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Force (X)",
                    "field": "force.x",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ", y:"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Force (Y)",
                    "field": "force.y",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ") on"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.747Z"
    },
    {
        "_id": "5b0bb094a91c51588c7ae7d8",
        "title": "show unit in minimap",
        "key": "showUnitInPlayerMinimap",
        "data": {
            "uses": null,
            "category": "unit",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "show"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "field": "unit",
                    "title": "Unit"
                },
                {
                    "type": "constant",
                    "text": "as"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "color",
                    "title": "Color",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "in"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "field": "player",
                    "title": "Player"
                },
                {
                    "type": "constant",
                    "text": "'s minimap"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.747Z"
    },
    {
        "_id": "5b5a025c1bbeb0314cd32858",
        "title": "save player data",
        "key": "savePlayerData",
        "data": {
            "type": "action",
            "category": "player",
            "fragments": [
                {
                    "type": "constant",
                    "text": "save"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                },
                {
                    "type": "constant",
                    "text": "'s data in database"
                }
            ],
            "tier": 2
        },
        "createdAt": "2022-09-26T12:29:41.747Z"
    },
    {
        "_id": "5bc9e742887d12a038fcfe5a",
        "title": "hide unit's name label from player",
        "key": "hideUnitNameLabelFromPlayer",
        "data": {
            "type": "action",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "hide"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "'s name label from"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.747Z"
    },
    {
        "_id": "5bcebf929218095d259672da",
        "title": "region overlaps with region",
        "key": "regionOverlapsWithRegion",
        "data": {
            "type": "function",
            "category": "boolean",
            "fragments": [
                {
                    "type": "variable",
                    "dataType": "region",
                    "title": "Region A",
                    "field": "regionA"
                },
                {
                    "type": "constant",
                    "text": "overlaps with"
                },
                {
                    "type": "variable",
                    "dataType": "region",
                    "title": "Region B",
                    "field": "regionB"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.747Z"
    },
    {
        "_id": "5cb028bc13f032fb4c51065c",
        "key": "allItemTypesInGame",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "all item types in game",
                    "type": "constant"
                }
            ],
            "type": "function",
            "category": "itemTypeGroup",
            "uses": null
        },
        "title": "all item types in game",
        "createdAt": "2022-09-26T12:29:41.747Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109cd",
        "title": "last triggering player",
        "key": "getTriggeringPlayer",
        "data": {
            "type": "function",
            "category": "player",
            "fragments": [
                {
                    "type": "constant",
                    "text": "triggering player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.747Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109df",
        "title": "selected debris (from the loop)",
        "key": "selectedDebris",
        "data": {
            "type": "function",
            "category": "debris",
            "fragments": [
                {
                    "type": "constant",
                    "text": "selected debris"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.747Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109eb",
        "title": "projectile type of projectile",
        "key": "getProjectileTypeOfProjectile",
        "data": {
            "type": "function",
            "category": "projectileType",
            "fragments": [
                {
                    "type": "constant",
                    "text": "projectile type of"
                },
                {
                    "type": "variable",
                    "dataType": "projectile",
                    "title": "Projectile",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.747Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109ed",
        "title": "All players including both human & computer players (AI)",
        "key": "allPlayers",
        "data": {
            "type": "function",
            "category": "playerGroup",
            "fragments": [
                {
                    "type": "constant",
                    "text": "All players including both human & computer players (AI)"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.747Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109f6",
        "title": "set player attribute",
        "key": "setPlayerAttribute",
        "data": {
            "type": "action",
            "category": "player",
            "fragments": [
                {
                    "type": "constant",
                    "text": "set"
                },
                {
                    "type": "variable",
                    "dataType": "attributeType",
                    "title": "Attribute Type",
                    "field": "attribute",
                    "extraData": {
                        "type": "attributeType"
                    }
                },
                {
                    "type": "constant",
                    "text": "of"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "as"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Value",
                    "field": "value",
                    "extraData": {
                        "dataType": "number"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.747Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109fb",
        "title": "update overlay text for player",
        "key": "updateUiTextForPlayer",
        "data": {
            "type": "action",
            "category": "ui",
            "fragments": [
                {
                    "type": "constant",
                    "text": "update"
                },
                {
                    "type": "variable",
                    "dataType": "updateUiText.target",
                    "title": "Target",
                    "field": "target"
                },
                {
                    "type": "constant",
                    "text": "with"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Text",
                    "field": "value",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "for"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.747Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a10",
        "title": "show unit's name label to hostile players",
        "key": "showUnitNameLabel",
        "data": {
            "type": "action",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "show"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "'s name label to hostile players"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.747Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a2a",
        "title": "close shop for player",
        "key": "closeShopForPlayer",
        "data": {
            "type": "action",
            "category": "shop",
            "fragments": [
                {
                    "type": "constant",
                    "text": "close shop for"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.747Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a33",
        "title": "attach debris to unit",
        "key": "attachDebrisToUnit",
        "data": {
            "type": "action",
            "category": "debris",
            "fragments": [
                {
                    "type": "constant",
                    "text": "attach"
                },
                {
                    "type": "variable",
                    "dataType": "debris",
                    "title": "Debris",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "to"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "unit"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.747Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a3e",
        "title": "repeat",
        "key": "repeat",
        "data": {
            "type": "action",
            "category": "loop",
            "fields": {
                "isActionContainer": true,
                "actionContainerKey": "actions"
            },
            "fragments": [
                {
                    "type": "constant",
                    "text": "repeat below actions"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Number",
                    "field": "count",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "times"
                },
                {
                    "field": "actions",
                    "forDataOnly": true,
                    "defaultValue": []
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.747Z"
    },
    {
        "_id": "5a740a1fd4f3dc4be1dd68a9",
        "title": "stop music for everyone",
        "key": "stopMusic",
        "data": {
            "type": "action",
            "category": "sound",
            "uses": [],
            "fragments": [
                {
                    "type": "constant",
                    "text": "stop music"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.747Z"
    },
    {
        "_id": "5a7b3a6b36b25c4be4de24bc",
        "title": "emit particle once at position",
        "key": "emitParticleOnceAtPosition",
        "data": {
            "type": "action",
            "category": "particle",
            "fragments": [
                {
                    "type": "constant",
                    "text": "emit particle"
                },
                {
                    "type": "variable",
                    "dataType": "particleType",
                    "title": "Particle Type",
                    "field": "particleType",
                    "extraData": {
                        "type": "particleType"
                    }
                },
                {
                    "type": "constant",
                    "text": "once at"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Position",
                    "field": "position",
                    "extraData": {
                        "dataType": "position"
                    },
                    "entity": null
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.747Z"
    },
    {
        "_id": "5ae0291d8d3cf47d8c50a839",
        "title": "set velocity of entity XY",
        "key": "setVelocityOfEntityXY",
        "data": {
            "type": "action",
            "category": "entity",
            "fragments": [
                {
                    "type": "constant",
                    "text": "set velocity ( x:"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Velocity (X)",
                    "field": "velocity.x",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ", y:"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Velocity (Y)",
                    "field": "velocity.y",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ") on"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.747Z"
    },
    {
        "_id": "5b4c7aacb093b86148a9c2e0",
        "title": "selected region (from the loop)",
        "key": "selectedRegion",
        "data": {
            "type": "function",
            "category": "region",
            "fragments": [
                {
                    "type": "constant",
                    "text": "selected region"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5bc9e742887d12a038fcfe5b",
        "title": "show unit's name label to player",
        "key": "showUnitNameLabelToPlayer",
        "data": {
            "type": "action",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "show"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "'s name label to"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5c00cb99ca5989219a946fa1",
        "title": "create item at position",
        "key": "spawnItem",
        "data": {
            "fragments": [
                {
                    "text": "create",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "type": "itemType"
                    },
                    "title": "Item type",
                    "field": "itemType",
                    "dataType": "itemType",
                    "type": "variable"
                },
                {
                    "text": "at",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "position"
                    },
                    "title": "Position",
                    "field": "position",
                    "dataType": "value",
                    "type": "variable"
                }
            ],
            "type": "action",
            "category": "item",
            "uses": [
                "itemTypes"
            ]
        },
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5c4a0d2e1d5aadb4b62e2962",
        "key": "createItemWithMaxQuantityAtPosition",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": " create",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "type": "itemType"
                    },
                    "title": "Item type",
                    "field": "itemType",
                    "dataType": "itemType",
                    "type": "variable"
                },
                {
                    "text": "with max quantity and place it at",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "position"
                    },
                    "title": "Position",
                    "field": "position",
                    "dataType": "value",
                    "type": "variable"
                }
            ],
            "type": "action",
            "category": "item",
            "uses": [
                "itemTypes"
            ]
        },
        "title": "create item with max quantity at position",
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5cac2c13d3ac9e04fdc05fbf",
        "title": "random item type from item type group",
        "key": "getRandomItemTypeFromItemTypeGroup",
        "data": {
            "type": "function",
            "category": "itemType",
            "fragments": [
                {
                    "type": "constant",
                    "text": "random item type from"
                },
                {
                    "type": "variable",
                    "dataType": "itemTypeGroup",
                    "title": "Item Type Group",
                    "field": "itemTypeGroup"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109c9",
        "title": "last overlapped unit",
        "key": "getLastOverlappedUnit",
        "data": {
            "type": "function",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "last overlapped unit"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a45",
        "title": "show menu",
        "key": "showMenu",
        "data": {
            "type": "action",
            "category": "ui",
            "fragments": [
                {
                    "type": "constant",
                    "text": "show"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                },
                {
                    "type": "constant",
                    "text": "the main menu"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5acdaaa76f04d9c598bf2113",
        "title": "start accepting players",
        "key": "startAcceptingPlayers",
        "data": {
            "type": "action",
            "tier": 2,
            "category": "player",
            "fragments": [
                {
                    "type": "constant",
                    "text": "start accepting players"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5ae2e6d9873bcd3228598611",
        "title": "for all entities in an entity group",
        "key": "forAllEntities",
        "data": {
            "type": "action",
            "category": "loop",
            "fields": {
                "isActionContainer": true,
                "isClickable": true,
                "actionContainerKey": "actions"
            },
            "fragments": [
                {
                    "type": "constant",
                    "text": "for all entities in"
                },
                {
                    "type": "variable",
                    "dataType": "entityGroup",
                    "title": "Entity Group",
                    "field": "entityGroup"
                },
                {
                    "type": "constant",
                    "text": "do: [actions]",
                    "forModalOnly": true
                },
                {
                    "field": "actions",
                    "forDataOnly": true,
                    "defaultValue": []
                }
            ],
            "variables": [
                "selectedEntity",
                "getSelectedEntity"
            ]
        },
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5af9465b9f0e902f646db11a",
        "title": "make player select unit",
        "key": "makePlayerSelectUnit",
        "data": {
            "type": "action",
            "category": "player",
            "fragments": [
                {
                    "type": "constant",
                    "text": "make"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                },
                {
                    "type": "constant",
                    "text": "select"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "unit"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5afb023389c7b786e8f9a1d9",
        "title": "set entity attribute",
        "key": "setEntityAttribute",
        "data": {
            "type": "action",
            "category": "entity",
            "uses": [
                "attributeTypes"
            ],
            "fragments": [
                {
                    "type": "constant",
                    "text": "set value of"
                },
                {
                    "type": "variable",
                    "dataType": "attributeType",
                    "title": "Attribute Type",
                    "field": "attribute",
                    "extraData": {
                        "type": "attributeType"
                    }
                },
                {
                    "type": "constant",
                    "text": "of"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "as"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Value",
                    "field": "value",
                    "extraData": {
                        "dataType": "number"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5b1e8ed28cb5f1ea9c85f999",
        "title": "last created item",
        "key": "getLastCreatedItem",
        "data": {
            "type": "function",
            "category": "item",
            "fragments": [
                {
                    "type": "constant",
                    "text": "last created item"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5bd2ecd93ec1ff6810e25980",
        "title": "last created projectile",
        "key": "getLastCreatedProjectile",
        "data": {
            "type": "function",
            "category": "projectile",
            "fragments": [
                {
                    "type": "constant",
                    "text": "last created projectile"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5caf7bb495c4c94b91c9b9f6",
        "title": "for all item types in an item type group",
        "key": "forAllItemTypes",
        "data": {
            "type": "action",
            "category": "loop",
            "fields": {
                "isActionContainer": true,
                "isClickable": true,
                "actionContainerKey": "actions"
            },
            "fragments": [
                {
                    "type": "constant",
                    "text": "for all item types in"
                },
                {
                    "type": "variable",
                    "dataType": "itemTypeGroup",
                    "title": "Item Type Group",
                    "field": "itemTypeGroup"
                },
                {
                    "type": "constant",
                    "text": "do: [actions]",
                    "forModalOnly": true
                },
                {
                    "field": "actions",
                    "forDataOnly": true,
                    "defaultValue": []
                }
            ],
            "variables": [
                "getSelectedItemType"
            ]
        },
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5d6762a02f969720a1280803",
        "key": "createEntityForPlayerAtPositionWithDimensions",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "create",
                    "type": "constant"
                },
                {
                    "title": "Entity",
                    "field": "entity",
                    "dataType": "entity",
                    "type": "variable",
                    "extraData": {
                        "showOnly": [
                            "unit",
                            "item",
                            "projectile"
                        ],
                        "types": [
                            "unitType",
                            "itemType",
                            "projectileType"
                        ]
                    }
                },
                {
                    "text": "for",
                    "type": "constant"
                },
                {
                    "title": "Player",
                    "field": "player",
                    "dataType": "player",
                    "type": "variable"
                },
                {
                    "text": "at",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "position",
                        "defaultText": "position"
                    },
                    "title": "Position",
                    "field": "position",
                    "dataType": "value",
                    "type": "variable"
                },
                {
                    "text": "with height",
                    "type": "constant"
                },
                {
                    "title": "Height",
                    "field": "height",
                    "dataType": "value",
                    "type": "variable",
                    "extraData": {
                        "dataType": "number",
                        "defaultText": "number      "
                    }
                },
                {
                    "text": "and width",
                    "type": "constant"
                },
                {
                    "title": "Width",
                    "field": "width",
                    "dataType": "value",
                    "type": "variable",
                    "extraData": {
                        "dataType": "number",
                        "defaultText": "number"
                    }
                },
                {
                    "text": "and facing angle",
                    "type": "constant"
                },
                {
                    "title": "Angle",
                    "field": "angle",
                    "dataType": "value",
                    "type": "variable",
                    "extraData": {
                        "dataType": "number",
                        "defaultText": "number"
                    }
                }
            ],
            "type": "action",
            "category": "unit",
            "uses": null
        },
        "title": "create unit at position with dimension",
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109ae",
        "title": "number of all units in the game",
        "key": "getUnitCount",
        "data": {
            "fragments": [
                {
                    "text": "unit count",
                    "type": "constant"
                }
            ],
            "type": "function",
            "category": "number",
            "uses": null
        },
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109c7",
        "title": "last touching unit",
        "key": "getLastTouchingUnit",
        "data": {
            "type": "function",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "last touching unit"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109d6",
        "title": "last overlapping item",
        "key": "getLastOverlappingItem",
        "data": {
            "type": "function",
            "category": "item",
            "fragments": [
                {
                    "type": "constant",
                    "text": "last overlapping item"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109d9",
        "title": "item in inventory slot of unit",
        "key": "getItemInInventorySlot",
        "data": {
            "type": "function",
            "category": "item",
            "fragments": [
                {
                    "type": "constant",
                    "text": "item in inventory slot"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "extraData": {
                        "dataType": "number"
                    },
                    "title": "Slot Number",
                    "field": "slot"
                },
                {
                    "type": "constant",
                    "text": "of"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109e0",
        "title": "last triggering debris",
        "key": "getTriggeringDebris",
        "data": {
            "type": "function",
            "category": "debris",
            "fragments": [
                {
                    "type": "constant",
                    "text": "triggering debris"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109f8",
        "title": "switch & case",
        "key": "endGame",
        "data": {
            "uses": null,
            "category": "system",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "In progress ..."
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109fa",
        "title": "update overlay text for everyone",
        "key": "updateUiTextForEveryone",
        "data": {
            "type": "action",
            "category": "ui",
            "fragments": [
                {
                    "type": "constant",
                    "text": "update"
                },
                {
                    "type": "variable",
                    "dataType": "updateUiText.target",
                    "title": "Target",
                    "field": "target"
                },
                {
                    "type": "constant",
                    "text": "with"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Text",
                    "field": "value",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "for everyone"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a39",
        "title": "for all units in a unit group",
        "key": "forAllUnits",
        "data": {
            "type": "action",
            "category": "loop",
            "fields": {
                "isActionContainer": true,
                "isClickable": true,
                "actionContainerKey": "actions"
            },
            "fragments": [
                {
                    "type": "constant",
                    "text": "for all units in"
                },
                {
                    "type": "variable",
                    "dataType": "unitGroup",
                    "title": "Unit Group",
                    "field": "unitGroup"
                },
                {
                    "type": "constant",
                    "text": "do: [actions]",
                    "forModalOnly": true
                },
                {
                    "field": "actions",
                    "forDataOnly": true,
                    "defaultValue": []
                }
            ],
            "variables": [
                "selectedUnit",
                "getSelectedUnit"
            ]
        },
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5a7b411c36b25c4be4de24ca",
        "title": "for all projectiles in a projectile group",
        "key": "forAllProjectiles",
        "data": {
            "type": "action",
            "category": "loop",
            "fields": {
                "isActionContainer": true,
                "actionContainerKey": "actions"
            },
            "fragments": [
                {
                    "type": "constant",
                    "text": "for all projectiles in"
                },
                {
                    "type": "variable",
                    "dataType": "projectileGroup",
                    "title": "Projectile Group",
                    "field": "projectileGroup"
                },
                {
                    "type": "constant",
                    "text": "do: [actions]",
                    "forModalOnly": true
                },
                {
                    "field": "actions",
                    "forDataOnly": true,
                    "defaultValue": []
                }
            ],
            "variables": [
                "selectedProjectile",
                "getSelectedProjectile"
            ]
        },
        "createdAt": "2022-09-26T12:29:41.748Z"
    },
    {
        "_id": "5a812a20dc46b345308c8f08",
        "title": "player type of player",
        "key": "playerTypeOfPlayer",
        "data": {
            "type": "function",
            "category": "playerType",
            "fragments": [
                {
                    "type": "constant",
                    "text": "player type of"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5a846e1d692b930c39c0dbfc",
        "title": "angle between positions",
        "key": "angleBetweenPositions",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "angle between positions"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Position A",
                    "field": "positionA",
                    "extraData": {
                        "dataType": "position"
                    },
                    "entity": null
                },
                {
                    "type": "constant",
                    "text": "and"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Position B",
                    "field": "positionB",
                    "extraData": {
                        "dataType": "position"
                    },
                    "entity": null
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5aafd29415d5b42a292e7524",
        "title": "stop music for player",
        "key": "stopMusicForPlayer",
        "data": {
            "type": "action",
            "category": "music",
            "uses": [
                "music"
            ],
            "fragments": [
                {
                    "type": "constant",
                    "text": "stop music for"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5abbc0c8d56f932d4e9fc003",
        "title": "make camera look at position",
        "key": "positionCamera",
        "data": {
            "type": "action",
            "category": "camera",
            "fragments": [
                {
                    "type": "constant",
                    "text": "make"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                },
                {
                    "type": "constant",
                    "text": "'s camera look at"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Position",
                    "field": "position",
                    "extraData": {
                        "dataType": "position"
                    },
                    "entity": null
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5ac3bcbe9e3afe37ecaa8536",
        "title": "create projectile at position",
        "key": "createProjectileAtPosition",
        "data": {
            "uses": null,
            "category": "projectile",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "create"
                },
                {
                    "type": "variable",
                    "dataType": "projectileType",
                    "field": "projectileType",
                    "title": "Projectile type",
                    "extraData": {
                        "type": "projectileType"
                    }
                },
                {
                    "type": "constant",
                    "text": "at"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "position",
                    "title": "Position",
                    "extraData": {
                        "dataType": "position"
                    }
                },
                {
                    "type": "constant",
                    "text": "and apply"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "force",
                    "title": "Force",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "force at"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "angle",
                    "title": "Angle",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "degrees"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5ad038849c63a98ff2c4ab45",
        "title": "width of region",
        "key": "getWidthOfRegion",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "width of"
                },
                {
                    "type": "variable",
                    "dataType": "region",
                    "title": "Region",
                    "field": "region",
                    "extraData": {
                        "type": "region"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5ad9961f81b15e124656c473",
        "title": "show menu and select currently connected server",
        "key": "showMenuAndSelectCurrentServer",
        "data": {
            "type": "action",
            "category": "ui",
            "fragments": [
                {
                    "type": "constant",
                    "text": "show menu for"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                },
                {
                    "type": "constant",
                    "text": "and select the currently connected server"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5ade2fec1263af32b9689e24",
        "title": "source unit of projectile",
        "key": "getSourceUnitOfProjectile",
        "data": {
            "type": "function",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "source unit of"
                },
                {
                    "type": "variable",
                    "dataType": "projectile",
                    "title": "Projectile",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5ae6d89bb6d0730568d9b37f",
        "title": "set fading text of unit",
        "key": "setFadingTextOfUnit",
        "data": {
            "uses": null,
            "category": "unit",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "set fading text of"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "field": "unit",
                    "title": "Unit"
                },
                {
                    "type": "constant",
                    "text": "as"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "text",
                    "title": "Text",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "in"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "color",
                    "title": "Color",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "color"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5af11d9e1930dc2919249602",
        "title": "change scale of entity's body",
        "key": "changeScaleOfEntityBody",
        "data": {
            "type": "action",
            "category": "entity",
            "fragments": [
                {
                    "type": "constant",
                    "text": "change scale of"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "'s body to"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Scale",
                    "field": "scale",
                    "extraData": {
                        "dataType": "number"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5b04f28af361ee7fed149359",
        "title": "entity bounds",
        "key": "entityBounds",
        "data": {
            "type": "function",
            "category": "region",
            "fragments": [
                {
                    "type": "constant",
                    "text": "bounds of"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5b07bf5c21478034816f2fc6",
        "title": "entity attribute min",
        "key": "entityAttributeMin",
        "data": {
            "fragments": [
                {
                    "text": "minimum value of",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "type": "attributeType"
                    },
                    "title": "Attribute",
                    "field": "attribute",
                    "dataType": "attributeType",
                    "type": "variable"
                },
                {
                    "text": "of",
                    "type": "constant"
                },
                {
                    "title": "Entity",
                    "field": "entity",
                    "dataType": "entity",
                    "type": "variable"
                }
            ],
            "type": "function",
            "category": "number",
            "uses": null
        },
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5b4c57dfb093b86148a9c2db",
        "title": "for all regions in a region group",
        "key": "forAllRegions",
        "data": {
            "type": "action",
            "category": "loop",
            "fields": {
                "isActionContainer": true,
                "actionContainerKey": "actions"
            },
            "fragments": [
                {
                    "type": "constant",
                    "text": "for all regions in"
                },
                {
                    "type": "variable",
                    "dataType": "regionGroup",
                    "title": "Region Group",
                    "field": "regionGroup"
                },
                {
                    "type": "constant",
                    "text": "do: [actions]",
                    "forModalOnly": true
                },
                {
                    "field": "actions",
                    "forDataOnly": true,
                    "defaultValue": []
                }
            ],
            "variables": [
                "selectedRegion"
            ]
        },
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5b767d83a0b0963db0892910",
        "title": "rotate entity to radians (loss tolerant)",
        "key": "rotateEntityToRadiansLT",
        "data": {
            "type": "action",
            "category": "entity",
            "fragments": [
                {
                    "type": "constant",
                    "text": "rotate"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "to"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Radians",
                    "field": "radians",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "radians"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5ba5335346581483aac463d8",
        "title": "convert string to number",
        "key": "stringToNumber",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "convert"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "String Value",
                    "field": "value",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "to number"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5c585bf6100be989fe9cec5c",
        "key": "setPlayerAttributeMax",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "  set max value of",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "type": "attributeType"
                    },
                    "title": "Attribute type",
                    "field": "attributeType",
                    "dataType": "attributeType",
                    "type": "variable"
                },
                {
                    "text": "of",
                    "type": "constant"
                },
                {
                    "title": "Player",
                    "field": "player",
                    "dataType": "player",
                    "type": "variable"
                },
                {
                    "text": "as",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "number"
                    },
                    "title": "Number",
                    "field": "number",
                    "dataType": "value",
                    "type": "variable"
                }
            ],
            "type": "action",
            "category": "player",
            "uses": [
                "playerTypes"
            ]
        },
        "title": "set player attribute max value",
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5c5861e2100be989fe9d63ac",
        "key": "setPlayerAttributeRegenerationRate",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "set regeneration rate of",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "type": "attributeType"
                    },
                    "title": "Attribute type",
                    "field": "attributeType",
                    "dataType": "attributeType",
                    "type": "variable"
                },
                {
                    "text": "of",
                    "type": "constant"
                },
                {
                    "title": "Player",
                    "field": "player",
                    "dataType": "player",
                    "type": "variable"
                },
                {
                    "text": "as",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "number"
                    },
                    "title": "Number",
                    "field": "number",
                    "dataType": "value",
                    "type": "variable"
                }
            ],
            "type": "action",
            "category": "player",
            "uses": [
                "playerTypes"
            ]
        },
        "title": "set player attribute regenration rate",
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5caf5871778852e95ce080c5",
        "title": "quantity of unit type in unit type group",
        "key": "getQuantityOfUnitTypeInUnitTypeGroup",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "quantity of"
                },
                {
                    "type": "variable",
                    "dataType": "unitType",
                    "title": "Unit Type",
                    "field": "unitType",
                    "extraData": {
                        "type": "unitType"
                    }
                },
                {
                    "type": "constant",
                    "text": "in"
                },
                {
                    "type": "variable",
                    "dataType": "unitTypeGroup",
                    "title": "Unit Type Group",
                    "field": "unitTypeGroup"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5caf6eaa95c4c94b91c9b9f2",
        "title": "for all unit types in a unit type group",
        "key": "forAllUnitTypes",
        "data": {
            "type": "action",
            "category": "loop",
            "fields": {
                "isActionContainer": true,
                "isClickable": true,
                "actionContainerKey": "actions"
            },
            "fragments": [
                {
                    "type": "constant",
                    "text": "for all unit types in"
                },
                {
                    "type": "variable",
                    "dataType": "unitTypeGroup",
                    "title": "Unit Type Group",
                    "field": "unitTypeGroup"
                },
                {
                    "type": "constant",
                    "text": "do: [actions]",
                    "forModalOnly": true
                },
                {
                    "field": "actions",
                    "forDataOnly": true,
                    "defaultValue": []
                }
            ],
            "variables": [
                "getSelectedUnitType"
            ]
        },
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5d105ecb27098b4ee7b3ebdb",
        "key": "centerOfRegion",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "center of",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "type": "region"
                    },
                    "title": "Region",
                    "field": "region",
                    "dataType": "region",
                    "type": "variable"
                }
            ],
            "type": "function",
            "category": "position",
            "uses": null
        },
        "title": "center of region",
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5d1ccc132109a9a4436857eb",
        "key": "entityLastRaycastCollisionPosition",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "last raycast collision position of",
                    "type": "constant"
                },
                {
                    "title": "Entity",
                    "field": "entity",
                    "dataType": "entity",
                    "type": "variable"
                }
            ],
            "type": "function",
            "category": "position",
            "uses": null
        },
        "title": "get entity last raycast collision position",
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5da8b116df72b61652da2b5e",
        "key": "decreaseVariableByNumber",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "decrease",
                    "type": "constant"
                },
                {
                    "title": "Variable",
                    "field": "variable",
                    "dataType": "variable",
                    "type": "variable"
                },
                {
                    "text": "by",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "number"
                    },
                    "title": "Number",
                    "field": "number",
                    "dataType": "value",
                    "type": "variable"
                }
            ],
            "type": "action",
            "category": "number",
            "uses": [
                "variables"
            ]
        },
        "title": "decrease variable by number",
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109b8",
        "title": "y-coordinate of position",
        "key": "getPositionY",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "y-coordinate of"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "extraData": {
                        "dataType": "position"
                    },
                    "title": "Position",
                    "field": "position",
                    "entity": null
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109bf",
        "title": "last ability casting unit",
        "key": "getLastCastingUnit",
        "data": {
            "fragments": [
                {
                    "text": "last ability casting unit",
                    "type": "constant"
                }
            ],
            "type": "function",
            "category": "unit",
            "uses": null
        },
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109c0",
        "title": "last touched unit",
        "key": "getLastTouchedUnit",
        "data": {
            "type": "function",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "last touched unit"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.749Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109e2",
        "title": "selected particle",
        "key": "selectedParticle",
        "data": {
            "type": "function",
            "category": "particle",
            "fragments": [
                {
                    "type": "constant",
                    "text": "selected particle"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109e7",
        "title": "all units attached to unit",
        "key": "allUnitsAttachedToUnit",
        "data": {
            "type": "function",
            "category": "unitGroup",
            "fragments": [
                {
                    "type": "constant",
                    "text": "all units attached to"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109f7",
        "title": "kick player",
        "key": "kickPlayer",
        "data": {
            "type": "action",
            "category": "player",
            "fragments": [
                {
                    "type": "constant",
                    "text": "kick"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "out of the game"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a3b",
        "title": "for all players in a player group",
        "key": "forAllPlayers",
        "data": {
            "type": "action",
            "category": "loop",
            "fields": {
                "isActionContainer": true,
                "isClickable": true,
                "actionContainerKey": "actions"
            },
            "fragments": [
                {
                    "type": "constant",
                    "text": "for all players in"
                },
                {
                    "type": "variable",
                    "dataType": "playerGroup",
                    "title": "Player Group",
                    "field": "playerGroup"
                },
                {
                    "type": "constant",
                    "text": "do: [actions]",
                    "forModalOnly": true
                },
                {
                    "field": "actions",
                    "forDataOnly": true,
                    "defaultValue": []
                }
            ],
            "variables": [
                "selectedPlayer",
                "getSelectedPlayer"
            ]
        },
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a40",
        "title": "remove unit from unit group",
        "key": "removeUnitFromUnitGroup",
        "data": {
            "fragments": [
                {
                    "text": " remove",
                    "type": "constant"
                },
                {
                    "title": "Unit",
                    "field": "unit",
                    "dataType": "unit",
                    "type": "variable"
                },
                {
                    "text": "from",
                    "type": "constant"
                },
                {
                    "title": "Unit group",
                    "field": "unitGroup",
                    "dataType": "unitGroup",
                    "type": "variable"
                }
            ],
            "type": "action",
            "category": "unitGroup",
            "uses": [
                "unitGroupVariables"
            ]
        },
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5a6a07ef6f3a8a4568724fd8",
        "title": "player is neutral to another player",
        "key": "playersAreNeutral",
        "data": {
            "fragments": [
                {
                    "text": "",
                    "type": "constant"
                },
                {
                    "title": "Player a",
                    "field": "playerA",
                    "dataType": "player",
                    "type": "variable"
                },
                {
                    "text": "is neutral to",
                    "type": "constant"
                },
                {
                    "title": "Player b",
                    "field": "playerB",
                    "dataType": "player",
                    "type": "variable"
                }
            ],
            "type": "function",
            "category": "boolean",
            "uses": null
        },
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5a812b0adc46b345308c8f0a",
        "title": "distance between positions",
        "key": "distanceBetweenPositions",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "distance between"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Position A",
                    "field": "positionA",
                    "extraData": {
                        "dataType": "position"
                    },
                    "entity": null
                },
                {
                    "type": "constant",
                    "text": "and"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Position B",
                    "field": "positionB",
                    "extraData": {
                        "dataType": "position"
                    },
                    "entity": null
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5aa36272d538e457a1755601",
        "title": "flip entity sprite",
        "key": "flipEntitySprite",
        "data": {
            "type": "action",
            "category": "entity",
            "fragments": [
                {
                    "type": "constant",
                    "text": "flip"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "'s sprite"
                },
                {
                    "type": "variable",
                    "dataType": "flip",
                    "title": "Flip Direction",
                    "field": "flip",
                    "extraData": {
                        "type": "flip"
                    }
                },
                {
                    "type": "constant",
                    "text": "from its original position"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5af5e0b09201242e486787ba",
        "title": "make unit invisible to neutral players",
        "key": "makeUnitInvisibleToNeutralPlayers",
        "data": {
            "type": "action",
            "category": "unit",
            "uses": [
                "playerTypes"
            ],
            "fragments": [
                {
                    "type": "constant",
                    "text": "make"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "invisible to neutral players"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5b07bf5c21478034816f2fc5",
        "title": "entity attribute max",
        "key": "entityAttributeMax",
        "data": {
            "fragments": [
                {
                    "text": "maximum value of",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "type": "attributeType"
                    },
                    "title": "Attribute",
                    "field": "attribute",
                    "dataType": "attributeType",
                    "type": "variable"
                },
                {
                    "text": "of",
                    "type": "constant"
                },
                {
                    "title": "Entity",
                    "field": "entity",
                    "dataType": "entity",
                    "type": "variable"
                }
            ],
            "type": "function",
            "category": "number",
            "uses": null
        },
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5b152d231feed9af3c43451b",
        "title": "entity position",
        "key": "getEntityPosition",
        "data": {
            "type": "function",
            "category": "position",
            "fragments": [
                {
                    "type": "constant",
                    "text": "position of"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5b62a6754af6083c8cbaa31c",
        "title": "player has adblock enabled",
        "key": "playerHasAdblockEnabled",
        "data": {
            "type": "function",
            "category": "boolean",
            "fragments": [
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                },
                {
                    "type": "constant",
                    "text": "has adblock enabled"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5bc57c6b384d3e69699c297f",
        "title": "save unit data",
        "key": "saveUnitData",
        "data": {
            "type": "action",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "save"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "unit"
                },
                {
                    "type": "constant",
                    "text": "'s data in database (it'll be assigned to its owner player's data)"
                }
            ],
            "tier": 2
        },
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5bfcf26682fad89c4070accb",
        "title": "apply torque on entity",
        "key": "applyTorqueOnEntity",
        "data": {
            "type": "action",
            "category": "entity",
            "fragments": [
                {
                    "type": "constant",
                    "text": "apply torque"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Torque",
                    "field": "torque",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "on"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5dba9989dde90be331f63e93",
        "key": "giveNewItemToUnit",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "create a new",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "type": "itemType"
                    },
                    "title": "Item type",
                    "field": "itemType",
                    "dataType": "itemType",
                    "type": "variable"
                },
                {
                    "text": "and give it to a",
                    "type": "constant"
                },
                {
                    "title": "Unit",
                    "field": "unit",
                    "dataType": "unit",
                    "type": "variable"
                }
            ],
            "type": "action",
            "category": "item",
            "uses": [
                "itemTypes"
            ]
        },
        "title": "give new item to unit",
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5dd4de2aeb9459cf2a776180",
        "key": "playerAttributeMin",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "minimum value of",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "type": "attributeType"
                    },
                    "title": "Attribute",
                    "field": "attribute",
                    "dataType": "attributeType",
                    "type": "variable"
                },
                {
                    "text": "of",
                    "type": "constant"
                },
                {
                    "title": "Entity",
                    "field": "entity",
                    "dataType": "player",
                    "type": "variable"
                }
            ],
            "type": "function",
            "category": "number",
            "uses": null
        },
        "title": "player attribute min",
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a07",
        "title": "start using item",
        "key": "startUsingItem",
        "data": {
            "type": "action",
            "category": "item",
            "fragments": [
                {
                    "type": "constant",
                    "text": "use"
                },
                {
                    "type": "variable",
                    "dataType": "item",
                    "title": "Item",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "continuously until stopped"
                },
                {
                    "field": "hasFixedCSP",
                    "forDataOnly": true
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a28",
        "title": "move entity",
        "key": "moveEntity",
        "data": {
            "type": "action",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "move"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "to"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Position",
                    "field": "position",
                    "extraData": {
                        "dataType": "position",
                        "defaultText": "position"
                    },
                    "entity": null
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5aba8526bb3a7bbd70055083",
        "title": "for loop",
        "key": "for",
        "data": {
            "type": "action",
            "category": "loop",
            "uses": [
                "variables"
            ],
            "fields": {
                "isActionContainer": true,
                "isClickable": true,
                "actionContainerKey": "actions"
            },
            "fragments": [
                {
                    "type": "constant",
                    "text": "for"
                },
                {
                    "type": "variable",
                    "dataType": "variable",
                    "title": "Variable",
                    "field": "variableName"
                },
                {
                    "type": "constant",
                    "text": "from"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Start Value",
                    "field": "start",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "to"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Stop Value",
                    "field": "stop",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ", do [actions]",
                    "forModalOnly": true
                },
                {
                    "field": "actions",
                    "forDataOnly": true,
                    "defaultValue": []
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5ac7bd36de0d534adcf8d2fa",
        "title": "sin of an angle",
        "key": "sin",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "sin("
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Angle",
                    "field": "angle",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ")"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5ad038849c63a98ff2c4ab43",
        "title": "x-coordinate of region",
        "key": "getXCoordinateOfRegion",
        "data": {
            "fragments": [
                {
                    "text": "x-coordinate of",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "type": "region"
                    },
                    "title": "Region",
                    "field": "region",
                    "dataType": "region",
                    "type": "variable"
                }
            ],
            "type": "function",
            "category": "number",
            "uses": null
        },
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5ad9961f81b15e124656c472",
        "title": "show menu and select best server",
        "key": "showMenuAndSelectBestServer",
        "data": {
            "type": "action",
            "category": "ui",
            "fragments": [
                {
                    "type": "constant",
                    "text": "show menu for"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                },
                {
                    "type": "constant",
                    "text": "and select the best server"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5adf76eae391aa406596ab4e",
        "title": "entity variable",
        "key": "getValueOfEntityVariable",
        "data": {
            "type": "function",
            "fragments": [
                {
                    "type": "variable",
                    "dataType": "entityVariable",
                    "title": "Entity Variable",
                    "field": "variable"
                },
                {
                    "type": "constant",
                    "text": "of"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.750Z"
    },
    {
        "_id": "5ae2e969873bcd3228598617",
        "title": "entities in region",
        "key": "entitiesInRegion",
        "data": {
            "type": "function",
            "category": "entityGroup",
            "fragments": [
                {
                    "type": "constant",
                    "text": "all entities in"
                },
                {
                    "type": "variable",
                    "dataType": "region",
                    "title": "Region",
                    "field": "region"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5afa911d25ed43f9c8c50098",
        "title": "apply force on entity XY relative to its facing angle",
        "key": "applyForceOnEntityXYRelative",
        "data": {
            "type": "action",
            "category": "entity",
            "fragments": [
                {
                    "type": "constant",
                    "text": "apply force ( x:"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Force (X)",
                    "field": "force.x",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ", y:"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Force (Y)",
                    "field": "force.y",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ") on"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "relative to its facing angle"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5afa911d25ed43f9c8c5009b",
        "title": "apply force on entity XY (loss tolerant)",
        "key": "applyForceOnEntityXYLT",
        "data": {
            "type": "action",
            "category": "entity",
            "fragments": [
                {
                    "type": "constant",
                    "text": "apply force ( x:"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Force (X)",
                    "field": "force.x",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ", y:"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Force (Y)",
                    "field": "force.y",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ") on"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5afb1a9089c7b786e8f9a1e6",
        "title": "attach entity to entity",
        "key": "attachEntityToEntity",
        "data": {
            "type": "action",
            "category": "entity",
            "fragments": [
                {
                    "type": "constant",
                    "text": "attach"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "to"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Targeting Entity",
                    "field": "targetingEntity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5afcf49859f4ced8c84ae2f0",
        "title": "entity exists",
        "key": "entityExists",
        "data": {
            "type": "function",
            "category": "boolean",
            "fragments": [
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "exists"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5b22aaba8e7632c111bf9628",
        "title": "name of region",
        "key": "nameOfRegion",
        "data": {
            "type": "function",
            "category": "string",
            "fragments": [
                {
                    "type": "constant",
                    "text": "name of"
                },
                {
                    "type": "variable",
                    "dataType": "region",
                    "title": "Region",
                    "field": "region"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5b5ef02540c12d363056685a",
        "title": "undefined value",
        "key": "undefinedValue",
        "data": {
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": "undefined value"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5bd3137e743cb4e8350e078d",
        "title": "ban player from chat",
        "key": "banPlayerFromChat",
        "data": {
            "type": "action",
            "category": "player",
            "fragments": [
                {
                    "type": "constant",
                    "text": "ban"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                },
                {
                    "type": "constant",
                    "text": "from chat"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5c02090b70cd8c0246feda42",
        "title": "get entity velocity y",
        "key": "getEntityVelocityY",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "get velocity Y of"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5d6e268827098b4ee7c0c7ae",
        "key": "allUnitTypesInGame",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "all unit types in game",
                    "type": "constant"
                }
            ],
            "type": "function",
            "category": "unitTypeGroup",
            "uses": null
        },
        "title": "all unit types in game",
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109b7",
        "title": "x-coordinate of position",
        "key": "getPositionX",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "x-coordinate of"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Position",
                    "field": "position",
                    "extraData": {
                        "dataType": "position"
                    },
                    "entity": null
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109bd",
        "title": "random position in region",
        "key": "getRandomPositionInRegion",
        "data": {
            "type": "function",
            "category": "position",
            "fragments": [
                {
                    "type": "constant",
                    "text": "random position in"
                },
                {
                    "type": "variable",
                    "dataType": "region",
                    "title": "Region",
                    "field": "region"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109db",
        "title": "last triggering projectile",
        "key": "getTriggeringProjectile",
        "data": {
            "type": "function",
            "category": "projectile",
            "fragments": [
                {
                    "type": "constant",
                    "text": "triggering projectile"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109e3",
        "title": "unit particle",
        "key": "getUnitParticle",
        "data": {
            "type": "function",
            "category": "particle",
            "uses": [
                "particleTypes"
            ],
            "fragments": [
                {
                    "type": "variable",
                    "dataType": "particleType",
                    "title": "Particle Type",
                    "field": "particleType",
                    "extraData": {
                        "type": "particleType"
                    }
                },
                {
                    "type": "constant",
                    "text": "of"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a1a",
        "title": "change unit type",
        "key": "changeUnitType",
        "data": {
            "type": "action",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "change"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "'s unit type to"
                },
                {
                    "type": "variable",
                    "dataType": "unitType",
                    "title": "Unit Type",
                    "field": "unitType",
                    "extraData": {
                        "type": "unitType"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a3a",
        "title": "for all debris in a debris group",
        "key": "forAllDebris",
        "data": {
            "type": "action",
            "category": "loop",
            "fields": {
                "isActionContainer": true,
                "actionContainerKey": "actions"
            },
            "fragments": [
                {
                    "type": "constant",
                    "text": "for all debris in"
                },
                {
                    "type": "variable",
                    "dataType": "debrisGroup",
                    "title": "Debris Group",
                    "field": "debrisGroup"
                },
                {
                    "type": "constant",
                    "text": "do: [actions]",
                    "forModalOnly": true
                },
                {
                    "field": "actions",
                    "forDataOnly": true,
                    "forAllDebris": []
                }
            ],
            "variables": [
                "selectedDebris",
                "getSelectedDebris"
            ]
        },
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a41",
        "title": "add player to player group",
        "key": "addPlayerToPlayerGroup",
        "data": {
            "fragments": [
                {
                    "text": "",
                    "type": "constant"
                },
                {
                    "title": "Undefined",
                    "field": "undefined",
                    "dataType": "undefined",
                    "type": "variable"
                },
                {
                    "title": "Undefined",
                    "field": "undefined",
                    "dataType": "undefined",
                    "type": "variable"
                },
                {
                    "title": "Undefined",
                    "field": "undefined",
                    "dataType": "undefined",
                    "type": "variable"
                }
            ],
            "type": "action",
            "category": "playerGroup",
            "uses": [
                "playerGroupVariables"
            ]
        },
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5aaff51b20986a55f5a764fd",
        "title": "play music for player repeatedly",
        "key": "playMusicForPlayerRepeatedly",
        "data": {
            "type": "action",
            "category": "music",
            "uses": [
                "music"
            ],
            "fragments": [
                {
                    "type": "constant",
                    "text": "play music"
                },
                {
                    "type": "variable",
                    "dataType": "music",
                    "title": "Music",
                    "field": "music",
                    "extraData": {
                        "type": "music"
                    }
                },
                {
                    "type": "constant",
                    "text": "for"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                },
                {
                    "type": "constant",
                    "text": "repeatedly"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5ab93d65ac7642f1fd397bba",
        "title": "show game suggestions",
        "key": "showGameSuggestionsForPlayer",
        "data": {
            "type": "action",
            "category": "player",
            "fragments": [
                {
                    "type": "constant",
                    "text": "show game suggestions for"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5ae086614b7bc3aac0e741eb",
        "title": "is position in wall",
        "key": "isPositionInWall",
        "data": {
            "type": "function",
            "category": "boolean",
            "fragments": [
                {
                    "type": "constant",
                    "text": "is position ( x:"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Position (X)",
                    "field": "position.x",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ", y:"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Position (Y)",
                    "field": "position.y",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ") inside wall"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5ae7f60fd598d03874424646",
        "title": "entities in region[width, height] in front of entity at distance",
        "key": "entitiesInRegionInFrontOfEntityAtDistance",
        "data": {
            "type": "function",
            "category": "entityGroup",
            "fragments": [
                {
                    "type": "constant",
                    "text": "region [width:"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Width",
                    "extraData": {
                        "dataType": "number"
                    },
                    "field": "width"
                },
                {
                    "type": "constant",
                    "text": ", height:"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Height",
                    "extraData": {
                        "dataType": "number"
                    },
                    "field": "height"
                },
                {
                    "type": "constant",
                    "text": "] in front of"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "at a distance"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Distance",
                    "extraData": {
                        "dataType": "number"
                    },
                    "field": "distance"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5afb023389c7b786e8f9a1dc",
        "title": "set entity attribute regeneration rate",
        "key": "setEntityAttributeRegenerationRate",
        "data": {
            "uses": [
                "attributeTypes"
            ],
            "category": "entity",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "set regeneration rate of"
                },
                {
                    "type": "variable",
                    "dataType": "attributeType",
                    "field": "attribute",
                    "title": "Attribute",
                    "extraData": {
                        "type": "attributeType"
                    }
                },
                {
                    "type": "constant",
                    "text": "of"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "field": "entity",
                    "title": "Entity"
                },
                {
                    "type": "constant",
                    "text": "as"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "value",
                    "title": "Value",
                    "extraData": {
                        "dataType": "number"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5b5ab62c791f3003d0d67b0f",
        "title": "player's last played time",
        "key": "lastPlayedTimeOfPlayer",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "get last played time of"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.751Z"
    },
    {
        "_id": "5b62ccbb0070faa56643d2fb",
        "title": "make unit select item at slot",
        "key": "makeUnitSelectItemAtSlot",
        "data": {
            "type": "action",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "make"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "unit",
                    "extraData": {
                        "type": "selectedUnit"
                    }
                },
                {
                    "type": "constant",
                    "text": "select inventory slot"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Slot Index",
                    "field": "slotIndex",
                    "extraData": {
                        "dataType": "number"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.752Z"
    },
    {
        "_id": "5b8ffde4f71c98eca1465061",
        "title": "name of item type",
        "key": "getItemTypeName",
        "data": {
            "type": "function",
            "category": "string",
            "fragments": [
                {
                    "type": "constant",
                    "text": "name of"
                },
                {
                    "type": "variable",
                    "dataType": "itemType",
                    "title": "Item Type",
                    "field": "itemType",
                    "extraData": {
                        "type": "itemType"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.752Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109bb",
        "title": "maximum value between two numbers",
        "key": "getMax",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "maximum value between ("
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "1st Number",
                    "field": "num1",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ","
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "2nd Number",
                    "field": "num2",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ")"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.752Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109c2",
        "title": "last created unit",
        "key": "getLastCreatedUnit",
        "data": {
            "type": "function",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "last created unit"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.752Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109bc",
        "title": "rotate speed of unit type",
        "key": "getRotateSpeed",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "rotate speed of"
                },
                {
                    "type": "variable",
                    "dataType": "unitType",
                    "title": "Unit Type",
                    "field": "unitType",
                    "extraData": {
                        "type": "unitType"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.752Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109ca",
        "title": "owner of item",
        "key": "getOwnerOfItem",
        "data": {
            "type": "function",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "owner of "
                },
                {
                    "type": "variable",
                    "dataType": "item",
                    "title": "Item",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.752Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109e1",
        "title": "all debris in the game",
        "key": "allDebris",
        "data": {
            "type": "function",
            "category": "debrisGroup",
            "fragments": [
                {
                    "type": "constant",
                    "text": "all debris in the game"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.752Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109e6",
        "title": "all units in the game",
        "key": "allUnits",
        "data": {
            "type": "function",
            "category": "unitGroup",
            "fragments": [
                {
                    "type": "constant",
                    "text": "all units in the game"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.752Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a08",
        "title": "stop using item",
        "key": "stopUsingItem",
        "data": {
            "type": "action",
            "category": "item",
            "fragments": [
                {
                    "type": "constant",
                    "text": "stop using"
                },
                {
                    "type": "variable",
                    "dataType": "item",
                    "title": "Item",
                    "field": "entity"
                },
                {
                    "field": "hasFixedCSP",
                    "forDataOnly": true
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.752Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a0b",
        "title": "make unit visible to hostile players",
        "key": "makeUnitVisible",
        "data": {
            "type": "action",
            "category": "unit",
            "uses": [
                "playerTypes"
            ],
            "fragments": [
                {
                    "type": "constant",
                    "text": "make"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "visible to hostile players"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.752Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a0c",
        "title": "make unit invisible to hostile players",
        "key": "makeUnitInvisible",
        "data": {
            "type": "action",
            "category": "unit",
            "uses": [
                "playerTypes"
            ],
            "fragments": [
                {
                    "type": "constant",
                    "text": "make"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "invisible to hostile players"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.752Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a3d",
        "title": "break",
        "key": "break",
        "data": {
            "type": "action",
            "category": "loop",
            "fragments": [
                {
                    "type": "constant",
                    "text": "break out of the loop"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.752Z"
    },
    {
        "_id": "5a741b35d4f3dc4be1dd68b5",
        "title": "ammo in current magazine of item",
        "key": "getCurrentAmmoOfItem",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "ammo in current magazine of"
                },
                {
                    "type": "variable",
                    "dataType": "item",
                    "title": "Item",
                    "field": "item"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.752Z"
    },
    {
        "_id": "5ad038849c63a98ff2c4ab46",
        "title": "height of region",
        "key": "getHeightOfRegion",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "height of"
                },
                {
                    "type": "variable",
                    "dataType": "region",
                    "title": "Region",
                    "field": "region",
                    "extraData": {
                        "type": "region"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.752Z"
    },
    {
        "_id": "5af11d9e1930dc2919249603",
        "title": "change scale of entity's sprite",
        "key": "changeScaleOfEntitySprite",
        "data": {
            "type": "action",
            "category": "entity",
            "fragments": [
                {
                    "type": "constant",
                    "text": "change scale of"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "'s sprite to"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Scale",
                    "field": "scale",
                    "extraData": {
                        "dataType": "number"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.752Z"
    },
    {
        "_id": "5b02ef90b5c2c036ec73b7d8",
        "title": "substring of",
        "key": "substringOf",
        "data": {
            "type": "function",
            "category": "string",
            "fragments": [
                {
                    "type": "constant",
                    "text": "substring of"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "String",
                    "field": "string",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "from index"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "From Index",
                    "field": "fromIndex",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "to"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "To Index",
                    "field": "toIndex",
                    "extraData": {
                        "dataType": "number"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.752Z"
    },
    {
        "_id": "5b039970cd7f825524a2fbf0",
        "title": "set player name",
        "key": "setPlayerName",
        "data": {
            "type": "action",
            "category": "player",
            "fragments": [
                {
                    "type": "constant",
                    "text": "set"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                },
                {
                    "type": "constant",
                    "text": "name as"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Name",
                    "field": "name",
                    "extraData": {
                        "dataType": "string"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.752Z"
    },
    {
        "_id": "5b0532ad0ace3f9b71af95ce",
        "title": "make unit pick up item at slot",
        "key": "makeUnitPickupItemAtSlot",
        "data": {
            "type": "action",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "make"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "unit",
                    "extraData": {
                        "type": "selectedUnit"
                    }
                },
                {
                    "type": "constant",
                    "text": "pickup"
                },
                {
                    "type": "variable",
                    "dataType": "item",
                    "title": "Item",
                    "field": "item"
                },
                {
                    "type": "constant",
                    "text": "at"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Slot Index",
                    "field": "slotIndex",
                    "extraData": {
                        "dataType": "number"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.752Z"
    },
    {
        "_id": "5b0534c70ace3f9b71af95d5",
        "title": "drop item in inventory at slot",
        "key": "dropItemInInventorySlot",
        "data": {
            "type": "action",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "make"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "unit",
                    "extraData": {
                        "type": "selectedUnit"
                    }
                },
                {
                    "type": "constant",
                    "text": "drop item at inventory slot"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Slot Index",
                    "field": "slotIndex",
                    "extraData": {
                        "dataType": "number"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.752Z"
    },
    {
        "_id": "5b4ce84ae12e525230880dc8",
        "title": "string contains string",
        "key": "subString",
        "data": {
            "type": "function",
            "category": "boolean",
            "fragments": [
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Source String",
                    "field": "sourceString",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "contains"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Pattern String",
                    "field": "patternString",
                    "extraData": {
                        "dataType": "string"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.752Z"
    },
    {
        "_id": "5b976cf43e6ed0281817bc09",
        "title": "item quantity (max)",
        "key": "getItemMaxQuantity",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "max quantity of"
                },
                {
                    "type": "variable",
                    "dataType": "item",
                    "title": "Item",
                    "field": "item"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5bd3137e743cb4e8350e078e",
        "title": "unban player from chat",
        "key": "unbanPlayerFromChat",
        "data": {
            "type": "action",
            "category": "player",
            "fragments": [
                {
                    "type": "constant",
                    "text": "unban"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                },
                {
                    "type": "constant",
                    "text": "from chat"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5c4a0c131d5aadb4b62e0f3a",
        "key": "absoluteValueOfNumber",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "absolute value of",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "number"
                    },
                    "title": "Number",
                    "field": "number",
                    "dataType": "value",
                    "type": "variable"
                }
            ],
            "type": "function",
            "category": "number",
            "uses": null
        },
        "title": "absolute value of number",
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5d5d0ab1748a8e34579f4e1f",
        "key": "changeDescriptionOfItem",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "change description of",
                    "type": "constant"
                },
                {
                    "title": "Item",
                    "field": "item",
                    "dataType": "item",
                    "type": "variable"
                },
                {
                    "text": "as",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "string"
                    },
                    "title": "String",
                    "field": "string",
                    "dataType": "value",
                    "type": "variable"
                }
            ],
            "type": "action",
            "category": "item",
            "uses": null
        },
        "title": "change description of item",
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109c4",
        "title": "last triggering unit",
        "key": "getTriggeringUnit",
        "data": {
            "type": "function",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "triggering unit"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109ce",
        "title": "owner of a unit",
        "key": "getOwner",
        "data": {
            "type": "function",
            "category": "player",
            "fragments": [
                {
                    "type": "constant",
                    "text": "owner of"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109d0",
        "title": "selected player (from the loop)",
        "key": "selectedPlayer",
        "data": {
            "type": "function",
            "category": "player",
            "fragments": [
                {
                    "type": "constant",
                    "text": "selected player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109d3",
        "title": "last touched item",
        "key": "getLastTouchedItem",
        "data": {
            "type": "function",
            "category": "item",
            "fragments": [
                {
                    "type": "constant",
                    "text": "last touched item"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109dc",
        "title": "last touched projectile",
        "key": "getLastTouchedProjectile",
        "data": {
            "type": "function",
            "category": "projectile",
            "fragments": [
                {
                    "type": "constant",
                    "text": "last touched projectile"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109e8",
        "title": "all units attached to item",
        "key": "allUnitsAttachedToItem",
        "data": {
            "type": "function",
            "category": "unitGroup",
            "fragments": [
                {
                    "type": "constant",
                    "text": "all units attached to"
                },
                {
                    "type": "variable",
                    "dataType": "item",
                    "title": "Item",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109fd",
        "title": "send chat message to player",
        "key": "sendChatMessageToPlayer",
        "data": {
            "type": "action",
            "category": "ui",
            "fragments": [
                {
                    "type": "constant",
                    "text": "send chat message"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Message",
                    "field": "message",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "to"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109ff",
        "title": "play video ad for everyone",
        "key": "playAdForEveryone",
        "data": {
            "type": "action",
            "category": "ad",
            "fragments": [
                {
                    "type": "constant",
                    "text": "play video ad for everyone"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a2d",
        "title": "hide overlay text for player",
        "key": "hideUiTextForPlayer",
        "data": {
            "type": "action",
            "category": "ui",
            "fragments": [
                {
                    "type": "constant",
                    "text": "hide"
                },
                {
                    "type": "variable",
                    "dataType": "updateUiText.target",
                    "title": "Target",
                    "field": "target"
                },
                {
                    "type": "constant",
                    "text": "for"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a2f",
        "title": "show overlay text for player",
        "key": "showUiTextForPlayer",
        "data": {
            "type": "action",
            "category": "ui",
            "fragments": [
                {
                    "type": "constant",
                    "text": "show"
                },
                {
                    "type": "variable",
                    "dataType": "updateUiText.target",
                    "title": "Target",
                    "field": "target"
                },
                {
                    "type": "constant",
                    "text": "for"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a31",
        "title": "reset debris position",
        "key": "resetDebrisPosition",
        "data": {
            "type": "action",
            "category": "debris",
            "fragments": [
                {
                    "type": "constant",
                    "text": "reset position of"
                },
                {
                    "type": "variable",
                    "dataType": "debris",
                    "title": "Debris",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a35",
        "title": "play music for everyone",
        "key": "playMusic",
        "data": {
            "type": "action",
            "category": "music",
            "uses": [
                "music"
            ],
            "fragments": [
                {
                    "type": "constant",
                    "text": "play music"
                },
                {
                    "type": "variable",
                    "dataType": "music",
                    "title": "Music",
                    "field": "music",
                    "extraData": {
                        "type": "music"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5a6ec807ae5a1ca244dd7ada",
        "title": "assign player type",
        "key": "assignPlayerType",
        "data": {
            "type": "action",
            "category": "player",
            "fragments": [
                {
                    "type": "constant",
                    "text": "assign"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "to"
                },
                {
                    "type": "variable",
                    "dataType": "playerType",
                    "title": "Player Type",
                    "field": "playerType",
                    "extraData": {
                        "type": "playerType"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5a7b3cd136b25c4be4de24bf",
        "title": "all projectiles in the game",
        "key": "allProjectiles",
        "data": {
            "type": "function",
            "category": "projectileGroup",
            "fragments": [
                {
                    "type": "constant",
                    "text": "all projectile in the game"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5aafd29415d5b42a292e7523",
        "title": "play music for player",
        "key": "playMusicForPlayer",
        "data": {
            "type": "action",
            "category": "music",
            "uses": [
                "music"
            ],
            "fragments": [
                {
                    "type": "constant",
                    "text": "play music"
                },
                {
                    "type": "variable",
                    "dataType": "music",
                    "title": "Music",
                    "field": "music",
                    "extraData": {
                        "type": "music"
                    }
                },
                {
                    "type": "constant",
                    "text": "for"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5ab93cc443ac3e7c5072cba8",
        "title": "if / else / then",
        "key": "condition",
        "data": {
            "type": "action",
            "category": "system",
            "fields": {
                "isActionContainer": true,
                "isClickable": true
            },
            "fragments": [
                {
                    "type": "constant",
                    "text": "if"
                },
                {
                    "type": "variable",
                    "dataType": "conditions",
                    "title": "Conditions",
                    "field": "conditions"
                },
                {
                    "type": "constant",
                    "text": "<br/> then do: [actions] <br/> else do: [actions]",
                    "forModalOnly": true
                },
                {
                    "field": "then",
                    "forDataOnly": true,
                    "defaultValue": []
                },
                {
                    "field": "else",
                    "forDataOnly": true,
                    "defaultValue": []
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5af5e0b09201242e486787bb",
        "title": "make unit visible to neutral players",
        "key": "makeUnitVisibleToNeutralPlayers",
        "data": {
            "type": "action",
            "category": "unit",
            "uses": [
                "playerTypes"
            ],
            "fragments": [
                {
                    "type": "constant",
                    "text": "make"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "visible to neutral players"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5af5e0b09201242e486787bd",
        "title": "make unit visible to friendly players",
        "key": "makeUnitVisibleToFriendlyPlayers",
        "data": {
            "type": "action",
            "category": "unit",
            "uses": [
                "playerTypes"
            ],
            "fragments": [
                {
                    "type": "constant",
                    "text": "make"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "visible to friendly players"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5afdb8ddad64db6b0c6b8755",
        "title": "make unit pick up item",
        "key": "makeUnitPickupItem",
        "data": {
            "type": "action",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "make"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "unit",
                    "extraData": {
                        "type": "selectedUnit"
                    }
                },
                {
                    "type": "constant",
                    "text": "pickup"
                },
                {
                    "type": "variable",
                    "dataType": "item",
                    "title": "Item",
                    "field": "item"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.753Z"
    },
    {
        "_id": "5b04debf2471b2e05013787f",
        "title": "dynamic region [ x, y, width, height ]",
        "key": "dynamicRegion",
        "data": {
            "type": "function",
            "category": "region",
            "fragments": [
                {
                    "type": "constant",
                    "text": "dynamic region ["
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Starting Position (X)",
                    "field": "x",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ","
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Starting Position (Y)",
                    "field": "y",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ","
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Width",
                    "field": "width",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ","
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Height",
                    "field": "height",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "]"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5b153b981feed9af3c43452d",
        "title": "entity attribute",
        "key": "getEntityAttribute",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "variable",
                    "dataType": "attributeType",
                    "title": "Attribute Type",
                    "field": "attribute",
                    "extraData": {
                        "type": "attributeType"
                    }
                },
                {
                    "type": "constant",
                    "text": "of"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5b5ab62c791f3003d0d67b10",
        "title": "current time",
        "key": "currentTimeStamp",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "current time"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5b6432a913896f44d8de9f70",
        "title": "give new item to unit with quantity",
        "key": "giveNewItemWithQuantityToUnit",
        "data": {
            "fragments": [
                {
                    "text": "create a new",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "type": "itemType"
                    },
                    "title": "Item type",
                    "field": "itemType",
                    "dataType": "itemType",
                    "type": "variable"
                },
                {
                    "text": "with quantity",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "number"
                    },
                    "title": "Number",
                    "field": "number",
                    "dataType": "value",
                    "type": "variable"
                },
                {
                    "text": "and give it to a",
                    "type": "constant"
                },
                {
                    "title": "Unit",
                    "field": "unit",
                    "dataType": "unit",
                    "type": "variable"
                }
            ],
            "type": "action",
            "category": "item",
            "uses": [
                "itemTypes"
            ]
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5c02090b70cd8c0246feda41",
        "title": "get entity velocity x",
        "key": "getEntityVelocityX",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "get velocity X of"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5c89decd27098b4ee7d5ac43",
        "key": "defaultQuantityOfItemType",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "default quantity of",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "type": "itemType"
                    },
                    "title": "Item type",
                    "field": "itemType",
                    "dataType": "itemType",
                    "type": "variable"
                }
            ],
            "type": "function",
            "category": "number",
            "uses": [
                "itemTypes"
            ]
        },
        "title": "default quantity of item type",
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5cac2c13d3ac9e04fdc05fc0",
        "title": "quantity of item type in item type group",
        "key": "getQuantityOfItemTypeInItemTypeGroup",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "quantity of"
                },
                {
                    "type": "variable",
                    "dataType": "itemType",
                    "title": "Item Type",
                    "field": "itemType",
                    "extraData": {
                        "type": "itemType"
                    }
                },
                {
                    "type": "constant",
                    "text": "in"
                },
                {
                    "type": "variable",
                    "dataType": "itemTypeGroup",
                    "title": "Item Type Group",
                    "field": "itemTypeGroup"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5caf5871778852e95ce080c6",
        "title": "random unit type from unit type group",
        "key": "getRandomUnitTypeFromUnitTypeGroup",
        "data": {
            "type": "function",
            "category": "unitType",
            "fragments": [
                {
                    "type": "constant",
                    "text": "random unit type from"
                },
                {
                    "type": "variable",
                    "dataType": "unitTypeGroup",
                    "title": "Unit Type Group",
                    "field": "unitTypeGroup"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5caf6f3a95c4c94b91c9b9f4",
        "title": "selected unit type (from the loop)",
        "key": "selectedUnitType",
        "data": {
            "type": "function",
            "category": "unitType",
            "fragments": [
                {
                    "type": "constant",
                    "text": "selected unit type"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109af",
        "title": "number of items present",
        "key": "getNumberOfItemsPresent",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "number of items present in game (including holding items, but not in inventory)"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109ba",
        "title": "minimum value between two numbers",
        "key": "getMin",
        "data": {
            "type": "function",
            "category": "number",
            "fragments": [
                {
                    "type": "constant",
                    "text": "minimum value between ("
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "1st Number",
                    "field": "num1",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ","
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "2nd Number",
                    "field": "num2",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ")"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109c5",
        "title": "selected unit (from the loop)",
        "key": "selectedUnit",
        "data": {
            "type": "function",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "selected unit"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109dd",
        "title": "last overlapping projectile",
        "key": "getLastOverlappingProjectile",
        "data": {
            "type": "function",
            "category": "projectile",
            "fragments": [
                {
                    "type": "constant",
                    "text": "last overlapping projectile"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109de",
        "title": "last triggering attribute",
        "key": "getTriggeringAttribute",
        "data": {
            "type": "function",
            "category": "attribute",
            "fragments": [
                {
                    "type": "constant",
                    "text": "triggering attribute"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109e9",
        "title": "all units mounted on unit",
        "key": "allUnitsMountedOnUnit",
        "data": {
            "type": "function",
            "category": "unitGroup",
            "fragments": [
                {
                    "type": "constant",
                    "text": "all units mounted on"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c109ea",
        "title": "all units in region",
        "key": "allUnitsInRegion",
        "data": {
            "type": "function",
            "category": "unitGroup",
            "fragments": [
                {
                    "type": "constant",
                    "text": "all units in"
                },
                {
                    "type": "variable",
                    "dataType": "region",
                    "title": "Region",
                    "field": "region"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5a698b5322f6eb16d4c10a02",
        "title": "drop all items",
        "key": "dropAllItems",
        "data": {
            "type": "action",
            "category": "unit",
            "fragments": [
                {
                    "type": "constant",
                    "text": "make"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "title": "Unit",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "drop all of its items"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5ac5136e45847233d8ba1170",
        "title": "use item once",
        "key": "useItemOnce",
        "data": {
            "type": "action",
            "category": "item",
            "fragments": [
                {
                    "type": "constant",
                    "text": "use"
                },
                {
                    "type": "variable",
                    "dataType": "item",
                    "title": "Item",
                    "field": "item"
                },
                {
                    "type": "constant",
                    "text": "once"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5acdaaa76f04d9c598bf2114",
        "title": "stop accepting players",
        "key": "stopAcceptingPlayers",
        "data": {
            "type": "action",
            "tier": 2,
            "category": "player",
            "fragments": [
                {
                    "type": "constant",
                    "text": "stop accepting players"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5adb3c6ca3aaa6b204c0d073",
        "title": "set entity velocity at angle",
        "key": "setEntityVelocityAtAngle",
        "data": {
            "type": "action",
            "category": "entity",
            "fragments": [
                {
                    "type": "constant",
                    "text": "set linear velocity of"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "as"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Speed",
                    "field": "speed",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "at"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Angle",
                    "field": "angle",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "radians"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5afb023389c7b786e8f9a1da",
        "title": "set entity attribute max value",
        "key": "setEntityAttributeMax",
        "data": {
            "type": "action",
            "category": "entity",
            "uses": [
                "attributeTypes"
            ],
            "fragments": [
                {
                    "type": "constant",
                    "text": "set max value of"
                },
                {
                    "type": "variable",
                    "dataType": "attributeType",
                    "title": "Attribute Type",
                    "field": "attribute",
                    "extraData": {
                        "type": "attributeType"
                    }
                },
                {
                    "type": "constant",
                    "text": "of"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                },
                {
                    "type": "constant",
                    "text": "as"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Value",
                    "field": "value",
                    "extraData": {
                        "dataType": "number"
                    }
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5b024112dc81f895b0361597",
        "title": "player variable",
        "key": "getValueOfPlayerVariable",
        "data": {
            "type": "function",
            "fragments": [
                {
                    "type": "variable",
                    "dataType": "playerVariable",
                    "title": "Player Variable",
                    "field": "variable"
                },
                {
                    "type": "constant",
                    "text": "of"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "title": "Player",
                    "field": "player"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5b4c580ab093b86148a9c2dd",
        "title": "all regions in the game",
        "key": "allRegions",
        "data": {
            "type": "function",
            "category": "regionGroup",
            "fragments": [
                {
                    "type": "constant",
                    "text": "all region in the game"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5b50baf15140c73b59c7911c",
        "title": "max quantity of item type",
        "key": "maxValueOfItemType",
        "data": {
            "fragments": [
                {
                    "text": "max value of",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "type": "itemType"
                    },
                    "title": "Item type",
                    "field": "itemType",
                    "dataType": "itemType",
                    "type": "variable"
                }
            ],
            "type": "function",
            "category": "number",
            "uses": null
        },
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5c4012ab27098b4ee70a3d6d",
        "key": "angleBetweenMouseAndWindowCenter",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": " angle between",
                    "type": "constant"
                },
                {
                    "title": "Player",
                    "field": "player",
                    "dataType": "player",
                    "type": "variable"
                },
                {
                    "text": "'s cursor and center of window",
                    "type": "constant"
                }
            ],
            "type": "function",
            "category": "number",
            "uses": null
        },
        "title": "angle between player mouse cursor and center of window",
        "createdAt": "2022-09-26T12:29:41.754Z"
    },
    {
        "_id": "5c5861b1100be989fe9d5f96",
        "key": "setPlayerAttributeMin",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "   set min value of",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "type": "attributeType"
                    },
                    "title": "Attribute type",
                    "field": "attributeType",
                    "dataType": "attributeType",
                    "type": "variable"
                },
                {
                    "text": "of",
                    "type": "constant"
                },
                {
                    "title": "Player",
                    "field": "player",
                    "dataType": "player",
                    "type": "variable"
                },
                {
                    "text": "as",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "number"
                    },
                    "title": "Number",
                    "field": "number",
                    "dataType": "value",
                    "type": "variable"
                }
            ],
            "type": "action",
            "category": "player",
            "uses": [
                "playerTypes"
            ]
        },
        "title": "set player attribute min value",
        "createdAt": "2022-09-26T12:29:41.755Z"
    },
    {
        "_id": "5d1da4f07efbc404108c17e3",
        "key": "makePlayerTradeWithPlayer",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "player",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "Make"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "field": "playerA",
                    "title": "Player a"
                },
                {
                    "type": "constant",
                    "text": "initiate trade with"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "field": "playerB",
                    "title": "Player b"
                }
            ]
        },
        "title": "make player initiate item trade with player",
        "createdAt": "2022-09-26T12:29:41.755Z"
    },
    {
        "_id": "5d95b85b27098b4ee746b3f5",
        "key": "getExponent",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "get value of",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "number"
                    },
                    "title": "Base",
                    "field": "base",
                    "dataType": "value",
                    "type": "variable"
                },
                {
                    "text": "to the power of",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "number"
                    },
                    "title": "Power",
                    "field": "power",
                    "dataType": "value",
                    "type": "variable"
                }
            ],
            "type": "function",
            "category": "number",
            "uses": null
        },
        "title": "get exponent value",
        "createdAt": "2022-09-26T12:29:41.755Z"
    },
    {
        "_id": "5e74542f3d8903cde7bb2b4e",
        "key": "getLastAttackedUnit",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "last attacked unit",
                    "type": "constant"
                }
            ],
            "type": "function",
            "category": "unit",
            "uses": null
        },
        "title": "last attacked unit",
        "createdAt": "2022-09-26T12:29:41.755Z"
    },
    {
        "_id": "5e74544a3d8903cde7bb4996",
        "key": "getLastAttackingUnit",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "last attacking unit",
                    "type": "constant"
                }
            ],
            "type": "function",
            "category": "unit",
            "uses": null
        },
        "title": "last attacking unit",
        "createdAt": "2022-09-26T12:29:41.755Z"
    },
    {
        "_id": "5e7b16591c9e7e73161d6ee9",
        "key": "updateUiTextForTimeForPlayer",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "show",
                    "type": "constant"
                },
                {
                    "type": "variable",
                    "dataType": "updateUiText.target",
                    "title": "Target",
                    "field": "target"
                },
                {
                    "text": "message as",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "string"
                    },
                    "title": "Value",
                    "field": "value",
                    "dataType": "value",
                    "type": "variable"
                },
                {
                    "text": "for",
                    "type": "constant"
                },
                {
                    "title": "Player",
                    "field": "player",
                    "dataType": "player",
                    "type": "variable"
                },
                {
                    "type": "constant",
                    "text": "(Use undefined to update text for all players) ",
                    "forModalOnly": true
                },
                {
                    "text": "and hide it after",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "number"
                    },
                    "title": "Time",
                    "field": "time",
                    "dataType": "value",
                    "type": "variable"
                },
                {
                    "text": "miliseconds",
                    "type": "constant"
                },
                {
                    "type": "constant",
                    "text": " (Use -1 for showing text for unlimited time)",
                    "forModalOnly": true
                }
            ],
            "type": "action",
            "category": "ui",
            "uses": null
        },
        "title": "update overlay text for X miliseconds",
        "createdAt": "2022-09-26T12:29:41.755Z"
    },
    {
        "_id": "5e82f5dd3d8903cde7c21848",
        "key": "getNumberOfUnitsOfUnitType",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "number of units of",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "type": "unitType"
                    },
                    "title": "Unit type",
                    "field": "unitType",
                    "dataType": "unitType",
                    "type": "variable"
                }
            ],
            "type": "function",
            "category": "number",
            "uses": null
        },
        "title": "number of units of unit type",
        "createdAt": "2022-09-26T12:29:41.755Z"
    },
    {
        "_id": "5e8de7d23d8903cde7ddf0b8",
        "key": "aiMoveToPosition",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "command",
                    "type": "constant"
                },
                {
                    "title": "Unit",
                    "field": "unit",
                    "dataType": "unit",
                    "type": "variable"
                },
                {
                    "text": "to move to",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "position"
                    },
                    "title": "Position",
                    "field": "position",
                    "dataType": "value",
                    "type": "variable"
                }
            ],
            "type": "action",
            "category": "AI",
            "uses": null
        },
        "title": "command AI unit to move to a position",
        "createdAt": "2022-09-26T12:29:41.755Z"
    },
    {
        "_id": "5e8de80e3d8903cde7de5239",
        "key": "aiAttackUnit",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "command",
                    "type": "constant"
                },
                {
                    "title": "Unit",
                    "field": "unit",
                    "dataType": "unit",
                    "type": "variable"
                },
                {
                    "text": "to attack",
                    "type": "constant"
                },
                {
                    "title": "Target unit",
                    "field": "targetUnit",
                    "dataType": "unit",
                    "type": "variable"
                }
            ],
            "type": "action",
            "category": "AI",
            "uses": null
        },
        "title": "command AI unit to attack a unit",
        "createdAt": "2022-09-26T12:29:41.755Z"
    },
    {
        "_id": "5e8ed5c43d8903cde72a43ae",
        "key": "getNumberOfPlayersOfPlayerType",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "number of players of",
                    "type": "constant"
                },
                {
                    "title": "Player type",
                    "field": "playerType",
                    "dataType": "playerType",
                    "type": "variable",
                    "extraData": {
                        "type": "playerType"
                    }
                }
            ],
            "type": "function",
            "category": "number",
            "uses": [
                "playerTypes"
            ]
        },
        "title": "number of players of player type",
        "createdAt": "2022-09-26T12:29:41.755Z"
    },
    {
        "_id": "5eaa8d723d8903cde70b36c8",
        "key": "changeSensorRadius",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "change radius of",
                    "type": "constant"
                },
                {
                    "title": "Sensor",
                    "field": "sensor",
                    "dataType": "sensor",
                    "type": "variable"
                },
                {
                    "text": "to",
                    "type": "constant"
                },
                {
                    "extraData": {
                        "dataType": "number"
                    },
                    "title": "Radius",
                    "field": "radius",
                    "dataType": "value",
                    "type": "variable"
                }
            ],
            "type": "action",
            "category": "sensor",
            "uses": null
        },
        "title": "change sensor radius",
        "createdAt": "2022-09-26T12:29:41.755Z"
    },
    {
        "_id": "5eaa8dc23d8903cde70ba2f9",
        "key": "ownerUnitOfSensor",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "owner unit of",
                    "type": "constant"
                },
                {
                    "title": "Sensor",
                    "field": "sensor",
                    "dataType": "sensor",
                    "type": "variable"
                }
            ],
            "type": "function",
            "category": "unit",
            "uses": null
        },
        "title": "owner unit of sensor",
        "createdAt": "2022-09-26T12:29:41.755Z"
    },
    {
        "_id": "5eb4f4793d8903cde7a1a61c",
        "key": "getSensorOfUnit",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "get sensor of",
                    "type": "constant"
                },
                {
                    "title": "Unit",
                    "field": "unit",
                    "dataType": "unit",
                    "type": "variable"
                }
            ],
            "type": "function",
            "category": "sensor",
            "uses": null
        },
        "title": "get sensor of unit",
        "createdAt": "2022-09-26T12:29:41.755Z"
    },
    {
        "_id": "5eb4f9bc3d8903cde7a7a804",
        "key": "getTriggeringSensor",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "triggering sensor",
                    "type": "constant"
                }
            ],
            "type": "function",
            "category": "sensor",
            "uses": null
        },
        "title": "last triggering sensor",
        "createdAt": "2022-09-26T12:29:41.755Z"
    },
    {
        "_id": "5ec37fe43d8903cde7902acc",
        "key": "getLastChatMessageSentByPlayer",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "get last chat message sent by",
                    "type": "constant"
                },
                {
                    "title": "Player",
                    "field": "player",
                    "dataType": "player",
                    "type": "variable"
                }
            ],
            "type": "function",
            "category": "string",
            "uses": [
                "playerTypes"
            ]
        },
        "title": "last chat message sent by player",
        "createdAt": "2022-09-26T12:29:41.755Z"
    },
    {
        "_id": "5eccc2f1944416f81a80d9e2",
        "key": "loadPlayerDataAndApplyIt",
        "__v": 0,
        "data": {
            "fragments": [
                {
                    "text": "load player's data from db and apply it to",
                    "type": "constant"
                },
                {
                    "title": "Player",
                    "field": "player",
                    "dataType": "player",
                    "type": "variable"
                },
                {
                    "text": "and",
                    "type": "constant"
                },
                {
                    "title": "Unit",
                    "field": "unit",
                    "dataType": "unit",
                    "type": "variable"
                },
                {
                    "text": "(optional)",
                    "type": "constant"
                }
            ],
            "type": "action",
            "category": "player",
            "uses": null
        },
        "title": "load player (and unit) data",
        "createdAt": "2022-09-26T12:29:41.755Z"
    },
    {
        "_id": "5ed52bb73d8903cde73c6eb6",
        "key": "createFloatingText",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "ui",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "create floating text"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "text",
                    "title": "Text",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "at"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "position",
                    "title": "Position",
                    "extraData": {
                        "dataType": "position"
                    }
                },
                {
                    "type": "constant",
                    "text": "with color"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "color",
                    "title": "Color",
                    "extraData": {
                        "dataType": "string"
                    }
                }
            ]
        },
        "title": "create floating text",
        "createdAt": "2022-09-26T12:29:41.755Z"
    },
    {
        "_id": "5f212e5f3ce8a9968becc12e",
        "key": "getLengthOfString",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "number",
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": "length of"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "string",
                    "title": "String",
                    "extraData": {
                        "dataType": "string"
                    }
                }
            ]
        },
        "title": "length of string",
        "createdAt": "2022-09-26T12:29:41.755Z"
    },
    {
        "_id": "5f7b503b3ce8a9968bd0491d",
        "key": "setLastAttackedUnit",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "unit",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "set"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "field": "unit",
                    "title": "Unit"
                },
                {
                    "type": "constant",
                    "text": "as last attacked unit"
                }
            ]
        },
        "title": "set last attacked unit",
        "createdAt": "2022-09-26T12:29:41.755Z"
    },
    {
        "_id": "5f7b505b3ce8a9968bd061a4",
        "key": "setLastAttackingUnit",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "unit",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "set"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "field": "unit",
                    "title": "Unit"
                },
                {
                    "type": "constant",
                    "text": "as last attacking unit"
                }
            ]
        },
        "title": "set last attacking unit",
        "createdAt": "2022-09-26T12:29:41.755Z"
    },
    {
        "_id": "5f7b50ae3ce8a9968bd0a050",
        "key": "setItemFireRate",
        "__v": 0,
        "data": {
            "uses": [
                "itemTypes"
            ],
            "category": "item",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "set"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "number",
                    "title": "Number",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "as fire rate of"
                },
                {
                    "type": "variable",
                    "dataType": "item",
                    "field": "item",
                    "title": "Item"
                }
            ]
        },
        "title": "set fire rate of item",
        "createdAt": "2022-09-26T12:29:41.755Z"
    },
    {
        "_id": "5f828979515bf325a8f2f01b",
        "title": "apply impulse on entity XY",
        "key": "applyImpulseOnEntityXY",
        "data": {
            "type": "action",
            "category": "entity",
            "fragments": [
                {
                    "type": "constant",
                    "text": "apply impulse ( x:"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Impulse (X)",
                    "field": "impulse.x",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ", y:"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "title": "Impulse (Y)",
                    "field": "impulse.y",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": ") on"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "title": "Entity",
                    "field": "entity"
                }
            ]
        },
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "5fd2871b3ce8a9968b5af6c1",
        "key": "toLowerCase",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "string",
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": "lower case of"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "string",
                    "title": "String",
                    "extraData": {
                        "dataType": "string"
                    }
                }
            ]
        },
        "title": "to lower case",
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "5fd289023ce8a9968b5d014d",
        "key": "stringStartsWith",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "boolean",
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": ""
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "sourceString",
                    "title": "Source string",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "starts with"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "patternString",
                    "title": "Pattern string",
                    "extraData": {
                        "dataType": "string"
                    }
                }
            ]
        },
        "title": "string starts with string",
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "5fd289263ce8a9968b5d27e2",
        "key": "stringEndsWith",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "boolean",
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": ""
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "sourceString",
                    "title": "Source string",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "ends with"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "patternString",
                    "title": "Pattern string",
                    "extraData": {
                        "dataType": "string"
                    }
                }
            ]
        },
        "title": "string ends with string",
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "5fd289803ce8a9968b5d8cb3",
        "key": "replaceValuesInString",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "string",
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": "replace"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "matchString",
                    "title": "Match string",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "in"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "sourceString",
                    "title": "Source string",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "with"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "newString",
                    "title": "New string",
                    "extraData": {
                        "dataType": "string"
                    }
                }
            ]
        },
        "title": "replace value in string",
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "5fd607d93ce8a9968bcbd1a7",
        "key": "getLastAttackingItem",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "item",
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": "last attacking item"
                }
            ]
        },
        "title": "last attacking item",
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "5fd6fa243ce8a9968bc6adb1",
        "key": "playSoundForPlayer",
        "__v": 0,
        "data": {
            "uses": [
                "sounds",
                "playerTypes"
            ],
            "category": "player",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "play"
                },
                {
                    "type": "variable",
                    "dataType": "sound",
                    "field": "sound",
                    "title": "Sound",
                    "extraData": {
                        "type": "sound"
                    }
                },
                {
                    "type": "constant",
                    "text": "for"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "field": "player",
                    "title": "Player"
                }
            ]
        },
        "title": "play sound for player",
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "5fd6fa423ce8a9968bc6c854",
        "key": "stopSoundForPlayer",
        "__v": 0,
        "data": {
            "uses": [
                "sounds",
                "playerTypes"
            ],
            "category": "player",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "stop"
                },
                {
                    "type": "variable",
                    "dataType": "sound",
                    "field": "sound",
                    "title": "Sound",
                    "extraData": {
                        "type": "sound"
                    }
                },
                {
                    "type": "constant",
                    "text": "for"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "field": "player",
                    "title": "Player"
                }
            ]
        },
        "title": "stop sound for player",
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "5fe04cd93ce8a9968b241f2e",
        "key": "showDismissibleInputModalToPlayer",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "ui",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "show dismissible input modal to"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "field": "player",
                    "title": "Player"
                },
                {
                    "type": "constant",
                    "text": "asking"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "inputLabel",
                    "title": "Input label",
                    "extraData": {
                        "dataType": "string"
                    }
                }
            ]
        },
        "title": "show dismissible input modal to player",
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "60212d3c3ce8a9968b36f5c5",
        "key": "getTimeString",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "string",
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": "get time format (hh:mm:ss) of a number of"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "seconds",
                    "title": "Seconds",
                    "extraData": {
                        "dataType": "number"
                    }
                }
            ]
        },
        "title": "get time string",
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "6067690e77fdb9cde6eef927",
        "key": "setItemName",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "item",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "set"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "name",
                    "title": "Name",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "as name of"
                },
                {
                    "type": "variable",
                    "dataType": "item",
                    "field": "item",
                    "title": "Item"
                }
            ]
        },
        "title": "set item name",
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "606769f577fdb9cde6effdf1",
        "key": "changeItemInventoryImage",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "item",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "set"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "url",
                    "title": "Url",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "(enter image url) as"
                },
                {
                    "type": "variable",
                    "dataType": "item",
                    "field": "item",
                    "title": "Item"
                },
                {
                    "type": "constant",
                    "text": "inventory image"
                }
            ]
        },
        "title": "set item inventory image",
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "60676b2577fdb9cde6f16764",
        "key": "getItemDescription",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "string",
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": "get"
                },
                {
                    "type": "variable",
                    "dataType": "item",
                    "field": "item",
                    "title": "Item"
                },
                {
                    "type": "constant",
                    "text": "description"
                }
            ]
        },
        "title": "get item description",
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "6093f1af77fdb9cde62c0f20",
        "key": "addAttributeBuffToUnit",
        "__v": 0,
        "data": {
            "uses": [],
            "category": "unit",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "Give"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "field": "entity",
                    "title": "Entity"
                },
                {
                    "type": "constant",
                    "text": "a buff of"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "value",
                    "title": "Value",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "for"
                },
                {
                    "type": "variable",
                    "dataType": "attributeType",
                    "field": "attribute",
                    "title": "Attribute",
                    "extraData": {
                        "type": "attributeType"
                    }
                },
                {
                    "type": "constant",
                    "text": "and remove it after"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "time",
                    "title": "Time",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "ms"
                }
            ]
        },
        "title": "add attribute buff to unit for x seconds",
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "6093f21077fdb9cde62c9559",
        "key": "addPercentageAttributeBuffToUnit",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "unit",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "Give"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "field": "entity",
                    "title": "Entity"
                },
                {
                    "type": "constant",
                    "text": "a buff of"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "value",
                    "title": "Value",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "% for"
                },
                {
                    "type": "variable",
                    "dataType": "attributeType",
                    "field": "attribute",
                    "title": "Attribute",
                    "extraData": {
                        "type": "attributeType"
                    }
                },
                {
                    "type": "constant",
                    "text": "and remove it after"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "time",
                    "title": "Time",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "ms"
                }
            ]
        },
        "title": "add attribute % buff to unit for x seconds",
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "609de6f677fdb9cde63d15f2",
        "key": "stunUnit",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "unit",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "stun"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "field": "unit",
                    "title": "Unit"
                },
                {
                    "type": "constant",
                    "text": "(it won't be able to use items, move or rotate)"
                }
            ]
        },
        "title": "stun unit",
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "609de76e77fdb9cde63d8e59",
        "key": "removeStunFromUnit",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "unit",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "remove stun from"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "field": "unit",
                    "title": "Unit"
                }
            ]
        },
        "title": "remove stun from unit",
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "609de85477fdb9cde63e6e95",
        "key": "setLastAttackingItem",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "item",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "set"
                },
                {
                    "type": "variable",
                    "dataType": "item",
                    "field": "item",
                    "title": "Item"
                },
                {
                    "type": "constant",
                    "text": "as last attacking item"
                }
            ]
        },
        "title": "set last attacking item",
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "60da3cf677fdb9cde65e5640",
        "key": "mutePlayerMicrophone",
        "__v": 0,
        "data": {
            "uses": [
                "playerTypes"
            ],
            "category": "player",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "mute"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "field": "player",
                    "title": "Player"
                },
                {
                    "type": "constant",
                    "text": "microphone"
                }
            ]
        },
        "title": "mute player's microphone",
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "60da3d3b77fdb9cde65e90d5",
        "key": "unmutePlayerMicrophone",
        "__v": 0,
        "data": {
            "uses": [
                "playerTypes"
            ],
            "category": "player",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "unmute"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "field": "player",
                    "title": "Player"
                },
                {
                    "type": "constant",
                    "text": "microphone"
                }
            ]
        },
        "title": "unmute player's microphone",
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "6183ebbe8f4fc0f29d0af3d1",
        "key": "sendPostRequest",
        "__v": 0,
        "data": {
            "uses": [],
            "category": "system",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "send"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "string",
                    "title": "String",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "to"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "url",
                    "title": "Url",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "and save response in"
                },
                {
                    "type": "variable",
                    "dataType": "variable",
                    "field": "varName",
                    "title": "Var name"
                }
            ]
        },
        "title": "send post request",
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "61a7f716f08f0096ac190ab4",
        "key": "loadUnitDataFromString",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "unit",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "load data from"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "string",
                    "title": "String",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "and apply it to"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "field": "unit",
                    "title": "Unit"
                }
            ]
        },
        "title": "load unit data from a string",
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "61a7f746f08f0096ac192a5a",
        "key": "loadPlayerDataFromString",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "player",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "load data from"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "string",
                    "title": "String",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "and apply it to"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "field": "player",
                    "title": "Player"
                }
            ]
        },
        "title": "load player data from string",
        "createdAt": "2022-09-26T12:29:41.756Z"
    },
    {
        "_id": "61a7f824f08f0096ac19a979",
        "key": "getUnitData",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "string",
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": "get data from"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "field": "unit",
                    "title": "Unit"
                }
            ]
        },
        "title": "get unit data",
        "createdAt": "2022-09-26T12:29:41.757Z"
    },
    {
        "_id": "61a7f84ef08f0096ac19c198",
        "key": "getPlayerData",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "string",
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": "get data from"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "field": "player",
                    "title": "Player"
                }
            ]
        },
        "title": "get player data",
        "createdAt": "2022-09-26T12:29:41.757Z"
    },
    {
        "_id": "61a7f8bcf08f0096ac19ff39",
        "key": "getUnitId",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "string",
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": "get id of"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "field": "unit",
                    "title": "Unit"
                }
            ]
        },
        "title": "get unit id",
        "createdAt": "2022-09-26T12:29:41.757Z"
    },
    {
        "_id": "61a7fb2bf08f0096ac1b8d88",
        "key": "getPlayerId",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "string",
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": "get id of"
                },
                {
                    "type": "variable",
                    "dataType": "player",
                    "field": "player",
                    "title": "Player"
                }
            ]
        },
        "title": "get player id",
        "createdAt": "2022-09-26T12:29:41.757Z"
    },
    {
        "_id": "61a7fce9f08f0096ac1ca03e",
        "key": "getUnitFromId",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "unit",
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": "get unit with id"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "string",
                    "title": "String",
                    "extraData": {
                        "dataType": "string"
                    }
                }
            ]
        },
        "title": "get unit from id",
        "createdAt": "2022-09-26T12:29:41.757Z"
    },
    {
        "_id": "61a7fe4df08f0096ac1d69d4",
        "key": "getPlayerFromId",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "player",
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": "get player with id"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "string",
                    "title": "String",
                    "extraData": {
                        "dataType": "string"
                    }
                }
            ]
        },
        "title": "get player from id",
        "createdAt": "2022-09-26T12:29:41.757Z"
    },
    {
        "_id": "61a80036f08f0096ac1e9898",
        "key": "getStringArrayLength",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "number",
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": "get length of"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "string",
                    "title": "String",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "array"
                }
            ]
        },
        "title": "get json array length",
        "createdAt": "2022-09-26T12:29:41.757Z"
    },
    {
        "_id": "61a80132f08f0096ac1f376e",
        "key": "getStringArrayElement",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "string",
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": "get element at index"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "number",
                    "title": "Number",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "of"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "string",
                    "title": "String",
                    "extraData": {
                        "dataType": "string"
                    }
                }
            ]
        },
        "title": "get json array element",
        "createdAt": "2022-09-26T12:29:41.757Z"
    },
    {
        "_id": "61a80216f08f0096ac1fcb2b",
        "key": "insertStringArrayElement",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "string",
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": "insert"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "value",
                    "title": "Value",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "into"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "string",
                    "title": "String",
                    "extraData": {
                        "dataType": "string"
                    }
                }
            ]
        },
        "title": "insert element into json array",
        "createdAt": "2022-09-26T12:29:41.757Z"
    },
    {
        "_id": "61a80688f08f0096ac229743",
        "key": "updateStringArrayElement",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "string",
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": "update element at index"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "number",
                    "title": "Number",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "of"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "string",
                    "title": "String",
                    "extraData": {
                        "dataType": "string"
                    }
                },
                {
                    "type": "constant",
                    "text": "with"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "value",
                    "title": "Value",
                    "extraData": {
                        "dataType": "string"
                    }
                }
            ]
        },
        "title": "update json array element",
        "createdAt": "2022-09-26T12:29:41.757Z"
    },
    {
        "_id": "61a80ae1f08f0096ac255cac",
        "key": "removeStringArrayElement",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "string",
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": "remove element at index"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "number",
                    "title": "Number",
                    "extraData": {
                        "dataType": "number"
                    }
                },
                {
                    "type": "constant",
                    "text": "of"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "string",
                    "title": "String",
                    "extraData": {
                        "dataType": "string"
                    }
                }
            ]
        },
        "title": "remove json array element",
        "createdAt": "2022-09-26T12:29:41.757Z"
    },
    {
        "_id": "61c366f1f08f0096acc97cff",
        "key": "removeAllAttributeBuffs",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "unit",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "Remove all attribute buffs from"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "field": "unit",
                    "title": "Unit"
                }
            ]
        },
        "title": "remove all attribute buffs from unit",
        "createdAt": "2022-09-26T12:29:41.757Z"
    },
    {
        "_id": "622cad51f08f0096ac8dfdfe",
        "key": "changeInventorySlotColor",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "item",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "change"
                },
                {
                    "type": "variable",
                    "dataType": "item",
                    "field": "item",
                    "title": "Item"
                },
                {
                    "type": "constant",
                    "text": "'s inventory slot color to"
                },
                {
                    "type": "variable",
                    "dataType": "value",
                    "field": "string",
                    "title": "String",
                    "extraData": {
                        "dataType": "string"
                    }
                }
            ]
        },
        "title": "change item inventory slot color",
        "createdAt": "2022-09-26T12:29:41.757Z"
    },
    {
        "_id": "631c2a98f08f0096acd373a7",
        "key": "setOwnerUnitOfProjectile",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "projectile",
            "type": "action",
            "fragments": [
                {
                    "type": "constant",
                    "text": "set owner"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "field": "unit",
                    "title": "Unit"
                },
                {
                    "type": "constant",
                    "text": "of"
                },
                {
                    "type": "variable",
                    "dataType": "projectile",
                    "field": "projectile",
                    "title": "Projectile"
                }
            ]
        },
        "title": "set owner unit of a projectile",
        "createdAt": "2022-09-26T12:29:41.757Z"
    },
    {
        "_id": "631cab8af08f0096ac1470ab",
        "key": "thisEntity",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "entity",
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": "this entity"
                }
            ]
        },
        "title": "this entity (of entity-script)",
        "createdAt": "2022-09-26T12:29:41.757Z"
    },
    {
        "_id": "631cd764f08f0096ac30229e",
        "key": "entityName",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "string",
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": "entity name of"
                },
                {
                    "type": "variable",
                    "dataType": "entity",
                    "field": "entity",
                    "title": "Entity"
                }
            ]
        },
        "title": "entity name",
        "createdAt": "2022-09-26T12:29:41.757Z"
    },
    {
        "_id": "632b9db2f08f0096ac014ccb",
        "key": "selectedInventorySlot",
        "__v": 0,
        "data": {
            "uses": null,
            "category": "number",
            "type": "function",
            "fragments": [
                {
                    "type": "constant",
                    "text": "current inventory slot selected by"
                },
                {
                    "type": "variable",
                    "dataType": "unit",
                    "field": "unit",
                    "title": "Unit"
                }
            ]
        },
        "title": "selected inventory slot",
        "createdAt": "2022-09-26T12:29:41.757Z"
    }
];
