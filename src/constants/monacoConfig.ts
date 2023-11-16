import * as monaco from "monaco-editor";
import ILanguage = monaco.languages.IMonarchLanguage;
import ILanguageConfiguration = monaco.languages.LanguageConfiguration
import { editor } from "monaco-editor";

export const comment = /^\s*#([ =|].*)?$/
export const KEYWORDS = ["getItemInFrontOfUnit", "selectedProjectile", "getAttributeTypeOfAttribute", "playAdForPlayer", "randNumber", "setTimeOut", "facingAngle", "getMapHeight", "getEntityType", "getSelectedEntity", "rotateEntityToFacePosition", "destroyEntity", "setEntityDepth", "getItemAtSlot", "hideUnitFromPlayer", "showUnitToPlayer", "entitiesCollidingWithLastRaycast", "getLastPurchasedUnit", "sendChatMessage", "playSoundAtPosition", "pos", "toFixed", "getEntityState", "dropItemAtPosition", "applyForceOnEntityAngle", "showInputModalToPlayer", "getItemQuantity", "isPlayerLoggedIn", "openDialogueForPlayer", "continue", "openWebsiteForPlayer", "setEntityLifeSpan", "selectedItem", "hideUnitNameLabel", "setTriggeringUnit", "createUnitAtPosition", "hideUiTextForEveryone", "playersAreFriendly", "hideGameSuggestionsForPlayer", "cos", "transformRegionDimensions", "makeUnitInvisibleToFriendlyPlayers", "setEntityAttributeMin", "entityHeight", "allUnitsOwnedByPlayer", "showInviteFriendsModal", "showCustomModalToPlayer", "getLastPlayerSelectingDialogueOption", "playerAttributeMax", "getTriggeringItem", "getItemParticle", "allProjectilesAttachedToUnit", "showUiTextForEveryone", "forAllItems", "removePlayerFromPlayerGroup", "getPlayerAttribute", "playerIsControlledByHuman", "setUnitOwner", "getMapWidth", "updateItemQuantity", "applyForceOnEntityAngleLT", "setEntityState", "entityWidth", "hideUnitInPlayerMinimap", "selectedItemType", "getPlayerCount", "getItemCurrentlyHeldByUnit", "allItemsDroppedOnGround", "return", "runScript", "addUnitToUnitGroup", "humanPlayers", "lastUsedItem", "playerCustomInput", "arctan", "concat", "getPlayerName", "getSourceItemOfProjectile", "type", "type", "getTriggeringRegion", "playerCameraSetZoom", "floor", "setUnitNameLabel", "getUnitTypeName", "openShopForPlayer", "y", "sqrt", "closeDialogueForPlayer", "comment", "createEntityAtPositionWithDimensions", "increaseVariableByNumber", "getMouseCursorPosition", "getLastOverlappingUnit", "allItems", "allItemsAttachedToUnit", "getEntireMapRegion", "playerCameraTrackUnit", "castAbility", "playersAreHostile", "allItemsOwnedByUnit", "computerPlayers", "playEntityAnimation", "while", "allEntities", "lastPurchasedUnitTypetId", "applyForceOnEntityXY", "showUnitInPlayerMinimap", "savePlayerData", "hideUnitNameLabelFromPlayer", "regionOverlapsWithRegion", "allItemTypesInGame", "getTriggeringPlayer", "getProjectileTypeOfProjectile", "allPlayers", "setPlayerAttribute", "updateUiTextForPlayer", "showUnitNameLabel", "closeShopForPlayer", "repeat", "stopMusic", "setVelocityOfEntityXY", "selectedRegion", "showUnitNameLabelToPlayer", "spawnItem", "createItemWithMaxQuantityAtPosition", "randItemType", "getLastOverlappedUnit", "showMenu", "startAcceptingPlayers", "forAllEntities", "makePlayerSelectUnit", "setEntityAttribute", "getLastCreatedItem", "getLastCreatedProjectile", "forAllItemTypes", "createEntityForPlayerAtPositionWithDimensions", "getUnitCount", "getLastTouchingUnit", "getLastOverlappingItem", "getItemInInventorySlot", "updateUiTextForEveryone", "forAllProjectiles", "type", "angleBetweenPositions", "stopMusicForPlayer", "positionCamera", "createProjectileAtPosition", "getWidthOfRegion", "showMenuAndSelectCurrentServer", "getSourceUnitOfProjectile", "setFadingText", "changeScaleOfEntityBody", "entityBounds", "entityAttributeMin", "forAllRegions", "rotateEntityToRadiansLT", "str2num", "setPlayerAttributeMax", "setPlayerAttributeRegenerationRate", "getQuantityOfUnitTypeInUnitTypeGroup", "forAllUnitTypes", "centerOfRegion", "entityLastRaycastCollisionPosition", "decreaseVariableByNumber", "y", "getLastCastingUnit", "getLastTouchedUnit", "selectedParticle", "allUnitsAttachedToUnit", "kickPlayer", "forAllPlayers", "removeUnitFromUnitGroup", "playersAreNeutral", "distanceBetweenPositions", "flipEntitySprite", "makeUnitInvisibleToNeutralPlayers", "entityAttributeMax", "getEntityPosition", "playerHasAdblockEnabled", "saveUnitData", "applyTorqueOnEntity", "giveNewItemToUnit", "playerAttributeMin", "startUsingItem", "moveEntity", "for", "sin", "x", "showMenuAndSelectBestServer", "getValueOfEntityVariable", "entitiesInRegion", "applyForceOnEntityXYRelative", "applyForceOnEntityXYLT", "attachEntityToEntity", "entityExists", "nameOfRegion", "undefined", "banPlayerFromChat", "getEntityVelocityY", "allUnitTypesInGame", "x", "randPos", "getTriggeringProjectile", "getUnitParticle", "changeUnitType", "addPlayerToPlayerGroup", "playMusicForPlayerRepeatedly", "showGameSuggestionsForPlayer", "isPositionInWall", "entitiesInRegionInFrontOfEntityAtDistance", "setEntityAttributeRegenerationRate", "lastPlayedTime", "makeUnitSelectItemAtSlot", "getItemTypeName", "getMax", "getLastCreatedUnit", "getRotateSpeed", "owner", "allUnits", "stopUsingItem", "makeUnitVisible", "makeUnitInvisible", "break", "currentAmmo", "getHeightOfRegion", "changeScaleOfEntitySprite", "slice", "setPlayerName", "makeUnitPickupItemAtSlot", "dropItemInInventorySlot", "subString", "getItemMaxQuantity", "unbanPlayerFromChat", "abs", "changeDesc", "getTriggeringUnit", "getOwner", "selectedPlayer", "getLastTouchedItem", "getLastTouchedProjectile", "allUnitsAttachedToItem", "sendChatMessageToPlayer", "playAdForEveryone", "hideUiTextForPlayer", "showUiTextForPlayer", "playMusic", "assignPlayerType", "allProjectiles", "playMusicForPlayer", "condition", "makeUnitVisibleToNeutralPlayers", "makeUnitVisibleToFriendlyPlayers", "makeUnitPickupItem", "region", "getEntityAttribute", "currentTimeStamp", "giveNewItemWithQuantityToUnit", "getEntityVelocityX", "defaultQuantityOfItemType", "getQuantityOfItemTypeInItemTypeGroup", "type", "selectedUnitType", "getNumberOfItemsPresent", "getMin", "selectedUnit", "getLastOverlappingProjectile", "getTriggeringAttribute", "allUnitsMountedOnUnit", "allUnitsInRegion", "dropAllItems", "useItemOnce", "stopAcceptingPlayers", "setEntityVelocityAtAngle", "setEntityAttributeMax", "getValueOfPlayerVariable", "allRegions", "maxValueOfItemType", "angleBetweenMouseAndWindowCenter", "setPlayerAttributeMin", "makePlayerTradeWithPlayer", "pow", "getLastAttackedUnit", "getLastAttackingUnit", "updateUiTextForTimeForPlayer", "getNumberOfUnitsOfUnitType", "aiMoveToPosition", "aiAttackUnit", "getNumberOfPlayersOfPlayerType", "changeSensorRadius", "ownerUnitOfSensor", "sensor", "getTriggeringSensor", "getLastChatMessageSentByPlayer", "loadPlayerDataAndApplyIt", "createFloatingText", "getLengthOfString", "setLastAttackedUnit", "setLastAttackingUnit", "setItemFireRate", "applyImpulseOnEntityXY", "toLowerCase", "stringStartsWith", "stringEndsWith", "replaceValuesInString", "getLastAttackingItem", "playSoundForPlayer", "stopSoundForPlayer", "showDismissibleInputModalToPlayer", "getTimeString", "setItemName", "changeItemInventoryImage", "getItemDescription", "addAttributeBuffToUnit", "addPercentageAttributeBuffToUnit", "stunUnit", "removeStunFromUnit", "setLastAttackingItem", "mutePlayerMicrophone", "unmutePlayerMicrophone", "sendPostRequest", "loadUnitDataFromString", "loadPlayerDataFromString", "getUnitData", "getPlayerData", "getUnitId", "getPlayerId", "getUnitFromId", "getPlayerFromId", "getStringArrayLength", "getStringArrayElement", "insertStringArrayElement", "updateStringArrayElement", "removeStringArrayElement", "removeAllAttributeBuffs", "changeInventorySlotColor", "setOwnerUnitOfProjectile", "thisEntity", "entityName", "selectedInventorySlot", "log10", "addBotPlayer", "botPlayers", "enableAI", "disableAI", "isAIEnabled", "isBotPlayer", "isComputerPlayer", "entitiesBetweenTwoPositions", "unitSensorRadius", "aiGoIdle", "targetUnit", "sendCoinsToPlayer", "addChatFilter", "num2str", "sendCoinsToPlayer2", "playerIsCreator", "setMaxAttackRange", "setLetGoDistance", "setMaxTravelDistance", "getPlayerSelectedUnit", "toDegrees", "toRadians", "polarProjection", "editMapTile", "loadMapFromString", "getMapJson", "teleportEntity", "forAllDebris", "roleExistsForPlayer", "emitParticlesFromEntity", "emitParticlesAtPosition", "editMapTiles", "getMapTileId", "stringIsANumber", "setSourceItemOfProjectile", "getGlobalVariable", "lastReceivedPostResponse", "lastUpdatedVariableName", "getVariable", "str2obj", "elementFromObject", "obj2Str", "removeElement", "makePlayerSendChatMessage", "emptyObject", "addStringElement", "elementCount", "addObjectElement", "requestPost", "unitIsCarryingItemType", "startCastingAbility", "stopCastingAbility", "applyTorqueOnEntityToFacePosition", "changeRegionColor", "startMovingUnitUp", "startMovingUnitDown", "startMovingUnitLeft", "startMovingUnitRight", "stopMovingUnitX", "stopMovingUnitY", "openBackpackForPlayer", "closeBackpackForPlayer", "setUnitNameLabelColor", "getCameraPosition", "getCameraWidth", "getCameraHeight", "allUnitsOfUnitType", "forAllUnits", "allItemsOfItemType", "allProjectilesofProjectileType", "setUnitNameLabelColorForPlayer"]


export const languageDef = {
  defaultToken: "",
  number: /\d+(\.\d+)?/,
  keywords: KEYWORDS,
  tokenizer: {
    root: [
      [/\w+/, { cases: { "@keywords": "keyword" } }],
      { include: "@whitespace" },
      { include: "@numbers" },
      { include: "@strings" }
    ],
    whitespace: [
      [/\s+/, "white"],
    ],
    numbers: [
      [/@number/, "number"],
    ],
    strings: [
      [/"([^"]*)"/, "string.escape"],
      [/'([^"]*)'/, "string.escape"]
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
  renderLineHighlight: "none",
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