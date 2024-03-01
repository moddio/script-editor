import * as monaco from "monaco-editor";
import ILanguage = monaco.languages.IMonarchLanguage;
import ILanguageConfiguration = monaco.languages.LanguageConfiguration
import { editor } from "monaco-editor";

export const comment = /^\s*#([ =|].*)?$/
export const KEYWORDS = ["else", "getItemInFrontOfUnit", "selectedProjectile", "getAttributeTypeOfAttribute", "playAdForPlayer", "randNumber", "setTimeOut", "facingAngle", "getMapHeight", "getEntityType", "getSelectedEntity", "rotateEntityToFacePosition", "destroyEntity", "setEntityDepth", "getItemAtSlot", "hideUnitFromPlayer", "showUnitToPlayer", "entitiesCollidingWithLastRaycast", "lastPurchasedUnit", "sendChatMessage", "playSoundAtPosition", "pos", "toFixed", "getEntityState", "dropItemAtPosition", "applyForceOnEntityAngle", "showInputModalToPlayer", "getItemQuantity", "isPlayerLoggedIn", "openDialogueForPlayer", "continue", "openWebsiteForPlayer", "setEntityLifeSpan", "selectedItem", "hideUnitNameLabel", "setTriggeringUnit", "createUnitAtPosition", "hideUiTextForEveryone", "playersAreFriendly", "hideGameSuggestionsForPlayer", "cos", "transformRegionDimensions", "makeUnitInvisibleToFriendlyPlayers", "setEntityAttributeMin", "entityHeight", "allUnitsOwnedByPlayer", "showInviteFriendsModal", "showCustomModalToPlayer", "lastSelectingDialogueOption", "playerAttributeMax", "triggeringItem", "getItemParticle", "allProjectilesAttachedToUnit", "showUiTextForEveryone", "forAllItems", "removePlayerFromPlayerGroup", "getPlayerAttribute", "playerIsControlledByHuman", "setUnitOwner", "getMapWidth", "updateItemQuantity", "applyForceOnEntityAngleLT", "setEntityState", "entityWidth", "hideUnitInPlayerMinimap", "selectedItemType", "getPlayerCount", "getItemCurrentlyHeldByUnit", "allItemsDroppedOnGround", "return", "runScript", "addUnitToUnitGroup", "humanPlayers", "lastUsedItem", "lastPlayerInput", "arctan", "concat", "getPlayerName", "getSourceItemOfProjectile", "type", "type", "triggeringRegion", "playerCameraSetZoom", "floor", "setUnitNameLabel", "getUnitTypeName", "openShopForPlayer", "y", "sqrt", "closeDialogueForPlayer", "comment", "createEntityAtPositionWithDimensions", "increaseVariableByNumber", "getMouseCursorPosition", "lastOverlappingUnit", "allItems", "allItemsAttachedToUnit", "getEntireMapRegion", "playerCameraTrackUnit", "castAbility", "playersAreHostile", "allItemsOwnedByUnit", "computerPlayers", "playEntityAnimation", "while", "allEntities", "lastPurchasedUnitType", "applyForceOnEntityXY", "showUnitInPlayerMinimap", "savePlayerData", "hideUnitNameLabelFromPlayer", "regionOverlapsWithRegion", "allItemTypesInGame", "triggeringPlayer", "getProjectileTypeOfProjectile", "allPlayers", "setPlayerAttribute", "updateUiTextForPlayer", "showUnitNameLabel", "closeShopForPlayer", "repeat", "stopMusic", "setVelocityOfEntityXY", "selectedRegion", "showUnitNameLabelToPlayer", "spawnItem", "createItemWithMaxQuantityAtPosition", "randItemType", "lastOverlappedUnit", "showMenu", "startAcceptingPlayers", "forAllEntities", "makePlayerSelectUnit", "setEntityAttribute", "lastCreatedItem", "lastCreatedProjectile", "forAllItemTypes", "createEntityForPlayerAtPositionWithDimensions", "getUnitCount", "lastTouchingUnit", "lastOverlappingItem", "getItemInInventorySlot", "updateUiTextForEveryone", "forAllProjectiles", "type", "angleBetweenPositions", "stopMusicForPlayer", "positionCamera", "createProjectileAtPosition", "getWidthOfRegion", "showMenuAndSelectCurrentServer", "getSourceUnitOfProjectile", "setFadingText", "changeScaleOfEntityBody", "entityBounds", "entityAttributeMin", "forAllRegions", "rotateEntityToRadiansLT", "str2num", "setPlayerAttributeMax", "setPlayerAttributeRegenerationRate", "getQuantityOfUnitTypeInUnitTypeGroup", "forAllUnitTypes", "centerOfRegion", "lastRaycastCollisionPos", "decreaseVariableByNumber", "y", "lastCastingUnit", "lastTouchedUnit", "selectedParticle", "allUnitsAttachedToUnit", "kickPlayer", "forAllPlayers", "removeUnitFromUnitGroup", "playersAreNeutral", "distanceBetweenPositions", "flipEntitySprite", "makeUnitInvisibleToNeutralPlayers", "entityAttributeMax", "getEntityPosition", "playerHasAdblockEnabled", "saveUnitData", "applyTorqueOnEntity", "giveNewItemToUnit", "playerAttributeMin", "startUsingItem", "moveEntity", "for", "sin", "x", "showMenuAndSelectBestServer", "getValueOfEntityVariable", "entitiesInRegion", "applyForceOnEntityXYRelative", "applyForceOnEntityXYLT", "attachEntityToEntity", "entityExists", "nameOfRegion", "undefined", "banPlayerFromChat", "getEntityVelocityY", "allUnitTypesInGame", "x", "randPos", "triggeringProj", "getUnitParticle", "changeUnitType", "addPlayerToPlayerGroup", "playMusicForPlayerRepeatedly", "showGameSuggestionsForPlayer", "isPositionInWall", "entitiesInRegionInFrontOfEntityAtDistance", "setEntityAttributeRegenerationRate", "lastPlayedTime", "makeUnitSelectItemAtSlot", "getItemTypeName", "getMax", "lastCreatedUnit", "getRotateSpeed", "owner", "allUnits", "stopUsingItem", "makeUnitVisible", "makeUnitInvisible", "break", "currentAmmo", "getHeightOfRegion", "changeScaleOfEntitySprite", "slice", "setPlayerName", "makeUnitPickupItemAtSlot", "dropItemInInventorySlot", "subString", "getItemMaxQuantity", "unbanPlayerFromChat", "abs", "changeDesc", "triggeringUnit", "getOwner", "selectedPlayer", "lastTouchedItem", "lastTouchedProj", "allUnitsAttachedToItem", "sendChatMessageToPlayer", "playAdForEveryone", "hideUiTextForPlayer", "showUiTextForPlayer", "playMusic", "assignPlayerType", "allProjectiles", "playMusicForPlayer", "if", "makeUnitVisibleToNeutralPlayers", "makeUnitVisibleToFriendlyPlayers", "makeUnitPickupItem", "region", "getEntityAttribute", "currentTimeStamp", "giveNewItemWithQuantityToUnit", "getEntityVelocityX", "defaultQuantityOfItemType", "getQuantityOfItemTypeInItemTypeGroup", "type", "selectedUnitType", "getNumberOfItemsPresent", "getMin", "selectedUnit", "lastOverlappingProj", "triggeringAttr", "allUnitsMountedOnUnit", "allUnitsInRegion", "dropAllItems", "useItemOnce", "stopAcceptingPlayers", "setEntityVelocityAtAngle", "setEntityAttributeMax", "getValueOfPlayerVariable", "allRegions", "maxValueOfItemType", "angleBetweenMouseAndWindowCenter", "setPlayerAttributeMin", "makePlayerTradeWithPlayer", "pow", "lastAttackedUnit", "lastAttackingUnit", "updateUiTextForTimeForPlayer", "getNumberOfUnitsOfUnitType", "aiMoveToPosition", "aiAttackUnit", "getNumberOfPlayersOfPlayerType", "changeSensorRadius", "ownerUnitOfSensor", "sensor", "getTriggeringSensor", "lastChatMessageSent", "loadPlayerDataAndApplyIt", "createFloatingText", "getLengthOfString", "setLastAttackedUnit", "setLastAttackingUnit", "setItemFireRate", "applyImpulseOnEntityXY", "toLowerCase", "stringStartsWith", "stringEndsWith", "replaceValuesInString", "lastAttackingItem", "playSoundForPlayer", "stopSoundForPlayer", "showDismissibleInputModalToPlayer", "getTimeString", "setItemName", "changeItemInventoryImage", "getItemDescription", "addAttributeBuffToUnit", "addPercentageAttributeBuffToUnit", "stunUnit", "removeStunFromUnit", "setLastAttackingItem", "mutePlayerMicrophone", "unmutePlayerMicrophone", "sendPostRequest", "loadUnitDataFromString", "loadPlayerDataFromString", "getUnitData", "getPlayerData", "getUnitId", "getPlayerId", "getUnitFromId", "getPlayerFromId", "getStringArrayLength", "getStringArrayElement", "insertStringArrayElement", "updateStringArrayElement", "removeStringArrayElement", "removeAllAttributeBuffs", "changeInventorySlotColor", "setOwnerUnitOfProjectile", "thisEntity", "entityName", "selectedInventorySlot", "log10", "addBotPlayer", "botPlayers", "enableAI", "disableAI", "isAIEnabled", "isBotPlayer", "isComputerPlayer", "entitiesBetweenTwoPositions", "unitSensorRadius", "aiGoIdle", "targetUnit", "sendCoinsToPlayer", "addChatFilter", "num2str", "sendCoinsToPlayer2", "playerIsCreator", "setMaxAttackRange", "setLetGoDistance", "setMaxTravelDistance", "getPlayerSelectedUnit", "toDegrees", "toRadians", "polarProjection", "editMapTile", "loadMapFromString", "getMapJson", "teleportEntity", "forAllDebris", "roleExistsForPlayer", "emitParticlesFromEntity", "emitParticlesAtPosition", "editMapTiles", "getMapTileId", "stringIsANumber", "setSourceItemOfProjectile", "getGlobalVariable", "lastReceivedPostResponse", "lastUpdatedVariableName", "getVariable", "str2obj", "elementFromObject", "obj2Str", "removeElement", "makePlayerSendChatMessage", "emptyObject", "addStringElement", "elementCount", "addObjectElement", "requestPost", "unitIsCarryingItemType", "startCastingAbility", "stopCastingAbility", "applyTorqueOnEntityToFacePosition", "changeRegionColor", "startMovingUnitUp", "startMovingUnitDown", "startMovingUnitLeft", "startMovingUnitRight", "stopMovingUnitX", "stopMovingUnitY", "openBackpackForPlayer", "closeBackpackForPlayer", "setUnitNameLabelColor", "getCameraPosition", "getCameraWidth", "getCameraHeight", "allUnitsOfUnitType", "forAllUnits", "allItemsOfItemType", "setUnitNameLabelColorForPlayer", "getDefaultAttributeValueOfUnitType", "playerCameraStopTracking", "hideUiElementForPlayer", "showUiElementForPlayer", "setUIElementHtml", "lastClickedUiElementId", "appendRealtimeCSSForPlayer", "updateRealtimeCSSForPlayer", "realtimeCSSOfPlayer", "mathCeiling", "stopMovingUnit", "toUpperCase", "getHighScoreOfPlayer", "isUnitMoving", "forIn", "addClassToUIElement", "removeClassFromUIElement", "isPlayerClient", "setCameraDeadzone", "purchaseItemFromShop", "getUnitType", "getItemType", "getProjectileType", "getSecondaryTouchPosition", "allProjectilesOfProjectileType", "unitTypeWidth", "unitTypeHeight", "notValue", "isPlayerOnMobile", "getPlayerUsername", "repeatWithDelay", "entityFacingAngle", "playersOfPlayerType", "sendSecurePostRequest", "openSkinShop", "openSkinSubmissionPage", "playerCameraSetPitch", "getRegionByName", "changeLayerOpacity", "forAllElementsInObject", "selectedElement", "objectContainsElement", "selectedElementsKey", "playMusicForPlayerAtTime", "getServerAge", "getServerStartTime", "mathRound"]
export const FUNC = 0
export const ATTR = 1
export const VAR = 2

