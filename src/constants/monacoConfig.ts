import * as monaco from "monaco-editor";
import ILanguage = monaco.languages.IMonarchLanguage;
import ILanguageConfiguration = monaco.languages.LanguageConfiguration

export const comment = /^\s*#([ =|].*)?$/
export const KEYWORDS = ["getItemInFrontOfUnit","selectedProjectile","getAttributeTypeOfAttribute","playAdForPlayer","getRandomNumberBetween","setTimeOut","unitsFacingAngle","getMapHeight","getEntityType","getSelectedEntity","rotateEntityToFacePosition","destroyEntity","setEntityDepth","getItemAtSlot","hideUnitFromPlayer","showUnitToPlayer","entitiesCollidingWithLastRaycast","getLastPurchasedUnit","sendChatMessage","playSoundAtPosition","xyCoordinate","toFixed","getEntityState","dropItemAtPosition","applyForceOnEntityAngle","showInputModalToPlayer","getItemQuantity","isPlayerLoggedIn","openDialogueForPlayer","continue","openWebsiteForPlayer","setEntityLifeSpan","selectedItem","hideUnitNameLabel","setTriggeringUnit","createUnitAtPosition","hideUiTextForEveryone","playersAreFriendly","hideGameSuggestionsForPlayer","cos","transformRegionDimensions","makeUnitInvisibleToFriendlyPlayers","setEntityAttributeMin","entityHeight","allUnitsOwnedByPlayer","showInviteFriendsModal","showCustomModalToPlayer","getLastPlayerSelectingDialogueOption","playerAttributeMax","getTriggeringItem","getItemParticle","allProjectilesAttachedToUnit","showUiTextForEveryone","forAllItems","removePlayerFromPlayerGroup","getPlayerAttribute","playerIsControlledByHuman","setUnitOwner","getMapWidth","updateItemQuantity","applyForceOnEntityAngleLT","setEntityState","entityWidth","hideUnitInPlayerMinimap","selectedItemType","getPlayerCount","getItemCurrentlyHeldByUnit","allItemsDroppedOnGround","return","runScript","addUnitToUnitGroup","humanPlayers","lastUsedItem","playerCustomInput","arctan","concat","getPlayerName","getSourceItemOfProjectile","getUnitTypeOfUnit","getItemTypeOfItem","getTriggeringRegion","playerCameraSetZoom","mathFloor","setUnitNameLabel","getUnitTypeName","openShopForPlayer","getYCoordinateOfRegion","squareRoot","closeDialogueForPlayer","comment","createEntityAtPositionWithDimensions","increaseVariableByNumber","getMouseCursorPosition","getLastOverlappingUnit","allItems","allItemsAttachedToUnit","getEntireMapRegion","playerCameraTrackUnit","castAbility","playersAreHostile","allItemsOwnedByUnit","computerPlayers","playEntityAnimation","while","allEntities","lastPurchasedUnitTypetId","applyForceOnEntityXY","showUnitInPlayerMinimap","savePlayerData","hideUnitNameLabelFromPlayer","regionOverlapsWithRegion","allItemTypesInGame","getTriggeringPlayer","getProjectileTypeOfProjectile","allPlayers","setPlayerAttribute","updateUiTextForPlayer","showUnitNameLabel","closeShopForPlayer","repeat","stopMusic","setVelocityOfEntityXY","selectedRegion","showUnitNameLabelToPlayer","spawnItem","createItemWithMaxQuantityAtPosition","getRandomItemTypeFromItemTypeGroup","getLastOverlappedUnit","showMenu","startAcceptingPlayers","forAllEntities","makePlayerSelectUnit","setEntityAttribute","getLastCreatedItem","getLastCreatedProjectile","forAllItemTypes","createEntityForPlayerAtPositionWithDimensions","getUnitCount","getLastTouchingUnit","getLastOverlappingItem","getItemInInventorySlot","updateUiTextForEveryone","forAllUnits","forAllProjectiles","playerTypeOfPlayer","angleBetweenPositions","stopMusicForPlayer","positionCamera","createProjectileAtPosition","getWidthOfRegion","showMenuAndSelectCurrentServer","getSourceUnitOfProjectile","setFadingTextOfUnit","changeScaleOfEntityBody","entityBounds","entityAttributeMin","forAllRegions","rotateEntityToRadiansLT","stringToNumber","setPlayerAttributeMax","setPlayerAttributeRegenerationRate","getQuantityOfUnitTypeInUnitTypeGroup","forAllUnitTypes","centerOfRegion","entityLastRaycastCollisionPosition","decreaseVariableByNumber","getPositionY","getLastCastingUnit","getLastTouchedUnit","selectedParticle","allUnitsAttachedToUnit","kickPlayer","forAllPlayers","removeUnitFromUnitGroup","playersAreNeutral","distanceBetweenPositions","flipEntitySprite","makeUnitInvisibleToNeutralPlayers","entityAttributeMax","getEntityPosition","playerHasAdblockEnabled","saveUnitData","applyTorqueOnEntity","giveNewItemToUnit","playerAttributeMin","startUsingItem","moveEntity","for","sin","getXCoordinateOfRegion","showMenuAndSelectBestServer","getValueOfEntityVariable","entitiesInRegion","applyForceOnEntityXYRelative","applyForceOnEntityXYLT","attachEntityToEntity","entityExists","nameOfRegion","undefinedValue","banPlayerFromChat","getEntityVelocityY","allUnitTypesInGame","getPositionX","getRandomPositionInRegion","getTriggeringProjectile","getUnitParticle","changeUnitType","addPlayerToPlayerGroup","playMusicForPlayerRepeatedly","showGameSuggestionsForPlayer","isPositionInWall","entitiesInRegionInFrontOfEntityAtDistance","setEntityAttributeRegenerationRate","lastPlayedTimeOfPlayer","makeUnitSelectItemAtSlot","getItemTypeName","getMax","getLastCreatedUnit","getRotateSpeed","getOwnerOfItem","allUnits","stopUsingItem","makeUnitVisible","makeUnitInvisible","break","getCurrentAmmoOfItem","getHeightOfRegion","changeScaleOfEntitySprite","substringOf","setPlayerName","makeUnitPickupItemAtSlot","dropItemInInventorySlot","subString","getItemMaxQuantity","unbanPlayerFromChat","absoluteValueOfNumber","changeDescriptionOfItem","getTriggeringUnit","getOwner","selectedPlayer","getLastTouchedItem","getLastTouchedProjectile","allUnitsAttachedToItem","sendChatMessageToPlayer","playAdForEveryone","hideUiTextForPlayer","showUiTextForPlayer","playMusic","assignPlayerType","allProjectiles","playMusicForPlayer","condition","makeUnitVisibleToNeutralPlayers","makeUnitVisibleToFriendlyPlayers","makeUnitPickupItem","dynamicRegion","getEntityAttribute","currentTimeStamp","giveNewItemWithQuantityToUnit","getEntityVelocityX","defaultQuantityOfItemType","getQuantityOfItemTypeInItemTypeGroup","getRandomUnitTypeFromUnitTypeGroup","selectedUnitType","getNumberOfItemsPresent","getMin","selectedUnit","getLastOverlappingProjectile","getTriggeringAttribute","allUnitsMountedOnUnit","allUnitsInRegion","dropAllItems","useItemOnce","stopAcceptingPlayers","setEntityVelocityAtAngle","setEntityAttributeMax","getValueOfPlayerVariable","allRegions","maxValueOfItemType","angleBetweenMouseAndWindowCenter","setPlayerAttributeMin","makePlayerTradeWithPlayer","getExponent","getLastAttackedUnit","getLastAttackingUnit","updateUiTextForTimeForPlayer","getNumberOfUnitsOfUnitType","aiMoveToPosition","aiAttackUnit","getNumberOfPlayersOfPlayerType","changeSensorRadius","ownerUnitOfSensor","getSensorOfUnit","getTriggeringSensor","getLastChatMessageSentByPlayer","loadPlayerDataAndApplyIt","createFloatingText","getLengthOfString","setLastAttackedUnit","setLastAttackingUnit","setItemFireRate","applyImpulseOnEntityXY","toLowerCase","stringStartsWith","stringEndsWith","replaceValuesInString","getLastAttackingItem","playSoundForPlayer","stopSoundForPlayer","showDismissibleInputModalToPlayer","getTimeString","setItemName","changeItemInventoryImage","getItemDescription","addAttributeBuffToUnit","addPercentageAttributeBuffToUnit","stunUnit","removeStunFromUnit","setLastAttackingItem","mutePlayerMicrophone","unmutePlayerMicrophone","sendPostRequest","loadUnitDataFromString","loadPlayerDataFromString","getUnitData","getPlayerData","getUnitId","getPlayerId","getUnitFromId","getPlayerFromId","getStringArrayLength","getStringArrayElement","insertStringArrayElement","updateStringArrayElement","removeStringArrayElement","removeAllAttributeBuffs","changeInventorySlotColor","setOwnerUnitOfProjectile","thisEntity","entityName","selectedInventorySlot","log10","addBotPlayer","botPlayers","enableAI","disableAI","isAIEnabled","isBotPlayer","isComputerPlayer","entitiesBetweenTwoPositions","unitSensorRadius","aiGoIdle","targetUnit","sendCoinsToPlayer","addChatFilter","numberToString","sendCoinsToPlayer2","playerIsCreator","setMaxAttackRange","setLetGoDistance","setMaxTravelDistance","getPlayerSelectedUnit","toDegrees","toRadians","getPositionInFrontOfPosition","editMapTile","loadMapFromString","getMapJson","teleportEntity","forAllDebris","roleExistsForPlayer","emitParticlesFromEntity","emitParticlesAtPosition","editMapTiles","getMapTileId","stringIsANumber","setSourceItemOfProjectile","getGlobalVariable","lastReceivedPostResponse","lastUpdatedVariableName","getVariable","stringToObject","elementFromObject","objectToString","removeElement","makePlayerSendChatMessage","emptyObject","addStringElement","elementCount","addObjectElement","requestPost","unitIsCarryingItemType","startCastingAbility","stopCastingAbility","applyTorqueOnEntityToFacePosition","changeRegionColor","startMovingUnitUp","startMovingUnitDown","startMovingUnitLeft","startMovingUnitRight","stopMovingUnitX","stopMovingUnitY","openBackpackForPlayer","closeBackpackForPlayer","setUnitNameLabelColor","getCameraPosition"]
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