export const languageDef = {
  defaultToken: "",
  number: /\d+(\.\d+)?/,
  keywords: KEYWORDS,
  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  digits: /\d+(_+\d+)*/,
  octaldigits: /[0-7]+(_+[0-7]+)*/,
  binarydigits: /[0-1]+(_+[0-1]+)*/,
  hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
  symbols: /[=><!~?:&|+\-*\/\^%]+/,
  regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
  typeKeywords: [
    'any', 'boolean', 'number', 'object', 'string', 'undefined'
  ],
  operators: [
    '<=', '>=', '==', '!=', '===', '!==', '=>', '+', '-', '**',
    '*', '/', '%', '++', '--', '<<', '</', '>>', '>>>', '&',
    '|', '^', '!', '~', '&&', '||', '?', ':', '=', '+=', '-=',
    '*=', '**=', '/=', '%=', '<<=', '>>=', '>>>=', '&=', '|=',
    '^=', '@',
  ],
  regexpesc: /\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,
  tokenizer: {
    root: [
      { include: "@whitespace" },
      { include: "@numbers" },
      { include: "@strings" },
      [/@\s*[a-zA-Z_\$][\w\$]*/, { token: 'annotation' }],
      // identifiers and keywords
      [/[a-z_$][\w$]*/, {
        cases: {
          '@typeKeywords': 'keyword',
          '@keywords': 'keyword',
          '@default': 'identifier'
        }
      }],
      // delimiters and operators
      [/[()\[\]]/, '@brackets'],
      [/[<>](?!@symbols)/, '@brackets'],
      [/@symbols/, {
        cases: {
          '@operators': 'delimiter',
          '@default': ''
        }
      }],
    ],

    string_double: [
      [/[^\\"]+/, 'string'],
      [/@escapes/, 'string.escape'],
      [/\\./, 'string.escape.invalid'],
      [/"/, 'string', '@pop']
    ],

    string_single: [
      [/[^\\']+/, 'string'],
      [/@escapes/, 'string.escape'],
      [/\\./, 'string.escape.invalid'],
      [/'/, 'string', '@pop']
    ],

    string_backtick: [
      [/\$\{/, { token: 'delimiter.bracket', next: '@bracketCounting' }],
      [/[^\\`$]+/, 'string'],
      [/@escapes/, 'string.escape'],
      [/\\./, 'string.escape.invalid'],
      [/`/, 'string', '@pop']
    ],

    comment: [
      [/[^\/*]+/, 'comment'],
      [/\/\*/, 'comment', '@push'],    // nested comment
      ["\\*/", 'comment', '@pop'],
      [/[\/*]/, 'comment']
    ],
    whitespace: [
      [/\s+/, "white"],
      [/\/\*/, 'comment', '@comment'],
      [/\/\/.*$/, 'comment'],
    ],
    numbers: [
      // numbers
      [/(@digits)[eE]([\-+]?(@digits))?/, 'number.float'],
      [/(@digits)\.(@digits)([eE][\-+]?(@digits))?/, 'number.float'],
      [/0[xX](@hexdigits)/, 'number.hex'],
      [/0[oO]?(@octaldigits)/, 'number.octal'],
      [/0[bB](@binarydigits)/, 'number.binary'],
      [/(@digits)/, 'number'],

      // delimiter: after number because of .\d floats
      [/[;,.]/, 'delimiter'],
    ],
    strings: [
      // strings
      [/"([^"\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
      [/'([^'\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
      [/"/, 'string', '@string_double'],
      [/'/, 'string', '@string_single'],
      [/`/, 'string', '@string_backtick'],
    ],
    bracketCounting: [
      [/\{/, 'delimiter.bracket', '@bracketCounting'],
      [/\}/, 'delimiter.bracket', '@pop'],
      { include: 'root' }
    ],

  },
} as ILanguage

// This config defines the editor's behavior.
export const configuration = {
  brackets: [
    ["{", "}"], ["[", "]"], ["(", ")"], ['"', '"'], ["'", "'"]
  ],
} as ILanguageConfiguration

export const OPTIONS: editor.IStandaloneEditorConstructionOptions = {
  quickSuggestions: true,
  glyphMargin: false,
  lineDecorationsWidth: 0,
  folding: false,
  fixedOverflowWidgets: false,
  acceptSuggestionOnEnter: "on",
  hover: {
    delay: 100,
  },
  roundedSelection: false,
  contextmenu: false,
  cursorStyle: "line-thin",
  occurrencesHighlight: false,
  links: false,
  minimap: { enabled: false },
  // see: https://github.com/microsoft/monaco-editor/issues/1746
  wordBasedSuggestions: true,
  // disable `Find`
  find: {
    addExtraSpaceOnTop: false,
    autoFindInSelection: "never",
    seedSearchStringFromSelection: "never",
  },
  fontSize: 16,
  fontWeight: "normal",
  wordWrap: "off",
  lineNumbers: "off",
  lineNumbersMinChars: 0,
  overviewRulerLanes: 0,
  overviewRulerBorder: false,
  hideCursorInOverviewRuler: true,
  scrollBeyondLastColumn: 0,
  scrollbar: {
    horizontal: "hidden",
    vertical: "hidden",
    // avoid can not scroll page when hover monaco
    alwaysConsumeMouseWheel: false,
  },
}